import { Stream.SurfPage } from './app.po';

describe('stream.surf App', () => {
  let page: Stream.SurfPage;

  beforeEach(() => {
    page = new Stream.SurfPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
