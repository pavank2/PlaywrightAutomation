import data from '../data/data.json';

export class Helper {
constructEmailString() {
    return (data.register.email + Math.floor((Math.random() * 10000) + 1)+"@gmail.com");
  }
}