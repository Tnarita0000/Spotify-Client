export default class Playlists {
  constructor(json) {
    this.href     = json.href;
    this.items    = json.items;
    this.limit    = json.limit;
    this.next     = json.next;
    this.offset   = json.offset;
    this.previous = json.previous;
    this.total    = json.total;
  }
}
