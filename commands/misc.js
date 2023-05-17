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
const _0x5455ff = _0x3595;
(function (_0x1cddd5, _0x541866) {
    const _0x1967c3 = _0x3595;
    const _0x1d0408 = _0x1cddd5();
    while (!![]) {
        try {
            const _0x52dc44 = parseInt(_0x1967c3(0xf7)) / 0x1 + parseInt(_0x1967c3(0x14d)) / 0x2 + -parseInt(_0x1967c3(0x11d)) / 0x3 + parseInt(_0x1967c3(0x10b)) / 0x4 + -parseInt(_0x1967c3(0xe9)) / 0x5 + -parseInt(_0x1967c3(0xf4)) / 0x6 * (-parseInt(_0x1967c3(0x12f)) / 0x7) + parseInt(_0x1967c3(0xb1)) / 0x8;
            if (_0x52dc44 === _0x541866) {
                break;
            } else {
                _0x1d0408['push'](_0x1d0408['shift']());
            }
        } catch (_0x32db0e) {
            _0x1d0408['push'](_0x1d0408['shift']());
        }
    }
}(_0x2dae, 0x4e122));
const {tlang, getAdmin, prefix, Config, sck, fetchJson, runtime, cmd} = require('../lib');
let {dBinary, eBinary} = require(_0x5455ff(0x121));
const {Sticker, createSticker, StickerTypes} = require(_0x5455ff(0xfb));
const fs = require('fs');
const axios = require(_0x5455ff(0x159));
function _0x3595(_0x3a26da, _0x7c525e) {
    const _0x2dae46 = _0x2dae();
    _0x3595 = function (_0x35956e, _0x5c85d5) {
        _0x35956e = _0x35956e - 0xb1;
        let _0xdaffd3 = _0x2dae46[_0x35956e];
        return _0xdaffd3;
    };
    return _0x3595(_0x3a26da, _0x7c525e);
}
cmd({
    'pattern': _0x5455ff(0xf1),
    'desc': _0x5455ff(0xbf),
    'category': _0x5455ff(0x13f)
}, async (_0x235d5f, _0x391dfb, _0x3253f9, {isCreator: _0x56753a}) => {
    const _0x4f1e59 = _0x5455ff;
    if (!_0x56753a)
        return _0x391dfb['reply'](tlang()[_0x4f1e59(0xb9)]);
    let _0x5059b4 = await sck['findOne']({ 'id': _0x391dfb[_0x4f1e59(0x133)] });
    if (!_0x5059b4) {
        await new sck({
            'id': _0x391dfb['chat'],
            'welcome': _0x3253f9,
            'events': 'true'
        })[_0x4f1e59(0x100)]();
        return _0x391dfb['reply'](_0x4f1e59(0xed));
    } else {
        await await sck['updateOne']({ 'id': _0x391dfb[_0x4f1e59(0x133)] }, {
            'welcome': _0x3253f9,
            'events': _0x4f1e59(0x11c)
        });
        return _0x391dfb[_0x4f1e59(0x13b)]('Welcome\x20updated\x20successfully.');
    }
});
cmd({
    'pattern': _0x5455ff(0x158),
    'desc': _0x5455ff(0xf6),
    'category': _0x5455ff(0x13f)
}, async (_0x1d32b8, _0x3ae799, _0x198a4d, {isCreator: _0x434f74}) => {
    const _0x27b9a1 = _0x5455ff;
    if (!_0x434f74)
        return _0x3ae799[_0x27b9a1(0x13b)](tlang()[_0x27b9a1(0xb9)]);
    let _0x2a5c04 = await sck[_0x27b9a1(0xe2)]({ 'id': _0x3ae799[_0x27b9a1(0x133)] });
    if (!_0x2a5c04) {
        await new sck({
            'id': _0x3ae799['chat'],
            'goodbye': _0x198a4d,
            'events': _0x27b9a1(0x11c)
        })[_0x27b9a1(0x100)]();
        return _0x3ae799['reply'](_0x27b9a1(0x104));
    } else {
        await await sck[_0x27b9a1(0xf2)]({ 'id': _0x3ae799[_0x27b9a1(0x133)] }, {
            'goodbye': _0x198a4d,
            'events': _0x27b9a1(0x11c)
        });
        return _0x3ae799['reply'](_0x27b9a1(0x14e));
    }
});
cmd({
    'pattern': _0x5455ff(0xeb),
    'desc': _0x5455ff(0xc1),
    'category': '🎗️\x20𝚂𝚃𝙸𝙲𝙺𝙴𝚁\x20𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂\x20🎗️',
    'filename': __filename
}, async (_0x4fc878, _0x1409fe, _0x563f96) => {
    const _0x565a12 = _0x5455ff;
    _0x4fc878[_0x565a12(0xc5)](_0x1409fe[_0x565a12(0x133)], { 'sticker': { 'url': _0x565a12(0x13e) + _0x563f96 + _0x565a12(0x136) } }, { 'quoted': _0x1409fe });
});
cmd({
    'pattern': _0x5455ff(0x146),
    'alias': ['s'],
    'desc': 'Makes\x20sticker\x20of\x20replied\x20image/video.',
    'category': '🎗️\x20𝚂𝚃𝙸𝙲𝙺𝙴𝚁\x20𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂\x20🎗️',
    'use': '<reply\x20to\x20any\x20image/video.>'
}, async (_0x323930, _0x239a42, _0x4c676f) => {
    const _0x123fcf = _0x5455ff;
    if (!_0x239a42[_0x123fcf(0xc7)])
        return _0x239a42[_0x123fcf(0x13b)](_0x123fcf(0xcd));
    let _0x3f98d1 = _0x239a42['quoted'][_0x123fcf(0xd3)];
    pack = Config[_0x123fcf(0xc6)];
    author = Config[_0x123fcf(0xfa)];
    if (_0x239a42[_0x123fcf(0xc7)]) {
        let _0x38b01c = await _0x239a42['quoted'][_0x123fcf(0x137)]();
        _0x239a42[_0x123fcf(0x13b)]('*Processing\x20Your\x20request*');
        let _0x2c2e46 = new Sticker(_0x38b01c, {
            'pack': pack,
            'author': author,
            'type': _0x4c676f[_0x123fcf(0x127)]('--crop' || '-c') ? StickerTypes['CROPPED'] : StickerTypes['FULL'],
            'categories': [
                '🤩',
                '🎉'
            ],
            'id': _0x123fcf(0x120),
            'quality': 0x4b,
            'background': _0x123fcf(0x123)
        });
        const _0x3904cc = await _0x2c2e46[_0x123fcf(0x114)]();
        return _0x323930[_0x123fcf(0xc5)](_0x239a42[_0x123fcf(0x133)], { 'sticker': _0x3904cc }, { 'quoted': _0x239a42 });
    } else if (/video/[_0x123fcf(0xd4)](_0x3f98d1)) {
        if ((quoted[_0x123fcf(0xde)] || _0x239a42[_0x123fcf(0xc7)])[_0x123fcf(0x115)] > 0x14)
            return _0x239a42[_0x123fcf(0x13b)](_0x123fcf(0xf3));
        let _0x19555c = await quoted[_0x123fcf(0x137)]();
        let _0x120b81 = new Sticker(_0x19555c, {
            'pack': pack,
            'author': author,
            'type': StickerTypes[_0x123fcf(0xc8)],
            'categories': [
                '🤩',
                '🎉'
            ],
            'id': _0x123fcf(0x120),
            'quality': 0x46,
            'background': 'transparent'
        });
        const _0x52fcb2 = await _0x120b81[_0x123fcf(0x114)]();
        return _0x323930[_0x123fcf(0xc5)](_0x239a42['chat'], { 'sticker': _0x52fcb2 }, { 'quoted': _0x239a42 });
    } else {
        _0x239a42[_0x123fcf(0x13b)](_0x123fcf(0xfe));
    }
});
cmd({
    'pattern': 'exec',
    'desc': _0x5455ff(0xd5),
    'category': _0x5455ff(0x126),
    'filename': __filename
}, async (_0x1b0b2d, _0x24bb0f, _0x34180b) => {
    const _0x131c73 = _0x5455ff;
    try {
        const _0x3c16bf = {
            'script': _0x24bb0f['quoted'][_0x131c73(0xfd)],
            'language': _0x34180b[0x1],
            'versionIndex': '0',
            'stdin': _0x34180b[_0x131c73(0xff)](0x2)[_0x131c73(0xdd)]('\x20'),
            'clientId': '694805244d4f825fc02a9d6260a54a99',
            'clientSecret': _0x131c73(0xce)
        };
        request({
            'url': _0x131c73(0xd6),
            'method': 'POST',
            'json': _0x3c16bf
        }, function (_0x5626d0, _0x51cfde, _0x464930) {
            const _0x5d388a = _0x131c73;
            _0x24bb0f[_0x5d388a(0x13b)]('>\x20' + _0x34180b[0x1] + '\x0a\x0a' + _0x5d388a(0x107) + _0x464930[_0x5d388a(0xef)] + _0x5d388a(0x107));
        });
    } catch (_0x4982eb) {
        console['log'](_0x4982eb);
    }
});
cmd({
    'pattern': _0x5455ff(0x14c),
    'desc': _0x5455ff(0x13a),
    'category': _0x5455ff(0x126),
    'filename': __filename
}, async (_0x2fafd9, _0x12ef75, _0x2e8ac6) => {
    const _0x421151 = _0x5455ff;
    if (!_0x2e8ac6)
        return _0x12ef75[_0x421151(0x13b)]('*👸💬\x20Please\x20Give\x20Some\x20Text*\x0a' + _0x421151(0x10e));
    _0x12ef75[_0x421151(0x13b)](_0x421151(0xe5) + _0x2e8ac6);
});
cmd({
    'pattern': 'steal',
    'desc': _0x5455ff(0xbd),
    'category': _0x5455ff(0x125),
    'filename': __filename
}, async (_0x17d1e8, _0x4efdb6, _0x250ba4) => {
    const _0x3d0333 = _0x5455ff;
    if (!_0x4efdb6['quoted'])
        return _0x4efdb6[_0x3d0333(0x13b)]('*Mention\x20any\x20Image\x20or\x20video\x20Sir.*');
    let _0x22864c = _0x4efdb6[_0x3d0333(0xc7)][_0x3d0333(0xd3)];
    var _0x4bb242;
    var _0x215478;
    if (_0x250ba4) {
        anu = _0x250ba4['split']('|');
        _0x4bb242 = anu[0x0] !== '' ? anu[0x0] : _0x4efdb6['pushName'] + '♥️';
        _0x215478 = anu[0x1] !== '' ? anu[0x1] : Config[_0x3d0333(0xfa)];
    } else {
        _0x4bb242 = _0x4efdb6['pushName'];
        _0x215478 = '♥️';
    }
    let _0x30c3cb = await _0x4efdb6['quoted'][_0x3d0333(0x137)]();
    _0x4efdb6[_0x3d0333(0x13b)](_0x3d0333(0x151));
    let _0x66ffd8 = new Sticker(_0x30c3cb, {
        'pack': _0x4bb242,
        'author': _0x215478,
        'type': _0x250ba4[_0x3d0333(0x127)](_0x3d0333(0xc3) || '-c') ? StickerTypes[_0x3d0333(0xba)] : StickerTypes[_0x3d0333(0xc8)],
        'categories': [
            '🤩',
            '🎉'
        ],
        'id': _0x3d0333(0x120),
        'quality': 0x4b,
        'background': _0x3d0333(0x123)
    });
    const _0x129435 = await _0x66ffd8[_0x3d0333(0x114)]();
    return _0x17d1e8['sendMessage'](_0x4efdb6[_0x3d0333(0x133)], { 'sticker': _0x129435 }, { 'quoted': _0x4efdb6 });
});
cmd({
    'pattern': 'uptime',
    'alias': [_0x5455ff(0x116)],
    'desc': 'Tells\x20runtime/uptime\x20of\x20bot.',
    'category': _0x5455ff(0x126),
    'filename': __filename
}, async (_0x2c378d, _0x18a2dc, _0x1b7d1e) => {
    const _0x43d9f9 = _0x5455ff;
    const _0x28aefb = runtime(process['uptime']());
    _0x18a2dc[_0x43d9f9(0x13b)](_0x43d9f9(0x150) + tlang()[_0x43d9f9(0x141)] + ':\x20' + _0x28aefb);
});
function _0x2dae() {
    const _0x3a6cd7 = [
        'decode\x20binary',
        '429680tpYHSn',
        'bot\x20on',
        'events',
        '```Example\x20.readmore\x20Janiya```',
        'isGroup',
        'artist',
        'Send\x20text\x20to\x20be\x20encoded.',
        'Mixes\x20two\x20emojies.',
        'log',
        'toBuffer',
        'seconds',
        'runtime',
        'activates\x20and\x20deactivates\x20events.\x0ause\x20buttons\x20to\x20toggle.',
        '\x0a*Fliped\x20text\x20:*\x0a',
        '*Bot*\x20was\x20already\x20enabled',
        'antilink',
        'results',
        'true',
        '865761eFWjhe',
        'group',
        'sendImageAsSticker',
        '12345',
        '../lib/binary',
        '*HERE\x20WE\x20GO*',
        'transparent',
        'Flips\x20given\x20text.',
        '🎗️\x20𝚂𝚃𝙸𝙲𝙺𝙴𝚁\x20𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂\x20🎗️',
        '✨\x20𝙼𝙸𝚂𝙲\x20𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂\x20✨',
        'includes',
        'map',
        'url',
        'Chatbot\x20activated\x20successfully.',
        'sendButtonText',
        'dbinary',
        'Turn\x20On',
        'Makes\x20wa\x20me\x20of\x20quoted\x20or\x20mentioned\x20user.',
        '134057aHydaO',
        'reverse',
        'chatbot\x20off',
        'Mix\x202\x20emojies',
        'chat',
        '../lib/',
        '<query>',
        '&apikey=8cac4266c40a',
        'download',
        'pushName',
        'participants',
        'Adds\x20*readmore*\x20in\x20given\x20text.',
        'reply',
        'split',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20*🎗️Tittle\x20:*\x20',
        'https://api.zahwazein.xyz/creator/attp?text=',
        '👥\x20𝙶𝚁𝙾𝚄𝙿\x20𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂\x20👥',
        'Bot\x20Status\x20in\x20Group:\x20',
        'title',
        'Chatbot\x20was\x20already\x20disabled.',
        'sender',
        'https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=',
        'encode\x20binary',
        'sticker',
        'Successfully\x20disabled\x20*',
        'floor',
        'bot\x20off',
        'lyrics',
        'simple-find-lyrics',
        'readmore',
        '86564aAHJgH',
        'Goodbye\x20updated\x20successfully.',
        'Where\x27s\x20the\x20link\x20?',
        'Uptime\x20of\x20',
        '*Processing\x20Your\x20request*',
        'act\x20nsfw',
        '```「\x20\x20Text\x20Flipper\x20Tool\x20\x20」```\x0a*IGiven\x20text\x20:*\x0a',
        'chatbot',
        'Queen\x20Nilu',
        'Activate\x20Events:Welcome\x20&\x20goodbye',
        'activates\x20and\x20deactivates\x20nsfw.\x0ause\x20buttons\x20to\x20toggle.',
        'setgoodbye',
        'axios',
        '4576920uBHitY',
        'The\x20most\x20',
        'mentionedJid',
        'Send\x20text\x20to\x20be\x20decoded.',
        'Turn\x20Off',
        'Chatbot\x20was\x20already\x20enabled.',
        'https://wa.me/',
        'key',
        'owner',
        'CROPPED',
        'deact\x20antilink',
        'Enabled\x20chatbot\x20successfully.',
        'Makes\x20sticker\x20of\x20replied\x20image/video.',
        'off',
        'sets\x20welcome\x20message\x20in\x20specific\x20group.',
        '\x20around\x20us\x20is\x20*@',
        'Makes\x20glowing\x20sticker\x20of\x20text.',
        'random',
        '--crop',
        'Queen\x20QueenNilu',
        'sendMessage',
        'packname',
        'quoted',
        'FULL',
        'act\x20events',
        'botadmin',
        'name',
        'replace',
        '*Mention\x20any\x20Image\x20or\x20video\x20Sir.*',
        '741b8b6a57446508285bb5893f106df3e20f1226fa3858a1f2aba813799d4734',
        'nsfw',
        'Activate\x20antilink:Deletes\x20Link\x20+\x20kick',
        'Chatbot\x20Status:\x20',
        'unlinkSync',
        'mtype',
        'test',
        'Evaluates\x20quoted\x20code\x20with\x20given\x20language.',
        'https://api.jdoodle.com/v1/execute',
        'activates\x20and\x20deactivates\x20bot.\x0ause\x20buttons\x20to\x20toggle.',
        'Chatbot\x20deactivated\x20successfully.',
        'activates\x20and\x20deactivates\x20chatbot.\x0ause\x20buttons\x20to\x20toggle.',
        'mp4fromurl',
        'Activate\x20nsfw:18+\x20commands',
        'Get\x20Lyrics',
        'join',
        'msg',
        'false',
        'Example\x20:\x20.emojimix\x20😅+🤔',
        'emix',
        'findOne',
        'emix\x20😅,🤔',
        'user',
        '​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​',
        'body',
        'groupMetadata',
        '*Bot*\x20was\x20already\x20disabled',
        '1960145bONjwf',
        'bot',
        'attp',
        '*Which\x20type\x20of\x20User\x20you\x20want?*',
        'Welcome\x20added\x20added\x20for\x20this\x20group.',
        'chatbot\x20on',
        'output',
        'botenable',
        'setwelcome',
        'updateOne',
        'Cannot\x20fetch\x20videos\x20longer\x20than\x20*20\x20Seconds*',
        '18ILsdPK',
        'tags',
        'sets\x20goodbye\x20message\x20in\x20specific\x20group.',
        '220124gpwZsN',
        'fliptext',
        'fliptext\x20Back\x20in\x20black',
        'author',
        'wa-sticker-formatter',
        'ebinary',
        'text',
        '*Uhh,Please\x20reply\x20to\x20any\x20image\x20or\x20video*',
        'slice',
        'save',
        'it\x27s\x20f\x20up',
        'worktype',
        'decodeJid',
        'Goodbye\x20added\x20for\x20this\x20group.',
        'emojimix',
        'length',
        '```',
        'startsWith',
        'act\x20antilink'
    ];
    _0x2dae = function () {
        return _0x3a6cd7;
    };
    return _0x2dae();
}
cmd({
    'pattern': 'wm',
    'desc': _0x5455ff(0x12e),
    'category': _0x5455ff(0x126),
    'filename': __filename
}, async (_0x42d1d2, _0x102f6c, _0x2b7bde) => {
    const _0x325912 = _0x5455ff;
    let _0x21676e = _0x102f6c[_0x325912(0xb3)] ? _0x102f6c[_0x325912(0xb3)][0x0][_0x325912(0x13c)]('@')[0x0] : _0x102f6c[_0x325912(0xc7)] ? _0x102f6c[_0x325912(0xc7)][_0x325912(0x143)]['split']('@')[0x0] : _0x2b7bde[_0x325912(0xcc)]('@')[0x0];
    _0x102f6c['reply'](_0x325912(0xb7) + _0x21676e);
});
cmd({
    'pattern': 'pick',
    'desc': 'Pics\x20random\x20user\x20from\x20Group',
    'category': '✨\x20𝙼𝙸𝚂𝙲\x20𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂\x20✨',
    'filename': __filename
}, async (_0x57f287, _0x293ef7, _0x51e594) => {
    const _0x5d6262 = _0x5455ff;
    if (!_0x51e594)
        return _0x293ef7[_0x5d6262(0x13b)](_0x5d6262(0xec));
    const _0x2a393f = _0x293ef7[_0x5d6262(0x10f)] ? await _0x57f287[_0x5d6262(0xe7)](_0x293ef7[_0x5d6262(0x133)])['catch'](_0x2c45ff => {
    }) : '';
    const _0x47f2ee = _0x293ef7['isGroup'] ? await _0x2a393f[_0x5d6262(0x139)] : '';
    let _0x298b9b = _0x47f2ee[_0x5d6262(0x128)](_0x155156 => _0x155156['id']);
    let _0x39017a = _0x293ef7[_0x5d6262(0x143)];
    let _0x1b0ea4 = _0x298b9b[Math[_0x5d6262(0x148)](Math[_0x5d6262(0xc2)]() * _0x298b9b[_0x5d6262(0x106)])];
    _0x57f287[_0x5d6262(0xc5)](_0x293ef7[_0x5d6262(0x133)], {
        'text': _0x5d6262(0xb2) + _0x51e594 + _0x5d6262(0xc0) + _0x1b0ea4['split']('@')[0x0] + '*',
        'mentions': [_0x1b0ea4]
    }, { 'quoted': _0x293ef7 });
});
cmd({
    'pattern': _0x5455ff(0xcf),
    'desc': _0x5455ff(0x157),
    'category': _0x5455ff(0x126),
    'filename': __filename
}, async (_0x415d09, _0x51f1a, _0x4be015) => {
    const _0x574983 = _0x5455ff;
    if (!_0x51f1a[_0x574983(0x10f)])
        return _0x51f1a[_0x574983(0x13b)](tlang()[_0x574983(0x11e)]);
    const _0x5e6f7d = await getAdmin(_0x415d09, _0x51f1a);
    const _0x4c239d = await _0x415d09[_0x574983(0x103)](_0x415d09[_0x574983(0xe4)]['id']);
    const _0xf32acf = _0x51f1a[_0x574983(0x10f)] ? _0x5e6f7d[_0x574983(0x127)](_0x4c239d) : ![];
    const _0x4c94d1 = _0x51f1a['isGroup'] ? _0x5e6f7d[_0x574983(0x127)](_0x51f1a[_0x574983(0x143)]) : ![];
    if (!_0x4c94d1)
        return _0x51f1a['reply'](tlang()['admin']);
    if (!_0xf32acf)
        return _0x51f1a[_0x574983(0x13b)](tlang()[_0x574983(0xca)]);
    let _0x55e052 = [
        {
            'buttonId': prefix + _0x574983(0x152),
            'buttonText': { 'displayText': _0x574983(0x12d) },
            'type': 0x1
        },
        {
            'buttonId': prefix + 'deact\x20nsfw',
            'buttonText': { 'displayText': _0x574983(0xb5) },
            'type': 0x1
        }
    ];
    await _0x415d09['sendButtonText'](_0x51f1a[_0x574983(0x133)], _0x55e052, _0x574983(0xdb), _0x415d09['user'][_0x574983(0xcb)], _0x51f1a);
});
cmd({
    'pattern': _0x5455ff(0xf8),
    'desc': _0x5455ff(0x124),
    'category': _0x5455ff(0x126),
    'use': '<query>',
    'filename': __filename
}, async (_0x3fe75a, _0x21b948, _0x33065e) => {
    const _0x2a8170 = _0x5455ff;
    if (!_0x33065e)
        return _0x21b948['reply']('Example\x20:\x20' + prefix + _0x2a8170(0xf9));
    flipe = _0x33065e[_0x2a8170(0x13c)]('')[_0x2a8170(0x130)]()[_0x2a8170(0xdd)]('');
    _0x21b948[_0x2a8170(0x13b)](_0x2a8170(0x153) + _0x33065e + _0x2a8170(0x118) + flipe);
});
cmd({
    'pattern': _0x5455ff(0xda),
    'desc': 'download\x20mp4\x20from\x20url.',
    'category': _0x5455ff(0x126),
    'use': '<url>',
    'filename': __filename
}, async (_0x37bca4, _0x5a07c2, _0x1aac51) => {
    const _0x14a358 = _0x5455ff;
    if (!_0x1aac51)
        return _0x5a07c2[_0x14a358(0x13b)](_0x14a358(0x14f));
    _0x37bca4['sendMessage'](_0x5a07c2[_0x14a358(0x133)], {
        'video': { 'url': _0x1aac51[_0x14a358(0x13c)]('\x20')[0x0] },
        'caption': _0x14a358(0x122),
        'contextInfo': {
            'externalAdReply': {
                'title': tlang()[_0x14a358(0x141)],
                'body': '' + _0x5a07c2[_0x14a358(0x138)],
                'thumbnail': log0,
                'mediaType': 0x2,
                'mediaUrl': '',
                'sourceUrl': ''
            }
        }
    }, { 'quoted': _0x5a07c2 });
});
cmd({
    'pattern': _0x5455ff(0x10d),
    'desc': _0x5455ff(0x117),
    'category': _0x5455ff(0x126),
    'filename': __filename
}, async (_0x286101, _0x289399, _0x55e455) => {
    const _0x2a8838 = _0x5455ff;
    if (!_0x289399[_0x2a8838(0x10f)])
        return _0x289399[_0x2a8838(0x13b)](tlang()[_0x2a8838(0x11e)]);
    const _0x2913e1 = await getAdmin(_0x286101, _0x289399);
    const _0x518132 = await _0x286101[_0x2a8838(0x103)](_0x286101[_0x2a8838(0xe4)]['id']);
    const _0x972fcf = _0x289399[_0x2a8838(0x10f)] ? _0x2913e1[_0x2a8838(0x127)](_0x518132) : ![];
    const _0x487601 = _0x289399[_0x2a8838(0x10f)] ? _0x2913e1['includes'](_0x289399[_0x2a8838(0x143)]) : ![];
    if (!_0x487601)
        return _0x289399[_0x2a8838(0x13b)](tlang()['admin']);
    if (!_0x972fcf)
        return _0x289399[_0x2a8838(0x13b)](tlang()[_0x2a8838(0xca)]);
    let _0x47a115 = [
        {
            'buttonId': prefix + _0x2a8838(0xc9),
            'buttonText': { 'displayText': _0x2a8838(0x12d) },
            'type': 0x1
        },
        {
            'buttonId': prefix + 'deact\x20events',
            'buttonText': { 'displayText': _0x2a8838(0xb5) },
            'type': 0x1
        }
    ];
    await _0x286101[_0x2a8838(0x12b)](_0x289399['chat'], _0x47a115, _0x2a8838(0x156), _0x286101[_0x2a8838(0xe4)][_0x2a8838(0xcb)], _0x289399);
});
cmd({
    'pattern': _0x5455ff(0x14a),
    'desc': _0x5455ff(0xdc),
    'category': _0x5455ff(0x126),
    'react': '✨',
    'use': _0x5455ff(0x135),
    'filename': __filename
}, async (_0x144e0e, _0x5d20d3, _0x51db83) => {
    const _0x158730 = _0x5455ff;
    if (!_0x51db83)
        throw 'Song\x20name?';
    const _0x53cf39 = require(_0x158730(0x14b));
    try {
        const _0x807c35 = await _0x53cf39(_0x51db83);
        if (_0x807c35['lyrics'] == '')
            return console['log'](_0x158730(0x101));
        var _0x42e684 = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20*🗳️\x20Title\x20:*\x20' + _0x807c35[_0x158730(0x141)] + _0x158730(0x13d) + _0x807c35[_0x158730(0x110)] + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20*📝Lyrics\x20:*\x20\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x807c35[_0x158730(0x14a)];
        console[_0x158730(0x113)](_0x807c35);
        await _0x144e0e[_0x158730(0xc5)](_0x5d20d3[_0x158730(0x133)], { 'text': _0x42e684 }, { 'quoted': _0x5d20d3 });
    } catch (_0x414855) {
        console['log'](_0x414855);
    }
});
cmd({
    'pattern': _0x5455ff(0x105),
    'desc': _0x5455ff(0x132),
    'react': '😅',
    'category': _0x5455ff(0x126)
}, async (_0x1e24d5, _0x172e32, _0x65b686) => {
    const _0x254acf = _0x5455ff;
    let [_0x366bb7, _0x520552] = _0x65b686[_0x254acf(0x13c)]`+`;
    if (!_0x366bb7)
        throw 'Example\x20:\x20.emojimix\x20😅+🤔';
    if (!_0x520552)
        throw _0x254acf(0xe0);
    let _0x44360c = await fetchJson('https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=' + encodeURIComponent(_0x366bb7) + '_' + encodeURIComponent(_0x520552));
    for (let _0x2c0def of _0x44360c[_0x254acf(0x11b)]) {
        let _0x133a33 = await _0x1e24d5[_0x254acf(0x11f)](_0x172e32[_0x254acf(0x133)], _0x2c0def[_0x254acf(0x129)], _0x172e32, {
            'packname': _0x254acf(0xc4),
            'author': '🩵',
            'categories': _0x2c0def[_0x254acf(0xf5)]
        });
        await fs['unlinkSync'](_0x133a33);
    }
});
cmd({
    'pattern': _0x5455ff(0xe1),
    'desc': _0x5455ff(0x112),
    'category': '✨\x20𝙼𝙸𝚂𝙲\x20𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂\x20✨',
    'use': _0x5455ff(0x135),
    'filename': __filename
}, async (_0x490659, _0x1fa837, _0x3ffc4c, {isCreator: _0x35dfbf}) => {
    const _0x431c69 = _0x5455ff;
    if (!_0x3ffc4c)
        return _0x1fa837['reply']('Example\x20:\x20' + prefix + _0x431c69(0xe3));
    let [_0x53098a, _0x361073] = _0x3ffc4c[_0x431c69(0x13c)]`,`;
    let _0x1286b6 = await fetchJson(_0x431c69(0x144) + encodeURIComponent(_0x53098a) + '_' + encodeURIComponent(_0x361073));
    for (let _0x145010 of _0x1286b6[_0x431c69(0x11b)]) {
        let _0x50a28a = await _0x490659[_0x431c69(0x11f)](_0x1fa837[_0x431c69(0x133)], _0x145010[_0x431c69(0x129)], _0x1fa837, {
            'packname': global['packname'],
            'author': global[_0x431c69(0xfa)],
            'categories': _0x145010[_0x431c69(0xf5)]
        });
        await fs[_0x431c69(0xd2)](_0x50a28a);
    }
});
cmd({
    'pattern': 'chatbot',
    'desc': _0x5455ff(0xd9),
    'category': '✨\x20𝙼𝙸𝚂𝙲\x20𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂\x20✨',
    'filename': __filename
}, async (_0x37d2fd, _0x909b58, _0x41955f, {isCreator: _0x1666d5}) => {
    const _0x4bd855 = _0x5455ff;
    if (!_0x1666d5)
        return _0x909b58['reply'](tlang()[_0x4bd855(0xb9)]);
    const {chatbot: _0x5bb9c5} = require(_0x4bd855(0x134));
    switch (_0x41955f[_0x4bd855(0x13c)]('\x20')[0x0]) {
    case 'on': {
            let _0x5cebe1 = await _0x5bb9c5['findOne']({ 'id': _0x4bd855(0x154) });
            if (!_0x5cebe1) {
                await new _0x5bb9c5({
                    'id': _0x4bd855(0x154),
                    'worktype': _0x4bd855(0x11c)
                })[_0x4bd855(0x100)]();
                return _0x909b58[_0x4bd855(0x13b)](_0x4bd855(0x12a));
            } else {
                if (_0x5cebe1[_0x4bd855(0x102)] == _0x4bd855(0x11c))
                    return _0x909b58[_0x4bd855(0x13b)](_0x4bd855(0xb6));
                await _0x5bb9c5['updateOne']({ 'id': 'chatbot' }, { 'worktype': 'true' });
                _0x909b58['reply'](_0x4bd855(0xbc));
                return;
            }
        }
        break;
    case _0x4bd855(0xbe): {
            let _0x177776 = await _0x5bb9c5['findOne']({ 'id': 'chatbot' });
            if (!_0x177776) {
                await new _0x5bb9c5({
                    'id': _0x4bd855(0x154),
                    'worktype': _0x4bd855(0xdf)
                })['save']();
                return _0x909b58[_0x4bd855(0x13b)](_0x4bd855(0xd8));
            } else {
                if (_0x177776[_0x4bd855(0x102)] == _0x4bd855(0xdf))
                    return _0x909b58[_0x4bd855(0x13b)](_0x4bd855(0x142));
                await _0x5bb9c5[_0x4bd855(0xf2)]({ 'id': 'chatbot' }, { 'worktype': _0x4bd855(0xdf) });
                _0x909b58[_0x4bd855(0x13b)]('Disabled\x20chatbot\x20successfully.');
                return;
            }
        }
        break;
    default: {
            let _0x4045e2 = [
                {
                    'buttonId': prefix + _0x4bd855(0xee),
                    'buttonText': { 'displayText': _0x4bd855(0x12d) },
                    'type': 0x1
                },
                {
                    'buttonId': prefix + _0x4bd855(0x131),
                    'buttonText': { 'displayText': _0x4bd855(0xb5) },
                    'type': 0x1
                }
            ];
            let _0x1f34a9 = await _0x5bb9c5[_0x4bd855(0xe2)]({ 'id': _0x4bd855(0x154) });
            await _0x37d2fd[_0x4bd855(0x12b)](_0x909b58[_0x4bd855(0x133)], _0x4045e2, _0x4bd855(0xd1) + _0x1f34a9[_0x4bd855(0x102)] + '\x20', _0x4bd855(0x155), _0x909b58);
        }
    }
});
cmd({
    'pattern': _0x5455ff(0xfc),
    'desc': _0x5455ff(0x145),
    'category': '✨\x20𝙼𝙸𝚂𝙲\x20𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂\x20✨',
    'use': '<query>',
    'filename': __filename
}, async (_0x2ad28c, _0x89892d, _0x964529, {isCreator: _0x1b070a}) => {
    const _0x2bcc23 = _0x5455ff;
    try {
        if (!_0x964529)
            return _0x89892d[_0x2bcc23(0x13b)](_0x2bcc23(0x111));
        let _0x2b57f8 = _0x964529 || _0x89892d['quoted'][_0x2bcc23(0xfd)];
        let _0x109345 = await eBinary(_0x2b57f8);
        _0x89892d[_0x2bcc23(0x13b)](_0x109345);
    } catch (_0x271b48) {
        console[_0x2bcc23(0x113)](_0x271b48);
    }
});
cmd({
    'pattern': _0x5455ff(0x12c),
    'desc': _0x5455ff(0x10a),
    'category': _0x5455ff(0x126),
    'use': _0x5455ff(0x135),
    'filename': __filename
}, async (_0x8f6d65, _0x310135, _0x36dc1e, {isCreator: _0x43f19f}) => {
    const _0x240070 = _0x5455ff;
    try {
        if (!_0x36dc1e)
            return _0x310135[_0x240070(0x13b)](_0x240070(0xb4));
        let _0x23e288 = await dBinary(_0x36dc1e);
        _0x310135[_0x240070(0x13b)](_0x23e288);
    } catch (_0x2c4a6a) {
        console[_0x240070(0x113)](_0x2c4a6a);
    }
});
cmd({
    'pattern': _0x5455ff(0xea),
    'desc': _0x5455ff(0xd7),
    'category': _0x5455ff(0x126),
    'filename': __filename
}, async (_0x5e2c57, _0x50f39d, _0x16283a, {isCreator: _0x2a9de6}) => {
    const _0x3286d5 = _0x5455ff;
    if (!_0x50f39d[_0x3286d5(0x10f)])
        return _0x50f39d[_0x3286d5(0x13b)](tlang()['group']);
    if (!_0x2a9de6)
        return;
    switch (_0x16283a['split']('\x20')[0x0]) {
    case 'on': {
            let _0xdc1438 = await sck[_0x3286d5(0xe2)]({ 'id': _0x50f39d[_0x3286d5(0x133)] });
            if (!_0xdc1438) {
                await new sck({
                    'id': _0x50f39d[_0x3286d5(0x133)],
                    'botenable': _0x3286d5(0x11c)
                })['save']();
                return _0x50f39d[_0x3286d5(0x13b)]('Successfully\x20Enabled\x20*' + tlang()[_0x3286d5(0x141)] + '*');
            } else {
                if (_0xdc1438['botenable'] == _0x3286d5(0x11c))
                    return _0x50f39d[_0x3286d5(0x13b)](_0x3286d5(0x119));
                await sck['updateOne']({ 'id': _0x50f39d[_0x3286d5(0x133)] }, { 'botenable': _0x3286d5(0x11c) });
                return _0x50f39d[_0x3286d5(0x13b)]('Successfully\x20Enabled\x20*' + tlang()['title'] + '*');
            }
        }
        break;
    case _0x3286d5(0xbe): {
            {
                let _0x211500 = await sck[_0x3286d5(0xe2)]({ 'id': _0x50f39d['chat'] });
                if (!_0x211500) {
                    await new sck({
                        'id': _0x50f39d[_0x3286d5(0x133)],
                        'botenable': 'false'
                    })[_0x3286d5(0x100)]();
                    return _0x50f39d[_0x3286d5(0x13b)](_0x3286d5(0x147) + tlang()[_0x3286d5(0x141)] + '*');
                } else {
                    if (_0x211500[_0x3286d5(0xf0)] == _0x3286d5(0xdf))
                        return _0x50f39d[_0x3286d5(0x13b)](_0x3286d5(0xe8));
                    await sck['updateOne']({ 'id': _0x50f39d[_0x3286d5(0x133)] }, { 'botenable': 'false' });
                    return _0x50f39d[_0x3286d5(0x13b)]('Successfully\x20disabled\x20*' + tlang()['title'] + '*');
                }
            }
        }
        break;
    default: {
            let _0x3b0ba8 = await sck[_0x3286d5(0xe2)]({ 'id': _0x50f39d[_0x3286d5(0x133)] });
            let _0x4ac146 = [
                {
                    'buttonId': prefix + _0x3286d5(0x10c),
                    'buttonText': { 'displayText': _0x3286d5(0x12d) },
                    'type': 0x1
                },
                {
                    'buttonId': prefix + _0x3286d5(0x149),
                    'buttonText': { 'displayText': _0x3286d5(0xb5) },
                    'type': 0x1
                }
            ];
            await _0x5e2c57['sendButtonText'](_0x50f39d['chat'], _0x4ac146, _0x3286d5(0x140) + _0x3b0ba8[_0x3286d5(0xf0)], _0x5e2c57[_0x3286d5(0xe4)][_0x3286d5(0xcb)], _0x50f39d);
        }
    }
});
cmd({
    'pattern': _0x5455ff(0x11a),
    'desc': 'activates\x20and\x20deactivates\x20antilink.\x0ause\x20buttons\x20to\x20toggle.',
    'category': _0x5455ff(0x13f),
    'filename': __filename
}, async (_0x541e91, _0x44965c, _0x451d71) => {
    const _0x56803e = _0x5455ff;
    if (!_0x44965c['isGroup'])
        return _0x44965c['reply'](tlang()[_0x56803e(0x11e)]);
    const _0x587811 = await getAdmin(_0x541e91, _0x44965c);
    const _0x5d5f44 = await _0x541e91['decodeJid'](_0x541e91['user']['id']);
    const _0x5f17ff = _0x44965c[_0x56803e(0x10f)] ? _0x587811[_0x56803e(0x127)](_0x5d5f44) : ![];
    const _0x3691aa = _0x44965c[_0x56803e(0x10f)] ? _0x587811[_0x56803e(0x127)](_0x44965c['sender']) : ![];
    if (!_0x3691aa)
        return _0x44965c[_0x56803e(0x13b)](tlang()['admin']);
    if (!_0x5f17ff)
        return _0x44965c[_0x56803e(0x13b)](tlang()['botadmin']);
    let _0x454b23 = [
        {
            'buttonId': prefix + _0x56803e(0x109),
            'buttonText': { 'displayText': 'Turn\x20On' },
            'type': 0x1
        },
        {
            'buttonId': prefix + _0x56803e(0xbb),
            'buttonText': { 'displayText': _0x56803e(0xb5) },
            'type': 0x1
        }
    ];
    await _0x541e91[_0x56803e(0x12b)](_0x44965c['chat'], _0x454b23, _0x56803e(0xd0), _0x541e91[_0x56803e(0xe4)][_0x56803e(0xcb)], _0x44965c);
});
cmd({ 'on': _0x5455ff(0xe6) }, async (_0x52cbb2, _0x46c330) => {
    const _0x16aafd = _0x5455ff;
    if (Config['autoreaction'] === _0x16aafd(0x11c) && _0x46c330['text'][_0x16aafd(0x108)](prefix)) {
        const _0x53fbcc = [
            '❤',
            '💕',
            '😻',
            '🧡',
            '💛',
            '💚',
            '💙',
            '💜',
            '🖤',
            '❣',
            '💞',
            '💓',
            '💗',
            '💖',
            '💘',
            '💝',
            '💟',
            '♥',
            '💌',
            '🙂',
            '🤗',
            '😌',
            '😉',
            '🤗',
            '😊',
            '🎊',
            '🎉',
            '🎁',
            '🎈',
            '👋'
        ];
        const _0x22eefb = _0x53fbcc[Math[_0x16aafd(0x148)](Math['random']() * _0x53fbcc['length'])];
        _0x52cbb2['sendMessage'](_0x46c330[_0x16aafd(0x133)], {
            'react': {
                'text': _0x22eefb,
                'key': _0x46c330[_0x16aafd(0xb8)]
            }
        });
    }
});