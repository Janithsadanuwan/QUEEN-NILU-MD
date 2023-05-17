function _0x4a52() {
    const _0x64dc37 = [
        '2219553vlAcgZ',
        '11rMRrGq',
        'Shows\x20repo\x27s\x20refreshed\x20commits.',
        'child_process',
        '.\x20You\x20have\x20latest\x20version\x20installed.',
        'sendMessage',
        'Hey\x20',
        '2613IEUnpj',
        '5787790jOnzzw',
        '9129312ivAdkw',
        '8430352XPKqDS',
        '774BAenoU',
        '8SygEPW',
        '63012CzTcjP',
        '🐼\x20𝙾𝚆𝙽𝙴𝚁\x20𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂\x20🐼',
        'syncgit',
        '5691628UvcAVd',
        '5TjUWrN',
        '3847DJYTxz',
        '3uUFYKL',
        'total',
        'sync',
        'reply',
        '../lib',
        'update'
    ];
    _0x4a52 = function () {
        return _0x64dc37;
    };
    return _0x4a52();
}
function _0x6f67(_0x2ee62f, _0x590a0a) {
    const _0x4a5235 = _0x4a52();
    _0x6f67 = function (_0x6f67e7, _0x12e35b) {
        _0x6f67e7 = _0x6f67e7 - 0xf3;
        let _0x4da4e7 = _0x4a5235[_0x6f67e7];
        return _0x4da4e7;
    };
    return _0x6f67(_0x2ee62f, _0x590a0a);
}
const _0x409e13 = _0x6f67;
(function (_0x2e090d, _0x205331) {
    const _0x3d79b2 = _0x6f67;
    const _0x3d70db = _0x2e090d();
    while (!![]) {
        try {
            const _0x1fea60 = -parseInt(_0x3d79b2(0x101)) / 0x1 * (parseInt(_0x3d79b2(0xfa)) / 0x2) + -parseInt(_0x3d79b2(0x102)) / 0x3 * (-parseInt(_0x3d79b2(0xff)) / 0x4) + -parseInt(_0x3d79b2(0x100)) / 0x5 * (-parseInt(_0x3d79b2(0xf8)) / 0x6) + parseInt(_0x3d79b2(0xf9)) / 0x7 + parseInt(_0x3d79b2(0xfb)) / 0x8 * (-parseInt(_0x3d79b2(0x108)) / 0x9) + -parseInt(_0x3d79b2(0xf7)) / 0xa * (parseInt(_0x3d79b2(0x109)) / 0xb) + parseInt(_0x3d79b2(0xfc)) / 0xc * (-parseInt(_0x3d79b2(0xf6)) / 0xd);
            if (_0x1fea60 === _0x205331) {
                break;
            } else {
                _0x3d70db['push'](_0x3d70db['shift']());
            }
        } catch (_0x1c43ad) {
            _0x3d70db['push'](_0x3d70db['shift']());
        }
    }
}(_0x4a52, 0xbe397));
const DB = require('../lib/scraper');
const {execSync} = require(_0x409e13(0x10b));
const {tlang, Config, prefix, cmd} = require(_0x409e13(0x106));
cmd({
    'pattern': _0x409e13(0x107),
    'desc': _0x409e13(0x10a),
    'category': _0x409e13(0xfd),
    'filename': __filename
}, async (_0x162443, _0x3c2983, _0x486eac, {isCreator: _0x7bd155}) => {
    const _0x20d894 = _0x409e13;
    if (!_0x7bd155)
        return _0x3c2983[_0x20d894(0x105)]('This\x20command\x20is\x20only\x20for\x20my\x20owner');
    let _0x26478c = await DB[_0x20d894(0xfe)]();
    if (_0x26478c[_0x20d894(0x103)] === 0x0) {
        _0x3c2983['reply'](_0x20d894(0xf5) + _0x3c2983['pushName'] + _0x20d894(0xf3));
    } else {
        let _0x2059d4 = await DB[_0x20d894(0x104)]();
        let _0x5e43ac = {
            'text': _0x2059d4,
            'footer': 'UPDATER',
            'headerType': 0x4
        };
        return await _0x162443[_0x20d894(0xf4)](_0x3c2983['chat'], _0x5e43ac);
    }
});