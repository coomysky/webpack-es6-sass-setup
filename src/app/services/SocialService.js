import { scanStore }  from '../redux';
import { setLoginSocials } from '../redux/scanJobsDuck';

export default class SocialService {
  constructor() {
    this.scanStore = scanStore;
    this.socialDomainsObj = [{
          domain: "https://squareup.com",
          redirect: "/login?return_to=%2Ffavicon.ico",
          name: "Square",
          fa: "fas fa-user-circle"
      }, {
          domain: "https://twitter.com",
          redirect: "/login?redirect_after_login=%2Ffavicon.ico",
          name: "Twitter",
          fa: "fab fa-twitter"
      }, {
          domain: "https://www.facebook.com",
          redirect: "/login.php?next=https%3A%2F%2Fwww.facebook.com%2Ffavicon.ico%3F_rdr%3Dp",
          name: "Facebook",
          fa: "fab fa-facebook"
      }, {
          domain: "https://accounts.google.com",
          redirect: "/ServiceLogin?passive=true&continue=https%3A%2F%2Fwww.google.com%2Ffavicon.ico&uilel=3&hl=en&service=mail",
          name: "Gmail",
          fa: "fab fa-google"
      }, {
          domain: "https://accounts.google.com",
          redirect: "/ServiceLogin?passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Ffavicon.ico&uilel=3&hl=en&service=youtube",
          name: "Youtube",
          fa: "fab fa-youtube"
      }, {
          domain: "https://plus.google.com",
          redirect: "/up/accounts/upgrade/?continue=https://plus.google.com/favicon.ico",
          name: "Google Plus",
          fa: "fab fa-google-plus-g"
      }, {
          domain: "https://login.skype.com",
          redirect: "/login?message=signin_continue&redirect_uri=https%3A%2F%2Fsecure.skype.com%2Ffavicon.ico",
          name: "Skype",
          fa: "fab fa-skype"
      }, {
          domain: "https://www.spotify.com",
          redirect: "/en/login/?forward_url=https%3A%2F%2Fwww.spotify.com%2Ffavicon.ico",
          name: "Spotify",
          fa: "fab fa-spotify"
      }, {
          domain: "https://www.reddit.com",
          redirect: "/login?dest=https%3A%2F%2Fwww.reddit.com%2Ffavicon.ico",
          name: "Reddit",
          fa: "fab fa-reddit"
      }, {
          domain: "https://www.tumblr.com",
          redirect: "/login?redirect_to=%2Ffavicon.ico",
          name: "Tumblr",
          fa: "fab fa-tumblr"
      }, {
          domain: "https://www.expedia.de",
          redirect: "/user/login?ckoflag=0&selc=0&uurl=qscr%3Dreds%26rurl%3D%252Ffavicon.ico",
          name: "Expedia",
          fa: "fas fa-user-circle"
      }, {
          domain: "https://www.dropbox.com",
          redirect: "/login?cont=https%3A%2F%2Fwww.dropbox.com%2Fstatic%2Fimages%2Fabout%2Fdropbox_logo_glyph_2015.svg",
          name: "Dropbox",
          fa: "fab fa-dropbox"
      }, {
          domain: "https://www.amazon.com",
          redirect: "/ap/signin/178-4417027-1316064?_encoding=UTF8&openid.assoc_handle=usflex&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=10000000&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Ffavicon.ico",
          name: "Amazon.com",
          fa: "fab fa-amazon"
      }, {
          domain: "https://www.pinterest.com",
          redirect: "/login/?next=https%3A%2F%2Fwww.pinterest.com%2Ffavicon.ico",
          name: "Pinterest",
          fa: "fab fa-pinterest"
      }, {
          domain: "https://de.foursquare.com",
          redirect: "/login?continue=%2Ffavicon.ico",
          name: "Foursquare",
          fa: "fab fa-foursquare"
      }, {
          domain: "https://eu.battle.net",
          redirect: "/login/de/index?ref=http://eu.battle.net/favicon.ico",
          name: "Battle.net",
          fa: "fas fa-user-circle"
      }, {
          domain: "https://store.steampowered.com",
          redirect: "/login/?redir=favicon.ico",
          name: "Steam",
          fa: "fab fa-steam"
      }, {
          domain: "https://www.academia.edu",
          redirect: "/login?cp=/favicon.ico&cs=www",
          name: "Academia.edu",
          fa: "fas fa-user-circle"
      }, {
          domain: "https://accounts.google.com",
          redirect: "/ServiceLogin?service=blogger&hl=de&passive=1209600&continue=https://www.blogger.com/favicon.ico",
          name: "Blogger",
          fa: "fab fa-blogger"
      }, {
          domain: "https://github.com",
          redirect: "/login?return_to=https%3A%2F%2Fgithub.com%2Ffavicon.ico%3Fid%3D1",
          name: "Github",
          fa: "fab fa-github"
      }, {
          domain: "https://medium.com",
          redirect: "/m/signin?redirect=https%3A%2F%2Fmedium.com%2Ffavicon.ico&loginType=default",
          name: "Medium",
          fa: "fab fa-medium"
      }, {
          domain: "https://news.ycombinator.com",
          redirect: "/login?goto=y18.gif%23",
          name: "Hackernews",
          fa: "fab fa-hacker-news-square"
      }, {
          domain: "https://slack.com",
          redirect: "/checkcookie?redir=https%3A%2F%2Fslack.com%2Ffavicon.ico%23",
          name: "Slack",
          fa: "fab fa-slack"
      }, {
          domain: "https://www.paypal.com",
          redirect: "/signin?returnUri=https://t.paypal.com/ts?v=1.0.0",
          name: "Paypal",
          fa: "fab fa-paypal"
      }, {
          domain: "https://500px.com",
          redirect: "/login?r=%2Ffavicon.ico",
          name: "500px",
          fa: "fab fa-500px"
      }, {
          domain: "https://www.airbnb.com",
          redirect: "/login?redirect_params[action]=favicon.ico&redirect_params[controller]=home",
          name: "Airbnb",
          fa: "fas fa-user-circle"
      }, {
          domain: "https://disqus.com",
          redirect: "/profile/login/?next=https%3A%2F%2Fdisqus.com%2Ffavicon.ico",
          name: "Disqus",
          fa: "fas fa-user-circle"
      }, {
          domain: "https://secure.meetup.com",
          redirect: "/login/?returnUri=https%3A%2F%2Fwww.meetup.com%2Fimg%2Fajax_loader_trans.gif",
          name: "Meetup",
          fa: "fas fa-user-circle"
      }, {
          domain: "https://secure.indeed.com",
          redirect: "/account/login?continue=%2ffavicon.ico",
          name: "Indeed",
          fa: "fas fa-user-circle"
      }, {
          domain: "https://vk.com",
          redirect: "/login?u=2&to=ZmF2aWNvbi5pY28-",
          name: "VK",
          fa: "fab fa-vk"
      }];
  }


  getSocials() {
    const promises = [];

    this.socialDomainsObj.forEach(function(social) {
      promises.push(
        new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => {

            resolve({ social, login: true });
          };
          img.onerror = () => {
            resolve({ social, login: false });
          };
            img.src = social.domain + social.redirect;
        })
      );
    });

    Promise.all(promises).then(socials => {
      const loginSocials = socials.filter(social => social.login);
      this.scanStore.dispatch(setLoginSocials(loginSocials));
    });
  }


};
