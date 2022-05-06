let fs = require('fs')

global.owner = ['6282160268332','6282128475388'] // Put your number here
global.mods = ['6282160268332'] // Want some help?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json'))
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com', 
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  bear: 'https://apikey-bear.herokuapp.com',
  bear2: 'https://apikey-bear2.herokuapp.com',
  bear3: 'https://apikey-bear3.herokuapp.com',
  vinco: 'https://viko-api.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'cristian9407',
  'https://api.lolhuman.xyz': '7047f08f5a0ea4bcdf55cd72',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://apikey-bear3.herokuapp.com': 'KingOfBear',
  'https://viko-api.herokuapp.com': 'vinko',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

lolkey = '7047f08f5a0ea4bcdf55cd72''
zekskey = 'apivinz'
xteamkey = 'cristian9407'
leyskey = 'dappakntlll'
bearkey = 'KingOfBear'
ApiiKey = 'apivinz'
vinkey = 'vinko'

namabot = 'One Bot'
namalu = 'David'
footer = '\nOne Bot by David'
kasihcaption = `Nih Sayang`

// Sticker WM
global.stiker_wait = '_*Tunggu Sebentar...*_'
global.packname = 'One Bot Multi device'
global.author = 'David'
global.email = 'davidpangrib001@gmail.com'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.wm = 'One BotZ MD'
global.media = 'https://telegra.ph/file/e2f22aa820cee9810a8f4.jpg'

global.wait = '_*Tunggu Sebentar Sedang Di Proses...*_'
global.eror = '_*Terjadi kesalahan*_'

global.multiplier = 69 // The higher, The harder levelup

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
