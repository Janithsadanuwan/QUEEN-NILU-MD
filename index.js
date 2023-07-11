
const {
    default: makeWASocket,
    useMultiFileAuthState,
    DisconnectReason,
    makeInMemoryStore,
    generateLinkPreviewIfRequired,
    WA_DEFAULT_EPHEMERAL,
    jidNormalizedUser,
    generateMessageID,
    prepareWAMessageMedia,
    generateWAMessage,
    AnyMessageContent,
    proto,
    areJidsSameUser,
    generateForwardMessageContent,
    jidDecode,
    generateWAMessageContent,
    downloadContentFromMessage,
    getContentType
    } = require('@adiwajshing/baileys')
    const fs = require('fs')
    const P = require('pino')
    const chalk = require("chalk")
    const config = require('./config')
    const qrcode = require('qrcode-terminal')
    const util = require('util')
    const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('./lib/functions')
    const { sms,downloadMediaMessage } = require('./lib/msg')
    const axios = require('axios')
    const { File } = require('megajs')
    const prefix = `${global.PREFIX}`
    const ownerNumber = [`${global.OWNER_NUMBER}`]
    const moment = require("moment-timezone")
    const FileType = require('file-type')
    const mongoose = require('mongoose')
    const textpro = require('./lib/textpro')
    const maker = require('mumaker')
    const l = console.log
    // Gist Url 
    var gistUrl =
        'https://gist.githubusercontent.com/Dragonxjanith/13028e9b5b14c89cc738067b57afffb4/raw/948b0ae87d618c269e6b12e4138c13eafd2a9f74/niludata',
      pkg = require('./package.json')
    ;(pkg.author != 'Janith sadanuwan' || pkg.name != 'QUEEN-NILU-MD') &&
      console.log('Cloned Version Not Allowd\n\n කොපි කරන්න බෑ හුත්තිගේ පුතෝ')
    //===================SESSION============================
    if (!fs.existsSync(__dirname + '/auth_info_baileys/creds.json')) {
    if(!global.SESSION_ID) return console.log('Please add your session to SESSION_ID env !!')
    const sessdata = global.SESSION_ID.replace(/QueenNilu;;;/, "");
    //const sessdata = global.SESSION_ID
    const filer = File.fromURL(`https://mega.nz/file/${sessdata}`)
    filer.download((err, data) => {
    if(err) throw err
    fs.writeFile(__dirname + '/auth_info_baileys/creds.json', data, () => {
    // <<===========DATABSE==========>>
    async function main() {
        if (!fs.existsSync(__dirname + '/auth_info_baileys/creds.json')) {
            
             }
        try{
            await mongoose.connect("mongodb+srv://nilunilu:janith1234@cluster0.zluxwdv.mongodb.net/?retryWrites=true&w=majority");
        } catch {
            console.log('Could not connect with Mongodb.\n')
        }
        }
        main()
    
    global.db = JSON.parse(fs.readFileSync('./lib/database/database.json'))
    if (global.db) global.db = {
    sticker: {},
    database: {}, 
    game: {},
    others: {},
    users: {},
    chats: {},
    settings: {},
    ...(global.db || {})
    }
    
    
    
    })})}
    // <<==========PORTS===========>>
    const express = require("express");
    const app = express();
    const port = process.env.PORT || 8000;
    //====================================
    const store = makeInMemoryStore({
      logger: P().child({ level: "silent", stream: "store" }),
    });
    async function connectToWA() {
      const { say } =  require('cfonts')
      const { color } = require('./lib/color')
      say('Queen', {
          font: 'block',
          colors: ["#0ff",'green',"#ff0"],
          align: 'center',
          gradient: false,
          background: "transparent",
          letterSpacing: 1,
          lineHeight: 1,
          space: true,
          maxLenght: '0'
      
        })
        say('Nilu', {
          font: 'block',
          colors: ["#0ff",'green',"#ff0"],
          align: 'center',
          gradient: false,
          background: "transparent",
          letterSpacing: 1,
          lineHeight: 1,
          space: true,
          maxLenght: '0'
      
        })
        say(`Bot By janith sadanuwan`, {
          font: 'console',
          align: 'center',
          gradient: ['red', 'magenta']
        })
    const { state, saveCreds } = await useMultiFileAuthState(__dirname + '/auth_info_baileys/')
    const QueenNilu = makeWASocket({
    logger: P({ level: 'silent' }),
    browser: ['Queen Nilu', 'safari', '3.0'],
    printQRInTerminal: true,
    generateHighQualityLinkPreview: true,
    auth: state,
    patchMessageBeforeSending: (message) => {
    const requiresPatch = !!(
    message.buttonsMessage
    || message.templateMessage
    || message.listMessage
    );
    if (requiresPatch) {
    message = {
    viewOnceMessage: {
    message: {
    messageContextInfo: {
    deviceListMetadataVersion: 2,
    deviceListMetadata: {},
    },
    ...message,
    },
    },
    };
    }
    return message;
    }  
    })
    store.bind(QueenNilu.ev)
    // Cheking Password 
    console.log(
      chalk.blueBright.italic('❯❯❯PASSWORD CHECKING❮❮❮')
    );
    if (global.PASSWORD = 'janith') {
    
    console.log(
      chalk.green.bold('Password Done')
    );
    }
    else if (global.PASSWORD != 'janith') {
    console.log(
      chalk.red.bold('⚠⚠Password Incorrect⚠⚠'));
    console.log(
      chalk.red.bold('⚠⚠Password Incorrect⚠⚠'));
    console.log(
      chalk.red.bold('⚠⚠Password Incorrect⚠⚠'));
    console.log(
      chalk.red.bold('⚠⚠Password Incorrect⚠⚠'));
    console.log(
      chalk.red.bold('⚠⚠Password Incorrect⚠⚠'));
    console.log(
      chalk.red.bold('⚠⚠Password Incorrect⚠⚠'));
    console.log(
      chalk.red.bold('⚠⚠Password Incorrect⚠⚠'));
    console.log(
      chalk.red.bold('⚠⚠Password Incorrect⚠⚠'));
    console.log(
      chalk.red.bold('⚠⚠Password Incorrect⚠⚠'));
    throw new Error("Wrong password !!")
    }
    //PACKGE CHECKING
    if (pkg.author != 'Janith sadanuwan' || pkg.name != 'QUEEN-NILU-MD') {
      await QueenNilu.logout()
      throw new Error('Cloned Version Not Allowd')
    }
    // Data From Gist URL 
    try {
      await console.log('Getting Queen Nilu Updates...🤹‍♂️')
      var janith = await axios.get(gistUrl)
    } catch (err) {
      console.log('Please Restart your Bot')
    }
    global.janith_admins = janith.data.owners || []
    global.banfrom = janith.data.ban_bot_user || []
    global.janith_groups = janith.data.offical_groups || []
    global.ban_bot_user_message = janith.data.ban_bot_user_message
    global.lock_down = janith.data.lockdown
    global.call_nima = janith.data.unblock_nima
    global.lock_message = janith.data.lockdown_message
    global.announce_logo = janith.data.announce_logo
    global.announce_message = janith.data.announce_message
    global.bot_namaa = janith.data.bot_name | ''
    global.isxnxx = janith.data.xnxx
    global.isxvideo = janith.data.xvideo
    global.xnxx_message =
      janith.data.xnxx_xvideo_message ||
      'Xnxx Video Downloader is Desable By Mr Nima Please Contact Devoper 94719574492'
    global.sexblock_message = janith.data.sex_block_message
    global.islogm = janith.data.logm
    global.log_img = janith.data.log_logo
    global.log_message = janith.data.log_message
    global.xvideo_allow = janith.data.xvideo_allow || []
    global.xnxx_allow = janith.data.xnxx_allow || []
    global.myimg =
      janith.data.myimg || 'https://telegra.ph/file/ae259f1db1a41e0683bb3.png'
      // Ban From Nilu
     
    
    QueenNilu.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect } = update
    if (connection === 'close') {
    if (lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut) {
    connectToWA()
    }
    } else if (connection === 'open') {
    console.log('Installing plugins 🔌... ')
    const path = require('path');
    fs.readdirSync("./plugins/").forEach((plugin) => {
    if (path.extname(plugin).toLowerCase() == ".js") {
    require("./plugins/" + plugin);
    }
    });
    console.log('Plugins installed ✅');
    console.log('Queen Nilu connected !!!!');
    
    }
    })
    await QueenNilu.groupAcceptInvite('Lk3KCbvyaCyJ0QlouEL32K')
    
    QueenNilu.ev.on('creds.update', saveCreds)
    
    QueenNilu.ev.on('messages.upsert', async(mek) => {
    try {
    mek = mek.messages[0]
    if (!mek.message) return	
    mek.message = (getContentType(mek.message) === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
    if (mek.key && mek.key.remoteJid === 'status@broadcast') return
    
    const m = sms(QueenNilu, mek,store)
    const type = getContentType(mek.message)
    const content = JSON.stringify(mek.message)
    const from = mek.key.remoteJid
    const quoted = type == 'extendedTextMessage' && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
    const body = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : ''
    const isCmd = body.startsWith(prefix)
    const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
    const args = body.trim().split(/ +/).slice(1)
    const q = args.join(' ')
    const isGroup = from.endsWith('@g.us')
    const sender = mek.key.fromMe ? (QueenNilu.user.id.split(':')[0]+'@s.whatsapp.net' || QueenNilu.user.id) : (mek.key.participant || mek.key.remoteJid)
    const senderNumber = sender.split('@')[0]
    const botNumber = QueenNilu.user.id.split(':')[0]
    const pushname = mek.pushName || 'Sin Nombre'
    const isMe = botNumber.includes(senderNumber)
    const Janith = "94767438882"
    const Janith2 = "94788175828"
    const isOwner = [Janith,Janith2,ownerNumber].includes(senderNumber) || isMe
    const botNumber2 = await jidNormalizedUser(QueenNilu.user.id);
    const groupMetadata = isGroup ? await QueenNilu.groupMetadata(from).catch(e => {}) : ''
    const groupName = isGroup ? groupMetadata.subject : ''
    const participants = isGroup ? await groupMetadata.participants : ''
    const groupAdmins = isGroup ? await getGroupAdmins(participants) : ''
    const isBotAdmins = isGroup ? groupAdmins.includes(botNumber2) : false
    const isAdmins = isGroup ? groupAdmins.includes(sender) : false
    const groupOwner = m.isGroup ? groupMetadata.owner : ''
    const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
    const reply = (teks) => {
    QueenNilu.sendMessage(from, { text: teks }, { quoted: mek })
    }
    var budy = (typeof m.q == 'string' ? m.q : '')
    
    QueenNilu.downloadAndSaveMediaMessage = async(message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
        let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
            // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }
    
    QueenNilu.sendFileUrl = async(jid, url, caption, quoted, options = {}) => {
      let mime = '';
      let res = await axios.head(url)
      mime = res.headers['content-type']
      if (mime.split("/")[1] === "gif") {
          return QueenNilu.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options }, { quoted: quoted, ...options })
      }
      let type = mime.split("/")[0] + "Message"
      if (mime === "application/pdf") {
          return QueenNilu.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options }, { quoted: quoted, ...options })
      }
      if (mime.split("/")[0] === "image") {
          return QueenNilu.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options }, { quoted: quoted, ...options })
      }
      if (mime.split("/")[0] === "video") {
          return QueenNilu.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options }, { quoted: quoted, ...options })
      }
      if (mime.split("/")[0] === "audio") {
          return QueenNilu.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options }, { quoted: quoted, ...options })
      }
    }
    //==================================plugin map================================
    const events = require('./lib/command')
    const cmdName = isCmd ? body.slice(1).trim().split(" ")[0].toLowerCase() : false;
    if (isCmd) {
    const cmd = events.commands.find((cmd) => cmd.pattern === (cmdName)) || events.commands.find((cmd) => cmd.alias && cmd.alias.includes(cmdName))
    if (cmd) {
    if (cmd.react) QueenNilu.sendMessage(from, { react: { text: cmd.react, key: mek.key }})
    
    try {
    cmd.function(QueenNilu, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply});
    } catch (e) {
    console.error("[PLUGIN ERROR] ", e);
    }
    }
    }
    events.commands.map(async(command) => {
    if (body && command.on === "body") {
    command.function(QueenNilu, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply})
    } else if (mek.q && command.on === "text") {
    command.function(QueenNilu, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply})
    } else if (
    (command.on === "image" || command.on === "photo") &&
    mek.type === "imageMessage"
    ) {
    command.function(QueenNilu, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply})
    } else if (
    command.on === "sticker" &&
    mek.type === "stickerMessage"
    ) {
    command.function(QueenNilu, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply})
    }});
    //============================================================================ 
    if (!isMe && !isGroup && global.ONLY_GROUP == 'true') return 
    //============================================================================
    if (global.ANTI_LINK && !isMe) {
    if (body.match(`chat.whatsapp.com`)) {
    if(groupAdmins.includes(sender)) return
    await QueenNilu.sendMessage(from, { delete: mek.key })  
    }}
    
    QueenNilu.edit = async(gg,newmg) =>{
      await QueenNilu.relayMessage(from,{
        protocolMessage:{
          key:gg.key,
          type:14,
          editedMessage:{
            conversation:newmg
          }
        }
      })
    }
    
    var nilb = QueenNilu.user.id.includes(':')
    ? QueenNilu.user.id.split(':')[0]
    : QueenNilu.user.id.split('@')[0]
    if (janith.data.ban_bot_user.includes(nilb)) {
    await QueenNilu.sendMessage(
      QueenNilu.user.id,
      '*You Are Ban From Queen Nilu Bot !*\n\n```Reson : Devoper Think That you are not eligible to use queen nilu whatsapp bot```'
    )
    await QueenNilu.logout()
    throw new Error('You Are Banned From Bot')
    
    }
    
        /*
    QueenNilu.ev.on('group-participants.update', async (anu) => {
      /* if (anu.id == '120363043491784571@g.us') return
      if (anu.id == '120363052773472047@g.us') return
      if (global.SEND_WELCOME == 'false') return
      const jsk = global.nilu_groups
      for (any in jsk) {
        if (anu.id.includes(jsk[any])) {
          return
        }
      }
      const js2 = JSON.parse(
        fs.readFileSync('./lib/database/BLOCK_CHAT.json')
      )
      for (any in js2) {
        if (anu.id.includes(js2[any])) {
          return
        }
      }
      
      console.log(anu)
      try {
          let metadata = await QueenNilu.groupMetadata(anu.id)
          let participants = anu.participants
          for (let num of participants) {
              // Get Profile Picture User
              try {
                  ppuser = await QueenNilu.profilePictureUrl(num, 'image')
              } catch {
                  ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
              }
      
              // Get Profile Picture Group
              try {
                  ppgroup = await QueenNilu.profilePictureUrl(anu.id, 'image')
              } catch {
                  ppgroup = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
              }
      //welcome   memb = metadata.participants.length
      XeonWlcm = await getBuffer(ppuser)
      XeonLft = await getBuffer(ppuser)
              if (anu.action == 'add') {
              const xeonbuffer = await getBuffer(ppuser)
              let xeonName = num
              const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
              const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
              const xmembers = metadata.participants.length
              xeonbody = `┌─❖
      │「 𝗛𝗶 👋 」
      └┬❖ 「  @${xeonName.split("@")[0]}  」
      │✑  𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝘁𝗼 
      │✑  ${metadata.subject}
      │✑  𝗠𝗲𝗺𝗯𝗲𝗿 : 
      │✑ ${xmembers}th
      │✑  𝗝𝗼𝗶𝗻𝗲𝗱 : 
      │✑ ${xtime} ${xdate}
      └───────────────┈ ⳹`
      QueenNilu.sendMessage(anu.id,
      { text: xeonbody,
      contextInfo:{
      mentionedJid:[num],
      "externalAdReply": {"showAdAttribution": true,
      "containsAutoReply": true,
      "title": ` ${global.botname}`,
      "body": `${global.ownername}`,
      "previewType": "PHOTO",
      "thumbnailUrl": ``,
      "thumbnail": XeonWlcm,
      "sourceUrl": `${global.GROUP_LINK}`}}})
      } else if (anu.action == 'remove') {
      const xeonbuffer = await getBuffer(ppuser)
      const xeontime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
      const xeondate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
      let xeonName = num
      const xeonmembers = metadata.participants.length
      xeonbody = `┌─❖
      │「 𝗚𝗼𝗼𝗱𝗯𝘆𝗲 👋 」
      └┬❖ 「 @${xeonName.split("@")[0]}  」
      │✑  𝗟𝗲𝗳𝘁 
      │✑ ${metadata.subject}
      │✑  𝗠𝗲𝗺𝗯𝗲𝗿 : 
      │✑ ${xeonmembers}th
      │✑  𝗧𝗶𝗺𝗲 : 
      │✑  ${xeontime} ${xeondate}
      └───────────────┈ ⳹`
      QueenNilu.sendMessage(anu.id,
      { text: xeonbody,
      contextInfo:{
      mentionedJid:[num],
      "externalAdReply": {"showAdAttribution": true,
      "containsAutoReply": true,
      "title": ` ${global.botname}`,
      "body": `${global.ownername}`,
      "previewType": "PHOTO",
      "thumbnailUrl": ``,
      "thumbnail": XeonLft,
      "sourceUrl": `${global.GROUP_LINK}`}}})
      }
      }
      } catch (err) {
      console.log(err)
      }
      })
        */
    
      QueenNilu.ev.on("groups.update", async (json) => {
        try {
        ppgroup = await QueenNilu.profilePictureUrl(anu.id, 'image')
        } catch (err) {
        ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
        }
        console.log(json)
    
      });
    ////--------------------------------Auto reply 
    if (global.AUTO_REPLY){
    const auto_reply_msg = JSON.parse(fs.readFileSync('./lib/database/autoreply.json'))
    const resevmsg = auto_reply_msg.massage
    const sendmsg = auto_reply_msg.reply_massage
             for (any in resevmsg){
             if (body.toLowerCase().startsWith(resevmsg[any])) {
             imoji = sendmsg[any]
    mek.reply(imoji)
    }
    }
    }
    //sticker 
    if (global.AUTO_STICKER){
    let sticker = JSON.parse(fs.readFileSync('./lib/database/sticker.json'));
    for (let anji of sticker){
      if (body === anji){
        result = fs.readFileSync(`./Media/sticker/${anji}.webp`)
        QueenNilu.sendMessage(mek.chat, { sticker: result }, { quoted: mek })
        }
    }
    }
    
    
    // LOGO 
    
      switch (command) {
    
    
    
    case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
    case 'deepsea': case 'scifi': case 'rainbow2': case 'waterpipe': case 'spooky': 
    case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
    case 'transformer': case 'berry': case 'thunder': case '.': case '3dstone2': 
    case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
    case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
    case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
    case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
    case 'lava': case 'rockart': case 'bloodglas': case 'halloween': case 'darkgold': case 'joker': case 'wicker':
    case 'firework': case 'skeleton': case 'blackpinkart': case 'sand': case 'glue': case '1917': case 'leaves': case 'demon': {
     
      var LOGO_MAKING = ''
      if (global.LANG == 'EN') LOGO_MAKING = '*🌈 Take a moment to createing your textlogo...*'
      if (global.LANG == 'SI') LOGO_MAKING = '*🌈 මදක් රැදීසිටින්න ඔබගේ textlogo සෑදමින් පවතී...*'
    
    var GIVEE = ''
    if (global.LANG == 'EN') GIVEE = `*💃 Please give me a some words* \n_ℹ️ example ${prefix + command} Janiya_`
    if (global.LANG == 'SI') GIVEE = `*💃 කරුනාකර වචනයක් ලබාදෙන්න* \n _ℹ️ උදාහරණ ${prefix + command} Janiya_`
    
    
      if (!q) throw `Example : ${prefix + command} ${OWNER_NAME}`
       await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
       let link
       if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
       if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
       if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
       if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
       if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
       if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
       if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
       if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
       if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
       if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
       if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
       if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
       if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
       if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
       if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
       if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
       if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
       if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
       if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
       if (/3dstone2/.test(command)) link = 'https://textpro.me/create-a-3d-stone-text-effect-online-for-free-1073.html'
       if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
       if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
       if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
       if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
       if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
       if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
       if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
       if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
       if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
       if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
       if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
       if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
       if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
       if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
       if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
       if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
       if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
       if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
       if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
       if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
       if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
       if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
       if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
       if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
       if (/rockart/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
       if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
       if (/halloween/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
       if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
       if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
       if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
       if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
       if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
       if (/blackpinkart/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
       if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
       if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
       if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
          if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'           
       let anutexpro = await maker.textpro(link, q)
          QueenNilu.sendMessage(mek.chat, { image: { url: anutexpro }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m })
       }
       break
    case'glitch3':
    if(!q) throw `Use ${prefix + command} text|text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    teks1 = q.split("|")[0]
    teks2 = q.split("|")[1]
    maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    
    case '3dbox':
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    
    case 'waterdrop':
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    
    case 'lion2':
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    
    case 'papercut':
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    
    case 'transformer':
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    
    case 'harrypot':
    if(!q) throw `Use ${prefix + command} text|text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    teks1 = q.split("|")[0]
    teks2 = q.split("|")[1]
    maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
    `${teks1}`,`${teks2}`])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    
    case 'neondevil':
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    
    case '3dstone':
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    
    case '3davengers':
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    
    case 'thunder':
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    
    case 'window':
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    
    case 'blackpinkneon':
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/create-neon-light-blackpink-logo-text-effect-online-1081.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    
    case 'graffiti':
    case 'grafiti':
    if(!q) throw `Use ${prefix + command} text|text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    teks1 = q.split("|")[0]
    teks2 = q.split("|")[1]
    maker.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [
    `${teks1}`,`${teks2}`])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    
    case 'pornhub2':
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    teks1 = q.split("|")[0]
    teks2 = q.split("|")[1]
    maker.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
    `${teks1}`,`${teks2}`])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    
    case 'blackpink2':
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    
    case 'glitch':
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    
    case 'glitch2':
    if(!q) throw `Use ${prefix + command} text|text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    teks1 = q.split("|")[0]
    teks2 = q.split("|")[1]
    maker.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [
    `${teks1}`,`${teks2}`])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    
    case 'glitch3':
    if(!q) throw `Use ${prefix + command} text|text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    teks1 = q.split("|")[0]
    teks2 = q.split("|")[1]
    maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    
    case '3dspace':
    if(!q) throw `Use ${prefix + command} text|text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    teks1 = q.split("|")[0]
    teks2 = q.split("|")[1]
    maker.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [
    `${teks1}`,`${teks2}`])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    
    case 'lion':
    if(!q) throw `Use ${prefix + command} text|text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    teks1 = q.split("|")[0]
    teks2 = q.split("|")[1]
    maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
    `${teks1}`,`${teks2}`])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    
    case '3dneon':
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    
    case 'neon':
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/neon-text-effect-online-879.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    
    case 'greenneon':
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/green-neon-text-effect-874.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    
    case 'bokeh':
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/bokeh-text-effect-876.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    
    
    
    case 'holographic':
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    
    
    
    case 'bear':
    
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    teks1 = q.split("|")[0]
    teks2 = q.split("|")[1]
    maker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
    `${teks1}`,`${teks2}`])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    
    case 'wolf':
    
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    teks1 = q.split("|")[0]
    teks2 = q.split("|")[1]
    maker.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
    `${teks1}`,`${teks2}`])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    
    case 'joker':
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/create-logo-joker-online-934.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    
    case 'dropwater2':
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    
    case 'summertime':
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/create-a-summer-neon-light-text-effect-online-1076.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    
    case 'neonlight2':
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    
    case 'thewall':
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/break-wall-text-effect-871.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    
    case 'natural':
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/natural-leaves-text-effect-931.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break 
    
    case 'carbon':
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/carbon-text-effect-833.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    
    case 'pencil':
    if(!q) throw`Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    
    case 'textmaker': {
    
    if (args.length < 1) throw `Example :\n${prefix + command} <name>`
    if (args[0] === 'glitch') {
    if (args.length < 2) throw `Example :\n${prefix + command + ' ' + args[0]} ${OWNER_NAME}`
    let teds = await thiccysapi.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [args[1]])
    QueenNilu.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:mek})
    } else if (args[0] === 'glow') {
    if (args.length < 2) throw `Example :\n${prefix + command + ' ' + args[0]} ${OWNER_NAME}`
    let teds = await thiccysapi.textpro("https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html", [args[1]])
    QueenNilu.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:mek})
    } else {
    mek.reply(`*Text Maker List :*\n•> glitch\n•> glow`)
    }
    }
    break
    case 'hoorror':{
    
    let link = `https://textpro.me/horror-blood-text-effect-online-883.html`
    let anui = await textpro(link, q)
    mek.reply(`Wait a moment while making the logo about 1 minute`) 
    console.log(anui)
    QueenNilu.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:mek})
    }
    break
    case 'whitebear':
    
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    case 'thunder2':
    
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/create-thunder-text-effect-online-881.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    break
    case 'neon':
    
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/neon-light-text-effect-online-882.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    case 'matrix2':
    
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/matrix-style-text-effect-online-884.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    case 'sky':
    
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    case 'magma':
    
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    case 'sand':
    
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/sand-writing-text-effect-online-990.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    case 'pencil':
    
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    case 'graffiti':
    
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    case 'metallic':
    
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/create-a-metallic-text-effect-free-online-1041.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    case 'steel':
    
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/steel-text-effect-online-921.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    case 'harrpotter':
    
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    case 'underwater':
    
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/3d-underwater-text-effect-generator-online-1013.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    case 'luxury':
    
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/3d-luxury-gold-text-effect-online-1003.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    case 'glue2':
    
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    case 'fabric':
    
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/fabric-text-effect-online-964.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    case 'neonlight':
    
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/neon-light-glitch-text-generator-online-1063.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    case 'lava':
    
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/lava-text-effect-online-914.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    case 'toxic':
    
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/toxic-text-effect-online-901.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    case 'ancient':
    
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    case 'christmas2':
    
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/sparkles-merry-christmas-text-effect-1054.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    case 'sci_fi':
    
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    case 'rainbow':
    
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    case 'classic':
    
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    case 'watercolor2':
    
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    case 'halloweem2':
    
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    case 'halloweenfire':
    
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/halloween-fire-text-effect-940.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    case 'writing':
    
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/sand-writing-text-effect-online-990.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    case 'foggy':
    
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    case 'marvel':
    
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    case 'skeleton2':
    
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    case 'sketch':
    
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    case 'wonderful':
    
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    case 'batman':
    
    if(!q) throw `Usteste ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/make-a-batman-logo-online-free-1066.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    case 'juice':
    
    if(!q) throw `Use ${prefix + command} text`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    maker.textpro("https://textpro.me/fruit-juice-text-effect-861.html", [
    `${q}`,])
    .then((data) => QueenNilu.sendMessage(mek.chat, { image: { url: data }, caption: `Made by ${global.BOT_NAME}` }, { quoted: m }))
    .catch((err) => console.log(err));
    break
    case 'pornhub':{
    
    if(!q) throw `Example: ${prefix + command} ajg | ea`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    inilogo4 = args.join(" ")
    inilogo9 = args.join(" ")
    var logo4 = inilogo4.split('|')[0]
    var logo9 = inilogo9.split('|')[1]
    let anuphub = await textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [`${logo4}`,`${logo9}`])
    console.log(anuphub)
    QueenNilu.sendMessage(from,{image:{url:anuphub}, caption:"Here you go!"},{quoted:mek})
    }
    break
    case 'retro':{
    if(!q) throw `Example: ${prefix + command} ajg | ea`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    inilogo4 = args.join(" ")
    inilogo9 = args.join(" ")
    var logo4 = inilogo4.split('|')[0]
    var logo9 = inilogo9.split('|')[1]
    let anutro2 = await textpro("https://textpro.me/create-3d-retro-text-effect-online-free-1065.html", [`${logo4}`,`${logo9}`])
    console.log(anutro2)
    QueenNilu.sendMessage(from,{image:{url:anutro2}, caption:"Here you go!"},{quoted:mek})
    }
    break
    case 'horror':{
    if(!q) throw `Example: ${prefix + command} ajg | ea`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    inilogo4 = args.join(" ")
    inilogo9 = args.join(" ")
    var logo4 = inilogo4.split('|')[0]
    var logo9 = inilogo9.split('|')[1]
    let anuror2 = await textpro("https://textpro.me/create-a-cinematic-horror-text-effect-1045.html", [`${logo4}`,`${logo9}`])
    console.log(anuror2)
    QueenNilu.sendMessage(from,{image:{url:anuror2}, caption:"Here you go!"},{quoted:mek})
    }
    break
    case '8bit':{
    if(!q) throw `Example: ${prefix + command} ajg | ea`
    await QueenNilu.sendMessage(mek.chat,{text:LOGO_MAKING})
    inilogo4 = args.join(" ")
    inilogo9 = args.join(" ")
    var logo4 = inilogo4.split('|')[0]
    var logo9 = inilogo9.split('|')[1]
    let anubit8 = await textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [`${logo4}`,`${logo9}`])
    console.log(anubit8)
    QueenNilu.sendMessage(from,{image:{url:anubit8}, caption:"Here you go!"},{quoted:mek})
    }
    break
    
      }
    
    //// inbox block 
    
    if (!mek.isGroup && global.INBOX_BLOCK == 'on') {  
      if (!isOwner) {
      await QueenNilu.sendMessage(mek.chat,{ text: '*Blocked !!!*\nINbox Block IS Enable By Owner' },{ quoted: mek })
      await sleep(8000)
      return await QueenNilu.updateBlockStatus(sender, "block")
      }
      }	
    
    /////// Daily Announcement 
    
    var getGMTh = new Date().getHours()
    var getGMTm = new Date().getMinutes()
    while (getGMTh == 16 && getGMTm == 10) {
      var ilan = ''
      if (global.LANG == 'EN') ilan = '| *✨Daily Announcements For  Queen Nilu✨* |\n\n'
      if (global.LANG == 'SI') ilan = '| *✨Queen Nilu වට්සැප් බොට් සදහා දෛනික නිවේදන✨* |\n\n'
      await QueenNilu.sendMessage(QueenNilu.user.id,{ text: ilan },{ quoted: mek })
    
    }
    
    
    /*
    if (sender == '94767438882@s.whatsapp.net') {
      const nilureact = ["👨‍💻","✅","👸","🥷"]
      var mask = nilureact[Math.floor(Math.random()*nilureact.length)]
      await QueenNilu.sendMessage(from, { react: { text: mask, key: m.key }})
    }
    */
    
    //============================================================================
    const bad = await fetchJson(`https://raw.githubusercontent.com/vihangayt0/server-/main/badby_alpha.json`)
    if (global.ANTI_BAD){
      if (!isAdmins) {
      for (any in bad){
      if (body.toLowerCase().includes(bad[any])){  
        if (!body.includes('tent')) {
          if (!body.includes('docu')) {
            if (!body.includes('https')) {
      if (groupAdmins.includes(sender)) return 
      if (mek.key.fromMe) return   
      await QueenNilu.sendMessage(from, { delete: mek.key })  
      await QueenNilu.sendMessage(from , { text: '*Bad word detected !*'})
      if (global.ANTI_BAD_ACTION){
      await QueenNilu.groupParticipantsUpdate(from,[sender], 'remove')
      }}}}}}}}
    //====================================================================
    switch (command) {
    case 'jid':
    reply(from)
    break
    
    default:				
    if (isOwner && body.startsWith('>')) {
    let bodyy = body.split('>')[1]
    let code2 = bodyy.replace("°", ".toString()");
    try {
    let resultTest = await eval(code2);
    if (typeof resultTest === "object") {
    reply(util.format(resultTest));
    } else {
    reply(util.format(resultTest));
    }
    } catch (err) {
    reply(util.format(err));
    }}}
    } catch (e) {
    const isError = String(e)
    console.log(isError)}
    })
    }
    app.get("/", (req, res) => {
    res.send("📟 Queen Nilu Working successfully!");
    });
    app.listen(port, () => console.log(`Queen Nilu Server listening on port http://localhost:${port}`));
    setTimeout(() => {
    connectToWA()
    }, 3000);
    