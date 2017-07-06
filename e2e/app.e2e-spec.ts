import { MusicForwardPage } from './app.po';

describe('music-forward App', () => {
  let page: MusicForwardPage;

  beforeEach(() => {
    page = new MusicForwardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
