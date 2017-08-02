import { ListingPPage } from './app.po';

describe('listing-p App', () => {
  let page: ListingPPage;

  beforeEach(() => {
    page = new ListingPPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
