export default class Page {
  public async open(path: string) {
    return await global.page.goto(path);
  }
}