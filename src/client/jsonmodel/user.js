export default class UserModel {
  constructor(json){
    this.id            = json.id;
    this.name          = json.name;
    this.email         = json.email;
    this.external_urls = json.external_urls;
    this.followers     = json.followers;
    this.href          = json.href;
    this.images        = json.images;
  }
}
