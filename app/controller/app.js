import ContactFormView from '../view/contact-form';
import ContactListView from '../view/contact-list';

export default class AppController {
  // all classes have a constructor
  constructor(el, store) {
    // "this" saves to the current instance of the app
    this.el = el;
    this.store = store;

    this.contactFormView = new ContactFormView(this.el.querySelector('.contact-form'), store);
    this.contactListView = new ContactListView(this.el.querySelector('.grid'), store);
  }

  created() {
    this.store.subscribe(() => {   // subscribing to any changes
      // This is the current contacts array in the store state
      const contacts = this.store.getState().contacts;
      // saving a string version of current state to local storage
      window.localStorage.contacts = JSON.stringify(contacts);
    });

    this.contactFormView.mounted();
    this.contactListView.mounted();

    this.store.dispatch({
      type: 'CONTACT@FIND_ALL',
      // needed b/c it was stringified?
      data: JSON.parse(window.localStorage.contacts || '[]')
    });
  }
}
