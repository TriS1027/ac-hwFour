import { HwFourPage } from './app.po';

describe('hw-four App', () => {
  let page: HwFourPage;

  beforeEach(() => {
    page = new HwFourPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
