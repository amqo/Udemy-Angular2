import { VoterComponentPage } from './app.po';

describe('voter-component App', function() {
  let page: VoterComponentPage;

  beforeEach(() => {
    page = new VoterComponentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
