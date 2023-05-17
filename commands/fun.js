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


const _0x55756a = _0x393f;
(function (_0x5cf43a, _0x1b8a20) {
    const _0x58340d = _0x393f;
    const _0x1668e8 = _0x5cf43a();
    while (!![]) {
        try {
            const _0x7b265 = parseInt(_0x58340d(0x115)) / 0x1 + -parseInt(_0x58340d(0xff)) / 0x2 + parseInt(_0x58340d(0x100)) / 0x3 * (parseInt(_0x58340d(0x105)) / 0x4) + parseInt(_0x58340d(0x101)) / 0x5 + -parseInt(_0x58340d(0x10e)) / 0x6 + parseInt(_0x58340d(0x117)) / 0x7 * (-parseInt(_0x58340d(0x10c)) / 0x8) + parseInt(_0x58340d(0x109)) / 0x9;
            if (_0x7b265 === _0x1b8a20) {
                break;
            } else {
                _0x1668e8['push'](_0x1668e8['shift']());
            }
        } catch (_0x58cc57) {
            _0x1668e8['push'](_0x1668e8['shift']());
        }
    }
}(_0x50ac, 0x738e8));
const {dare, truth, random_question} = require(_0x55756a(0x112));
const axios = require('axios');
function _0x50ac() {
    const _0x1e83c2 = [
        'fact',
        'body',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Definition:\x20',
        'list',
        '1422472XWBVMJ',
        '129JHvotN',
        '2191780GDJQpZ',
        'http://api.urbandictionary.com/v0/define?term=',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Example:\x20',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Word:\x20',
        '68736HCguUQ',
        'truth',
        'definition',
        'reply',
        '11795481ZwhemG',
        '*Fact:*\x20',
        'replace',
        '50384DMLDPj',
        'question',
        '5194536SQEypJ',
        '\x0a╔════◇\x0a║\x20*🎗️Content:*\x20',
        'define',
        'truth\x20and\x20dare(dare\x20game.).',
        '../lib/truth-dare.js',
        'https://favqs.com/api/qotd',
        'urban\x20dictionary.',
        '230023Obppxg',
        '🤹‍♂️\x20𝙵𝚄𝙽\x20𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂\x20🤹‍♂️',
        '742ikCGBF',
        '\x0a║\x20\x20\x20\x20\x0a╚════════════╝\x20',
        'quotes',
        'quote',
        'data',
        'Sends\x20quotes\x20in\x20chat.',
        'No\x20result\x20for\x20',
        'get',
        'example',
        'Random\x20Question.'
    ];
    _0x50ac = function () {
        return _0x1e83c2;
    };
    return _0x50ac();
}
const {cmd} = require('../lib');
cmd({
    'pattern': _0x55756a(0x10d),
    'desc': _0x55756a(0xfa),
    'category': _0x55756a(0x116),
    'filename': __filename
}, async (_0x288a4a, _0x5517d6, _0x546cbb) => {
    const _0x432a7f = _0x55756a;
    return await _0x5517d6[_0x432a7f(0x108)]('' + random_question());
});
function _0x393f(_0x6fc48b, _0x1958fe) {
    const _0x50ac92 = _0x50ac();
    _0x393f = function (_0x393f1f, _0x4aa78b) {
        _0x393f1f = _0x393f1f - 0xf7;
        let _0x4ed292 = _0x50ac92[_0x393f1f];
        return _0x4ed292;
    };
    return _0x393f(_0x6fc48b, _0x1958fe);
}
cmd({
    'pattern': _0x55756a(0x106),
    'desc': 'truth\x20and\x20dare(truth\x20game.).',
    'category': _0x55756a(0x116),
    'filename': __filename
}, async (_0x27b0ea, _0x49cd08, _0x400d58) => {
    return await _0x49cd08['reply']('' + truth());
});
cmd({
    'pattern': 'dare',
    'desc': _0x55756a(0x111),
    'category': '🤹‍♂️\x20𝙵𝚄𝙽\x20𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂\x20🤹‍♂️',
    'filename': __filename
}, async (_0x589c81, _0x5e8441, _0x1af78d) => {
    const _0x4abb16 = _0x55756a;
    return await _0x5e8441[_0x4abb16(0x108)]('' + dare());
});
cmd({
    'pattern': 'fact',
    'desc': 'Sends\x20fact\x20in\x20chat.',
    'category': '🤹‍♂️\x20𝙵𝚄𝙽\x20𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂\x20🤹‍♂️',
    'filename': __filename
}, async (_0x17939b, _0x253c0f, _0x19d959) => {
    const _0x440453 = _0x55756a;
    const {data: _0x2825a1} = await axios['get']('https://nekos.life/api/v2/fact');
    return _0x253c0f['reply'](_0x440453(0x10a) + _0x2825a1[_0x440453(0xfb)] + '\x0a\x0a*Powered\x20by\x20Queen\x20Nilu*');
});
cmd({
    'pattern': _0x55756a(0x119),
    'desc': _0x55756a(0x11c),
    'category': '🤹‍♂️\x20𝙵𝚄𝙽\x20𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂\x20🤹‍♂️',
    'filename': __filename
}, async (_0x33deee, _0x4cc839, _0x292028) => {
    const _0x462013 = _0x55756a;
    var _0x29f6ef = await axios[_0x462013(0xf8)](_0x462013(0x113));
    const _0x25722f = _0x462013(0x10f) + _0x29f6ef[_0x462013(0x11b)][_0x462013(0x11a)][_0x462013(0xfc)] + '\x0a║\x20*👤Author:*\x20' + _0x29f6ef[_0x462013(0x11b)][_0x462013(0x11a)]['author'] + _0x462013(0x118);
    return _0x4cc839['reply'](_0x25722f);
});
cmd({
    'pattern': _0x55756a(0x110),
    'desc': _0x55756a(0x114),
    'category': _0x55756a(0x116),
    'filename': __filename
}, async (_0x1d1621, _0x1fe6fc, _0x253222) => {
    const _0x51730b = _0x55756a;
    try {
        let {data: _0x1068ee} = await axios[_0x51730b(0xf8)](_0x51730b(0x102) + _0x253222);
        var _0x2976c2 = _0x51730b(0x104) + _0x253222 + _0x51730b(0xfd) + _0x1068ee['list'][0x0][_0x51730b(0x107)]['replace'](/\[/g, '')[_0x51730b(0x10b)](/\]/g, '') + _0x51730b(0x103) + _0x1068ee[_0x51730b(0xfe)][0x0][_0x51730b(0xf9)][_0x51730b(0x10b)](/\[/g, '')[_0x51730b(0x10b)](/\]/g, '');
        return _0x1fe6fc[_0x51730b(0x108)](_0x2976c2);
    } catch {
        return _0x1fe6fc[_0x51730b(0x108)](_0x51730b(0xf7) + _0x253222);
    }
});