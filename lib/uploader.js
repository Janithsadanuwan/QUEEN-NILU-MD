const _0x8e7313 = _0x271b;
(function (_0x5a220d, _0x30fe09) {
    const _0x247c00 = _0x271b;
    const _0x4c85fa = _0x5a220d();
    while (!![]) {
        try {
            const _0x59fafc = -parseInt(_0x247c00(0x1f4)) / 0x1 + -parseInt(_0x247c00(0x1ef)) / 0x2 + -parseInt(_0x247c00(0x203)) / 0x3 * (-parseInt(_0x247c00(0x1fb)) / 0x4) + parseInt(_0x247c00(0x1f0)) / 0x5 * (parseInt(_0x247c00(0x20f)) / 0x6) + -parseInt(_0x247c00(0x1f8)) / 0x7 + -parseInt(_0x247c00(0x214)) / 0x8 + parseInt(_0x247c00(0x1ee)) / 0x9;
            if (_0x59fafc === _0x30fe09) {
                break;
            } else {
                _0x4c85fa['push'](_0x4c85fa['shift']());
            }
        } catch (_0x2e1919) {
            _0x4c85fa['push'](_0x4c85fa['shift']());
        }
    }
}(_0x884c, 0x5252f));
let axios = require('axios');
let BodyForm = require(_0x8e7313(0x206));
function _0x884c() {
    const _0x517e24 = [
        'div#output\x20>\x20p.outfile\x20>\x20video\x20>\x20source',
        'Created\x20By\x20MRHRTZ',
        'catch',
        'getHeaders',
        'https://uguu.se/upload.php',
        'src',
        '9HxfbuT',
        'load',
        'https://ezgif.com/webp-to-mp4/',
        'form-data',
        'Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/90.0.4430.212\x20Safari/537.36',
        'exports',
        'value',
        'then',
        'file-type',
        'createReadStream',
        'new-image-url',
        'attr',
        '42oluGat',
        'convert',
        '_boundary',
        'File\x20not\x20Found',
        'node-fetch',
        '4429320fLbteF',
        'multipart/form-data;\x20boundary=',
        '13455369dyFPEN',
        '253352YgbunI',
        '203245iRCchH',
        'Convert\x20WebP\x20to\x20MP4!',
        'existsSync',
        'file',
        '494923wKyKvb',
        'append',
        'data',
        'POST',
        '3526453aBvhpq',
        'files[]',
        'https://telegra.ph/upload',
        '315544izsVkP',
        'files'
    ];
    _0x884c = function () {
        return _0x517e24;
    };
    return _0x884c();
}
let {fromBuffer} = require(_0x8e7313(0x20b));
let fetch = require(_0x8e7313(0x213));
let fs = require('fs');
let cheerio = require('cheerio');
function TelegraPh(_0x504b74) {
    return new Promise(async (_0x1fbb56, _0x312866) => {
        const _0x47356b = _0x271b;
        if (!fs[_0x47356b(0x1f2)](_0x504b74))
            return _0x312866(new Error(_0x47356b(0x212)));
        try {
            const _0x2d6806 = new BodyForm();
            _0x2d6806[_0x47356b(0x1f5)](_0x47356b(0x1f3), fs['createReadStream'](_0x504b74));
            const _0x159562 = await axios({
                'url': _0x47356b(0x1fa),
                'method': _0x47356b(0x1f7),
                'headers': { ..._0x2d6806[_0x47356b(0x200)]() },
                'data': _0x2d6806
            });
            return _0x1fbb56('https://telegra.ph' + _0x159562[_0x47356b(0x1f6)][0x0][_0x47356b(0x202)]);
        } catch (_0x1480a7) {
            return _0x312866(new Error(String(_0x1480a7)));
        }
    });
}
function _0x271b(_0xf5cb84, _0x4c5e71) {
    const _0x884ca9 = _0x884c();
    _0x271b = function (_0x271bdf, _0x45b061) {
        _0x271bdf = _0x271bdf - 0x1ed;
        let _0x14156f = _0x884ca9[_0x271bdf];
        return _0x14156f;
    };
    return _0x271b(_0xf5cb84, _0x4c5e71);
}
async function UploadFileUgu(_0x220989) {
    return new Promise(async (_0xf1f134, _0x31f974) => {
        const _0x2f937d = _0x271b;
        const _0x3869f5 = new BodyForm();
        _0x3869f5[_0x2f937d(0x1f5)](_0x2f937d(0x1f9), fs[_0x2f937d(0x20c)](_0x220989));
        await axios({
            'url': _0x2f937d(0x201),
            'method': _0x2f937d(0x1f7),
            'headers': {
                'User-Agent': _0x2f937d(0x207),
                ..._0x3869f5[_0x2f937d(0x200)]()
            },
            'data': _0x3869f5
        })[_0x2f937d(0x20a)](_0x193fb8 => {
            const _0x78e496 = _0x2f937d;
            _0xf1f134(_0x193fb8[_0x78e496(0x1f6)][_0x78e496(0x1fc)][0x0]);
        })['catch'](_0x116423 => _0x31f974(_0x116423));
    });
}
function webp2mp4File(_0x12ee49) {
    return new Promise((_0x442e91, _0x3ca8ee) => {
        const _0x10b4f1 = _0x271b;
        const _0x4331d3 = new BodyForm();
        _0x4331d3[_0x10b4f1(0x1f5)](_0x10b4f1(0x20d), '');
        _0x4331d3['append']('new-image', fs[_0x10b4f1(0x20c)](_0x12ee49));
        axios({
            'method': 'post',
            'url': 'https://s6.ezgif.com/webp-to-mp4',
            'data': _0x4331d3,
            'headers': { 'Content-Type': _0x10b4f1(0x1ed) + _0x4331d3[_0x10b4f1(0x211)] }
        })['then'](({data: _0x27ba03}) => {
            const _0x6b0df0 = _0x10b4f1;
            const _0x58e6b9 = new BodyForm();
            const _0x383e42 = cheerio[_0x6b0df0(0x204)](_0x27ba03);
            const _0x208e64 = _0x383e42('input[name=\x22file\x22]')[_0x6b0df0(0x20e)](_0x6b0df0(0x209));
            _0x58e6b9[_0x6b0df0(0x1f5)](_0x6b0df0(0x1f3), _0x208e64);
            _0x58e6b9[_0x6b0df0(0x1f5)](_0x6b0df0(0x210), _0x6b0df0(0x1f1));
            axios({
                'method': 'post',
                'url': _0x6b0df0(0x205) + _0x208e64,
                'data': _0x58e6b9,
                'headers': { 'Content-Type': _0x6b0df0(0x1ed) + _0x58e6b9['_boundary'] }
            })[_0x6b0df0(0x20a)](({data: _0x33659c}) => {
                const _0x1cdab1 = _0x6b0df0;
                const _0x39ea14 = cheerio[_0x1cdab1(0x204)](_0x33659c);
                const _0x1424b5 = 'https:' + _0x39ea14(_0x1cdab1(0x1fd))['attr'](_0x1cdab1(0x202));
                _0x442e91({
                    'status': !![],
                    'message': _0x1cdab1(0x1fe),
                    'result': _0x1424b5
                });
            })['catch'](_0x3ca8ee);
        })[_0x10b4f1(0x1ff)](_0x3ca8ee);
    });
}
module[_0x8e7313(0x208)] = {
    'TelegraPh': TelegraPh,
    'UploadFileUgu': UploadFileUgu,
    'webp2mp4File': webp2mp4File
};