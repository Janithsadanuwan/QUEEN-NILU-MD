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
const _0x122e8c = _0x473d;
(function (_0x56b129, _0x46e422) {
    const _0x1d16be = _0x473d;
    const _0x3d517a = _0x56b129();
    while (!![]) {
        try {
            const _0x38682d = -parseInt(_0x1d16be(0xdd)) / 0x1 * (parseInt(_0x1d16be(0xed)) / 0x2) + -parseInt(_0x1d16be(0xfa)) / 0x3 + -parseInt(_0x1d16be(0xd5)) / 0x4 + parseInt(_0x1d16be(0xec)) / 0x5 + parseInt(_0x1d16be(0xf4)) / 0x6 + -parseInt(_0x1d16be(0x101)) / 0x7 + parseInt(_0x1d16be(0xe3)) / 0x8 * (parseInt(_0x1d16be(0xdc)) / 0x9);
            if (_0x38682d === _0x46e422) {
                break;
            } else {
                _0x3d517a['push'](_0x3d517a['shift']());
            }
        } catch (_0x1b5ccd) {
            _0x3d517a['push'](_0x3d517a['shift']());
        }
    }
}(_0x2187, 0x5e9e0));
const ffmpeg = require(_0x122e8c(0xf3));
const {randomBytes} = require(_0x122e8c(0xef));
function _0x2187() {
    const _0x534844 = [
        'exit',
        'mp4',
        'buffer',
        'isBuffer',
        'promises',
        'readFileSync',
        '4681411vwCxcQ',
        'audioCodec',
        'audioChannels',
        'mp3',
        'binary',
        '.gif',
        'toBuffer',
        'Input\x20is\x20not\x20a\x20Buffer',
        'resize',
        '.mp3',
        'error',
        'toString',
        'existsSync',
        '824188vxwMRz',
        '.mp4',
        'then',
        'outputOptions',
        'unlinkSync',
        'file-type',
        'sharp',
        '7118775XonbXr',
        '179UPSJUj',
        'noAudio',
        'path',
        'exports',
        'child_process',
        'audioFilter',
        '16lTphJr',
        'ext',
        'audioQuality',
        'save',
        'end',
        '-movflags\x20+faststart',
        'log',
        'audioFrequency',
        'audioBitrate',
        '725415VQKRMV',
        '5372KIIhXh',
        './file_',
        'crypto',
        'hex',
        '-c:v\x20libx264',
        'libmp3lame',
        'fluent-ffmpeg',
        '2369874hprQAe',
        '-filter:v\x20crop=\x27floor(in_w/2)*2:floor(in_h/2)*2\x27',
        'toFormat',
        '.webp',
        'writeFileSync',
        'readFile',
        '1136538VfLHzB'
    ];
    _0x2187 = function () {
        return _0x534844;
    };
    return _0x2187();
}
const fs = require('fs');
const {isUrl} = require('.');
const {getHttpStream, toBuffer} = require('@adiwajshing/baileys');
const sharp = require(_0x122e8c(0xdb));
const {spawn} = require(_0x122e8c(0xe1));
const path = require('path');
const {fromBuffer} = require(_0x122e8c(0xda));
async function toGif(_0x4ad53b) {
    const _0x20ac41 = _0x122e8c;
    try {
        const _0x2049b8 = './' + randomBytes(0x3)[_0x20ac41(0xd3)](_0x20ac41(0xf0)) + _0x20ac41(0xf7);
        const _0x492d92 = './' + randomBytes(0x3)[_0x20ac41(0xd3)](_0x20ac41(0xf0)) + _0x20ac41(0xcd);
        fs[_0x20ac41(0xf8)](_0x2049b8, _0x4ad53b[_0x20ac41(0xd3)](_0x20ac41(0xcc)), _0x20ac41(0xcc));
        const _0x1c2d82 = await new Promise(_0x522b89 => {
            const _0x3465b2 = _0x20ac41;
            spawn('convert', [
                _0x2049b8,
                _0x492d92
            ])['on'](_0x3465b2(0xd2), _0x4efb53 => {
                throw _0x4efb53;
            })['on'](_0x3465b2(0xfb), () => _0x522b89(_0x492d92));
        });
        let _0x3da117 = fs[_0x20ac41(0x100)](_0x1c2d82);
        try {
            fs[_0x20ac41(0xd9)](_0x2049b8);
            fs[_0x20ac41(0xd9)](_0x492d92);
        } catch (_0x535ccc) {
            console['log'](_0x535ccc);
        }
        return _0x3da117;
    } catch (_0x326393) {
        console['log'](_0x326393);
    }
}
async function toMp4(_0x56927b) {
    const _0x16c5b4 = _0x122e8c;
    try {
        let _0x54c31a = './' + randomBytes(0x3)['toString'](_0x16c5b4(0xf0)) + '.gif';
        const _0x46359b = fs[_0x16c5b4(0xd4)](_0x56927b) ? _0x56927b : save(_0x56927b, _0x54c31a);
        const _0x33e902 = './' + randomBytes(0x3)['toString']('hex') + _0x16c5b4(0xd6);
        const _0x17c340 = await new Promise(_0x1778fe => {
            const _0x24e087 = _0x16c5b4;
            ffmpeg(_0x46359b)[_0x24e087(0xd8)]([
                '-pix_fmt\x20yuv420p',
                _0x24e087(0xf1),
                _0x24e087(0xe8),
                _0x24e087(0xf5)
            ])['toFormat'](_0x24e087(0xfc))[_0x24e087(0xde)]()[_0x24e087(0xe6)](_0x33e902)['on'](_0x24e087(0xfb), () => _0x1778fe(_0x33e902));
        });
        let _0x73a0e9 = await fs[_0x16c5b4(0xff)][_0x16c5b4(0xf9)](_0x17c340);
        return _0x73a0e9;
    } catch (_0x72ddd1) {
        console[_0x16c5b4(0xe9)](_0x72ddd1);
    }
}
function _0x473d(_0x489130, _0x2c9367) {
    const _0x2187bb = _0x2187();
    _0x473d = function (_0x473d47, _0x253f61) {
        _0x473d47 = _0x473d47 - 0xcb;
        let _0x2bcebf = _0x2187bb[_0x473d47];
        return _0x2bcebf;
    };
    return _0x473d(_0x489130, _0x2c9367);
}
async function toAudio(_0x3f6f92) {
    return new Promise(async (_0x61da23, _0x31bd1d) => {
        const _0x173744 = _0x473d;
        try {
            const _0x3e510a = await toBuffer(await getHttpStream(_0x3f6f92));
            const _0x469466 = './video_' + randomBytes(0x3)[_0x173744(0xd3)](_0x173744(0xf0)) + '.' + (await fromBuffer(_0x3e510a))[_0x173744(0xe4)];
            const _0x3c1b98 = Buffer[_0x173744(0xfe)](_0x3f6f92) ? save(_0x3f6f92, _0x469466) : fs['existsSync'](_0x3f6f92) ? _0x3f6f92 : isUrl(_0x3f6f92) ? save(_0x3e510a, _0x469466) : _0x3f6f92;
            const _0x190cff = './' + randomBytes(0x3)[_0x173744(0xd3)](_0x173744(0xf0)) + _0x173744(0xd1);
            const _0x1b97f6 = await new Promise(_0x182d0d => {
                const _0x34d213 = _0x173744;
                ffmpeg(_0x3c1b98)['audioFrequency'](0xac44)[_0x34d213(0x103)](0x2)[_0x34d213(0xeb)]('128k')[_0x34d213(0x102)](_0x34d213(0xf2))[_0x34d213(0xe5)](0x5)[_0x34d213(0xf6)](_0x34d213(0xcb))['save'](_0x190cff)['on']('end', () => _0x182d0d(_0x190cff));
            });
            _0x61da23(_0x1b97f6);
        } catch (_0x471ea5) {
            console['log'](_0x471ea5);
        }
    });
}
const EightD = async _0xe71b15 => {
    const _0x2afdf1 = _0x122e8c;
    const _0x458328 = './' + randomBytes(0x3)[_0x2afdf1(0xd3)]('hex') + _0x2afdf1(0xd1);
    _0xe71b15 = Buffer[_0x2afdf1(0xfe)](_0xe71b15) ? save(_0xe71b15, _0x458328) : _0xe71b15;
    const _0x29b68a = './' + randomBytes(0x3)['toString'](_0x2afdf1(0xf0)) + '.mp3';
    const _0x2e0a85 = await new Promise(_0x335d35 => {
        const _0x42f880 = _0x2afdf1;
        ffmpeg(_0xe71b15)[_0x42f880(0xe2)](['apulsator=hz=0.125'])[_0x42f880(0xea)](0xac44)[_0x42f880(0x103)](0x2)[_0x42f880(0xeb)]('128k')[_0x42f880(0x102)](_0x42f880(0xf2))[_0x42f880(0xe5)](0x5)['toFormat'](_0x42f880(0xcb))['save'](_0x29b68a)['on'](_0x42f880(0xe7), () => _0x335d35(_0x29b68a));
    });
    return _0x2e0a85;
};
function save(_0x231d58, _0x421a08) {
    const _0x5a50ea = _0x122e8c;
    try {
        fs[_0x5a50ea(0xf8)](_0x421a08, _0x231d58['toString']('binary'), _0x5a50ea(0xcc));
        return _0x421a08;
    } catch (_0x4a7e4c) {
        console['log'](_0x4a7e4c);
    }
}
const resizeImage = (_0x4eb9ae, _0x1b7a2b, _0x222a1d) => {
    const _0x23dd52 = _0x122e8c;
    if (!Buffer[_0x23dd52(0xfe)](_0x4eb9ae))
        throw _0x23dd52(0xcf);
    return new Promise(async _0x40b3ec => {
        const _0x5d65af = _0x23dd52;
        sharp(_0x4eb9ae)[_0x5d65af(0xd0)](_0x1b7a2b, _0x222a1d, { 'fit': 'contain' })[_0x5d65af(0xce)]()[_0x5d65af(0xd7)](_0x40b3ec);
    });
};
const _parseInput = async (_0x1e9f6f, _0x4cb7ae, _0x5e1125 = 'path') => {
    const _0x596f71 = _0x122e8c;
    const _0x5a092e = await toBuffer(await getHttpStream(_0x1e9f6f));
    const _0x56801b = _0x596f71(0xee) + randomBytes(0x3)[_0x596f71(0xd3)]('hex') + '.' + (_0x4cb7ae ? _0x4cb7ae : (await fromBuffer(_0x5a092e))[_0x596f71(0xe4)]);
    const _0x38f3aa = Buffer[_0x596f71(0xfe)](_0x1e9f6f) ? save(_0x1e9f6f, _0x56801b) : fs[_0x596f71(0xd4)](_0x1e9f6f) ? _0x1e9f6f : isUrl(_0x1e9f6f) ? save(_0x5a092e, _0x56801b) : _0x1e9f6f;
    if (_0x5e1125 == _0x596f71(0xdf)) {
        return _0x38f3aa;
    } else if (_0x5e1125 == _0x596f71(0xfd)) {
        const _0x20764e = await fs[_0x596f71(0xff)][_0x596f71(0xf9)](_0x38f3aa);
        try {
            await fs[_0x596f71(0xff)]['unlink'](_0x38f3aa);
        } catch (_0x4f0fdb) {
            throw _0x4f0fdb;
        }
        return _0x20764e;
    }
};
module[_0x122e8c(0xe0)] = {
    'toGif': toGif,
    'toMp4': toMp4,
    'toAudio': toAudio,
    'EightD': EightD,
    '_parseInput': _parseInput,
    'resizeImage': resizeImage
};