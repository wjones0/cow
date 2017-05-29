import { CowPwaPage } from './app.po';

describe('cow-pwa App', () => {
  let page: CowPwaPage;

  beforeEach(() => {
    page = new CowPwaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('cow works!');
  });
});
