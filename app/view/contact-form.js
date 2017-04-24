export default class ContactFormView {
  constructor(el, store) {
    this.el = el;
    this.store = store;
  }

  // Not exactly sure about the keyword mounted. Listen for hitting the page.
  mounted() {
    // do I need "this" b/c of new scope?
    this.el.addEventListener('submit', (event)  => {
      // stops from reloading #noserver
      event.preventDefault();

      console.log('HELLO');

      this.store.dispatch({
        type: 'CONTACT@CREATE',
        data: {
          firstName: 'ABC',
          lastName: ''
        }
        // should be data b/c reducer takes the action object property called data
      });
    });
  }
}
