import { SharedModulePage } from './app.po';

describe('shared-module App', function() {
  let page: SharedModulePage;

  beforeEach(() => {
    page = new SharedModulePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
