const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\

global.owner = process.env.OWNER_NUMBER || ("94767438882") //Your Number
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://nilunilu:janith1234@cluster0.zluxwdv.mongodb.net/?retryWrites=true&w=majority" //Ur Mongodb URI
global.port= process.env.PORT || 5000
global.email = 'Queennilu@gmail.com' // ur Email
global.github = 'https://github.com/Jnaithsadanuwan/QUEEN-NILU-MD' //Github
global.location = 'Kandy LK'
global.gurl = 'https://instagram.com/janithsadanuwan' // add your username
global.sudo = process.env.SUDO || ''
global.devs = '94767438882';
global.website = 'https://janithsadanuwan.tech/QueenNilu' 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://graph.org/file/1b099040322e0649a9192.jpg'

module.exports = {
  LANG: process.env.THEME|| 'EN', //Change Language  EN- To English SI - TO Sinhala
  botname: process.env.BOT_NAME || 'Queen Nilu', //Bot Name
  alivelogo: process.env.ALIVE_LOGO || 'https://te.legra.ph/file/a9293226a7c660ecbfffb.jpg', //Alive Logo
  ownername:process.env.OWNER_NAME || 'Jnaith sadanuwan',
    //Put your session id here 👇
  sessionName: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUtTL001dmp5UkFhNkNsaEZOL2thaDk1UW5hck05RjNQWDdWMkhvZW5FMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWWlSMitrMVRPMTZQTndsTzUxZC9TVjhDOU9jUWE4Unl0VFNTKzRJcXJIcz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyQjhEaUFUTEFOVDhOci9pNWtydjh1MWlFd3ppSVNKUkg4SzJUTWN3RlhRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzMmJuYjkwRytmUEk5WHZaZExpbFpKbEpDSXYzb3lXYXNTTVoyaThwM3o0PSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlFUkg2VjhGWEdSalQvSVI5enRmNlBwTzhIWFlQaldCS3pjRWRzR1VQVmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVtSkhsSTNaMUdod2NlaGlVNVAyckxkeTI3aDJRaDI0WXhjeER6aFFGd009In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoeWZIbVc2YURZaUVoYlZCUlg2TTJCeWUzTTFIL1JrR0kraHZyTjRCY0E1bzJLL3htdk5zRy9zcWhRZVR4Z3dhWHQ5UG5scTJQUmY5K3hUeENFbUJndz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjIxMiwiYWR2U2VjcmV0S2V5IjoidENyY1FOaUMzelJTeHM4U1JFd21IUGh4VzBremtrNUZXY0pQVGVDMXR1QT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTkt2azVnR0VKYjFpNk1HR0EwPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJXRnJJQzlMaVV6R3Ayc3A2Qi9VQ3lvckptREYrNkdkMGJnamtLekdSb21ZPSIsImFjY291bnRTaWduYXR1cmUiOiJHeVFjSnUwQ1dVNGYzYzZlZ1UrZkhpYU11QXY2YVRvdXU4U3MxMUVZby9NbitnWC9VZ0RyT2cydmxqeno3UHFYZjZxQlN2ZXJlMWIrcHh5MWVHN3NCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoieEVIaUJHYzdvK2hYSTU5cnN3SnRyQjNXMDNGOGx5dnI4OVRqcUVIRnIzb3NDc2xxRjRUQkphRmFmdytsVTZWUUVJVmdFUlRVQzBnaVFSVWxNa0NraGc9PSJ9LCJtZSI6eyJpZCI6Ijk0NzY3NDM4ODgyOjkxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ikphbml5YV94In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzY3NDM4ODgyOjkxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZoYXlBdlM0bE14cWRyS2VnZjFBc3FLeVpneGZ1aG5kRzRJNUNzeGthSm0ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE2ODQyMDgyODF9',
  author: process.env.PACK_INFO || (";")[0] || 'Queen Nilu 💃', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'false',
  packname: process.env.PACK_INFO || (";")[1] || 'Queen Nilu 💃', 
  autoreaction: process.env.AUTO_REACTION || 'off',
  antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokey',
  alwaysonline: process.env.ALWAYS_ONLINE || 'false',
  antifake : process.env.FAKE_COUNTRY_CODE || '',
  readmessage: process.env.READ_MESSAGE || true,
  HANDLERS: process.env.PREFIX || ['.',''],
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "flase",
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.ANTILINK_ACTION || 'remove',
  BRANCH: 'main',
  ALIVE_MESSAGE: process.env.ALIVE_MESSAGE || '',
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || 'OPENAI_KEY',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE,
  VERSION: process.env.VERSION === undefined ? 'v.2.0.0' : process.env.VERSION
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
