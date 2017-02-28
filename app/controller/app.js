export default class AppController {
  constructor(element, store) {
    this.el = el;
    this.store = store;
  }

  created() {
    this.store.subscribe(() => {   // What are we subscribing/listening to??
      const contacts = this.store.getState().contacts;
      // we set a constant for w/e is currently is the contacts array.
      window.localStorage.contacts = JSON.stringify(contacts);
    });


  }
}
