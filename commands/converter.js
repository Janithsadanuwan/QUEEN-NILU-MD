const _0x5ba59c = _0xb1f3;
(function (_0x3bb9cf, _0x1e3591) {
    const _0x3b7b93 = _0xb1f3;
    const _0xbb944 = _0x3bb9cf();
    while (!![]) {
        try {
            const _0x20b3ae = -parseInt(_0x3b7b93(0xb1)) / 0x1 + parseInt(_0x3b7b93(0xba)) / 0x2 * (-parseInt(_0x3b7b93(0xe3)) / 0x3) + -parseInt(_0x3b7b93(0xde)) / 0x4 + -parseInt(_0x3b7b93(0xd3)) / 0x5 * (-parseInt(_0x3b7b93(0xc2)) / 0x6) + parseInt(_0x3b7b93(0xd8)) / 0x7 + parseInt(_0x3b7b93(0xe4)) / 0x8 * (-parseInt(_0x3b7b93(0xdd)) / 0x9) + parseInt(_0x3b7b93(0xdf)) / 0xa;
            if (_0x20b3ae === _0x1e3591) {
                break;
            } else {
                _0xbb944['push'](_0xbb944['shift']());
            }
        } catch (_0x35da49) {
            _0xbb944['push'](_0xbb944['shift']());
        }
    }
}(_0x3c01, 0x385b1));
const axios = require(_0x5ba59c(0xb7));
const {sck1, tiny, fancytext, listall, cmd} = require(_0x5ba59c(0xdc));
const fs = require('fs-extra');
const {exec} = require(_0x5ba59c(0xb5));
function _0xb1f3(_0x1b19a7, _0x26f0cd) {
    const _0x3c0156 = _0x3c01();
    _0xb1f3 = function (_0xb1f3c7, _0x420e16) {
        _0xb1f3c7 = _0xb1f3c7 - 0xb0;
        let _0x2ccd52 = _0x3c0156[_0xb1f3c7];
        return _0x2ccd52;
    };
    return _0xb1f3(_0x1b19a7, _0x26f0cd);
}
function _0x3c01() {
    const _0x271071 = [
        '1390wSVhVk',
        'quoted',
        'quotely',
        '<reply\x20to\x20any\x20gif>',
        'fancy',
        '349664cEKLZd',
        'base64',
        'toaudio',
        '_Need\x20Media._',
        '../lib/',
        '882DHkZUs',
        '941656NKNwHO',
        '9906610lJDXDx',
        'Makes\x20url\x20tiny.',
        'Makes\x20photo\x20of\x20replied\x20sticker.',
        'chat',
        '86451dkHkZp',
        '27832TxvOSY',
        'image',
        'data',
        'findOne',
        'sendMessage',
        'Please\x20quote/reply\x20to\x20any\x20message',
        'audio/mpeg',
        'Makes\x20Sticker\x20of\x20quoted\x20text.',
        'mtype',
        '../lib',
        'result',
        '154018seUSft',
        'Makes\x20stylish/fancy\x20given\x20text',
        'log',
        'text',
        'child_process',
        '💱\x20𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝚁\x20𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂\x20💱',
        'axios',
        'https://tinyurl.com/api-create.php?url=',
        'length',
        '8MRDzxs',
        'tiny',
        'quote',
        'split',
        'name',
        '#FFFFFF',
        'https://bot.lyo.su/quote/generate',
        'floor',
        '774ZVhJxk',
        'Quotely',
        '#000000',
        'get',
        'Fancy\x20text\x20generator\x0a\x0aExample:\x20.fancy\x2032\x20Queen\x20Nilu\x0a\x0a',
        'photo',
        'readFileSync',
        'Queen\x20Nilu\x20Bot',
        'random',
        'unlinkSync',
        'reply',
        'sticker',
        'downloadAndSaveMediaMessage',
        'getName',
        'Provide\x20me\x20a\x20link',
        'sender',
        '*🛡️Your\x20Shortened\x20URL*\x0a\x0a'
    ];
    _0x3c01 = function () {
        return _0x271071;
    };
    return _0x3c01();
}
cmd({
    'pattern': _0x5ba59c(0xc7),
    'desc': _0x5ba59c(0xe1),
    'category': _0x5ba59c(0xb6),
    'use': _0x5ba59c(0xd6),
    'filename': __filename
}, async (_0x5880cd, _0x332ac3, _0x506664) => {
    const _0x515dc2 = _0x5ba59c;
    const _0x39a77b = _0x530a2b => {
        const _0x44e8c0 = _0xb1f3;
        return '' + Math[_0x44e8c0(0xc1)](Math[_0x44e8c0(0xca)]() * 0x2710) + _0x530a2b;
    };
    if (!_0x332ac3[_0x515dc2(0xd4)])
        return _0x332ac3[_0x515dc2(0xcc)](_0x515dc2(0xdb));
    let _0x3dc60d = _0x332ac3[_0x515dc2(0xd4)][_0x515dc2(0xec)];
    let _0x1bdca5 = await _0x5880cd[_0x515dc2(0xce)](_0x332ac3[_0x515dc2(0xd4)]);
    let _0x3454b8 = await _0x39a77b('.png');
    exec('ffmpeg\x20-i\x20' + _0x1bdca5 + '\x20' + _0x3454b8, _0x412294 => {
        const _0x15e5c2 = _0x515dc2;
        let _0x1a41a2 = fs[_0x15e5c2(0xc8)](ran);
        _0x5880cd[_0x15e5c2(0xe8)](_0x332ac3[_0x15e5c2(0xe2)], { 'image': _0x1a41a2 }, { 'quoted': _0x332ac3 });
    });
    fs[_0x515dc2(0xcb)](_0x1bdca5);
    fs[_0x515dc2(0xcb)](_0x3454b8);
});
cmd({
    'pattern': _0x5ba59c(0xd5),
    'desc': _0x5ba59c(0xeb),
    'alias': ['q'],
    'category': '💱\x20𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝚁\x20𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂\x20💱',
    'use': '<reply\x20to\x20any\x20message.>',
    'filename': __filename
}, async (_0x400e9f, _0x59fb95, _0x480350) => {
    const _0x3f7a28 = _0x5ba59c;
    if (!_0x59fb95[_0x3f7a28(0xd4)])
        return _0x59fb95[_0x3f7a28(0xcc)](_0x3f7a28(0xe9));
    let _0x565672 = _0x59fb95[_0x3f7a28(0xd4)][_0x3f7a28(0xb4)];
    let _0x16284f;
    try {
        _0x16284f = await _0x400e9f['profilePictureUrl'](_0x59fb95[_0x3f7a28(0xd4)][_0x3f7a28(0xd1)], 'image');
    } catch (_0x1a8d74) {
        _0x16284f = THUMB_IMAGE;
    }
    let _0x666e1b = [
        _0x3f7a28(0xbf),
        _0x3f7a28(0xc4)
    ];
    let _0x43bb46 = _0x666e1b[Math[_0x3f7a28(0xc1)](Math[_0x3f7a28(0xca)]() * _0x666e1b[_0x3f7a28(0xb9)])];
    let _0x387b7c = await sck1[_0x3f7a28(0xe7)]({ 'id': _0x59fb95[_0x3f7a28(0xd4)][_0x3f7a28(0xd1)] });
    var _0x383cc3;
    if (_0x387b7c[_0x3f7a28(0xbe)] && _0x387b7c[_0x3f7a28(0xbe)] !== undefined) {
        _0x383cc3 = _0x387b7c[_0x3f7a28(0xbe)];
    } else {
        _0x383cc3 = _0x400e9f[_0x3f7a28(0xcf)](_0x59fb95[_0x3f7a28(0xd4)][_0x3f7a28(0xd1)]);
    }
    let _0x11259f = {
        'type': _0x3f7a28(0xbc),
        'format': 'png',
        'backgroundColor': _0x43bb46,
        'width': 0x200,
        'height': 0x200,
        'scale': 0x3,
        'messages': [{
                'avatar': !![],
                'from': {
                    'first_name': _0x383cc3,
                    'language_code': 'en',
                    'name': _0x383cc3,
                    'photo': { 'url': _0x16284f }
                },
                'text': _0x565672,
                'replyMessage': {}
            }]
    };
    let _0xb6f744 = await axios['post'](_0x3f7a28(0xc0), _0x11259f);
    let _0x587861 = Buffer['alloc'](_0xb6f744['data']['result']['image']['length'], _0xb6f744[_0x3f7a28(0xe6)][_0x3f7a28(0xb0)][_0x3f7a28(0xe5)], _0x3f7a28(0xd9));
    return _0x59fb95[_0x3f7a28(0xcc)](_0x587861, {
        'packname': 'Queen\x20Nilu',
        'author': _0x3f7a28(0xc3)
    }, _0x3f7a28(0xcd));
});
cmd({
    'pattern': _0x5ba59c(0xd7),
    'desc': _0x5ba59c(0xb2),
    'category': _0x5ba59c(0xb6),
    'use': '56\x20Queen\x20Nilu',
    'react': '✅',
    'filename': __filename
}, async (_0x2a5d42, _0xfc7fbe, _0xd14be7) => {
    const _0x5a247c = _0x5ba59c;
    if (isNaN(_0xd14be7[_0x5a247c(0xbd)]('\x20')[0x0]) || !_0xd14be7) {
        let _0x5c5670 = tiny(_0x5a247c(0xc6));
        listall(_0x5a247c(0xc9))['forEach']((_0x54546c, _0x3e1112) => {
            _0x5c5670 += (_0x3e1112 += 0x1) + '\x20' + _0x54546c + '\x0a';
        });
        return await _0xfc7fbe['reply'](_0x5c5670);
    }
    let _0x90b7ab = await fancytext('' + _0xd14be7['slice'](0x2), _0xd14be7[_0x5a247c(0xbd)]('\x20')[0x0]);
    _0xfc7fbe[_0x5a247c(0xcc)](_0x90b7ab);
});
cmd({
    'pattern': _0x5ba59c(0xbb),
    'desc': _0x5ba59c(0xe0),
    'category': _0x5ba59c(0xb6),
    'use': '<url>',
    'react': '✅',
    'filename': __filename
}, async (_0x29b511, _0x44df7b, _0x4821f5) => {
    const _0x2c1267 = _0x5ba59c;
    if (!_0x4821f5)
        return _0x44df7b[_0x2c1267(0xcc)](_0x2c1267(0xd0));
    try {
        link = _0x4821f5[_0x2c1267(0xbd)]('\x20')[0x0];
        anu = await axios[_0x2c1267(0xc5)](_0x2c1267(0xb8) + link);
        _0x44df7b[_0x2c1267(0xcc)](_0x2c1267(0xd2) + anu[_0x2c1267(0xe6)]);
    } catch (_0x35b7ac) {
        console[_0x2c1267(0xb3)](_0x35b7ac);
    }
});
cmd({
    'pattern': _0x5ba59c(0xda),
    'desc': 'changes\x20type\x20to\x20audio.',
    'category': '💱\x20𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝚁\x20𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂\x20💱',
    'use': '<reply\x20to\x20any\x20audio>',
    'filename': __filename
}, async (_0x40fdba, _0xe8f060, _0x325966) => {
    const _0x20137e = _0x5ba59c;
    if (!_0xe8f060[_0x20137e(0xd4)])
        return _0xe8f060[_0x20137e(0xcc)](_0x20137e(0xdb));
    let _0x4b9ef3 = _0xe8f060[_0x20137e(0xd4)][_0x20137e(0xec)];
    let _0x397a27 = await _0x40fdba['downloadAndSaveMediaMessage'](_0xe8f060[_0x20137e(0xd4)]);
    const {toAudio: _0x2c82ae} = require(_0x20137e(0xed));
    let _0x35b410 = await _0x2c82ae(_0x397a27, 'mp4');
    _0x40fdba[_0x20137e(0xe8)](_0xe8f060[_0x20137e(0xe2)], {
        'audio': _0x35b410,
        'mimetype': _0x20137e(0xea)
    }, { 'quoted': _0xe8f060 });
    await fs[_0x20137e(0xcb)](_0x397a27);
    await fs['unlinkSync'](_0x35b410);
});