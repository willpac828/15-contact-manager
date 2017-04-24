class ItemView {
  constructor(data, store) {
    this.data = data;
    this.store = store;

    this.el = document.createElement('DIV');
    this.el.classList.add('.grid-item');
    this.el.innerHTML =
    `<div class="contact-card">
      <h2 class="name">Will Pacetti</h2>
      <p class="address">555 bad st.</p>
      <p class="state">Dallas, ID</p>
      <input type="submit" class="delete">
    </div>`;
  }

  render() {
    // where is this data object?
    this.el.querySelector('.name').innerText = this.data.name;
    this.el.querySelector('.address').innerText = this.data.address;
    this.el.querySelector('.state').innerText = this.data.state;
  }
}

export default class ContactListView {
  constructor(el, store) {
    this.el = el;
    this.store = store;
  }

  mounted() {
    this.store.subscribe(() => {
      // anything else here?
      this.render();
    });
  }

  render() {
    // clears list
    this.el.innerHTML = '';

    const contacts = this.store.getState().contacts;
    // looping thru all of the contacts
    contacts.forEach((current) => {
      const item = new ItemView(current, this.store);
      item.render();

      // this.el is the list.
      this.el.appendChild(item.el);
      // item.el is an (.li)?
    });
  }
}
