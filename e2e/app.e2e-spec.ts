import { ForformcontrolPage } from './app.po';

describe('forformcontrol App', () => {
  let page: ForformcontrolPage;

  beforeEach(() => {
    page = new ForformcontrolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
