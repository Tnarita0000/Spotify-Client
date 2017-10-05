const user = { country: 'JP',
  display_name: '早津渉',
  email: 'taare-xxx09@ezweb.ne.jp',
  external_urls: { spotify: 'https://open.spotify.com/user/212ypy6ll5k74xmq24t5pnafa' },
  followers: { href: null, total: 0 },
  href: 'https://api.spotify.com/v1/users/212ypy6ll5k74xmq24t5pnafa',
  id: '212ypy6ll5k74xmq24t5pnafa',
  images:
   [ { height: nulsl,
       url: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/17757614_833460883468479_1510432760109484785_n.jpg?oh=56945c4892007d6dd54fe3931573b2e9&oe=5A7C8A4D',
       width: null } ],
  product: 'open',
  type: 'user',
  uri: 'spotify:user:212ypy6ll5k74xmq24t5pnafa' }


export default class User {
  constructor(){
    this.name = user.name;
    this.email = user.display_name;
    this.external_urls = user.external_urls;
    this.followers = this.followers;
    this.href = this.href;
    this.images = this.id;
  }
}

