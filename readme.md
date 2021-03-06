# Help Ukraine Popup
A small plugin that will help collect donations to help Ukraine.

## Install (cdn)
```html
<script src="https://cdn.jsdelivr.net/gh/Rokkido/HelpUkrainePopup/dist/hup.min.js"></script>
```

## Start using
```html
<script>hup();</script>
```


## Advanced methods
Params
| key | val |
| ------ | ------ |
| lang | 'en', 'ua', 'ru' |
| place | 'left', 'center', 'right' |
| sitesArmy | [{...}, {...}, {...}] |
| sitesHumanitarian | [{...}, {...}, {...}] |

```js
// default
hup({
  lang: 'en',
  place: 'right',
  sitesArmy: [
    {
      title: {
        en: 'Charitable fund "Come Back Alive"',
        ua: 'Благодійний фонд "Повернись живим"',
        ru: 'Благотворительный фонд "Вернись живым"'
      },
      description: {
        en: 'One of the biggest charity funds helping Ukrainian soldiers.',
        ua: 'Один із найбільших благодійних фондів, який допомагає українським військовим.',
        ru: 'Один из крупнейших благотворительных фондов, помогающий украинским военным.',
      },
      currency: 'Fondy.eu, Swift, Cryptocurrency (BTC, ETH, USDC, USDT), UAH',
      link: 'https://www.comebackalive.in.ua/donate'
    },
    {
      title: {
        en: 'National Bank of Ukraine',
        ua: 'Національний банк України',
        ru: 'Национальный банк Украины'
      },
      description: {
        en: 'The National Bank of Ukraine opened a bank account to raise money for the army needs.',
        ua: 'Національний банк України відкрив рахунок для збирання коштів на потреби армії.',
        ru: 'Национальный банк Украины открыл счет для сбора средств на нужды армии.'
      },
      currency: 'USD, EUR, GBP, CHF, AUD, CAD, PLN, UAH',
      link: {
        en: 'https://bank.gov.ua/en/about/support-the-armed-forces',
        ua: 'https://bank.gov.ua/ua/about/support-the-armed-forces',
        ru: 'https://bank.gov.ua/en/about/support-the-armed-forces'
      }
    },
    {
      title: {
        en: 'monobank | UniversalBank',
        ua: 'monobank | UniversalBank',
        ru: 'monobank | UniversalBank'
      },
      description: {
        en: 'Funds are raised onto a single account of the National bank of Ukraine created to support the Ukrainian army.',
        ua: 'Кошти збираються на єдиний рахунок у Національному банку України, створений для підтримки української армії.',
        ru: 'Средства собираются на единый счет в Национальном банке Украины, созданный для поддержки украинской армии.'
      },
      currency: 'Any bank, Apple Pay, Google Pay',
      link: 'https://uahelp.monobank.ua'
    },
    {
      title: {
        en: 'Aid For Ukraine (Cryptocurrency)',
        ua: 'Aid For Ukraine (Криптовалюта)',
        ru: 'Aid For Ukraine (Криптовалюта)'
      },
      description: {
        en: 'Official crypto wallets for transferring money for the Ukrainian army.',
        ua: 'Офіційні криптогаманці, куди можна переказати гроші для армії України.',
        ru: 'Официальные криптокошельки, куда можно перевести деньги для армии Украины.'
      },
      currency: 'BTC, ETH, USDT, DOT, SOL, DOGE, XMR, ICX, NEO',
      link: 'https://donate.thedigital.gov.ua'
    }
  ],
  sitesHumanitarian: [
    {
      title: {
        en: 'National Bank of Ukraine',
        ua: 'Національний банк України',
        ru: 'Национальный банк Украины'
      },
      description: {
        en: 'The National Bank of Ukraine opened a bank account for raising money for humanitarian help.',
        ua: 'Національний банк України відкрив рахунок для збирання коштів на гуманітарну допомогу.',
        ru: 'Национальный банк Украины открыл счет для сбора средств на гуманитарную помощь.'
      },
      currency: 'USD, EUR, GBP, CHF, AUD, CAD, PLN, UAH',
      link: {
        en: 'https://bank.gov.ua/en/about/humanitarian-aid-to-ukraine',
        ua: 'https://bank.gov.ua/ua/about/humanitarian-aid-to-ukraine',
        ru: 'https://bank.gov.ua/en/about/humanitarian-aid-to-ukraine'
      }
    },
    {
      title: 'Unchain.Fund',
      description: {
        en: 'Unchain is a charity project created by blockchain activists.',
        ua: 'Unchain — це благодійний проект, створений активістами блокчейн.',
        ru: 'Unchain — благотворительный проект, созданный активистами блокчейн.'
      },
      currency: 'BTC, ETH, BSC, Polygon, Harmony, NEAR, Avalanche, Celo, Terra, IoTeX',
      link: 'https://unchain.fund/donate'
    }
  ]
});
```