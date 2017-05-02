import { JpinterviewPage } from './app.po';

describe('jpinterview App', () => {
  let page: JpinterviewPage;

  beforeEach(() => {
    page = new JpinterviewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
