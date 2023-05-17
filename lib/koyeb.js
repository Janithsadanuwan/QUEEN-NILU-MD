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


const _0x3e8e94 = _0x4fa2;
(function (_0x192091, _0x21425e) {
    const _0x5a5e94 = _0x4fa2;
    const _0x6b8e60 = _0x192091();
    while (!![]) {
        try {
            const _0x2d3e16 = parseInt(_0x5a5e94(0x1ff)) / 0x1 + parseInt(_0x5a5e94(0x225)) / 0x2 + parseInt(_0x5a5e94(0x202)) / 0x3 + -parseInt(_0x5a5e94(0x20d)) / 0x4 * (-parseInt(_0x5a5e94(0x217)) / 0x5) + -parseInt(_0x5a5e94(0x203)) / 0x6 * (parseInt(_0x5a5e94(0x220)) / 0x7) + parseInt(_0x5a5e94(0x1f4)) / 0x8 + -parseInt(_0x5a5e94(0x216)) / 0x9;
            if (_0x2d3e16 === _0x21425e) {
                break;
            } else {
                _0x6b8e60['push'](_0x6b8e60['shift']());
            }
        } catch (_0x301f09) {
            _0x6b8e60['push'](_0x6b8e60['shift']());
        }
    }
}(_0x109b, 0x58ba9));
function _0x109b() {
    const _0x529ab3 = [
        'https://app.koyeb.com/v1/deployments/',
        'definition',
        'instance_types',
        'patch',
        'get',
        'length',
        'includes',
        'application/json;charset=UTF-8',
        'Successfuly\x20changed\x20var\x20_',
        'STOPPED',
        '56513VxEcvR',
        'join',
        'region:fra',
        '865080CRdYYF',
        '6IWWSiU',
        'https://app.koyeb.com/v1/services',
        'then',
        'latest_deployment_id',
        'data',
        'https://app.koyeb.com/v1/services/',
        'docker',
        'push',
        'health_checks',
        'STOPPING',
        '154664ynLEKj',
        '*\x20:\x20_',
        'scalings',
        'post',
        'deployments',
        '\x20var\x20from\x20koyeb._',
        'key',
        'ERRPRING',
        'ERROR',
        '1799775PLwvnA',
        '50GKczea',
        'status',
        'value',
        'deployment',
        'axios',
        'KOYEB_API',
        '/redeploy',
        'split',
        'regions',
        '3338573DKiXwD',
        '*Got\x20an\x20error\x20in\x20redeploying.*\x0a*Please\x20put\x20koyeb\x20api\x20key\x20in\x20var\x20KOYEB_API.*\x0a_Eg:\x20KOYEB_API:api\x20key\x20from\x20https://app.koyeb.com/account/api\x20._',
        '_Please\x20put\x20Koyeb\x20api\x20key\x20in\x20var\x20KOYEB_API._\x0aEg:\x20KOYEB_API:api\x20key',
        'ports',
        'env',
        '588732sTKhLV',
        'exports',
        'services',
        'routes',
        '115584ApdeEk'
    ];
    _0x109b = function () {
        return _0x529ab3;
    };
    return _0x109b();
}
const axios = require(_0x3e8e94(0x21b));
let koyeb_api = process[_0x3e8e94(0x224)][_0x3e8e94(0x21c)];
let axiosConfig = {
    'headers': {
        'Content-Type': _0x3e8e94(0x1fc),
        'Authorization': 'Bearer\x20' + koyeb_api
    }
};
async function get_deployments() {
    const _0x3d3ae5 = _0x3e8e94;
    status = ![];
    let _0x45e284 = {
        'headers': {
            'Content-Type': _0x3d3ae5(0x1fc),
            'Authorization': 'Bearer\x20' + koyeb_api
        }
    };
    await axios[_0x3d3ae5(0x1f9)]('https://app.koyeb.com/v1/deployments', _0x45e284)[_0x3d3ae5(0x205)](_0x55898b => {
        const _0x312e13 = _0x3d3ae5;
        let _0xe6ebbc = [
            _0x312e13(0x1fe),
            _0x312e13(0x20c),
            _0x312e13(0x215),
            _0x312e13(0x214)
        ];
        let _0x562ad1 = [];
        for (let _0x2c1bb5 = 0x0; _0x2c1bb5 < _0x55898b[_0x312e13(0x207)][_0x312e13(0x211)][_0x312e13(0x1fa)]; _0x2c1bb5++) {
            if (!_0xe6ebbc[_0x312e13(0x1fb)](_0x55898b[_0x312e13(0x207)][_0x312e13(0x211)][_0x2c1bb5][_0x312e13(0x218)])) {
                _0x562ad1[_0x312e13(0x20a)](_0x55898b[_0x312e13(0x207)][_0x312e13(0x211)][_0x2c1bb5][_0x312e13(0x218)]);
            }
        }
        if (_0x562ad1[_0x312e13(0x1fa)] > 0x1)
            status = 'true';
    });
    return status;
}
function checkArray(_0x3f50bb, _0x49140e) {
    const _0x1c4824 = _0x3e8e94;
    var _0x3d30a3 = ![];
    for (var _0x22703c = 0x0; _0x22703c < _0x3f50bb[_0x1c4824(0x1fa)]; _0x22703c++) {
        if (_0x3f50bb[_0x22703c][_0x1c4824(0x213)] == _0x49140e) {
            _0x3d30a3 = !![];
            break;
        }
    }
    return _0x3d30a3;
}
function _0x4fa2(_0x2e3d94, _0xbcfca9) {
    const _0x109bcb = _0x109b();
    _0x4fa2 = function (_0x4fa2c1, _0x10597b) {
        _0x4fa2c1 = _0x4fa2c1 - 0x1f4;
        let _0x5db561 = _0x109bcb[_0x4fa2c1];
        return _0x5db561;
    };
    return _0x4fa2(_0x2e3d94, _0xbcfca9);
}
async function delvar(_0x39d7d1) {
    const _0x9093c8 = _0x3e8e94;
    var _0x4ed56b = ![];
    let {data: _0x2c4c9f} = await axios[_0x9093c8(0x1f9)](_0x9093c8(0x204), axiosConfig);
    let _0x47814f = _0x2c4c9f[_0x9093c8(0x227)][0x0]['id'];
    let _0x3e775e = await axios[_0x9093c8(0x1f9)](_0x9093c8(0x1f5) + _0x2c4c9f['services'][0x0][_0x9093c8(0x206)], axiosConfig);
    let _0x23be04 = checkArray(_0x3e775e[_0x9093c8(0x207)][_0x9093c8(0x21a)][_0x9093c8(0x1f6)][_0x9093c8(0x224)], _0x39d7d1);
    if (_0x23be04 !== !![])
        return '_No\x20such\x20env\x20in\x20koyeb._';
    let _0x25722f = [];
    for (var _0xfd3340 = 0x0; _0xfd3340 < _0x3e775e[_0x9093c8(0x207)][_0x9093c8(0x21a)][_0x9093c8(0x1f6)]['env'][_0x9093c8(0x1fa)]; _0xfd3340++) {
        if (_0x3e775e[_0x9093c8(0x207)]['deployment'][_0x9093c8(0x1f6)][_0x9093c8(0x224)][_0xfd3340][_0x9093c8(0x213)] === _0x39d7d1)
            continue;
        _0x25722f[_0x9093c8(0x20a)](_0x3e775e[_0x9093c8(0x207)][_0x9093c8(0x21a)][_0x9093c8(0x1f6)][_0x9093c8(0x224)][_0xfd3340]);
    }
    let _0xd3ae02 = {
        'definition': {
            'name': _0x3e775e[_0x9093c8(0x207)][_0x9093c8(0x21a)][_0x9093c8(0x1f6)]['name'],
            'routes': _0x3e775e[_0x9093c8(0x207)]['deployment'][_0x9093c8(0x1f6)][_0x9093c8(0x228)],
            'ports': _0x3e775e[_0x9093c8(0x207)][_0x9093c8(0x21a)][_0x9093c8(0x1f6)][_0x9093c8(0x223)],
            'env': _0x25722f,
            'regions': _0x3e775e[_0x9093c8(0x207)][_0x9093c8(0x21a)][_0x9093c8(0x1f6)][_0x9093c8(0x21f)],
            'scalings': _0x3e775e[_0x9093c8(0x207)][_0x9093c8(0x21a)][_0x9093c8(0x1f6)]['scalings'],
            'instance_types': _0x3e775e['data'][_0x9093c8(0x21a)][_0x9093c8(0x1f6)]['instance_types'],
            'health_checks': _0x3e775e[_0x9093c8(0x207)][_0x9093c8(0x21a)][_0x9093c8(0x1f6)][_0x9093c8(0x20b)],
            'docker': _0x3e775e[_0x9093c8(0x207)]['deployment']['definition']['docker']
        }
    };
    await axios[_0x9093c8(0x1f8)]('https://app.koyeb.com/v1/services/' + _0x47814f, _0xd3ae02, axiosConfig)['then'](_0x5d7a27 => {
        const _0x3766e7 = _0x9093c8;
        if (_0x5d7a27[_0x3766e7(0x218)] === 0xc8) {
            _0x4ed56b = '_Successfully\x20deleted\x20' + _0x39d7d1 + _0x3766e7(0x212);
        } else {
            _0x4ed56b = _0x3766e7(0x222);
        }
    });
    return _0x4ed56b;
}
async function change_env(_0x4d7cf8) {
    const _0x38efb1 = _0x3e8e94;
    var _0x4ab26d = '_Please\x20put\x20Koyeb\x20api\x20key\x20in\x20var\x20KOYEB_API._\x0aEg:\x20KOYEB_API:api\x20key';
    let {data: _0x444088} = await axios[_0x38efb1(0x1f9)](_0x38efb1(0x204), axiosConfig);
    let _0x314dff = _0x444088['services'][0x0]['id'];
    let _0x379672 = await axios[_0x38efb1(0x1f9)]('https://app.koyeb.com/v1/deployments/' + _0x444088[_0x38efb1(0x227)][0x0][_0x38efb1(0x206)], axiosConfig);
    let _0x4675b7 = _0x4d7cf8[_0x38efb1(0x21e)](':');
    let _0x1ae0c0 = [];
    for (var _0x396574 = 0x0; _0x396574 < _0x379672['data'][_0x38efb1(0x21a)][_0x38efb1(0x1f6)][_0x38efb1(0x224)][_0x38efb1(0x1fa)]; _0x396574++) {
        if (_0x379672[_0x38efb1(0x207)][_0x38efb1(0x21a)][_0x38efb1(0x1f6)][_0x38efb1(0x224)][_0x396574][_0x38efb1(0x213)] === _0x4675b7[0x0]) {
            _0x1ae0c0[_0x38efb1(0x20a)]({
                'scopes': [_0x38efb1(0x201)],
                'key': '' + _0x4675b7[0x0],
                'value': '' + _0x4675b7[0x1]
            });
        } else {
            _0x1ae0c0[_0x38efb1(0x20a)](_0x379672[_0x38efb1(0x207)][_0x38efb1(0x21a)]['definition'][_0x38efb1(0x224)][_0x396574]);
        }
    }
    let _0x3d58fb = checkArray(_0x1ae0c0, _0x4675b7[0x0]);
    if (!_0x3d58fb === !![]) {
        _0x1ae0c0[_0x38efb1(0x20a)]({
            'scopes': [_0x38efb1(0x201)],
            'key': '' + _0x4675b7[0x0],
            'value': '' + _0x4675b7[0x1]
        });
    }
    let _0x2c46ed = {
        'definition': {
            'name': _0x379672[_0x38efb1(0x207)][_0x38efb1(0x21a)][_0x38efb1(0x1f6)]['name'],
            'routes': _0x379672[_0x38efb1(0x207)][_0x38efb1(0x21a)][_0x38efb1(0x1f6)][_0x38efb1(0x228)],
            'ports': _0x379672[_0x38efb1(0x207)][_0x38efb1(0x21a)][_0x38efb1(0x1f6)][_0x38efb1(0x223)],
            'env': _0x1ae0c0,
            'regions': _0x379672[_0x38efb1(0x207)][_0x38efb1(0x21a)][_0x38efb1(0x1f6)][_0x38efb1(0x21f)],
            'scalings': _0x379672[_0x38efb1(0x207)][_0x38efb1(0x21a)][_0x38efb1(0x1f6)][_0x38efb1(0x20f)],
            'instance_types': _0x379672[_0x38efb1(0x207)][_0x38efb1(0x21a)]['definition'][_0x38efb1(0x1f7)],
            'health_checks': _0x379672[_0x38efb1(0x207)][_0x38efb1(0x21a)][_0x38efb1(0x1f6)][_0x38efb1(0x20b)],
            'docker': _0x379672[_0x38efb1(0x207)][_0x38efb1(0x21a)][_0x38efb1(0x1f6)][_0x38efb1(0x209)]
        }
    };
    await axios[_0x38efb1(0x1f8)]('https://app.koyeb.com/v1/services/' + _0x314dff, _0x2c46ed, axiosConfig)[_0x38efb1(0x205)](_0x5589d9 => {
        const _0x1f45e0 = _0x38efb1;
        if (_0x5589d9[_0x1f45e0(0x218)] === 0xc8) {
            _0x4ab26d = _0x1f45e0(0x1fd) + _0x4675b7[0x0] + ':' + _0x4675b7[0x1] + '\x20._';
        } else {
            _0x4ab26d = _0x1f45e0(0x222);
        }
    });
    return _0x4ab26d;
}
async function getallvar() {
    const _0x4ad9a8 = _0x3e8e94;
    let {data: _0x2d9718} = await axios[_0x4ad9a8(0x1f9)]('https://app.koyeb.com/v1/services', axiosConfig);
    let _0x5a103e = await axios['get'](_0x4ad9a8(0x1f5) + _0x2d9718['services'][0x0]['latest_deployment_id'], axiosConfig);
    let _0x1e14e9 = [];
    for (var _0x134e79 = 0x0; _0x134e79 < _0x5a103e[_0x4ad9a8(0x207)][_0x4ad9a8(0x21a)][_0x4ad9a8(0x1f6)]['env']['length']; _0x134e79++) {
        if (!_0x5a103e[_0x4ad9a8(0x207)]['deployment'][_0x4ad9a8(0x1f6)][_0x4ad9a8(0x224)][_0x134e79]['key'])
            continue;
        _0x1e14e9['push']('*' + _0x5a103e[_0x4ad9a8(0x207)][_0x4ad9a8(0x21a)][_0x4ad9a8(0x1f6)][_0x4ad9a8(0x224)][_0x134e79][_0x4ad9a8(0x213)] + _0x4ad9a8(0x20e) + _0x5a103e[_0x4ad9a8(0x207)][_0x4ad9a8(0x21a)]['definition'][_0x4ad9a8(0x224)][_0x134e79]['value'] + '_');
    }
    return _0x1e14e9[_0x4ad9a8(0x200)]('\x0a');
}
async function getvar(_0x570e2d) {
    const _0x1747c8 = _0x3e8e94;
    let {data: _0x1421c0} = await axios['get'](_0x1747c8(0x204), axiosConfig);
    let _0x2137f5 = await axios[_0x1747c8(0x1f9)](_0x1747c8(0x1f5) + _0x1421c0[_0x1747c8(0x227)][0x0][_0x1747c8(0x206)], axiosConfig);
    for (var _0x213671 = 0x0; _0x213671 < _0x2137f5['data'][_0x1747c8(0x21a)]['definition'][_0x1747c8(0x224)][_0x1747c8(0x1fa)]; _0x213671++) {
        if (!_0x2137f5[_0x1747c8(0x207)][_0x1747c8(0x21a)][_0x1747c8(0x1f6)][_0x1747c8(0x224)][_0x213671][_0x1747c8(0x213)])
            continue;
        if (_0x2137f5[_0x1747c8(0x207)][_0x1747c8(0x21a)][_0x1747c8(0x1f6)][_0x1747c8(0x224)][_0x213671]['key'] === _0x570e2d) {
            return _0x2137f5[_0x1747c8(0x207)][_0x1747c8(0x21a)][_0x1747c8(0x1f6)][_0x1747c8(0x224)][_0x213671]['key'] + ':' + _0x2137f5[_0x1747c8(0x207)][_0x1747c8(0x21a)][_0x1747c8(0x1f6)][_0x1747c8(0x224)][_0x213671][_0x1747c8(0x219)];
        }
    }
}
async function redeploy() {
    const _0x536651 = _0x3e8e94;
    var _0x28007d = ![];
    var _0x39c768 = {
        'deployment_group': 'prod',
        'sha': ''
    };
    let {data: _0x4c5e76} = await axios['get'](_0x536651(0x204), axiosConfig);
    let _0x5036fa = _0x4c5e76[_0x536651(0x227)][0x0]['id'];
    try {
        let _0x28c5ba = await axios[_0x536651(0x210)](_0x536651(0x208) + _0x5036fa + _0x536651(0x21d), _0x39c768, axiosConfig);
        _0x28007d = '_update\x20started._';
    } catch (_0x5f36b0) {
        _0x28007d = _0x536651(0x221);
    }
    return _0x28007d;
}
module[_0x3e8e94(0x226)] = {
    'redeploy': redeploy,
    'getvar': getvar,
    'delvar': delvar,
    'getallvar': getallvar,
    'change_env': change_env,
    'get_deployments': get_deployments
};