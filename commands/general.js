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


const _0x18d924 = _0x4d71;
(function (_0x4d1f91, _0x20b2f0) {
    const _0x3062b4 = _0x4d71;
    const _0x53e041 = _0x4d1f91();
    while (!![]) {
        try {
            const _0x1d92fa = -parseInt(_0x3062b4(0x141)) / 0x1 + -parseInt(_0x3062b4(0x140)) / 0x2 * (parseInt(_0x3062b4(0x114)) / 0x3) + parseInt(_0x3062b4(0x148)) / 0x4 + -parseInt(_0x3062b4(0x13c)) / 0x5 * (-parseInt(_0x3062b4(0x13a)) / 0x6) + parseInt(_0x3062b4(0x124)) / 0x7 * (-parseInt(_0x3062b4(0x111)) / 0x8) + -parseInt(_0x3062b4(0x129)) / 0x9 * (-parseInt(_0x3062b4(0x128)) / 0xa) + parseInt(_0x3062b4(0x12e)) / 0xb;
            if (_0x1d92fa === _0x20b2f0) {
                break;
            } else {
                _0x53e041['push'](_0x53e041['shift']());
            }
        } catch (_0x22bd4f) {
            _0x53e041['push'](_0x53e041['shift']());
        }
    }
}(_0x231c, 0xd6258));
const {tlang, botpic, cmd, prefix, runtime, Config} = require(_0x18d924(0x11d));
const axios = require('axios');
const speed = require('performance-now');
cmd({
    'pattern': _0x18d924(0x137),
    'desc': 'chat\x20with\x20an\x20AI',
    'category': _0x18d924(0x133),
    'use': _0x18d924(0x115),
    'filename': __filename
}, async (_0x29830b, _0xa74c27, _0x4f2016) => {
    const _0xcbce37 = _0x18d924;
    let _0x456a4a = _0x4f2016[_0xcbce37(0x13b)];
    if (_0x456a4a < 0x8) {
        let {data: _0x57053b} = await axios[_0xcbce37(0x125)]('http://api.brainshop.ai/get?bid=167991&key=aozpOoNOy3dfLgmB&uid=[' + _0xa74c27[_0xcbce37(0x135)][_0xcbce37(0x150)]('@')[0x0] + _0xcbce37(0x112) + _0x4f2016 + ']');
        return _0xa74c27[_0xcbce37(0x121)](_0x57053b[_0xcbce37(0x116)]);
    }
    if (!_0x4f2016)
        return _0xa74c27[_0xcbce37(0x121)](_0xcbce37(0x11c) + _0xa74c27[_0xcbce37(0x14d)] + _0xcbce37(0x120));
    const {
        Configuration: _0x2b47b6,
        OpenAIApi: _0x3ff6e2
    } = require(_0xcbce37(0x152));
    const _0x3bd34d = new _0x2b47b6({ 'apiKey': Config[_0xcbce37(0x144)] || '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' });
    const _0x2ad044 = new _0x3ff6e2(_0x3bd34d);
    const _0x2090d8 = await _0x2ad044[_0xcbce37(0x127)]({
        'model': _0xcbce37(0x14b),
        'prompt': _0x4f2016,
        'temperature': 0.5,
        'max_tokens': 0x50,
        'top_p': 0x1,
        'frequency_penalty': 0.5,
        'presence_penalty': 0x0,
        'stop': ['\x22\x22\x22']
    });
    _0xa74c27[_0xcbce37(0x121)](_0x2090d8[_0xcbce37(0x134)][_0xcbce37(0x11b)][0x0][_0xcbce37(0x14c)]);
});
function _0x4d71(_0x278900, _0x44b900) {
    const _0x231cdc = _0x231c();
    _0x4d71 = function (_0x4d7110, _0x202c5c) {
        _0x4d7110 = _0x4d7110 - 0x110;
        let _0x55f09a = _0x231cdc[_0x4d7110];
        return _0x55f09a;
    };
    return _0x4d71(_0x278900, _0x44b900);
}
cmd({
    'pattern': 'repo',
    'alias': [
        _0x18d924(0x117),
        'sc',
        _0x18d924(0x146)
    ],
    'desc': _0x18d924(0x130),
    'category': _0x18d924(0x133),
    'react': '⭐',
    'filename': __filename
}, async (_0x4c2561, _0x16a69d) => {
    const _0x381926 = _0x18d924;
    let {data: _0x27d4c8} = await axios[_0x381926(0x125)](_0x381926(0x143));
    let _0x359c6f = 'Hey\x20' + _0x16a69d[_0x381926(0x14d)] + _0x381926(0x110) + _0x27d4c8['stargazers_count'] + _0x381926(0x12d) + _0x27d4c8[_0x381926(0x132)] + _0x381926(0x14f);
    let _0x48e4fc = {
        'image': { 'url': await botpic() },
        'caption': _0x359c6f,
        'footer': tlang()[_0x381926(0x142)],
        'headerType': 0x4,
        'contextInfo': {
            'externalAdReply': {
                'title': _0x381926(0x123),
                'body': _0x381926(0x13f),
                'thumbnail': log0,
                'mediaType': 0x4,
                'mediaUrl': '',
                'sourceUrl': ''
            }
        }
    };
    return await _0x4c2561[_0x381926(0x122)](_0x16a69d['chat'], _0x48e4fc, { 'quoted': _0x16a69d });
});
cmd({
    'pattern': _0x18d924(0x138),
    'alias': [_0x18d924(0x11e)],
    'desc': 'To\x20check\x20bot\x20status',
    'category': _0x18d924(0x133),
    'filename': __filename
}, async (_0x21f872, _0x5baa06) => {
    const _0x58d6ba = _0x18d924;
    const _0x31318d = process[_0x58d6ba(0x12a)]();
    timestampe = speed();
    latensie = speed() - timestampe;
    let _0x2f2e49 = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20💃\x20ǫᴜᴇᴇɴ\x20ɴɪʟᴜ\x20💃\x0a*🌟Description:*\x20A\x20WhatsApp\x20bot\x20with\x20rich\x20features,\x20build\x20in\x20NodeJs\x20to\x20make\x20your\x20WhatsApp\x20enjoyable.\x0a*⚡Speed:*\x20' + latensie[_0x58d6ba(0x149)](0x4) + _0x58d6ba(0x147) + runtime(process[_0x58d6ba(0x12a)]()) + _0x58d6ba(0x11f) + Config[_0x58d6ba(0x136)] + '\x0a\x0a_*Powered\x20by\x20ǫᴜᴇᴇɴ\x20ɴɪʟᴜ*_\x0a';
    let _0x7ac0ce = {
        'image': { 'url': await botpic() },
        'caption': _0x2f2e49,
        'footer': tlang()[_0x58d6ba(0x142)],
        'headerType': 0x4,
        'contextInfo': {
            'externalAdReply': {
                'title': _0x58d6ba(0x12f),
                'body': _0x58d6ba(0x119),
                'thumbnail': log0,
                'mediaType': 0x2,
                'mediaUrl': _0x58d6ba(0x14a),
                'sourceUrl': 'https://youtube.com/c/janithsadanuwan'
            }
        }
    };
    return await _0x21f872[_0x58d6ba(0x122)](_0x5baa06[_0x58d6ba(0x137)], _0x7ac0ce, { 'quoted': _0x5baa06 });
});
function _0x231c() {
    const _0x13b687 = [
        '\x20Detail\x20:\x20',
        'forks_count',
        '🩵\x20𝙶𝙴𝙽𝙴𝚁𝙰𝙻\x20𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂\x20🩵',
        'data',
        'sender',
        'ownername',
        'chat',
        'status',
        'Enter\x20Query\x20Title',
        '949974SmBRIl',
        'length',
        '20kHHJTh',
        'source',
        'wallpaper',
        'Easy\x20to\x20Use',
        '2158404YlGMej',
        '799847hiPNhh',
        'footer',
        'https://api.github.com/repos/janithsadanuwan/QueenNilu',
        'OPENAI_API_KEY',
        'random',
        'script',
        '\x20ms\x0a*🚦Uptime:*\x20',
        '1808392iBEoSN',
        'toFixed',
        'https://te.legra.ph/file/3e57249993356ba15109f.jpg',
        'text-davinci-002',
        'text',
        'pushName',
        '\x20Title\x20:\x20',
        '\x20forks\x0a*🍁\x20Repo:*\x20https://github.com/Janithsadanuwan/QueenNilu\x0a*Deploy\x20Your\x20Own:*-\x0a\x20youtube.com/c/janithsadanuwan',
        'split',
        '\x20Media\x20Url\x20:\x20',
        'openai',
        '\x0a\x0a*⭐\x20Total\x20Stars:*\x20',
        '3053608EYAmRh',
        ']&msg=[',
        'title',
        '3PCoYBh',
        '<Hii,Nilu>',
        'cnt',
        'git',
        'type',
        'Version\x202.0.0',
        'floor',
        'choices',
        'Hey\x20there!\x20',
        '../lib',
        'about',
        '\x0a*🕸Version:*\x202.0.0\x0a*👤Owner:*\x20\x20',
        '.\x20How\x20are\x20you\x20doing\x20these\x20days?',
        'reply',
        'sendMessage',
        'Queen\x20Nilu-Repo',
        '28MrskhV',
        'get',
        '\x20Category\x20:\x20',
        'createCompletion',
        '10CLtrSh',
        '2804103znBQdL',
        'uptime',
        'wallpapers.',
        'image',
        '\x20stars\x0a*🍽️\x20Forks:*\x20',
        '31746176NJRefD',
        'Queen\x20Nilu\x20MD',
        'Sends\x20info\x20about\x20repo.'
    ];
    _0x231c = function () {
        return _0x13b687;
    };
    return _0x231c();
}
cmd({
    'pattern': _0x18d924(0x13e),
    'desc': _0x18d924(0x12b),
    'category': _0x18d924(0x133),
    'filename': __filename
}, async (_0x13232a, _0x23a72c) => {
    const _0x4496d8 = _0x18d924;
    if (!text)
        throw _0x4496d8(0x139);
    let {wallpaper: _0x14cdc8} = require('./lib/scraper');
    anuwallpep = await _0x14cdc8(text);
    result = anuwallpep[Math[_0x4496d8(0x11a)](Math[_0x4496d8(0x145)]() * anuwallpep[_0x4496d8(0x13b)])];
    let _0xbc21df = {
        'image': { 'url': result['image'][0x0] },
        'caption': _0x4496d8(0x14e) + result[_0x4496d8(0x113)] + '\x0a' + themeemoji + _0x4496d8(0x126) + result[_0x4496d8(0x118)] + '\x0a' + themeemoji + _0x4496d8(0x131) + result[_0x4496d8(0x13d)] + '\x0a' + themeemoji + _0x4496d8(0x151) + (result[_0x4496d8(0x12c)][0x2] || result[_0x4496d8(0x12c)][0x1] || result[_0x4496d8(0x12c)][0x0]),
        'footer': botname,
        'headerType': 0x4
    };
    _0x13232a[_0x4496d8(0x122)](_0x23a72c[_0x4496d8(0x137)], _0xbc21df, { 'quoted': _0x23a72c });
});