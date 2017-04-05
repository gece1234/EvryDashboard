import { DashboardAngularClientPage } from './app.po';

describe('dashboard-angular-client App', () => {
  let page: DashboardAngularClientPage;

  beforeEach(() => {
    page = new DashboardAngularClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
