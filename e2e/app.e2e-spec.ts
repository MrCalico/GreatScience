import { GreatSciencePage } from './app.po';

describe('great-science App', function() {
  let page: GreatSciencePage;

  beforeEach(() => {
    page = new GreatSciencePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
