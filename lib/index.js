const _0x421f75 = _0x2ca7;
(function (_0x983315, _0x3e76e0) {
    const _0x125ccc = _0x2ca7;
    const _0x3c627a = _0x983315();
    while (!![]) {
        try {
            const _0x1048df = -parseInt(_0x125ccc(0x98)) / 0x1 * (parseInt(_0x125ccc(0x85)) / 0x2) + parseInt(_0x125ccc(0xb1)) / 0x3 * (parseInt(_0x125ccc(0xa3)) / 0x4) + -parseInt(_0x125ccc(0x9d)) / 0x5 * (parseInt(_0x125ccc(0xa0)) / 0x6) + -parseInt(_0x125ccc(0x84)) / 0x7 + parseInt(_0x125ccc(0x8d)) / 0x8 * (-parseInt(_0x125ccc(0x81)) / 0x9) + parseInt(_0x125ccc(0xa2)) / 0xa * (-parseInt(_0x125ccc(0xaf)) / 0xb) + -parseInt(_0x125ccc(0x96)) / 0xc * (-parseInt(_0x125ccc(0x90)) / 0xd);
            if (_0x1048df === _0x3e76e0) {
                break;
            } else {
                _0x3c627a['push'](_0x3c627a['shift']());
            }
        } catch (_0x30992e) {
            _0x3c627a['push'](_0x3c627a['shift']());
        }
    }
}(_0x64b4, 0xf07f4));
function _0x64b4() {
    const _0x51f09c = [
        'from',
        'load',
        'fluent-ffmpeg',
        '-vf',
        '72VfdwOT',
        '.webp',
        '28MuzvPD',
        'stringify',
        'exif',
        'exports',
        '-an',
        '4885GReKEm',
        'categories',
        '-vcodec',
        '10038bGjLgw',
        'toFormat',
        '1607380xhnfdt',
        '4420abApeX',
        'scale=\x27min(320,iw)\x27:min\x27(320,ih)\x27:force_original_aspect_ratio=decrease,fps=15,\x20pad=320:320:-1:-1:color=white@0.0,\x20split\x20[a][b];\x20[a]\x20palettegen=reserve_transparent=on:transparency_color=ffffff\x20[p];\x20[b][p]\x20paletteuse',
        'utf-8',
        'randomBytes',
        '-loop',
        'writeUIntLE',
        'error',
        'packname',
        'path',
        'Image',
        '.jpg',
        'save',
        '11geTjOy',
        'join',
        '4581zJbUxR',
        'unlinkSync',
        'webp',
        'default',
        '9459LicVWD',
        'readFileSync',
        '-vsync',
        '6827100gIWjUH',
        '88448UnQqha',
        'length',
        '-ss',
        'author',
        'end',
        'writeFileSync',
        'concat',
        'readUIntLE',
        '11744OAARmd',
        'toString',
        'addOutputOptions',
        '10507120QynKyu',
        'libwebp'
    ];
    _0x64b4 = function () {
        return _0x51f09c;
    };
    return _0x64b4();
}
const fs = require('fs');
const {tmpdir} = require('os');
const Crypto = require('crypto');
const ff = require(_0x421f75(0x94));
const webp = require('node-webpmux');
const path = require(_0x421f75(0xab));
async function imageToWebp(_0x174889) {
    const _0x60f5f5 = _0x421f75;
    const _0x288dbf = path[_0x60f5f5(0xb0)](tmpdir(), Crypto[_0x60f5f5(0xa6)](0x6)[_0x60f5f5(0x8c)](0x0, 0x6)[_0x60f5f5(0x8e)](0x24) + _0x60f5f5(0x97));
    const _0x525bfc = path[_0x60f5f5(0xb0)](tmpdir(), Crypto[_0x60f5f5(0xa6)](0x6)[_0x60f5f5(0x8c)](0x0, 0x6)[_0x60f5f5(0x8e)](0x24) + _0x60f5f5(0xad));
    fs[_0x60f5f5(0x8a)](_0x525bfc, _0x174889);
    await new Promise((_0x654a3e, _0x66fa42) => {
        const _0x51f6a9 = _0x60f5f5;
        ff(_0x525bfc)['on'](_0x51f6a9(0xa9), _0x66fa42)['on']('end', () => _0x654a3e(!![]))[_0x51f6a9(0x8f)]([
            _0x51f6a9(0x9f),
            _0x51f6a9(0x91),
            '-vf',
            'scale=\x27min(320,iw)\x27:min\x27(320,ih)\x27:force_original_aspect_ratio=decrease,fps=15,\x20pad=320:320:-1:-1:color=white@0.0,\x20split\x20[a][b];\x20[a]\x20palettegen=reserve_transparent=on:transparency_color=ffffff\x20[p];\x20[b][p]\x20paletteuse'
        ])[_0x51f6a9(0xa1)]('webp')[_0x51f6a9(0xae)](_0x288dbf);
    });
    const _0x3b7aa3 = fs[_0x60f5f5(0x82)](_0x288dbf);
    fs[_0x60f5f5(0xb2)](_0x288dbf);
    fs[_0x60f5f5(0xb2)](_0x525bfc);
    return _0x3b7aa3;
}
async function videoToWebp(_0x3999f2) {
    const _0x3008da = _0x421f75;
    const _0x2ee28f = path[_0x3008da(0xb0)](tmpdir(), Crypto['randomBytes'](0x6)[_0x3008da(0x8c)](0x0, 0x6)[_0x3008da(0x8e)](0x24) + _0x3008da(0x97));
    const _0x3a4f70 = path['join'](tmpdir(), Crypto[_0x3008da(0xa6)](0x6)[_0x3008da(0x8c)](0x0, 0x6)[_0x3008da(0x8e)](0x24) + '.mp4');
    fs[_0x3008da(0x8a)](_0x3a4f70, _0x3999f2);
    await new Promise((_0x1bf42c, _0x2d02d2) => {
        const _0x58f00c = _0x3008da;
        ff(_0x3a4f70)['on']('error', _0x2d02d2)['on'](_0x58f00c(0x89), () => _0x1bf42c(!![]))['addOutputOptions']([
            _0x58f00c(0x9f),
            _0x58f00c(0x91),
            _0x58f00c(0x95),
            _0x58f00c(0xa4),
            _0x58f00c(0xa7),
            '0',
            _0x58f00c(0x87),
            '00:00:00',
            '-t',
            '00:00:05',
            '-preset',
            _0x58f00c(0xb4),
            _0x58f00c(0x9c),
            _0x58f00c(0x83),
            '0'
        ])[_0x58f00c(0xa1)](_0x58f00c(0xb3))['save'](_0x2ee28f);
    });
    const _0x533984 = fs['readFileSync'](_0x2ee28f);
    fs[_0x3008da(0xb2)](_0x2ee28f);
    fs[_0x3008da(0xb2)](_0x3a4f70);
    return _0x533984;
}
async function writeExifImg(_0x322663, _0x14dfa6) {
    const _0x583c92 = _0x421f75;
    let _0xe8cd2b = await imageToWebp(_0x322663);
    const _0x35e73e = path[_0x583c92(0xb0)](tmpdir(), Crypto['randomBytes'](0x6)[_0x583c92(0x8c)](0x0, 0x6)[_0x583c92(0x8e)](0x24) + _0x583c92(0x97));
    const _0x1dc563 = path[_0x583c92(0xb0)](tmpdir(), Crypto[_0x583c92(0xa6)](0x6)[_0x583c92(0x8c)](0x0, 0x6)['toString'](0x24) + _0x583c92(0x97));
    fs[_0x583c92(0x8a)](_0x35e73e, _0xe8cd2b);
    if (_0x14dfa6[_0x583c92(0xaa)] || _0x14dfa6[_0x583c92(0x88)]) {
        const _0x3070f8 = new webp[(_0x583c92(0xac))]();
        const _0xeeca96 = {
            'sticker-pack-id': 'Secktor-SamPandey001',
            'sticker-pack-name': _0x14dfa6['packname'],
            'sticker-pack-publisher': _0x14dfa6['author'],
            'emojis': _0x14dfa6[_0x583c92(0x9e)] ? _0x14dfa6[_0x583c92(0x9e)] : ['']
        };
        const _0x33633c = Buffer[_0x583c92(0x92)]([
            0x49,
            0x49,
            0x2a,
            0x0,
            0x8,
            0x0,
            0x0,
            0x0,
            0x1,
            0x0,
            0x41,
            0x57,
            0x7,
            0x0,
            0x0,
            0x0,
            0x0,
            0x0,
            0x16,
            0x0,
            0x0,
            0x0
        ]);
        const _0x21be75 = Buffer['from'](JSON['stringify'](_0xeeca96), _0x583c92(0xa5));
        const _0x17d003 = Buffer[_0x583c92(0x8b)]([
            _0x33633c,
            _0x21be75
        ]);
        _0x17d003[_0x583c92(0xa8)](_0x21be75['length'], 0xe, 0x4);
        await _0x3070f8[_0x583c92(0x93)](_0x35e73e);
        fs['unlinkSync'](_0x35e73e);
        _0x3070f8[_0x583c92(0x9a)] = _0x17d003;
        await _0x3070f8[_0x583c92(0xae)](_0x1dc563);
        return _0x1dc563;
    }
}
async function writeExifVid(_0x5503b7, _0x407464) {
    const _0x233199 = _0x421f75;
    let _0x580dfb = await videoToWebp(_0x5503b7);
    const _0x3ca922 = path['join'](tmpdir(), Crypto[_0x233199(0xa6)](0x6)[_0x233199(0x8c)](0x0, 0x6)[_0x233199(0x8e)](0x24) + _0x233199(0x97));
    const _0x2cfd0e = path[_0x233199(0xb0)](tmpdir(), Crypto[_0x233199(0xa6)](0x6)[_0x233199(0x8c)](0x0, 0x6)[_0x233199(0x8e)](0x24) + _0x233199(0x97));
    fs[_0x233199(0x8a)](_0x3ca922, _0x580dfb);
    if (_0x407464[_0x233199(0xaa)] || _0x407464[_0x233199(0x88)]) {
        const _0x341219 = new webp['Image']();
        const _0x4b6219 = {
            'sticker-pack-id': 'Secktor-SamPandey001',
            'sticker-pack-name': _0x407464['packname'],
            'sticker-pack-publisher': _0x407464[_0x233199(0x88)],
            'emojis': _0x407464[_0x233199(0x9e)] ? _0x407464['categories'] : ['']
        };
        const _0x5a0c20 = Buffer[_0x233199(0x92)]([
            0x49,
            0x49,
            0x2a,
            0x0,
            0x8,
            0x0,
            0x0,
            0x0,
            0x1,
            0x0,
            0x41,
            0x57,
            0x7,
            0x0,
            0x0,
            0x0,
            0x0,
            0x0,
            0x16,
            0x0,
            0x0,
            0x0
        ]);
        const _0x2f72f7 = Buffer[_0x233199(0x92)](JSON['stringify'](_0x4b6219), _0x233199(0xa5));
        const _0x3be0eb = Buffer['concat']([
            _0x5a0c20,
            _0x2f72f7
        ]);
        _0x3be0eb[_0x233199(0xa8)](_0x2f72f7[_0x233199(0x86)], 0xe, 0x4);
        await _0x341219[_0x233199(0x93)](_0x3ca922);
        fs[_0x233199(0xb2)](_0x3ca922);
        _0x341219[_0x233199(0x9a)] = _0x3be0eb;
        await _0x341219['save'](_0x2cfd0e);
        return _0x2cfd0e;
    }
}
function _0x2ca7(_0x4fc7ff, _0x2d752b) {
    const _0x64b4ef = _0x64b4();
    _0x2ca7 = function (_0x2ca7c7, _0x58155e) {
        _0x2ca7c7 = _0x2ca7c7 - 0x81;
        let _0x3276bf = _0x64b4ef[_0x2ca7c7];
        return _0x3276bf;
    };
    return _0x2ca7(_0x4fc7ff, _0x2d752b);
}
async function writeExifWebp(_0x4f8bde, _0xf1556e) {
    const _0x297106 = _0x421f75;
    const _0x197f30 = path[_0x297106(0xb0)](tmpdir(), Crypto['randomBytes'](0x6)['readUIntLE'](0x0, 0x6)[_0x297106(0x8e)](0x24) + '.webp');
    const _0x4df94c = path[_0x297106(0xb0)](tmpdir(), Crypto['randomBytes'](0x6)['readUIntLE'](0x0, 0x6)['toString'](0x24) + _0x297106(0x97));
    fs['writeFileSync'](_0x197f30, _0x4f8bde);
    if (_0xf1556e[_0x297106(0xaa)] || _0xf1556e[_0x297106(0x88)]) {
        const _0x2f770d = new webp['Image']();
        const _0x3e01b9 = {
            'sticker-pack-id': 'Secktor-SamPandey001',
            'sticker-pack-name': _0xf1556e[_0x297106(0xaa)],
            'sticker-pack-publisher': _0xf1556e[_0x297106(0x88)],
            'emojis': _0xf1556e[_0x297106(0x9e)] ? _0xf1556e[_0x297106(0x9e)] : ['']
        };
        const _0x223da1 = await Buffer[_0x297106(0x92)]([
            0x49,
            0x49,
            0x2a,
            0x0,
            0x8,
            0x0,
            0x0,
            0x0,
            0x1,
            0x0,
            0x41,
            0x57,
            0x7,
            0x0,
            0x0,
            0x0,
            0x0,
            0x0,
            0x16,
            0x0,
            0x0,
            0x0
        ]);
        const _0x1f260b = await Buffer[_0x297106(0x92)](JSON[_0x297106(0x99)](_0x3e01b9), _0x297106(0xa5));
        const _0xcd316b = await Buffer[_0x297106(0x8b)]([
            _0x223da1,
            _0x1f260b
        ]);
        await _0xcd316b[_0x297106(0xa8)](_0x1f260b[_0x297106(0x86)], 0xe, 0x4);
        await _0x2f770d[_0x297106(0x93)](_0x197f30);
        fs['unlinkSync'](_0x197f30);
        _0x2f770d[_0x297106(0x9a)] = _0xcd316b;
        await _0x2f770d[_0x297106(0xae)](_0x4df94c);
        return _0x4df94c;
    }
}
module[_0x421f75(0x9b)] = {
    'imageToWebp': imageToWebp,
    'videoToWebp': videoToWebp,
    'writeExifImg': writeExifImg,
    'writeExifVid': writeExifVid,
    'writeExifWebp': writeExifWebp
};