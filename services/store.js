import { observable, action } from 'mobx';
import { js, php, elixir } from '../data/languages';

export default class Store {
  @observable lang = 1;

  @observable languages = [js, php, elixir];

  @action.bound setLanguage(lang) {
    this.lang = lang;
  }
}
