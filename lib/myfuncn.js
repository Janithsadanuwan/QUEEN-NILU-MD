const _0x4615ea = _0x5c8c;
(function (_0x178e94, _0x4aca81) {
    const _0x371d71 = _0x5c8c;
    const _0x1de3f0 = _0x178e94();
    while (!![]) {
        try {
            const _0x4a2ab9 = parseInt(_0x371d71(0x13a)) / 0x1 * (parseInt(_0x371d71(0xc1)) / 0x2) + parseInt(_0x371d71(0x108)) / 0x3 * (-parseInt(_0x371d71(0x11e)) / 0x4) + parseInt(_0x371d71(0xe8)) / 0x5 + -parseInt(_0x371d71(0xdb)) / 0x6 + parseInt(_0x371d71(0x144)) / 0x7 * (parseInt(_0x371d71(0xfb)) / 0x8) + -parseInt(_0x371d71(0x121)) / 0x9 * (-parseInt(_0x371d71(0xd7)) / 0xa) + -parseInt(_0x371d71(0x142)) / 0xb;
            if (_0x4a2ab9 === _0x4aca81) {
                break;
            } else {
                _0x1de3f0['push'](_0x1de3f0['shift']());
            }
        } catch (_0x3c322d) {
            _0x1de3f0['push'](_0x1de3f0['shift']());
        }
    }
}(_0x3f39, 0xbf6d8));
const {proto, delay, getContentType} = require(_0x4615ea(0x12a));
const fs = require(_0x4615ea(0xf6));
const {unlink} = require('fs')[_0x4615ea(0xea)];
const axios = require(_0x4615ea(0xf7));
const {writeExifImg, writeExifVid, writeExifWebp, imageToWebp, videoToWebp} = require(_0x4615ea(0x12e));
const moment = require(_0x4615ea(0xc4));
const {sizeFormatter} = require(_0x4615ea(0x13c));
const Config = require(_0x4615ea(0xbd));
const util = require(_0x4615ea(0x111));
const jimp = require(_0x4615ea(0x128));
const {defaultMaxListeners} = require(_0x4615ea(0xb0));
const child_process = require('child_process');
const ffmpeg = require(_0x4615ea(0x125));
const unixTimestampSeconds = (_0x3b6b87 = new Date()) => Math['floor'](_0x3b6b87[_0x4615ea(0x114)]() / 0x3e8);
const sleep = _0x1338ef => {
    return new Promise(_0x329709 => {
        setTimeout(_0x329709, _0x1338ef);
    });
};
exports['unixTimestampSeconds'] = unixTimestampSeconds;
exports[_0x4615ea(0x12d)] = _0x2840ee => {
    const _0x2e0121 = _0x4615ea;
    let _0x449b56 = (0x0, exports['unixTimestampSeconds'])()[_0x2e0121(0x127)]();
    if (_0x2840ee)
        _0x449b56 += '.--' + _0x2840ee;
    return _0x449b56;
};
exports['processTime'] = (_0xd2c268, _0x2c7802) => {
    const _0x323848 = _0x4615ea;
    return moment[_0x323848(0xc8)](_0x2c7802 - moment(_0xd2c268 * 0x3e8))['asSeconds']();
};
exports[_0x4615ea(0x104)] = async (_0xa24d8, _0x17131e) => {
    const _0x538328 = _0x4615ea;
    try {
        _0x17131e ? _0x17131e : {};
        const _0x30d742 = await axios({
            'method': _0x538328(0x154),
            'url': _0xa24d8,
            'headers': {
                'DNT': 0x1,
                'Upgrade-Insecure-Request': 0x1
            },
            ..._0x17131e,
            'responseType': _0x538328(0x115)
        });
        return _0x30d742[_0x538328(0xff)];
    } catch (_0xec47c5) {
        return _0xec47c5;
    }
};
exports[_0x4615ea(0x105)] = async (_0x2b6b83, _0x119311) => {
    const _0x570a4e = _0x4615ea;
    try {
        _0x119311 ? _0x119311 : {};
        const _0x179952 = await axios({
            'method': 'GET',
            'url': _0x2b6b83,
            'headers': { 'User-Agent': _0x570a4e(0x119) },
            ..._0x119311
        });
        return _0x179952[_0x570a4e(0xff)];
    } catch (_0x533775) {
        return _0x533775;
    }
};
exports[_0x4615ea(0xec)] = function (_0x52625a) {
    const _0x3c9cd0 = _0x4615ea;
    _0x52625a = Number(_0x52625a);
    var _0x1dfbc4 = Math[_0x3c9cd0(0xd9)](_0x52625a / (0xe10 * 0x18));
    var _0x3ef2e7 = Math[_0x3c9cd0(0xd9)](_0x52625a % (0xe10 * 0x18) / 0xe10);
    var _0x483318 = Math[_0x3c9cd0(0xd9)](_0x52625a % 0xe10 / 0x3c);
    var _0x20c76f = Math[_0x3c9cd0(0xd9)](_0x52625a % 0x3c);
    var _0x24ee3e = _0x1dfbc4 > 0x0 ? _0x1dfbc4 + (_0x1dfbc4 == 0x1 ? _0x3c9cd0(0x11c) : _0x3c9cd0(0x11c)) : '';
    var _0x54fbc3 = _0x3ef2e7 > 0x0 ? _0x3ef2e7 + (_0x3ef2e7 == 0x1 ? _0x3c9cd0(0xcc) : '\x20h,\x20') : '';
    var _0x2fbdca = _0x483318 > 0x0 ? _0x483318 + (_0x483318 == 0x1 ? '\x20m,\x20' : '\x20m,\x20') : '';
    var _0x1989a0 = _0x20c76f > 0x0 ? _0x20c76f + (_0x20c76f == 0x1 ? '\x20s' : '\x20s') : '';
    return _0x24ee3e + _0x54fbc3 + _0x2fbdca + _0x1989a0;
};
exports['clockString'] = function (_0x38160b) {
    const _0x2c13a1 = _0x4615ea;
    let _0x27091e = isNaN(_0x38160b) ? '--' : Math[_0x2c13a1(0xd9)](_0x38160b % (0xe10 * 0x18) / 0xe10);
    let _0x1ecfd4 = isNaN(_0x38160b) ? '--' : Math[_0x2c13a1(0xd9)](_0x38160b % 0xe10 / 0x3c);
    let _0x51d0b5 = isNaN(_0x38160b) ? '--' : Math[_0x2c13a1(0xd9)](_0x38160b % 0x3c);
    return [
        _0x27091e,
        _0x1ecfd4,
        _0x51d0b5
    ][_0x2c13a1(0xbb)](_0x15b2db => _0x15b2db[_0x2c13a1(0x127)]()[_0x2c13a1(0xeb)](0x2, 0x0))[_0x2c13a1(0xcf)](':');
};
exports[_0x4615ea(0x13e)] = async _0x1cae3c => {
    return new Promise(_0x4771df => setTimeout(_0x4771df, _0x1cae3c));
};
exports[_0x4615ea(0x138)] = _0x99ed4d => {
    const _0x767f9f = _0x4615ea;
    return _0x99ed4d[_0x767f9f(0xd2)](new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'));
};
exports[_0x4615ea(0x114)] = (_0x6891ed, _0x28a5cc) => {
    const _0x1fc58d = _0x4615ea;
    if (_0x28a5cc) {
        return moment(_0x28a5cc)[_0x1fc58d(0x13d)]('id')[_0x1fc58d(0xb3)](_0x6891ed);
    } else {
        return moment['tz'](_0x1fc58d(0x146))['locale']('id')['format'](_0x6891ed);
    }
};
exports['formatDate'] = (_0x205719, _0x1fbf1c = 'id') => {
    const _0x576502 = _0x4615ea;
    let _0x1092b8 = new Date(_0x205719);
    return _0x1092b8[_0x576502(0x106)](_0x1fbf1c, {
        'weekday': _0x576502(0x126),
        'day': 'numeric',
        'month': _0x576502(0x126),
        'year': _0x576502(0x122),
        'hour': 'numeric',
        'minute': _0x576502(0x122),
        'second': _0x576502(0x122)
    });
};
function _0x5c8c(_0x2d1682, _0x10f81f) {
    const _0x3f39ff = _0x3f39();
    _0x5c8c = function (_0x5c8ce1, _0x40ed9b) {
        _0x5c8ce1 = _0x5c8ce1 - 0xab;
        let _0x4cf80d = _0x3f39ff[_0x5c8ce1];
        return _0x4cf80d;
    };
    return _0x5c8c(_0x2d1682, _0x10f81f);
}
exports[_0x4615ea(0xcb)] = sizeFormatter({
    'std': _0x4615ea(0x11b),
    'decimalPlaces': 0x2,
    'keepTrailingZeroes': ![],
    'render': (_0x4e81b7, _0x476b89) => _0x4e81b7 + '\x20' + _0x476b89 + 'B'
});
exports[_0x4615ea(0xc7)] = _0x544b65 => {
    const _0x5318d1 = _0x4615ea;
    return JSON[_0x5318d1(0x132)](_0x544b65, null, 0x2);
};
function format(..._0x1232dc) {
    const _0x17f6a1 = _0x4615ea;
    return util[_0x17f6a1(0xb3)](..._0x1232dc);
}
exports[_0x4615ea(0xe3)] = (_0x24754e, _0x50c477, _0x503d23) => {
    const _0x400d13 = _0x4615ea;
    if (_0x50c477[_0x400d13(0xca)] !== _0x503d23['length'])
        throw new Error(_0x400d13(0x10e));
    for (let _0x1ded27 in _0x50c477)
        if (util[_0x400d13(0x109)](_0x24754e, _0x50c477[_0x1ded27]))
            return _0x503d23[_0x1ded27];
    return null;
};
exports[_0x4615ea(0x10f)] = async _0x4550c4 => {
    const _0x41df9d = _0x4615ea;
    const _0x4277d2 = await jimp_1[_0x41df9d(0x140)](_0x4550c4);
    const _0xcbf203 = _0x4277d2[_0x41df9d(0x12b)]();
    const _0x32136e = _0x4277d2[_0x41df9d(0xac)]();
    const _0x1441e1 = _0x4277d2[_0x41df9d(0xcd)](0x0, 0x0, _0xcbf203, _0x32136e);
    return {
        'img': await _0x1441e1[_0x41df9d(0x12f)](0x2d0, 0x2d0)[_0x41df9d(0xdc)](jimp_1['MIME_JPEG']),
        'preview': await _0x1441e1[_0x41df9d(0x12f)](0x2d0, 0x2d0)[_0x41df9d(0xdc)](jimp_1[_0x41df9d(0xab)])
    };
};
exports[_0x4615ea(0xf0)] = (_0x47cde8, _0x4184cc = 0x2) => {
    const _0x35c8d7 = _0x4615ea;
    if (_0x47cde8 === 0x0)
        return _0x35c8d7(0xb4);
    const _0x2a8d89 = 0x400;
    const _0x18e797 = _0x4184cc < 0x0 ? 0x0 : _0x4184cc;
    const _0x416f8f = [
        _0x35c8d7(0x113),
        'KB',
        'MB',
        'GB',
        'TB',
        'PB',
        'EB',
        'ZB',
        'YB'
    ];
    const _0x30d543 = Math['floor'](Math[_0x35c8d7(0x100)](_0x47cde8) / Math[_0x35c8d7(0x100)](_0x2a8d89));
    return parseFloat((_0x47cde8 / Math[_0x35c8d7(0xb8)](_0x2a8d89, _0x30d543))['toFixed'](_0x18e797)) + '\x20' + _0x416f8f[_0x30d543];
};
exports[_0x4615ea(0xe9)] = _0xc62f3d => {
    return new Promise((_0x58d50b, _0x167d39) => {
        const _0x19a40b = _0x5c8c;
        if (/http/[_0x19a40b(0xdf)](_0xc62f3d)) {
            axios[_0x19a40b(0x154)](_0xc62f3d)[_0x19a40b(0xfe)](_0x4a3b7b => {
                const _0xd5b2ac = _0x19a40b;
                let _0x47e742 = parseInt(_0x4a3b7b['headers'][_0xd5b2ac(0x13b)]);
                let _0x203ff0 = exports['bytesToSize'](_0x47e742, 0x3);
                if (!isNaN(_0x47e742))
                    _0x58d50b(_0x203ff0);
            });
        } else if (Buffer[_0x19a40b(0xee)](_0xc62f3d)) {
            let _0x28af73 = Buffer['byteLength'](_0xc62f3d);
            let _0x2f0598 = exports[_0x19a40b(0xf0)](_0x28af73, 0x3);
            if (!isNaN(_0x28af73))
                _0x58d50b(_0x2f0598);
        } else {
            _0x167d39(_0x19a40b(0x134));
        }
    });
};
exports[_0x4615ea(0xfd)] = (_0x5c60d8 = '') => {
    const _0x265b67 = _0x4615ea;
    return [..._0x5c60d8[_0x265b67(0xdd)](/@([0-9]{5,16}|0)/g)]['map'](_0x3bb901 => _0x3bb901[0x1] + _0x265b67(0x124));
};
function _0x3f39() {
    const _0x9ecde1 = [
        'toString',
        'jimp',
        'message',
        '@adiwajshing/baileys',
        'getWidth',
        'stanzaId',
        'generateMessageTag',
        '../lib/exif',
        'scaleToFit',
        '.gif\x20-movflags\x20faststart\x20-pix_fmt\x20yuv420p\x20-vf\x20\x22scale=trunc(iw/2)*2:trunc(ih/2)*2\x22\x20./',
        'delete',
        'stringify',
        'sender',
        'error\x20gatau\x20apah',
        'react',
        'sendMessage',
        'Janiya',
        'isUrl',
        'random',
        '381gBtupG',
        'content-length',
        'human-readable',
        'locale',
        'sleep',
        'remoteJid',
        'read',
        'url',
        '21867065eEMXfT',
        'fromObject',
        '25627DRhIXa',
        'startsWith',
        'Asia/Jakarta',
        'mtype',
        'all',
        'decodeJid',
        'exec',
        'sticker',
        'key',
        'extendedTextMessage',
        'smsg',
        'image/webp',
        'caption',
        'selectedRowId',
        'participant',
        '.gif',
        'get',
        'mentionedJid',
        'MIME_JPEG',
        'getHeight',
        'chat',
        '@g.us',
        'writeFileSync',
        'stream',
        'imageMessage',
        'contextInfo',
        'format',
        '0\x20Bytes',
        'relayMessage',
        'BAE5',
        'includes',
        'pow',
        'getQuotedMessage',
        '.mp4',
        'map',
        'filename',
        '../config',
        'END:VCARD',
        'isGroup',
        'mentions',
        '8052bAAcJE',
        'copyNForward',
        'listResponseMessage',
        'moment-timezone',
        'toLowerCase',
        'forwardMessage',
        'jsonformat',
        'duration',
        'sendImageAsSticker',
        'length',
        'formatp',
        '\x20h,\x20',
        'crop',
        'messageContextInfo',
        'join',
        'BAES',
        'title',
        'match',
        'BEGIN:VCARD\x0a',
        'videoMessage',
        'Update\x20',
        'split',
        '20hDvpuB',
        'image',
        'floor',
        'selectedButtonId',
        '7184034yiXgYM',
        'getBufferAsync',
        'matchAll',
        'TEL;type=CELL;type=VOICE;waid=',
        'test',
        'video',
        'imgurl',
        'isBaileys',
        'logic',
        'quotedMessage',
        'msg',
        'getQuotedObj',
        'GIFBufferToVideoBuffer',
        '6065820xFJbbi',
        'getSizeMedia',
        'promises',
        'padStart',
        'runtime',
        'QueenNilu',
        'isBuffer',
        'cache',
        'bytesToSize',
        'buttonsResponseMessage',
        'ffmpeg\x20-i\x20./',
        'senddoc',
        'quoted',
        'download',
        'fs-extra',
        'axios',
        'contentText',
        'productMessage',
        'text',
        '3360GAdFIq',
        'toObject',
        'parseMention',
        'then',
        'data',
        'log',
        'fromMe',
        'sendcontact',
        'reply',
        'getBuffer',
        'fetchJson',
        'toLocaleDateString',
        'conversation',
        '1670439ZWHQAI',
        'isDeepStrictEqual',
        'unwatchFile',
        'fakeObj',
        'externalAdRepl',
        'user',
        'Input\x20and\x20Output\x20must\x20have\x20same\x20length',
        'generateProfilePicture',
        'singleSelectReply',
        'util',
        'body',
        'Bytes',
        'getTime',
        'arraybuffer',
        'mimetype',
        'ORG:',
        'isBot',
        'Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/95.0.4638.69\x20Safari/537.36',
        'templateButtonReplyMessage',
        'JEDEC',
        '\x20d,\x20',
        'watchFile',
        '8FafrVU',
        'ownername',
        'loadMessage',
        '3592251sEfzum',
        'numeric',
        'selectedDisplayText',
        '@s.whatsapp.net',
        'fluent-ffmpeg',
        'long'
    ];
    _0x3f39 = function () {
        return _0x9ecde1;
    };
    return _0x3f39();
}
exports[_0x4615ea(0xe7)] = async _0x32a984 => {
    const _0x5014b4 = _0x4615ea;
    const _0x551b6a = '' + Math[_0x5014b4(0x139)]()['toString'](0x24);
    await fs[_0x5014b4(0xaf)]('./' + _0x551b6a + _0x5014b4(0x153), _0x32a984);
    child_process[_0x5014b4(0x14a)](_0x5014b4(0xf2) + _0x551b6a + _0x5014b4(0x130) + _0x551b6a + _0x5014b4(0xba));
    await sleep(0x1f40);
    var _0x1c5b70 = await fs['readFileSync']('./' + _0x551b6a + _0x5014b4(0xba));
    Promise[_0x5014b4(0x148)]([
        unlink('./' + _0x551b6a + _0x5014b4(0xba)),
        unlink('./' + _0x551b6a + _0x5014b4(0x153))
    ]);
    return _0x1c5b70;
};
exports[_0x4615ea(0x14e)] = (_0x53b30b, _0x1936ff, _0xa7170f) => {
    const _0x88d44b = _0x4615ea;
    if (!_0x1936ff)
        return _0x1936ff;
    let _0x275527 = proto['WebMessageInfo'];
    if (_0x1936ff[_0x88d44b(0x14c)]) {
        _0x1936ff['id'] = _0x1936ff['key']['id'];
        _0x1936ff[_0x88d44b(0x118)] = _0x1936ff['id'][_0x88d44b(0x145)](_0x88d44b(0xd0)) && _0x1936ff['id']['length'] === 0x10;
        _0x1936ff[_0x88d44b(0xe2)] = _0x1936ff['id']['startsWith'](_0x88d44b(0xb6)) && _0x1936ff['id'][_0x88d44b(0xca)] === 0x10;
        _0x1936ff[_0x88d44b(0xad)] = _0x1936ff[_0x88d44b(0x14c)][_0x88d44b(0x13f)];
        _0x1936ff[_0x88d44b(0x101)] = _0x1936ff[_0x88d44b(0x14c)]['fromMe'];
        _0x1936ff[_0x88d44b(0xbf)] = _0x1936ff[_0x88d44b(0xad)]['endsWith'](_0x88d44b(0xae));
        _0x1936ff[_0x88d44b(0x133)] = _0x53b30b[_0x88d44b(0x149)](_0x1936ff['fromMe'] && _0x53b30b['user']['id'] || _0x1936ff[_0x88d44b(0x152)] || _0x1936ff['key'][_0x88d44b(0x152)] || _0x1936ff[_0x88d44b(0xad)] || '');
        if (_0x1936ff[_0x88d44b(0xbf)])
            _0x1936ff[_0x88d44b(0x152)] = _0x53b30b['decodeJid'](_0x1936ff[_0x88d44b(0x14c)][_0x88d44b(0x152)]) || '';
    }
    if (_0x1936ff[_0x88d44b(0x129)]) {
        _0x1936ff[_0x88d44b(0x147)] = getContentType(_0x1936ff[_0x88d44b(0x129)]);
        _0x1936ff['msg'] = _0x1936ff[_0x88d44b(0x147)] == 'viewOnceMessage' ? _0x1936ff['message'][_0x1936ff['mtype']]['message'][getContentType(_0x1936ff[_0x88d44b(0x129)][_0x1936ff[_0x88d44b(0x147)]][_0x88d44b(0x129)])] : _0x1936ff[_0x88d44b(0x129)][_0x1936ff[_0x88d44b(0x147)]];
        try {
            _0x1936ff[_0x88d44b(0x112)] = _0x1936ff[_0x88d44b(0x147)] === _0x88d44b(0x107) ? _0x1936ff[_0x88d44b(0x129)]['conversation'] : _0x1936ff[_0x88d44b(0x147)] == _0x88d44b(0xb1) ? _0x1936ff[_0x88d44b(0x129)][_0x88d44b(0xb1)]['caption'] : _0x1936ff[_0x88d44b(0x147)] == _0x88d44b(0xd4) ? _0x1936ff[_0x88d44b(0x129)][_0x88d44b(0xd4)][_0x88d44b(0x150)] : _0x1936ff['mtype'] == _0x88d44b(0x14d) ? _0x1936ff[_0x88d44b(0x129)][_0x88d44b(0x14d)]['text'] : _0x1936ff['mtype'] == 'buttonsResponseMessage' ? _0x1936ff[_0x88d44b(0x129)][_0x88d44b(0xf1)][_0x88d44b(0xda)] : _0x1936ff[_0x88d44b(0x147)] == _0x88d44b(0xc3) ? _0x1936ff[_0x88d44b(0x129)][_0x88d44b(0xc3)][_0x88d44b(0x110)][_0x88d44b(0x151)] : _0x1936ff[_0x88d44b(0x147)] == 'templateButtonReplyMessage' ? _0x1936ff[_0x88d44b(0x129)][_0x88d44b(0x11a)]['selectedId'] : _0x1936ff[_0x88d44b(0x147)] === _0x88d44b(0xce) ? _0x1936ff['message'][_0x88d44b(0xf1)]?.[_0x88d44b(0xda)] || _0x1936ff[_0x88d44b(0x129)]['listResponseMessage']?.[_0x88d44b(0x110)][_0x88d44b(0x151)] || _0x1936ff[_0x88d44b(0xfa)] : '';
        } catch {
            _0x1936ff['body'] = ![];
        }
        let _0x597c07 = _0x1936ff[_0x88d44b(0xf4)] = _0x1936ff[_0x88d44b(0xe5)][_0x88d44b(0xb2)] ? _0x1936ff['msg'][_0x88d44b(0xb2)][_0x88d44b(0xe4)] : null;
        _0x1936ff[_0x88d44b(0x155)] = _0x1936ff[_0x88d44b(0xe5)]['contextInfo'] ? _0x1936ff[_0x88d44b(0xe5)][_0x88d44b(0xb2)]['mentionedJid'] : [];
        if (_0x1936ff['quoted']) {
            let _0x2a8d2f = getContentType(_0x597c07);
            _0x1936ff[_0x88d44b(0xf4)] = _0x1936ff[_0x88d44b(0xf4)][_0x2a8d2f];
            if ([_0x88d44b(0xf9)][_0x88d44b(0xb7)](_0x2a8d2f)) {
                _0x2a8d2f = getContentType(_0x1936ff[_0x88d44b(0xf4)]);
                _0x1936ff[_0x88d44b(0xf4)] = _0x1936ff['quoted'][_0x2a8d2f];
            }
            if (typeof _0x1936ff['quoted'] === 'string')
                _0x1936ff['quoted'] = { 'text': _0x1936ff[_0x88d44b(0xf4)] };
            _0x1936ff[_0x88d44b(0xf4)]['mtype'] = _0x2a8d2f;
            _0x1936ff[_0x88d44b(0xf4)]['id'] = _0x1936ff[_0x88d44b(0xe5)]['contextInfo'][_0x88d44b(0x12c)];
            _0x1936ff[_0x88d44b(0xf4)][_0x88d44b(0xad)] = _0x1936ff[_0x88d44b(0xe5)]['contextInfo'][_0x88d44b(0x13f)] || _0x1936ff[_0x88d44b(0xad)];
            _0x1936ff['quoted'][_0x88d44b(0x118)] = _0x1936ff[_0x88d44b(0xf4)]['id'] ? _0x1936ff[_0x88d44b(0xf4)]['id']['startsWith'](_0x88d44b(0xd0)) && _0x1936ff[_0x88d44b(0xf4)]['id'][_0x88d44b(0xca)] === 0x10 : ![];
            _0x1936ff[_0x88d44b(0xf4)][_0x88d44b(0xe2)] = _0x1936ff[_0x88d44b(0xf4)]['id'] ? _0x1936ff[_0x88d44b(0xf4)]['id'][_0x88d44b(0x145)](_0x88d44b(0xb6)) && _0x1936ff['quoted']['id']['length'] === 0x10 : ![];
            _0x1936ff[_0x88d44b(0xf4)][_0x88d44b(0x133)] = _0x53b30b[_0x88d44b(0x149)](_0x1936ff[_0x88d44b(0xe5)]['contextInfo'][_0x88d44b(0x152)]);
            _0x1936ff[_0x88d44b(0xf4)][_0x88d44b(0x101)] = _0x1936ff[_0x88d44b(0xf4)][_0x88d44b(0x133)] === (_0x53b30b[_0x88d44b(0x10d)] && _0x53b30b[_0x88d44b(0x10d)]['id']);
            _0x1936ff[_0x88d44b(0xf4)]['text'] = _0x1936ff['quoted']['text'] || _0x1936ff[_0x88d44b(0xf4)][_0x88d44b(0x150)] || _0x1936ff[_0x88d44b(0xf4)]['conversation'] || _0x1936ff[_0x88d44b(0xf4)][_0x88d44b(0xf8)] || _0x1936ff[_0x88d44b(0xf4)]['selectedDisplayText'] || _0x1936ff[_0x88d44b(0xf4)]['title'] || '';
            _0x1936ff['quoted'][_0x88d44b(0x155)] = _0x1936ff['msg']['contextInfo'] ? _0x1936ff[_0x88d44b(0xe5)][_0x88d44b(0xb2)][_0x88d44b(0x155)] : [];
            _0x1936ff[_0x88d44b(0xe6)] = _0x1936ff[_0x88d44b(0xb9)] = async () => {
                const _0x259177 = _0x88d44b;
                if (!_0x1936ff[_0x259177(0xf4)]['id'])
                    return ![];
                let _0x421216 = await _0xa7170f[_0x259177(0x120)](_0x1936ff[_0x259177(0xad)], _0x1936ff[_0x259177(0xf4)]['id'], _0x53b30b);
                return exports['smsg'](_0x53b30b, _0x421216, _0xa7170f);
            };
            let _0x193408 = _0x1936ff[_0x88d44b(0xf4)][_0x88d44b(0x10b)] = _0x275527[_0x88d44b(0x143)]({
                'key': {
                    'remoteJid': _0x1936ff['quoted'][_0x88d44b(0xad)],
                    'fromMe': _0x1936ff[_0x88d44b(0xf4)]['fromMe'],
                    'id': _0x1936ff[_0x88d44b(0xf4)]['id']
                },
                'message': _0x597c07,
                ..._0x1936ff['isGroup'] ? { 'participant': _0x1936ff[_0x88d44b(0xf4)][_0x88d44b(0x133)] } : {}
            });
            let {
                chat: _0x3c4a87,
                fromMe: _0x441ac8,
                id: _0xfbe3ae
            } = _0x1936ff[_0x88d44b(0xf4)];
            const _0x2a6ec1 = {
                'remoteJid': _0x1936ff[_0x88d44b(0xad)],
                'fromMe': ![],
                'id': _0x1936ff['quoted']['id'],
                'participant': _0x1936ff['quoted'][_0x88d44b(0x133)]
            };
            _0x1936ff[_0x88d44b(0xf4)][_0x88d44b(0x131)] = async () => await _0x53b30b[_0x88d44b(0x136)](_0x1936ff[_0x88d44b(0xad)], { 'delete': _0x2a6ec1 });
            _0x1936ff[_0x88d44b(0xc6)] = (_0x33108c, _0x5ea007 = !![], _0x24ce9f = {}) => _0x53b30b[_0x88d44b(0xc2)](_0x33108c, _0x193408, _0x5ea007, { 'contextInfo': { 'isForwarded': ![] } }, _0x24ce9f);
            _0x1936ff[_0x88d44b(0xf4)][_0x88d44b(0xf5)] = () => _0x53b30b['downloadMediaMessage'](_0x1936ff['quoted']);
        }
    }
    if (_0x1936ff[_0x88d44b(0xe5)][_0x88d44b(0x141)])
        _0x1936ff[_0x88d44b(0xf5)] = () => _0x53b30b['downloadMediaMessage'](_0x1936ff[_0x88d44b(0xe5)]);
    _0x1936ff['text'] = _0x1936ff['msg'][_0x88d44b(0xfa)] || _0x1936ff['msg'][_0x88d44b(0x150)] || _0x1936ff[_0x88d44b(0x129)]['conversation'] || _0x1936ff[_0x88d44b(0xe5)]['contentText'] || _0x1936ff[_0x88d44b(0xe5)][_0x88d44b(0x123)] || _0x1936ff['msg'][_0x88d44b(0xd1)] || '';
    _0x1936ff['copy'] = () => exports['smsg'](_0x53b30b, _0x275527[_0x88d44b(0x143)](_0x275527[_0x88d44b(0xfc)](m)));
    _0x1936ff[_0x88d44b(0xc2)] = (_0x1c8692 = _0x1936ff[_0x88d44b(0xad)], _0x3c5cf2 = ![], _0x2a3ae1 = {}) => _0x53b30b[_0x88d44b(0xc2)](_0x1c8692, _0x1936ff, _0x3c5cf2, _0x2a3ae1);
    _0x1936ff[_0x88d44b(0x14b)] = (_0x43c4a5, _0x51f4e5 = _0x1936ff[_0x88d44b(0xad)], _0xeb1aae = { 'mentions': [_0x1936ff['sender']] }) => _0x53b30b['sendMessage'](_0x51f4e5, {
        'sticker': _0x43c4a5,
        'contextInfo': { 'mentionedJid': _0xeb1aae[_0x88d44b(0xc0)] }
    }, { 'quoted': _0x1936ff });
    _0x1936ff['replyimg'] = (_0x5aa40f, _0x4f8a01, _0x47b9e5 = _0x1936ff[_0x88d44b(0xad)], _0x524c49 = { 'mentions': [_0x1936ff[_0x88d44b(0x133)]] }) => _0x53b30b[_0x88d44b(0x136)](_0x47b9e5, {
        'image': _0x5aa40f,
        'caption': _0x4f8a01,
        'contextInfo': { 'mentionedJid': _0x524c49[_0x88d44b(0xc0)] }
    }, { 'quoted': _0x1936ff });
    _0x1936ff[_0x88d44b(0xe1)] = (_0x2dfb8c, _0x2532b5, _0x220793 = _0x1936ff[_0x88d44b(0xad)], _0x2317ef = { 'mentions': [_0x1936ff[_0x88d44b(0x133)]] }) => _0x53b30b[_0x88d44b(0x136)](_0x220793, {
        'image': { 'url': _0x2dfb8c },
        'caption': _0x2532b5,
        'contextInfo': { 'mentionedJid': _0x2317ef[_0x88d44b(0xc0)] }
    }, { 'quoted': _0x1936ff });
    _0x1936ff[_0x88d44b(0x103)] = async (_0x2aa02c, _0x5e359c = {
        'packname': _0x88d44b(0xed),
        'author': _0x88d44b(0x137)
    }, _0x1f0e9f = _0x88d44b(0xfa)) => {
        const _0x2f631c = _0x88d44b;
        switch (_0x1f0e9f[_0x2f631c(0xc5)]()) {
        case 'text': {
                return await _0x53b30b[_0x2f631c(0x136)](_0x1936ff['chat'], { 'text': _0x2aa02c }, { 'quoted': _0x1936ff });
            }
            break;
        case 'image': {
                if (Buffer[_0x2f631c(0xee)](_0x2aa02c)) {
                    return await _0x53b30b['sendMessage'](_0x1936ff['chat'], {
                        'image': _0x2aa02c,
                        ..._0x5e359c
                    }, { ..._0x5e359c });
                } else if (isUrl(_0x2aa02c)) {
                    return _0x53b30b[_0x2f631c(0x136)](_0x1936ff[_0x2f631c(0xad)], {
                        'image': { 'url': _0x2aa02c },
                        ..._0x5e359c
                    }, { ..._0x5e359c });
                }
            }
            break;
        case _0x2f631c(0xe0): {
                if (Buffer[_0x2f631c(0xee)](_0x2aa02c)) {
                    return await _0x53b30b[_0x2f631c(0x136)](_0x1936ff[_0x2f631c(0xad)], {
                        'video': _0x2aa02c,
                        ..._0x5e359c
                    }, { ..._0x5e359c });
                } else if (isUrl(_0x2aa02c)) {
                    return await _0x53b30b['sendMessage'](_0x1936ff[_0x2f631c(0xad)], {
                        'video': { 'url': _0x2aa02c },
                        ..._0x5e359c
                    }, { ..._0x5e359c });
                }
            }
        case 'audio': {
                if (Buffer['isBuffer'](_0x2aa02c)) {
                    return await _0x53b30b[_0x2f631c(0x136)](_0x1936ff['chat'], {
                        'audio': _0x2aa02c,
                        ..._0x5e359c
                    }, { ..._0x5e359c });
                } else if (isUrl(_0x2aa02c)) {
                    return await _0x53b30b['sendMessage'](_0x1936ff['chat'], {
                        'audio': { 'url': _0x2aa02c },
                        ..._0x5e359c
                    }, { ..._0x5e359c });
                }
            }
            break;
        case 'template':
            let _0x5e0858 = await generateWAMessage(_0x1936ff['chat'], _0x2aa02c, _0x5e359c);
            let _0x3d572c = { 'viewOnceMessage': { 'message': { ..._0x5e0858[_0x2f631c(0x129)] } } };
            await _0x53b30b[_0x2f631c(0xb5)](_0x1936ff[_0x2f631c(0xad)], _0x3d572c, { 'messageId': _0x5e0858[_0x2f631c(0x14c)]['id'] });
            break;
        case 'sticker': {
                let {
                    data: _0x182aaf,
                    mime: _0x208801
                } = await _0x53b30b['getFile'](_0x2aa02c);
                if (_0x208801 == _0x2f631c(0x14f)) {
                    let _0x153ba7 = await writeExifWebp(_0x182aaf, _0x5e359c);
                    await _0x53b30b[_0x2f631c(0x136)](_0x1936ff['chat'], {
                        'sticker': { 'url': _0x153ba7 },
                        ..._0x5e359c
                    }, _0x5e359c);
                } else {
                    _0x208801 = await _0x208801[_0x2f631c(0xd6)]('/')[0x0];
                    if (_0x208801 === _0x2f631c(0xe0)) {
                        await _0x53b30b['sendImageAsSticker'](_0x1936ff['chat'], _0x2aa02c, _0x5e359c);
                    } else if (_0x208801 === _0x2f631c(0xd8)) {
                        await _0x53b30b[_0x2f631c(0xc9)](_0x1936ff['chat'], _0x2aa02c, _0x5e359c);
                    }
                }
            }
            break;
        }
    };
    _0x1936ff[_0x88d44b(0xf3)] = (_0x25a8ed, _0x26910c, _0x154d2a = _0x1936ff[_0x88d44b(0xad)], _0x3b541b = {
        'mentions': [_0x1936ff[_0x88d44b(0x133)]],
        'filename': Config[_0x88d44b(0x11f)],
        'mimetype': _0x26910c,
        'externalAdRepl': {
            'title': Config['ownername'],
            'body': '\x20',
            'thumbnailUrl': '',
            'thumbnail': log0,
            'mediaType': 0x1,
            'mediaUrl': '',
            'sourceUrl': gurl
        }
    }) => _0x53b30b[_0x88d44b(0x136)](_0x154d2a, {
        'document': _0x25a8ed,
        'mimetype': _0x3b541b[_0x88d44b(0x116)],
        'fileName': _0x3b541b[_0x88d44b(0xbc)],
        'contextInfo': {
            'externalAdReply': _0x3b541b[_0x88d44b(0x10c)],
            'mentionedJid': _0x3b541b[_0x88d44b(0xc0)]
        }
    }, { 'quoted': _0x1936ff });
    _0x1936ff[_0x88d44b(0x102)] = (_0x105105, _0x32bb0a, _0x201949) => {
        const _0x353c2c = _0x88d44b;
        var _0x521143 = _0x353c2c(0xd3) + 'VERSION:3.0\x0a' + 'FN:' + _0x105105 + '\x0a' + _0x353c2c(0x117) + _0x32bb0a + ';\x0a' + _0x353c2c(0xde) + _0x201949 + ':+' + _0x201949 + '\x0a' + _0x353c2c(0xbe);
        _0x53b30b[_0x353c2c(0x136)](_0x1936ff[_0x353c2c(0xad)], {
            'contacts': {
                'displayName': _0x105105,
                'contacts': [{ 'vcard': _0x521143 }]
            }
        }, { 'quoted': _0x1936ff });
    };
    _0x1936ff[_0x88d44b(0x135)] = _0x356c9d => _0x53b30b['sendMessage'](_0x1936ff['chat'], {
        'react': {
            'text': _0x356c9d,
            'key': _0x1936ff['key']
        }
    });
    return _0x1936ff;
};
let file = require['resolve'](__filename);
fs[_0x4615ea(0x11d)](file, () => {
    const _0x13c6a5 = _0x4615ea;
    fs[_0x13c6a5(0x10a)](file);
    console['log'](_0x13c6a5(0xd5) + __filename);
    delete require[_0x13c6a5(0xef)][file];
    require(file);
});