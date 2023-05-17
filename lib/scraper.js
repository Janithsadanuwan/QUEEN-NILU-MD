const _0x373016 = _0x151d;
(function (_0x486965, _0x49f967) {
    const _0x1af25f = _0x151d;
    const _0x546216 = _0x486965();
    while (!![]) {
        try {
            const _0x2046eb = -parseInt(_0x1af25f(0xc1)) / 0x1 * (-parseInt(_0x1af25f(0xd6)) / 0x2) + -parseInt(_0x1af25f(0xcc)) / 0x3 + -parseInt(_0x1af25f(0xd5)) / 0x4 * (parseInt(_0x1af25f(0x9a)) / 0x5) + parseInt(_0x1af25f(0x15d)) / 0x6 * (parseInt(_0x1af25f(0x107)) / 0x7) + -parseInt(_0x1af25f(0xa7)) / 0x8 * (parseInt(_0x1af25f(0xeb)) / 0x9) + parseInt(_0x1af25f(0xf4)) / 0xa * (-parseInt(_0x1af25f(0x10b)) / 0xb) + -parseInt(_0x1af25f(0xbe)) / 0xc * (-parseInt(_0x1af25f(0x91)) / 0xd);
            if (_0x2046eb === _0x49f967) {
                break;
            } else {
                _0x546216['push'](_0x546216['shift']());
            }
        } catch (_0x505a75) {
            _0x546216['push'](_0x546216['shift']());
        }
    }
}(_0x4ac9, 0xafb93));
const axios = require(_0x373016(0xa6));
const fs = require('fs-extra');
const path = require(_0x373016(0xaf));
const cheerio = require(_0x373016(0x7d));
const {spawn} = require(_0x373016(0xb5));
let BodyForm = require(_0x373016(0xc7));
let {fromBuffer} = require(_0x373016(0x10a));
let fetch = require('node-fetch');
function pinterest(_0x39dd27) {
    return new Promise(async (_0x3ab376, _0x5ac4a4) => {
        const _0x235f48 = _0x151d;
        axios[_0x235f48(0xa8)](_0x235f48(0x16f) + _0x39dd27, { 'headers': { 'cookie': _0x235f48(0x118) } })[_0x235f48(0xaa)](({data: _0x55af7f}) => {
            const _0x2bd8f8 = _0x235f48;
            const _0x267214 = cheerio[_0x2bd8f8(0xbd)](_0x55af7f);
            const _0x4a39f7 = [];
            const _0x23ae1e = [];
            _0x267214(_0x2bd8f8(0x117))['get']()[_0x2bd8f8(0x109)](_0x13f4e2 => {
                const _0x136782 = _0x2bd8f8;
                const _0x4023c1 = _0x267214(_0x13f4e2)[_0x136782(0x7a)](_0x136782(0x10c))[_0x136782(0x15c)](_0x136782(0x101));
                _0x4a39f7[_0x136782(0xab)](_0x4023c1);
            });
            _0x4a39f7[_0x2bd8f8(0x11f)](_0x5db936 => {
                const _0x20a576 = _0x2bd8f8;
                if (_0x5db936 == undefined)
                    return;
                _0x23ae1e['push'](_0x5db936[_0x20a576(0xa3)](/236/g, _0x20a576(0x9f)));
            });
            _0x23ae1e['shift']();
            _0x3ab376(_0x23ae1e);
        });
    });
}
function wallpaper(_0x4cba58, _0x498106 = '1') {
    return new Promise((_0x4b71ca, _0x151589) => {
        const _0x189c94 = _0x151d;
        axios[_0x189c94(0xa8)](_0x189c94(0x114) + _0x498106 + _0x189c94(0x123) + _0x4cba58)[_0x189c94(0xaa)](({data: _0x322bcd}) => {
            const _0x28a27f = _0x189c94;
            let _0x241061 = cheerio[_0x28a27f(0xbd)](_0x322bcd);
            let _0x5aea33 = [];
            _0x241061('div.grid-item')[_0x28a27f(0xe8)](function (_0x1e8425, _0x4b111d) {
                const _0x1e79ef = _0x28a27f;
                _0x5aea33[_0x1e79ef(0xab)]({
                    'title': _0x241061(_0x4b111d)[_0x1e79ef(0x7a)](_0x1e79ef(0xbb))['text'](),
                    'type': _0x241061(_0x4b111d)[_0x1e79ef(0x7a)]('div.info\x20>\x20a:nth-child(2)')[_0x1e79ef(0xdc)](),
                    'source': _0x1e79ef(0x76) + _0x241061(_0x4b111d)[_0x1e79ef(0x7a)](_0x1e79ef(0x113))[_0x1e79ef(0x15c)](_0x1e79ef(0x11e)),
                    'image': [
                        _0x241061(_0x4b111d)[_0x1e79ef(0x7a)](_0x1e79ef(0x81))[_0x1e79ef(0x15c)](_0x1e79ef(0x13d)) || _0x241061(_0x4b111d)[_0x1e79ef(0x7a)]('picture\x20>\x20img')['attr'](_0x1e79ef(0x101)),
                        _0x241061(_0x4b111d)[_0x1e79ef(0x7a)]('picture\x20>\x20source:nth-child(1)')['attr'](_0x1e79ef(0xcb)),
                        _0x241061(_0x4b111d)['find'](_0x1e79ef(0x166))['attr'](_0x1e79ef(0xcb))
                    ]
                });
            });
            _0x4b71ca(_0x5aea33);
        });
    });
}
function TelegraPh(_0x204e85) {
    return new Promise(async (_0x5bc318, _0x13b127) => {
        const _0x500263 = _0x151d;
        if (!fs[_0x500263(0x105)](_0x204e85))
            return _0x13b127(new Error(_0x500263(0x171)));
        try {
            const _0x1e8d28 = new BodyForm();
            _0x1e8d28[_0x500263(0x129)](_0x500263(0x14e), fs[_0x500263(0x87)](_0x204e85));
            const _0x34778d = await axios({
                'url': _0x500263(0x10d),
                'method': _0x500263(0x16d),
                'headers': { ..._0x1e8d28[_0x500263(0xf9)]() },
                'data': _0x1e8d28
            });
            return _0x5bc318('https://telegra.ph' + _0x34778d[_0x500263(0xbf)][0x0][_0x500263(0x101)]);
        } catch (_0x23627d) {
            return _0x13b127(new Error(String(_0x23627d)));
        }
    });
}
async function UploadFileUgu(_0x339e44) {
    return new Promise(async (_0x23831f, _0x5c4328) => {
        const _0x34e061 = _0x151d;
        const _0x13d83f = new BodyForm();
        _0x13d83f[_0x34e061(0x129)](_0x34e061(0x70), fs[_0x34e061(0x87)](_0x339e44));
        await axios({
            'url': _0x34e061(0x12e),
            'method': 'POST',
            'headers': {
                'User-Agent': _0x34e061(0x15e),
                ..._0x13d83f[_0x34e061(0xf9)]()
            },
            'data': _0x13d83f
        })['then'](_0x12e5ea => {
            const _0x30efbf = _0x34e061;
            _0x23831f(_0x12e5ea[_0x30efbf(0xbf)][_0x30efbf(0xff)][0x0]);
        })[_0x34e061(0xa2)](_0x50f129 => _0x5c4328(_0x50f129));
    });
}
function webp2mp4File(_0x169705) {
    return new Promise((_0x254e05, _0x3737b1) => {
        const _0x4466f9 = _0x151d;
        const _0x44bd93 = new BodyForm();
        _0x44bd93[_0x4466f9(0x129)](_0x4466f9(0x104), '');
        _0x44bd93[_0x4466f9(0x129)](_0x4466f9(0xa1), fs[_0x4466f9(0x87)](_0x169705));
        axios({
            'method': _0x4466f9(0xdf),
            'url': 'https://s6.ezgif.com/webp-to-mp4',
            'data': _0x44bd93,
            'headers': { 'Content-Type': _0x4466f9(0x11b) + _0x44bd93[_0x4466f9(0x106)] }
        })[_0x4466f9(0xaa)](({data: _0x53735e}) => {
            const _0x153b3c = _0x4466f9;
            const _0x4836db = new BodyForm();
            const _0x2c6c60 = cheerio['load'](_0x53735e);
            const _0x3708cb = _0x2c6c60(_0x153b3c(0xb0))[_0x153b3c(0x15c)](_0x153b3c(0x12c));
            _0x4836db[_0x153b3c(0x129)](_0x153b3c(0x14e), _0x3708cb);
            _0x4836db[_0x153b3c(0x129)](_0x153b3c(0x111), _0x153b3c(0x7e));
            axios({
                'method': _0x153b3c(0xdf),
                'url': 'https://ezgif.com/webp-to-mp4/' + _0x3708cb,
                'data': _0x4836db,
                'headers': { 'Content-Type': _0x153b3c(0x11b) + _0x4836db[_0x153b3c(0x106)] }
            })[_0x153b3c(0xaa)](({data: _0x375258}) => {
                const _0x3c723c = _0x153b3c;
                const _0x2dd291 = cheerio[_0x3c723c(0xbd)](_0x375258);
                const _0x42d1ff = _0x3c723c(0xd1) + _0x2dd291('div#output\x20>\x20p.outfile\x20>\x20video\x20>\x20source')[_0x3c723c(0x15c)](_0x3c723c(0x101));
                _0x254e05({
                    'status': !![],
                    'message': 'Created\x20By\x20Queen\x20Nilu',
                    'result': _0x42d1ff
                });
            })[_0x153b3c(0xa2)](_0x3737b1);
        })['catch'](_0x3737b1);
    });
}
function wikimedia(_0xfac3f4) {
    return new Promise((_0x2b4cb0, _0x28b6e4) => {
        const _0x2de1da = _0x151d;
        axios['get'](_0x2de1da(0x145) + _0xfac3f4 + _0x2de1da(0x153))[_0x2de1da(0xaa)](_0x41a8bf => {
            const _0x42f038 = _0x2de1da;
            let _0x250df5 = cheerio[_0x42f038(0xbd)](_0x41a8bf[_0x42f038(0xbf)]);
            let _0x5d1782 = [];
            _0x250df5(_0x42f038(0xef))[_0x42f038(0xe8)](function (_0x9b84b4, _0x14ca25) {
                const _0x202042 = _0x42f038;
                _0x5d1782[_0x202042(0xab)]({
                    'title': _0x250df5(_0x14ca25)[_0x202042(0x7a)](_0x202042(0x10c))[_0x202042(0x15c)](_0x202042(0x14c)),
                    'source': _0x250df5(_0x14ca25)[_0x202042(0x15c)](_0x202042(0x11e)),
                    'image': _0x250df5(_0x14ca25)[_0x202042(0x7a)](_0x202042(0x10c))['attr'](_0x202042(0x13d)) || _0x250df5(_0x14ca25)[_0x202042(0x7a)](_0x202042(0x10c))[_0x202042(0x15c)](_0x202042(0x101))
                });
            });
            _0x2b4cb0(_0x5d1782);
        });
    });
}
function aiovideodl(_0x395ceb) {
    return new Promise((_0x85a17f, _0x58f3e4) => {
        const _0x322e7f = _0x151d;
        axios({
            'url': _0x322e7f(0x156),
            'method': _0x322e7f(0x161),
            'headers': {
                'user-agent': 'Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/91.0.4472.124\x20Safari/537.36',
                'cookie': _0x322e7f(0xd0)
            }
        })[_0x322e7f(0xaa)](_0x43a935 => {
            const _0x20defe = _0x322e7f;
            let _0x45a492 = cheerio[_0x20defe(0xbd)](_0x43a935['data']);
            let _0x4fb2f6 = _0x45a492(_0x20defe(0x131))[_0x20defe(0x15c)]('value');
            axios({
                'url': 'https://aiovideodl.ml/wp-json/aio-dl/video-data/',
                'method': _0x20defe(0x16d),
                'headers': {
                    'user-agent': _0x20defe(0x74),
                    'cookie': _0x20defe(0xd0)
                },
                'data': new URLSearchParams(Object['entries']({
                    'url': _0x395ceb,
                    'token': _0x4fb2f6
                }))
            })['then'](({data: _0x20e022}) => {
                _0x85a17f(_0x20e022);
            });
        });
    });
}
function ffmpeg(_0x45ea81, _0x599a7c = [], _0x307d24 = '', _0xcf9228 = '') {
    return new Promise(async (_0x3b3008, _0x195970) => {
        const _0x17a8ee = _0x151d;
        try {
            let _0x4fc867 = path[_0x17a8ee(0xfe)](__dirname, './', +new Date() + '.' + _0x307d24);
            let _0x331bbb = _0x4fc867 + '.' + _0xcf9228;
            await fs['promises'][_0x17a8ee(0x93)](_0x4fc867, _0x45ea81);
            spawn(_0x17a8ee(0xdb), [
                '-y',
                '-i',
                _0x4fc867,
                ..._0x599a7c,
                _0x331bbb
            ])['on'](_0x17a8ee(0x9c), _0x195970)['on'](_0x17a8ee(0x167), async _0x418fc5 => {
                const _0x466a10 = _0x17a8ee;
                try {
                    await fs[_0x466a10(0xf6)][_0x466a10(0xe9)](_0x4fc867);
                    if (_0x418fc5 !== 0x0)
                        return _0x195970(_0x418fc5);
                    _0x3b3008(await fs[_0x466a10(0xf6)][_0x466a10(0x77)](_0x331bbb));
                    await fs[_0x466a10(0xf6)][_0x466a10(0xe9)](_0x331bbb);
                } catch (_0x21e55d) {
                    _0x195970(_0x21e55d);
                }
            });
        } catch (_0xdc80b0) {
            _0x195970(_0xdc80b0);
        }
    });
}
function toAudio(_0x206acb, _0x563743) {
    const _0x50be34 = _0x373016;
    return ffmpeg(_0x206acb, [
        '-vn',
        _0x50be34(0x137),
        '2',
        '-b:a',
        '128k',
        _0x50be34(0x79),
        _0x50be34(0xa0),
        '-f',
        _0x50be34(0x11c)
    ], _0x563743, _0x50be34(0x11c));
}
function toPTT(_0x30449c, _0x43e575) {
    const _0x1ba35e = _0x373016;
    return ffmpeg(_0x30449c, [
        _0x1ba35e(0x15b),
        _0x1ba35e(0xea),
        'libopus',
        _0x1ba35e(0x10e),
        _0x1ba35e(0xe4),
        _0x1ba35e(0x8b),
        'on',
        _0x1ba35e(0x7f),
        '10'
    ], _0x43e575, _0x1ba35e(0xca));
}
function toVideo(_0x4b9f08, _0x248e68) {
    const _0x1f1565 = _0x373016;
    return ffmpeg(_0x4b9f08, [
        _0x1f1565(0xa4),
        'libx264',
        '-c:a',
        _0x1f1565(0xd9),
        _0x1f1565(0xc5),
        _0x1f1565(0xe4),
        _0x1f1565(0x79),
        '44100',
        _0x1f1565(0x155),
        '32',
        _0x1f1565(0xfd),
        _0x1f1565(0x147)
    ], _0x248e68, _0x1f1565(0x12f));
}
const Config = require(_0x373016(0x13c));
if (fs[_0x373016(0x105)](_0x373016(0x9b) + Config['LANG'] + _0x373016(0x159))) {
    var json = JSON[_0x373016(0x116)](fs['readFileSync'](_0x373016(0x9b) + Config['LANG'] + _0x373016(0x159)));
} else {
    var json = JSON['parse'](fs[_0x373016(0x98)](_0x373016(0xd8)));
}
function ffancy(_0x5398d3) {
    return new Promise((_0x502c2a, _0x117976) => {
        const _0x2e9421 = _0x151d;
        axios[_0x2e9421(0xa8)]('http://qaz.wtf/u/convert.cgi?text=' + _0x5398d3)['then'](({data: _0x22f3ae}) => {
            const _0x34e1d6 = _0x2e9421;
            let _0xf873b7 = cheerio[_0x34e1d6(0xbd)](_0x22f3ae);
            let _0x4b0277 = [];
            _0xf873b7('table\x20>\x20tbody\x20>\x20tr')[_0x34e1d6(0xe8)](function (_0x1e648d, _0x54b940) {
                const _0x942597 = _0x34e1d6;
                _0x4b0277['push']({
                    'name': _0xf873b7(_0x54b940)['find'](_0x942597(0x141))[_0x942597(0xdc)](),
                    'result': _0xf873b7(_0x54b940)[_0x942597(0x7a)]('td:nth-child(2)')[_0x942597(0xdc)]()[_0x942597(0x12b)]()
                });
            });
            _0x502c2a(_0x4b0277);
        });
    });
}
async function fancy(_0x3e4ab3, _0x23a43f) {
    const _0x5de5ec = _0x373016;
    try {
        let _0x2a804a = await ffancy(_0x3e4ab3);
        return _0x2a804a[_0x23a43f]['result'];
    } catch (_0x4400f2) {
        console[_0x5de5ec(0x13f)](_0x4400f2);
    }
}
async function randomfancy(_0x5dca91, _0xaab176) {
    const _0x441e0b = _0x373016;
    try {
        let _0x31ea38 = await ffancy(_0x5dca91);
        return _0x31ea38[_0xaab176][_0x441e0b(0xad)];
    } catch (_0x5545c0) {
        console[_0x441e0b(0x13f)](_0x5545c0);
    }
}
function getString(_0x52ab64) {
    return json['STRINGS'][_0x52ab64];
}
function tlang() {
    const _0x2c7c90 = _0x373016;
    let _0x1116a9 = getString(_0x2c7c90(0x100));
    return _0x1116a9;
}
function botpic() {
    return new Promise((_0x20db6b, _0x3c682f) => {
        const _0x5e4de3 = _0x151d;
        let _0xa88d3b = getString(_0x5e4de3(0x100));
        let _0x149073 = [_0x5e4de3(0x103)];
        const _0x2d9b5f = _0x149073[Math[_0x5e4de3(0x72)](Math[_0x5e4de3(0x83)]() * _0x149073[_0x5e4de3(0x13a)])];
        _0x20db6b(_0x2d9b5f);
    });
}
async function checkcard(_0x8fd1b5) {
    const _0x3a8c65 = _0x373016;
    let _0x45176a = await axios[_0x3a8c65(0xa8)](_0x3a8c65(0x15f) + _0x8fd1b5);
    return _0x45176a[_0x3a8c65(0xbf)][_0x3a8c65(0xbf)][0x0];
}
async function claim(_0x1c627f, _0x51ee88) {
    const _0x51e671 = _0x373016;
    let _0x364d36 = await axios['get']('https://db.ygoprodeck.com/api/v7/cardinfo.php?id=' + _0x1c627f);
    let _0xf04c53 = _0x364d36[_0x51e671(0xbf)][_0x51e671(0xbf)][0x0];
    const {card: _0x154947} = require('.');
    await new _0x154947({
        'user': _0x51ee88,
        'id': _0xf04c53['id'],
        'name': _0xf04c53[_0x51e671(0x132)],
        'desc': _0xf04c53[_0x51e671(0xf0)],
        'atk': _0xf04c53[_0x51e671(0xf2)],
        'def': _0xf04c53[_0x51e671(0x8f)],
        'race': _0xf04c53[_0x51e671(0x134)],
        'image': _0xf04c53[_0x51e671(0x169)][0x0][_0x51e671(0xed)],
        'price': _0xf04c53[_0x51e671(0x151)][0x0][_0x51e671(0x78)] * 0x3e8
    })[_0x51e671(0x163)]();
    return _0x364d36[_0x51e671(0xbf)][_0x51e671(0xbf)][0x0];
}
async function collection(_0x5000e1) {
    const _0x22df3c = _0x373016;
    const {card: _0x5a42c2} = require('.');
    let _0x2e0412 = await _0x5a42c2[_0x22df3c(0x7a)]()[_0x22df3c(0x130)]('user')['in'](_0x5000e1);
    return _0x2e0412;
}
async function install(_0x48314d) {
    const _0x2ade89 = _0x373016;
    let _0x5f4999 = require('fs');
    let _0x3bcaeb = await axios['get'](_0x48314d);
    let _0x17197c = _0x3bcaeb[_0x2ade89(0xbf)];
    let _0x1aaeb4 = await _0x5f4999[_0x2ade89(0x152)](__dirname + _0x2ade89(0x7b), _0x17197c, _0x2ade89(0x9e));
    console['log'](_0x2ade89(0xc9) + _0x1aaeb4);
    const _0x973837 = require(__dirname + '/../commands/System/1.js', _0x17197c, _0x2ade89(0x9e));
    console[_0x2ade89(0x13f)](_0x2ade89(0x71) + _0x973837[_0x2ade89(0x132)]);
    const {plugindb: _0x235aa0} = require('.');
    await new _0x235aa0({
        'id': _0x973837[_0x2ade89(0x132)],
        'url': _0x48314d
    })[_0x2ade89(0x163)]();
    fs['unlinkSync'](_0x1aaeb4);
    return _0x973837[_0x2ade89(0x132)];
}
async function remove(_0x147c25) {
    const _0x671b8f = _0x373016;
    var _0x191408;
    try {
        const {plugindb: _0x537f9f} = require('.');
        await _0x537f9f[_0x671b8f(0x8c)]({ 'id': _0x147c25 });
        _0x191408 = 'Plugin\x20' + _0x147c25 + _0x671b8f(0x73);
    } catch {
        _0x191408 = _0x671b8f(0xf1);
    }
    return _0x191408;
}
async function allnotes() {
    const _0x41af46 = _0x373016;
    const {notes: _0x4080c8} = require('.');
    let _0x5ef423 = '\x20';
    let _0x3c1eac = await _0x4080c8['find']({});
    for (let _0x289ea2 = 0x0; _0x289ea2 < _0x3c1eac['length']; _0x289ea2++) {
        let _0x4274cc = _0x289ea2;
        _0x5ef423 += _0x4274cc + 0x1 + _0x41af46(0x16e) + _0x3c1eac[_0x289ea2]['id'] + _0x41af46(0x142) + _0x3c1eac[_0x289ea2][_0x41af46(0x144)] + '\x0a\x0a';
    }
    return _0x5ef423;
}
async function plugins() {
    const _0x24fb7d = _0x373016;
    const {plugindb: _0x5ccbda} = require('.');
    let _0x4a58e7 = await _0x5ccbda[_0x24fb7d(0x7a)]({});
    let _0x4a682e = '\x20';
    for (let _0x31e22b = 0x0; _0x31e22b < _0x4a58e7[_0x24fb7d(0x13a)]; _0x31e22b++) {
        let _0x5938a2 = _0x4a58e7[_0x31e22b][_0x24fb7d(0xc8)];
        let _0x153ab6 = _0x31e22b;
        _0x4a682e += '*' + (_0x153ab6 + 0x1) + ':-*\x20' + _0x4a58e7[_0x31e22b]['id'] + _0x24fb7d(0xb7) + _0x4a58e7[_0x31e22b][_0x24fb7d(0xc8)] + '\x0a\x0a';
    }
    return _0x4a682e;
}
async function addnote(_0x280dce) {
    const _0xea9751 = _0x373016;
    const {notes: _0x6ceead} = require('.');
    let _0x47e25a = await _0x6ceead[_0xea9751(0xe2)]();
    await new _0x6ceead({
        'id': _0x47e25a + 0x1,
        'note': _0x280dce
    })['save']();
    return;
}
async function delallnote() {
    const {notes: _0x307a94} = require('.');
    await _0x307a94['collection']['drop']();
    return;
}
async function delnote(_0x1518c5) {
    const _0x2b01e2 = _0x373016;
    const {notes: _0x18a99d} = require('.');
    await _0x18a99d[_0x2b01e2(0x125)]({ 'id': _0x1518c5 });
    return;
}
async function divorce(_0x42a3f9) {
    const _0x141e80 = _0x373016;
    const {haigu: _0x3b8a98} = require('.');
    let _0x24f281 = await _0x3b8a98[_0x141e80(0x128)]({ 'id': _0x42a3f9 });
    await _0x3b8a98[_0x141e80(0x125)]({ 'id': _0x24f281 });
}
async function checkmarried(_0x3d4922) {
    const _0x1a8047 = _0x373016;
    const {Character: _0x3110e1} = require('mailist');
    const {haigu: _0x35de12} = require('.');
    let _0x27d437 = await _0x35de12[_0x1a8047(0x128)]({ 'id': _0x3d4922 });
    let _0x263522 = _0x27d437[_0x1a8047(0x8d)];
    const _0x4e29d1 = new _0x3110e1();
    const _0x429dd9 = await _0x4e29d1[_0x1a8047(0xb9)](_0x263522)[_0x1a8047(0xa2)](_0x4d6a85 => {
        const _0x1d0733 = _0x1a8047;
        _0x1a0277 = _0x1d0733(0x165);
        return _0x1a0277;
    });
    let _0x1dc5de = '';
    _0x1dc5de += '*🏮Name:*\x20' + _0x429dd9[_0x1a8047(0xbf)][_0x1a8047(0xb4)]['results'][0x0]['name'][_0x1a8047(0x172)] + '*\x0a';
    _0x1dc5de += '*🌐Source:*\x20' + _0x429dd9['data'][_0x1a8047(0xb4)][_0x1a8047(0xb1)][0x0][_0x1a8047(0x92)][_0x1a8047(0x164)][0x0]['node'][_0x1a8047(0x10f)]['userPreferred'] + _0x1a8047(0xc3);
    _0x1dc5de += '*📶URL:*\x20' + _0x429dd9[_0x1a8047(0xbf)][_0x1a8047(0xb4)][_0x1a8047(0xb1)][0x0][_0x1a8047(0x146)] + _0x1a8047(0xc3);
    const {data: _0x526b97} = (await axios[_0x1a8047(0xa8)](_0x1a8047(0xfb) + _0x429dd9[_0x1a8047(0xbf)][_0x1a8047(0xb4)][_0x1a8047(0xb1)][0x0][_0x1a8047(0x132)][_0x1a8047(0x172)]))['data'];
    const {data: _0x219dcf} = (await axios[_0x1a8047(0xa8)]('https://api.jikan.moe/v4/characters/' + _0x526b97[0x0]['mal_id'] + '/anime'))[_0x1a8047(0xbf)];
    const {data: _0x1c6864} = (await axios[_0x1a8047(0xa8)]('https://api.jikan.moe/v4/characters/' + _0x526b97[0x0][_0x1a8047(0x136)] + '/voices'))[_0x1a8047(0xbf)];
    let _0x1a0277 = '*🏮Name:*\x20' + _0x526b97[0x0]['name'] + _0x1a8047(0xe5) + _0x526b97[0x0][_0x1a8047(0x119)] + _0x1a8047(0x158) + _0x526b97[0x0][_0x1a8047(0x136)] + '\x0a🔗\x20*URL:*\x20\x20' + _0x429dd9[_0x1a8047(0xbf)][_0x1a8047(0xb4)][_0x1a8047(0xb1)][0x0][_0x1a8047(0x146)] + '\x0a';
    return _0x1a0277;
}
async function marry(_0x539af4, _0x4b00d5) {
    const _0x2fd9d6 = _0x373016;
    const {haigu: _0x1029af} = require('.');
    await new _0x1029af({
        'id': _0x539af4,
        'haig': _0x4b00d5
    })[_0x2fd9d6(0x163)]();
}
async function isAdmin(_0x317037, _0x20f9ca, _0x5cc11a) {
    const _0x5b18c6 = _0x373016;
    const _0x5e12cf = citel[_0x5b18c6(0xe3)] ? await _0x317037[_0x5b18c6(0x80)](_0x20f9ca)[_0x5b18c6(0xa2)](_0x12e98c => {
    }) : '';
    const _0x82155f = citel['isGroup'] ? await _0x5e12cf[_0x5b18c6(0x16a)] : '';
    const _0x311065 = _0x56856d => {
        const _0x335f3e = _0x5b18c6;
        admins = [];
        for (let _0x33f561 of _0x56856d) {
            _0x33f561[_0x335f3e(0xb3)] === 'admin' || _0x33f561['admin'] === 'superadmin' ? admins[_0x335f3e(0xab)](_0x33f561['id']) : '';
        }
        return admins;
    };
    const _0x342b6e = citel[_0x5b18c6(0xe3)] ? await _0x311065(_0x82155f) : '';
    const _0xf58f1 = citel[_0x5b18c6(0xe3)] ? _0x342b6e[_0x5b18c6(0x143)](_0x5cc11a) : ![];
    return _0xf58f1;
}
async function isBotAdmin(_0x26d77c, _0x5a9a6f, _0x17da5a) {
    const _0x4ad063 = _0x373016;
    const _0x4894ca = citel[_0x4ad063(0xe3)] ? await _0x26d77c[_0x4ad063(0x80)](citel[_0x4ad063(0x127)])[_0x4ad063(0xa2)](_0x23dcc4 => {
    }) : '';
    const _0x53967b = citel[_0x4ad063(0xe3)] ? await _0x4894ca['participants'] : '';
    const _0x33149e = _0x5a8fe7 => {
        const _0x30046d = _0x4ad063;
        admins = [];
        for (let _0x375381 of _0x5a8fe7) {
            _0x375381['admin'] === _0x30046d(0xb3) || _0x375381[_0x30046d(0xb3)] === _0x30046d(0x135) ? admins[_0x30046d(0xab)](_0x375381['id']) : '';
        }
        return admins;
    };
    const _0xa08994 = citel[_0x4ad063(0xe3)] ? await _0x33149e(_0x53967b) : '';
    const _0x543d44 = await _0x26d77c[_0x4ad063(0x157)](_0x26d77c[_0x4ad063(0xb2)]['id']);
    const _0x280c4c = citel[_0x4ad063(0xe3)] ? _0xa08994[_0x4ad063(0x143)](_0x543d44) : ![];
    return _0x280c4c;
}
async function syncgit() {
    const _0x59123f = _0x373016;
    const _0x4131ce = require('simple-git');
    const _0x4a78aa = _0x4131ce();
    await _0x4a78aa[_0x59123f(0xe6)]();
    var _0x13a5b4 = await _0x4a78aa[_0x59123f(0x13f)]([_0x59123f(0xe0) + _0x59123f(0xd4) + _0x59123f(0xe0)]);
    return _0x13a5b4;
}
async function sync() {
    const _0x54cabf = _0x373016;
    const _0x54f320 = require('simple-git');
    const _0x14f400 = _0x54f320();
    await _0x14f400[_0x54cabf(0xe6)]();
    var _0x45ef6e = await _0x14f400[_0x54cabf(0x13f)](['main' + _0x54cabf(0xd4) + _0x54cabf(0xe0)]);
    const {prefix: _0x2734cd} = require('../config');
    var _0x4b512c = _0x54cabf(0xce);
    _0x45ef6e[_0x54cabf(0xfc)][_0x54cabf(0x109)](_0x39465c => {
        const _0x436c2e = _0x54cabf;
        _0x4b512c += _0x436c2e(0xba) + _0x39465c[_0x436c2e(0x97)][_0x436c2e(0xde)](0x0, 0xa) + _0x436c2e(0x124) + _0x39465c['message'] + '\x0a-\x20By:' + _0x39465c[_0x436c2e(0xc0)] + '\x0a';
    });
    return _0x4b512c;
}
function _0x151d(_0x4ac92b, _0x2380f3) {
    const _0x4ac925 = _0x4ac9();
    _0x151d = function (_0x151d32, _0x3b8e3a) {
        _0x151d32 = _0x151d32 - 0x70;
        let _0x22d4d4 = _0x4ac925[_0x151d32];
        return _0x22d4d4;
    };
    return _0x151d(_0x4ac92b, _0x2380f3);
}
function iginfo(_0x3f8adf) {
    return new Promise((_0x331c21, _0xc165f9) => {
        const _0xd8464e = _0x151d;
        axios[_0xd8464e(0xa8)](_0xd8464e(0xa5) + _0x3f8adf + _0xd8464e(0x162), {
            'method': _0xd8464e(0x161),
            'headers': {
                'user-agent': _0xd8464e(0x138),
                'cookie': _0xd8464e(0x14d)
            }
        })[_0xd8464e(0xaa)](async _0x5836f6 => {
            const _0x491b6e = _0xd8464e;
            const _0x20b0af = _0x5836f6[_0x491b6e(0xbc)][_0x491b6e(0xb2)];
            let _0x1128dd = {
                'message': _0x491b6e(0x99),
                'id': _0x20b0af['id'],
                'biography': _0x20b0af[_0x491b6e(0xfa)],
                'followers': _0x20b0af[_0x491b6e(0xe7)][_0x491b6e(0xf8)],
                'following': _0x20b0af[_0x491b6e(0x160)][_0x491b6e(0xf8)],
                'fullName': _0x20b0af[_0x491b6e(0x84)],
                'highlightCount': _0x20b0af['highlight_reel_count'],
                'isBusinessAccount': _0x20b0af[_0x491b6e(0x14b)],
                'isRecentUser': _0x20b0af[_0x491b6e(0x150)],
                'accountCategory': _0x20b0af[_0x491b6e(0x149)],
                'linkedFacebookPage': _0x20b0af[_0x491b6e(0xc2)],
                'isPrivate': _0x20b0af['is_private'],
                'isVerified': _0x20b0af[_0x491b6e(0x89)],
                'profilePicHD': _0x20b0af[_0x491b6e(0x148)],
                'username': _0x20b0af['username'],
                'postsCount': _0x20b0af[_0x491b6e(0x133)]['count']
            };
            _0x331c21(_0x1128dd);
        })[_0xd8464e(0xa2)](_0xc165f9);
    });
}
function adultvid() {
    return new Promise((_0x313a7a, _0x165977) => {
        const _0x5055c5 = _0x151d;
        axios[_0x5055c5(0xa8)](_0x5055c5(0x94))[_0x5055c5(0xaa)](_0x17d647 => {
            const _0x43f6a1 = _0x5055c5;
            const _0x1bebf9 = cheerio[_0x43f6a1(0xbd)](_0x17d647['data']);
            const _0x44e726 = {};
            _0x44e726['title'] = _0x1bebf9(_0x43f6a1(0x15a))[_0x43f6a1(0xdc)]();
            _0x44e726[_0x43f6a1(0x13b)] = _0x1bebf9(_0x43f6a1(0xb8))[_0x43f6a1(0x15c)](_0x43f6a1(0x12d)) || _0x43f6a1(0xec);
            _0x44e726[_0x43f6a1(0x11d)] = _0x1bebf9('article\x20>\x20div.video-wrapper.vxplayer\x20>\x20div.vx_el')[_0x43f6a1(0x15c)](_0x43f6a1(0x14a)) || _0x43f6a1(0x85);
            _0x44e726['desc'] = _0x1bebf9(_0x43f6a1(0x139))[_0x43f6a1(0xdc)]();
            _0x44e726[_0x43f6a1(0x90)] = _0x1bebf9(_0x43f6a1(0xcf))[_0x43f6a1(0xdc)]();
            _0x44e726[_0x43f6a1(0x140)] = _0x1bebf9('article\x20>\x20div.single-pre-meta.ws.clearfix\x20>\x20div\x20>\x20span:nth-child(1)\x20>\x20span')['text']();
            _0x44e726[_0x43f6a1(0x102)] = _0x1bebf9('article\x20>\x20div.single-pre-meta.ws.clearfix\x20>\x20div\x20>\x20span:nth-child(2)\x20>\x20span')[_0x43f6a1(0xdc)]();
            _0x44e726[_0x43f6a1(0x12a)] = _0x1bebf9(_0x43f6a1(0x13e))[_0x43f6a1(0xdc)]();
            _0x44e726[_0x43f6a1(0x86)] = _0x1bebf9(_0x43f6a1(0xa9))[_0x43f6a1(0xdc)]();
            _0x44e726[_0x43f6a1(0xe1)] = _0x1bebf9(_0x43f6a1(0x154))[_0x43f6a1(0xdc)]();
            _0x44e726['video'] = _0x1bebf9('article\x20>\x20div.video-wrapper.vxplayer\x20>\x20div.vx_el')[_0x43f6a1(0x15c)]('src') || _0x1bebf9(_0x43f6a1(0xcd))[_0x43f6a1(0x15c)](_0x43f6a1(0x13d)) || _0x43f6a1(0x85);
            _0x313a7a(_0x44e726);
        });
    });
}
function wallpaper(_0x179ddc, _0xaaf7a7 = '1') {
    return new Promise((_0x3afb7e, _0x21ee4a) => {
        const _0x5844ee = _0x151d;
        axios[_0x5844ee(0xa8)](_0x5844ee(0x114) + _0xaaf7a7 + _0x5844ee(0x123) + _0x179ddc)[_0x5844ee(0xaa)](({data: _0x1796d3}) => {
            const _0x394db6 = _0x5844ee;
            let _0x1544d6 = cheerio[_0x394db6(0xbd)](_0x1796d3);
            let _0x3a96e7 = [];
            _0x1544d6(_0x394db6(0x170))['each'](function (_0x42792a, _0x176f35) {
                const _0x3f6b36 = _0x394db6;
                _0x3a96e7[_0x3f6b36(0xab)]({
                    'title': _0x1544d6(_0x176f35)[_0x3f6b36(0x7a)](_0x3f6b36(0xbb))[_0x3f6b36(0xdc)](),
                    'type': _0x1544d6(_0x176f35)[_0x3f6b36(0x7a)](_0x3f6b36(0x9d))[_0x3f6b36(0xdc)](),
                    'source': _0x3f6b36(0x76) + _0x1544d6(_0x176f35)[_0x3f6b36(0x7a)](_0x3f6b36(0x113))[_0x3f6b36(0x15c)](_0x3f6b36(0x11e)),
                    'image': [
                        _0x1544d6(_0x176f35)[_0x3f6b36(0x7a)](_0x3f6b36(0x81))[_0x3f6b36(0x15c)](_0x3f6b36(0x13d)) || _0x1544d6(_0x176f35)[_0x3f6b36(0x7a)]('picture\x20>\x20img')[_0x3f6b36(0x15c)]('src'),
                        _0x1544d6(_0x176f35)[_0x3f6b36(0x7a)](_0x3f6b36(0x126))[_0x3f6b36(0x15c)]('srcset'),
                        _0x1544d6(_0x176f35)[_0x3f6b36(0x7a)](_0x3f6b36(0x166))['attr'](_0x3f6b36(0xcb))
                    ]
                });
            });
            _0x3afb7e(_0x3a96e7);
        });
    });
}
function _0x4ac9() {
    const _0x384c35 = [
        'data',
        'author_name',
        '3cFqCsF',
        'connected_fb_page',
        '*\x0a\x0a',
        '*/*',
        '-ab',
        '_ga=GA1.2.1240046717.1620835673;\x20PHPSESSID=i14curq5t8omcljj1hlle52762;\x20popCookie=1;\x20_gid=GA1.2.1936694796.1623913934',
        'form-data',
        'url',
        'fname\x20',
        'opus',
        'srcset',
        '4078470wrvDvU',
        'article\x20>\x20div.video-wrapper.vxplayer\x20>\x20div.vx_el',
        '*𝐔𝐩𝐝𝐚𝐭𝐞\x20𝐀𝐚𝐢𝐥𝐚𝐛𝐥𝐞*\x20\x0a\x0a',
        'article\x20>\x20div.single-pre-meta.ws.clearfix\x20>\x20time',
        'PHPSESSID=69ce1f8034b1567b99297eee2396c308;\x20_ga=GA1.2.1360894709.1632723147;\x20_gid=GA1.2.1782417082.1635161653',
        'https:',
        '#results-list\x20>\x20div:nth-child(2)',
        'exports',
        '..origin/',
        '5088gRuqkk',
        '375766kxsfWQ',
        'https://downloadgram.org/',
        './language/EN.json',
        'aac',
        'stringify',
        'ffmpeg',
        'text',
        'https://ttdownloader.com/',
        'substring',
        'post',
        'main',
        'tags',
        'countDocuments',
        'isGroup',
        '128k',
        '\x0a*🎗About:*\x20',
        'fetch',
        'edge_followed_by',
        'each',
        'unlink',
        '-c:a',
        '16857hnCVkm',
        'Web\x20Not\x20Response',
        'image_url',
        'video\x20>\x20a',
        '.sdms-search-results__list-wrapper\x20>\x20div\x20>\x20a',
        'desc',
        'No\x20such\x20plugins\x20installed.',
        'atk',
        'medias',
        '3550rQVpMO',
        '#downloadhere\x20>\x20a',
        'promises',
        'div.download\x20>\x20a',
        'count',
        'getHeaders',
        'biography',
        'https://api.jikan.moe/v4/characters?q=',
        'all',
        '-preset',
        'join',
        'files',
        'global',
        'src',
        'dislike',
        'https://graph.org/file/1b099040322e0649a9192.jpg',
        'new-image-url',
        'existsSync',
        '_boundary',
        '7msthUK',
        'story',
        'map',
        'file-type',
        '4235xwoCwK',
        'img',
        'https://telegra.ph/upload',
        '-b:a',
        'title',
        'header\x20>\x20h2\x20>\x20a',
        'convert',
        'https://www.instagramsave.com/instagram-story-downloader.php',
        'div\x20>\x20a:nth-child(3)',
        'https://www.besthdwallpaper.com/search?CurrentPage=',
        'application/x-www-form-urlencoded',
        'parse',
        'div\x20>\x20a',
        '_auth=1;\x20_b=\x22AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg=\x22;\x20_pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=;\x20_ir=0',
        'about',
        'request',
        'multipart/form-data;\x20boundary=',
        'mp3',
        'thumb',
        'href',
        'forEach',
        'https://www.instagramsave.com/system/action.php',
        'status',
        'entries',
        '&q=',
        ']:\x20',
        'deleteOne',
        'picture\x20>\x20source:nth-child(1)',
        'chat',
        'findOne',
        'append',
        'favorite',
        'trim',
        'value',
        'data-post',
        'https://uguu.se/upload.php',
        'mp4',
        'where',
        '#token',
        'name',
        'edge_owner_to_timeline_media',
        'race',
        'superadmin',
        'mal_id',
        '-ac',
        'Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/91.0.4472.114\x20Safari/537.36',
        'article\x20>\x20div.intro',
        'length',
        'source',
        '../config',
        'data-src',
        'article\x20>\x20div.single-pre-meta.ws.clearfix\x20>\x20div\x20>\x20span:nth-child(3)\x20>\x20span',
        'log',
        'like',
        'td:nth-child(1)\x20>\x20span',
        '\x0a*Note:-*\x20',
        'includes',
        'note',
        'https://commons.wikimedia.org/w/index.php?search=',
        'siteUrl',
        'slow',
        'profile_pic_url_hd',
        'business_category_name',
        'data-poster',
        'is_business_account',
        'alt',
        'mid=XBXl1AALAAEbFoAEfNjZlMMG9dwX;\x20ig_did=91E66A48-5AA2-445D-BFE6-84DC4456DE8F;\x20fbm_124024574287414=base_domain=.instagram.com;\x20ig_nrcb=1;\x20shbid=\x2212737,4008624962,1656157971:01f72a5102dc07af6845adf923ca70eb86e81ab95fa9dbfdaf157c9eef0e82fd1f10fe23\x22;\x20shbts=\x221624621971,4008624962,1656157971:01f74841fba8e77a0066b47ea891dec8fba6fdf9216c0816f9fb3532292f769828800ae2\x22;\x20fbsr_124024574287414=86D8femzH4_KFW4hd3Z6XFdowU6lG-uXsXRQDNl44VM.eyJ1c2VyX2lkIjoiMTAwMDA0Njc2MDc4Nzg5IiwiY29kZSI6IkFRQngzXzVOejdwVnBwby1LRGRUdEYxUFlzcUdDQXJjcmJfb05HaWFvYkNvOGtLN2paam50bHpvMTNOakFnTzVKOHQ5M0V3U3dvNkRtZ0RiY1l1Z3dQSTIybnExOUxLd3lpZTVfZll0bkNXZXBuM1hoYWFLX0w2R0pZaUpzaDBOTDBhb3pmTVBkRTVQRC12X3FnbUgxLXZYdGVmcHhfaFU0aUZNZVMxNHhFUk5OblJyMmxYTUpDa2RFYTdISXNCR2swdHhaaGF0NUt4UDR3cWZTamRwcVFfQ19sa1RUek5fU0taUTYtMjlzTkdnLUVWb3oxMUZWc3Q2OEx2ZnlIY0V0eFp0ZUxacXpiWmh6MzZrVl83VmFGd0FqVnVkTGFQN2VzT3ZRcmlTQ2pLUE5XbVcyNWhudzIzejJBSnVURW00YWR1cmN6a3ZLWU1icTd2SnN0SVdJV09RIiwib2F1dGhfdG9rZW4iOiJFQUFCd3pMaXhuallCQUJBZmJuQ3haQzZMd3h4MDFJV2MyZ3dsQ3k3Qmp0b05UNUY0WDY2NHBrUzRQeERNVXRsdmhWWkI3SXE0MGsyZ2hJQm55RHRPcW5iVjlPbUNiWGhyTFBaQUhBQjFzVFpBdHF6RFEzVTROUkhOU1V6MFVXWkNtTEdLcDNNWDRoazVIOURLbERHN0QwUlhZNHY4dHBCdVNNYjN4dnBTRGtQcHdYRlBXVU82VCIsImFsZ29yaXRobSI6IkhNQUMtU0hBMjU2IiwiaXNzdWVkX2F0IjoxNjI0NjIxOTgxfQ;\x20fbsr_124024574287414=86D8femzH4_KFW4hd3Z6XFdowU6lG-uXsXRQDNl44VM.eyJ1c2VyX2lkIjoiMTAwMDA0Njc2MDc4Nzg5IiwiY29kZSI6IkFRQngzXzVOejdwVnBwby1LRGRUdEYxUFlzcUdDQXJjcmJfb05HaWFvYkNvOGtLN2paam50bHpvMTNOakFnTzVKOHQ5M0V3U3dvNkRtZ0RiY1l1Z3dQSTIybnExOUxLd3lpZTVfZll0bkNXZXBuM1hoYWFLX0w2R0pZaUpzaDBOTDBhb3pmTVBkRTVQRC12X3FnbUgxLXZYdGVmcHhfaFU0aUZNZVMxNHhFUk5OblJyMmxYTUpDa2RFYTdISXNCR2swdHhaaGF0NUt4UDR3cWZTamRwcVFfQ19sa1RUek5fU0taUTYtMjlzTkdnLUVWb3oxMUZWc3Q2OEx2ZnlIY0V0eFp0ZUxacXpiWmh6MzZrVl83VmFGd0FqVnVkTGFQN2VzT3ZRcmlTQ2pLUE5XbVcyNWhudzIzejJBSnVURW00YWR1cmN6a3ZLWU1icTd2SnN0SVdJV09RIiwib2F1dGhfdG9rZW4iOiJFQUFCd3pMaXhuallCQUJBZmJuQ3haQzZMd3h4MDFJV2MyZ3dsQ3k3Qmp0b05UNUY0WDY2NHBrUzRQeERNVXRsdmhWWkI3SXE0MGsyZ2hJQm55RHRPcW5iVjlPbUNiWGhyTFBaQUhBQjFzVFpBdHF6RFEzVTROUkhOU1V6MFVXWkNtTEdLcDNNWDRoazVIOURLbERHN0QwUlhZNHY4dHBCdVNNYjN4dnBTRGtQcHdYRlBXVU82VCIsImFsZ29yaXRobSI6IkhNQUMtU0hBMjU2IiwiaXNzdWVkX2F0IjoxNjI0NjIxOTgxfQ;\x20csrftoken=PpiPMEl0R2pAwThsw4NXynO6cVIXHZDo;\x20ds_user_id=38316792800;\x20sessionid=38316792800:rQj5Tr3g5zkg7b:4;\x20rur=\x22RVA,38316792800,1656158332:01f759cf624bef147397144805bb4c26f6c8b36a232e0f5738c570ee492f6b629f84f6e5\x22',
        'file',
        '\x22\x20Not\x20A;Brand\x22;v=\x2299\x22,\x20\x22Chromium\x22;v=\x2290\x22,\x20\x22Google\x20Chrome\x22;v=\x2290\x22',
        'is_joined_recently',
        'card_prices',
        'writeFileSync',
        '&title=Special:MediaSearch&go=Go&type=image',
        'article\x20>\x20div.post-tags',
        '-crf',
        'https://aiovideodl.ml/',
        'decodeJid',
        '\x0a*🔍MAL_ID:*\x20',
        '.json',
        'article\x20>\x20h1',
        '-vn',
        'attr',
        '3481782zjaNyp',
        'Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/90.0.4430.212\x20Safari/537.36',
        'https://db.ygoprodeck.com/api/v7/cardinfo.php?id=',
        'edge_follow',
        'GET',
        '/?__a=1',
        'save',
        'edges',
        'No\x20haigusha\x20for\x20uh',
        'picture\x20>\x20source:nth-child(2)',
        'close',
        'Normal',
        'card_images',
        'participants',
        '#results-list\x20>\x20div:nth-child(4)',
        'PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49;\x20_ga=GA1.2.1126798330.1625045680;\x20_gid=GA1.2.1475525047.1625045680;\x20__gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg',
        'POST',
        '\x20*ID:-*\x20',
        'https://id.pinterest.com/search/pins/?autologin=true&q=',
        'div.grid-item',
        'File\x20not\x20Found',
        'full',
        'files[]',
        'command\x20',
        'floor',
        '\x20deleted\x20from\x20mongodb.',
        'Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/91.0.4472.124\x20Safari/537.36',
        'Mozilla/5.0\x20(Macintosh;\x20Intel\x20Mac\x20OS\x20X\x2010_13_6)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/67.0.3396.99\x20Safari/537.36',
        'https://www.besthdwallpaper.com/',
        'readFile',
        'amazon_price',
        '-ar',
        'find',
        '/../commands/System/1.js',
        'https://sfmcompile.club/page/',
        'cheerio',
        'Convert\x20WebP\x20to\x20MP4!',
        '-compression_level',
        'groupMetadata',
        'picture\x20>\x20img',
        'https://www.getfvid.com/downloader',
        'random',
        'full_name',
        'https://4.bp.blogspot.com/-hyMqjmQQq4o/W6al-Rk4IpI/AAAAAAAADJ4/m-lVBA_GC9Q5d4BIQg8ZO3fYmQQC3LqSACLcBGAs/s1600/404_not_found.png',
        'views',
        'createReadStream',
        '#download',
        'is_verified',
        '\x20div.download\x20>\x20a',
        '-vbr',
        'findOneAndDelete',
        'haig',
        'en-US,en;q=0.9,id;q=0.8',
        'def',
        'upload',
        '893685MlMTVJ',
        'media',
        'writeFile',
        'https://tikporntok.com/?random=1',
        'header\x20>\x20div.entry-before-title\x20>\x20span\x20>\x20span',
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'date',
        'readFileSync',
        'Queen\x20Nilu\x20\x20.',
        '4555uHCkrb',
        './language/',
        'error',
        'div.info\x20>\x20a:nth-child(2)',
        'utf8',
        '736',
        '44100',
        'new-image',
        'catch',
        'replace',
        '-c:v',
        'https://www.instagram.com/',
        'axios',
        '1336LEOZhe',
        'get',
        'article\x20>\x20div.single-pre-meta.ws.clearfix\x20>\x20div\x20>\x20span:nth-child(4)\x20>\x20span',
        'then',
        'push',
        'header\x20>\x20div.entry-after-title\x20>\x20p\x20>\x20span.entry-views',
        'result',
        'application/x-www-form-urlencoded;\x20charset=UTF-8',
        'path',
        'input[name=\x22file\x22]',
        'results',
        'user',
        'admin',
        'characters',
        'child_process',
        'header\x20>\x20div.entry-after-title\x20>\x20p\x20>\x20span.entry-shares',
        '\x20\x0a*URL:*\x20',
        'article\x20>\x20div.video-wrapper.vxplayer',
        'character',
        '●\x20[',
        'div.info\x20>\x20a\x20>\x20h3',
        'graphql',
        'load',
        '444sgwCzo'
    ];
    _0x4ac9 = function () {
        return _0x384c35;
    };
    return _0x4ac9();
}
function hentai() {
    return new Promise((_0x5a92db, _0x409d98) => {
        const _0x4541c4 = _0x151d;
        const _0x439a6a = Math[_0x4541c4(0x72)](Math[_0x4541c4(0x83)]() * 0x481);
        axios[_0x4541c4(0xa8)](_0x4541c4(0x7c) + _0x439a6a)['then'](_0x31a7b5 => {
            const _0x505e22 = _0x4541c4;
            const _0x49dc81 = cheerio[_0x505e22(0xbd)](_0x31a7b5[_0x505e22(0xbf)]);
            const _0x20c5b2 = [];
            _0x49dc81('#primary\x20>\x20div\x20>\x20div\x20>\x20ul\x20>\x20li\x20>\x20article')[_0x505e22(0xe8)](function (_0x1d0e6f, _0xbfbc6c) {
                const _0x48acae = _0x505e22;
                _0x20c5b2[_0x48acae(0xab)]({
                    'title': _0x49dc81(_0xbfbc6c)[_0x48acae(0x7a)]('header\x20>\x20h2')[_0x48acae(0xdc)](),
                    'link': _0x49dc81(_0xbfbc6c)['find'](_0x48acae(0x110))['attr'](_0x48acae(0x11e)),
                    'category': _0x49dc81(_0xbfbc6c)[_0x48acae(0x7a)](_0x48acae(0x95))[_0x48acae(0xdc)]()[_0x48acae(0xa3)]('in\x20', ''),
                    'share_count': _0x49dc81(_0xbfbc6c)['find'](_0x48acae(0xb6))['text'](),
                    'views_count': _0x49dc81(_0xbfbc6c)[_0x48acae(0x7a)](_0x48acae(0xac))[_0x48acae(0xdc)](),
                    'type': _0x49dc81(_0xbfbc6c)['find'](_0x48acae(0x13b))['attr']('type') || 'image/jpeg',
                    'video_1': _0x49dc81(_0xbfbc6c)[_0x48acae(0x7a)](_0x48acae(0x13b))[_0x48acae(0x15c)](_0x48acae(0x101)) || _0x49dc81(_0xbfbc6c)[_0x48acae(0x7a)](_0x48acae(0x10c))['attr']('data-src'),
                    'video_2': _0x49dc81(_0xbfbc6c)[_0x48acae(0x7a)](_0x48acae(0xee))[_0x48acae(0x15c)](_0x48acae(0x11e)) || ''
                });
            });
            _0x5a92db(_0x20c5b2);
        });
    });
}
async function Insta(_0x443227) {
    const _0x5d55e6 = _0x373016;
    const _0x14efce = [];
    const _0x2cba24 = {
        'url': _0x443227,
        'submit': ''
    };
    const {data: _0x143e20} = await axios(_0x5d55e6(0xd7), {
        'method': _0x5d55e6(0x16d),
        'data': _0x2cba24
    });
    const _0x153414 = cheerio['load'](_0x143e20);
    _0x153414(_0x5d55e6(0xf5))[_0x5d55e6(0xe8)](function (_0x27dfa5, _0x30fd5b) {
        const _0x266f3b = _0x5d55e6;
        const _0x2739d7 = _0x153414(_0x30fd5b)['attr'](_0x266f3b(0x11e));
        if (_0x2739d7)
            _0x14efce[_0x266f3b(0xab)](_0x2739d7);
    });
    return _0x14efce;
}
async function ttdl(_0x56f240) {
    return new Promise(async (_0x5154ea, _0x3f824e) => {
        const _0x9a68d5 = _0x151d;
        await axios[_0x9a68d5(0x11a)]({
            'url': _0x9a68d5(0xdd),
            'method': _0x9a68d5(0x161),
            'headers': {
                'accept': _0x9a68d5(0x96),
                'accept-language': _0x9a68d5(0x8e),
                'user-agent': _0x9a68d5(0x75),
                'cookie': _0x9a68d5(0xc6)
            }
        })[_0x9a68d5(0xaa)](_0x3808f3 => {
            const _0x1c0430 = _0x9a68d5;
            const _0x463f21 = cheerio['load'](_0x3808f3[_0x1c0430(0xbf)]);
            const _0x1178ef = _0x463f21(_0x1c0430(0x131))[_0x1c0430(0x15c)](_0x1c0430(0x12c));
            axios({
                'url': 'https://ttdownloader.com/req/',
                'method': 'POST',
                'data': new URLSearchParams(Object[_0x1c0430(0x122)]({
                    'url': _0x56f240,
                    'format': '',
                    'token': _0x1178ef
                })),
                'headers': {
                    'accept': '*/*',
                    'accept-language': 'en-US,en;q=0.9,id;q=0.8',
                    'content-type': _0x1c0430(0xae),
                    'user-agent': _0x1c0430(0x75),
                    'cookie': _0x1c0430(0xc6)
                }
            })[_0x1c0430(0xaa)](_0x4d1ee1 => {
                const _0x932a9b = _0x1c0430;
                const _0x3ba00e = cheerio[_0x932a9b(0xbd)](_0x4d1ee1[_0x932a9b(0xbf)]);
                const _0x3f2fa7 = {
                    'status': _0x4d1ee1[_0x932a9b(0x121)],
                    'result': {
                        'nowatermark': _0x3ba00e(_0x932a9b(0xd2))['find'](_0x932a9b(0xf7))[_0x932a9b(0x15c)](_0x932a9b(0x11e)),
                        'watermark': _0x3ba00e('#results-list\x20>\x20div:nth-child(3)')[_0x932a9b(0x7a)](_0x932a9b(0xf7))[_0x932a9b(0x15c)](_0x932a9b(0x11e)),
                        'audio': _0x3ba00e(_0x932a9b(0x16b))[_0x932a9b(0x7a)](_0x932a9b(0x8a))['attr'](_0x932a9b(0x11e))
                    }
                };
                _0x5154ea(_0x3f2fa7);
            })[_0x1c0430(0xa2)](_0x3f824e);
        })['catch'](_0x3f824e);
    });
}
async function fbdl(_0xaceb86) {
    const _0x150eaa = _0x373016;
    const _0x1ae03d = [];
    const _0x165a0b = {
        'url': _0xaceb86,
        'submit': ''
    };
    await axios('https://www.getfvid.com/', {
        'method': _0x150eaa(0x16d),
        'data': new URLSearchParams(Object[_0x150eaa(0x122)](_0x165a0b)),
        'headers': {
            'accept': _0x150eaa(0x96),
            'accept-language': _0x150eaa(0x8e),
            'cache-control': 'max-age=0',
            'content-type': _0x150eaa(0x115),
            'sec-ch-ua': _0x150eaa(0x14f),
            'cookie': '_ga=GA1.2.1695343126.1621491858;\x20_gid=GA1.2.28178724.1621491859;\x20__gads=ID=8f9d3ef930e9a07b-2258e672bec80081:T=1621491859:RT=1621491859:S=ALNI_MbqLxhztDiYZttJFX2SkvYei6uGOw;\x20__atuvc=3%7C20;\x20__atuvs=60a6eb107a17dd75000;\x20__atssc=google%3B2;\x20_gat_gtag_UA_142480840_1=1'
        }
    })[_0x150eaa(0xaa)](_0x4dc863 => {
        const _0x5c2d9e = _0x150eaa;
        const _0x9577d1 = cheerio[_0x5c2d9e(0xbd)](_0x4dc863['data']);
        const _0x4f80d1 = _0x9577d1(_0x5c2d9e(0x88))[_0x5c2d9e(0x15c)](_0x5c2d9e(0x12c));
        axios({
            'url': _0x5c2d9e(0x82),
            'method': _0x5c2d9e(0x16d),
            'data': new URLSearchParams(Object['entries']({
                'url': Url,
                'format': '',
                'token': token
            })),
            'headers': {
                'accept': _0x5c2d9e(0xc4),
                'accept-language': _0x5c2d9e(0x8e),
                'content-type': _0x5c2d9e(0xae),
                'user-agent': _0x5c2d9e(0x75),
                'cookie': 'ig_did=08A3C465-7D43-4D8A-806A-88F98384E63B;\x20ig_nrcb=1;\x20mid=X_ipMwALAAFgQ7AftbrkhIDIdXJ8;\x20fbm_124024574287414=base_domain=.facebook.com;\x20shbid=17905;\x20ds_user_id=14221286336;\x20csrftoken=fXHAj5U3mcJihQEyVXfyCzcg46lHx7QD;\x20sessionid=14221286336%3A5n4czHpQ0GRzlq%3A28;\x20shbts=1621491639.7673564;\x20rur=FTW'
            }
        })[_0x5c2d9e(0xaa)](_0x71d885 => {
            const _0x141feb = _0x5c2d9e;
            const _0x5a3df9 = cheerio[_0x141feb(0xbd)](_0x71d885['data']);
            let _0x39b056 = _0x5a3df9('HD')['text']()[_0x141feb(0x12b)]();
            let _0x3ec75f = _0x5a3df9(_0x141feb(0x168))[_0x141feb(0xdc)]()['trim']();
            let _0xac76f0 = _0x5a3df9('Audio')[_0x141feb(0xdc)]()[_0x141feb(0x12b)]();
            const _0x43772f = {
                'status': !![],
                'result': {
                    'link_hd': _0x39b056,
                    'audio': _0xac76f0,
                    'normal': _0x3ec75f
                }
            };
            _0x1ae03d[_0x141feb(0xab)](_0x43772f);
        });
    });
    return _0x1ae03d[0x0];
}
function Igstory(_0x4bc47d) {
    return new Promise(async (_0x453bd0, _0x500e2c) => {
        const _0x52d263 = _0x151d;
        axios[_0x52d263(0x11a)]({
            'url': _0x52d263(0x112),
            'method': _0x52d263(0x161),
            'headers': {
                'user-agent': 'Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/91.0.4472.124\x20Safari/537.36',
                'cookie': _0x52d263(0x16c)
            }
        })['then'](({data: _0x220204}) => {
            const _0x9c0f6e = _0x52d263;
            const _0x18c10b = cheerio[_0x9c0f6e(0xbd)](_0x220204);
            const _0x182b95 = _0x18c10b('#token')['attr'](_0x9c0f6e(0x12c));
            let _0x3de47a = {
                'headers': {
                    'content-type': 'application/x-www-form-urlencoded;\x20charset=UTF-8',
                    'sec-ch-ua': '\x22\x20Not;A\x20Brand\x22;v=\x2299\x22,\x20\x22Google\x20Chrome\x22;v=\x2291\x22,\x20\x22Chromium\x22;v=\x2291\x22',
                    'cookie': _0x9c0f6e(0x16c),
                    'user-agent': _0x9c0f6e(0x74)
                },
                'data': {
                    'url': _0x9c0f6e(0xa5) + _0x4bc47d,
                    'action': _0x9c0f6e(0x108),
                    'token': _0x182b95
                }
            };
            axios['post'](_0x9c0f6e(0x120), qs[_0x9c0f6e(0xda)](_0x3de47a['data']), { 'headers': _0x3de47a['headers'] })['then'](({data: _0x3b2ce8}) => {
                const _0x45efaf = _0x9c0f6e;
                _0x453bd0(_0x3b2ce8[_0x45efaf(0xf3)]);
            });
        })[_0x52d263(0xa2)](_0x500e2c);
    });
}
module[_0x373016(0xd3)] = {
    'Insta': Insta,
    'Igstory': Igstory,
    'ttdl': ttdl,
    'fbdl': fbdl,
    'pinterest': pinterest,
    'iginfo': iginfo,
    'adultvid': adultvid,
    'hentai': hentai,
    'delallnote': delallnote,
    'marry': marry,
    'checkmarried': checkmarried,
    'divorce': divorce,
    'addnote': addnote,
    'claim': claim,
    'install': install,
    'allnotes': allnotes,
    'remove': remove,
    'plugins': plugins,
    'tlang': tlang,
    'collection': collection,
    'checkcard': checkcard,
    'botpic': botpic,
    'language': json,
    'getString': getString,
    'wallpaper': wallpaper,
    'delnote': delnote,
    'wikimedia': wikimedia,
    'aiovideodl': aiovideodl,
    'toAudio': toAudio,
    'toPTT': toPTT,
    'toVideo': toVideo,
    'sync': sync,
    'syncgit': syncgit,
    'ffmpeg': ffmpeg,
    'TelegraPh': TelegraPh,
    'UploadFileUgu': UploadFileUgu,
    'webp2mp4File': webp2mp4File,
    'fancy': fancy,
    'randomfancy': randomfancy
};