/*
██████╗  ██╗   ██╗ ███████╗ ███████╗ ███╗   ██╗
██╔═══██╗ ██║   ██║ ██╔════╝ ██╔════╝ ████╗  ██║
██║   ██║ ██║   ██║ █████╗   █████╗   ██╔██╗ ██║
██║▄▄ ██║ ██║   ██║ ██╔══╝   ██╔══╝   ██║╚██╗██║
╚██████╔╝ ╚██████╔╝ ███████╗ ███████╗ ██║ ╚████║
 ╚══▀▀═╝   ╚═════╝  ╚══════╝ ╚══════╝ ╚═╝  ╚═══╝
███╗   ██╗ ██╗ ██╗      ██╗   ██╗
████╗  ██║ ██║ ██║      ██║   ██║
██╔██╗ ██║ ██║ ██║      ██║   ██║
██║╚██╗██║ ██║ ██║      ██║   ██║
██║ ╚████║ ██║ ███████╗ ╚██████╔╝
╚═╝  ╚═══╝ ╚═╝ ╚══════╝  ╚═════╝ 
WHATSAPP BOT BY Janith sadanuwan 

WHATSAPP - 94767438882
SUPPORT GROUP - https://t.me/QueenNilu
YOUTUBE - http://youtube.com/janithsadanuwan


ℹ️ SPECIAL INFORMATION ℹ️

Welcome to Queen Nilu Whatsapp Bot settings
Information provided to you.
If you use true or false
true = if you want to do that task
false = return if you don't want to do the task.
When you change the ones inside the commas, change them correctly.
If you are using Sex Video Downloader, you need to get permission from Bot Devoper. 


*/

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

/*
TO GET PASSWORD WATCH THIS =>
*/
global.PASSWORD = 'tharindu'  // Put The Password Get From Yt video  https://youtube.com/

// PUT YOUR SESSION ID HERE 

global.SESSION_ID = 'QueenNilu;;;9iBwVQCa#d7ewEwej6D53VbWqtE4fJ3HwcZHq6ZuGfdmXr05KyYo' // PUT your session ID BY scan QR 



// ⚙️ OWNER SETTINGS  ⚙️

global.OWNER_NUMBER = '94763776752'

global.OWNER_NAME = 'tharindu_X'

global.OPENAI_API_KEY = "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"


/*
⚙️ BOT  SETTINGS  ⚙️
*/

global.BOT_NAME = 'ǫᴜᴇᴇɴ ɴɪʟᴜ'
 
global.STICKER_NAME = '@tharindu 🤹‍♂️' //sticker

global.LANG = 'EN' // Language (EN-  to english  ,  SI- to sinhala )

global.PREFIX = '.' // Bot Prefix

global.CAPTION = 'ǫᴜᴇᴇɴ ɴɪʟᴜ  © 2023' // Caption

global.ALIVELOGO = 'https://telegra.ph/file/12a513d8ce1af168af0de.jpg' // Set Alive Logo link

global.MAX_SIZE = '10000' // Bot Uloading Max size 

global.ANTI_BAD = false // Antibad (on = True , Off = False )

global.ONLY_GROUP = 'false' // Only group mode

global.INBOX_BLOCK = 'off'  // TO Inbox Block On put "on"

global.ANTI_LINK = 'true' //Anti Bad (on = True , Off = False )

global.TIMEZONE = 'Asia/Colombo' 

global.SEX_DL = 'true' // 18 + video dl

global.AUTO_STICKER = true

global.AUTO_REPLY = true

global.ANTI_BAD_ACTION = true

global.GROUP_LINK = '' 

module.exports = {

MAX_SIZE: 100,

};
