export default class Player {
  constructor(json) {
    this.cursors = json.cursors;
    this.href = json.href;
    this.items = json.items;
    this.limit = json.limit;
    this.next = json.next;
  }
}
