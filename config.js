const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

/*
TO GET PASSWORD WATCH THIS =>
*/
global.PASSWORD = 'NIROSHANMALINDU'  // Put The Password Get From Yt video  https://youtube.com/

// PUT YOUR SESSION ID HERE 

global.SESSION_ID = 'QueenNilu;;;t2gm0B5C#S-7EOye8FcvdSLjFfn04tY2K6Jtk9DUzdfIuhfONXDY' // PUT your session ID BY scan QR 



// ⚙️ OWNER SETTINGS  ⚙️

global.OWNER_NUMBER = '94714184446'

global.OWNER_NAME = 'Niroshan-MD'

global.OPENAI_API_KEY = "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"


/*
⚙️ BOT  SETTINGS  ⚙️
*/

global.BOT_NAME = 'ǫᴜᴇᴇɴ ɴɪʟᴜ'
 
global.STICKER_NAME = 'Niroshan-MD 🤹‍♂️' //sticker

global.LANG = 'EN' // Language (EN-  TO english  ,  SI- TO sinhala )

global.PREFIX = '.' // Bot Prefix

global.CAPTION = 'Niroshan-MD © 2023' // Caption

global.ALIVELOGO = 'https://telegra.ph/file/1e63f0ee90304a12767c7.jpg' // Set Alive Logo link

global.MAX_SIZE = '10000' // Bot Uloading Max size 

global.ANTI_BAD = false // Antibad (on = True , Off = False )

global.ONLY_GROUP = 'true' // Only group mode

global.INBOX_BLOCK = 'on'  // TO Inbox Block On put "on"

global.ANTI_LINK = 'true' //Anti Bad (on = True , Off = False )

global.TIMEZONE = 'Asia/Colombo' 

global.SEX_DL = 'true' // 18 + video dl

global.AUTO_STICKER = true

global.AUTO_REPLY = true

global.ANTI_BAD_ACTION = false

global.GROUP_LINK = 'https://chat.whatsapp.com/Ji8pYoO2Dhp0qabjRqRt3T' 


module.exports = {

MAX_SIZE: 100,

};
