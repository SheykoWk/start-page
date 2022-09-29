const CONFIG = new Config({
  crypto: {
    coin: 'ETH',
    currency: 'USD',
    refreshIn: 10
  },
  overrideStorage: true, // override localStorage with fixed userconfig values
  temperature: {
    location: 'Jalisco, Mexico',
    scale: 'C'
  },
  clock: {
    format: 'h:i p',
    iconColor: '#ff7b95'
  },
  search: {
    engines: {
      g: ['https://google.com/search?q=', 'Google'],
      i: ['https://ixquick.com/do/search?q=', 'Ixquick'],
      d: ['https://duckduckgo.com/html?q=', 'DuckDuckGo'],
      y: ['https://youtube.com/results?search_query=', 'Youtube'],
      w: ['https://en.wikipedia.org/w/index.php?search=', 'Wikipedia']
    }
  },
  keybindings: {
    "t": 'todo-list',
    "s": 'search-bar'
  },
  disabled: ["todo-list", "crypto-rate"],
  openLastVisitedTab: false,
  tabs: [
    {
      name: 'COMMON',
      background_url: 'src/img/banners/klaus-deus-nenes.png',
      categories: [{
        name: 'Dev',
        links: [
          {
            url: 'https://github.com/sheykowk',
            name: 'Github',
            icon: 'brand-github',
            icon_color: '#7862fd'
          },
          {
            name: 'Notion',
            url: 'https://www.notion.so/',
            icon: 'brand-notion',
            icon_color: '#7862fd'

          },
          {
            name: 'Portfolio',
            url: 'https://sheykowk.github.io/',
            icon: 'code',
            icon_color: '#7862fd'
          },
          {
            name: 'CV',
            url: 'https://sh3yk0.notion.site/Sahid-Ayala-Kick-Backend-Developer-d8fa1820064e46feb47a1874b5319b13',
          },
          {
            name: 'My Certifications',
            url: '',
            icon: 'certificate',
            icon_color: '#7862fd'
          }
        ]
      },
      {
        name: 'Social',
        links: [
          {
            name: 'FB',
            url: 'https://www.facebook.com/',
            icon: 'brand-facebook',
            icon_color: '#7862fd'
          },
          {
            name: 'Youtube',
            url: 'https://www.youtube.com/',
            icon: 'brand-youtube',
            icon_color: '#7862fd'
          }
        ]
      },
      {
        name: 'Pentesting',
        links: [
          {
            name: 'HTB',
            url: 'https://app.hackthebox.com/home',
            icon: 'box',
            icon_color: '#7862fd'
          },
          {
            name: 'DB Exploit',
            url: 'https://www.exploit-db.com/'
          },
          {
            name: 'GTFOBins',
            url: 'https://gtfobins.github.io/'
          },
          {
            name: 'Pishing WG',
            url: 'https://phishingquiz.withgoogle.com/'
          },
          {
            name: 'HTB Academy',
            url: 'https://academy.hackthebox.com/dashboard',
            icon: 'code'
          }
        ]
      }
      ]
    },
    {
      name: 'music',
      background_url: 'src/img/banners/bg-2.gif',
      categories: [
        {
          name: 'music services',
          links: [
            {
              url: 'https://soundcloud.com/',
              icon: 'brand-soundcloud',
              icon_color: '#c57750'
            },
            {
              url: 'https://youtu.be/',
              icon: 'brand-youtube',
              icon_color: '#996767'
            },
            {
              url: 'https://r-a-d.io/',
              icon: 'radio'
            },
          ]
        },
        {
          name: 'music boards',
          links: [
            {
              name: '/music/',
              url: 'https://lainchan.org/music/',
              icon: 'disc'
            },
            {
              name: '/mu/',
              url: 'https://boards.4channel.org/mu/',
            }
          ]
        }
      ]
    },
    {
      name: 'tech',
      background_url: 'src/img/banners/bg-3.gif',
      categories: [
        {
          name: 'subreddits',
          links: [
            {
              name: 'r/startpages/',
              url: 'https://www.reddit.com/r/startpages/'
            },
            {
              name: 'r/unixporn',
              url: 'https://www.reddit.com/r/unixporn/'
            },
            {
              name: 'r/mechkbds/',
              url: 'https://www.reddit.com/r/MechanicalKeyboards/',
              icon: 'keyboard',
              icon_color: '#a57685'
            },
            {
              name: 'r/programming',
              url: 'https://www.reddit.com/r/programming/'
            }
          ]
        },
        {
          name: 'blogs',
          links: [
            {
              name: 'fasterthanli',
              url: 'https://fasterthanli.me/articles',
              icon: 'anchor'
            },
            {
              name: 'dev.to',
              url: 'https://dev.to'
            },
            {
              name: 'mataroa.blog',
              url: 'https://collection.mataroa.blog',
            }
          ]
        },
        {
          name: 'misc',
          links: [
            {
              name: 'post office',
              url: 'http://afternoon.dynu.com/letterbox.html',
              icon: 'mailbox'
            },
            {
              name: 'rust docs',
              url: 'https://doc.rust-lang.org/book/',
              icon: 'notebook',
              icon_color: '#977a3a'
            }
          ]
        }
      ]
    }]
});
