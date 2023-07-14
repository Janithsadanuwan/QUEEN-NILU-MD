
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
    //await QueenNilu.groupAcceptInvite('Lk3KCbvyaCyJ0QlouEL32K')
    
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
    