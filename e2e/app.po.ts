import { browser, by, element } from 'protractor';

export class IssueTrackerPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('blackguard-root h1')).getText();
  }
}
