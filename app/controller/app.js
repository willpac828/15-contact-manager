export default class AppController {
  // all classes have a constructor
  constructor(el, store) {
    // "this" saves to the current instance of the app
    this.el = el;
    this.store = store;
  }

  created() {
    this.store.subscribe(() => {   // subscribing to any changes
      const contacts = this.store.getState().contacts;
      // we set a constant for w/e is currently is the contacts array.
      window.localStorage.contacts = JSON.stringify(contacts);
      // saving a string version of current state to local storage
    });

    this.store.dispatch({
      type: 'CONTACT@FIND_ALL',
      contacts: JSON.parse(window.localStorage.contacts)
    });
  }
}
