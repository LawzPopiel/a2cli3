import { A2cli3Page } from './app.po';

describe('a2cli3 App', function() {
  let page: A2cli3Page;

  beforeEach(() => {
    page = new A2cli3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
