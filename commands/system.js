/*

░█▀▀█ ░█─░█ ░█▀▀▀ ░█▀▀▀ ░█▄─░█ 　 ░█▄─░█ ▀█▀ ░█─── ░█─░█ 　 ░█▀▄▀█ ░█▀▀▄ 
░█─░█ ░█─░█ ░█▀▀▀ ░█▀▀▀ ░█░█░█ 　 ░█░█░█ ░█─ ░█─── ░█─░█ 　 ░█░█░█ ░█─░█ 
─▀▀█▄ ─▀▄▄▀ ░█▄▄▄ ░█▄▄▄ ░█──▀█ 　 ░█──▀█ ▄█▄ ░█▄▄█ ─▀▄▄▀ 　 ░█──░█ ░█▄▄▀

Whatsapp Bot  By @Janiya

❥WHATSAPP - https://wa.me/94767438882

❥SUPPORT - https://t.me/QueenNilu

❥ YOUTUBE - https://youtube.com/c/Janithsadanuwan 

❤️Thanks For All Helpers ❤️

@nimesh-official - for Helps
@adiwajshing -For Web Api


*/
const _0x3b9eda = _0x42c9;
(function (_0x183f95, _0x12ac10) {
    const _0x62d21e = _0x42c9;
    const _0x19d000 = _0x183f95();
    while (!![]) {
        try {
            const _0x2e06f8 = -parseInt(_0x62d21e(0x1c9)) / 0x1 + parseInt(_0x62d21e(0x1c8)) / 0x2 * (-parseInt(_0x62d21e(0x1dc)) / 0x3) + -parseInt(_0x62d21e(0x1fd)) / 0x4 + -parseInt(_0x62d21e(0x1f0)) / 0x5 + -parseInt(_0x62d21e(0x1b5)) / 0x6 + parseInt(_0x62d21e(0x1f7)) / 0x7 * (-parseInt(_0x62d21e(0x1f1)) / 0x8) + -parseInt(_0x62d21e(0x1d5)) / 0x9 * (-parseInt(_0x62d21e(0x1bc)) / 0xa);
            if (_0x2e06f8 === _0x12ac10) {
                break;
            } else {
                _0x19d000['push'](_0x19d000['shift']());
            }
        } catch (_0x197931) {
            _0x19d000['push'](_0x19d000['shift']());
        }
    }
}(_0x35dd, 0x9533a));
const {addnote, cmd, sck1, delnote, allnotes, delallnote, tlang, botpic, runtime, prefix, Config} = require(_0x3b9eda(0x1fe));
cmd({
    'pattern': 'addnote',
    'category': '🐼\x20𝙾𝚆𝙽𝙴𝚁\x20𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂\x20🐼',
    'desc': _0x3b9eda(0x1a9),
    'filename': __filename
}, async (_0xfd3d43, _0x31c037, _0x2abd63, {isCreator: _0x1038c1}) => {
    const _0x575aac = _0x3b9eda;
    if (!_0x1038c1)
        return _0x31c037['reply'](tlang()[_0x575aac(0x1a8)]);
    if (!_0x2abd63)
        return _0x31c037[_0x575aac(0x19d)](_0x575aac(0x1a3));
    await addnote(_0x2abd63);
    return _0x31c037[_0x575aac(0x19d)](_0x575aac(0x1e0) + _0x2abd63 + _0x575aac(0x1fc));
});
cmd({
    'pattern': 'qr',
    'category': _0x3b9eda(0x1dd),
    'filename': __filename,
    'desc': _0x3b9eda(0x1e3)
}, async (_0x47fe3a, _0x92f9c9, _0x12dbd4) => {
    const _0x1ebb6d = _0x3b9eda;
    if (_0x12dbd4) {
        let _0x30ad3d = await getBuffer(_0x1ebb6d(0x1a5) + _0x12dbd4);
        await _0x47fe3a['sendMessage'](_0x92f9c9[_0x1ebb6d(0x19c)], { 'image': _0x30ad3d });
        return;
    }
    let _0x256efc = [{
            'buttonId': prefix + 'qr',
            'buttonText': { 'displayText': _0x1ebb6d(0x1d7) },
            'type': 0x1
        }];
    let _0x4275c3 = {
        'image': { 'url': 'https://secktorbot.onrender.com/' },
        'caption': _0x1ebb6d(0x1a2),
        'footer': '\x20Session',
        'headerType': 0x4,
        'buttons': _0x256efc,
        'contextInfo': {
            'externalAdReply': {
                'title': _0x1ebb6d(0x1b1),
                'body': _0x1ebb6d(0x1ce),
                'thumbnail': log0,
                'mediaType': 0x2,
                'mediaUrl': '',
                'sourceUrl': ''
            }
        }
    };
    await _0x47fe3a[_0x1ebb6d(0x1c5)](_0x92f9c9[_0x1ebb6d(0x19c)], _0x4275c3, { 'quoted': _0x92f9c9 });
    await sleep(0x14 * 0x3e8);
    return _0x92f9c9[_0x1ebb6d(0x19d)](_0x1ebb6d(0x1ae));
});
cmd({
    'pattern': _0x3b9eda(0x1bf),
    'category': _0x3b9eda(0x1e5),
    'filename': __filename,
    'desc': _0x3b9eda(0x1f4)
}, async (_0x4bf909, _0x59cd72, _0x5cbc3e, {isCreator: _0x258bf5}) => {
    const _0x441328 = _0x3b9eda;
    if (!_0x258bf5)
        return _0x59cd72[_0x441328(0x19d)]('This\x20command\x20is\x20onlt\x20for\x20my\x20Owner');
    try {
        let _0x4536ac = _0x59cd72['mentionedJid'] ? _0x59cd72[_0x441328(0x1df)][0x0] : _0x59cd72[_0x441328(0x198)][_0x441328(0x1d8)][_0x441328(0x1a7)] || ![];
        if (!_0x4536ac)
            return _0x59cd72[_0x441328(0x19d)](_0x441328(0x1d9));
        let _0x3c1e85 = _0x4bf909[_0x441328(0x1cf)](_0x4536ac);
        sck1[_0x441328(0x1ad)]({ 'id': _0x4536ac })['then'](async _0x41fd4f => {
            const _0x257d45 = _0x441328;
            if (!_0x41fd4f) {
                console[_0x257d45(0x1de)](_0x41fd4f[_0x257d45(0x1d1)]);
                return _0x59cd72['reply'](_0x3c1e85 + _0x257d45(0x1f6));
            } else {
                console[_0x257d45(0x1de)](_0x41fd4f[_0x257d45(0x1d1)]);
                if (_0x41fd4f['ban'] !== 'true')
                    return _0x59cd72[_0x257d45(0x19d)](_0x41fd4f[_0x257d45(0x1e1)] + '\x20is\x20already\x20unbanned.');
                await sck1[_0x257d45(0x1be)]({ 'id': _0x4536ac }, { 'ban': _0x257d45(0x200) });
                return _0x59cd72[_0x257d45(0x19d)](_0x41fd4f[_0x257d45(0x1e1)] + _0x257d45(0x1eb));
            }
        });
    } catch {
        return _0x59cd72['reply'](_0x441328(0x1d9));
    }
});
cmd({
    'pattern': _0x3b9eda(0x1ac),
    'category': '✨\x20𝙼𝙸𝚂𝙲\x20𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂\x20✨',
    'filename': __filename,
    'desc': _0x3b9eda(0x1f9)
}, async (_0x52dace, _0x3cf774, _0x41bd05) => {
    const _0x18aac2 = _0x3b9eda;
    if (!_0x3cf774[_0x18aac2(0x1e9)])
        return _0x3cf774['reply'](_0x18aac2(0x1f8) + (prefix + command) + _0x18aac2(0x1a1) + tlang()[_0x18aac2(0x1d3)]);
    let _0x11e80e = _0x3cf774[_0x18aac2(0x1e9)][_0x18aac2(0x19e)];
    let _0x3c214a = await _0x52dace[_0x18aac2(0x1e6)](_0x3cf774[_0x18aac2(0x1e9)]);
    if (/image/['test'](_0x11e80e)) {
        let _0x331b06 = await TelegraPh(_0x3c214a);
        return _0x3cf774[_0x18aac2(0x19d)]('Here\x20is\x20url\x20of\x20your\x20uploaded\x20Media\x20on\x20Telegraph.\x0a\x0a' + util[_0x18aac2(0x1c7)](_0x331b06));
    } else if (!/image/[_0x18aac2(0x1e8)](_0x11e80e)) {
        let _0x10afab = await TelegraPh(_0x3c214a);
        await fs[_0x18aac2(0x1d2)](_0x3c214a);
        return _0x3cf774[_0x18aac2(0x19d)](_0x18aac2(0x1b2) + util[_0x18aac2(0x1c7)](_0x10afab));
    }
    await fs['unlinkSync'](_0x3c214a);
});
cmd({
    'pattern': _0x3b9eda(0x1c6),
    'category': '✨\x20𝙼𝙸𝚂𝙲\x20𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂\x20✨',
    'filename': __filename,
    'desc': _0x3b9eda(0x1d4)
}, async (_0x16ee83, _0x22b20e, _0x2a33b5) => {
    const _0x43c3f5 = _0x3b9eda;
    const _0x5f0d94 = require(_0x43c3f5(0x1ef));
    if (!_0x22b20e[_0x43c3f5(0x1e9)])
        return _0x22b20e[_0x43c3f5(0x19d)](_0x43c3f5(0x19a));
    if (!_0x22b20e['quoted'])
        return _0x22b20e[_0x43c3f5(0x19d)](_0x43c3f5(0x1aa));
    let _0x520a3e = _0x22b20e[_0x43c3f5(0x1e9)]['text'];
    whole = await _0x5f0d94(_0x520a3e, {
        'from': _0x2a33b5[0x1] || _0x43c3f5(0x1fb),
        'to': _0x2a33b5[_0x43c3f5(0x19b)]('\x20')[0x0] || 'hi'
    });
    if ('text' in whole) {
        return await _0x22b20e['reply'](_0x43c3f5(0x1ff) + '\x20```' + (_0x2a33b5['split']('\x20')[0x0] || _0x43c3f5(0x1b3)) + '```\x0a' + '\x20*From\x20Language🔎:*\x20' + _0x43c3f5(0x1ab) + (_0x2a33b5[0x1] || _0x43c3f5(0x1ea)) + '```\x0a' + _0x43c3f5(0x1f5) + '\x20```' + whole['text'] + _0x43c3f5(0x1b7));
    }
});
cmd({
    'pattern': _0x3b9eda(0x1c0),
    'category': '🐼\x20𝙾𝚆𝙽𝙴𝚁\x20𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂\x20🐼',
    'filename': __filename,
    'desc': _0x3b9eda(0x1a0)
}, async (_0x91b840, _0x4427e3, _0x28a61c, {isCreator: _0xc3d947}) => {
    const _0x3f1d5a = _0x3b9eda;
    if (!_0xc3d947)
        return _0x4427e3['reply'](tlang()['owner']);
    const {exec: _0x2e32ec} = require(_0x3f1d5a(0x1d6));
    _0x2e32ec(_0x28a61c, (_0x51b2bd, _0x20a3ae) => {
        const _0x56cd27 = _0x3f1d5a;
        if (_0x51b2bd)
            return _0x4427e3[_0x56cd27(0x19d)]('----' + tlang()[_0x56cd27(0x1ed)] + _0x56cd27(0x1a4) + _0x51b2bd);
        if (_0x20a3ae) {
            return _0x4427e3[_0x56cd27(0x19d)](_0x56cd27(0x1da) + tlang()[_0x56cd27(0x1ed)] + _0x56cd27(0x1a4) + _0x20a3ae);
        }
    });
});
cmd({
    'pattern': _0x3b9eda(0x1b6),
    'category': '🐼\x20𝙾𝚆𝙽𝙴𝚁\x20𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂\x20🐼',
    'filename': __filename,
    'desc': 'Runs\x20js\x20code\x20on\x20node\x20server.'
}, async (_0x3cc931, _0x4fc084, _0x3e71c9, {isCreator: _0x4b0a2a}) => {
    const _0xfa7365 = _0x3b9eda;
    if (!_0x4b0a2a)
        return;
    try {
        let _0x1e15a0 = eval(_0xfa7365(0x1db) + _0x3e71c9 + _0xfa7365(0x19f));
        if (typeof _0x1e15a0 === 'object')
            _0x4fc084[_0xfa7365(0x19d)](JSON[_0xfa7365(0x199)](_0x1e15a0));
        else
            _0x4fc084[_0xfa7365(0x19d)](_0x1e15a0[_0xfa7365(0x201)]());
    } catch (_0x466966) {
        return _0x4fc084['reply'](_0x466966[_0xfa7365(0x201)]());
    }
});
cmd({
    'pattern': _0x3b9eda(0x1fa),
    'category': _0x3b9eda(0x1dd),
    'filename': __filename,
    'desc': 'Deletes\x20note\x20from\x20db.'
}, async (_0x420275, _0x37fea1, _0x19c5c0, {isCreator: _0x551566}) => {
    const _0x239681 = _0x3b9eda;
    const {tlang: _0x3986f7} = require(_0x239681(0x1b8));
    if (!_0x551566)
        return _0x37fea1[_0x239681(0x19d)](_0x3986f7()[_0x239681(0x1a8)]);
    await delnote(_0x19c5c0[_0x239681(0x19b)]('\x20')[0x0]);
    return _0x37fea1[_0x239681(0x19d)]('Id:\x20' + _0x19c5c0[_0x239681(0x19b)]('\x20')[0x0] + _0x239681(0x197));
});
function _0x35dd() {
    const _0xd310a8 = [
        'Shows\x20list\x20of\x20all\x20notes.',
        'updateOne',
        'unban',
        'shell',
        'ownername',
        'recording',
        'ALIVE_MESSAGE',
        'is\x20bot\x20alive??',
        'sendMessage',
        'trt',
        'format',
        '83386GrVPPj',
        '399103NITJMO',
        'true',
        'alive',
        '_Successfully\x20Banned\x20',
        '*\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20💃ᴅᴇᴘʟᴏʏ\x20ǫᴜᴇᴇɴ\x20ɴɪʟᴜ💃\x0a\x0a•ᴡᴇʙꜱɪᴛᴇ\x20-\x20https://janithsadanuwan.tech/QueenNilu\x0a•ɢɪᴛʜᴜʙ-\x20https://github.com/Janithsadanuwan\x0a\x20•Qʀ\x20-https://bit.ly/QueenNiluQR\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a_type\x20*.menu*\x20to\x20get\x20command\x20list_\x0a\x0a_𝚃𝙷𝙰𝙽𝙺𝚂\x20𝙵𝙾𝚁\x20𝚄𝚂𝙸𝙽𝙶\x20𝚀𝚄𝙴𝙴𝙽\x20𝙽𝙸𝙻𝚄_\x0a\x0a',
        'Get\x20you\x20Session\x20ID',
        'getName',
        'pushName',
        'ban',
        'unlinkSync',
        'greet',
        'Translate\x27s\x20given\x20text\x20in\x20desird\x20language.',
        '33872409jeUAqD',
        'child_process',
        'Generate\x20New',
        'contextInfo',
        'Please\x20mention\x20any\x20user.❌',
        '----',
        'const\x20a\x20=\x20async()=>{\x0a',
        '33NKCrZJ',
        '🐼\x20𝙾𝚆𝙽𝙴𝚁\x20𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂\x20🐼',
        'log',
        'mentionedJid',
        'New\x20note\x20',
        'name',
        'All\x20Available\x20Notes\x20are:-\x0a\x0a',
        'Sends\x20CitelsQueenNilu\x20Qr\x20code\x20to\x20scan\x20and\x20get\x20your\x20session\x20id.',
        'https://github.com/Dragonxjanith/UPLOADS/raw/main/VOICE/nilu.mp3',
        '✨\x20𝙼𝙸𝚂𝙲\x20𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂\x20✨',
        'downloadAndSaveMediaMessage',
        '*A\x20bot\x20developed\x20by\x20SamPandey001.*',
        'test',
        'quoted',
        'Auto\x20Detect',
        '\x20is\x20free\x20as\x20a\x20bird\x20now',
        'uptime',
        'title',
        'then',
        'translatte',
        '5198005ZugaVo',
        '16WuWiNt',
        'Bans\x20user\x20from\x20using\x20bot.',
        '\x20from\x20Using\x20Commands._',
        'Unbans\x20banned\x20user\x20(from\x20using\x20bot).',
        '*Result♦️:*\x20',
        '\x20is\x20unbanned.',
        '1426614NgHGIT',
        'Pls\x20mention\x20me\x20any\x20image/video\x20and\x20type\x20',
        'image\x20to\x20url.',
        'delnote',
        'auto',
        '\x20added\x20in\x20mongodb.',
        '965296UlXfsK',
        '../lib',
        '*Translated\x20Into🔎:*\x20',
        'false',
        'toString',
        '\x27s\x20note\x20has\x20been\x20deleted\x20from\x20mongodb.',
        'msg',
        'stringify',
        '*Please\x20reply\x20to\x20any\x20message.*',
        'split',
        'chat',
        'reply',
        'mtype',
        '\x0a}\x0aa()',
        'Runs\x20command\x20in\x20Heroku(server)\x20shell.',
        '\x20to\x20upload\x20my\x20',
        '*_Scan\x20Qr\x20within\x2015\x20seconds_*\x0aYou\x27ll\x20get\x20session\x20id\x20in\x20your\x20log\x20number.',
        '🔍\x20Please\x20provide\x20me\x20a\x20valid\x20gist\x20url.',
        '----\x0a\x0a',
        'https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=',
        'allnotes',
        'participant',
        'owner',
        'Adds\x20a\x20note\x20on\x20db.',
        'Please\x20mention\x20or\x20give\x20tex.',
        '\x20```',
        'url',
        'findOne',
        'Your\x20session\x20is\x20over\x20now.',
        'save',
        'Please\x20mention\x20any\x20user.❌\x20',
        'QueenNilu\x20Session',
        'Here\x20is\x20url\x20of\x20your\x20uploaded\x20Media\x20on\x20Telegraph.\x0a\x0a',
        'Auto\x20to\x20Hindi',
        '*\x20\x0a*👸ʀᴜɴᴛɪᴍᴇ\x20:\x20',
        '3637296jJzLhK',
        'eval',
        '```',
        '../lib/scraper',
        'delallnotes',
        '◈𝚀𝚄𝙴𝙴𝙽\x20𝙽𝙸𝙻𝚄\x20𝙸𝚂\x20𝙰𝙻𝙸𝚅𝙴◈\x0a\x0a*Hello,\x20',
        '\x20is\x20already\x20Banned\x20from\x20Using\x20Commands',
        '10eIQdlS'
    ];
    _0x35dd = function () {
        return _0xd310a8;
    };
    return _0x35dd();
}
cmd({
    'pattern': _0x3b9eda(0x1b9),
    'category': '🐼\x20𝙾𝚆𝙽𝙴𝚁\x20𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂\x20🐼',
    'filename': __filename,
    'desc': 'Deletes\x20all\x20notes\x20from\x20db.'
}, async (_0x29369b, _0x132dde, _0x24007f, _0x2eb4b2) => {
    const _0x298a41 = _0x3b9eda;
    const {tlang: _0x5271f1} = require(_0x298a41(0x1b8));
    if (!_0x2eb4b2)
        return _0x132dde[_0x298a41(0x19d)](_0x5271f1()[_0x298a41(0x1a8)]);
    await delallnote();
    return _0x132dde[_0x298a41(0x19d)]('All\x20notes\x20deleted\x20from\x20mongodb.');
});
function _0x42c9(_0x147a6c, _0x11fafb) {
    const _0x35dd8c = _0x35dd();
    _0x42c9 = function (_0x42c947, _0x1beb9d) {
        _0x42c947 = _0x42c947 - 0x197;
        let _0x1296ab = _0x35dd8c[_0x42c947];
        return _0x1296ab;
    };
    return _0x42c9(_0x147a6c, _0x11fafb);
}
cmd({
    'pattern': _0x3b9eda(0x1d1),
    'category': _0x3b9eda(0x1dd),
    'filename': __filename,
    'desc': _0x3b9eda(0x1f2)
}, async (_0x5592e9, _0xdb5f53, _0x515a73, {isCreator: _0x1e80d5}) => {
    const _0x8260d3 = _0x3b9eda;
    if (!_0x1e80d5)
        return _0xdb5f53['reply'](tlang()['owner']);
    try {
        let _0x7df4bb = _0xdb5f53[_0x8260d3(0x1df)] ? _0xdb5f53[_0x8260d3(0x1df)][0x0] : _0xdb5f53['msg'][_0x8260d3(0x1d8)][_0x8260d3(0x1a7)] || ![];
        if (!_0x7df4bb)
            return _0xdb5f53[_0x8260d3(0x19d)]('❌\x20Please\x20mention\x20any\x20user\x20' + tlang()[_0x8260d3(0x1d3)] + '.');
        let _0x37e6de = _0x5592e9[_0x8260d3(0x1cf)](_0x7df4bb);
        sck1[_0x8260d3(0x1ad)]({ 'id': _0x7df4bb })[_0x8260d3(0x1ee)](async _0x179236 => {
            const _0x10cdc8 = _0x8260d3;
            if (!_0x179236) {
                await new sck1({
                    'id': _0x7df4bb,
                    'ban': _0x10cdc8(0x1ca)
                })[_0x10cdc8(0x1af)]();
                return _0xdb5f53['reply']('_Banned\x20' + _0x179236[_0x10cdc8(0x1e1)] + '\x20from\x20Using\x20Commands._');
            } else {
                if (_0x179236[_0x10cdc8(0x1d1)] == 'true')
                    return _0xdb5f53['reply'](_0x37e6de + _0x10cdc8(0x1bb));
                await sck1[_0x10cdc8(0x1be)]({ 'id': _0x7df4bb }, { 'ban': _0x10cdc8(0x1ca) });
                return _0xdb5f53[_0x10cdc8(0x19d)](_0x10cdc8(0x1cc) + _0x179236[_0x10cdc8(0x1e1)] + _0x10cdc8(0x1f3));
            }
        });
    } catch (_0x12e5de) {
        console[_0x8260d3(0x1de)](_0x12e5de);
        return _0xdb5f53['reply'](_0x8260d3(0x1b0));
    }
});
cmd({
    'pattern': _0x3b9eda(0x1cb),
    'category': '🩵\x20𝙶𝙴𝙽𝙴𝚁𝙰𝙻\x20𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂\x20🩵',
    'filename': __filename,
    'react': '👻',
    'desc': _0x3b9eda(0x1c4)
}, async (_0x53f715, _0x5aa42d, _0x57098e, _0x40dc35) => {
    const _0x3770f8 = _0x3b9eda;
    await _0x53f715['sendPresenceUpdate'](_0x3770f8(0x1c2), _0x5aa42d[_0x3770f8(0x19c)]);
    await _0x53f715['sendMessage'](_0x5aa42d[_0x3770f8(0x19c)], {
        'audio': { 'url': _0x3770f8(0x1e4) },
        'mimetype': 'audio/mp4',
        'ptt': !![]
    });
    let _0x8bba6d = Config[_0x3770f8(0x1c3)] || _0x3770f8(0x1e7);
    const _0x33def5 = _0x3770f8(0x1ba) + _0x5aa42d[_0x3770f8(0x1d0)] + ',*\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20💃ᴀʙᴏᴜᴛ\x20ʙᴏᴛ💃\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a*🧑🏻‍💻ᴅᴇᴠᴇʟᴏᴘᴇʀ\x20:\x20𝙹𝙰𝙽𝙸𝚈𝙰*\x0a*🔮ᴠᴇʀꜱɪᴏɴ\x20:\x202.0.0*\x0a*🤹‍♂️\x20ᴏᴡɴᴇʀ\x20:\x20' + Config[_0x3770f8(0x1c1)] + _0x3770f8(0x1b4) + runtime(process[_0x3770f8(0x1ec)]()) + _0x3770f8(0x1cd);
    let _0x38dbff = {
        'image': { 'url': Config['alivelogo'] },
        'caption': _0x33def5,
        'headerType': 0x4
    };
    return _0x53f715['sendMessage'](_0x5aa42d['chat'], _0x38dbff, { 'quoted': _0x5aa42d });
});
cmd({
    'pattern': _0x3b9eda(0x1a6),
    'category': '🐼\x20𝙾𝚆𝙽𝙴𝚁\x20𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂\x20🐼',
    'filename': __filename,
    'desc': _0x3b9eda(0x1bd)
}, async (_0x425f90, _0x38b063, _0x4f9d24, {isCreator: _0x5f3373}) => {
    const _0x3a7eab = _0x3b9eda;
    const {tlang: _0x2a8285} = require(_0x3a7eab(0x1fe));
    if (!_0x5f3373)
        return _0x38b063[_0x3a7eab(0x19d)](_0x2a8285()['owner']);
    const _0x2adab5 = new Array();
    let _0x1d8996 = _0x3a7eab(0x1e2);
    _0x1d8996 += await allnotes();
    return _0x38b063[_0x3a7eab(0x19d)](_0x1d8996);
});