/*
WHATSAPP BOT BY Janith sadanuwan 
WHATSAPP - 94767438882
SUPPORT GROUP - https://t.me/QueenNilu
YOUTUBE - http://youtube.com/janithsadanuwan
*/

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

// PUT YOUR SESSION ID HERE  ##Required 

global.SESSION_ID = 'QueenNilu;;;F3x2jSIT#suN2w2wf9puOroq1lhsXJVCZBuankH56XAqKFdhx_PI' // PUT your session ID BY scan QR 

// databse URL  ##Required 
global.POSTGRESQL_URL = 'postgres://sachi_user:mtcNLHMy4h9oTPUhmZHkXiPgS4Hufdbs@dpg-ck0bdqb6fquc73a4nomg-a.frankfurt-postgres.render.com/sachi'



// ⚙️ OWNER SETTINGS  ⚙️

global.OWNER_NUMBER = '94760007746'

global.OWNER_NAME = 'ᴍʀ-ꜱᴀᴄʜɪʏᴀ'

global.TIMEZONE = 'Asia/Colombo' 

global.INBOX_BLOCK_MESSAGE = '' // Inboc Block Message

global.INBOX_BLOCK = 'false' // TO Inbox Block On put true

global.READ_MESSAGE = "true" 

global.OPENAI_API_KEY = "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" 

/*
⚙️ BOT  SETTINGS  ⚙️
*/

global.BOT_NAME = '𝙈𝙍-𝙎𝘼𝘾𝙃𝙄𝙔𝘼 𝙈𝘿 𝘽𝙊𝙏'
 
global.BOT_OFFLINE = false    //  Always Onlne -  | false offline -True

global.STICKER_NAME = 'ᴍʀ-ꜱᴀᴄʜɪʏᴀ' //sticker

global.FOOTER = '𝗠𝗥-𝗦𝗔𝗖𝗛𝗜𝗬𝗔 𝗠𝗗'

global.LANG = 'EN' // Language (EN-  TO english  ,  SI- TO sinhala )

global.PREFIX = '.' // Bot Prefix

ᴍʀglobal.CAPTION = '𝗠𝗥-𝗦𝗔𝗖𝗛𝗜𝗬𝗔 𝗠𝗗 ' // Caption

global.ALIVELOGO = 'https://telegra.ph/file/8c3282a86173a6eeb89bc.jpg' // Set Alive Logo link 

global.ALIVE_MESSAGE = '𝗛𝗲𝗹𝗹𝗼 𝗜 𝗔𝗺 𝗔𝗹𝗶𝘃𝗲 👋' // Set Alive Message

global.MAX_SIZE = '400' // Bot Uloading Max size 

global.ANTI_BAD = 'true' // Antibad (on = True , Off = False )

global.ANTI_BAD_ACTION = false

global.ANTI_LINK = 'true' //Anti Link (on = True , Off = False )

global.ANTI_BOTS = true

global.ONLY_GROUP = 'true' // Only group mode

global.GROUP_LINK = 'https://chat.whatsapp.com/IRdyJY5P4sF5BhtP5PIdHH' // ur group link


/* 18 + Download Settings */

global.SEX_DL = 'true' // 18 + video dl

/* AUTO REPLY SETTINGS */

global.AUTO_STICKER = true

global.AUTO_REPLY = false

global.VOICE_REPLY = true


/* V card */

global.ytname = "YT: janithsadanuwan" //ur yt chanel name
global.socialm = "GitHub: janithsadanuwan" //ur github or insta name
global.location = "Srilanka, colombo" //ur location

