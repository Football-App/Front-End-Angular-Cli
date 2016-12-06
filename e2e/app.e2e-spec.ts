import { FootballFrontendPage } from './app.po';

describe('football-frontend App', function() {
  let page: FootballFrontendPage;

  beforeEach(() => {
    page = new FootballFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
