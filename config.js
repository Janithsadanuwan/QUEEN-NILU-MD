const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
} 

/*
TO GET PASSWORD WATCH THIS 
*/
global.PASSWORD = ''  // Put The Password Get From Yt video  https://youtube.com/

// PUT YOUR SESSION ID HERE 

global.SESSION_ID = 'QueenNilu;;;EjwE0B7b#MynbuRsChyj-dBS2XAO8EFCYZpC1qi4-O4UotLGM3GU' // PUT your session ID BY scan QR 

// ⚙️ OWNER SETTINGS  ⚙️

global.OWNER_NUMBER = '94767438882'

global.OWNER_NAME = 'Janiya_X'

/*
⚙️ BOT  SETTINGS  ⚙️
*/

global.BOT_NAME = 'ǫᴜᴇᴇɴ ɴɪʟᴜ'

//STIKCER 
global.STICKER_NAME = '@Janiya 🤹‍♂️' 

global.LANG = 'EN' 

global.PREFIX = '.' // Bot Prefix

global.CAPTION = 'ǫᴜᴇᴇɴ ɴɪʟᴜ  © 2023'

global.MAX_SIZE = '10000' // Bot Uloading Max size 

global.ANTI_BAD = 'false'

global.ONLY_GROUP = 'false'

global.INBOX_BLOCK = 'off'  // TO Inbox Block On put "on"

global.ANTI_LINK = 'false'

global.TIMEZONE = 'Asia/Colombo'

global.SEX_DL = 'true' // 18 + video dl

global.GROUP_LINK = 'https://chat.whatsapp.com/EounzhOWL1dIzwryzK4eWx'

global.OPENAI_API_KEY = "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"

module.exports = {

MAX_SIZE: 100,

};
