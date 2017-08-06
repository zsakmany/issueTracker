import { IssueTrackerPage } from './app.po';

describe('issue-tracker App', () => {
  let page: IssueTrackerPage;

  beforeEach(() => {
    page = new IssueTrackerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to blackguard!!');
  });
});
