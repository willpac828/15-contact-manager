export default class ContactFormView {
  constructor(el, store) {
    this.el = el;
    this.store = store;
  }

  // Not exactly sure about the keyword mounted. Listen for hitting the page.
  mounted() {
    this.el.addEventListener('submit', (event)  => {
      // stops from reloading #noserver
      event.preventDefault();

      this.store.dispatch({
        type: 'CONTACT@CREATE',

        data // should be data b/c reducer takes the action object property called data
      });
    });
  }
}
