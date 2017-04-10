class Item {
  constructor(data, store) {
    this.data = data;
    this.store = store;

    this.el = document.createElement('.li');
    this.el.classList.add('.grid-item');
    this.el.innerHTML = `<div class="contact-card">
      <h2 class="name">Will Pacetti</h2>
      <p class="address">555 bad st.</p>
      <p class="address">Dallas, ID</p>
      <input type="submit" class="delete">
    </div>`;
  }

  render() {
    this.el.querySelector('.name').innerText = this.data.name;
    this.el.querySelector('.address').innerText = this.data.address;
    this.el.querySelector('.state').innerText = this.data.state;
  }
}

export default class ContactList {
  constructor(el, store) {
    this.el = el;
    this.store = store;
  }

  mounted() {
    this.store.subscribe(() => {
      this.render();
    });
  }

  render() {
    // clears list
    this.el.innerHTML = '';

    const contacts = this.store.getstate().contacts;
    contacts.forEach((curr) => {
      const item = new Item(curr, this.store);
      this.item.render();
      // this.el is the list.
      this.el.appendChild(item.el);
      // item.el is an (.li)?
    });
  }
}
