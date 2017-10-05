export default class User {
  constructor(json){
    this.name          = json.name;
    this.email         = json.display_name;
    this.external_urls = json.external_urls;
    this.followers     = json.followers;
    this.href          = json.href;
    this.images        = json.id;
  }
}
