const _0x36e569 = _0x86dc;
(function (_0x2e2824, _0x4a22c0) {
    const _0x189b39 = _0x86dc;
    const _0x196578 = _0x2e2824();
    while (!![]) {
        try {
            const _0x1e21e1 = -parseInt(_0x189b39(0xd1)) / 0x1 + parseInt(_0x189b39(0xeb)) / 0x2 * (parseInt(_0x189b39(0xe8)) / 0x3) + parseInt(_0x189b39(0xdd)) / 0x4 * (-parseInt(_0x189b39(0xd7)) / 0x5) + -parseInt(_0x189b39(0xe3)) / 0x6 + parseInt(_0x189b39(0xd5)) / 0x7 + parseInt(_0x189b39(0xda)) / 0x8 * (-parseInt(_0x189b39(0xd2)) / 0x9) + parseInt(_0x189b39(0xe0)) / 0xa;
            if (_0x1e21e1 === _0x4a22c0) {
                break;
            } else {
                _0x196578['push'](_0x196578['shift']());
            }
        } catch (_0x493034) {
            _0x196578['push'](_0x196578['shift']());
        }
    }
}(_0x1a52, 0x3adbd));
const axios = require(_0x36e569(0xd3));
function _0x86dc(_0x3959c9, _0xeac60f) {
    const _0x1a52c7 = _0x1a52();
    _0x86dc = function (_0x86dce9, _0x420dbe) {
        _0x86dce9 = _0x86dce9 - 0xd0;
        let _0x2d2aac = _0x1a52c7[_0x86dce9];
        return _0x2d2aac;
    };
    return _0x86dc(_0x3959c9, _0xeac60f);
}
const cheerio = require(_0x36e569(0xdb));
const clean = _0x34ff7f => {
    const _0x4b72ec = _0x36e569;
    let _0x2cd78d = /(<([^>]+)>)/gi;
    _0x34ff7f = _0x34ff7f['replace'](/(<br?\s?\/>)/gi, '\x20\x0a');
    return _0x34ff7f[_0x4b72ec(0xe5)](_0x2cd78d, '');
};
function _0x1a52() {
    const _0x18f256 = [
        'creator',
        'https://lovetik.com/api/ajax/search',
        '40sYgEVn',
        'title',
        '20991TWwkUR',
        '27rryuaS',
        'axios',
        'http',
        '2168782kccpgS',
        'watermark',
        '68455CiFjJu',
        'YNTKTS',
        'entries',
        '1049528GqVsgR',
        'cheerio',
        'links',
        '116IYfSQQ',
        'author',
        'https',
        '9563640fpcrwq',
        'data',
        'audio',
        '1721772qSCQHi',
        'nowm',
        'replace',
        'Tiktok',
        'cover',
        '11019ERcmQe'
    ];
    _0x1a52 = function () {
        return _0x18f256;
    };
    return _0x1a52();
}
async function shortener(_0x1d1e47) {
    return _0x1d1e47;
}
exports[_0x36e569(0xe6)] = async _0xde63a7 => {
    const _0x10510b = _0x36e569;
    let _0x4a362a = await axios(_0x10510b(0xea), {
        'method': 'POST',
        'data': new URLSearchParams(Object[_0x10510b(0xd9)]({ 'query': _0xde63a7 }))
    });
    result = {};
    result[_0x10510b(0xe9)] = _0x10510b(0xd8);
    result[_0x10510b(0xd0)] = clean(_0x4a362a[_0x10510b(0xe1)]['desc']);
    result[_0x10510b(0xde)] = clean(_0x4a362a[_0x10510b(0xe1)]['author']);
    result[_0x10510b(0xe4)] = await shortener((_0x4a362a['data'][_0x10510b(0xdc)][0x0]['a'] || '')[_0x10510b(0xe5)](_0x10510b(0xdf), _0x10510b(0xd4)));
    result[_0x10510b(0xd6)] = await shortener((_0x4a362a[_0x10510b(0xe1)]['links'][0x1]['a'] || '')[_0x10510b(0xe5)](_0x10510b(0xdf), _0x10510b(0xd4)));
    result[_0x10510b(0xe2)] = await shortener((_0x4a362a['data'][_0x10510b(0xdc)][0x2]['a'] || '')[_0x10510b(0xe5)](_0x10510b(0xdf), 'http'));
    result['thumbnail'] = await shortener(_0x4a362a['data'][_0x10510b(0xe7)]);
    return result;
};