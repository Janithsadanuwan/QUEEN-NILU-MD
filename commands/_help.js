const _0x47530f = _0x449c;
function _0x449c(_0x404f41, _0x9a98ec) {
    const _0x5dc7db = _0x5dc7();
    _0x449c = function (_0x449cd4, _0x2d7254) {
        _0x449cd4 = _0x449cd4 - 0x17e;
        let _0x19f233 = _0x5dc7db[_0x449cd4];
        return _0x19f233;
    };
    return _0x449c(_0x404f41, _0x9a98ec);
}
(function (_0x29af24, _0x15680f) {
    const _0x546344 = _0x449c;
    const _0x72f9c1 = _0x29af24();
    while (!![]) {
        try {
            const _0x296d60 = parseInt(_0x546344(0x1d8)) / 0x1 * (-parseInt(_0x546344(0x1bd)) / 0x2) + -parseInt(_0x546344(0x190)) / 0x3 + parseInt(_0x546344(0x1bb)) / 0x4 * (-parseInt(_0x546344(0x1bc)) / 0x5) + parseInt(_0x546344(0x187)) / 0x6 + parseInt(_0x546344(0x194)) / 0x7 * (-parseInt(_0x546344(0x180)) / 0x8) + parseInt(_0x546344(0x19c)) / 0x9 + parseInt(_0x546344(0x191)) / 0xa;
            if (_0x296d60 === _0x15680f) {
                break;
            } else {
                _0x72f9c1['push'](_0x72f9c1['shift']());
            }
        } catch (_0x524175) {
            _0x72f9c1['push'](_0x72f9c1['shift']());
        }
    }
}(_0x5dc7, 0x3f87f));
const os = require('os');
const moment = require(_0x47530f(0x1a9));
const fs = require('fs');
const Config = require(_0x47530f(0x1a2));
let {fancytext, tlang, tiny, runtime, formatp, botpic, prefix, sck1} = require(_0x47530f(0x1d5));
const long = String[_0x47530f(0x1ac)](0x200e);
const readmore = long[_0x47530f(0x198)](0xfa1);
const Janith = require('../lib/commands');
Janith['cmd']({
    'pattern': _0x47530f(0x19a),
    'alias': ['menu'],
    'desc': _0x47530f(0x17f),
    'category': _0x47530f(0x17e),
    'react': '✨',
    'filename': __filename
}, async (_0x5af15c, _0x35bc6a, _0x4c00d2) => {
    const _0x15ab12 = _0x47530f;
    const {commands: _0x57aede} = require(_0x15ab12(0x1d5));
    if (_0x4c00d2[_0x15ab12(0x1c7)]('\x20')[0x0]) {
        let _0x120230 = [];
        const _0xa3e53a = _0x57aede[_0x15ab12(0x189)](_0x410647 => _0x410647[_0x15ab12(0x1c0)] === _0x4c00d2[_0x15ab12(0x1c7)]('\x20')[0x0][_0x15ab12(0x1d9)]());
        if (!_0xa3e53a)
            return await _0x35bc6a[_0x15ab12(0x1c9)]('*❌No\x20Such\x20commands.*');
        else
            _0x120230[_0x15ab12(0x1e1)](_0x15ab12(0x1d3) + _0xa3e53a['pattern']);
        if (_0xa3e53a[_0x15ab12(0x1de)])
            _0x120230[_0x15ab12(0x1e1)](_0x15ab12(0x1be) + _0xa3e53a[_0x15ab12(0x1de)]);
        if (_0xa3e53a[_0x15ab12(0x196)])
            _0x120230[_0x15ab12(0x1e1)]('*🧩Alias:*\x20' + _0xa3e53a['alias']);
        if (_0xa3e53a[_0x15ab12(0x1a4)])
            _0x120230[_0x15ab12(0x1e1)](_0x15ab12(0x1a3) + _0xa3e53a[_0x15ab12(0x1a4)]);
        if (_0xa3e53a['use'])
            _0x120230['push'](_0x15ab12(0x19f) + prefix + _0xa3e53a['pattern'] + '\x20' + _0xa3e53a['use'] + '```');
        return await _0x35bc6a[_0x15ab12(0x1c9)](_0x120230[_0x15ab12(0x181)]('\x0a'));
    } else {
        const _0xbab3d6 = {};
        _0x57aede[_0x15ab12(0x1a1)](async (_0x587112, _0x181eea) => {
            const _0x4fe2a4 = _0x15ab12;
            if (_0x587112[_0x4fe2a4(0x18c)] === ![] && _0x587112[_0x4fe2a4(0x1c0)] !== undefined) {
                if (!_0xbab3d6[_0x587112[_0x4fe2a4(0x1de)]])
                    _0xbab3d6[_0x587112[_0x4fe2a4(0x1de)]] = [];
                _0xbab3d6[_0x587112[_0x4fe2a4(0x1de)]][_0x4fe2a4(0x1e1)](_0x587112['pattern']);
            }
        });
        const _0x5495bc = moment(moment())[_0x15ab12(0x18e)](_0x15ab12(0x192));
        moment['tz'][_0x15ab12(0x186)]('Asia/KOLKATA')[_0x15ab12(0x1b0)]('id');
        const _0xcb536d = moment['tz'](_0x15ab12(0x1e3))['format'](_0x15ab12(0x19d));
        let _0x55c664 = await sck1[_0x15ab12(0x1a6)]();
        let _0x52de4d = _0x15ab12(0x1dc);
        _0x52de4d += '```' + (_0x15ab12(0x1a0) + _0x35bc6a['pushName'] + _0x15ab12(0x1cf) + prefix + _0x15ab12(0x185) + Config[_0x15ab12(0x1db)] + _0x15ab12(0x1c2) + _0x57aede[_0x15ab12(0x1b6)] + _0x15ab12(0x18b) + _0x55c664 + _0x15ab12(0x197) + runtime(process[_0x15ab12(0x1ba)]()) + _0x15ab12(0x1c1) + _0x5495bc + _0x15ab12(0x18a) + _0xcb536d + _0x15ab12(0x18f)) + _0x15ab12(0x1e0);
        _0x52de4d += _0x15ab12(0x1c8) + fancytext(_0x15ab12(0x1e2), 0x39) + '❱';
        for (const _0x1d3591 in _0xbab3d6) {
            _0x52de4d += _0x15ab12(0x1d1) + tiny(_0x1d3591) + _0x15ab12(0x182);
            for (const _0x4d8023 of _0xbab3d6[_0x1d3591]) {
                _0x52de4d += '┃\x20\x20│\x20✭\x20' + _0x4d8023 + '\x0a';
            }
            _0x52de4d += _0x15ab12(0x1ae);
        }
        _0x52de4d += '\x0a╰━━━━━━━━━━━──◆\x0a';
        let _0x3fcf41 = [
            {
                'buttonId': prefix + _0x15ab12(0x195),
                'buttonText': { 'displayText': _0x15ab12(0x1c5) },
                'type': 0x1
            },
            {
                'buttonId': prefix + _0x15ab12(0x1a5),
                'buttonText': { 'displayText': _0x15ab12(0x1b8) },
                'type': 0x1
            },
            {
                'buttonId': prefix + _0x15ab12(0x1af),
                'buttonText': { 'displayText': _0x15ab12(0x1c6) },
                'type': 0x1
            }
        ];
        let _0x2eb062 = {
            'image': { 'url': await botpic() },
            'caption': _0x52de4d,
            'footer': tlang()['title'],
            'headerType': 0x4
        };
        return await _0x5af15c[_0x15ab12(0x1c3)](_0x35bc6a['chat'], _0x2eb062);
    }
});
Janith[_0x47530f(0x1ca)]({
    'pattern': _0x47530f(0x1af),
    'desc': 'list\x20menu',
    'category': _0x47530f(0x17e),
    'react': '✅'
}, async (_0x1fd415, _0x98bed7) => {
    const _0x56a7aa = _0x47530f;
    const {commands: _0x3d93ff} = require(_0x56a7aa(0x1d5));
    let _0x1d0afe = '\x0a╭━━〘\x20' + fancytext(Config['ownername'][_0x56a7aa(0x1c7)]('\x20')[0x0], 0x3a) + _0x56a7aa(0x1cb);
    _0x1d0afe += _0x56a7aa(0x1e0) + (_0x56a7aa(0x184) + _0x98bed7['pushName'] + _0x56a7aa(0x1b7) + tlang()[_0x56a7aa(0x1ce)] + '\x0a┃\x20⛥│\x20Prefix:\x20' + prefix + '\x0a┃\x20⛥│\x20Owner:\x20' + Config[_0x56a7aa(0x1db)] + _0x56a7aa(0x199) + _0x3d93ff[_0x56a7aa(0x1b6)] + '\x0a┃\x20⛥│\x20Uptime:\x20' + runtime(process[_0x56a7aa(0x1ba)]()) + _0x56a7aa(0x1ad) + formatp(os[_0x56a7aa(0x1b4)]() - os[_0x56a7aa(0x1d6)]()) + '/' + formatp(os[_0x56a7aa(0x1b4)]()) + _0x56a7aa(0x1bf)) + _0x56a7aa(0x1e0);
    _0x1d0afe += _0x56a7aa(0x183);
    _0x1d0afe += _0x56a7aa(0x1a7);
    for (let _0x23168f = 0x0; _0x23168f < _0x3d93ff[_0x56a7aa(0x1b6)]; _0x23168f++) {
        if (_0x3d93ff[_0x23168f][_0x56a7aa(0x1c0)] == undefined)
            continue;
        _0x1d0afe += _0x56a7aa(0x1e4) + (_0x23168f + 0x1) + '.\x20' + _0x3d93ff[_0x23168f][_0x56a7aa(0x1c0)] + '\x0a';
    }
    _0x1d0afe += _0x56a7aa(0x19e);
    _0x1d0afe += _0x56a7aa(0x19b);
    return _0x1fd415[_0x56a7aa(0x1c3)](_0x98bed7[_0x56a7aa(0x1b9)], {
        'image': { 'url': THUMB_IMAGE },
        'caption': _0x1d0afe
    });
});
Janith[_0x47530f(0x1ca)]({
    'pattern': _0x47530f(0x195),
    'desc': 'To\x20check\x20ping',
    'category': _0x47530f(0x17e),
    'react': '💜',
    'filename': __filename
}, async (_0x43436f, _0x76156e) => {
    const _0x2a8432 = _0x47530f;
    const _0x3e350f = require(_0x2a8432(0x1a2));
    const _0x3d42f4 = _0x2a8432(0x193) + _0x2a8432(0x1d7) + 'FN:' + _0x3e350f[_0x2a8432(0x1db)] + '\x0a' + _0x2a8432(0x1df) + _0x2a8432(0x1dd) + owner[0x0] + ':+' + owner[0x0] + '\x0a' + _0x2a8432(0x1d0);
    let _0x545ede = {
        'contacts': {
            'displayName': _0x3e350f['ownername'],
            'contacts': [{ 'vcard': _0x3d42f4 }]
        },
        'contextInfo': {
            'externalAdReply': {
                'title': _0x3e350f[_0x2a8432(0x1db)],
                'body': _0x2a8432(0x1a8),
                'renderLargerThumbnail': !![],
                'thumbnailUrl': '',
                'thumbnail': log0,
                'mediaType': 0x2,
                'mediaUrl': '',
                'sourceUrl': _0x2a8432(0x1aa) + owner[0x0] + '?text=Hii\x20bro,I\x20am\x20' + _0x76156e[_0x2a8432(0x1b3)]
            }
        }
    };
    return await _0x43436f[_0x2a8432(0x1c3)](_0x76156e[_0x2a8432(0x1b9)], _0x545ede, { 'quoted': _0x76156e });
});
Janith[_0x47530f(0x1ca)]({
    'pattern': _0x47530f(0x1b2),
    'desc': _0x47530f(0x1da),
    'category': '🩵\x20𝙶𝙴𝙽𝙴𝚁𝙰𝙻\x20𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂\x20🩵',
    'react': '✨',
    'filename': __filename
}, async (_0x33c5df, _0x2fb23e, _0x59b4d6) => {
    const _0x1d53b9 = _0x47530f;
    if (!isCreator)
        return _0x2fb23e[_0x1d53b9(0x1c9)](tlang()[_0x1d53b9(0x195)]);
    if (!quoted)
        throw _0x1d53b9(0x1cc);
    if (!/image/[_0x1d53b9(0x18d)](mime))
        throw _0x1d53b9(0x1b5);
    if (/webp/[_0x1d53b9(0x18d)](mime))
        throw _0x1d53b9(0x1cc);
    let _0x3fe4cc = await _0x33c5df['downloadAndSaveMediaMessage'](quoted);
    await _0x33c5df[_0x1d53b9(0x1c4)](botNumber, { 'url': _0x3fe4cc })[_0x1d53b9(0x1b1)](_0x2da691 => fs['unlinkSync'](_0x3fe4cc));
    _0x2fb23e[_0x1d53b9(0x1c9)](tlang()['suuccess']);
});
function _0x5dc7() {
    const _0x182fb6 = [
        'join',
        '*\x0a┃\x20╰┬────✧❁✧───────»\x0a┃\x20\x20┌┤\x0a',
        '╭━━━━━━━━━━━────⊷\x0a',
        '\x0a┃\x20⛥╭──────────────\x20\x20\x20\x20\x20\x20\x0a┃\x20⛥│\x20User:\x20',
        '\x20]\x0a│\x20│\x20Developer:Janiya\x0a│\x20│\x20Owner:\x20',
        'setDefault',
        '2650464dPCyYE',
        '*🧩Type:*\x20',
        'find',
        '\x0a│\x20│\x20Date:\x20',
        '\x0a│\x20│\x20Users:\x20',
        'dontAddCommandList',
        'test',
        'format',
        '\x0a│\x20╰──────✧❁✧──────»\x0a╰───────────────⊷\x0a\x0a',
        '722925QQbVOH',
        '1915320HLrcQY',
        'HH:mm:ss',
        'BEGIN:VCARD\x0a',
        '7xBFyBk',
        'owner',
        'alias',
        '\x0a│\x20│\x20Uptime:\x20',
        'repeat',
        '\x0a┃\x20⛥│\x20Commands:\x20',
        'help',
        '╰━━━━━━━━━━━───⊷\x0a',
        '3173616RkPFTn',
        'DD/MM/YYYY',
        '┃\x20⛥\x20╰─────────────\x0a',
        '*〽️Usage:*\x0a\x20```',
        '│\x20╭─────✧❁✧─────«\x0a│\x20│\x20User:\x20',
        'map',
        '../config',
        '*🧩Description:*\x20',
        'desc',
        'ping',
        'countDocuments',
        '┃\x20⛥\x20╭─────────────\x0a',
        'Touch\x20here.',
        'moment-timezone',
        'https://wa.me/+',
        '✨FileName:\x20',
        'fromCharCode',
        '\x0a┃\x20⛥│\x20Mem:\x20',
        '┃\x20\x20╰─────────────◉',
        'list',
        'locale',
        'catch',
        'setpp',
        'pushName',
        'totalmem',
        'Send/Reply\x20Image\x20With\x20Caption\x20.setpp}',
        'length',
        '\x0a┃\x20⛥│\x20Theme:\x20',
        'SPEED',
        'chat',
        'uptime',
        '645052sfJswk',
        '5AAkpJC',
        '51122pCZjZu',
        '*🧩Category:*\x20',
        '\x0a┃\x20⛥│\x20\x20\x0a┃\x20⛥╰───────────\x0a╰━━━━━━━━━━━──⊷\x0a',
        'pattern',
        '\x0a│\x20│\x20Time:\x20',
        '\x0a│\x20│\x20Plugins:\x20',
        'sendMessage',
        'updateProfilePicture',
        'Owner',
        'List\x20Menu',
        'split',
        '╭───❰',
        'reply',
        'cmd',
        '\x20〙━━──⊷',
        'Send/Reply\x20Image\x20With\x20Caption\x20.setpp',
        '*❌No\x20Such\x20commands.*',
        'title',
        '\x0a│\x20│\x20Prefix:[\x20',
        'END:VCARD',
        '\x0a┃\x20╭─────✧❁✧───────«\x0a┃\x20│\x20*',
        'file',
        '*🍁Command:*\x20',
        'to\x20get\x20extact\x20name\x20where\x20that\x20command\x20is\x20in\x20repo.\x0aSo\x20user\x20can\x20edit\x20that.',
        '../lib',
        'freemem',
        'VERSION:3.0\x0a',
        '8ozehAj',
        'toLowerCase',
        'to\x20change\x20Profile\x20Picture.',
        'ownername',
        '╭───《\x20\x27𝚀𝚄𝙴𝙴𝙽\x20𝙽𝙸𝙻𝚄\x27》──⊷\x0a',
        'TEL;type=CELL;type=VOICE;waid=',
        'category',
        'ORG:;\x0a',
        '```',
        'push',
        'Commands',
        'Asia/Kolkata',
        '┃\x20⛥\x20│\x20➛\x20',
        '🩵\x20𝙶𝙴𝙽𝙴𝚁𝙰𝙻\x20𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂\x20🩵',
        'Help\x20list',
        '951608vIPkXl'
    ];
    _0x5dc7 = function () {
        return _0x182fb6;
    };
    return _0x5dc7();
}
Janith[_0x47530f(0x1ca)]({
    'pattern': _0x47530f(0x1d2),
    'desc': _0x47530f(0x1d4),
    'category': _0x47530f(0x17e),
    'react': '✨',
    'filename': __filename
}, async (_0x3ffba4, _0x1e0860, _0xd3c2ae, {isCreator: _0xd7cf46}) => {
    const _0x2d8b46 = _0x47530f;
    const {commands: _0x5d75f5} = require('../lib');
    let _0x87c398 = [];
    const _0x683b73 = _0x5d75f5[_0x2d8b46(0x189)](_0x1b6287 => _0x1b6287[_0x2d8b46(0x1c0)] === _0xd3c2ae[_0x2d8b46(0x1c7)]('\x20')[0x0][_0x2d8b46(0x1d9)]());
    if (!_0x683b73)
        return await _0x1e0860[_0x2d8b46(0x1c9)](_0x2d8b46(0x1cd));
    else
        _0x87c398[_0x2d8b46(0x1e1)](_0x2d8b46(0x1d3) + _0x683b73[_0x2d8b46(0x1c0)]);
    if (_0x683b73[_0x2d8b46(0x1de)])
        _0x87c398['push'](_0x2d8b46(0x188) + _0x683b73['category']);
    if (_0x683b73['filename'])
        _0x87c398['push'](_0x2d8b46(0x1ab) + _0x683b73['filename']);
    return await _0x1e0860[_0x2d8b46(0x1c9)](_0x87c398[_0x2d8b46(0x181)]('\x0a'));
});