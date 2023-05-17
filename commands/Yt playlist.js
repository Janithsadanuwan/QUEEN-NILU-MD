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
const _0x2e9329 = _0x5cb1;
function _0x3c9d() {
    const _0x5492ba = [
        '5cBruWM',
        'finish',
        '55467CKHXXy',
        '6HfYfEy',
        'readFileSync',
        '8151132METjoh',
        '790uqCxCY',
        'chat',
        'This\x20Process\x20will\x20take\x20a\x20bit\x20time.',
        'video/mp4',
        '3ClOARG',
        'all',
        'videoId',
        'error',
        '📥\x20𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳\x20𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂\x20📥',
        'secktor-pack',
        'pipe',
        '1269737rBnnYk',
        'size',
        '\x20⿻\x20Title\x20:\x20',
        'getInfo',
        '292692LunKzX',
        'ytdl-secktor',
        'videoDetails',
        '.mp4',
        '834598giYcTj',
        'unlinkSync',
        'playlist',
        'log',
        'videos',
        'length',
        'itag',
        'random',
        'Downloads\x20video\x20from\x20playlist.',
        '../lib',
        'reply',
        'thumbnail',
        '2096280yfKEWV',
        'sendMessage',
        'floor',
        '\x0a\x20⿻\x20File\x20Size\x20:\x20',
        'createWriteStream',
        '533459ngjFIu'
    ];
    _0x3c9d = function () {
        return _0x5492ba;
    };
    return _0x3c9d();
}
(function (_0x168a36, _0x100816) {
    const _0x31d4d0 = _0x5cb1;
    const _0x221cec = _0x168a36();
    while (!![]) {
        try {
            const _0x5b408e = -parseInt(_0x31d4d0(0x10e)) / 0x1 + parseInt(_0x31d4d0(0xfd)) / 0x2 * (-parseInt(_0x31d4d0(0xee)) / 0x3) + -parseInt(_0x31d4d0(0xf9)) / 0x4 * (-parseInt(_0x31d4d0(0x10f)) / 0x5) + parseInt(_0x31d4d0(0x112)) / 0x6 * (parseInt(_0x31d4d0(0xf5)) / 0x7) + -parseInt(_0x31d4d0(0x109)) / 0x8 + -parseInt(_0x31d4d0(0x111)) / 0x9 * (-parseInt(_0x31d4d0(0x115)) / 0xa) + parseInt(_0x31d4d0(0x114)) / 0xb;
            if (_0x5b408e === _0x100816) {
                break;
            } else {
                _0x221cec['push'](_0x221cec['shift']());
            }
        } catch (_0x588f91) {
            _0x221cec['push'](_0x221cec['shift']());
        }
    }
}(_0x3c9d, 0x41d5c));
const {tlang, cmd, sleep, getBuffer, prefix, Config} = require(_0x2e9329(0x106));
const ytdl = require(_0x2e9329(0xfa));
const yts = require(_0x2e9329(0xf3));
const fs = require('fs');
function _0x5cb1(_0x5e5aed, _0x579a15) {
    const _0x3c9d96 = _0x3c9d();
    _0x5cb1 = function (_0x5cb1af, _0x234b6e) {
        _0x5cb1af = _0x5cb1af - 0xec;
        let _0x3e7119 = _0x3c9d96[_0x5cb1af];
        return _0x3e7119;
    };
    return _0x5cb1(_0x5e5aed, _0x579a15);
}
var videotime = 0xea60;
var dlsize = 0xfa;
cmd({
    'pattern': _0x2e9329(0xff),
    'desc': _0x2e9329(0x105),
    'category': _0x2e9329(0xf2),
    'filename': __filename,
    'use': '<yt\x20playlist\x20url>'
}, async (_0x5c87b5, _0x432e0b, _0x456165) => {
    const _0xe0c4c8 = _0x2e9329;
    const _0x234e03 = _0x50ee84 => {
        const _0x13596c = _0x5cb1;
        return '' + Math[_0x13596c(0x10b)](Math[_0x13596c(0x104)]() * 0x2710) + _0x50ee84;
    };
    if (!_0x456165) {
        _0x432e0b['reply']('❌Please\x20provide\x20me\x20a\x20url');
        return;
    }
    let _0x3aae19 = _0x456165['split']('=')[0x1];
    console[_0xe0c4c8(0x100)](_0x3aae19);
    var _0x2a0403 = { 'listId': _0x3aae19 };
    yts(_0x2a0403, async function (_0x59efa0, _0x19ef10) {
        const _0x4de4fd = _0xe0c4c8;
        if (_0x59efa0)
            throw _0x59efa0;
        _0x432e0b[_0x4de4fd(0x107)](_0x4de4fd(0xec));
        for (let _0x551cd2 = 0x0; _0x551cd2 < _0x19ef10[_0x4de4fd(0x101)][_0x4de4fd(0x102)]; _0x551cd2++) {
            if (_0x19ef10['videos'][_0x551cd2][_0x4de4fd(0xf0)] === undefined)
                continue;
            let _0x5667c7 = _0x19ef10[_0x4de4fd(0x101)][_0x551cd2]['videoId'];
            try {
                let _0x394c0d = await ytdl[_0x4de4fd(0xf8)](_0x5667c7);
                if (_0x394c0d[_0x4de4fd(0xfb)]['lengthSeconds'] >= videotime)
                    continue;
                let _0x10d5a6 = _0x394c0d[_0x4de4fd(0xfb)]['title'];
                let _0x23de76 = _0x234e03(_0x4de4fd(0xfc));
                const _0x5c284c = ytdl(_0x5667c7, { 'filter': _0x1d4db2 => _0x1d4db2['itag'] == 0x16 || _0x1d4db2[_0x4de4fd(0x103)] == 0x12 })[_0x4de4fd(0xf4)](fs[_0x4de4fd(0x10d)]('./' + _0x23de76));
                await new Promise((_0x3af587, _0x2ca1b2) => {
                    const _0x281b65 = _0x4de4fd;
                    _0x5c284c['on'](_0x281b65(0xf1), _0x2ca1b2);
                    _0x5c284c['on'](_0x281b65(0x110), _0x3af587);
                });
                let _0x10e1a2 = fs['statSync']('./' + _0x23de76);
                let _0x2b7a2e = _0x10e1a2[_0x4de4fd(0xf6)];
                let _0x4a6f5d = _0x2b7a2e / (0x400 * 0x400);
                if (_0x4a6f5d <= dlsize) {
                    let _0x10af19 = require(_0x4de4fd(0xf3));
                    let _0xa60d5e = await _0x10af19(_0x456165);
                    let _0x13db1d = {
                        'video': fs[_0x4de4fd(0x113)]('./' + _0x23de76),
                        'jpegThumbnail': log0,
                        'mimetype': _0x4de4fd(0xed),
                        'fileName': _0x10d5a6 + _0x4de4fd(0xfc),
                        'caption': _0x4de4fd(0xf7) + _0x10d5a6 + _0x4de4fd(0x10c) + _0x4a6f5d + '\x20MB',
                        'headerType': 0x4,
                        'contextInfo': {
                            'externalAdReply': {
                                'title': _0x10d5a6,
                                'body': _0x432e0b['pushName'],
                                'thumbnail': await getBuffer(_0xa60d5e[_0x4de4fd(0xef)][0x0][_0x4de4fd(0x108)]),
                                'renderLargerThumbnail': !![],
                                'mediaType': 0x2,
                                'mediaUrl': _0xa60d5e[_0x4de4fd(0xef)][0x0][_0x4de4fd(0x108)],
                                'sourceUrl': _0xa60d5e[_0x4de4fd(0xef)][0x0]['thumbnail']
                            }
                        }
                    };
                    _0x5c87b5[_0x4de4fd(0x10a)](_0x432e0b[_0x4de4fd(0x116)], _0x13db1d, { 'quoted': _0x432e0b });
                } else {
                    _0x432e0b[_0x4de4fd(0x107)]('❌\x20File\x20size\x20bigger\x20than\x20' + dlsize + 'mb.');
                }
                fs[_0x4de4fd(0xfe)]('./' + _0x23de76);
            } catch (_0x1e5110) {
                console['log'](_0x1e5110);
            }
        }
    });
});