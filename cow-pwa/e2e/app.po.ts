import { browser, by, element } from 'protractor';

export class CowPwaPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cow-root h1')).getText();
  }
}
