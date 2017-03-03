import 'whatwg-fetch';
import store from './store';
import AppController from './controller/app';

const appElement = document.querySelector('.app');

// We use "new" because we are using a class constructor
const app = new AppController(appElement, store);

app.created();
