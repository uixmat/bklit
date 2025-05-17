module.exports = {

"[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/errors.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const { format } = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
class OPError extends Error {
    constructor({ error_description, error, error_uri, session_state, state, scope }, response){
        super(!error_description ? error : `${error} (${error_description})`);
        Object.assign(this, {
            error
        }, error_description && {
            error_description
        }, error_uri && {
            error_uri
        }, state && {
            state
        }, scope && {
            scope
        }, session_state && {
            session_state
        });
        if (response) {
            Object.defineProperty(this, 'response', {
                value: response
            });
        }
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}
class RPError extends Error {
    constructor(...args){
        if (typeof args[0] === 'string') {
            super(format(...args));
        } else {
            const { message, printf, response, ...rest } = args[0];
            if (printf) {
                super(format(...printf));
            } else {
                super(message);
            }
            Object.assign(this, rest);
            if (response) {
                Object.defineProperty(this, 'response', {
                    value: response
                });
            }
        }
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}
module.exports = {
    OPError,
    RPError
};
}}),
"[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/is_key_object.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
const crypto = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
module.exports = util.types.isKeyObject || ((obj)=>obj && obj instanceof crypto.KeyObject);
}}),
"[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/base64url.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
let encode;
if (Buffer.isEncoding('base64url')) {
    encode = (input, encoding = 'utf8')=>Buffer.from(input, encoding).toString('base64url');
} else {
    const fromBase64 = (base64)=>base64.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
    encode = (input, encoding = 'utf8')=>fromBase64(Buffer.from(input, encoding).toString('base64'));
}
const decode = (input)=>Buffer.from(input, 'base64');
module.exports.decode = decode;
module.exports.encode = encode;
}}),
"[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/decode_jwt.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const base64url = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/base64url.js [app-rsc] (ecmascript)");
module.exports = (token)=>{
    if (typeof token !== 'string' || !token) {
        throw new TypeError('JWT must be a string');
    }
    const { 0: header, 1: payload, 2: signature, length } = token.split('.');
    if (length === 5) {
        throw new TypeError('encrypted JWTs cannot be decoded');
    }
    if (length !== 3) {
        throw new Error('JWTs must have three components');
    }
    try {
        return {
            header: JSON.parse(base64url.decode(header)),
            payload: JSON.parse(base64url.decode(payload)),
            signature
        };
    } catch (err) {
        throw new Error('JWT is malformed');
    }
};
}}),
"[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/is_plain_object.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
module.exports = (a)=>!!a && a.constructor === Object;
}}),
"[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/defaults.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const isPlainObject = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/is_plain_object.js [app-rsc] (ecmascript)");
function defaults(deep, target, ...sources) {
    for (const source of sources){
        if (!isPlainObject(source)) {
            continue;
        }
        for (const [key, value] of Object.entries(source)){
            /* istanbul ignore if */ if (key === '__proto__' || key === 'constructor') {
                continue;
            }
            if (typeof target[key] === 'undefined' && typeof value !== 'undefined') {
                target[key] = value;
            }
            if (deep && isPlainObject(target[key]) && isPlainObject(value)) {
                defaults(true, target[key], value);
            }
        }
    }
    return target;
}
module.exports = defaults.bind(undefined, false);
module.exports.deep = defaults.bind(undefined, true);
}}),
"[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/www_authenticate_parser.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const REGEXP = /(\w+)=("[^"]*")/g;
module.exports = (wwwAuthenticate)=>{
    const params = {};
    try {
        while(REGEXP.exec(wwwAuthenticate) !== null){
            if (RegExp.$1 && RegExp.$2) {
                params[RegExp.$1] = RegExp.$2.slice(1, -1);
            }
        }
    } catch (err) {}
    return params;
};
}}),
"[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/assert.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
function assertSigningAlgValuesSupport(endpoint, issuer, properties) {
    if (!issuer[`${endpoint}_endpoint`]) return;
    const eam = `${endpoint}_endpoint_auth_method`;
    const easa = `${endpoint}_endpoint_auth_signing_alg`;
    const easavs = `${endpoint}_endpoint_auth_signing_alg_values_supported`;
    if (properties[eam] && properties[eam].endsWith('_jwt') && !properties[easa] && !issuer[easavs]) {
        throw new TypeError(`${easavs} must be configured on the issuer if ${easa} is not defined on a client`);
    }
}
function assertIssuerConfiguration(issuer, endpoint) {
    if (!issuer[endpoint]) {
        throw new TypeError(`${endpoint} must be configured on the issuer`);
    }
}
module.exports = {
    assertSigningAlgValuesSupport,
    assertIssuerConfiguration
};
}}),
"[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/pick.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
module.exports = function pick(object, ...paths) {
    const obj = {};
    for (const path of paths){
        if (object[path] !== undefined) {
            obj[path] = object[path];
        }
    }
    return obj;
};
}}),
"[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/process_response.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const { STATUS_CODES } = __turbopack_context__.r("[externals]/http [external] (http, cjs)");
const { format } = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
const { OPError } = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/errors.js [app-rsc] (ecmascript)");
const parseWwwAuthenticate = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/www_authenticate_parser.js [app-rsc] (ecmascript)");
const throwAuthenticateErrors = (response)=>{
    const params = parseWwwAuthenticate(response.headers['www-authenticate']);
    if (params.error) {
        throw new OPError(params, response);
    }
};
const isStandardBodyError = (response)=>{
    let result = false;
    try {
        let jsonbody;
        if (typeof response.body !== 'object' || Buffer.isBuffer(response.body)) {
            jsonbody = JSON.parse(response.body);
        } else {
            jsonbody = response.body;
        }
        result = typeof jsonbody.error === 'string' && jsonbody.error.length;
        if (result) Object.defineProperty(response, 'body', {
            value: jsonbody,
            configurable: true
        });
    } catch (err) {}
    return result;
};
function processResponse(response, { statusCode = 200, body = true, bearer = false } = {}) {
    if (response.statusCode !== statusCode) {
        if (bearer) {
            throwAuthenticateErrors(response);
        }
        if (isStandardBodyError(response)) {
            throw new OPError(response.body, response);
        }
        throw new OPError({
            error: format('expected %i %s, got: %i %s', statusCode, STATUS_CODES[statusCode], response.statusCode, STATUS_CODES[response.statusCode])
        }, response);
    }
    if (body && !response.body) {
        throw new OPError({
            error: format('expected %i %s with body but no body was returned', statusCode, STATUS_CODES[statusCode])
        }, response);
    }
    return response.body;
}
module.exports = processResponse;
}}),
"[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/unix_timestamp.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
module.exports = ()=>Math.floor(Date.now() / 1000);
}}),
"[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/token_set.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const base64url = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/base64url.js [app-rsc] (ecmascript)");
const now = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/unix_timestamp.js [app-rsc] (ecmascript)");
class TokenSet {
    constructor(values){
        Object.assign(this, values);
        const { constructor, ...properties } = Object.getOwnPropertyDescriptors(this.constructor.prototype);
        Object.defineProperties(this, properties);
    }
    set expires_in(value) {
        this.expires_at = now() + Number(value);
    }
    get expires_in() {
        return Math.max.apply(null, [
            this.expires_at - now(),
            0
        ]);
    }
    expired() {
        return this.expires_in === 0;
    }
    claims() {
        if (!this.id_token) {
            throw new TypeError('id_token not present in TokenSet');
        }
        return JSON.parse(base64url.decode(this.id_token.split('.')[1]));
    }
}
module.exports = TokenSet;
}}),
"[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/generators.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const { createHash, randomBytes } = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
const base64url = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/base64url.js [app-rsc] (ecmascript)");
const random = (bytes = 32)=>base64url.encode(randomBytes(bytes));
module.exports = {
    random,
    state: random,
    nonce: random,
    codeVerifier: random,
    codeChallenge: (codeVerifier)=>base64url.encode(createHash('sha256').update(codeVerifier).digest())
};
}}),
"[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/package.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"name\":\"openid-client\",\"version\":\"5.7.1\",\"description\":\"OpenID Connect Relying Party (RP, Client) implementation for Node.js runtime, supports passportjs\",\"keywords\":[\"auth\",\"authentication\",\"basic\",\"certified\",\"client\",\"connect\",\"dynamic\",\"electron\",\"hybrid\",\"identity\",\"implicit\",\"oauth\",\"oauth2\",\"oidc\",\"openid\",\"passport\",\"relying party\",\"strategy\"],\"homepage\":\"https://github.com/panva/openid-client\",\"repository\":\"panva/openid-client\",\"funding\":{\"url\":\"https://github.com/sponsors/panva\"},\"license\":\"MIT\",\"author\":\"Filip Skokan <panva.ip@gmail.com>\",\"exports\":{\"types\":\"./types/index.d.ts\",\"import\":\"./lib/index.mjs\",\"require\":\"./lib/index.js\"},\"main\":\"./lib/index.js\",\"types\":\"./types/index.d.ts\",\"files\":[\"lib\",\"types/index.d.ts\"],\"scripts\":{\"format\":\"npx prettier --loglevel silent --write ./lib ./test ./certification ./types\",\"test\":\"mocha test/**/*.test.js\"},\"dependencies\":{\"jose\":\"^4.15.9\",\"lru-cache\":\"^6.0.0\",\"object-hash\":\"^2.2.0\",\"oidc-token-hash\":\"^5.0.3\"},\"devDependencies\":{\"@types/node\":\"^16.18.106\",\"@types/passport\":\"^1.0.16\",\"base64url\":\"^3.0.1\",\"chai\":\"^4.5.0\",\"mocha\":\"^10.7.3\",\"nock\":\"^13.5.5\",\"prettier\":\"^2.8.8\",\"readable-mock-req\":\"^0.2.2\",\"sinon\":\"^9.2.4\",\"timekeeper\":\"^2.3.1\"},\"standard-version\":{\"scripts\":{\"postchangelog\":\"sed -i '' -e 's/### \\\\[/## [/g' CHANGELOG.md\"},\"types\":[{\"type\":\"feat\",\"section\":\"Features\"},{\"type\":\"fix\",\"section\":\"Fixes\"},{\"type\":\"chore\",\"hidden\":true},{\"type\":\"docs\",\"hidden\":true},{\"type\":\"style\",\"hidden\":true},{\"type\":\"refactor\",\"section\":\"Refactor\",\"hidden\":false},{\"type\":\"perf\",\"section\":\"Performance\",\"hidden\":false},{\"type\":\"test\",\"hidden\":true}]}}"));}}),
"[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/consts.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const HTTP_OPTIONS = Symbol();
const CLOCK_TOLERANCE = Symbol();
module.exports = {
    CLOCK_TOLERANCE,
    HTTP_OPTIONS
};
}}),
"[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/request.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const assert = __turbopack_context__.r("[externals]/assert [external] (assert, cjs)");
const querystring = __turbopack_context__.r("[externals]/querystring [external] (querystring, cjs)");
const http = __turbopack_context__.r("[externals]/http [external] (http, cjs)");
const https = __turbopack_context__.r("[externals]/https [external] (https, cjs)");
const { once } = __turbopack_context__.r("[externals]/events [external] (events, cjs)");
const { URL } = __turbopack_context__.r("[externals]/url [external] (url, cjs)");
const LRU = __turbopack_context__.r("[project]/node_modules/.pnpm/lru-cache@6.0.0/node_modules/lru-cache/index.js [app-rsc] (ecmascript)");
const pkg = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/package.json (json)");
const { RPError } = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/errors.js [app-rsc] (ecmascript)");
const pick = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/pick.js [app-rsc] (ecmascript)");
const { deep: defaultsDeep } = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/defaults.js [app-rsc] (ecmascript)");
const { HTTP_OPTIONS } = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/consts.js [app-rsc] (ecmascript)");
let DEFAULT_HTTP_OPTIONS;
const NQCHAR = /^[\x21\x23-\x5B\x5D-\x7E]+$/;
const allowed = [
    'agent',
    'ca',
    'cert',
    'crl',
    'headers',
    'key',
    'lookup',
    'passphrase',
    'pfx',
    'timeout'
];
const setDefaults = (props, options)=>{
    DEFAULT_HTTP_OPTIONS = defaultsDeep({}, props.length ? pick(options, ...props) : options, DEFAULT_HTTP_OPTIONS);
};
setDefaults([], {
    headers: {
        'User-Agent': `${pkg.name}/${pkg.version} (${pkg.homepage})`,
        'Accept-Encoding': 'identity'
    },
    timeout: 3500
});
function send(req, body, contentType) {
    if (contentType) {
        req.removeHeader('content-type');
        req.setHeader('content-type', contentType);
    }
    if (body) {
        req.removeHeader('content-length');
        req.setHeader('content-length', Buffer.byteLength(body));
        req.write(body);
    }
    req.end();
}
const nonces = new LRU({
    max: 100
});
module.exports = async function request(options, { accessToken, mTLS = false, DPoP } = {}) {
    let url;
    try {
        url = new URL(options.url);
        delete options.url;
        assert(/^(https?:)$/.test(url.protocol));
    } catch (err) {
        throw new TypeError('only valid absolute URLs can be requested');
    }
    const optsFn = this[HTTP_OPTIONS];
    let opts = options;
    const nonceKey = `${url.origin}${url.pathname}`;
    if (DPoP && 'dpopProof' in this) {
        opts.headers = opts.headers || {};
        opts.headers.DPoP = await this.dpopProof({
            htu: `${url.origin}${url.pathname}`,
            htm: options.method || 'GET',
            nonce: nonces.get(nonceKey)
        }, DPoP, accessToken);
    }
    let userOptions;
    if (optsFn) {
        userOptions = pick(optsFn.call(this, url, defaultsDeep({}, opts, DEFAULT_HTTP_OPTIONS)), ...allowed);
    }
    opts = defaultsDeep({}, userOptions, opts, DEFAULT_HTTP_OPTIONS);
    if (mTLS && !opts.pfx && !(opts.key && opts.cert)) {
        throw new TypeError('mutual-TLS certificate and key not set');
    }
    if (opts.searchParams) {
        for (const [key, value] of Object.entries(opts.searchParams)){
            url.searchParams.delete(key);
            url.searchParams.set(key, value);
        }
    }
    let responseType;
    let form;
    let json;
    let body;
    ({ form, responseType, json, body, ...opts } = opts);
    for (const [key, value] of Object.entries(opts.headers || {})){
        if (value === undefined) {
            delete opts.headers[key];
        }
    }
    let response;
    const req = (url.protocol === 'https:' ? https.request : http.request)(url.href, opts);
    return (async ()=>{
        if (json) {
            send(req, JSON.stringify(json), 'application/json');
        } else if (form) {
            send(req, querystring.stringify(form), 'application/x-www-form-urlencoded');
        } else if (body) {
            send(req, body);
        } else {
            send(req);
        }
        [response] = await Promise.race([
            once(req, 'response'),
            once(req, 'timeout')
        ]);
        // timeout reached
        if (!response) {
            req.destroy();
            throw new RPError(`outgoing request timed out after ${opts.timeout}ms`);
        }
        const parts = [];
        for await (const part of response){
            parts.push(part);
        }
        if (parts.length) {
            switch(responseType){
                case 'json':
                    {
                        Object.defineProperty(response, 'body', {
                            get () {
                                let value = Buffer.concat(parts);
                                try {
                                    value = JSON.parse(value);
                                } catch (err) {
                                    Object.defineProperty(err, 'response', {
                                        value: response
                                    });
                                    throw err;
                                } finally{
                                    Object.defineProperty(response, 'body', {
                                        value,
                                        configurable: true
                                    });
                                }
                                return value;
                            },
                            configurable: true
                        });
                        break;
                    }
                case undefined:
                case 'buffer':
                    {
                        Object.defineProperty(response, 'body', {
                            get () {
                                const value = Buffer.concat(parts);
                                Object.defineProperty(response, 'body', {
                                    value,
                                    configurable: true
                                });
                                return value;
                            },
                            configurable: true
                        });
                        break;
                    }
                default:
                    throw new TypeError('unsupported responseType request option');
            }
        }
        return response;
    })().catch((err)=>{
        if (response) Object.defineProperty(err, 'response', {
            value: response
        });
        throw err;
    }).finally(()=>{
        const dpopNonce = response && response.headers['dpop-nonce'];
        if (dpopNonce && NQCHAR.test(dpopNonce)) {
            nonces.set(nonceKey, dpopNonce);
        }
    });
};
module.exports.setDefaults = setDefaults.bind(undefined, allowed);
}}),
"[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/weak_cache.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
module.exports.keystores = new WeakMap();
}}),
"[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/deep_clone.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
module.exports = globalThis.structuredClone || ((obj)=>JSON.parse(JSON.stringify(obj)));
}}),
"[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/keystore.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const jose = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/index.js [app-rsc] (ecmascript)");
const clone = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/deep_clone.js [app-rsc] (ecmascript)");
const isPlainObject = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/is_plain_object.js [app-rsc] (ecmascript)");
const internal = Symbol();
const keyscore = (key, { alg, use })=>{
    let score = 0;
    if (alg && key.alg) {
        score++;
    }
    if (use && key.use) {
        score++;
    }
    return score;
};
function getKtyFromAlg(alg) {
    switch(typeof alg === 'string' && alg.slice(0, 2)){
        case 'RS':
        case 'PS':
            return 'RSA';
        case 'ES':
            return 'EC';
        case 'Ed':
            return 'OKP';
        default:
            return undefined;
    }
}
function getAlgorithms(use, alg, kty, crv) {
    // Ed25519, Ed448, and secp256k1 always have "alg"
    // OKP always has "use"
    if (alg) {
        return new Set([
            alg
        ]);
    }
    switch(kty){
        case 'EC':
            {
                let algs = [];
                if (use === 'enc' || use === undefined) {
                    algs = algs.concat([
                        'ECDH-ES',
                        'ECDH-ES+A128KW',
                        'ECDH-ES+A192KW',
                        'ECDH-ES+A256KW'
                    ]);
                }
                if (use === 'sig' || use === undefined) {
                    switch(crv){
                        case 'P-256':
                        case 'P-384':
                            algs = algs.concat([
                                `ES${crv.slice(-3)}`
                            ]);
                            break;
                        case 'P-521':
                            algs = algs.concat([
                                'ES512'
                            ]);
                            break;
                        case 'secp256k1':
                            if (jose.cryptoRuntime === 'node:crypto') {
                                algs = algs.concat([
                                    'ES256K'
                                ]);
                            }
                            break;
                    }
                }
                return new Set(algs);
            }
        case 'OKP':
            {
                return new Set([
                    'ECDH-ES',
                    'ECDH-ES+A128KW',
                    'ECDH-ES+A192KW',
                    'ECDH-ES+A256KW'
                ]);
            }
        case 'RSA':
            {
                let algs = [];
                if (use === 'enc' || use === undefined) {
                    algs = algs.concat([
                        'RSA-OAEP',
                        'RSA-OAEP-256',
                        'RSA-OAEP-384',
                        'RSA-OAEP-512'
                    ]);
                    if (jose.cryptoRuntime === 'node:crypto') {
                        algs = algs.concat([
                            'RSA1_5'
                        ]);
                    }
                }
                if (use === 'sig' || use === undefined) {
                    algs = algs.concat([
                        'PS256',
                        'PS384',
                        'PS512',
                        'RS256',
                        'RS384',
                        'RS512'
                    ]);
                }
                return new Set(algs);
            }
        default:
            throw new Error('unreachable');
    }
}
module.exports = class KeyStore {
    #keys;
    constructor(i, keys){
        if (i !== internal) throw new Error('invalid constructor call');
        this.#keys = keys;
    }
    toJWKS() {
        return {
            keys: this.map(({ jwk: { d, p, q, dp, dq, qi, ...jwk } })=>jwk)
        };
    }
    all({ alg, kid, use } = {}) {
        if (!use || !alg) {
            throw new Error();
        }
        const kty = getKtyFromAlg(alg);
        const search = {
            alg,
            use
        };
        return this.filter((key)=>{
            let candidate = true;
            if (candidate && kty !== undefined && key.jwk.kty !== kty) {
                candidate = false;
            }
            if (candidate && kid !== undefined && key.jwk.kid !== kid) {
                candidate = false;
            }
            if (candidate && use !== undefined && key.jwk.use !== undefined && key.jwk.use !== use) {
                candidate = false;
            }
            if (candidate && key.jwk.alg && key.jwk.alg !== alg) {
                candidate = false;
            } else if (!key.algorithms.has(alg)) {
                candidate = false;
            }
            return candidate;
        }).sort((first, second)=>keyscore(second, search) - keyscore(first, search));
    }
    get(...args) {
        return this.all(...args)[0];
    }
    static async fromJWKS(jwks, { onlyPublic = false, onlyPrivate = false } = {}) {
        if (!isPlainObject(jwks) || !Array.isArray(jwks.keys) || jwks.keys.some((k)=>!isPlainObject(k) || !('kty' in k))) {
            throw new TypeError('jwks must be a JSON Web Key Set formatted object');
        }
        const keys = [];
        for (let jwk of jwks.keys){
            jwk = clone(jwk);
            const { kty, kid, crv } = jwk;
            let { alg, use } = jwk;
            if (typeof kty !== 'string' || !kty) {
                continue;
            }
            if (use !== undefined && use !== 'sig' && use !== 'enc') {
                continue;
            }
            if (typeof alg !== 'string' && alg !== undefined) {
                continue;
            }
            if (typeof kid !== 'string' && kid !== undefined) {
                continue;
            }
            if (kty === 'EC' && use === 'sig') {
                switch(crv){
                    case 'P-256':
                        alg = 'ES256';
                        break;
                    case 'P-384':
                        alg = 'ES384';
                        break;
                    case 'P-521':
                        alg = 'ES512';
                        break;
                    default:
                        break;
                }
            }
            if (crv === 'secp256k1') {
                use = 'sig';
                alg = 'ES256K';
            }
            if (kty === 'OKP') {
                switch(crv){
                    case 'Ed25519':
                    case 'Ed448':
                        use = 'sig';
                        alg = 'EdDSA';
                        break;
                    case 'X25519':
                    case 'X448':
                        use = 'enc';
                        break;
                    default:
                        break;
                }
            }
            if (alg && !use) {
                switch(true){
                    case alg.startsWith('ECDH'):
                        use = 'enc';
                        break;
                    case alg.startsWith('RSA'):
                        use = 'enc';
                        break;
                    default:
                        break;
                }
            }
            if (onlyPrivate && (jwk.kty === 'oct' || !jwk.d)) {
                throw new Error('jwks must only contain private keys');
            }
            if (onlyPublic && (jwk.d || jwk.k)) {
                continue;
            }
            keys.push({
                jwk: {
                    ...jwk,
                    alg,
                    use
                },
                async keyObject (alg) {
                    if (this[alg]) {
                        return this[alg];
                    }
                    const keyObject = await jose.importJWK(this.jwk, alg);
                    this[alg] = keyObject;
                    return keyObject;
                },
                get algorithms () {
                    Object.defineProperty(this, 'algorithms', {
                        value: getAlgorithms(this.jwk.use, this.jwk.alg, this.jwk.kty, this.jwk.crv),
                        enumerable: true,
                        configurable: false
                    });
                    return this.algorithms;
                }
            });
        }
        return new this(internal, keys);
    }
    filter(...args) {
        return this.#keys.filter(...args);
    }
    find(...args) {
        return this.#keys.find(...args);
    }
    every(...args) {
        return this.#keys.every(...args);
    }
    some(...args) {
        return this.#keys.some(...args);
    }
    map(...args) {
        return this.#keys.map(...args);
    }
    forEach(...args) {
        return this.#keys.forEach(...args);
    }
    reduce(...args) {
        return this.#keys.reduce(...args);
    }
    sort(...args) {
        return this.#keys.sort(...args);
    }
    *[Symbol.iterator]() {
        for (const key of this.#keys){
            yield key;
        }
    }
};
}}),
"[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/merge.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const isPlainObject = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/is_plain_object.js [app-rsc] (ecmascript)");
function merge(target, ...sources) {
    for (const source of sources){
        if (!isPlainObject(source)) {
            continue;
        }
        for (const [key, value] of Object.entries(source)){
            /* istanbul ignore if */ if (key === '__proto__' || key === 'constructor') {
                continue;
            }
            if (isPlainObject(target[key]) && isPlainObject(value)) {
                target[key] = merge(target[key], value);
            } else if (typeof value !== 'undefined') {
                target[key] = value;
            }
        }
    }
    return target;
}
module.exports = merge;
}}),
"[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/client.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const jose = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/index.js [app-rsc] (ecmascript)");
const { RPError } = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/errors.js [app-rsc] (ecmascript)");
const { assertIssuerConfiguration } = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/assert.js [app-rsc] (ecmascript)");
const { random } = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/generators.js [app-rsc] (ecmascript)");
const now = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/unix_timestamp.js [app-rsc] (ecmascript)");
const request = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/request.js [app-rsc] (ecmascript)");
const { keystores } = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/weak_cache.js [app-rsc] (ecmascript)");
const merge = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/merge.js [app-rsc] (ecmascript)");
// TODO: in v6.x additionally encode the `- _ . ! ~ * ' ( )` characters
// https://github.com/panva/node-openid-client/commit/5a2ea80ef5e59ec0c03dbd97d82f551e24a9d348
const formUrlEncode = (value)=>encodeURIComponent(value).replace(/%20/g, '+');
async function clientAssertion(endpoint, payload) {
    let alg = this[`${endpoint}_endpoint_auth_signing_alg`];
    if (!alg) {
        assertIssuerConfiguration(this.issuer, `${endpoint}_endpoint_auth_signing_alg_values_supported`);
    }
    if (this[`${endpoint}_endpoint_auth_method`] === 'client_secret_jwt') {
        if (!alg) {
            const supported = this.issuer[`${endpoint}_endpoint_auth_signing_alg_values_supported`];
            alg = Array.isArray(supported) && supported.find((signAlg)=>/^HS(?:256|384|512)/.test(signAlg));
        }
        if (!alg) {
            throw new RPError(`failed to determine a JWS Algorithm to use for ${this[`${endpoint}_endpoint_auth_method`]} Client Assertion`);
        }
        return new jose.CompactSign(Buffer.from(JSON.stringify(payload))).setProtectedHeader({
            alg
        }).sign(this.secretForAlg(alg));
    }
    const keystore = await keystores.get(this);
    if (!keystore) {
        throw new TypeError('no client jwks provided for signing a client assertion with');
    }
    if (!alg) {
        const supported = this.issuer[`${endpoint}_endpoint_auth_signing_alg_values_supported`];
        alg = Array.isArray(supported) && supported.find((signAlg)=>keystore.get({
                alg: signAlg,
                use: 'sig'
            }));
    }
    if (!alg) {
        throw new RPError(`failed to determine a JWS Algorithm to use for ${this[`${endpoint}_endpoint_auth_method`]} Client Assertion`);
    }
    const key = keystore.get({
        alg,
        use: 'sig'
    });
    if (!key) {
        throw new RPError(`no key found in client jwks to sign a client assertion with using alg ${alg}`);
    }
    return new jose.CompactSign(Buffer.from(JSON.stringify(payload))).setProtectedHeader({
        alg,
        kid: key.jwk && key.jwk.kid
    }).sign(await key.keyObject(alg));
}
async function authFor(endpoint, { clientAssertionPayload } = {}) {
    const authMethod = this[`${endpoint}_endpoint_auth_method`];
    switch(authMethod){
        case 'self_signed_tls_client_auth':
        case 'tls_client_auth':
        case 'none':
            return {
                form: {
                    client_id: this.client_id
                }
            };
        case 'client_secret_post':
            if (typeof this.client_secret !== 'string') {
                throw new TypeError('client_secret_post client authentication method requires a client_secret');
            }
            return {
                form: {
                    client_id: this.client_id,
                    client_secret: this.client_secret
                }
            };
        case 'private_key_jwt':
        case 'client_secret_jwt':
            {
                const timestamp = now();
                const assertion = await clientAssertion.call(this, endpoint, {
                    iat: timestamp,
                    exp: timestamp + 60,
                    jti: random(),
                    iss: this.client_id,
                    sub: this.client_id,
                    aud: this.issuer.issuer,
                    ...clientAssertionPayload
                });
                return {
                    form: {
                        client_id: this.client_id,
                        client_assertion: assertion,
                        client_assertion_type: 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer'
                    }
                };
            }
        case 'client_secret_basic':
            {
                // This is correct behaviour, see https://tools.ietf.org/html/rfc6749#section-2.3.1 and the
                // related appendix. (also https://github.com/panva/node-openid-client/pull/91)
                // > The client identifier is encoded using the
                // > "application/x-www-form-urlencoded" encoding algorithm per
                // > Appendix B, and the encoded value is used as the username; the client
                // > password is encoded using the same algorithm and used as the
                // > password.
                if (typeof this.client_secret !== 'string') {
                    throw new TypeError('client_secret_basic client authentication method requires a client_secret');
                }
                const encoded = `${formUrlEncode(this.client_id)}:${formUrlEncode(this.client_secret)}`;
                const value = Buffer.from(encoded).toString('base64');
                return {
                    headers: {
                        Authorization: `Basic ${value}`
                    }
                };
            }
        default:
            {
                throw new TypeError(`missing, or unsupported, ${endpoint}_endpoint_auth_method`);
            }
    }
}
function resolveResponseType() {
    const { length, 0: value } = this.response_types;
    if (length === 1) {
        return value;
    }
    return undefined;
}
function resolveRedirectUri() {
    const { length, 0: value } = this.redirect_uris || [];
    if (length === 1) {
        return value;
    }
    return undefined;
}
async function authenticatedPost(endpoint, opts, { clientAssertionPayload, endpointAuthMethod = endpoint, DPoP } = {}) {
    const auth = await authFor.call(this, endpointAuthMethod, {
        clientAssertionPayload
    });
    const requestOpts = merge(opts, auth);
    const mTLS = this[`${endpointAuthMethod}_endpoint_auth_method`].includes('tls_client_auth') || endpoint === 'token' && this.tls_client_certificate_bound_access_tokens;
    let targetUrl;
    if (mTLS && this.issuer.mtls_endpoint_aliases) {
        targetUrl = this.issuer.mtls_endpoint_aliases[`${endpoint}_endpoint`];
    }
    targetUrl = targetUrl || this.issuer[`${endpoint}_endpoint`];
    if ('form' in requestOpts) {
        for (const [key, value] of Object.entries(requestOpts.form)){
            if (typeof value === 'undefined') {
                delete requestOpts.form[key];
            }
        }
    }
    return request.call(this, {
        ...requestOpts,
        method: 'POST',
        url: targetUrl,
        headers: {
            ...endpoint !== 'revocation' ? {
                Accept: 'application/json'
            } : undefined,
            ...requestOpts.headers
        }
    }, {
        mTLS,
        DPoP
    });
}
module.exports = {
    resolveResponseType,
    resolveRedirectUri,
    authFor,
    authenticatedPost
};
}}),
"[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/issuer.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const objectHash = __turbopack_context__.r("[project]/node_modules/.pnpm/object-hash@2.2.0/node_modules/object-hash/index.js [app-rsc] (ecmascript)");
const LRU = __turbopack_context__.r("[project]/node_modules/.pnpm/lru-cache@6.0.0/node_modules/lru-cache/index.js [app-rsc] (ecmascript)");
const { RPError } = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/errors.js [app-rsc] (ecmascript)");
const { assertIssuerConfiguration } = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/assert.js [app-rsc] (ecmascript)");
const KeyStore = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/keystore.js [app-rsc] (ecmascript)");
const { keystores } = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/weak_cache.js [app-rsc] (ecmascript)");
const processResponse = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/process_response.js [app-rsc] (ecmascript)");
const request = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/request.js [app-rsc] (ecmascript)");
const inFlight = new WeakMap();
const caches = new WeakMap();
const lrus = (ctx)=>{
    if (!caches.has(ctx)) {
        caches.set(ctx, new LRU({
            max: 100
        }));
    }
    return caches.get(ctx);
};
async function getKeyStore(reload = false) {
    assertIssuerConfiguration(this, 'jwks_uri');
    const keystore = keystores.get(this);
    const cache = lrus(this);
    if (reload || !keystore) {
        if (inFlight.has(this)) {
            return inFlight.get(this);
        }
        cache.reset();
        inFlight.set(this, (async ()=>{
            const response = await request.call(this, {
                method: 'GET',
                responseType: 'json',
                url: this.jwks_uri,
                headers: {
                    Accept: 'application/json, application/jwk-set+json'
                }
            }).finally(()=>{
                inFlight.delete(this);
            });
            const jwks = processResponse(response);
            const joseKeyStore = KeyStore.fromJWKS(jwks, {
                onlyPublic: true
            });
            cache.set('throttle', true, 60 * 1000);
            keystores.set(this, joseKeyStore);
            return joseKeyStore;
        })());
        return inFlight.get(this);
    }
    return keystore;
}
async function queryKeyStore({ kid, kty, alg, use }, { allowMulti = false } = {}) {
    const cache = lrus(this);
    const def = {
        kid,
        kty,
        alg,
        use
    };
    const defHash = objectHash(def, {
        algorithm: 'sha256',
        ignoreUnknown: true,
        unorderedArrays: true,
        unorderedSets: true,
        respectType: false
    });
    // refresh keystore on every unknown key but also only upto once every minute
    const freshJwksUri = cache.get(defHash) || cache.get('throttle');
    const keystore = await getKeyStore.call(this, !freshJwksUri);
    const keys = keystore.all(def);
    delete def.use;
    if (keys.length === 0) {
        throw new RPError({
            printf: [
                "no valid key found in issuer's jwks_uri for key parameters %j",
                def
            ],
            jwks: keystore
        });
    }
    if (!allowMulti && keys.length > 1 && !kid) {
        throw new RPError({
            printf: [
                "multiple matching keys found in issuer's jwks_uri for key parameters %j, kid must be provided in this case",
                def
            ],
            jwks: keystore
        });
    }
    cache.set(defHash, true);
    return keys;
}
module.exports.queryKeyStore = queryKeyStore;
module.exports.keystore = getKeyStore;
}}),
"[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/device_flow_handle.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const { inspect } = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
const { RPError, OPError } = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/errors.js [app-rsc] (ecmascript)");
const now = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/unix_timestamp.js [app-rsc] (ecmascript)");
class DeviceFlowHandle {
    #aborted;
    #client;
    #clientAssertionPayload;
    #DPoP;
    #exchangeBody;
    #expires_at;
    #interval;
    #maxAge;
    #response;
    constructor({ client, exchangeBody, clientAssertionPayload, response, maxAge, DPoP }){
        [
            'verification_uri',
            'user_code',
            'device_code'
        ].forEach((prop)=>{
            if (typeof response[prop] !== 'string' || !response[prop]) {
                throw new RPError(`expected ${prop} string to be returned by Device Authorization Response, got %j`, response[prop]);
            }
        });
        if (!Number.isSafeInteger(response.expires_in)) {
            throw new RPError('expected expires_in number to be returned by Device Authorization Response, got %j', response.expires_in);
        }
        this.#expires_at = now() + response.expires_in;
        this.#client = client;
        this.#DPoP = DPoP;
        this.#maxAge = maxAge;
        this.#exchangeBody = exchangeBody;
        this.#clientAssertionPayload = clientAssertionPayload;
        this.#response = response;
        this.#interval = response.interval * 1000 || 5000;
    }
    abort() {
        this.#aborted = true;
    }
    async poll({ signal } = {}) {
        if (signal && signal.aborted || this.#aborted) {
            throw new RPError('polling aborted');
        }
        if (this.expired()) {
            throw new RPError('the device code %j has expired and the device authorization session has concluded', this.device_code);
        }
        await new Promise((resolve)=>setTimeout(resolve, this.#interval));
        let tokenset;
        try {
            tokenset = await this.#client.grant({
                ...this.#exchangeBody,
                grant_type: 'urn:ietf:params:oauth:grant-type:device_code',
                device_code: this.device_code
            }, {
                clientAssertionPayload: this.#clientAssertionPayload,
                DPoP: this.#DPoP
            });
        } catch (err) {
            switch(err instanceof OPError && err.error){
                case 'slow_down':
                    this.#interval += 5000;
                case 'authorization_pending':
                    return this.poll({
                        signal
                    });
                default:
                    throw err;
            }
        }
        if ('id_token' in tokenset) {
            await this.#client.decryptIdToken(tokenset);
            await this.#client.validateIdToken(tokenset, undefined, 'token', this.#maxAge);
        }
        return tokenset;
    }
    get device_code() {
        return this.#response.device_code;
    }
    get user_code() {
        return this.#response.user_code;
    }
    get verification_uri() {
        return this.#response.verification_uri;
    }
    get verification_uri_complete() {
        return this.#response.verification_uri_complete;
    }
    get expires_in() {
        return Math.max.apply(null, [
            this.#expires_at - now(),
            0
        ]);
    }
    expired() {
        return this.expires_in === 0;
    }
    /* istanbul ignore next */ [inspect.custom]() {
        return `${this.constructor.name} ${inspect(this.#response, {
            depth: Infinity,
            colors: process.stdout.isTTY,
            compact: false,
            sorted: true
        })}`;
    }
}
module.exports = DeviceFlowHandle;
}}),
"[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/client.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const { inspect } = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
const stdhttp = __turbopack_context__.r("[externals]/http [external] (http, cjs)");
const crypto = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
const { strict: assert } = __turbopack_context__.r("[externals]/assert [external] (assert, cjs)");
const querystring = __turbopack_context__.r("[externals]/querystring [external] (querystring, cjs)");
const url = __turbopack_context__.r("[externals]/url [external] (url, cjs)");
const { URL, URLSearchParams } = __turbopack_context__.r("[externals]/url [external] (url, cjs)");
const jose = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/index.js [app-rsc] (ecmascript)");
const tokenHash = __turbopack_context__.r("[project]/node_modules/.pnpm/oidc-token-hash@5.1.0/node_modules/oidc-token-hash/lib/index.js [app-rsc] (ecmascript)");
const isKeyObject = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/is_key_object.js [app-rsc] (ecmascript)");
const decodeJWT = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/decode_jwt.js [app-rsc] (ecmascript)");
const base64url = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/base64url.js [app-rsc] (ecmascript)");
const defaults = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/defaults.js [app-rsc] (ecmascript)");
const parseWwwAuthenticate = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/www_authenticate_parser.js [app-rsc] (ecmascript)");
const { assertSigningAlgValuesSupport, assertIssuerConfiguration } = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/assert.js [app-rsc] (ecmascript)");
const pick = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/pick.js [app-rsc] (ecmascript)");
const isPlainObject = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/is_plain_object.js [app-rsc] (ecmascript)");
const processResponse = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/process_response.js [app-rsc] (ecmascript)");
const TokenSet = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/token_set.js [app-rsc] (ecmascript)");
const { OPError, RPError } = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/errors.js [app-rsc] (ecmascript)");
const now = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/unix_timestamp.js [app-rsc] (ecmascript)");
const { random } = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/generators.js [app-rsc] (ecmascript)");
const request = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/request.js [app-rsc] (ecmascript)");
const { CLOCK_TOLERANCE } = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/consts.js [app-rsc] (ecmascript)");
const { keystores } = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/weak_cache.js [app-rsc] (ecmascript)");
const KeyStore = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/keystore.js [app-rsc] (ecmascript)");
const clone = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/deep_clone.js [app-rsc] (ecmascript)");
const { authenticatedPost, resolveResponseType, resolveRedirectUri } = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/client.js [app-rsc] (ecmascript)");
const { queryKeyStore } = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/issuer.js [app-rsc] (ecmascript)");
const DeviceFlowHandle = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/device_flow_handle.js [app-rsc] (ecmascript)");
const [major, minor] = process.version.slice(1).split('.').map((str)=>parseInt(str, 10));
const rsaPssParams = major >= 17 || major === 16 && minor >= 9;
const retryAttempt = Symbol();
const skipNonceCheck = Symbol();
const skipMaxAgeCheck = Symbol();
function pickCb(input) {
    return pick(input, 'access_token', 'code', 'error_description', 'error_uri', 'error', 'expires_in', 'id_token', 'iss', 'response', 'session_state', 'state', 'token_type');
}
function authorizationHeaderValue(token, tokenType = 'Bearer') {
    return `${tokenType} ${token}`;
}
function getSearchParams(input) {
    const parsed = url.parse(input);
    if (!parsed.search) return {};
    return querystring.parse(parsed.search.substring(1));
}
function verifyPresence(payload, jwt, prop) {
    if (payload[prop] === undefined) {
        throw new RPError({
            message: `missing required JWT property ${prop}`,
            jwt
        });
    }
}
function authorizationParams(params) {
    const authParams = {
        client_id: this.client_id,
        scope: 'openid',
        response_type: resolveResponseType.call(this),
        redirect_uri: resolveRedirectUri.call(this),
        ...params
    };
    Object.entries(authParams).forEach(([key, value])=>{
        if (value === null || value === undefined) {
            delete authParams[key];
        } else if (key === 'claims' && typeof value === 'object') {
            authParams[key] = JSON.stringify(value);
        } else if (key === 'resource' && Array.isArray(value)) {
            authParams[key] = value;
        } else if (typeof value !== 'string') {
            authParams[key] = String(value);
        }
    });
    return authParams;
}
function getKeystore(jwks) {
    if (!isPlainObject(jwks) || !Array.isArray(jwks.keys) || jwks.keys.some((k)=>!isPlainObject(k) || !('kty' in k))) {
        throw new TypeError('jwks must be a JSON Web Key Set formatted object');
    }
    return KeyStore.fromJWKS(jwks, {
        onlyPrivate: true
    });
}
// if an OP doesnt support client_secret_basic but supports client_secret_post, use it instead
// this is in place to take care of most common pitfalls when first using discovered Issuers without
// the support for default values defined by Discovery 1.0
function checkBasicSupport(client, properties) {
    try {
        const supported = client.issuer.token_endpoint_auth_methods_supported;
        if (!supported.includes(properties.token_endpoint_auth_method)) {
            if (supported.includes('client_secret_post')) {
                properties.token_endpoint_auth_method = 'client_secret_post';
            }
        }
    } catch (err) {}
}
function handleCommonMistakes(client, metadata, properties) {
    if (!metadata.token_endpoint_auth_method) {
        // if no explicit value was provided
        checkBasicSupport(client, properties);
    }
    // :fp: c'mon people... RTFM
    if (metadata.redirect_uri) {
        if (metadata.redirect_uris) {
            throw new TypeError('provide a redirect_uri or redirect_uris, not both');
        }
        properties.redirect_uris = [
            metadata.redirect_uri
        ];
        delete properties.redirect_uri;
    }
    if (metadata.response_type) {
        if (metadata.response_types) {
            throw new TypeError('provide a response_type or response_types, not both');
        }
        properties.response_types = [
            metadata.response_type
        ];
        delete properties.response_type;
    }
}
function getDefaultsForEndpoint(endpoint, issuer, properties) {
    if (!issuer[`${endpoint}_endpoint`]) return;
    const tokenEndpointAuthMethod = properties.token_endpoint_auth_method;
    const tokenEndpointAuthSigningAlg = properties.token_endpoint_auth_signing_alg;
    const eam = `${endpoint}_endpoint_auth_method`;
    const easa = `${endpoint}_endpoint_auth_signing_alg`;
    if (properties[eam] === undefined && properties[easa] === undefined) {
        if (tokenEndpointAuthMethod !== undefined) {
            properties[eam] = tokenEndpointAuthMethod;
        }
        if (tokenEndpointAuthSigningAlg !== undefined) {
            properties[easa] = tokenEndpointAuthSigningAlg;
        }
    }
}
class BaseClient {
    #metadata;
    #issuer;
    #aadIssValidation;
    #additionalAuthorizedParties;
    constructor(issuer, aadIssValidation, metadata = {}, jwks, options){
        this.#metadata = new Map();
        this.#issuer = issuer;
        this.#aadIssValidation = aadIssValidation;
        if (typeof metadata.client_id !== 'string' || !metadata.client_id) {
            throw new TypeError('client_id is required');
        }
        const properties = {
            grant_types: [
                'authorization_code'
            ],
            id_token_signed_response_alg: 'RS256',
            authorization_signed_response_alg: 'RS256',
            response_types: [
                'code'
            ],
            token_endpoint_auth_method: 'client_secret_basic',
            ...this.fapi1() ? {
                grant_types: [
                    'authorization_code',
                    'implicit'
                ],
                id_token_signed_response_alg: 'PS256',
                authorization_signed_response_alg: 'PS256',
                response_types: [
                    'code id_token'
                ],
                tls_client_certificate_bound_access_tokens: true,
                token_endpoint_auth_method: undefined
            } : undefined,
            ...this.fapi2() ? {
                id_token_signed_response_alg: 'PS256',
                authorization_signed_response_alg: 'PS256',
                token_endpoint_auth_method: undefined
            } : undefined,
            ...metadata
        };
        if (this.fapi()) {
            switch(properties.token_endpoint_auth_method){
                case 'self_signed_tls_client_auth':
                case 'tls_client_auth':
                    break;
                case 'private_key_jwt':
                    if (!jwks) {
                        throw new TypeError('jwks is required');
                    }
                    break;
                case undefined:
                    throw new TypeError('token_endpoint_auth_method is required');
                default:
                    throw new TypeError('invalid or unsupported token_endpoint_auth_method');
            }
        }
        if (this.fapi2()) {
            if (properties.tls_client_certificate_bound_access_tokens && properties.dpop_bound_access_tokens) {
                throw new TypeError('either tls_client_certificate_bound_access_tokens or dpop_bound_access_tokens must be set to true');
            }
            if (!properties.tls_client_certificate_bound_access_tokens && !properties.dpop_bound_access_tokens) {
                throw new TypeError('either tls_client_certificate_bound_access_tokens or dpop_bound_access_tokens must be set to true');
            }
        }
        handleCommonMistakes(this, metadata, properties);
        assertSigningAlgValuesSupport('token', this.issuer, properties);
        [
            'introspection',
            'revocation'
        ].forEach((endpoint)=>{
            getDefaultsForEndpoint(endpoint, this.issuer, properties);
            assertSigningAlgValuesSupport(endpoint, this.issuer, properties);
        });
        Object.entries(properties).forEach(([key, value])=>{
            this.#metadata.set(key, value);
            if (!this[key]) {
                Object.defineProperty(this, key, {
                    get () {
                        return this.#metadata.get(key);
                    },
                    enumerable: true
                });
            }
        });
        if (jwks !== undefined) {
            const keystore = getKeystore.call(this, jwks);
            keystores.set(this, keystore);
        }
        if (options != null && options.additionalAuthorizedParties) {
            this.#additionalAuthorizedParties = clone(options.additionalAuthorizedParties);
        }
        this[CLOCK_TOLERANCE] = 0;
    }
    authorizationUrl(params = {}) {
        if (!isPlainObject(params)) {
            throw new TypeError('params must be a plain object');
        }
        assertIssuerConfiguration(this.issuer, 'authorization_endpoint');
        const target = new URL(this.issuer.authorization_endpoint);
        for (const [name, value] of Object.entries(authorizationParams.call(this, params))){
            if (Array.isArray(value)) {
                target.searchParams.delete(name);
                for (const member of value){
                    target.searchParams.append(name, member);
                }
            } else {
                target.searchParams.set(name, value);
            }
        }
        // TODO: is the replace needed?
        return target.href.replace(/\+/g, '%20');
    }
    authorizationPost(params = {}) {
        if (!isPlainObject(params)) {
            throw new TypeError('params must be a plain object');
        }
        const inputs = authorizationParams.call(this, params);
        const formInputs = Object.keys(inputs).map((name)=>`<input type="hidden" name="${name}" value="${inputs[name]}"/>`).join('\n');
        return `<!DOCTYPE html>
<head>
<title>Requesting Authorization</title>
</head>
<body onload="javascript:document.forms[0].submit()">
<form method="post" action="${this.issuer.authorization_endpoint}">
  ${formInputs}
</form>
</body>
</html>`;
    }
    endSessionUrl(params = {}) {
        assertIssuerConfiguration(this.issuer, 'end_session_endpoint');
        const { 0: postLogout, length } = this.post_logout_redirect_uris || [];
        const { post_logout_redirect_uri = length === 1 ? postLogout : undefined } = params;
        let id_token_hint;
        ({ id_token_hint, ...params } = params);
        if (id_token_hint instanceof TokenSet) {
            if (!id_token_hint.id_token) {
                throw new TypeError('id_token not present in TokenSet');
            }
            id_token_hint = id_token_hint.id_token;
        }
        const target = url.parse(this.issuer.end_session_endpoint);
        const query = defaults(getSearchParams(this.issuer.end_session_endpoint), params, {
            post_logout_redirect_uri,
            client_id: this.client_id
        }, {
            id_token_hint
        });
        Object.entries(query).forEach(([key, value])=>{
            if (value === null || value === undefined) {
                delete query[key];
            }
        });
        target.search = null;
        target.query = query;
        return url.format(target);
    }
    callbackParams(input) {
        const isIncomingMessage = input instanceof stdhttp.IncomingMessage || input && input.method && input.url;
        const isString = typeof input === 'string';
        if (!isString && !isIncomingMessage) {
            throw new TypeError('#callbackParams only accepts string urls, http.IncomingMessage or a lookalike');
        }
        if (isIncomingMessage) {
            switch(input.method){
                case 'GET':
                    return pickCb(getSearchParams(input.url));
                case 'POST':
                    if (input.body === undefined) {
                        throw new TypeError('incoming message body missing, include a body parser prior to this method call');
                    }
                    switch(typeof input.body){
                        case 'object':
                        case 'string':
                            if (Buffer.isBuffer(input.body)) {
                                return pickCb(querystring.parse(input.body.toString('utf-8')));
                            }
                            if (typeof input.body === 'string') {
                                return pickCb(querystring.parse(input.body));
                            }
                            return pickCb(input.body);
                        default:
                            throw new TypeError('invalid IncomingMessage body object');
                    }
                default:
                    throw new TypeError('invalid IncomingMessage method');
            }
        } else {
            return pickCb(getSearchParams(input));
        }
    }
    async callback(redirectUri, parameters, checks = {}, { exchangeBody, clientAssertionPayload, DPoP } = {}) {
        let params = pickCb(parameters);
        if (checks.jarm && !('response' in parameters)) {
            throw new RPError({
                message: 'expected a JARM response',
                checks,
                params
            });
        } else if ('response' in parameters) {
            const decrypted = await this.decryptJARM(params.response);
            params = await this.validateJARM(decrypted);
        }
        if (this.default_max_age && !checks.max_age) {
            checks.max_age = this.default_max_age;
        }
        if (params.state && !checks.state) {
            throw new TypeError('checks.state argument is missing');
        }
        if (!params.state && checks.state) {
            throw new RPError({
                message: 'state missing from the response',
                checks,
                params
            });
        }
        if (checks.state !== params.state) {
            throw new RPError({
                printf: [
                    'state mismatch, expected %s, got: %s',
                    checks.state,
                    params.state
                ],
                checks,
                params
            });
        }
        if ('iss' in params) {
            assertIssuerConfiguration(this.issuer, 'issuer');
            if (params.iss !== this.issuer.issuer) {
                throw new RPError({
                    printf: [
                        'iss mismatch, expected %s, got: %s',
                        this.issuer.issuer,
                        params.iss
                    ],
                    params
                });
            }
        } else if (this.issuer.authorization_response_iss_parameter_supported && !('id_token' in params) && !('response' in parameters)) {
            throw new RPError({
                message: 'iss missing from the response',
                params
            });
        }
        if (params.error) {
            throw new OPError(params);
        }
        const RESPONSE_TYPE_REQUIRED_PARAMS = {
            code: [
                'code'
            ],
            id_token: [
                'id_token'
            ],
            token: [
                'access_token',
                'token_type'
            ]
        };
        if (checks.response_type) {
            for (const type of checks.response_type.split(' ')){
                if (type === 'none') {
                    if (params.code || params.id_token || params.access_token) {
                        throw new RPError({
                            message: 'unexpected params encountered for "none" response',
                            checks,
                            params
                        });
                    }
                } else {
                    for (const param of RESPONSE_TYPE_REQUIRED_PARAMS[type]){
                        if (!params[param]) {
                            throw new RPError({
                                message: `${param} missing from response`,
                                checks,
                                params
                            });
                        }
                    }
                }
            }
        }
        if (params.id_token) {
            const tokenset = new TokenSet(params);
            await this.decryptIdToken(tokenset);
            await this.validateIdToken(tokenset, checks.nonce, 'authorization', checks.max_age, checks.state);
            if (!params.code) {
                return tokenset;
            }
        }
        if (params.code) {
            const tokenset = await this.grant({
                ...exchangeBody,
                grant_type: 'authorization_code',
                code: params.code,
                redirect_uri: redirectUri,
                code_verifier: checks.code_verifier
            }, {
                clientAssertionPayload,
                DPoP
            });
            await this.decryptIdToken(tokenset);
            await this.validateIdToken(tokenset, checks.nonce, 'token', checks.max_age);
            if (params.session_state) {
                tokenset.session_state = params.session_state;
            }
            return tokenset;
        }
        return new TokenSet(params);
    }
    async oauthCallback(redirectUri, parameters, checks = {}, { exchangeBody, clientAssertionPayload, DPoP } = {}) {
        let params = pickCb(parameters);
        if (checks.jarm && !('response' in parameters)) {
            throw new RPError({
                message: 'expected a JARM response',
                checks,
                params
            });
        } else if ('response' in parameters) {
            const decrypted = await this.decryptJARM(params.response);
            params = await this.validateJARM(decrypted);
        }
        if (params.state && !checks.state) {
            throw new TypeError('checks.state argument is missing');
        }
        if (!params.state && checks.state) {
            throw new RPError({
                message: 'state missing from the response',
                checks,
                params
            });
        }
        if (checks.state !== params.state) {
            throw new RPError({
                printf: [
                    'state mismatch, expected %s, got: %s',
                    checks.state,
                    params.state
                ],
                checks,
                params
            });
        }
        if ('iss' in params) {
            assertIssuerConfiguration(this.issuer, 'issuer');
            if (params.iss !== this.issuer.issuer) {
                throw new RPError({
                    printf: [
                        'iss mismatch, expected %s, got: %s',
                        this.issuer.issuer,
                        params.iss
                    ],
                    params
                });
            }
        } else if (this.issuer.authorization_response_iss_parameter_supported && !('id_token' in params) && !('response' in parameters)) {
            throw new RPError({
                message: 'iss missing from the response',
                params
            });
        }
        if (params.error) {
            throw new OPError(params);
        }
        if (typeof params.id_token === 'string' && params.id_token.length) {
            throw new RPError({
                message: 'id_token detected in the response, you must use client.callback() instead of client.oauthCallback()',
                params
            });
        }
        delete params.id_token;
        const RESPONSE_TYPE_REQUIRED_PARAMS = {
            code: [
                'code'
            ],
            token: [
                'access_token',
                'token_type'
            ]
        };
        if (checks.response_type) {
            for (const type of checks.response_type.split(' ')){
                if (type === 'none') {
                    if (params.code || params.id_token || params.access_token) {
                        throw new RPError({
                            message: 'unexpected params encountered for "none" response',
                            checks,
                            params
                        });
                    }
                }
                if (RESPONSE_TYPE_REQUIRED_PARAMS[type]) {
                    for (const param of RESPONSE_TYPE_REQUIRED_PARAMS[type]){
                        if (!params[param]) {
                            throw new RPError({
                                message: `${param} missing from response`,
                                checks,
                                params
                            });
                        }
                    }
                }
            }
        }
        if (params.code) {
            const tokenset = await this.grant({
                ...exchangeBody,
                grant_type: 'authorization_code',
                code: params.code,
                redirect_uri: redirectUri,
                code_verifier: checks.code_verifier
            }, {
                clientAssertionPayload,
                DPoP
            });
            if (typeof tokenset.id_token === 'string' && tokenset.id_token.length) {
                throw new RPError({
                    message: 'id_token detected in the response, you must use client.callback() instead of client.oauthCallback()',
                    params
                });
            }
            delete tokenset.id_token;
            return tokenset;
        }
        return new TokenSet(params);
    }
    async decryptIdToken(token) {
        if (!this.id_token_encrypted_response_alg) {
            return token;
        }
        let idToken = token;
        if (idToken instanceof TokenSet) {
            if (!idToken.id_token) {
                throw new TypeError('id_token not present in TokenSet');
            }
            idToken = idToken.id_token;
        }
        const expectedAlg = this.id_token_encrypted_response_alg;
        const expectedEnc = this.id_token_encrypted_response_enc;
        const result = await this.decryptJWE(idToken, expectedAlg, expectedEnc);
        if (token instanceof TokenSet) {
            token.id_token = result;
            return token;
        }
        return result;
    }
    async validateJWTUserinfo(body) {
        const expectedAlg = this.userinfo_signed_response_alg;
        return this.validateJWT(body, expectedAlg, []);
    }
    async decryptJARM(response) {
        if (!this.authorization_encrypted_response_alg) {
            return response;
        }
        const expectedAlg = this.authorization_encrypted_response_alg;
        const expectedEnc = this.authorization_encrypted_response_enc;
        return this.decryptJWE(response, expectedAlg, expectedEnc);
    }
    async decryptJWTUserinfo(body) {
        if (!this.userinfo_encrypted_response_alg) {
            return body;
        }
        const expectedAlg = this.userinfo_encrypted_response_alg;
        const expectedEnc = this.userinfo_encrypted_response_enc;
        return this.decryptJWE(body, expectedAlg, expectedEnc);
    }
    async decryptJWE(jwe, expectedAlg, expectedEnc = 'A128CBC-HS256') {
        const header = JSON.parse(base64url.decode(jwe.split('.')[0]));
        if (header.alg !== expectedAlg) {
            throw new RPError({
                printf: [
                    'unexpected JWE alg received, expected %s, got: %s',
                    expectedAlg,
                    header.alg
                ],
                jwt: jwe
            });
        }
        if (header.enc !== expectedEnc) {
            throw new RPError({
                printf: [
                    'unexpected JWE enc received, expected %s, got: %s',
                    expectedEnc,
                    header.enc
                ],
                jwt: jwe
            });
        }
        const getPlaintext = (result)=>new TextDecoder().decode(result.plaintext);
        let plaintext;
        if (expectedAlg.match(/^(?:RSA|ECDH)/)) {
            const keystore = await keystores.get(this);
            const protectedHeader = jose.decodeProtectedHeader(jwe);
            for (const key of keystore.all({
                ...protectedHeader,
                use: 'enc'
            })){
                plaintext = await jose.compactDecrypt(jwe, await key.keyObject(protectedHeader.alg)).then(getPlaintext, ()=>{});
                if (plaintext) break;
            }
        } else {
            plaintext = await jose.compactDecrypt(jwe, this.secretForAlg(expectedAlg === 'dir' ? expectedEnc : expectedAlg)).then(getPlaintext, ()=>{});
        }
        if (!plaintext) {
            throw new RPError({
                message: 'failed to decrypt JWE',
                jwt: jwe
            });
        }
        return plaintext;
    }
    async validateIdToken(tokenSet, nonce, returnedBy, maxAge, state) {
        let idToken = tokenSet;
        const expectedAlg = this.id_token_signed_response_alg;
        const isTokenSet = idToken instanceof TokenSet;
        if (isTokenSet) {
            if (!idToken.id_token) {
                throw new TypeError('id_token not present in TokenSet');
            }
            idToken = idToken.id_token;
        }
        idToken = String(idToken);
        const timestamp = now();
        const { protected: header, payload, key } = await this.validateJWT(idToken, expectedAlg);
        if (typeof maxAge === 'number' || maxAge !== skipMaxAgeCheck && this.require_auth_time) {
            if (!payload.auth_time) {
                throw new RPError({
                    message: 'missing required JWT property auth_time',
                    jwt: idToken
                });
            }
            if (typeof payload.auth_time !== 'number') {
                throw new RPError({
                    message: 'JWT auth_time claim must be a JSON numeric value',
                    jwt: idToken
                });
            }
        }
        if (typeof maxAge === 'number' && payload.auth_time + maxAge < timestamp - this[CLOCK_TOLERANCE]) {
            throw new RPError({
                printf: [
                    'too much time has elapsed since the last End-User authentication, max_age %i, auth_time: %i, now %i',
                    maxAge,
                    payload.auth_time,
                    timestamp - this[CLOCK_TOLERANCE]
                ],
                now: timestamp,
                tolerance: this[CLOCK_TOLERANCE],
                auth_time: payload.auth_time,
                jwt: idToken
            });
        }
        if (nonce !== skipNonceCheck && (payload.nonce || nonce !== undefined) && payload.nonce !== nonce) {
            throw new RPError({
                printf: [
                    'nonce mismatch, expected %s, got: %s',
                    nonce,
                    payload.nonce
                ],
                jwt: idToken
            });
        }
        if (returnedBy === 'authorization') {
            if (!payload.at_hash && tokenSet.access_token) {
                throw new RPError({
                    message: 'missing required property at_hash',
                    jwt: idToken
                });
            }
            if (!payload.c_hash && tokenSet.code) {
                throw new RPError({
                    message: 'missing required property c_hash',
                    jwt: idToken
                });
            }
            if (this.fapi1()) {
                if (!payload.s_hash && (tokenSet.state || state)) {
                    throw new RPError({
                        message: 'missing required property s_hash',
                        jwt: idToken
                    });
                }
            }
            if (payload.s_hash) {
                if (!state) {
                    throw new TypeError('cannot verify s_hash, "checks.state" property not provided');
                }
                try {
                    tokenHash.validate({
                        claim: 's_hash',
                        source: 'state'
                    }, payload.s_hash, state, header.alg, key.jwk && key.jwk.crv);
                } catch (err) {
                    throw new RPError({
                        message: err.message,
                        jwt: idToken
                    });
                }
            }
        }
        if (this.fapi() && payload.iat < timestamp - 3600) {
            throw new RPError({
                printf: [
                    'JWT issued too far in the past, now %i, iat %i',
                    timestamp,
                    payload.iat
                ],
                now: timestamp,
                tolerance: this[CLOCK_TOLERANCE],
                iat: payload.iat,
                jwt: idToken
            });
        }
        if (tokenSet.access_token && payload.at_hash !== undefined) {
            try {
                tokenHash.validate({
                    claim: 'at_hash',
                    source: 'access_token'
                }, payload.at_hash, tokenSet.access_token, header.alg, key.jwk && key.jwk.crv);
            } catch (err) {
                throw new RPError({
                    message: err.message,
                    jwt: idToken
                });
            }
        }
        if (tokenSet.code && payload.c_hash !== undefined) {
            try {
                tokenHash.validate({
                    claim: 'c_hash',
                    source: 'code'
                }, payload.c_hash, tokenSet.code, header.alg, key.jwk && key.jwk.crv);
            } catch (err) {
                throw new RPError({
                    message: err.message,
                    jwt: idToken
                });
            }
        }
        return tokenSet;
    }
    async validateJWT(jwt, expectedAlg, required = [
        'iss',
        'sub',
        'aud',
        'exp',
        'iat'
    ]) {
        const isSelfIssued = this.issuer.issuer === 'https://self-issued.me';
        const timestamp = now();
        let header;
        let payload;
        try {
            ({ header, payload } = decodeJWT(jwt, {
                complete: true
            }));
        } catch (err) {
            throw new RPError({
                printf: [
                    'failed to decode JWT (%s: %s)',
                    err.name,
                    err.message
                ],
                jwt
            });
        }
        if (header.alg !== expectedAlg) {
            throw new RPError({
                printf: [
                    'unexpected JWT alg received, expected %s, got: %s',
                    expectedAlg,
                    header.alg
                ],
                jwt
            });
        }
        if (isSelfIssued) {
            required = [
                ...required,
                'sub_jwk'
            ];
        }
        required.forEach(verifyPresence.bind(undefined, payload, jwt));
        if (payload.iss !== undefined) {
            let expectedIss = this.issuer.issuer;
            if (this.#aadIssValidation) {
                expectedIss = this.issuer.issuer.replace('{tenantid}', payload.tid);
            }
            if (payload.iss !== expectedIss) {
                throw new RPError({
                    printf: [
                        'unexpected iss value, expected %s, got: %s',
                        expectedIss,
                        payload.iss
                    ],
                    jwt
                });
            }
        }
        if (payload.iat !== undefined) {
            if (typeof payload.iat !== 'number') {
                throw new RPError({
                    message: 'JWT iat claim must be a JSON numeric value',
                    jwt
                });
            }
        }
        if (payload.nbf !== undefined) {
            if (typeof payload.nbf !== 'number') {
                throw new RPError({
                    message: 'JWT nbf claim must be a JSON numeric value',
                    jwt
                });
            }
            if (payload.nbf > timestamp + this[CLOCK_TOLERANCE]) {
                throw new RPError({
                    printf: [
                        'JWT not active yet, now %i, nbf %i',
                        timestamp + this[CLOCK_TOLERANCE],
                        payload.nbf
                    ],
                    now: timestamp,
                    tolerance: this[CLOCK_TOLERANCE],
                    nbf: payload.nbf,
                    jwt
                });
            }
        }
        if (payload.exp !== undefined) {
            if (typeof payload.exp !== 'number') {
                throw new RPError({
                    message: 'JWT exp claim must be a JSON numeric value',
                    jwt
                });
            }
            if (timestamp - this[CLOCK_TOLERANCE] >= payload.exp) {
                throw new RPError({
                    printf: [
                        'JWT expired, now %i, exp %i',
                        timestamp - this[CLOCK_TOLERANCE],
                        payload.exp
                    ],
                    now: timestamp,
                    tolerance: this[CLOCK_TOLERANCE],
                    exp: payload.exp,
                    jwt
                });
            }
        }
        if (payload.aud !== undefined) {
            if (Array.isArray(payload.aud)) {
                if (payload.aud.length > 1 && !payload.azp) {
                    throw new RPError({
                        message: 'missing required JWT property azp',
                        jwt
                    });
                }
                if (!payload.aud.includes(this.client_id)) {
                    throw new RPError({
                        printf: [
                            'aud is missing the client_id, expected %s to be included in %j',
                            this.client_id,
                            payload.aud
                        ],
                        jwt
                    });
                }
            } else if (payload.aud !== this.client_id) {
                throw new RPError({
                    printf: [
                        'aud mismatch, expected %s, got: %s',
                        this.client_id,
                        payload.aud
                    ],
                    jwt
                });
            }
        }
        if (payload.azp !== undefined) {
            let additionalAuthorizedParties = this.#additionalAuthorizedParties;
            if (typeof additionalAuthorizedParties === 'string') {
                additionalAuthorizedParties = [
                    this.client_id,
                    additionalAuthorizedParties
                ];
            } else if (Array.isArray(additionalAuthorizedParties)) {
                additionalAuthorizedParties = [
                    this.client_id,
                    ...additionalAuthorizedParties
                ];
            } else {
                additionalAuthorizedParties = [
                    this.client_id
                ];
            }
            if (!additionalAuthorizedParties.includes(payload.azp)) {
                throw new RPError({
                    printf: [
                        'azp mismatch, got: %s',
                        payload.azp
                    ],
                    jwt
                });
            }
        }
        let keys;
        if (isSelfIssued) {
            try {
                assert(isPlainObject(payload.sub_jwk));
                const key = await jose.importJWK(payload.sub_jwk, header.alg);
                assert.equal(key.type, 'public');
                keys = [
                    {
                        keyObject () {
                            return key;
                        }
                    }
                ];
            } catch (err) {
                throw new RPError({
                    message: 'failed to use sub_jwk claim as an asymmetric JSON Web Key',
                    jwt
                });
            }
            if (await jose.calculateJwkThumbprint(payload.sub_jwk) !== payload.sub) {
                throw new RPError({
                    message: 'failed to match the subject with sub_jwk',
                    jwt
                });
            }
        } else if (header.alg.startsWith('HS')) {
            keys = [
                this.secretForAlg(header.alg)
            ];
        } else if (header.alg !== 'none') {
            keys = await queryKeyStore.call(this.issuer, {
                ...header,
                use: 'sig'
            });
        }
        if (!keys && header.alg === 'none') {
            return {
                protected: header,
                payload
            };
        }
        for (const key of keys){
            const verified = await jose.compactVerify(jwt, key instanceof Uint8Array ? key : await key.keyObject(header.alg)).catch(()=>{});
            if (verified) {
                return {
                    payload,
                    protected: verified.protectedHeader,
                    key
                };
            }
        }
        throw new RPError({
            message: 'failed to validate JWT signature',
            jwt
        });
    }
    async refresh(refreshToken, { exchangeBody, clientAssertionPayload, DPoP } = {}) {
        let token = refreshToken;
        if (token instanceof TokenSet) {
            if (!token.refresh_token) {
                throw new TypeError('refresh_token not present in TokenSet');
            }
            token = token.refresh_token;
        }
        const tokenset = await this.grant({
            ...exchangeBody,
            grant_type: 'refresh_token',
            refresh_token: String(token)
        }, {
            clientAssertionPayload,
            DPoP
        });
        if (tokenset.id_token) {
            await this.decryptIdToken(tokenset);
            await this.validateIdToken(tokenset, skipNonceCheck, 'token', skipMaxAgeCheck);
            if (refreshToken instanceof TokenSet && refreshToken.id_token) {
                const expectedSub = refreshToken.claims().sub;
                const actualSub = tokenset.claims().sub;
                if (actualSub !== expectedSub) {
                    throw new RPError({
                        printf: [
                            'sub mismatch, expected %s, got: %s',
                            expectedSub,
                            actualSub
                        ],
                        jwt: tokenset.id_token
                    });
                }
            }
        }
        return tokenset;
    }
    async requestResource(resourceUrl, accessToken, { method, headers, body, DPoP, tokenType = DPoP ? 'DPoP' : accessToken instanceof TokenSet ? accessToken.token_type : 'Bearer' } = {}, retry) {
        if (accessToken instanceof TokenSet) {
            if (!accessToken.access_token) {
                throw new TypeError('access_token not present in TokenSet');
            }
            accessToken = accessToken.access_token;
        }
        if (!accessToken) {
            throw new TypeError('no access token provided');
        } else if (typeof accessToken !== 'string') {
            throw new TypeError('invalid access token provided');
        }
        const requestOpts = {
            headers: {
                Authorization: authorizationHeaderValue(accessToken, tokenType),
                ...headers
            },
            body
        };
        const mTLS = !!this.tls_client_certificate_bound_access_tokens;
        const response = await request.call(this, {
            ...requestOpts,
            responseType: 'buffer',
            method,
            url: resourceUrl
        }, {
            accessToken,
            mTLS,
            DPoP
        });
        const wwwAuthenticate = response.headers['www-authenticate'];
        if (retry !== retryAttempt && wwwAuthenticate && wwwAuthenticate.toLowerCase().startsWith('dpop ') && parseWwwAuthenticate(wwwAuthenticate).error === 'use_dpop_nonce') {
            return this.requestResource(resourceUrl, accessToken, {
                method,
                headers,
                body,
                DPoP,
                tokenType
            });
        }
        return response;
    }
    async userinfo(accessToken, { method = 'GET', via = 'header', tokenType, params, DPoP } = {}) {
        assertIssuerConfiguration(this.issuer, 'userinfo_endpoint');
        const options = {
            tokenType,
            method: String(method).toUpperCase(),
            DPoP
        };
        if (options.method !== 'GET' && options.method !== 'POST') {
            throw new TypeError('#userinfo() method can only be POST or a GET');
        }
        if (via === 'body' && options.method !== 'POST') {
            throw new TypeError('can only send body on POST');
        }
        const jwt = !!(this.userinfo_signed_response_alg || this.userinfo_encrypted_response_alg);
        if (jwt) {
            options.headers = {
                Accept: 'application/jwt'
            };
        } else {
            options.headers = {
                Accept: 'application/json'
            };
        }
        const mTLS = !!this.tls_client_certificate_bound_access_tokens;
        let targetUrl;
        if (mTLS && this.issuer.mtls_endpoint_aliases) {
            targetUrl = this.issuer.mtls_endpoint_aliases.userinfo_endpoint;
        }
        targetUrl = new URL(targetUrl || this.issuer.userinfo_endpoint);
        if (via === 'body') {
            options.headers.Authorization = undefined;
            options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
            options.body = new URLSearchParams();
            options.body.append('access_token', accessToken instanceof TokenSet ? accessToken.access_token : accessToken);
        }
        // handle additional parameters, GET via querystring, POST via urlencoded body
        if (params) {
            if (options.method === 'GET') {
                Object.entries(params).forEach(([key, value])=>{
                    targetUrl.searchParams.append(key, value);
                });
            } else if (options.body) {
                // POST && via body
                Object.entries(params).forEach(([key, value])=>{
                    options.body.append(key, value);
                });
            } else {
                // POST && via header
                options.body = new URLSearchParams();
                options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
                Object.entries(params).forEach(([key, value])=>{
                    options.body.append(key, value);
                });
            }
        }
        if (options.body) {
            options.body = options.body.toString();
        }
        const response = await this.requestResource(targetUrl, accessToken, options);
        let parsed = processResponse(response, {
            bearer: true
        });
        if (jwt) {
            if (!/^application\/jwt/.test(response.headers['content-type'])) {
                throw new RPError({
                    message: 'expected application/jwt response from the userinfo_endpoint',
                    response
                });
            }
            const body = response.body.toString();
            const userinfo = await this.decryptJWTUserinfo(body);
            if (!this.userinfo_signed_response_alg) {
                try {
                    parsed = JSON.parse(userinfo);
                    assert(isPlainObject(parsed));
                } catch (err) {
                    throw new RPError({
                        message: 'failed to parse userinfo JWE payload as JSON',
                        jwt: userinfo
                    });
                }
            } else {
                ({ payload: parsed } = await this.validateJWTUserinfo(userinfo));
            }
        } else {
            try {
                parsed = JSON.parse(response.body);
            } catch (err) {
                Object.defineProperty(err, 'response', {
                    value: response
                });
                throw err;
            }
        }
        if (accessToken instanceof TokenSet && accessToken.id_token) {
            const expectedSub = accessToken.claims().sub;
            if (parsed.sub !== expectedSub) {
                throw new RPError({
                    printf: [
                        'userinfo sub mismatch, expected %s, got: %s',
                        expectedSub,
                        parsed.sub
                    ],
                    body: parsed,
                    jwt: accessToken.id_token
                });
            }
        }
        return parsed;
    }
    encryptionSecret(len) {
        const hash = len <= 256 ? 'sha256' : len <= 384 ? 'sha384' : len <= 512 ? 'sha512' : false;
        if (!hash) {
            throw new Error('unsupported symmetric encryption key derivation');
        }
        return crypto.createHash(hash).update(this.client_secret).digest().slice(0, len / 8);
    }
    secretForAlg(alg) {
        if (!this.client_secret) {
            throw new TypeError('client_secret is required');
        }
        if (/^A(\d{3})(?:GCM)?KW$/.test(alg)) {
            return this.encryptionSecret(parseInt(RegExp.$1, 10));
        }
        if (/^A(\d{3})(?:GCM|CBC-HS(\d{3}))$/.test(alg)) {
            return this.encryptionSecret(parseInt(RegExp.$2 || RegExp.$1, 10));
        }
        return new TextEncoder().encode(this.client_secret);
    }
    async grant(body, { clientAssertionPayload, DPoP } = {}, retry) {
        assertIssuerConfiguration(this.issuer, 'token_endpoint');
        const response = await authenticatedPost.call(this, 'token', {
            form: body,
            responseType: 'json'
        }, {
            clientAssertionPayload,
            DPoP
        });
        let responseBody;
        try {
            responseBody = processResponse(response);
        } catch (err) {
            if (retry !== retryAttempt && err instanceof OPError && err.error === 'use_dpop_nonce') {
                return this.grant(body, {
                    clientAssertionPayload,
                    DPoP
                }, retryAttempt);
            }
            throw err;
        }
        return new TokenSet(responseBody);
    }
    async deviceAuthorization(params = {}, { exchangeBody, clientAssertionPayload, DPoP } = {}) {
        assertIssuerConfiguration(this.issuer, 'device_authorization_endpoint');
        assertIssuerConfiguration(this.issuer, 'token_endpoint');
        const body = authorizationParams.call(this, {
            client_id: this.client_id,
            redirect_uri: null,
            response_type: null,
            ...params
        });
        const response = await authenticatedPost.call(this, 'device_authorization', {
            responseType: 'json',
            form: body
        }, {
            clientAssertionPayload,
            endpointAuthMethod: 'token'
        });
        const responseBody = processResponse(response);
        return new DeviceFlowHandle({
            client: this,
            exchangeBody,
            clientAssertionPayload,
            response: responseBody,
            maxAge: params.max_age,
            DPoP
        });
    }
    async revoke(token, hint, { revokeBody, clientAssertionPayload } = {}) {
        assertIssuerConfiguration(this.issuer, 'revocation_endpoint');
        if (hint !== undefined && typeof hint !== 'string') {
            throw new TypeError('hint must be a string');
        }
        const form = {
            ...revokeBody,
            token
        };
        if (hint) {
            form.token_type_hint = hint;
        }
        const response = await authenticatedPost.call(this, 'revocation', {
            form
        }, {
            clientAssertionPayload
        });
        processResponse(response, {
            body: false
        });
    }
    async introspect(token, hint, { introspectBody, clientAssertionPayload } = {}) {
        assertIssuerConfiguration(this.issuer, 'introspection_endpoint');
        if (hint !== undefined && typeof hint !== 'string') {
            throw new TypeError('hint must be a string');
        }
        const form = {
            ...introspectBody,
            token
        };
        if (hint) {
            form.token_type_hint = hint;
        }
        const response = await authenticatedPost.call(this, 'introspection', {
            form,
            responseType: 'json'
        }, {
            clientAssertionPayload
        });
        const responseBody = processResponse(response);
        return responseBody;
    }
    static async register(metadata, options = {}) {
        const { initialAccessToken, jwks, ...clientOptions } = options;
        assertIssuerConfiguration(this.issuer, 'registration_endpoint');
        if (jwks !== undefined && !(metadata.jwks || metadata.jwks_uri)) {
            const keystore = await getKeystore.call(this, jwks);
            metadata.jwks = keystore.toJWKS();
        }
        const response = await request.call(this, {
            headers: {
                Accept: 'application/json',
                ...initialAccessToken ? {
                    Authorization: authorizationHeaderValue(initialAccessToken)
                } : undefined
            },
            responseType: 'json',
            json: metadata,
            url: this.issuer.registration_endpoint,
            method: 'POST'
        });
        const responseBody = processResponse(response, {
            statusCode: 201,
            bearer: true
        });
        return new this(responseBody, jwks, clientOptions);
    }
    get metadata() {
        return clone(Object.fromEntries(this.#metadata.entries()));
    }
    static async fromUri(registrationClientUri, registrationAccessToken, jwks, clientOptions) {
        const response = await request.call(this, {
            method: 'GET',
            url: registrationClientUri,
            responseType: 'json',
            headers: {
                Authorization: authorizationHeaderValue(registrationAccessToken),
                Accept: 'application/json'
            }
        });
        const responseBody = processResponse(response, {
            bearer: true
        });
        return new this(responseBody, jwks, clientOptions);
    }
    async requestObject(requestObject = {}, { sign: signingAlgorithm = this.request_object_signing_alg || 'none', encrypt: { alg: eKeyManagement = this.request_object_encryption_alg, enc: eContentEncryption = this.request_object_encryption_enc || 'A128CBC-HS256' } = {} } = {}) {
        if (!isPlainObject(requestObject)) {
            throw new TypeError('requestObject must be a plain object');
        }
        let signed;
        let key;
        const unix = now();
        const header = {
            alg: signingAlgorithm,
            typ: 'oauth-authz-req+jwt'
        };
        const payload = JSON.stringify(defaults({}, requestObject, {
            iss: this.client_id,
            aud: this.issuer.issuer,
            client_id: this.client_id,
            jti: random(),
            iat: unix,
            exp: unix + 300,
            ...this.fapi() ? {
                nbf: unix
            } : undefined
        }));
        if (signingAlgorithm === 'none') {
            signed = [
                base64url.encode(JSON.stringify(header)),
                base64url.encode(payload),
                ''
            ].join('.');
        } else {
            const symmetric = signingAlgorithm.startsWith('HS');
            if (symmetric) {
                key = this.secretForAlg(signingAlgorithm);
            } else {
                const keystore = await keystores.get(this);
                if (!keystore) {
                    throw new TypeError(`no keystore present for client, cannot sign using alg ${signingAlgorithm}`);
                }
                key = keystore.get({
                    alg: signingAlgorithm,
                    use: 'sig'
                });
                if (!key) {
                    throw new TypeError(`no key to sign with found for alg ${signingAlgorithm}`);
                }
            }
            signed = await new jose.CompactSign(new TextEncoder().encode(payload)).setProtectedHeader({
                ...header,
                kid: symmetric ? undefined : key.jwk.kid
            }).sign(symmetric ? key : await key.keyObject(signingAlgorithm));
        }
        if (!eKeyManagement) {
            return signed;
        }
        const fields = {
            alg: eKeyManagement,
            enc: eContentEncryption,
            cty: 'oauth-authz-req+jwt'
        };
        if (fields.alg.match(/^(RSA|ECDH)/)) {
            [key] = await queryKeyStore.call(this.issuer, {
                alg: fields.alg,
                use: 'enc'
            }, {
                allowMulti: true
            });
        } else {
            key = this.secretForAlg(fields.alg === 'dir' ? fields.enc : fields.alg);
        }
        return new jose.CompactEncrypt(new TextEncoder().encode(signed)).setProtectedHeader({
            ...fields,
            kid: key instanceof Uint8Array ? undefined : key.jwk.kid
        }).encrypt(key instanceof Uint8Array ? key : await key.keyObject(fields.alg));
    }
    async pushedAuthorizationRequest(params = {}, { clientAssertionPayload } = {}) {
        assertIssuerConfiguration(this.issuer, 'pushed_authorization_request_endpoint');
        const body = {
            ...'request' in params ? params : authorizationParams.call(this, params),
            client_id: this.client_id
        };
        const response = await authenticatedPost.call(this, 'pushed_authorization_request', {
            responseType: 'json',
            form: body
        }, {
            clientAssertionPayload,
            endpointAuthMethod: 'token'
        });
        const responseBody = processResponse(response, {
            statusCode: 201
        });
        if (!('expires_in' in responseBody)) {
            throw new RPError({
                message: 'expected expires_in in Pushed Authorization Successful Response',
                response
            });
        }
        if (typeof responseBody.expires_in !== 'number') {
            throw new RPError({
                message: 'invalid expires_in value in Pushed Authorization Successful Response',
                response
            });
        }
        if (!('request_uri' in responseBody)) {
            throw new RPError({
                message: 'expected request_uri in Pushed Authorization Successful Response',
                response
            });
        }
        if (typeof responseBody.request_uri !== 'string') {
            throw new RPError({
                message: 'invalid request_uri value in Pushed Authorization Successful Response',
                response
            });
        }
        return responseBody;
    }
    get issuer() {
        return this.#issuer;
    }
    /* istanbul ignore next */ [inspect.custom]() {
        return `${this.constructor.name} ${inspect(this.metadata, {
            depth: Infinity,
            colors: process.stdout.isTTY,
            compact: false,
            sorted: true
        })}`;
    }
    fapi() {
        return this.fapi1() || this.fapi2();
    }
    fapi1() {
        return this.constructor.name === 'FAPI1Client';
    }
    fapi2() {
        return this.constructor.name === 'FAPI2Client';
    }
    async validateJARM(response) {
        const expectedAlg = this.authorization_signed_response_alg;
        const { payload } = await this.validateJWT(response, expectedAlg, [
            'iss',
            'exp',
            'aud'
        ]);
        return pickCb(payload);
    }
    /**
   * @name dpopProof
   * @api private
   */ async dpopProof(payload, privateKeyInput, accessToken) {
        if (!isPlainObject(payload)) {
            throw new TypeError('payload must be a plain object');
        }
        let privateKey;
        if (isKeyObject(privateKeyInput)) {
            privateKey = privateKeyInput;
        } else if (privateKeyInput[Symbol.toStringTag] === 'CryptoKey') {
            privateKey = privateKeyInput;
        } else if (jose.cryptoRuntime === 'node:crypto') {
            privateKey = crypto.createPrivateKey(privateKeyInput);
        } else {
            throw new TypeError('unrecognized crypto runtime');
        }
        if (privateKey.type !== 'private') {
            throw new TypeError('"DPoP" option must be a private key');
        }
        let alg = determineDPoPAlgorithm.call(this, privateKey, privateKeyInput);
        if (!alg) {
            throw new TypeError('could not determine DPoP JWS Algorithm');
        }
        return new jose.SignJWT({
            ath: accessToken ? base64url.encode(crypto.createHash('sha256').update(accessToken).digest()) : undefined,
            ...payload
        }).setProtectedHeader({
            alg,
            typ: 'dpop+jwt',
            jwk: await getJwk(privateKey, privateKeyInput)
        }).setIssuedAt().setJti(random()).sign(privateKey);
    }
}
function determineDPoPAlgorithmFromCryptoKey(cryptoKey) {
    switch(cryptoKey.algorithm.name){
        case 'Ed25519':
        case 'Ed448':
            return 'EdDSA';
        case 'ECDSA':
            {
                switch(cryptoKey.algorithm.namedCurve){
                    case 'P-256':
                        return 'ES256';
                    case 'P-384':
                        return 'ES384';
                    case 'P-521':
                        return 'ES512';
                    default:
                        break;
                }
                break;
            }
        case 'RSASSA-PKCS1-v1_5':
            return `RS${cryptoKey.algorithm.hash.name.slice(4)}`;
        case 'RSA-PSS':
            return `PS${cryptoKey.algorithm.hash.name.slice(4)}`;
        default:
            throw new TypeError('unsupported DPoP private key');
    }
}
let determineDPoPAlgorithm;
if (jose.cryptoRuntime === 'node:crypto') {
    determineDPoPAlgorithm = function(privateKey, privateKeyInput) {
        if (privateKeyInput[Symbol.toStringTag] === 'CryptoKey') {
            return determineDPoPAlgorithmFromCryptoKey(privateKey);
        }
        switch(privateKey.asymmetricKeyType){
            case 'ed25519':
            case 'ed448':
                return 'EdDSA';
            case 'ec':
                return determineEcAlgorithm(privateKey, privateKeyInput);
            case 'rsa':
            case rsaPssParams && 'rsa-pss':
                return determineRsaAlgorithm(privateKey, privateKeyInput, this.issuer.dpop_signing_alg_values_supported);
            default:
                throw new TypeError('unsupported DPoP private key');
        }
    };
    const RSPS = /^(?:RS|PS)(?:256|384|512)$/;
    function determineRsaAlgorithm(privateKey, privateKeyInput, valuesSupported) {
        if (typeof privateKeyInput === 'object' && privateKeyInput.format === 'jwk' && privateKeyInput.key && privateKeyInput.key.alg) {
            return privateKeyInput.key.alg;
        }
        if (Array.isArray(valuesSupported)) {
            let candidates = valuesSupported.filter(RegExp.prototype.test.bind(RSPS));
            if (privateKey.asymmetricKeyType === 'rsa-pss') {
                candidates = candidates.filter((value)=>value.startsWith('PS'));
            }
            return [
                'PS256',
                'PS384',
                'PS512',
                'RS256',
                'RS384',
                'RS384'
            ].find((preferred)=>candidates.includes(preferred));
        }
        return 'PS256';
    }
    const p256 = Buffer.from([
        42,
        134,
        72,
        206,
        61,
        3,
        1,
        7
    ]);
    const p384 = Buffer.from([
        43,
        129,
        4,
        0,
        34
    ]);
    const p521 = Buffer.from([
        43,
        129,
        4,
        0,
        35
    ]);
    const secp256k1 = Buffer.from([
        43,
        129,
        4,
        0,
        10
    ]);
    function determineEcAlgorithm(privateKey, privateKeyInput) {
        // If input was a JWK
        switch(typeof privateKeyInput === 'object' && typeof privateKeyInput.key === 'object' && privateKeyInput.key.crv){
            case 'P-256':
                return 'ES256';
            case 'secp256k1':
                return 'ES256K';
            case 'P-384':
                return 'ES384';
            case 'P-512':
                return 'ES512';
            default:
                break;
        }
        const buf = privateKey.export({
            format: 'der',
            type: 'pkcs8'
        });
        const i = buf[1] < 128 ? 17 : 18;
        const len = buf[i];
        const curveOid = buf.slice(i + 1, i + 1 + len);
        if (curveOid.equals(p256)) {
            return 'ES256';
        }
        if (curveOid.equals(p384)) {
            return 'ES384';
        }
        if (curveOid.equals(p521)) {
            return 'ES512';
        }
        if (curveOid.equals(secp256k1)) {
            return 'ES256K';
        }
        throw new TypeError('unsupported DPoP private key curve');
    }
} else {
    determineDPoPAlgorithm = determineDPoPAlgorithmFromCryptoKey;
}
const jwkCache = new WeakMap();
async function getJwk(keyObject, privateKeyInput) {
    if (jose.cryptoRuntime === 'node:crypto' && typeof privateKeyInput === 'object' && typeof privateKeyInput.key === 'object' && privateKeyInput.format === 'jwk') {
        return pick(privateKeyInput.key, 'kty', 'crv', 'x', 'y', 'e', 'n');
    }
    if (jwkCache.has(privateKeyInput)) {
        return jwkCache.get(privateKeyInput);
    }
    const jwk = pick(await jose.exportJWK(keyObject), 'kty', 'crv', 'x', 'y', 'e', 'n');
    if (isKeyObject(privateKeyInput) || jose.cryptoRuntime === 'WebCryptoAPI') {
        jwkCache.set(privateKeyInput, jwk);
    }
    return jwk;
}
module.exports = (issuer, aadIssValidation = false)=>class Client extends BaseClient {
        constructor(...args){
            super(issuer, aadIssValidation, ...args);
        }
        static get issuer() {
            return issuer;
        }
    };
module.exports.BaseClient = BaseClient;
}}),
"[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/issuer_registry.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const LRU = __turbopack_context__.r("[project]/node_modules/.pnpm/lru-cache@6.0.0/node_modules/lru-cache/index.js [app-rsc] (ecmascript)");
module.exports = new LRU({
    max: 100
});
}}),
"[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/webfinger_normalize.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
// Credit: https://github.com/rohe/pyoidc/blob/master/src/oic/utils/webfinger.py
// -- Normalization --
// A string of any other type is interpreted as a URI either the form of scheme
// "://" authority path-abempty [ "?" query ] [ "#" fragment ] or authority
// path-abempty [ "?" query ] [ "#" fragment ] per RFC 3986 [RFC3986] and is
// normalized according to the following rules:
//
// If the user input Identifier does not have an RFC 3986 [RFC3986] scheme
// portion, the string is interpreted as [userinfo "@"] host [":" port]
// path-abempty [ "?" query ] [ "#" fragment ] per RFC 3986 [RFC3986].
// If the userinfo component is present and all of the path component, query
// component, and port component are empty, the acct scheme is assumed. In this
// case, the normalized URI is formed by prefixing acct: to the string as the
// scheme. Per the 'acct' URI Scheme [I‑D.ietf‑appsawg‑acct‑uri], if there is an
// at-sign character ('@') in the userinfo component, it needs to be
// percent-encoded as described in RFC 3986 [RFC3986].
// For all other inputs without a scheme portion, the https scheme is assumed,
// and the normalized URI is formed by prefixing https:// to the string as the
// scheme.
// If the resulting URI contains a fragment portion, it MUST be stripped off
// together with the fragment delimiter character "#".
// The WebFinger [I‑D.ietf‑appsawg‑webfinger] Resource in this case is the
// resulting URI, and the WebFinger Host is the authority component.
//
// Note: Since the definition of authority in RFC 3986 [RFC3986] is
// [ userinfo "@" ] host [ ":" port ], it is legal to have a user input
// identifier like userinfo@host:port, e.g., alice@example.com:8080.
const PORT = /^\d+$/;
function hasScheme(input) {
    if (input.includes('://')) return true;
    const authority = input.replace(/(\/|\?)/g, '#').split('#')[0];
    if (authority.includes(':')) {
        const index = authority.indexOf(':');
        const hostOrPort = authority.slice(index + 1);
        if (!PORT.test(hostOrPort)) {
            return true;
        }
    }
    return false;
}
function acctSchemeAssumed(input) {
    if (!input.includes('@')) return false;
    const parts = input.split('@');
    const host = parts[parts.length - 1];
    return !(host.includes(':') || host.includes('/') || host.includes('?'));
}
function normalize(input) {
    if (typeof input !== 'string') {
        throw new TypeError('input must be a string');
    }
    let output;
    if (hasScheme(input)) {
        output = input;
    } else if (acctSchemeAssumed(input)) {
        output = `acct:${input}`;
    } else {
        output = `https://${input}`;
    }
    return output.split('#')[0];
}
module.exports = normalize;
}}),
"[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/issuer.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const { inspect } = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
const url = __turbopack_context__.r("[externals]/url [external] (url, cjs)");
const { RPError } = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/errors.js [app-rsc] (ecmascript)");
const getClient = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/client.js [app-rsc] (ecmascript)");
const registry = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/issuer_registry.js [app-rsc] (ecmascript)");
const processResponse = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/process_response.js [app-rsc] (ecmascript)");
const webfingerNormalize = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/webfinger_normalize.js [app-rsc] (ecmascript)");
const request = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/request.js [app-rsc] (ecmascript)");
const clone = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/deep_clone.js [app-rsc] (ecmascript)");
const { keystore } = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/issuer.js [app-rsc] (ecmascript)");
const AAD_MULTITENANT_DISCOVERY = [
    'https://login.microsoftonline.com/common/.well-known/openid-configuration',
    'https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration',
    'https://login.microsoftonline.com/organizations/v2.0/.well-known/openid-configuration',
    'https://login.microsoftonline.com/consumers/v2.0/.well-known/openid-configuration'
];
const AAD_MULTITENANT = Symbol();
const ISSUER_DEFAULTS = {
    claim_types_supported: [
        'normal'
    ],
    claims_parameter_supported: false,
    grant_types_supported: [
        'authorization_code',
        'implicit'
    ],
    request_parameter_supported: false,
    request_uri_parameter_supported: true,
    require_request_uri_registration: false,
    response_modes_supported: [
        'query',
        'fragment'
    ],
    token_endpoint_auth_methods_supported: [
        'client_secret_basic'
    ]
};
class Issuer {
    #metadata;
    constructor(meta = {}){
        const aadIssValidation = meta[AAD_MULTITENANT];
        delete meta[AAD_MULTITENANT];
        [
            'introspection',
            'revocation'
        ].forEach((endpoint)=>{
            // if intro/revocation endpoint auth specific meta is missing use the token ones if they
            // are defined
            if (meta[`${endpoint}_endpoint`] && meta[`${endpoint}_endpoint_auth_methods_supported`] === undefined && meta[`${endpoint}_endpoint_auth_signing_alg_values_supported`] === undefined) {
                if (meta.token_endpoint_auth_methods_supported) {
                    meta[`${endpoint}_endpoint_auth_methods_supported`] = meta.token_endpoint_auth_methods_supported;
                }
                if (meta.token_endpoint_auth_signing_alg_values_supported) {
                    meta[`${endpoint}_endpoint_auth_signing_alg_values_supported`] = meta.token_endpoint_auth_signing_alg_values_supported;
                }
            }
        });
        this.#metadata = new Map();
        Object.entries(meta).forEach(([key, value])=>{
            this.#metadata.set(key, value);
            if (!this[key]) {
                Object.defineProperty(this, key, {
                    get () {
                        return this.#metadata.get(key);
                    },
                    enumerable: true
                });
            }
        });
        registry.set(this.issuer, this);
        const Client = getClient(this, aadIssValidation);
        Object.defineProperties(this, {
            Client: {
                value: Client,
                enumerable: true
            },
            FAPI1Client: {
                value: class FAPI1Client extends Client {
                },
                enumerable: true
            },
            FAPI2Client: {
                value: class FAPI2Client extends Client {
                },
                enumerable: true
            }
        });
    }
    get metadata() {
        return clone(Object.fromEntries(this.#metadata.entries()));
    }
    static async webfinger(input) {
        const resource = webfingerNormalize(input);
        const { host } = url.parse(resource);
        const webfingerUrl = `https://${host}/.well-known/webfinger`;
        const response = await request.call(this, {
            method: 'GET',
            url: webfingerUrl,
            responseType: 'json',
            searchParams: {
                resource,
                rel: 'http://openid.net/specs/connect/1.0/issuer'
            },
            headers: {
                Accept: 'application/json'
            }
        });
        const body = processResponse(response);
        const location = Array.isArray(body.links) && body.links.find((link)=>typeof link === 'object' && link.rel === 'http://openid.net/specs/connect/1.0/issuer' && link.href);
        if (!location) {
            throw new RPError({
                message: 'no issuer found in webfinger response',
                body
            });
        }
        if (typeof location.href !== 'string' || !location.href.startsWith('https://')) {
            throw new RPError({
                printf: [
                    'invalid issuer location %s',
                    location.href
                ],
                body
            });
        }
        const expectedIssuer = location.href;
        if (registry.has(expectedIssuer)) {
            return registry.get(expectedIssuer);
        }
        const issuer = await this.discover(expectedIssuer);
        if (issuer.issuer !== expectedIssuer) {
            registry.del(issuer.issuer);
            throw new RPError('discovered issuer mismatch, expected %s, got: %s', expectedIssuer, issuer.issuer);
        }
        return issuer;
    }
    static async discover(uri) {
        const wellKnownUri = resolveWellKnownUri(uri);
        const response = await request.call(this, {
            method: 'GET',
            responseType: 'json',
            url: wellKnownUri,
            headers: {
                Accept: 'application/json'
            }
        });
        const body = processResponse(response);
        return new Issuer({
            ...ISSUER_DEFAULTS,
            ...body,
            [AAD_MULTITENANT]: !!AAD_MULTITENANT_DISCOVERY.find((discoveryURL)=>wellKnownUri.startsWith(discoveryURL))
        });
    }
    async reloadJwksUri() {
        await keystore.call(this, true);
    }
    /* istanbul ignore next */ [inspect.custom]() {
        return `${this.constructor.name} ${inspect(this.metadata, {
            depth: Infinity,
            colors: process.stdout.isTTY,
            compact: false,
            sorted: true
        })}`;
    }
}
function resolveWellKnownUri(uri) {
    const parsed = url.parse(uri);
    if (parsed.pathname.includes('/.well-known/')) {
        return uri;
    } else {
        let pathname;
        if (parsed.pathname.endsWith('/')) {
            pathname = `${parsed.pathname}.well-known/openid-configuration`;
        } else {
            pathname = `${parsed.pathname}/.well-known/openid-configuration`;
        }
        return url.format({
            ...parsed,
            pathname
        });
    }
}
module.exports = Issuer;
}}),
"[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/passport_strategy.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const url = __turbopack_context__.r("[externals]/url [external] (url, cjs)");
const { format } = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
const cloneDeep = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/deep_clone.js [app-rsc] (ecmascript)");
const { RPError, OPError } = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/errors.js [app-rsc] (ecmascript)");
const { BaseClient } = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/client.js [app-rsc] (ecmascript)");
const { random, codeChallenge } = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/generators.js [app-rsc] (ecmascript)");
const pick = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/pick.js [app-rsc] (ecmascript)");
const { resolveResponseType, resolveRedirectUri } = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/client.js [app-rsc] (ecmascript)");
function verified(err, user, info = {}) {
    if (err) {
        this.error(err);
    } else if (!user) {
        this.fail(info);
    } else {
        this.success(user, info);
    }
}
function OpenIDConnectStrategy({ client, params = {}, passReqToCallback = false, sessionKey, usePKCE = true, extras = {} } = {}, verify) {
    if (!(client instanceof BaseClient)) {
        throw new TypeError('client must be an instance of openid-client Client');
    }
    if (typeof verify !== 'function') {
        throw new TypeError('verify callback must be a function');
    }
    if (!client.issuer || !client.issuer.issuer) {
        throw new TypeError('client must have an issuer with an identifier');
    }
    this._client = client;
    this._issuer = client.issuer;
    this._verify = verify;
    this._passReqToCallback = passReqToCallback;
    this._usePKCE = usePKCE;
    this._key = sessionKey || `oidc:${url.parse(this._issuer.issuer).hostname}`;
    this._params = cloneDeep(params);
    // state and nonce are handled in authenticate()
    delete this._params.state;
    delete this._params.nonce;
    this._extras = cloneDeep(extras);
    if (!this._params.response_type) this._params.response_type = resolveResponseType.call(client);
    if (!this._params.redirect_uri) this._params.redirect_uri = resolveRedirectUri.call(client);
    if (!this._params.scope) this._params.scope = 'openid';
    if (this._usePKCE === true) {
        const supportedMethods = Array.isArray(this._issuer.code_challenge_methods_supported) ? this._issuer.code_challenge_methods_supported : false;
        if (supportedMethods && supportedMethods.includes('S256')) {
            this._usePKCE = 'S256';
        } else if (supportedMethods && supportedMethods.includes('plain')) {
            this._usePKCE = 'plain';
        } else if (supportedMethods) {
            throw new TypeError('neither code_challenge_method supported by the client is supported by the issuer');
        } else {
            this._usePKCE = 'S256';
        }
    } else if (typeof this._usePKCE === 'string' && ![
        'plain',
        'S256'
    ].includes(this._usePKCE)) {
        throw new TypeError(`${this._usePKCE} is not valid/implemented PKCE code_challenge_method`);
    }
    this.name = url.parse(client.issuer.issuer).hostname;
}
OpenIDConnectStrategy.prototype.authenticate = function authenticate(req, options) {
    (async ()=>{
        const client = this._client;
        if (!req.session) {
            throw new TypeError('authentication requires session support');
        }
        const reqParams = client.callbackParams(req);
        const sessionKey = this._key;
        const { 0: parameter, length } = Object.keys(reqParams);
        /**
     * Start authentication request if this has no authorization response parameters or
     * this might a login initiated from a third party as per
     * https://openid.net/specs/openid-connect-core-1_0.html#ThirdPartyInitiatedLogin.
     */ if (length === 0 || length === 1 && parameter === 'iss') {
            // provide options object with extra authentication parameters
            const params = {
                state: random(),
                ...this._params,
                ...options
            };
            if (!params.nonce && params.response_type.includes('id_token')) {
                params.nonce = random();
            }
            req.session[sessionKey] = pick(params, 'nonce', 'state', 'max_age', 'response_type');
            if (this._usePKCE && params.response_type.includes('code')) {
                const verifier = random();
                req.session[sessionKey].code_verifier = verifier;
                switch(this._usePKCE){
                    case 'S256':
                        params.code_challenge = codeChallenge(verifier);
                        params.code_challenge_method = 'S256';
                        break;
                    case 'plain':
                        params.code_challenge = verifier;
                        break;
                }
            }
            this.redirect(client.authorizationUrl(params));
            return;
        }
        /* end authentication request */ /* start authentication response */ const session = req.session[sessionKey];
        if (Object.keys(session || {}).length === 0) {
            throw new Error(format('did not find expected authorization request details in session, req.session["%s"] is %j', sessionKey, session));
        }
        const { state, nonce, max_age: maxAge, code_verifier: codeVerifier, response_type: responseType } = session;
        try {
            delete req.session[sessionKey];
        } catch (err) {}
        const opts = {
            redirect_uri: this._params.redirect_uri,
            ...options
        };
        const checks = {
            state,
            nonce,
            max_age: maxAge,
            code_verifier: codeVerifier,
            response_type: responseType
        };
        const tokenset = await client.callback(opts.redirect_uri, reqParams, checks, this._extras);
        const passReq = this._passReqToCallback;
        const loadUserinfo = this._verify.length > (passReq ? 3 : 2) && client.issuer.userinfo_endpoint;
        const args = [
            tokenset,
            verified.bind(this)
        ];
        if (loadUserinfo) {
            if (!tokenset.access_token) {
                throw new RPError({
                    message: 'expected access_token to be returned when asking for userinfo in verify callback',
                    tokenset
                });
            }
            const userinfo = await client.userinfo(tokenset);
            args.splice(1, 0, userinfo);
        }
        if (passReq) {
            args.unshift(req);
        }
        this._verify(...args);
    /* end authentication response */ })().catch((error)=>{
        if (error instanceof OPError && error.error !== 'server_error' && !error.error.startsWith('invalid') || error instanceof RPError) {
            this.fail(error);
        } else {
            this.error(error);
        }
    });
};
module.exports = OpenIDConnectStrategy;
}}),
"[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/index.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const Issuer = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/issuer.js [app-rsc] (ecmascript)");
const { OPError, RPError } = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/errors.js [app-rsc] (ecmascript)");
const Strategy = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/passport_strategy.js [app-rsc] (ecmascript)");
const TokenSet = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/token_set.js [app-rsc] (ecmascript)");
const { CLOCK_TOLERANCE, HTTP_OPTIONS } = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/consts.js [app-rsc] (ecmascript)");
const generators = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/generators.js [app-rsc] (ecmascript)");
const { setDefaults } = __turbopack_context__.r("[project]/node_modules/.pnpm/openid-client@5.7.1/node_modules/openid-client/lib/helpers/request.js [app-rsc] (ecmascript)");
module.exports = {
    Issuer,
    Strategy,
    TokenSet,
    errors: {
        OPError,
        RPError
    },
    custom: {
        setHttpOptionsDefaults: setDefaults,
        http_options: HTTP_OPTIONS,
        clock_tolerance: CLOCK_TOLERANCE
    },
    generators
};
}}),

};

//# sourceMappingURL=5c63e_openid-client_365c1af9._.js.map