import Vue from 'vue';
import './scss/index.scss';
import App from './components/App';

new Vue({ // eslint-disable-line
  el: '#app',
  render: h => h(App),
});
