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


const _0x1c5921 = _0x3e62;
(function (_0x3f49b4, _0x399a5a) {
    const _0x5715f6 = _0x3e62;
    const _0x1a6bb2 = _0x3f49b4();
    while (!![]) {
        try {
            const _0x59dca1 = parseInt(_0x5715f6(0x1c2)) / 0x1 * (-parseInt(_0x5715f6(0x1b1)) / 0x2) + parseInt(_0x5715f6(0x1c0)) / 0x3 * (-parseInt(_0x5715f6(0x1bf)) / 0x4) + -parseInt(_0x5715f6(0x1bb)) / 0x5 + parseInt(_0x5715f6(0x1b2)) / 0x6 + -parseInt(_0x5715f6(0x1c1)) / 0x7 * (-parseInt(_0x5715f6(0x1b4)) / 0x8) + -parseInt(_0x5715f6(0x1bc)) / 0x9 + parseInt(_0x5715f6(0x1b3)) / 0xa;
            if (_0x59dca1 === _0x399a5a) {
                break;
            } else {
                _0x1a6bb2['push'](_0x1a6bb2['shift']());
            }
        } catch (_0x57862a) {
            _0x1a6bb2['push'](_0x1a6bb2['shift']());
        }
    }
}(_0x4a65, 0x564cc));
const {cmd} = require(_0x1c5921(0x1b6));
const PastebinAPI = require(_0x1c5921(0x1ba));
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL');
function _0x3e62(_0x4abbcb, _0x565985) {
    const _0x4a65db = _0x4a65();
    _0x3e62 = function (_0x3e6289, _0x537711) {
        _0x3e6289 = _0x3e6289 - 0x1af;
        let _0x2ea5d3 = _0x4a65db[_0x3e6289];
        return _0x2ea5d3;
    };
    return _0x3e62(_0x4abbcb, _0x565985);
}
function _0x4a65() {
    const _0x3fa3b4 = [
        '1576FDdXHi',
        '3603cfaSeQ',
        '28ecLNEk',
        '58102KoJGRJ',
        'To\x20check\x20ping',
        'text',
        '12ImDCFZ',
        '3246768ZLCQsh',
        '13236080vWOuxO',
        '145680HlAPNr',
        'reply',
        '../lib',
        'createPaste',
        '🩵\x20𝙶𝙴𝙽𝙴𝚁𝙰𝙻\x20𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂\x20🩵',
        'Queen\x20Nilu',
        'pastebin-js',
        '2552620wsbXbs',
        '2265858pSxesS',
        'Please\x20quote\x20any\x20text\x20to\x20get\x20link.',
        'pastebin'
    ];
    _0x4a65 = function () {
        return _0x3fa3b4;
    };
    return _0x4a65();
}
cmd({
    'pattern': _0x1c5921(0x1be),
    'desc': _0x1c5921(0x1af),
    'category': _0x1c5921(0x1b8),
    'filename': __filename
}, async (_0x21412e, _0x129b98) => {
    const _0x4abb8f = _0x1c5921;
    if (!_0x129b98['quoted'])
        return _0x129b98[_0x4abb8f(0x1b5)](_0x4abb8f(0x1bd));
    let _0x246d8c = await pastebin[_0x4abb8f(0x1b7)](_0x129b98['quoted'][_0x4abb8f(0x1b0)], _0x4abb8f(0x1b9));
    _0x129b98[_0x4abb8f(0x1b5)]('_Here\x20is\x20your\x20link._\x0a' + _0x246d8c);
});