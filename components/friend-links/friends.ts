interface Friend {
  name: string
  link: string
  label: string
  status?: 'normal' | 'essential' | 'down'
}

export const official: Friend[] = [
  {
    name: 'kunSticker',
    link: 'https://sticker.kungal.com',
    label:
      'KUN Visual Novel Stickers, dedicated to collecting and creating Visual Novel sticker packs.'
  },
  {
    name: 'kunDocumentation',
    link: 'https://soft.moe/kun-visualnovel-docs/kun-forum.html',
    label:
      'KUN Visual Novel Forum is entirely open source, and the development documentation will be publicly available here.'
  },
  {
    name: 'kunNav',
    link: 'https://nav.kungal.org/',
    label:
      'A completely open-source navigation site! You can visit all Kun Visual Novel subsites!'
  }
]

export const galgame: Friend[] = [
  {
    name: 'acgngame',
    link: 'https://acgngames.net',
    label: 'ACGNGAME, Gal World, Galgame 游戏爱好者之家',
    status: 'down'
  },
  {
    name: 'shinnku',
    link: 'https://shinnku.com',
    label: 'Upset Gal, 失落的小站 失落小站 - galgame资源站'
  },
  {
    name: 'ymgal',
    link: 'https://www.ymgal.games',
    label:
      'YM Galgame, 月幕 Galgame -最戳你XP的美少女游戏综合交流平台 | 来感受这绝妙的艺术体裁'
  },
  {
    name: 'galgamer',
    link: 'https://galgamer.moe',
    label: '因爲你是一個一個一個 <Galgamer/美少女> 啊啊啊啊阿'
  },
  {
    name: 'xiayuge',
    link: 'https://xiayuge1.top/',
    label:
      '夏轩阁是一个创建于2022年的一个主要与galgame有关的站点, 与大家分享、探讨自己喜欢的作品, 我们一直在提供公益服务, 接下来的路还很长, 希望能够与各位一起走完。'
  },
  {
    name: 'hikarinagi',
    link: 'https://www.hikarinagi.com/',
    label:
      'Hikarinagi致力于为所有ACG爱好者提供一个交流和分享的平台! 你不仅可以找到汉化Galgame、小说、漫画等等超多资源, 还能和谐愉快地与大家互动!'
  },
  {
    name: 'qingju',
    link: 'https://www.qingju.org/',
    label: '青桔网是由青桔移植组建立的非盈利型galgame免费分享平台'
  },
  {
    name: 'touchgal',
    link: 'https://www.touchgal.co/',
    label:
      'TouchGAL是立足于分享快乐的一站式Galgame文化社区, 为Gal爱好者提供一片净土!'
  },
  {
    name: 'galgamex',
    link: 'https://www.galgamex.org/',
    label: 'Galgamex -- 一个二次元和galgame游戏资源交流社区'
  },
  {
    name: 'vikacg',
    link: 'https://www.vikacg.com/',
    label: '维咔VikACG[V站] - 肥宅们的欢乐家园'
  },
  {
    name: 'galzy',
    link: 'https://galzy.eu.org/',
    label: 'Galgame 资源站, 这里收录了大部分电脑端与手机端的汉化 Galgame'
  },
  {
    name: 'limulu',
    link: 'https://listan.top/',
    label: '一个简洁美观的Gal网站'
  },
  {
    name: 'zi0',
    link: 'https://zi0.cc/',
    label: '梓澪のGalgame仓库'
  },
  {
    name: 'acgs',
    link: 'https://acgs.one/',
    label: '专注分享次元世界 - Galgame, 游戏, 免费, 下载'
  },
  {
    name: 'nekotaku',
    link: 'https://www.nekotaku.xyz/',
    label:
      '喵源领域（原神域同萌）是一家致力于让二次元爱好者更便捷地获取信息和找到自己所需内容的综合二次元内容站点，欢迎您的访问！'
  },
  {
    name: 'xiuren',
    link: 'https://xiuren.cyou/',
    label: '分享galgame, SLG, RPG等资源'
  },
  {
    name: 'sayafx',
    link: 'https://www.sayafx.top/',
    label:
      'Galgame,月谣,月谣分享,Galgame月谣,Galgame下载,免费Galgame,Galgame资讯'
  }
]

export const others: Friend[] = [
  {
    name: 'ohmygpt',
    link: 'https://ohmygpt.com',
    label:
      'OhMyGPT.COM offers you convenient, unlimited access to advanced AI models like GPT-3.5-turbo, GPT-3.5-turbo-16k, GPT-4, GPT-4-32k, DALL-E, whisper, MidJourney, and more.'
  },
  {
    name: 'koibumi',
    link: 'https://s.koid.cc/',
    label: 'A simple url shorten app'
  },
  {
    name: 'xueyuefenghua',
    link: 'https://play.ziyuanshare.cc/',
    label:
      '雪月风花是一个集ACG游戏、动漫、电影、音乐、网络项目、热点资讯的免费分享平台'
  },
  {
    name: 'tgnav',
    link: 'https://tgnav.github.io/',
    label:
      'TGNAV - Telegram频道群组导航。收录Telegram上的优质频道和群组, 打造一个高质量Telegram导航'
  }
]

export const friendArray = [
  { key: 'official', value: official },
  { key: 'galgame', value: galgame },
  { key: 'others', value: others }
]
