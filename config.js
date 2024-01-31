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

global.SESSION_ID = 'QUEENNILU;;;V38gQApQ#B1icS7yi00GMWx0AxlxzyqROVM5jB0Oenux7045u2kY' // PUT your session ID BY scan QR 

// databse URL  ##Required 
global.POSTGRESQL_URL = ''

 

// ⚙️ OWNER SETTINGS  ⚙️

global.OWNER_NUMBER = '‪2348122716856‬'

global.OWNER_NAME = '𝐁𝐋𝐔𝐄 𝐈𝐂𝐎𝐍🎯'

global.TIMEZONE = 'asia/columbia' 

global.INBOX_BLOCK_MESSAGE = '' // Inboc Block Message

global.INBOX_BLOCK = 'false' // TO Inbox Block On put true

global.READ_MESSAGE = "false" 

global.OPENAI_API_KEY = "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" 

/*
⚙️ BOT  SETTINGS  ⚙️
*/

global.BOT_NAME = '𝐁𝐋𝐔𝐄 𝐈𝐂𝐎𝐍 —𝐌𝐃🎯'

global.FOOTER = '𝐈𝐕𝐘𝐒 𝐁𝐎𝐓 𝐕𝟏𝟎🎯'

global.BOT_OFFLINE = false    //  Always Onlne -  | false offline -True

global.STICKER_NAME = '🎯𝐀𝐍𝐓𝐈𝐒𝐎𝐂𝐈𝐀𝐋 𝐇𝐔𝐌𝐈𝐃𝐈𝐓𝐘🎯' //sticker

global.LANG = 'EN' // Language (EN-  TO english  ,  SI- TO sinhala )

global.PREFIX = '|' // Bot Prefix

global.CAPTION = '𝐁𝐋𝐔𝐄 𝐈𝐂𝐎𝐍—𝐌𝐃🎯' // Caption

global.ALIVELOGO = 'https://telegra.ph/file/cd71399be4564c1517228.jpg' // Set Alive Logo link 

global.ALIVE_MESSAGE = 'HI👋🏿,BOT is alive and in action ,press |menu to see my command list🍻' // Set Alive Message

global.MAX_SIZE = '500' // Bot Uloading Max size 

global.ANTI_BAD = true // Antibad (on = True , Off = False )

global.ANTI_BAD_ACTION = false

global.ANTI_LINK = true //Anti Link (on = True , Off = False )

global.ANTI_BOTS = true

global.ONLY_GROUP = 'false' // Only group mode

global.GROUP_LINK = 'https://chat.whatsapp.com/HQ26izcpZ7yAWXm2yyExSX' // ur group link


/* 18 + Download Settings */

global.SEX_DL = 'true' // 18 + video dl

/* AUTO REPLY SETTINGS */

global.AUTO_STICKER = true

global.AUTO_REPLY = true

global.VOICE_REPLY = true


/* V card */

global.ytname = "YT: janithsadanuwan" //ur yt chanel name
global.socialm = "GitHub: iamevilboy" //ur github or insta name
global.location = "nigeria, lagos" //ur location
