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
const _0x4dfe05 = _0x21bf;
function _0x21bf(_0x22bd72, _0x59af25) {
    const _0x11ae76 = _0x11ae();
    _0x21bf = function (_0x21bf8b, _0x296792) {
        _0x21bf8b = _0x21bf8b - 0x12b;
        let _0x4c7954 = _0x11ae76[_0x21bf8b];
        return _0x4c7954;
    };
    return _0x21bf(_0x22bd72, _0x59af25);
}
(function (_0x196f6b, _0x54183e) {
    const _0xfd0c7c = _0x21bf;
    const _0x1db3b0 = _0x196f6b();
    while (!![]) {
        try {
            const _0xe5525d = parseInt(_0xfd0c7c(0x13c)) / 0x1 + parseInt(_0xfd0c7c(0x13a)) / 0x2 + -parseInt(_0xfd0c7c(0x12d)) / 0x3 + -parseInt(_0xfd0c7c(0x13b)) / 0x4 + -parseInt(_0xfd0c7c(0x135)) / 0x5 * (-parseInt(_0xfd0c7c(0x133)) / 0x6) + parseInt(_0xfd0c7c(0x141)) / 0x7 + -parseInt(_0xfd0c7c(0x139)) / 0x8 * (parseInt(_0xfd0c7c(0x131)) / 0x9);
            if (_0xe5525d === _0x54183e) {
                break;
            } else {
                _0x1db3b0['push'](_0x1db3b0['shift']());
            }
        } catch (_0x14bf9a) {
            _0x1db3b0['push'](_0x1db3b0['shift']());
        }
    }
}(_0x11ae, 0xc3a69));
const axios = require(_0x4dfe05(0x12f));
const {tlang, cmd} = require(_0x4dfe05(0x136));
const {redeploy, getvar, delvar, getallvar, change_env, get_deployments} = require('../lib/koyeb');
cmd({
    'pattern': _0x4dfe05(0x13d),
    'desc': _0x4dfe05(0x13e),
    'filename': __filename,
    'category': _0x4dfe05(0x134)
}, async (_0x473ed2, _0x2295e7, _0x55f6d5, {isCreator: _0x178512}) => {
    const _0x3f7086 = _0x4dfe05;
    if (!_0x178512)
        return _0x2295e7[_0x3f7086(0x12c)](tlang()[_0x3f7086(0x12b)]);
    let _0x5edc8b = await get_deployments();
    if (_0x5edc8b === _0x3f7086(0x13f))
        return _0x2295e7[_0x3f7086(0x12c)](_0x3f7086(0x144));
    let _0x352127 = await redeploy();
    return _0x2295e7['reply'](_0x352127);
});
cmd({
    'pattern': _0x4dfe05(0x132),
    'desc': 'get\x20desired\x20var\x20from\x20koyeb.',
    'filename': __filename,
    'category': _0x4dfe05(0x137)
}, async (_0x4402e8, _0x2af2b3, _0x4fbf06, {isCreator: _0x405d1a}) => {
    const _0x4ecc4d = _0x4dfe05;
    if (!_0x405d1a)
        return _0x2af2b3['reply'](tlang()['owner']);
    if (!_0x4fbf06)
        return _0x2af2b3[_0x4ecc4d(0x12c)](_0x4ecc4d(0x12e));
    let _0x18282f = await getvar(_0x4fbf06);
    return _0x2af2b3[_0x4ecc4d(0x12c)](_0x18282f);
});
function _0x11ae() {
    const _0x4b91a9 = [
        '2920455mTZWXK',
        'Please\x20provide\x20key.\x0a_Eg:\x20.getvar\x20PORT_',
        'axios',
        '*Wrong\x20Format.*\x0aPlease\x20provide\x20key\x20and\x20value.\x0a_Eg:\x20.setvar\x20THEME:SECKTOR_',
        '3429apiiKi',
        'getvar',
        '6tdahNu',
        '🐼\x20𝙾𝚆𝙽𝙴𝚁\x20𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂\x20🐼',
        '85385oOHFSZ',
        '../lib',
        '✨\x20𝙼𝙸𝚂𝙲\x20𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂\x20✨',
        'get\x20all\x20vars\x20from\x20koyeb.',
        '3704pJFwlE',
        '765752zTaiIr',
        '105436xyolHd',
        '1041584PbkPdd',
        'updatenow',
        'update\x20bot\x20with\x20refreshed\x20commit.',
        'true',
        'split',
        '3752665WDIQSZ',
        'delvar',
        'delete\x20var\x20from\x20koyeb.',
        '_Please\x20wait..._\x0a_Currently\x202\x20instances\x20are\x20running\x20in\x20Koyeb,wait\x20to\x20stop\x20one\x20of\x20them._',
        'owner',
        'reply'
    ];
    _0x11ae = function () {
        return _0x4b91a9;
    };
    return _0x11ae();
}
cmd({
    'pattern': 'getallvar',
    'desc': _0x4dfe05(0x138),
    'filename': __filename,
    'category': _0x4dfe05(0x137)
}, async (_0x5176d5, _0x11d884, _0x4ddf6a, {isCreator: _0x3213df}) => {
    const _0x12887f = _0x4dfe05;
    if (!_0x3213df)
        return _0x11d884[_0x12887f(0x12c)](tlang()['owner']);
    let _0x40d6e5 = await getallvar();
    return _0x11d884[_0x12887f(0x12c)](_0x40d6e5);
});
cmd({
    'pattern': 'setvar',
    'desc': 'set\x20var\x20in\x20koyeb.',
    'filename': __filename,
    'category': '✨\x20𝙼𝙸𝚂𝙲\x20𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂\x20✨'
}, async (_0xfebf4a, _0x1f1ed6, _0x4d55e1, {isCreator: _0x501955}) => {
    const _0x4855b5 = _0x4dfe05;
    if (!_0x501955)
        return _0x1f1ed6[_0x4855b5(0x12c)](tlang()[_0x4855b5(0x12b)]);
    if (!_0x4d55e1[_0x4855b5(0x140)](':')[0x1])
        return _0x1f1ed6[_0x4855b5(0x12c)](_0x4855b5(0x130));
    let _0x4cdb45 = await get_deployments();
    if (_0x4cdb45 === _0x4855b5(0x13f))
        return _0x1f1ed6[_0x4855b5(0x12c)](_0x4855b5(0x144));
    let _0x9277b5 = await change_env(_0x4d55e1);
    return _0x1f1ed6['reply'](_0x9277b5);
});
cmd({
    'pattern': _0x4dfe05(0x142),
    'desc': _0x4dfe05(0x143),
    'filename': __filename,
    'category': _0x4dfe05(0x137)
}, async (_0x3443a4, _0x194c1a, _0x2a60b4, {isCreator: _0x18f39b}) => {
    const _0x544674 = _0x4dfe05;
    if (!_0x18f39b)
        return _0x194c1a[_0x544674(0x12c)](tlang()['owner']);
    if (!_0x2a60b4)
        return _0x194c1a[_0x544674(0x12c)]('Please\x20provide\x20key.\x0a_Eg:\x20.delvar\x20PORT_');
    let _0x26ca86 = await get_deployments();
    if (_0x26ca86 === _0x544674(0x13f))
        return _0x194c1a[_0x544674(0x12c)]('_Please\x20wait..._\x0a_Currently\x202\x20instances\x20are\x20running\x20in\x20Koyeb,wait\x20to\x20stop\x20one\x20of\x20them._');
    let _0x512cfb = await delvar(_0x2a60b4);
    return _0x194c1a[_0x544674(0x12c)](_0x512cfb);
});