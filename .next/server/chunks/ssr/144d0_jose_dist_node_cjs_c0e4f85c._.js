module.exports = {

"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/digest.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const crypto_1 = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
const digest = (algorithm, data)=>(0, crypto_1.createHash)(algorithm).update(data).digest();
exports.default = digest;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/buffer_utils.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.concatKdf = exports.lengthAndInput = exports.uint32be = exports.uint64be = exports.p2s = exports.concat = exports.decoder = exports.encoder = void 0;
const digest_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/digest.js [app-rsc] (ecmascript)");
exports.encoder = new TextEncoder();
exports.decoder = new TextDecoder();
const MAX_INT32 = 2 ** 32;
function concat(...buffers) {
    const size = buffers.reduce((acc, { length })=>acc + length, 0);
    const buf = new Uint8Array(size);
    let i = 0;
    buffers.forEach((buffer)=>{
        buf.set(buffer, i);
        i += buffer.length;
    });
    return buf;
}
exports.concat = concat;
function p2s(alg, p2sInput) {
    return concat(exports.encoder.encode(alg), new Uint8Array([
        0
    ]), p2sInput);
}
exports.p2s = p2s;
function writeUInt32BE(buf, value, offset) {
    if (value < 0 || value >= MAX_INT32) {
        throw new RangeError(`value must be >= 0 and <= ${MAX_INT32 - 1}. Received ${value}`);
    }
    buf.set([
        value >>> 24,
        value >>> 16,
        value >>> 8,
        value & 0xff
    ], offset);
}
function uint64be(value) {
    const high = Math.floor(value / MAX_INT32);
    const low = value % MAX_INT32;
    const buf = new Uint8Array(8);
    writeUInt32BE(buf, high, 0);
    writeUInt32BE(buf, low, 4);
    return buf;
}
exports.uint64be = uint64be;
function uint32be(value) {
    const buf = new Uint8Array(4);
    writeUInt32BE(buf, value);
    return buf;
}
exports.uint32be = uint32be;
function lengthAndInput(input) {
    return concat(uint32be(input.length), input);
}
exports.lengthAndInput = lengthAndInput;
async function concatKdf(secret, bits, value) {
    const iterations = Math.ceil((bits >> 3) / 32);
    const res = new Uint8Array(iterations * 32);
    for(let iter = 0; iter < iterations; iter++){
        const buf = new Uint8Array(4 + secret.length + value.length);
        buf.set(uint32be(iter + 1));
        buf.set(secret, 4);
        buf.set(value, 4 + secret.length);
        res.set(await (0, digest_js_1.default)('sha256', buf), iter * 32);
    }
    return res.slice(0, bits >> 3);
}
exports.concatKdf = concatKdf;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/base64url.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.decode = exports.encode = exports.encodeBase64 = exports.decodeBase64 = void 0;
const buffer_1 = __turbopack_context__.r("[externals]/buffer [external] (buffer, cjs)");
const buffer_utils_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/buffer_utils.js [app-rsc] (ecmascript)");
let encode;
function normalize(input) {
    let encoded = input;
    if (encoded instanceof Uint8Array) {
        encoded = buffer_utils_js_1.decoder.decode(encoded);
    }
    return encoded;
}
if (buffer_1.Buffer.isEncoding('base64url')) {
    exports.encode = encode = (input)=>buffer_1.Buffer.from(input).toString('base64url');
} else {
    exports.encode = encode = (input)=>buffer_1.Buffer.from(input).toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}
const decodeBase64 = (input)=>buffer_1.Buffer.from(input, 'base64');
exports.decodeBase64 = decodeBase64;
const encodeBase64 = (input)=>buffer_1.Buffer.from(input).toString('base64');
exports.encodeBase64 = encodeBase64;
const decode = (input)=>buffer_1.Buffer.from(normalize(input), 'base64');
exports.decode = decode;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/util/errors.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.JWSSignatureVerificationFailed = exports.JWKSTimeout = exports.JWKSMultipleMatchingKeys = exports.JWKSNoMatchingKey = exports.JWKSInvalid = exports.JWKInvalid = exports.JWTInvalid = exports.JWSInvalid = exports.JWEInvalid = exports.JWEDecompressionFailed = exports.JWEDecryptionFailed = exports.JOSENotSupported = exports.JOSEAlgNotAllowed = exports.JWTExpired = exports.JWTClaimValidationFailed = exports.JOSEError = void 0;
class JOSEError extends Error {
    static get code() {
        return 'ERR_JOSE_GENERIC';
    }
    constructor(message){
        var _a;
        super(message);
        this.code = 'ERR_JOSE_GENERIC';
        this.name = this.constructor.name;
        (_a = Error.captureStackTrace) === null || _a === void 0 ? void 0 : _a.call(Error, this, this.constructor);
    }
}
exports.JOSEError = JOSEError;
class JWTClaimValidationFailed extends JOSEError {
    static get code() {
        return 'ERR_JWT_CLAIM_VALIDATION_FAILED';
    }
    constructor(message, claim = 'unspecified', reason = 'unspecified'){
        super(message);
        this.code = 'ERR_JWT_CLAIM_VALIDATION_FAILED';
        this.claim = claim;
        this.reason = reason;
    }
}
exports.JWTClaimValidationFailed = JWTClaimValidationFailed;
class JWTExpired extends JOSEError {
    static get code() {
        return 'ERR_JWT_EXPIRED';
    }
    constructor(message, claim = 'unspecified', reason = 'unspecified'){
        super(message);
        this.code = 'ERR_JWT_EXPIRED';
        this.claim = claim;
        this.reason = reason;
    }
}
exports.JWTExpired = JWTExpired;
class JOSEAlgNotAllowed extends JOSEError {
    constructor(){
        super(...arguments);
        this.code = 'ERR_JOSE_ALG_NOT_ALLOWED';
    }
    static get code() {
        return 'ERR_JOSE_ALG_NOT_ALLOWED';
    }
}
exports.JOSEAlgNotAllowed = JOSEAlgNotAllowed;
class JOSENotSupported extends JOSEError {
    constructor(){
        super(...arguments);
        this.code = 'ERR_JOSE_NOT_SUPPORTED';
    }
    static get code() {
        return 'ERR_JOSE_NOT_SUPPORTED';
    }
}
exports.JOSENotSupported = JOSENotSupported;
class JWEDecryptionFailed extends JOSEError {
    constructor(){
        super(...arguments);
        this.code = 'ERR_JWE_DECRYPTION_FAILED';
        this.message = 'decryption operation failed';
    }
    static get code() {
        return 'ERR_JWE_DECRYPTION_FAILED';
    }
}
exports.JWEDecryptionFailed = JWEDecryptionFailed;
class JWEDecompressionFailed extends JOSEError {
    constructor(){
        super(...arguments);
        this.code = 'ERR_JWE_DECOMPRESSION_FAILED';
        this.message = 'decompression operation failed';
    }
    static get code() {
        return 'ERR_JWE_DECOMPRESSION_FAILED';
    }
}
exports.JWEDecompressionFailed = JWEDecompressionFailed;
class JWEInvalid extends JOSEError {
    constructor(){
        super(...arguments);
        this.code = 'ERR_JWE_INVALID';
    }
    static get code() {
        return 'ERR_JWE_INVALID';
    }
}
exports.JWEInvalid = JWEInvalid;
class JWSInvalid extends JOSEError {
    constructor(){
        super(...arguments);
        this.code = 'ERR_JWS_INVALID';
    }
    static get code() {
        return 'ERR_JWS_INVALID';
    }
}
exports.JWSInvalid = JWSInvalid;
class JWTInvalid extends JOSEError {
    constructor(){
        super(...arguments);
        this.code = 'ERR_JWT_INVALID';
    }
    static get code() {
        return 'ERR_JWT_INVALID';
    }
}
exports.JWTInvalid = JWTInvalid;
class JWKInvalid extends JOSEError {
    constructor(){
        super(...arguments);
        this.code = 'ERR_JWK_INVALID';
    }
    static get code() {
        return 'ERR_JWK_INVALID';
    }
}
exports.JWKInvalid = JWKInvalid;
class JWKSInvalid extends JOSEError {
    constructor(){
        super(...arguments);
        this.code = 'ERR_JWKS_INVALID';
    }
    static get code() {
        return 'ERR_JWKS_INVALID';
    }
}
exports.JWKSInvalid = JWKSInvalid;
class JWKSNoMatchingKey extends JOSEError {
    constructor(){
        super(...arguments);
        this.code = 'ERR_JWKS_NO_MATCHING_KEY';
        this.message = 'no applicable key found in the JSON Web Key Set';
    }
    static get code() {
        return 'ERR_JWKS_NO_MATCHING_KEY';
    }
}
exports.JWKSNoMatchingKey = JWKSNoMatchingKey;
class JWKSMultipleMatchingKeys extends JOSEError {
    constructor(){
        super(...arguments);
        this.code = 'ERR_JWKS_MULTIPLE_MATCHING_KEYS';
        this.message = 'multiple matching keys found in the JSON Web Key Set';
    }
    static get code() {
        return 'ERR_JWKS_MULTIPLE_MATCHING_KEYS';
    }
}
exports.JWKSMultipleMatchingKeys = JWKSMultipleMatchingKeys;
Symbol.asyncIterator;
class JWKSTimeout extends JOSEError {
    constructor(){
        super(...arguments);
        this.code = 'ERR_JWKS_TIMEOUT';
        this.message = 'request timed out';
    }
    static get code() {
        return 'ERR_JWKS_TIMEOUT';
    }
}
exports.JWKSTimeout = JWKSTimeout;
class JWSSignatureVerificationFailed extends JOSEError {
    constructor(){
        super(...arguments);
        this.code = 'ERR_JWS_SIGNATURE_VERIFICATION_FAILED';
        this.message = 'signature verification failed';
    }
    static get code() {
        return 'ERR_JWS_SIGNATURE_VERIFICATION_FAILED';
    }
}
exports.JWSSignatureVerificationFailed = JWSSignatureVerificationFailed;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/random.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var crypto_1 = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return crypto_1.randomFillSync;
    }
});
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/iv.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bitLength = void 0;
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/util/errors.js [app-rsc] (ecmascript)");
const random_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/random.js [app-rsc] (ecmascript)");
function bitLength(alg) {
    switch(alg){
        case 'A128GCM':
        case 'A128GCMKW':
        case 'A192GCM':
        case 'A192GCMKW':
        case 'A256GCM':
        case 'A256GCMKW':
            return 96;
        case 'A128CBC-HS256':
        case 'A192CBC-HS384':
        case 'A256CBC-HS512':
            return 128;
        default:
            throw new errors_js_1.JOSENotSupported(`Unsupported JWE Algorithm: ${alg}`);
    }
}
exports.bitLength = bitLength;
exports.default = (alg)=>(0, random_js_1.default)(new Uint8Array(bitLength(alg) >> 3));
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/check_iv_length.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/util/errors.js [app-rsc] (ecmascript)");
const iv_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/iv.js [app-rsc] (ecmascript)");
const checkIvLength = (enc, iv)=>{
    if (iv.length << 3 !== (0, iv_js_1.bitLength)(enc)) {
        throw new errors_js_1.JWEInvalid('Invalid Initialization Vector length');
    }
};
exports.default = checkIvLength;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/is_key_object.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const crypto_1 = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
const util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
exports.default = util.types.isKeyObject ? (obj)=>util.types.isKeyObject(obj) : (obj)=>obj != null && obj instanceof crypto_1.KeyObject;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/check_cek_length.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/util/errors.js [app-rsc] (ecmascript)");
const is_key_object_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/is_key_object.js [app-rsc] (ecmascript)");
const checkCekLength = (enc, cek)=>{
    let expected;
    switch(enc){
        case 'A128CBC-HS256':
        case 'A192CBC-HS384':
        case 'A256CBC-HS512':
            expected = parseInt(enc.slice(-3), 10);
            break;
        case 'A128GCM':
        case 'A192GCM':
        case 'A256GCM':
            expected = parseInt(enc.slice(1, 4), 10);
            break;
        default:
            throw new errors_js_1.JOSENotSupported(`Content Encryption Algorithm ${enc} is not supported either by JOSE or your javascript runtime`);
    }
    if (cek instanceof Uint8Array) {
        const actual = cek.byteLength << 3;
        if (actual !== expected) {
            throw new errors_js_1.JWEInvalid(`Invalid Content Encryption Key length. Expected ${expected} bits, got ${actual} bits`);
        }
        return;
    }
    if ((0, is_key_object_js_1.default)(cek) && cek.type === 'secret') {
        const actual = cek.symmetricKeySize << 3;
        if (actual !== expected) {
            throw new errors_js_1.JWEInvalid(`Invalid Content Encryption Key length. Expected ${expected} bits, got ${actual} bits`);
        }
        return;
    }
    throw new TypeError('Invalid Content Encryption Key type');
};
exports.default = checkCekLength;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/timing_safe_equal.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const crypto_1 = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
const timingSafeEqual = crypto_1.timingSafeEqual;
exports.default = timingSafeEqual;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/cbc_tag.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const crypto_1 = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
const buffer_utils_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/buffer_utils.js [app-rsc] (ecmascript)");
function cbcTag(aad, iv, ciphertext, macSize, macKey, keySize) {
    const macData = (0, buffer_utils_js_1.concat)(aad, iv, ciphertext, (0, buffer_utils_js_1.uint64be)(aad.length << 3));
    const hmac = (0, crypto_1.createHmac)(`sha${macSize}`, macKey);
    hmac.update(macData);
    return hmac.digest().slice(0, keySize >> 3);
}
exports.default = cbcTag;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/webcrypto.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isCryptoKey = void 0;
const crypto = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
const util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
const webcrypto = crypto.webcrypto;
exports.default = webcrypto;
exports.isCryptoKey = util.types.isCryptoKey ? (key)=>util.types.isCryptoKey(key) : (key)=>false;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/crypto_key.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.checkEncCryptoKey = exports.checkSigCryptoKey = void 0;
function unusable(name, prop = 'algorithm.name') {
    return new TypeError(`CryptoKey does not support this operation, its ${prop} must be ${name}`);
}
function isAlgorithm(algorithm, name) {
    return algorithm.name === name;
}
function getHashLength(hash) {
    return parseInt(hash.name.slice(4), 10);
}
function getNamedCurve(alg) {
    switch(alg){
        case 'ES256':
            return 'P-256';
        case 'ES384':
            return 'P-384';
        case 'ES512':
            return 'P-521';
        default:
            throw new Error('unreachable');
    }
}
function checkUsage(key, usages) {
    if (usages.length && !usages.some((expected)=>key.usages.includes(expected))) {
        let msg = 'CryptoKey does not support this operation, its usages must include ';
        if (usages.length > 2) {
            const last = usages.pop();
            msg += `one of ${usages.join(', ')}, or ${last}.`;
        } else if (usages.length === 2) {
            msg += `one of ${usages[0]} or ${usages[1]}.`;
        } else {
            msg += `${usages[0]}.`;
        }
        throw new TypeError(msg);
    }
}
function checkSigCryptoKey(key, alg, ...usages) {
    switch(alg){
        case 'HS256':
        case 'HS384':
        case 'HS512':
            {
                if (!isAlgorithm(key.algorithm, 'HMAC')) throw unusable('HMAC');
                const expected = parseInt(alg.slice(2), 10);
                const actual = getHashLength(key.algorithm.hash);
                if (actual !== expected) throw unusable(`SHA-${expected}`, 'algorithm.hash');
                break;
            }
        case 'RS256':
        case 'RS384':
        case 'RS512':
            {
                if (!isAlgorithm(key.algorithm, 'RSASSA-PKCS1-v1_5')) throw unusable('RSASSA-PKCS1-v1_5');
                const expected = parseInt(alg.slice(2), 10);
                const actual = getHashLength(key.algorithm.hash);
                if (actual !== expected) throw unusable(`SHA-${expected}`, 'algorithm.hash');
                break;
            }
        case 'PS256':
        case 'PS384':
        case 'PS512':
            {
                if (!isAlgorithm(key.algorithm, 'RSA-PSS')) throw unusable('RSA-PSS');
                const expected = parseInt(alg.slice(2), 10);
                const actual = getHashLength(key.algorithm.hash);
                if (actual !== expected) throw unusable(`SHA-${expected}`, 'algorithm.hash');
                break;
            }
        case 'EdDSA':
            {
                if (key.algorithm.name !== 'Ed25519' && key.algorithm.name !== 'Ed448') {
                    throw unusable('Ed25519 or Ed448');
                }
                break;
            }
        case 'ES256':
        case 'ES384':
        case 'ES512':
            {
                if (!isAlgorithm(key.algorithm, 'ECDSA')) throw unusable('ECDSA');
                const expected = getNamedCurve(alg);
                const actual = key.algorithm.namedCurve;
                if (actual !== expected) throw unusable(expected, 'algorithm.namedCurve');
                break;
            }
        default:
            throw new TypeError('CryptoKey does not support this operation');
    }
    checkUsage(key, usages);
}
exports.checkSigCryptoKey = checkSigCryptoKey;
function checkEncCryptoKey(key, alg, ...usages) {
    switch(alg){
        case 'A128GCM':
        case 'A192GCM':
        case 'A256GCM':
            {
                if (!isAlgorithm(key.algorithm, 'AES-GCM')) throw unusable('AES-GCM');
                const expected = parseInt(alg.slice(1, 4), 10);
                const actual = key.algorithm.length;
                if (actual !== expected) throw unusable(expected, 'algorithm.length');
                break;
            }
        case 'A128KW':
        case 'A192KW':
        case 'A256KW':
            {
                if (!isAlgorithm(key.algorithm, 'AES-KW')) throw unusable('AES-KW');
                const expected = parseInt(alg.slice(1, 4), 10);
                const actual = key.algorithm.length;
                if (actual !== expected) throw unusable(expected, 'algorithm.length');
                break;
            }
        case 'ECDH':
            {
                switch(key.algorithm.name){
                    case 'ECDH':
                    case 'X25519':
                    case 'X448':
                        break;
                    default:
                        throw unusable('ECDH, X25519, or X448');
                }
                break;
            }
        case 'PBES2-HS256+A128KW':
        case 'PBES2-HS384+A192KW':
        case 'PBES2-HS512+A256KW':
            if (!isAlgorithm(key.algorithm, 'PBKDF2')) throw unusable('PBKDF2');
            break;
        case 'RSA-OAEP':
        case 'RSA-OAEP-256':
        case 'RSA-OAEP-384':
        case 'RSA-OAEP-512':
            {
                if (!isAlgorithm(key.algorithm, 'RSA-OAEP')) throw unusable('RSA-OAEP');
                const expected = parseInt(alg.slice(9), 10) || 1;
                const actual = getHashLength(key.algorithm.hash);
                if (actual !== expected) throw unusable(`SHA-${expected}`, 'algorithm.hash');
                break;
            }
        default:
            throw new TypeError('CryptoKey does not support this operation');
    }
    checkUsage(key, usages);
}
exports.checkEncCryptoKey = checkEncCryptoKey;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/invalid_key_input.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.withAlg = void 0;
function message(msg, actual, ...types) {
    if (types.length > 2) {
        const last = types.pop();
        msg += `one of type ${types.join(', ')}, or ${last}.`;
    } else if (types.length === 2) {
        msg += `one of type ${types[0]} or ${types[1]}.`;
    } else {
        msg += `of type ${types[0]}.`;
    }
    if (actual == null) {
        msg += ` Received ${actual}`;
    } else if (typeof actual === 'function' && actual.name) {
        msg += ` Received function ${actual.name}`;
    } else if (typeof actual === 'object' && actual != null) {
        if (actual.constructor && actual.constructor.name) {
            msg += ` Received an instance of ${actual.constructor.name}`;
        }
    }
    return msg;
}
exports.default = (actual, ...types)=>{
    return message('Key must be ', actual, ...types);
};
function withAlg(alg, actual, ...types) {
    return message(`Key for the ${alg} algorithm must be `, actual, ...types);
}
exports.withAlg = withAlg;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/ciphers.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const crypto_1 = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
let ciphers;
exports.default = (algorithm)=>{
    ciphers || (ciphers = new Set((0, crypto_1.getCiphers)()));
    return ciphers.has(algorithm);
};
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/is_key_like.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.types = void 0;
const webcrypto_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/webcrypto.js [app-rsc] (ecmascript)");
const is_key_object_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/is_key_object.js [app-rsc] (ecmascript)");
exports.default = (key)=>(0, is_key_object_js_1.default)(key) || (0, webcrypto_js_1.isCryptoKey)(key);
const types = [
    'KeyObject'
];
exports.types = types;
if (globalThis.CryptoKey || (webcrypto_js_1.default === null || webcrypto_js_1.default === void 0 ? void 0 : webcrypto_js_1.default.CryptoKey)) {
    types.push('CryptoKey');
}
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/decrypt.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const crypto_1 = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
const check_iv_length_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/check_iv_length.js [app-rsc] (ecmascript)");
const check_cek_length_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/check_cek_length.js [app-rsc] (ecmascript)");
const buffer_utils_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/buffer_utils.js [app-rsc] (ecmascript)");
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/util/errors.js [app-rsc] (ecmascript)");
const timing_safe_equal_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/timing_safe_equal.js [app-rsc] (ecmascript)");
const cbc_tag_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/cbc_tag.js [app-rsc] (ecmascript)");
const webcrypto_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/webcrypto.js [app-rsc] (ecmascript)");
const crypto_key_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/crypto_key.js [app-rsc] (ecmascript)");
const is_key_object_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/is_key_object.js [app-rsc] (ecmascript)");
const invalid_key_input_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/invalid_key_input.js [app-rsc] (ecmascript)");
const ciphers_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/ciphers.js [app-rsc] (ecmascript)");
const is_key_like_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/is_key_like.js [app-rsc] (ecmascript)");
function cbcDecrypt(enc, cek, ciphertext, iv, tag, aad) {
    const keySize = parseInt(enc.slice(1, 4), 10);
    if ((0, is_key_object_js_1.default)(cek)) {
        cek = cek.export();
    }
    const encKey = cek.subarray(keySize >> 3);
    const macKey = cek.subarray(0, keySize >> 3);
    const macSize = parseInt(enc.slice(-3), 10);
    const algorithm = `aes-${keySize}-cbc`;
    if (!(0, ciphers_js_1.default)(algorithm)) {
        throw new errors_js_1.JOSENotSupported(`alg ${enc} is not supported by your javascript runtime`);
    }
    const expectedTag = (0, cbc_tag_js_1.default)(aad, iv, ciphertext, macSize, macKey, keySize);
    let macCheckPassed;
    try {
        macCheckPassed = (0, timing_safe_equal_js_1.default)(tag, expectedTag);
    } catch  {}
    if (!macCheckPassed) {
        throw new errors_js_1.JWEDecryptionFailed();
    }
    let plaintext;
    try {
        const decipher = (0, crypto_1.createDecipheriv)(algorithm, encKey, iv);
        plaintext = (0, buffer_utils_js_1.concat)(decipher.update(ciphertext), decipher.final());
    } catch  {}
    if (!plaintext) {
        throw new errors_js_1.JWEDecryptionFailed();
    }
    return plaintext;
}
function gcmDecrypt(enc, cek, ciphertext, iv, tag, aad) {
    const keySize = parseInt(enc.slice(1, 4), 10);
    const algorithm = `aes-${keySize}-gcm`;
    if (!(0, ciphers_js_1.default)(algorithm)) {
        throw new errors_js_1.JOSENotSupported(`alg ${enc} is not supported by your javascript runtime`);
    }
    try {
        const decipher = (0, crypto_1.createDecipheriv)(algorithm, cek, iv, {
            authTagLength: 16
        });
        decipher.setAuthTag(tag);
        if (aad.byteLength) {
            decipher.setAAD(aad, {
                plaintextLength: ciphertext.length
            });
        }
        const plaintext = decipher.update(ciphertext);
        decipher.final();
        return plaintext;
    } catch  {
        throw new errors_js_1.JWEDecryptionFailed();
    }
}
const decrypt = (enc, cek, ciphertext, iv, tag, aad)=>{
    let key;
    if ((0, webcrypto_js_1.isCryptoKey)(cek)) {
        (0, crypto_key_js_1.checkEncCryptoKey)(cek, enc, 'decrypt');
        key = crypto_1.KeyObject.from(cek);
    } else if (cek instanceof Uint8Array || (0, is_key_object_js_1.default)(cek)) {
        key = cek;
    } else {
        throw new TypeError((0, invalid_key_input_js_1.default)(cek, ...is_key_like_js_1.types, 'Uint8Array'));
    }
    (0, check_cek_length_js_1.default)(enc, key);
    (0, check_iv_length_js_1.default)(enc, iv);
    switch(enc){
        case 'A128CBC-HS256':
        case 'A192CBC-HS384':
        case 'A256CBC-HS512':
            return cbcDecrypt(enc, key, ciphertext, iv, tag, aad);
        case 'A128GCM':
        case 'A192GCM':
        case 'A256GCM':
            return gcmDecrypt(enc, key, ciphertext, iv, tag, aad);
        default:
            throw new errors_js_1.JOSENotSupported('Unsupported JWE Content Encryption Algorithm');
    }
};
exports.default = decrypt;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/zlib.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.deflate = exports.inflate = void 0;
const util_1 = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
const zlib_1 = __turbopack_context__.r("[externals]/zlib [external] (zlib, cjs)");
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/util/errors.js [app-rsc] (ecmascript)");
const inflateRaw = (0, util_1.promisify)(zlib_1.inflateRaw);
const deflateRaw = (0, util_1.promisify)(zlib_1.deflateRaw);
const inflate = (input)=>inflateRaw(input, {
        maxOutputLength: 250000
    }).catch(()=>{
        throw new errors_js_1.JWEDecompressionFailed();
    });
exports.inflate = inflate;
const deflate = (input)=>deflateRaw(input);
exports.deflate = deflate;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/is_disjoint.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const isDisjoint = (...headers)=>{
    const sources = headers.filter(Boolean);
    if (sources.length === 0 || sources.length === 1) {
        return true;
    }
    let acc;
    for (const header of sources){
        const parameters = Object.keys(header);
        if (!acc || acc.size === 0) {
            acc = new Set(parameters);
            continue;
        }
        for (const parameter of parameters){
            if (acc.has(parameter)) {
                return false;
            }
            acc.add(parameter);
        }
    }
    return true;
};
exports.default = isDisjoint;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/is_object.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function isObjectLike(value) {
    return typeof value === 'object' && value !== null;
}
function isObject(input) {
    if (!isObjectLike(input) || Object.prototype.toString.call(input) !== '[object Object]') {
        return false;
    }
    if (Object.getPrototypeOf(input) === null) {
        return true;
    }
    let proto = input;
    while(Object.getPrototypeOf(proto) !== null){
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(input) === proto;
}
exports.default = isObject;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/aeskw.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.unwrap = exports.wrap = void 0;
const buffer_1 = __turbopack_context__.r("[externals]/buffer [external] (buffer, cjs)");
const crypto_1 = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/util/errors.js [app-rsc] (ecmascript)");
const buffer_utils_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/buffer_utils.js [app-rsc] (ecmascript)");
const webcrypto_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/webcrypto.js [app-rsc] (ecmascript)");
const crypto_key_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/crypto_key.js [app-rsc] (ecmascript)");
const is_key_object_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/is_key_object.js [app-rsc] (ecmascript)");
const invalid_key_input_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/invalid_key_input.js [app-rsc] (ecmascript)");
const ciphers_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/ciphers.js [app-rsc] (ecmascript)");
const is_key_like_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/is_key_like.js [app-rsc] (ecmascript)");
function checkKeySize(key, alg) {
    if (key.symmetricKeySize << 3 !== parseInt(alg.slice(1, 4), 10)) {
        throw new TypeError(`Invalid key size for alg: ${alg}`);
    }
}
function ensureKeyObject(key, alg, usage) {
    if ((0, is_key_object_js_1.default)(key)) {
        return key;
    }
    if (key instanceof Uint8Array) {
        return (0, crypto_1.createSecretKey)(key);
    }
    if ((0, webcrypto_js_1.isCryptoKey)(key)) {
        (0, crypto_key_js_1.checkEncCryptoKey)(key, alg, usage);
        return crypto_1.KeyObject.from(key);
    }
    throw new TypeError((0, invalid_key_input_js_1.default)(key, ...is_key_like_js_1.types, 'Uint8Array'));
}
const wrap = (alg, key, cek)=>{
    const size = parseInt(alg.slice(1, 4), 10);
    const algorithm = `aes${size}-wrap`;
    if (!(0, ciphers_js_1.default)(algorithm)) {
        throw new errors_js_1.JOSENotSupported(`alg ${alg} is not supported either by JOSE or your javascript runtime`);
    }
    const keyObject = ensureKeyObject(key, alg, 'wrapKey');
    checkKeySize(keyObject, alg);
    const cipher = (0, crypto_1.createCipheriv)(algorithm, keyObject, buffer_1.Buffer.alloc(8, 0xa6));
    return (0, buffer_utils_js_1.concat)(cipher.update(cek), cipher.final());
};
exports.wrap = wrap;
const unwrap = (alg, key, encryptedKey)=>{
    const size = parseInt(alg.slice(1, 4), 10);
    const algorithm = `aes${size}-wrap`;
    if (!(0, ciphers_js_1.default)(algorithm)) {
        throw new errors_js_1.JOSENotSupported(`alg ${alg} is not supported either by JOSE or your javascript runtime`);
    }
    const keyObject = ensureKeyObject(key, alg, 'unwrapKey');
    checkKeySize(keyObject, alg);
    const cipher = (0, crypto_1.createDecipheriv)(algorithm, keyObject, buffer_1.Buffer.alloc(8, 0xa6));
    return (0, buffer_utils_js_1.concat)(cipher.update(encryptedKey), cipher.final());
};
exports.unwrap = unwrap;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/get_named_curve.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setCurve = exports.weakMap = void 0;
const buffer_1 = __turbopack_context__.r("[externals]/buffer [external] (buffer, cjs)");
const crypto_1 = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/util/errors.js [app-rsc] (ecmascript)");
const webcrypto_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/webcrypto.js [app-rsc] (ecmascript)");
const is_key_object_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/is_key_object.js [app-rsc] (ecmascript)");
const invalid_key_input_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/invalid_key_input.js [app-rsc] (ecmascript)");
const is_key_like_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/is_key_like.js [app-rsc] (ecmascript)");
const p256 = buffer_1.Buffer.from([
    42,
    134,
    72,
    206,
    61,
    3,
    1,
    7
]);
const p384 = buffer_1.Buffer.from([
    43,
    129,
    4,
    0,
    34
]);
const p521 = buffer_1.Buffer.from([
    43,
    129,
    4,
    0,
    35
]);
const secp256k1 = buffer_1.Buffer.from([
    43,
    129,
    4,
    0,
    10
]);
exports.weakMap = new WeakMap();
const namedCurveToJOSE = (namedCurve)=>{
    switch(namedCurve){
        case 'prime256v1':
            return 'P-256';
        case 'secp384r1':
            return 'P-384';
        case 'secp521r1':
            return 'P-521';
        case 'secp256k1':
            return 'secp256k1';
        default:
            throw new errors_js_1.JOSENotSupported('Unsupported key curve for this operation');
    }
};
const getNamedCurve = (kee, raw)=>{
    var _a;
    let key;
    if ((0, webcrypto_js_1.isCryptoKey)(kee)) {
        key = crypto_1.KeyObject.from(kee);
    } else if ((0, is_key_object_js_1.default)(kee)) {
        key = kee;
    } else {
        throw new TypeError((0, invalid_key_input_js_1.default)(kee, ...is_key_like_js_1.types));
    }
    if (key.type === 'secret') {
        throw new TypeError('only "private" or "public" type keys can be used for this operation');
    }
    switch(key.asymmetricKeyType){
        case 'ed25519':
        case 'ed448':
            return `Ed${key.asymmetricKeyType.slice(2)}`;
        case 'x25519':
        case 'x448':
            return `X${key.asymmetricKeyType.slice(1)}`;
        case 'ec':
            {
                if (exports.weakMap.has(key)) {
                    return exports.weakMap.get(key);
                }
                let namedCurve = (_a = key.asymmetricKeyDetails) === null || _a === void 0 ? void 0 : _a.namedCurve;
                if (!namedCurve && key.type === 'private') {
                    namedCurve = getNamedCurve((0, crypto_1.createPublicKey)(key), true);
                } else if (!namedCurve) {
                    const buf = key.export({
                        format: 'der',
                        type: 'spki'
                    });
                    const i = buf[1] < 128 ? 14 : 15;
                    const len = buf[i];
                    const curveOid = buf.slice(i + 1, i + 1 + len);
                    if (curveOid.equals(p256)) {
                        namedCurve = 'prime256v1';
                    } else if (curveOid.equals(p384)) {
                        namedCurve = 'secp384r1';
                    } else if (curveOid.equals(p521)) {
                        namedCurve = 'secp521r1';
                    } else if (curveOid.equals(secp256k1)) {
                        namedCurve = 'secp256k1';
                    } else {
                        throw new errors_js_1.JOSENotSupported('Unsupported key curve for this operation');
                    }
                }
                if (raw) return namedCurve;
                const curve = namedCurveToJOSE(namedCurve);
                exports.weakMap.set(key, curve);
                return curve;
            }
        default:
            throw new TypeError('Invalid asymmetric key type for this operation');
    }
};
function setCurve(keyObject, curve) {
    exports.weakMap.set(keyObject, curve);
}
exports.setCurve = setCurve;
exports.default = getNamedCurve;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/ecdhes.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ecdhAllowed = exports.generateEpk = exports.deriveKey = void 0;
const crypto_1 = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
const util_1 = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
const get_named_curve_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/get_named_curve.js [app-rsc] (ecmascript)");
const buffer_utils_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/buffer_utils.js [app-rsc] (ecmascript)");
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/util/errors.js [app-rsc] (ecmascript)");
const webcrypto_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/webcrypto.js [app-rsc] (ecmascript)");
const crypto_key_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/crypto_key.js [app-rsc] (ecmascript)");
const is_key_object_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/is_key_object.js [app-rsc] (ecmascript)");
const invalid_key_input_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/invalid_key_input.js [app-rsc] (ecmascript)");
const is_key_like_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/is_key_like.js [app-rsc] (ecmascript)");
const generateKeyPair = (0, util_1.promisify)(crypto_1.generateKeyPair);
async function deriveKey(publicKee, privateKee, algorithm, keyLength, apu = new Uint8Array(0), apv = new Uint8Array(0)) {
    let publicKey;
    if ((0, webcrypto_js_1.isCryptoKey)(publicKee)) {
        (0, crypto_key_js_1.checkEncCryptoKey)(publicKee, 'ECDH');
        publicKey = crypto_1.KeyObject.from(publicKee);
    } else if ((0, is_key_object_js_1.default)(publicKee)) {
        publicKey = publicKee;
    } else {
        throw new TypeError((0, invalid_key_input_js_1.default)(publicKee, ...is_key_like_js_1.types));
    }
    let privateKey;
    if ((0, webcrypto_js_1.isCryptoKey)(privateKee)) {
        (0, crypto_key_js_1.checkEncCryptoKey)(privateKee, 'ECDH', 'deriveBits');
        privateKey = crypto_1.KeyObject.from(privateKee);
    } else if ((0, is_key_object_js_1.default)(privateKee)) {
        privateKey = privateKee;
    } else {
        throw new TypeError((0, invalid_key_input_js_1.default)(privateKee, ...is_key_like_js_1.types));
    }
    const value = (0, buffer_utils_js_1.concat)((0, buffer_utils_js_1.lengthAndInput)(buffer_utils_js_1.encoder.encode(algorithm)), (0, buffer_utils_js_1.lengthAndInput)(apu), (0, buffer_utils_js_1.lengthAndInput)(apv), (0, buffer_utils_js_1.uint32be)(keyLength));
    const sharedSecret = (0, crypto_1.diffieHellman)({
        privateKey,
        publicKey
    });
    return (0, buffer_utils_js_1.concatKdf)(sharedSecret, keyLength, value);
}
exports.deriveKey = deriveKey;
async function generateEpk(kee) {
    let key;
    if ((0, webcrypto_js_1.isCryptoKey)(kee)) {
        key = crypto_1.KeyObject.from(kee);
    } else if ((0, is_key_object_js_1.default)(kee)) {
        key = kee;
    } else {
        throw new TypeError((0, invalid_key_input_js_1.default)(kee, ...is_key_like_js_1.types));
    }
    switch(key.asymmetricKeyType){
        case 'x25519':
            return generateKeyPair('x25519');
        case 'x448':
            {
                return generateKeyPair('x448');
            }
        case 'ec':
            {
                const namedCurve = (0, get_named_curve_js_1.default)(key);
                return generateKeyPair('ec', {
                    namedCurve
                });
            }
        default:
            throw new errors_js_1.JOSENotSupported('Invalid or unsupported EPK');
    }
}
exports.generateEpk = generateEpk;
const ecdhAllowed = (key)=>[
        'P-256',
        'P-384',
        'P-521',
        'X25519',
        'X448'
    ].includes((0, get_named_curve_js_1.default)(key));
exports.ecdhAllowed = ecdhAllowed;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/check_p2s.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/util/errors.js [app-rsc] (ecmascript)");
function checkP2s(p2s) {
    if (!(p2s instanceof Uint8Array) || p2s.length < 8) {
        throw new errors_js_1.JWEInvalid('PBES2 Salt Input must be 8 or more octets');
    }
}
exports.default = checkP2s;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/pbes2kw.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.decrypt = exports.encrypt = void 0;
const util_1 = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
const crypto_1 = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
const random_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/random.js [app-rsc] (ecmascript)");
const buffer_utils_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/buffer_utils.js [app-rsc] (ecmascript)");
const base64url_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/base64url.js [app-rsc] (ecmascript)");
const aeskw_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/aeskw.js [app-rsc] (ecmascript)");
const check_p2s_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/check_p2s.js [app-rsc] (ecmascript)");
const webcrypto_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/webcrypto.js [app-rsc] (ecmascript)");
const crypto_key_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/crypto_key.js [app-rsc] (ecmascript)");
const is_key_object_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/is_key_object.js [app-rsc] (ecmascript)");
const invalid_key_input_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/invalid_key_input.js [app-rsc] (ecmascript)");
const is_key_like_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/is_key_like.js [app-rsc] (ecmascript)");
const pbkdf2 = (0, util_1.promisify)(crypto_1.pbkdf2);
function getPassword(key, alg) {
    if ((0, is_key_object_js_1.default)(key)) {
        return key.export();
    }
    if (key instanceof Uint8Array) {
        return key;
    }
    if ((0, webcrypto_js_1.isCryptoKey)(key)) {
        (0, crypto_key_js_1.checkEncCryptoKey)(key, alg, 'deriveBits', 'deriveKey');
        return crypto_1.KeyObject.from(key).export();
    }
    throw new TypeError((0, invalid_key_input_js_1.default)(key, ...is_key_like_js_1.types, 'Uint8Array'));
}
const encrypt = async (alg, key, cek, p2c = 2048, p2s = (0, random_js_1.default)(new Uint8Array(16)))=>{
    (0, check_p2s_js_1.default)(p2s);
    const salt = (0, buffer_utils_js_1.p2s)(alg, p2s);
    const keylen = parseInt(alg.slice(13, 16), 10) >> 3;
    const password = getPassword(key, alg);
    const derivedKey = await pbkdf2(password, salt, p2c, keylen, `sha${alg.slice(8, 11)}`);
    const encryptedKey = await (0, aeskw_js_1.wrap)(alg.slice(-6), derivedKey, cek);
    return {
        encryptedKey,
        p2c,
        p2s: (0, base64url_js_1.encode)(p2s)
    };
};
exports.encrypt = encrypt;
const decrypt = async (alg, key, encryptedKey, p2c, p2s)=>{
    (0, check_p2s_js_1.default)(p2s);
    const salt = (0, buffer_utils_js_1.p2s)(alg, p2s);
    const keylen = parseInt(alg.slice(13, 16), 10) >> 3;
    const password = getPassword(key, alg);
    const derivedKey = await pbkdf2(password, salt, p2c, keylen, `sha${alg.slice(8, 11)}`);
    return (0, aeskw_js_1.unwrap)(alg.slice(-6), derivedKey, encryptedKey);
};
exports.decrypt = decrypt;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/check_modulus_length.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setModulusLength = exports.weakMap = void 0;
exports.weakMap = new WeakMap();
const getLength = (buf, index)=>{
    let len = buf.readUInt8(1);
    if ((len & 0x80) === 0) {
        if (index === 0) {
            return len;
        }
        return getLength(buf.subarray(2 + len), index - 1);
    }
    const num = len & 0x7f;
    len = 0;
    for(let i = 0; i < num; i++){
        len <<= 8;
        const j = buf.readUInt8(2 + i);
        len |= j;
    }
    if (index === 0) {
        return len;
    }
    return getLength(buf.subarray(2 + len), index - 1);
};
const getLengthOfSeqIndex = (sequence, index)=>{
    const len = sequence.readUInt8(1);
    if ((len & 0x80) === 0) {
        return getLength(sequence.subarray(2), index);
    }
    const num = len & 0x7f;
    return getLength(sequence.subarray(2 + num), index);
};
const getModulusLength = (key)=>{
    var _a, _b;
    if (exports.weakMap.has(key)) {
        return exports.weakMap.get(key);
    }
    const modulusLength = (_b = (_a = key.asymmetricKeyDetails) === null || _a === void 0 ? void 0 : _a.modulusLength) !== null && _b !== void 0 ? _b : getLengthOfSeqIndex(key.export({
        format: 'der',
        type: 'pkcs1'
    }), key.type === 'private' ? 1 : 0) - 1 << 3;
    exports.weakMap.set(key, modulusLength);
    return modulusLength;
};
const setModulusLength = (keyObject, modulusLength)=>{
    exports.weakMap.set(keyObject, modulusLength);
};
exports.setModulusLength = setModulusLength;
exports.default = (key, alg)=>{
    if (getModulusLength(key) < 2048) {
        throw new TypeError(`${alg} requires key modulusLength to be 2048 bits or larger`);
    }
};
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/rsaes.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.decrypt = exports.encrypt = void 0;
const crypto_1 = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
const check_modulus_length_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/check_modulus_length.js [app-rsc] (ecmascript)");
const webcrypto_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/webcrypto.js [app-rsc] (ecmascript)");
const crypto_key_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/crypto_key.js [app-rsc] (ecmascript)");
const is_key_object_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/is_key_object.js [app-rsc] (ecmascript)");
const invalid_key_input_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/invalid_key_input.js [app-rsc] (ecmascript)");
const is_key_like_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/is_key_like.js [app-rsc] (ecmascript)");
const checkKey = (key, alg)=>{
    if (key.asymmetricKeyType !== 'rsa') {
        throw new TypeError('Invalid key for this operation, its asymmetricKeyType must be rsa');
    }
    (0, check_modulus_length_js_1.default)(key, alg);
};
const resolvePadding = (alg)=>{
    switch(alg){
        case 'RSA-OAEP':
        case 'RSA-OAEP-256':
        case 'RSA-OAEP-384':
        case 'RSA-OAEP-512':
            return crypto_1.constants.RSA_PKCS1_OAEP_PADDING;
        case 'RSA1_5':
            return crypto_1.constants.RSA_PKCS1_PADDING;
        default:
            return undefined;
    }
};
const resolveOaepHash = (alg)=>{
    switch(alg){
        case 'RSA-OAEP':
            return 'sha1';
        case 'RSA-OAEP-256':
            return 'sha256';
        case 'RSA-OAEP-384':
            return 'sha384';
        case 'RSA-OAEP-512':
            return 'sha512';
        default:
            return undefined;
    }
};
function ensureKeyObject(key, alg, ...usages) {
    if ((0, is_key_object_js_1.default)(key)) {
        return key;
    }
    if ((0, webcrypto_js_1.isCryptoKey)(key)) {
        (0, crypto_key_js_1.checkEncCryptoKey)(key, alg, ...usages);
        return crypto_1.KeyObject.from(key);
    }
    throw new TypeError((0, invalid_key_input_js_1.default)(key, ...is_key_like_js_1.types));
}
const encrypt = (alg, key, cek)=>{
    const padding = resolvePadding(alg);
    const oaepHash = resolveOaepHash(alg);
    const keyObject = ensureKeyObject(key, alg, 'wrapKey', 'encrypt');
    checkKey(keyObject, alg);
    return (0, crypto_1.publicEncrypt)({
        key: keyObject,
        oaepHash,
        padding
    }, cek);
};
exports.encrypt = encrypt;
const decrypt = (alg, key, encryptedKey)=>{
    const padding = resolvePadding(alg);
    const oaepHash = resolveOaepHash(alg);
    const keyObject = ensureKeyObject(key, alg, 'unwrapKey', 'decrypt');
    checkKey(keyObject, alg);
    return (0, crypto_1.privateDecrypt)({
        key: keyObject,
        oaepHash,
        padding
    }, encryptedKey);
};
exports.decrypt = decrypt;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/cek.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bitLength = void 0;
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/util/errors.js [app-rsc] (ecmascript)");
const random_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/random.js [app-rsc] (ecmascript)");
function bitLength(alg) {
    switch(alg){
        case 'A128GCM':
            return 128;
        case 'A192GCM':
            return 192;
        case 'A256GCM':
        case 'A128CBC-HS256':
            return 256;
        case 'A192CBC-HS384':
            return 384;
        case 'A256CBC-HS512':
            return 512;
        default:
            throw new errors_js_1.JOSENotSupported(`Unsupported JWE Algorithm: ${alg}`);
    }
}
exports.bitLength = bitLength;
exports.default = (alg)=>(0, random_js_1.default)(new Uint8Array(bitLength(alg) >> 3));
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/asn1.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fromX509 = exports.fromSPKI = exports.fromPKCS8 = exports.toPKCS8 = exports.toSPKI = void 0;
const crypto_1 = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
const buffer_1 = __turbopack_context__.r("[externals]/buffer [external] (buffer, cjs)");
const webcrypto_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/webcrypto.js [app-rsc] (ecmascript)");
const is_key_object_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/is_key_object.js [app-rsc] (ecmascript)");
const invalid_key_input_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/invalid_key_input.js [app-rsc] (ecmascript)");
const is_key_like_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/is_key_like.js [app-rsc] (ecmascript)");
const genericExport = (keyType, keyFormat, key)=>{
    let keyObject;
    if ((0, webcrypto_js_1.isCryptoKey)(key)) {
        if (!key.extractable) {
            throw new TypeError('CryptoKey is not extractable');
        }
        keyObject = crypto_1.KeyObject.from(key);
    } else if ((0, is_key_object_js_1.default)(key)) {
        keyObject = key;
    } else {
        throw new TypeError((0, invalid_key_input_js_1.default)(key, ...is_key_like_js_1.types));
    }
    if (keyObject.type !== keyType) {
        throw new TypeError(`key is not a ${keyType} key`);
    }
    return keyObject.export({
        format: 'pem',
        type: keyFormat
    });
};
const toSPKI = (key)=>{
    return genericExport('public', 'spki', key);
};
exports.toSPKI = toSPKI;
const toPKCS8 = (key)=>{
    return genericExport('private', 'pkcs8', key);
};
exports.toPKCS8 = toPKCS8;
const fromPKCS8 = (pem)=>(0, crypto_1.createPrivateKey)({
        key: buffer_1.Buffer.from(pem.replace(/(?:-----(?:BEGIN|END) PRIVATE KEY-----|\s)/g, ''), 'base64'),
        type: 'pkcs8',
        format: 'der'
    });
exports.fromPKCS8 = fromPKCS8;
const fromSPKI = (pem)=>(0, crypto_1.createPublicKey)({
        key: buffer_1.Buffer.from(pem.replace(/(?:-----(?:BEGIN|END) PUBLIC KEY-----|\s)/g, ''), 'base64'),
        type: 'spki',
        format: 'der'
    });
exports.fromSPKI = fromSPKI;
const fromX509 = (pem)=>(0, crypto_1.createPublicKey)({
        key: pem,
        type: 'spki',
        format: 'pem'
    });
exports.fromX509 = fromX509;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/asn1_sequence_encoder.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const buffer_1 = __turbopack_context__.r("[externals]/buffer [external] (buffer, cjs)");
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/util/errors.js [app-rsc] (ecmascript)");
const tagInteger = 0x02;
const tagBitStr = 0x03;
const tagOctStr = 0x04;
const tagSequence = 0x30;
const bZero = buffer_1.Buffer.from([
    0x00
]);
const bTagInteger = buffer_1.Buffer.from([
    tagInteger
]);
const bTagBitStr = buffer_1.Buffer.from([
    tagBitStr
]);
const bTagSequence = buffer_1.Buffer.from([
    tagSequence
]);
const bTagOctStr = buffer_1.Buffer.from([
    tagOctStr
]);
const encodeLength = (len)=>{
    if (len < 128) return buffer_1.Buffer.from([
        len
    ]);
    const buffer = buffer_1.Buffer.alloc(5);
    buffer.writeUInt32BE(len, 1);
    let offset = 1;
    while(buffer[offset] === 0)offset++;
    buffer[offset - 1] = 0x80 | 5 - offset;
    return buffer.slice(offset - 1);
};
const oids = new Map([
    [
        'P-256',
        buffer_1.Buffer.from('06 08 2A 86 48 CE 3D 03 01 07'.replace(/ /g, ''), 'hex')
    ],
    [
        'secp256k1',
        buffer_1.Buffer.from('06 05 2B 81 04 00 0A'.replace(/ /g, ''), 'hex')
    ],
    [
        'P-384',
        buffer_1.Buffer.from('06 05 2B 81 04 00 22'.replace(/ /g, ''), 'hex')
    ],
    [
        'P-521',
        buffer_1.Buffer.from('06 05 2B 81 04 00 23'.replace(/ /g, ''), 'hex')
    ],
    [
        'ecPublicKey',
        buffer_1.Buffer.from('06 07 2A 86 48 CE 3D 02 01'.replace(/ /g, ''), 'hex')
    ],
    [
        'X25519',
        buffer_1.Buffer.from('06 03 2B 65 6E'.replace(/ /g, ''), 'hex')
    ],
    [
        'X448',
        buffer_1.Buffer.from('06 03 2B 65 6F'.replace(/ /g, ''), 'hex')
    ],
    [
        'Ed25519',
        buffer_1.Buffer.from('06 03 2B 65 70'.replace(/ /g, ''), 'hex')
    ],
    [
        'Ed448',
        buffer_1.Buffer.from('06 03 2B 65 71'.replace(/ /g, ''), 'hex')
    ]
]);
class DumbAsn1Encoder {
    constructor(){
        this.length = 0;
        this.elements = [];
    }
    oidFor(oid) {
        const bOid = oids.get(oid);
        if (!bOid) {
            throw new errors_js_1.JOSENotSupported('Invalid or unsupported OID');
        }
        this.elements.push(bOid);
        this.length += bOid.length;
    }
    zero() {
        this.elements.push(bTagInteger, buffer_1.Buffer.from([
            0x01
        ]), bZero);
        this.length += 3;
    }
    one() {
        this.elements.push(bTagInteger, buffer_1.Buffer.from([
            0x01
        ]), buffer_1.Buffer.from([
            0x01
        ]));
        this.length += 3;
    }
    unsignedInteger(integer) {
        if (integer[0] & 0x80) {
            const len = encodeLength(integer.length + 1);
            this.elements.push(bTagInteger, len, bZero, integer);
            this.length += 2 + len.length + integer.length;
        } else {
            let i = 0;
            while(integer[i] === 0 && (integer[i + 1] & 0x80) === 0)i++;
            const len = encodeLength(integer.length - i);
            this.elements.push(bTagInteger, encodeLength(integer.length - i), integer.slice(i));
            this.length += 1 + len.length + integer.length - i;
        }
    }
    octStr(octStr) {
        const len = encodeLength(octStr.length);
        this.elements.push(bTagOctStr, encodeLength(octStr.length), octStr);
        this.length += 1 + len.length + octStr.length;
    }
    bitStr(bitS) {
        const len = encodeLength(bitS.length + 1);
        this.elements.push(bTagBitStr, encodeLength(bitS.length + 1), bZero, bitS);
        this.length += 1 + len.length + bitS.length + 1;
    }
    add(seq) {
        this.elements.push(seq);
        this.length += seq.length;
    }
    end(tag = bTagSequence) {
        const len = encodeLength(this.length);
        return buffer_1.Buffer.concat([
            tag,
            len,
            ...this.elements
        ], 1 + len.length + this.length);
    }
}
exports.default = DumbAsn1Encoder;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/flags.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.jwkImport = exports.jwkExport = exports.rsaPssParams = exports.oneShotCallback = void 0;
const [major, minor] = process.versions.node.split('.').map((str)=>parseInt(str, 10));
exports.oneShotCallback = major >= 16 || major === 15 && minor >= 13;
exports.rsaPssParams = !('electron' in process.versions) && (major >= 17 || major === 16 && minor >= 9);
exports.jwkExport = major >= 16 || major === 15 && minor >= 9;
exports.jwkImport = major >= 16 || major === 15 && minor >= 12;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/jwk_to_key.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const buffer_1 = __turbopack_context__.r("[externals]/buffer [external] (buffer, cjs)");
const crypto_1 = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
const base64url_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/base64url.js [app-rsc] (ecmascript)");
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/util/errors.js [app-rsc] (ecmascript)");
const get_named_curve_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/get_named_curve.js [app-rsc] (ecmascript)");
const check_modulus_length_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/check_modulus_length.js [app-rsc] (ecmascript)");
const asn1_sequence_encoder_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/asn1_sequence_encoder.js [app-rsc] (ecmascript)");
const flags_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/flags.js [app-rsc] (ecmascript)");
const parse = (jwk)=>{
    if (flags_js_1.jwkImport && jwk.kty !== 'oct') {
        return jwk.d ? (0, crypto_1.createPrivateKey)({
            format: 'jwk',
            key: jwk
        }) : (0, crypto_1.createPublicKey)({
            format: 'jwk',
            key: jwk
        });
    }
    switch(jwk.kty){
        case 'oct':
            {
                return (0, crypto_1.createSecretKey)((0, base64url_js_1.decode)(jwk.k));
            }
        case 'RSA':
            {
                const enc = new asn1_sequence_encoder_js_1.default();
                const isPrivate = jwk.d !== undefined;
                const modulus = buffer_1.Buffer.from(jwk.n, 'base64');
                const exponent = buffer_1.Buffer.from(jwk.e, 'base64');
                if (isPrivate) {
                    enc.zero();
                    enc.unsignedInteger(modulus);
                    enc.unsignedInteger(exponent);
                    enc.unsignedInteger(buffer_1.Buffer.from(jwk.d, 'base64'));
                    enc.unsignedInteger(buffer_1.Buffer.from(jwk.p, 'base64'));
                    enc.unsignedInteger(buffer_1.Buffer.from(jwk.q, 'base64'));
                    enc.unsignedInteger(buffer_1.Buffer.from(jwk.dp, 'base64'));
                    enc.unsignedInteger(buffer_1.Buffer.from(jwk.dq, 'base64'));
                    enc.unsignedInteger(buffer_1.Buffer.from(jwk.qi, 'base64'));
                } else {
                    enc.unsignedInteger(modulus);
                    enc.unsignedInteger(exponent);
                }
                const der = enc.end();
                const createInput = {
                    key: der,
                    format: 'der',
                    type: 'pkcs1'
                };
                const keyObject = isPrivate ? (0, crypto_1.createPrivateKey)(createInput) : (0, crypto_1.createPublicKey)(createInput);
                (0, check_modulus_length_js_1.setModulusLength)(keyObject, modulus.length << 3);
                return keyObject;
            }
        case 'EC':
            {
                const enc = new asn1_sequence_encoder_js_1.default();
                const isPrivate = jwk.d !== undefined;
                const pub = buffer_1.Buffer.concat([
                    buffer_1.Buffer.alloc(1, 4),
                    buffer_1.Buffer.from(jwk.x, 'base64'),
                    buffer_1.Buffer.from(jwk.y, 'base64')
                ]);
                if (isPrivate) {
                    enc.zero();
                    const enc$1 = new asn1_sequence_encoder_js_1.default();
                    enc$1.oidFor('ecPublicKey');
                    enc$1.oidFor(jwk.crv);
                    enc.add(enc$1.end());
                    const enc$2 = new asn1_sequence_encoder_js_1.default();
                    enc$2.one();
                    enc$2.octStr(buffer_1.Buffer.from(jwk.d, 'base64'));
                    const enc$3 = new asn1_sequence_encoder_js_1.default();
                    enc$3.bitStr(pub);
                    const f2 = enc$3.end(buffer_1.Buffer.from([
                        0xa1
                    ]));
                    enc$2.add(f2);
                    const f = enc$2.end();
                    const enc$4 = new asn1_sequence_encoder_js_1.default();
                    enc$4.add(f);
                    const f3 = enc$4.end(buffer_1.Buffer.from([
                        0x04
                    ]));
                    enc.add(f3);
                    const der = enc.end();
                    const keyObject = (0, crypto_1.createPrivateKey)({
                        key: der,
                        format: 'der',
                        type: 'pkcs8'
                    });
                    (0, get_named_curve_js_1.setCurve)(keyObject, jwk.crv);
                    return keyObject;
                }
                const enc$1 = new asn1_sequence_encoder_js_1.default();
                enc$1.oidFor('ecPublicKey');
                enc$1.oidFor(jwk.crv);
                enc.add(enc$1.end());
                enc.bitStr(pub);
                const der = enc.end();
                const keyObject = (0, crypto_1.createPublicKey)({
                    key: der,
                    format: 'der',
                    type: 'spki'
                });
                (0, get_named_curve_js_1.setCurve)(keyObject, jwk.crv);
                return keyObject;
            }
        case 'OKP':
            {
                const enc = new asn1_sequence_encoder_js_1.default();
                const isPrivate = jwk.d !== undefined;
                if (isPrivate) {
                    enc.zero();
                    const enc$1 = new asn1_sequence_encoder_js_1.default();
                    enc$1.oidFor(jwk.crv);
                    enc.add(enc$1.end());
                    const enc$2 = new asn1_sequence_encoder_js_1.default();
                    enc$2.octStr(buffer_1.Buffer.from(jwk.d, 'base64'));
                    const f = enc$2.end(buffer_1.Buffer.from([
                        0x04
                    ]));
                    enc.add(f);
                    const der = enc.end();
                    return (0, crypto_1.createPrivateKey)({
                        key: der,
                        format: 'der',
                        type: 'pkcs8'
                    });
                }
                const enc$1 = new asn1_sequence_encoder_js_1.default();
                enc$1.oidFor(jwk.crv);
                enc.add(enc$1.end());
                enc.bitStr(buffer_1.Buffer.from(jwk.x, 'base64'));
                const der = enc.end();
                return (0, crypto_1.createPublicKey)({
                    key: der,
                    format: 'der',
                    type: 'spki'
                });
            }
        default:
            throw new errors_js_1.JOSENotSupported('Invalid or unsupported JWK "kty" (Key Type) Parameter value');
    }
};
exports.default = parse;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/key/import.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.importJWK = exports.importPKCS8 = exports.importX509 = exports.importSPKI = void 0;
const base64url_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/base64url.js [app-rsc] (ecmascript)");
const asn1_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/asn1.js [app-rsc] (ecmascript)");
const jwk_to_key_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/jwk_to_key.js [app-rsc] (ecmascript)");
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/util/errors.js [app-rsc] (ecmascript)");
const is_object_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/is_object.js [app-rsc] (ecmascript)");
async function importSPKI(spki, alg, options) {
    if (typeof spki !== 'string' || spki.indexOf('-----BEGIN PUBLIC KEY-----') !== 0) {
        throw new TypeError('"spki" must be SPKI formatted string');
    }
    return (0, asn1_js_1.fromSPKI)(spki, alg, options);
}
exports.importSPKI = importSPKI;
async function importX509(x509, alg, options) {
    if (typeof x509 !== 'string' || x509.indexOf('-----BEGIN CERTIFICATE-----') !== 0) {
        throw new TypeError('"x509" must be X.509 formatted string');
    }
    return (0, asn1_js_1.fromX509)(x509, alg, options);
}
exports.importX509 = importX509;
async function importPKCS8(pkcs8, alg, options) {
    if (typeof pkcs8 !== 'string' || pkcs8.indexOf('-----BEGIN PRIVATE KEY-----') !== 0) {
        throw new TypeError('"pkcs8" must be PKCS#8 formatted string');
    }
    return (0, asn1_js_1.fromPKCS8)(pkcs8, alg, options);
}
exports.importPKCS8 = importPKCS8;
async function importJWK(jwk, alg, octAsKeyObject) {
    var _a;
    if (!(0, is_object_js_1.default)(jwk)) {
        throw new TypeError('JWK must be an object');
    }
    alg || (alg = jwk.alg);
    switch(jwk.kty){
        case 'oct':
            if (typeof jwk.k !== 'string' || !jwk.k) {
                throw new TypeError('missing "k" (Key Value) Parameter value');
            }
            octAsKeyObject !== null && octAsKeyObject !== void 0 ? octAsKeyObject : octAsKeyObject = jwk.ext !== true;
            if (octAsKeyObject) {
                return (0, jwk_to_key_js_1.default)({
                    ...jwk,
                    alg,
                    ext: (_a = jwk.ext) !== null && _a !== void 0 ? _a : false
                });
            }
            return (0, base64url_js_1.decode)(jwk.k);
        case 'RSA':
            if (jwk.oth !== undefined) {
                throw new errors_js_1.JOSENotSupported('RSA JWK "oth" (Other Primes Info) Parameter value is not supported');
            }
        case 'EC':
        case 'OKP':
            return (0, jwk_to_key_js_1.default)({
                ...jwk,
                alg
            });
        default:
            throw new errors_js_1.JOSENotSupported('Unsupported "kty" (Key Type) Parameter value');
    }
}
exports.importJWK = importJWK;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/check_key_type.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const invalid_key_input_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/invalid_key_input.js [app-rsc] (ecmascript)");
const is_key_like_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/is_key_like.js [app-rsc] (ecmascript)");
const symmetricTypeCheck = (alg, key)=>{
    if (key instanceof Uint8Array) return;
    if (!(0, is_key_like_js_1.default)(key)) {
        throw new TypeError((0, invalid_key_input_js_1.withAlg)(alg, key, ...is_key_like_js_1.types, 'Uint8Array'));
    }
    if (key.type !== 'secret') {
        throw new TypeError(`${is_key_like_js_1.types.join(' or ')} instances for symmetric algorithms must be of type "secret"`);
    }
};
const asymmetricTypeCheck = (alg, key, usage)=>{
    if (!(0, is_key_like_js_1.default)(key)) {
        throw new TypeError((0, invalid_key_input_js_1.withAlg)(alg, key, ...is_key_like_js_1.types));
    }
    if (key.type === 'secret') {
        throw new TypeError(`${is_key_like_js_1.types.join(' or ')} instances for asymmetric algorithms must not be of type "secret"`);
    }
    if (usage === 'sign' && key.type === 'public') {
        throw new TypeError(`${is_key_like_js_1.types.join(' or ')} instances for asymmetric algorithm signing must be of type "private"`);
    }
    if (usage === 'decrypt' && key.type === 'public') {
        throw new TypeError(`${is_key_like_js_1.types.join(' or ')} instances for asymmetric algorithm decryption must be of type "private"`);
    }
    if (key.algorithm && usage === 'verify' && key.type === 'private') {
        throw new TypeError(`${is_key_like_js_1.types.join(' or ')} instances for asymmetric algorithm verifying must be of type "public"`);
    }
    if (key.algorithm && usage === 'encrypt' && key.type === 'private') {
        throw new TypeError(`${is_key_like_js_1.types.join(' or ')} instances for asymmetric algorithm encryption must be of type "public"`);
    }
};
const checkKeyType = (alg, key, usage)=>{
    const symmetric = alg.startsWith('HS') || alg === 'dir' || alg.startsWith('PBES2') || /^A\d{3}(?:GCM)?KW$/.test(alg);
    if (symmetric) {
        symmetricTypeCheck(alg, key);
    } else {
        asymmetricTypeCheck(alg, key, usage);
    }
};
exports.default = checkKeyType;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/encrypt.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const crypto_1 = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
const check_iv_length_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/check_iv_length.js [app-rsc] (ecmascript)");
const check_cek_length_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/check_cek_length.js [app-rsc] (ecmascript)");
const buffer_utils_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/buffer_utils.js [app-rsc] (ecmascript)");
const cbc_tag_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/cbc_tag.js [app-rsc] (ecmascript)");
const webcrypto_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/webcrypto.js [app-rsc] (ecmascript)");
const crypto_key_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/crypto_key.js [app-rsc] (ecmascript)");
const is_key_object_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/is_key_object.js [app-rsc] (ecmascript)");
const invalid_key_input_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/invalid_key_input.js [app-rsc] (ecmascript)");
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/util/errors.js [app-rsc] (ecmascript)");
const ciphers_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/ciphers.js [app-rsc] (ecmascript)");
const is_key_like_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/is_key_like.js [app-rsc] (ecmascript)");
function cbcEncrypt(enc, plaintext, cek, iv, aad) {
    const keySize = parseInt(enc.slice(1, 4), 10);
    if ((0, is_key_object_js_1.default)(cek)) {
        cek = cek.export();
    }
    const encKey = cek.subarray(keySize >> 3);
    const macKey = cek.subarray(0, keySize >> 3);
    const algorithm = `aes-${keySize}-cbc`;
    if (!(0, ciphers_js_1.default)(algorithm)) {
        throw new errors_js_1.JOSENotSupported(`alg ${enc} is not supported by your javascript runtime`);
    }
    const cipher = (0, crypto_1.createCipheriv)(algorithm, encKey, iv);
    const ciphertext = (0, buffer_utils_js_1.concat)(cipher.update(plaintext), cipher.final());
    const macSize = parseInt(enc.slice(-3), 10);
    const tag = (0, cbc_tag_js_1.default)(aad, iv, ciphertext, macSize, macKey, keySize);
    return {
        ciphertext,
        tag
    };
}
function gcmEncrypt(enc, plaintext, cek, iv, aad) {
    const keySize = parseInt(enc.slice(1, 4), 10);
    const algorithm = `aes-${keySize}-gcm`;
    if (!(0, ciphers_js_1.default)(algorithm)) {
        throw new errors_js_1.JOSENotSupported(`alg ${enc} is not supported by your javascript runtime`);
    }
    const cipher = (0, crypto_1.createCipheriv)(algorithm, cek, iv, {
        authTagLength: 16
    });
    if (aad.byteLength) {
        cipher.setAAD(aad, {
            plaintextLength: plaintext.length
        });
    }
    const ciphertext = cipher.update(plaintext);
    cipher.final();
    const tag = cipher.getAuthTag();
    return {
        ciphertext,
        tag
    };
}
const encrypt = (enc, plaintext, cek, iv, aad)=>{
    let key;
    if ((0, webcrypto_js_1.isCryptoKey)(cek)) {
        (0, crypto_key_js_1.checkEncCryptoKey)(cek, enc, 'encrypt');
        key = crypto_1.KeyObject.from(cek);
    } else if (cek instanceof Uint8Array || (0, is_key_object_js_1.default)(cek)) {
        key = cek;
    } else {
        throw new TypeError((0, invalid_key_input_js_1.default)(cek, ...is_key_like_js_1.types, 'Uint8Array'));
    }
    (0, check_cek_length_js_1.default)(enc, key);
    (0, check_iv_length_js_1.default)(enc, iv);
    switch(enc){
        case 'A128CBC-HS256':
        case 'A192CBC-HS384':
        case 'A256CBC-HS512':
            return cbcEncrypt(enc, plaintext, key, iv, aad);
        case 'A128GCM':
        case 'A192GCM':
        case 'A256GCM':
            return gcmEncrypt(enc, plaintext, key, iv, aad);
        default:
            throw new errors_js_1.JOSENotSupported('Unsupported JWE Content Encryption Algorithm');
    }
};
exports.default = encrypt;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/aesgcmkw.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.unwrap = exports.wrap = void 0;
const encrypt_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/encrypt.js [app-rsc] (ecmascript)");
const decrypt_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/decrypt.js [app-rsc] (ecmascript)");
const iv_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/iv.js [app-rsc] (ecmascript)");
const base64url_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/base64url.js [app-rsc] (ecmascript)");
async function wrap(alg, key, cek, iv) {
    const jweAlgorithm = alg.slice(0, 7);
    iv || (iv = (0, iv_js_1.default)(jweAlgorithm));
    const { ciphertext: encryptedKey, tag } = await (0, encrypt_js_1.default)(jweAlgorithm, cek, key, iv, new Uint8Array(0));
    return {
        encryptedKey,
        iv: (0, base64url_js_1.encode)(iv),
        tag: (0, base64url_js_1.encode)(tag)
    };
}
exports.wrap = wrap;
async function unwrap(alg, key, encryptedKey, iv, tag) {
    const jweAlgorithm = alg.slice(0, 7);
    return (0, decrypt_js_1.default)(jweAlgorithm, key, encryptedKey, iv, tag, new Uint8Array(0));
}
exports.unwrap = unwrap;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/decrypt_key_management.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const aeskw_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/aeskw.js [app-rsc] (ecmascript)");
const ECDH = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/ecdhes.js [app-rsc] (ecmascript)");
const pbes2kw_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/pbes2kw.js [app-rsc] (ecmascript)");
const rsaes_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/rsaes.js [app-rsc] (ecmascript)");
const base64url_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/base64url.js [app-rsc] (ecmascript)");
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/util/errors.js [app-rsc] (ecmascript)");
const cek_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/cek.js [app-rsc] (ecmascript)");
const import_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/key/import.js [app-rsc] (ecmascript)");
const check_key_type_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/check_key_type.js [app-rsc] (ecmascript)");
const is_object_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/is_object.js [app-rsc] (ecmascript)");
const aesgcmkw_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/aesgcmkw.js [app-rsc] (ecmascript)");
async function decryptKeyManagement(alg, key, encryptedKey, joseHeader, options) {
    (0, check_key_type_js_1.default)(alg, key, 'decrypt');
    switch(alg){
        case 'dir':
            {
                if (encryptedKey !== undefined) throw new errors_js_1.JWEInvalid('Encountered unexpected JWE Encrypted Key');
                return key;
            }
        case 'ECDH-ES':
            if (encryptedKey !== undefined) throw new errors_js_1.JWEInvalid('Encountered unexpected JWE Encrypted Key');
        case 'ECDH-ES+A128KW':
        case 'ECDH-ES+A192KW':
        case 'ECDH-ES+A256KW':
            {
                if (!(0, is_object_js_1.default)(joseHeader.epk)) throw new errors_js_1.JWEInvalid(`JOSE Header "epk" (Ephemeral Public Key) missing or invalid`);
                if (!ECDH.ecdhAllowed(key)) throw new errors_js_1.JOSENotSupported('ECDH with the provided key is not allowed or not supported by your javascript runtime');
                const epk = await (0, import_js_1.importJWK)(joseHeader.epk, alg);
                let partyUInfo;
                let partyVInfo;
                if (joseHeader.apu !== undefined) {
                    if (typeof joseHeader.apu !== 'string') throw new errors_js_1.JWEInvalid(`JOSE Header "apu" (Agreement PartyUInfo) invalid`);
                    try {
                        partyUInfo = (0, base64url_js_1.decode)(joseHeader.apu);
                    } catch  {
                        throw new errors_js_1.JWEInvalid('Failed to base64url decode the apu');
                    }
                }
                if (joseHeader.apv !== undefined) {
                    if (typeof joseHeader.apv !== 'string') throw new errors_js_1.JWEInvalid(`JOSE Header "apv" (Agreement PartyVInfo) invalid`);
                    try {
                        partyVInfo = (0, base64url_js_1.decode)(joseHeader.apv);
                    } catch  {
                        throw new errors_js_1.JWEInvalid('Failed to base64url decode the apv');
                    }
                }
                const sharedSecret = await ECDH.deriveKey(epk, key, alg === 'ECDH-ES' ? joseHeader.enc : alg, alg === 'ECDH-ES' ? (0, cek_js_1.bitLength)(joseHeader.enc) : parseInt(alg.slice(-5, -2), 10), partyUInfo, partyVInfo);
                if (alg === 'ECDH-ES') return sharedSecret;
                if (encryptedKey === undefined) throw new errors_js_1.JWEInvalid('JWE Encrypted Key missing');
                return (0, aeskw_js_1.unwrap)(alg.slice(-6), sharedSecret, encryptedKey);
            }
        case 'RSA1_5':
        case 'RSA-OAEP':
        case 'RSA-OAEP-256':
        case 'RSA-OAEP-384':
        case 'RSA-OAEP-512':
            {
                if (encryptedKey === undefined) throw new errors_js_1.JWEInvalid('JWE Encrypted Key missing');
                return (0, rsaes_js_1.decrypt)(alg, key, encryptedKey);
            }
        case 'PBES2-HS256+A128KW':
        case 'PBES2-HS384+A192KW':
        case 'PBES2-HS512+A256KW':
            {
                if (encryptedKey === undefined) throw new errors_js_1.JWEInvalid('JWE Encrypted Key missing');
                if (typeof joseHeader.p2c !== 'number') throw new errors_js_1.JWEInvalid(`JOSE Header "p2c" (PBES2 Count) missing or invalid`);
                const p2cLimit = (options === null || options === void 0 ? void 0 : options.maxPBES2Count) || 10000;
                if (joseHeader.p2c > p2cLimit) throw new errors_js_1.JWEInvalid(`JOSE Header "p2c" (PBES2 Count) out is of acceptable bounds`);
                if (typeof joseHeader.p2s !== 'string') throw new errors_js_1.JWEInvalid(`JOSE Header "p2s" (PBES2 Salt) missing or invalid`);
                let p2s;
                try {
                    p2s = (0, base64url_js_1.decode)(joseHeader.p2s);
                } catch  {
                    throw new errors_js_1.JWEInvalid('Failed to base64url decode the p2s');
                }
                return (0, pbes2kw_js_1.decrypt)(alg, key, encryptedKey, joseHeader.p2c, p2s);
            }
        case 'A128KW':
        case 'A192KW':
        case 'A256KW':
            {
                if (encryptedKey === undefined) throw new errors_js_1.JWEInvalid('JWE Encrypted Key missing');
                return (0, aeskw_js_1.unwrap)(alg, key, encryptedKey);
            }
        case 'A128GCMKW':
        case 'A192GCMKW':
        case 'A256GCMKW':
            {
                if (encryptedKey === undefined) throw new errors_js_1.JWEInvalid('JWE Encrypted Key missing');
                if (typeof joseHeader.iv !== 'string') throw new errors_js_1.JWEInvalid(`JOSE Header "iv" (Initialization Vector) missing or invalid`);
                if (typeof joseHeader.tag !== 'string') throw new errors_js_1.JWEInvalid(`JOSE Header "tag" (Authentication Tag) missing or invalid`);
                let iv;
                try {
                    iv = (0, base64url_js_1.decode)(joseHeader.iv);
                } catch  {
                    throw new errors_js_1.JWEInvalid('Failed to base64url decode the iv');
                }
                let tag;
                try {
                    tag = (0, base64url_js_1.decode)(joseHeader.tag);
                } catch  {
                    throw new errors_js_1.JWEInvalid('Failed to base64url decode the tag');
                }
                return (0, aesgcmkw_js_1.unwrap)(alg, key, encryptedKey, iv, tag);
            }
        default:
            {
                throw new errors_js_1.JOSENotSupported('Invalid or unsupported "alg" (JWE Algorithm) header value');
            }
    }
}
exports.default = decryptKeyManagement;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/validate_crit.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/util/errors.js [app-rsc] (ecmascript)");
function validateCrit(Err, recognizedDefault, recognizedOption, protectedHeader, joseHeader) {
    if (joseHeader.crit !== undefined && protectedHeader.crit === undefined) {
        throw new Err('"crit" (Critical) Header Parameter MUST be integrity protected');
    }
    if (!protectedHeader || protectedHeader.crit === undefined) {
        return new Set();
    }
    if (!Array.isArray(protectedHeader.crit) || protectedHeader.crit.length === 0 || protectedHeader.crit.some((input)=>typeof input !== 'string' || input.length === 0)) {
        throw new Err('"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present');
    }
    let recognized;
    if (recognizedOption !== undefined) {
        recognized = new Map([
            ...Object.entries(recognizedOption),
            ...recognizedDefault.entries()
        ]);
    } else {
        recognized = recognizedDefault;
    }
    for (const parameter of protectedHeader.crit){
        if (!recognized.has(parameter)) {
            throw new errors_js_1.JOSENotSupported(`Extension Header Parameter "${parameter}" is not recognized`);
        }
        if (joseHeader[parameter] === undefined) {
            throw new Err(`Extension Header Parameter "${parameter}" is missing`);
        } else if (recognized.get(parameter) && protectedHeader[parameter] === undefined) {
            throw new Err(`Extension Header Parameter "${parameter}" MUST be integrity protected`);
        }
    }
    return new Set(protectedHeader.crit);
}
exports.default = validateCrit;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/validate_algorithms.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const validateAlgorithms = (option, algorithms)=>{
    if (algorithms !== undefined && (!Array.isArray(algorithms) || algorithms.some((s)=>typeof s !== 'string'))) {
        throw new TypeError(`"${option}" option must be an array of strings`);
    }
    if (!algorithms) {
        return undefined;
    }
    return new Set(algorithms);
};
exports.default = validateAlgorithms;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jwe/flattened/decrypt.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.flattenedDecrypt = void 0;
const base64url_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/base64url.js [app-rsc] (ecmascript)");
const decrypt_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/decrypt.js [app-rsc] (ecmascript)");
const zlib_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/zlib.js [app-rsc] (ecmascript)");
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/util/errors.js [app-rsc] (ecmascript)");
const is_disjoint_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/is_disjoint.js [app-rsc] (ecmascript)");
const is_object_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/is_object.js [app-rsc] (ecmascript)");
const decrypt_key_management_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/decrypt_key_management.js [app-rsc] (ecmascript)");
const buffer_utils_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/buffer_utils.js [app-rsc] (ecmascript)");
const cek_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/cek.js [app-rsc] (ecmascript)");
const validate_crit_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/validate_crit.js [app-rsc] (ecmascript)");
const validate_algorithms_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/validate_algorithms.js [app-rsc] (ecmascript)");
async function flattenedDecrypt(jwe, key, options) {
    var _a;
    if (!(0, is_object_js_1.default)(jwe)) {
        throw new errors_js_1.JWEInvalid('Flattened JWE must be an object');
    }
    if (jwe.protected === undefined && jwe.header === undefined && jwe.unprotected === undefined) {
        throw new errors_js_1.JWEInvalid('JOSE Header missing');
    }
    if (typeof jwe.iv !== 'string') {
        throw new errors_js_1.JWEInvalid('JWE Initialization Vector missing or incorrect type');
    }
    if (typeof jwe.ciphertext !== 'string') {
        throw new errors_js_1.JWEInvalid('JWE Ciphertext missing or incorrect type');
    }
    if (typeof jwe.tag !== 'string') {
        throw new errors_js_1.JWEInvalid('JWE Authentication Tag missing or incorrect type');
    }
    if (jwe.protected !== undefined && typeof jwe.protected !== 'string') {
        throw new errors_js_1.JWEInvalid('JWE Protected Header incorrect type');
    }
    if (jwe.encrypted_key !== undefined && typeof jwe.encrypted_key !== 'string') {
        throw new errors_js_1.JWEInvalid('JWE Encrypted Key incorrect type');
    }
    if (jwe.aad !== undefined && typeof jwe.aad !== 'string') {
        throw new errors_js_1.JWEInvalid('JWE AAD incorrect type');
    }
    if (jwe.header !== undefined && !(0, is_object_js_1.default)(jwe.header)) {
        throw new errors_js_1.JWEInvalid('JWE Shared Unprotected Header incorrect type');
    }
    if (jwe.unprotected !== undefined && !(0, is_object_js_1.default)(jwe.unprotected)) {
        throw new errors_js_1.JWEInvalid('JWE Per-Recipient Unprotected Header incorrect type');
    }
    let parsedProt;
    if (jwe.protected) {
        try {
            const protectedHeader = (0, base64url_js_1.decode)(jwe.protected);
            parsedProt = JSON.parse(buffer_utils_js_1.decoder.decode(protectedHeader));
        } catch  {
            throw new errors_js_1.JWEInvalid('JWE Protected Header is invalid');
        }
    }
    if (!(0, is_disjoint_js_1.default)(parsedProt, jwe.header, jwe.unprotected)) {
        throw new errors_js_1.JWEInvalid('JWE Protected, JWE Unprotected Header, and JWE Per-Recipient Unprotected Header Parameter names must be disjoint');
    }
    const joseHeader = {
        ...parsedProt,
        ...jwe.header,
        ...jwe.unprotected
    };
    (0, validate_crit_js_1.default)(errors_js_1.JWEInvalid, new Map(), options === null || options === void 0 ? void 0 : options.crit, parsedProt, joseHeader);
    if (joseHeader.zip !== undefined) {
        if (!parsedProt || !parsedProt.zip) {
            throw new errors_js_1.JWEInvalid('JWE "zip" (Compression Algorithm) Header MUST be integrity protected');
        }
        if (joseHeader.zip !== 'DEF') {
            throw new errors_js_1.JOSENotSupported('Unsupported JWE "zip" (Compression Algorithm) Header Parameter value');
        }
    }
    const { alg, enc } = joseHeader;
    if (typeof alg !== 'string' || !alg) {
        throw new errors_js_1.JWEInvalid('missing JWE Algorithm (alg) in JWE Header');
    }
    if (typeof enc !== 'string' || !enc) {
        throw new errors_js_1.JWEInvalid('missing JWE Encryption Algorithm (enc) in JWE Header');
    }
    const keyManagementAlgorithms = options && (0, validate_algorithms_js_1.default)('keyManagementAlgorithms', options.keyManagementAlgorithms);
    const contentEncryptionAlgorithms = options && (0, validate_algorithms_js_1.default)('contentEncryptionAlgorithms', options.contentEncryptionAlgorithms);
    if (keyManagementAlgorithms && !keyManagementAlgorithms.has(alg)) {
        throw new errors_js_1.JOSEAlgNotAllowed('"alg" (Algorithm) Header Parameter not allowed');
    }
    if (contentEncryptionAlgorithms && !contentEncryptionAlgorithms.has(enc)) {
        throw new errors_js_1.JOSEAlgNotAllowed('"enc" (Encryption Algorithm) Header Parameter not allowed');
    }
    let encryptedKey;
    if (jwe.encrypted_key !== undefined) {
        try {
            encryptedKey = (0, base64url_js_1.decode)(jwe.encrypted_key);
        } catch  {
            throw new errors_js_1.JWEInvalid('Failed to base64url decode the encrypted_key');
        }
    }
    let resolvedKey = false;
    if (typeof key === 'function') {
        key = await key(parsedProt, jwe);
        resolvedKey = true;
    }
    let cek;
    try {
        cek = await (0, decrypt_key_management_js_1.default)(alg, key, encryptedKey, joseHeader, options);
    } catch (err) {
        if (err instanceof TypeError || err instanceof errors_js_1.JWEInvalid || err instanceof errors_js_1.JOSENotSupported) {
            throw err;
        }
        cek = (0, cek_js_1.default)(enc);
    }
    let iv;
    let tag;
    try {
        iv = (0, base64url_js_1.decode)(jwe.iv);
    } catch  {
        throw new errors_js_1.JWEInvalid('Failed to base64url decode the iv');
    }
    try {
        tag = (0, base64url_js_1.decode)(jwe.tag);
    } catch  {
        throw new errors_js_1.JWEInvalid('Failed to base64url decode the tag');
    }
    const protectedHeader = buffer_utils_js_1.encoder.encode((_a = jwe.protected) !== null && _a !== void 0 ? _a : '');
    let additionalData;
    if (jwe.aad !== undefined) {
        additionalData = (0, buffer_utils_js_1.concat)(protectedHeader, buffer_utils_js_1.encoder.encode('.'), buffer_utils_js_1.encoder.encode(jwe.aad));
    } else {
        additionalData = protectedHeader;
    }
    let ciphertext;
    try {
        ciphertext = (0, base64url_js_1.decode)(jwe.ciphertext);
    } catch  {
        throw new errors_js_1.JWEInvalid('Failed to base64url decode the ciphertext');
    }
    let plaintext = await (0, decrypt_js_1.default)(enc, cek, ciphertext, iv, tag, additionalData);
    if (joseHeader.zip === 'DEF') {
        plaintext = await ((options === null || options === void 0 ? void 0 : options.inflateRaw) || zlib_js_1.inflate)(plaintext);
    }
    const result = {
        plaintext
    };
    if (jwe.protected !== undefined) {
        result.protectedHeader = parsedProt;
    }
    if (jwe.aad !== undefined) {
        try {
            result.additionalAuthenticatedData = (0, base64url_js_1.decode)(jwe.aad);
        } catch  {
            throw new errors_js_1.JWEInvalid('Failed to base64url decode the aad');
        }
    }
    if (jwe.unprotected !== undefined) {
        result.sharedUnprotectedHeader = jwe.unprotected;
    }
    if (jwe.header !== undefined) {
        result.unprotectedHeader = jwe.header;
    }
    if (resolvedKey) {
        return {
            ...result,
            key
        };
    }
    return result;
}
exports.flattenedDecrypt = flattenedDecrypt;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jwe/compact/decrypt.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.compactDecrypt = void 0;
const decrypt_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jwe/flattened/decrypt.js [app-rsc] (ecmascript)");
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/util/errors.js [app-rsc] (ecmascript)");
const buffer_utils_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/buffer_utils.js [app-rsc] (ecmascript)");
async function compactDecrypt(jwe, key, options) {
    if (jwe instanceof Uint8Array) {
        jwe = buffer_utils_js_1.decoder.decode(jwe);
    }
    if (typeof jwe !== 'string') {
        throw new errors_js_1.JWEInvalid('Compact JWE must be a string or Uint8Array');
    }
    const { 0: protectedHeader, 1: encryptedKey, 2: iv, 3: ciphertext, 4: tag, length } = jwe.split('.');
    if (length !== 5) {
        throw new errors_js_1.JWEInvalid('Invalid Compact JWE');
    }
    const decrypted = await (0, decrypt_js_1.flattenedDecrypt)({
        ciphertext,
        iv: iv || undefined,
        protected: protectedHeader || undefined,
        tag: tag || undefined,
        encrypted_key: encryptedKey || undefined
    }, key, options);
    const result = {
        plaintext: decrypted.plaintext,
        protectedHeader: decrypted.protectedHeader
    };
    if (typeof key === 'function') {
        return {
            ...result,
            key: decrypted.key
        };
    }
    return result;
}
exports.compactDecrypt = compactDecrypt;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jwe/general/decrypt.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.generalDecrypt = void 0;
const decrypt_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jwe/flattened/decrypt.js [app-rsc] (ecmascript)");
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/util/errors.js [app-rsc] (ecmascript)");
const is_object_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/is_object.js [app-rsc] (ecmascript)");
async function generalDecrypt(jwe, key, options) {
    if (!(0, is_object_js_1.default)(jwe)) {
        throw new errors_js_1.JWEInvalid('General JWE must be an object');
    }
    if (!Array.isArray(jwe.recipients) || !jwe.recipients.every(is_object_js_1.default)) {
        throw new errors_js_1.JWEInvalid('JWE Recipients missing or incorrect type');
    }
    if (!jwe.recipients.length) {
        throw new errors_js_1.JWEInvalid('JWE Recipients has no members');
    }
    for (const recipient of jwe.recipients){
        try {
            return await (0, decrypt_js_1.flattenedDecrypt)({
                aad: jwe.aad,
                ciphertext: jwe.ciphertext,
                encrypted_key: recipient.encrypted_key,
                header: recipient.header,
                iv: jwe.iv,
                protected: jwe.protected,
                tag: jwe.tag,
                unprotected: jwe.unprotected
            }, key, options);
        } catch  {}
    }
    throw new errors_js_1.JWEDecryptionFailed();
}
exports.generalDecrypt = generalDecrypt;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/asn1_sequence_decoder.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const tagInteger = 0x02;
const tagSequence = 0x30;
class Asn1SequenceDecoder {
    constructor(buffer){
        if (buffer[0] !== tagSequence) {
            throw new TypeError();
        }
        this.buffer = buffer;
        this.offset = 1;
        const len = this.decodeLength();
        if (len !== buffer.length - this.offset) {
            throw new TypeError();
        }
    }
    decodeLength() {
        let length = this.buffer[this.offset++];
        if (length & 0x80) {
            const nBytes = length & ~0x80;
            length = 0;
            for(let i = 0; i < nBytes; i++)length = length << 8 | this.buffer[this.offset + i];
            this.offset += nBytes;
        }
        return length;
    }
    unsignedInteger() {
        if (this.buffer[this.offset++] !== tagInteger) {
            throw new TypeError();
        }
        let length = this.decodeLength();
        if (this.buffer[this.offset] === 0) {
            this.offset++;
            length--;
        }
        const result = this.buffer.slice(this.offset, this.offset + length);
        this.offset += length;
        return result;
    }
    end() {
        if (this.offset !== this.buffer.length) {
            throw new TypeError();
        }
    }
}
exports.default = Asn1SequenceDecoder;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/key_to_jwk.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const crypto_1 = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
const base64url_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/base64url.js [app-rsc] (ecmascript)");
const asn1_sequence_decoder_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/asn1_sequence_decoder.js [app-rsc] (ecmascript)");
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/util/errors.js [app-rsc] (ecmascript)");
const get_named_curve_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/get_named_curve.js [app-rsc] (ecmascript)");
const webcrypto_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/webcrypto.js [app-rsc] (ecmascript)");
const is_key_object_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/is_key_object.js [app-rsc] (ecmascript)");
const invalid_key_input_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/invalid_key_input.js [app-rsc] (ecmascript)");
const is_key_like_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/is_key_like.js [app-rsc] (ecmascript)");
const flags_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/flags.js [app-rsc] (ecmascript)");
const keyToJWK = (key)=>{
    let keyObject;
    if ((0, webcrypto_js_1.isCryptoKey)(key)) {
        if (!key.extractable) {
            throw new TypeError('CryptoKey is not extractable');
        }
        keyObject = crypto_1.KeyObject.from(key);
    } else if ((0, is_key_object_js_1.default)(key)) {
        keyObject = key;
    } else if (key instanceof Uint8Array) {
        return {
            kty: 'oct',
            k: (0, base64url_js_1.encode)(key)
        };
    } else {
        throw new TypeError((0, invalid_key_input_js_1.default)(key, ...is_key_like_js_1.types, 'Uint8Array'));
    }
    if (flags_js_1.jwkExport) {
        if (keyObject.type !== 'secret' && ![
            'rsa',
            'ec',
            'ed25519',
            'x25519',
            'ed448',
            'x448'
        ].includes(keyObject.asymmetricKeyType)) {
            throw new errors_js_1.JOSENotSupported('Unsupported key asymmetricKeyType');
        }
        return keyObject.export({
            format: 'jwk'
        });
    }
    switch(keyObject.type){
        case 'secret':
            return {
                kty: 'oct',
                k: (0, base64url_js_1.encode)(keyObject.export())
            };
        case 'private':
        case 'public':
            {
                switch(keyObject.asymmetricKeyType){
                    case 'rsa':
                        {
                            const der = keyObject.export({
                                format: 'der',
                                type: 'pkcs1'
                            });
                            const dec = new asn1_sequence_decoder_js_1.default(der);
                            if (keyObject.type === 'private') {
                                dec.unsignedInteger();
                            }
                            const n = (0, base64url_js_1.encode)(dec.unsignedInteger());
                            const e = (0, base64url_js_1.encode)(dec.unsignedInteger());
                            let jwk;
                            if (keyObject.type === 'private') {
                                jwk = {
                                    d: (0, base64url_js_1.encode)(dec.unsignedInteger()),
                                    p: (0, base64url_js_1.encode)(dec.unsignedInteger()),
                                    q: (0, base64url_js_1.encode)(dec.unsignedInteger()),
                                    dp: (0, base64url_js_1.encode)(dec.unsignedInteger()),
                                    dq: (0, base64url_js_1.encode)(dec.unsignedInteger()),
                                    qi: (0, base64url_js_1.encode)(dec.unsignedInteger())
                                };
                            }
                            dec.end();
                            return {
                                kty: 'RSA',
                                n,
                                e,
                                ...jwk
                            };
                        }
                    case 'ec':
                        {
                            const crv = (0, get_named_curve_js_1.default)(keyObject);
                            let len;
                            let offset;
                            let correction;
                            switch(crv){
                                case 'secp256k1':
                                    len = 64;
                                    offset = 31 + 2;
                                    correction = -1;
                                    break;
                                case 'P-256':
                                    len = 64;
                                    offset = 34 + 2;
                                    correction = -1;
                                    break;
                                case 'P-384':
                                    len = 96;
                                    offset = 33 + 2;
                                    correction = -3;
                                    break;
                                case 'P-521':
                                    len = 132;
                                    offset = 33 + 2;
                                    correction = -3;
                                    break;
                                default:
                                    throw new errors_js_1.JOSENotSupported('Unsupported curve');
                            }
                            if (keyObject.type === 'public') {
                                const der = keyObject.export({
                                    type: 'spki',
                                    format: 'der'
                                });
                                return {
                                    kty: 'EC',
                                    crv,
                                    x: (0, base64url_js_1.encode)(der.subarray(-len, -len / 2)),
                                    y: (0, base64url_js_1.encode)(der.subarray(-len / 2))
                                };
                            }
                            const der = keyObject.export({
                                type: 'pkcs8',
                                format: 'der'
                            });
                            if (der.length < 100) {
                                offset += correction;
                            }
                            return {
                                ...keyToJWK((0, crypto_1.createPublicKey)(keyObject)),
                                d: (0, base64url_js_1.encode)(der.subarray(offset, offset + len / 2))
                            };
                        }
                    case 'ed25519':
                    case 'x25519':
                        {
                            const crv = (0, get_named_curve_js_1.default)(keyObject);
                            if (keyObject.type === 'public') {
                                const der = keyObject.export({
                                    type: 'spki',
                                    format: 'der'
                                });
                                return {
                                    kty: 'OKP',
                                    crv,
                                    x: (0, base64url_js_1.encode)(der.subarray(-32))
                                };
                            }
                            const der = keyObject.export({
                                type: 'pkcs8',
                                format: 'der'
                            });
                            return {
                                ...keyToJWK((0, crypto_1.createPublicKey)(keyObject)),
                                d: (0, base64url_js_1.encode)(der.subarray(-32))
                            };
                        }
                    case 'ed448':
                    case 'x448':
                        {
                            const crv = (0, get_named_curve_js_1.default)(keyObject);
                            if (keyObject.type === 'public') {
                                const der = keyObject.export({
                                    type: 'spki',
                                    format: 'der'
                                });
                                return {
                                    kty: 'OKP',
                                    crv,
                                    x: (0, base64url_js_1.encode)(der.subarray(crv === 'Ed448' ? -57 : -56))
                                };
                            }
                            const der = keyObject.export({
                                type: 'pkcs8',
                                format: 'der'
                            });
                            return {
                                ...keyToJWK((0, crypto_1.createPublicKey)(keyObject)),
                                d: (0, base64url_js_1.encode)(der.subarray(crv === 'Ed448' ? -57 : -56))
                            };
                        }
                    default:
                        throw new errors_js_1.JOSENotSupported('Unsupported key asymmetricKeyType');
                }
            }
        default:
            throw new errors_js_1.JOSENotSupported('Unsupported key type');
    }
};
exports.default = keyToJWK;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/key/export.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.exportJWK = exports.exportPKCS8 = exports.exportSPKI = void 0;
const asn1_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/asn1.js [app-rsc] (ecmascript)");
const asn1_js_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/asn1.js [app-rsc] (ecmascript)");
const key_to_jwk_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/key_to_jwk.js [app-rsc] (ecmascript)");
async function exportSPKI(key) {
    return (0, asn1_js_1.toSPKI)(key);
}
exports.exportSPKI = exportSPKI;
async function exportPKCS8(key) {
    return (0, asn1_js_2.toPKCS8)(key);
}
exports.exportPKCS8 = exportPKCS8;
async function exportJWK(key) {
    return (0, key_to_jwk_js_1.default)(key);
}
exports.exportJWK = exportJWK;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/encrypt_key_management.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const aeskw_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/aeskw.js [app-rsc] (ecmascript)");
const ECDH = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/ecdhes.js [app-rsc] (ecmascript)");
const pbes2kw_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/pbes2kw.js [app-rsc] (ecmascript)");
const rsaes_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/rsaes.js [app-rsc] (ecmascript)");
const base64url_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/base64url.js [app-rsc] (ecmascript)");
const cek_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/cek.js [app-rsc] (ecmascript)");
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/util/errors.js [app-rsc] (ecmascript)");
const export_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/key/export.js [app-rsc] (ecmascript)");
const check_key_type_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/check_key_type.js [app-rsc] (ecmascript)");
const aesgcmkw_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/aesgcmkw.js [app-rsc] (ecmascript)");
async function encryptKeyManagement(alg, enc, key, providedCek, providedParameters = {}) {
    let encryptedKey;
    let parameters;
    let cek;
    (0, check_key_type_js_1.default)(alg, key, 'encrypt');
    switch(alg){
        case 'dir':
            {
                cek = key;
                break;
            }
        case 'ECDH-ES':
        case 'ECDH-ES+A128KW':
        case 'ECDH-ES+A192KW':
        case 'ECDH-ES+A256KW':
            {
                if (!ECDH.ecdhAllowed(key)) {
                    throw new errors_js_1.JOSENotSupported('ECDH with the provided key is not allowed or not supported by your javascript runtime');
                }
                const { apu, apv } = providedParameters;
                let { epk: ephemeralKey } = providedParameters;
                ephemeralKey || (ephemeralKey = (await ECDH.generateEpk(key)).privateKey);
                const { x, y, crv, kty } = await (0, export_js_1.exportJWK)(ephemeralKey);
                const sharedSecret = await ECDH.deriveKey(key, ephemeralKey, alg === 'ECDH-ES' ? enc : alg, alg === 'ECDH-ES' ? (0, cek_js_1.bitLength)(enc) : parseInt(alg.slice(-5, -2), 10), apu, apv);
                parameters = {
                    epk: {
                        x,
                        crv,
                        kty
                    }
                };
                if (kty === 'EC') parameters.epk.y = y;
                if (apu) parameters.apu = (0, base64url_js_1.encode)(apu);
                if (apv) parameters.apv = (0, base64url_js_1.encode)(apv);
                if (alg === 'ECDH-ES') {
                    cek = sharedSecret;
                    break;
                }
                cek = providedCek || (0, cek_js_1.default)(enc);
                const kwAlg = alg.slice(-6);
                encryptedKey = await (0, aeskw_js_1.wrap)(kwAlg, sharedSecret, cek);
                break;
            }
        case 'RSA1_5':
        case 'RSA-OAEP':
        case 'RSA-OAEP-256':
        case 'RSA-OAEP-384':
        case 'RSA-OAEP-512':
            {
                cek = providedCek || (0, cek_js_1.default)(enc);
                encryptedKey = await (0, rsaes_js_1.encrypt)(alg, key, cek);
                break;
            }
        case 'PBES2-HS256+A128KW':
        case 'PBES2-HS384+A192KW':
        case 'PBES2-HS512+A256KW':
            {
                cek = providedCek || (0, cek_js_1.default)(enc);
                const { p2c, p2s } = providedParameters;
                ({ encryptedKey, ...parameters } = await (0, pbes2kw_js_1.encrypt)(alg, key, cek, p2c, p2s));
                break;
            }
        case 'A128KW':
        case 'A192KW':
        case 'A256KW':
            {
                cek = providedCek || (0, cek_js_1.default)(enc);
                encryptedKey = await (0, aeskw_js_1.wrap)(alg, key, cek);
                break;
            }
        case 'A128GCMKW':
        case 'A192GCMKW':
        case 'A256GCMKW':
            {
                cek = providedCek || (0, cek_js_1.default)(enc);
                const { iv } = providedParameters;
                ({ encryptedKey, ...parameters } = await (0, aesgcmkw_js_1.wrap)(alg, key, cek, iv));
                break;
            }
        default:
            {
                throw new errors_js_1.JOSENotSupported('Invalid or unsupported "alg" (JWE Algorithm) header value');
            }
    }
    return {
        cek,
        encryptedKey,
        parameters
    };
}
exports.default = encryptKeyManagement;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jwe/flattened/encrypt.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FlattenedEncrypt = exports.unprotected = void 0;
const base64url_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/base64url.js [app-rsc] (ecmascript)");
const encrypt_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/encrypt.js [app-rsc] (ecmascript)");
const zlib_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/zlib.js [app-rsc] (ecmascript)");
const iv_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/iv.js [app-rsc] (ecmascript)");
const encrypt_key_management_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/encrypt_key_management.js [app-rsc] (ecmascript)");
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/util/errors.js [app-rsc] (ecmascript)");
const is_disjoint_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/is_disjoint.js [app-rsc] (ecmascript)");
const buffer_utils_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/buffer_utils.js [app-rsc] (ecmascript)");
const validate_crit_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/validate_crit.js [app-rsc] (ecmascript)");
exports.unprotected = Symbol();
class FlattenedEncrypt {
    constructor(plaintext){
        if (!(plaintext instanceof Uint8Array)) {
            throw new TypeError('plaintext must be an instance of Uint8Array');
        }
        this._plaintext = plaintext;
    }
    setKeyManagementParameters(parameters) {
        if (this._keyManagementParameters) {
            throw new TypeError('setKeyManagementParameters can only be called once');
        }
        this._keyManagementParameters = parameters;
        return this;
    }
    setProtectedHeader(protectedHeader) {
        if (this._protectedHeader) {
            throw new TypeError('setProtectedHeader can only be called once');
        }
        this._protectedHeader = protectedHeader;
        return this;
    }
    setSharedUnprotectedHeader(sharedUnprotectedHeader) {
        if (this._sharedUnprotectedHeader) {
            throw new TypeError('setSharedUnprotectedHeader can only be called once');
        }
        this._sharedUnprotectedHeader = sharedUnprotectedHeader;
        return this;
    }
    setUnprotectedHeader(unprotectedHeader) {
        if (this._unprotectedHeader) {
            throw new TypeError('setUnprotectedHeader can only be called once');
        }
        this._unprotectedHeader = unprotectedHeader;
        return this;
    }
    setAdditionalAuthenticatedData(aad) {
        this._aad = aad;
        return this;
    }
    setContentEncryptionKey(cek) {
        if (this._cek) {
            throw new TypeError('setContentEncryptionKey can only be called once');
        }
        this._cek = cek;
        return this;
    }
    setInitializationVector(iv) {
        if (this._iv) {
            throw new TypeError('setInitializationVector can only be called once');
        }
        this._iv = iv;
        return this;
    }
    async encrypt(key, options) {
        if (!this._protectedHeader && !this._unprotectedHeader && !this._sharedUnprotectedHeader) {
            throw new errors_js_1.JWEInvalid('either setProtectedHeader, setUnprotectedHeader, or sharedUnprotectedHeader must be called before #encrypt()');
        }
        if (!(0, is_disjoint_js_1.default)(this._protectedHeader, this._unprotectedHeader, this._sharedUnprotectedHeader)) {
            throw new errors_js_1.JWEInvalid('JWE Protected, JWE Shared Unprotected and JWE Per-Recipient Header Parameter names must be disjoint');
        }
        const joseHeader = {
            ...this._protectedHeader,
            ...this._unprotectedHeader,
            ...this._sharedUnprotectedHeader
        };
        (0, validate_crit_js_1.default)(errors_js_1.JWEInvalid, new Map(), options === null || options === void 0 ? void 0 : options.crit, this._protectedHeader, joseHeader);
        if (joseHeader.zip !== undefined) {
            if (!this._protectedHeader || !this._protectedHeader.zip) {
                throw new errors_js_1.JWEInvalid('JWE "zip" (Compression Algorithm) Header MUST be integrity protected');
            }
            if (joseHeader.zip !== 'DEF') {
                throw new errors_js_1.JOSENotSupported('Unsupported JWE "zip" (Compression Algorithm) Header Parameter value');
            }
        }
        const { alg, enc } = joseHeader;
        if (typeof alg !== 'string' || !alg) {
            throw new errors_js_1.JWEInvalid('JWE "alg" (Algorithm) Header Parameter missing or invalid');
        }
        if (typeof enc !== 'string' || !enc) {
            throw new errors_js_1.JWEInvalid('JWE "enc" (Encryption Algorithm) Header Parameter missing or invalid');
        }
        let encryptedKey;
        if (alg === 'dir') {
            if (this._cek) {
                throw new TypeError('setContentEncryptionKey cannot be called when using Direct Encryption');
            }
        } else if (alg === 'ECDH-ES') {
            if (this._cek) {
                throw new TypeError('setContentEncryptionKey cannot be called when using Direct Key Agreement');
            }
        }
        let cek;
        {
            let parameters;
            ({ cek, encryptedKey, parameters } = await (0, encrypt_key_management_js_1.default)(alg, enc, key, this._cek, this._keyManagementParameters));
            if (parameters) {
                if (options && exports.unprotected in options) {
                    if (!this._unprotectedHeader) {
                        this.setUnprotectedHeader(parameters);
                    } else {
                        this._unprotectedHeader = {
                            ...this._unprotectedHeader,
                            ...parameters
                        };
                    }
                } else {
                    if (!this._protectedHeader) {
                        this.setProtectedHeader(parameters);
                    } else {
                        this._protectedHeader = {
                            ...this._protectedHeader,
                            ...parameters
                        };
                    }
                }
            }
        }
        this._iv || (this._iv = (0, iv_js_1.default)(enc));
        let additionalData;
        let protectedHeader;
        let aadMember;
        if (this._protectedHeader) {
            protectedHeader = buffer_utils_js_1.encoder.encode((0, base64url_js_1.encode)(JSON.stringify(this._protectedHeader)));
        } else {
            protectedHeader = buffer_utils_js_1.encoder.encode('');
        }
        if (this._aad) {
            aadMember = (0, base64url_js_1.encode)(this._aad);
            additionalData = (0, buffer_utils_js_1.concat)(protectedHeader, buffer_utils_js_1.encoder.encode('.'), buffer_utils_js_1.encoder.encode(aadMember));
        } else {
            additionalData = protectedHeader;
        }
        let ciphertext;
        let tag;
        if (joseHeader.zip === 'DEF') {
            const deflated = await ((options === null || options === void 0 ? void 0 : options.deflateRaw) || zlib_js_1.deflate)(this._plaintext);
            ({ ciphertext, tag } = await (0, encrypt_js_1.default)(enc, deflated, cek, this._iv, additionalData));
        } else {
            ;
            ({ ciphertext, tag } = await (0, encrypt_js_1.default)(enc, this._plaintext, cek, this._iv, additionalData));
        }
        const jwe = {
            ciphertext: (0, base64url_js_1.encode)(ciphertext),
            iv: (0, base64url_js_1.encode)(this._iv),
            tag: (0, base64url_js_1.encode)(tag)
        };
        if (encryptedKey) {
            jwe.encrypted_key = (0, base64url_js_1.encode)(encryptedKey);
        }
        if (aadMember) {
            jwe.aad = aadMember;
        }
        if (this._protectedHeader) {
            jwe.protected = buffer_utils_js_1.decoder.decode(protectedHeader);
        }
        if (this._sharedUnprotectedHeader) {
            jwe.unprotected = this._sharedUnprotectedHeader;
        }
        if (this._unprotectedHeader) {
            jwe.header = this._unprotectedHeader;
        }
        return jwe;
    }
}
exports.FlattenedEncrypt = FlattenedEncrypt;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jwe/general/encrypt.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GeneralEncrypt = void 0;
const encrypt_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jwe/flattened/encrypt.js [app-rsc] (ecmascript)");
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/util/errors.js [app-rsc] (ecmascript)");
const cek_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/cek.js [app-rsc] (ecmascript)");
const is_disjoint_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/is_disjoint.js [app-rsc] (ecmascript)");
const encrypt_key_management_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/encrypt_key_management.js [app-rsc] (ecmascript)");
const base64url_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/base64url.js [app-rsc] (ecmascript)");
const validate_crit_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/validate_crit.js [app-rsc] (ecmascript)");
class IndividualRecipient {
    constructor(enc, key, options){
        this.parent = enc;
        this.key = key;
        this.options = options;
    }
    setUnprotectedHeader(unprotectedHeader) {
        if (this.unprotectedHeader) {
            throw new TypeError('setUnprotectedHeader can only be called once');
        }
        this.unprotectedHeader = unprotectedHeader;
        return this;
    }
    addRecipient(...args) {
        return this.parent.addRecipient(...args);
    }
    encrypt(...args) {
        return this.parent.encrypt(...args);
    }
    done() {
        return this.parent;
    }
}
class GeneralEncrypt {
    constructor(plaintext){
        this._recipients = [];
        this._plaintext = plaintext;
    }
    addRecipient(key, options) {
        const recipient = new IndividualRecipient(this, key, {
            crit: options === null || options === void 0 ? void 0 : options.crit
        });
        this._recipients.push(recipient);
        return recipient;
    }
    setProtectedHeader(protectedHeader) {
        if (this._protectedHeader) {
            throw new TypeError('setProtectedHeader can only be called once');
        }
        this._protectedHeader = protectedHeader;
        return this;
    }
    setSharedUnprotectedHeader(sharedUnprotectedHeader) {
        if (this._unprotectedHeader) {
            throw new TypeError('setSharedUnprotectedHeader can only be called once');
        }
        this._unprotectedHeader = sharedUnprotectedHeader;
        return this;
    }
    setAdditionalAuthenticatedData(aad) {
        this._aad = aad;
        return this;
    }
    async encrypt(options) {
        var _a, _b, _c;
        if (!this._recipients.length) {
            throw new errors_js_1.JWEInvalid('at least one recipient must be added');
        }
        options = {
            deflateRaw: options === null || options === void 0 ? void 0 : options.deflateRaw
        };
        if (this._recipients.length === 1) {
            const [recipient] = this._recipients;
            const flattened = await new encrypt_js_1.FlattenedEncrypt(this._plaintext).setAdditionalAuthenticatedData(this._aad).setProtectedHeader(this._protectedHeader).setSharedUnprotectedHeader(this._unprotectedHeader).setUnprotectedHeader(recipient.unprotectedHeader).encrypt(recipient.key, {
                ...recipient.options,
                ...options
            });
            let jwe = {
                ciphertext: flattened.ciphertext,
                iv: flattened.iv,
                recipients: [
                    {}
                ],
                tag: flattened.tag
            };
            if (flattened.aad) jwe.aad = flattened.aad;
            if (flattened.protected) jwe.protected = flattened.protected;
            if (flattened.unprotected) jwe.unprotected = flattened.unprotected;
            if (flattened.encrypted_key) jwe.recipients[0].encrypted_key = flattened.encrypted_key;
            if (flattened.header) jwe.recipients[0].header = flattened.header;
            return jwe;
        }
        let enc;
        for(let i = 0; i < this._recipients.length; i++){
            const recipient = this._recipients[i];
            if (!(0, is_disjoint_js_1.default)(this._protectedHeader, this._unprotectedHeader, recipient.unprotectedHeader)) {
                throw new errors_js_1.JWEInvalid('JWE Protected, JWE Shared Unprotected and JWE Per-Recipient Header Parameter names must be disjoint');
            }
            const joseHeader = {
                ...this._protectedHeader,
                ...this._unprotectedHeader,
                ...recipient.unprotectedHeader
            };
            const { alg } = joseHeader;
            if (typeof alg !== 'string' || !alg) {
                throw new errors_js_1.JWEInvalid('JWE "alg" (Algorithm) Header Parameter missing or invalid');
            }
            if (alg === 'dir' || alg === 'ECDH-ES') {
                throw new errors_js_1.JWEInvalid('"dir" and "ECDH-ES" alg may only be used with a single recipient');
            }
            if (typeof joseHeader.enc !== 'string' || !joseHeader.enc) {
                throw new errors_js_1.JWEInvalid('JWE "enc" (Encryption Algorithm) Header Parameter missing or invalid');
            }
            if (!enc) {
                enc = joseHeader.enc;
            } else if (enc !== joseHeader.enc) {
                throw new errors_js_1.JWEInvalid('JWE "enc" (Encryption Algorithm) Header Parameter must be the same for all recipients');
            }
            (0, validate_crit_js_1.default)(errors_js_1.JWEInvalid, new Map(), recipient.options.crit, this._protectedHeader, joseHeader);
            if (joseHeader.zip !== undefined) {
                if (!this._protectedHeader || !this._protectedHeader.zip) {
                    throw new errors_js_1.JWEInvalid('JWE "zip" (Compression Algorithm) Header MUST be integrity protected');
                }
            }
        }
        const cek = (0, cek_js_1.default)(enc);
        let jwe = {
            ciphertext: '',
            iv: '',
            recipients: [],
            tag: ''
        };
        for(let i = 0; i < this._recipients.length; i++){
            const recipient = this._recipients[i];
            const target = {};
            jwe.recipients.push(target);
            const joseHeader = {
                ...this._protectedHeader,
                ...this._unprotectedHeader,
                ...recipient.unprotectedHeader
            };
            const p2c = joseHeader.alg.startsWith('PBES2') ? 2048 + i : undefined;
            if (i === 0) {
                const flattened = await new encrypt_js_1.FlattenedEncrypt(this._plaintext).setAdditionalAuthenticatedData(this._aad).setContentEncryptionKey(cek).setProtectedHeader(this._protectedHeader).setSharedUnprotectedHeader(this._unprotectedHeader).setUnprotectedHeader(recipient.unprotectedHeader).setKeyManagementParameters({
                    p2c
                }).encrypt(recipient.key, {
                    ...recipient.options,
                    ...options,
                    [encrypt_js_1.unprotected]: true
                });
                jwe.ciphertext = flattened.ciphertext;
                jwe.iv = flattened.iv;
                jwe.tag = flattened.tag;
                if (flattened.aad) jwe.aad = flattened.aad;
                if (flattened.protected) jwe.protected = flattened.protected;
                if (flattened.unprotected) jwe.unprotected = flattened.unprotected;
                target.encrypted_key = flattened.encrypted_key;
                if (flattened.header) target.header = flattened.header;
                continue;
            }
            const { encryptedKey, parameters } = await (0, encrypt_key_management_js_1.default)(((_a = recipient.unprotectedHeader) === null || _a === void 0 ? void 0 : _a.alg) || ((_b = this._protectedHeader) === null || _b === void 0 ? void 0 : _b.alg) || ((_c = this._unprotectedHeader) === null || _c === void 0 ? void 0 : _c.alg), enc, recipient.key, cek, {
                p2c
            });
            target.encrypted_key = (0, base64url_js_1.encode)(encryptedKey);
            if (recipient.unprotectedHeader || parameters) target.header = {
                ...recipient.unprotectedHeader,
                ...parameters
            };
        }
        return jwe;
    }
}
exports.GeneralEncrypt = GeneralEncrypt;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/dsa_digest.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/util/errors.js [app-rsc] (ecmascript)");
function dsaDigest(alg) {
    switch(alg){
        case 'PS256':
        case 'RS256':
        case 'ES256':
        case 'ES256K':
            return 'sha256';
        case 'PS384':
        case 'RS384':
        case 'ES384':
            return 'sha384';
        case 'PS512':
        case 'RS512':
        case 'ES512':
            return 'sha512';
        case 'EdDSA':
            return undefined;
        default:
            throw new errors_js_1.JOSENotSupported(`alg ${alg} is not supported either by JOSE or your javascript runtime`);
    }
}
exports.default = dsaDigest;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/node_key.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const crypto_1 = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
const get_named_curve_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/get_named_curve.js [app-rsc] (ecmascript)");
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/util/errors.js [app-rsc] (ecmascript)");
const check_modulus_length_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/check_modulus_length.js [app-rsc] (ecmascript)");
const flags_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/flags.js [app-rsc] (ecmascript)");
const PSS = {
    padding: crypto_1.constants.RSA_PKCS1_PSS_PADDING,
    saltLength: crypto_1.constants.RSA_PSS_SALTLEN_DIGEST
};
const ecCurveAlgMap = new Map([
    [
        'ES256',
        'P-256'
    ],
    [
        'ES256K',
        'secp256k1'
    ],
    [
        'ES384',
        'P-384'
    ],
    [
        'ES512',
        'P-521'
    ]
]);
function keyForCrypto(alg, key) {
    switch(alg){
        case 'EdDSA':
            if (![
                'ed25519',
                'ed448'
            ].includes(key.asymmetricKeyType)) {
                throw new TypeError('Invalid key for this operation, its asymmetricKeyType must be ed25519 or ed448');
            }
            return key;
        case 'RS256':
        case 'RS384':
        case 'RS512':
            if (key.asymmetricKeyType !== 'rsa') {
                throw new TypeError('Invalid key for this operation, its asymmetricKeyType must be rsa');
            }
            (0, check_modulus_length_js_1.default)(key, alg);
            return key;
        case flags_js_1.rsaPssParams && 'PS256':
        case flags_js_1.rsaPssParams && 'PS384':
        case flags_js_1.rsaPssParams && 'PS512':
            if (key.asymmetricKeyType === 'rsa-pss') {
                const { hashAlgorithm, mgf1HashAlgorithm, saltLength } = key.asymmetricKeyDetails;
                const length = parseInt(alg.slice(-3), 10);
                if (hashAlgorithm !== undefined && (hashAlgorithm !== `sha${length}` || mgf1HashAlgorithm !== hashAlgorithm)) {
                    throw new TypeError(`Invalid key for this operation, its RSA-PSS parameters do not meet the requirements of "alg" ${alg}`);
                }
                if (saltLength !== undefined && saltLength > length >> 3) {
                    throw new TypeError(`Invalid key for this operation, its RSA-PSS parameter saltLength does not meet the requirements of "alg" ${alg}`);
                }
            } else if (key.asymmetricKeyType !== 'rsa') {
                throw new TypeError('Invalid key for this operation, its asymmetricKeyType must be rsa or rsa-pss');
            }
            (0, check_modulus_length_js_1.default)(key, alg);
            return {
                key,
                ...PSS
            };
        case !flags_js_1.rsaPssParams && 'PS256':
        case !flags_js_1.rsaPssParams && 'PS384':
        case !flags_js_1.rsaPssParams && 'PS512':
            if (key.asymmetricKeyType !== 'rsa') {
                throw new TypeError('Invalid key for this operation, its asymmetricKeyType must be rsa');
            }
            (0, check_modulus_length_js_1.default)(key, alg);
            return {
                key,
                ...PSS
            };
        case 'ES256':
        case 'ES256K':
        case 'ES384':
        case 'ES512':
            {
                if (key.asymmetricKeyType !== 'ec') {
                    throw new TypeError('Invalid key for this operation, its asymmetricKeyType must be ec');
                }
                const actual = (0, get_named_curve_js_1.default)(key);
                const expected = ecCurveAlgMap.get(alg);
                if (actual !== expected) {
                    throw new TypeError(`Invalid key curve for the algorithm, its curve must be ${expected}, got ${actual}`);
                }
                return {
                    dsaEncoding: 'ieee-p1363',
                    key
                };
            }
        default:
            throw new errors_js_1.JOSENotSupported(`alg ${alg} is not supported either by JOSE or your javascript runtime`);
    }
}
exports.default = keyForCrypto;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/hmac_digest.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/util/errors.js [app-rsc] (ecmascript)");
function hmacDigest(alg) {
    switch(alg){
        case 'HS256':
            return 'sha256';
        case 'HS384':
            return 'sha384';
        case 'HS512':
            return 'sha512';
        default:
            throw new errors_js_1.JOSENotSupported(`alg ${alg} is not supported either by JOSE or your javascript runtime`);
    }
}
exports.default = hmacDigest;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/get_sign_verify_key.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const crypto_1 = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
const webcrypto_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/webcrypto.js [app-rsc] (ecmascript)");
const crypto_key_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/crypto_key.js [app-rsc] (ecmascript)");
const invalid_key_input_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/invalid_key_input.js [app-rsc] (ecmascript)");
const is_key_like_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/is_key_like.js [app-rsc] (ecmascript)");
function getSignVerifyKey(alg, key, usage) {
    if (key instanceof Uint8Array) {
        if (!alg.startsWith('HS')) {
            throw new TypeError((0, invalid_key_input_js_1.default)(key, ...is_key_like_js_1.types));
        }
        return (0, crypto_1.createSecretKey)(key);
    }
    if (key instanceof crypto_1.KeyObject) {
        return key;
    }
    if ((0, webcrypto_js_1.isCryptoKey)(key)) {
        (0, crypto_key_js_1.checkSigCryptoKey)(key, alg, usage);
        return crypto_1.KeyObject.from(key);
    }
    throw new TypeError((0, invalid_key_input_js_1.default)(key, ...is_key_like_js_1.types, 'Uint8Array'));
}
exports.default = getSignVerifyKey;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/sign.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const crypto = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
const util_1 = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
const dsa_digest_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/dsa_digest.js [app-rsc] (ecmascript)");
const hmac_digest_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/hmac_digest.js [app-rsc] (ecmascript)");
const node_key_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/node_key.js [app-rsc] (ecmascript)");
const get_sign_verify_key_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/get_sign_verify_key.js [app-rsc] (ecmascript)");
let oneShotSign;
if (crypto.sign.length > 3) {
    oneShotSign = (0, util_1.promisify)(crypto.sign);
} else {
    oneShotSign = crypto.sign;
}
const sign = async (alg, key, data)=>{
    const keyObject = (0, get_sign_verify_key_js_1.default)(alg, key, 'sign');
    if (alg.startsWith('HS')) {
        const hmac = crypto.createHmac((0, hmac_digest_js_1.default)(alg), keyObject);
        hmac.update(data);
        return hmac.digest();
    }
    return oneShotSign((0, dsa_digest_js_1.default)(alg), data, (0, node_key_js_1.default)(alg, keyObject));
};
exports.default = sign;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/verify.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const crypto = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
const util_1 = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
const dsa_digest_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/dsa_digest.js [app-rsc] (ecmascript)");
const node_key_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/node_key.js [app-rsc] (ecmascript)");
const sign_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/sign.js [app-rsc] (ecmascript)");
const get_sign_verify_key_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/get_sign_verify_key.js [app-rsc] (ecmascript)");
const flags_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/flags.js [app-rsc] (ecmascript)");
let oneShotVerify;
if (crypto.verify.length > 4 && flags_js_1.oneShotCallback) {
    oneShotVerify = (0, util_1.promisify)(crypto.verify);
} else {
    oneShotVerify = crypto.verify;
}
const verify = async (alg, key, signature, data)=>{
    const keyObject = (0, get_sign_verify_key_js_1.default)(alg, key, 'verify');
    if (alg.startsWith('HS')) {
        const expected = await (0, sign_js_1.default)(alg, keyObject, data);
        const actual = signature;
        try {
            return crypto.timingSafeEqual(actual, expected);
        } catch  {
            return false;
        }
    }
    const algorithm = (0, dsa_digest_js_1.default)(alg);
    const keyInput = (0, node_key_js_1.default)(alg, keyObject);
    try {
        return await oneShotVerify(algorithm, data, keyInput, signature);
    } catch  {
        return false;
    }
};
exports.default = verify;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jws/flattened/verify.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.flattenedVerify = void 0;
const base64url_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/base64url.js [app-rsc] (ecmascript)");
const verify_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/verify.js [app-rsc] (ecmascript)");
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/util/errors.js [app-rsc] (ecmascript)");
const buffer_utils_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/buffer_utils.js [app-rsc] (ecmascript)");
const is_disjoint_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/is_disjoint.js [app-rsc] (ecmascript)");
const is_object_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/is_object.js [app-rsc] (ecmascript)");
const check_key_type_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/check_key_type.js [app-rsc] (ecmascript)");
const validate_crit_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/validate_crit.js [app-rsc] (ecmascript)");
const validate_algorithms_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/validate_algorithms.js [app-rsc] (ecmascript)");
async function flattenedVerify(jws, key, options) {
    var _a;
    if (!(0, is_object_js_1.default)(jws)) {
        throw new errors_js_1.JWSInvalid('Flattened JWS must be an object');
    }
    if (jws.protected === undefined && jws.header === undefined) {
        throw new errors_js_1.JWSInvalid('Flattened JWS must have either of the "protected" or "header" members');
    }
    if (jws.protected !== undefined && typeof jws.protected !== 'string') {
        throw new errors_js_1.JWSInvalid('JWS Protected Header incorrect type');
    }
    if (jws.payload === undefined) {
        throw new errors_js_1.JWSInvalid('JWS Payload missing');
    }
    if (typeof jws.signature !== 'string') {
        throw new errors_js_1.JWSInvalid('JWS Signature missing or incorrect type');
    }
    if (jws.header !== undefined && !(0, is_object_js_1.default)(jws.header)) {
        throw new errors_js_1.JWSInvalid('JWS Unprotected Header incorrect type');
    }
    let parsedProt = {};
    if (jws.protected) {
        try {
            const protectedHeader = (0, base64url_js_1.decode)(jws.protected);
            parsedProt = JSON.parse(buffer_utils_js_1.decoder.decode(protectedHeader));
        } catch  {
            throw new errors_js_1.JWSInvalid('JWS Protected Header is invalid');
        }
    }
    if (!(0, is_disjoint_js_1.default)(parsedProt, jws.header)) {
        throw new errors_js_1.JWSInvalid('JWS Protected and JWS Unprotected Header Parameter names must be disjoint');
    }
    const joseHeader = {
        ...parsedProt,
        ...jws.header
    };
    const extensions = (0, validate_crit_js_1.default)(errors_js_1.JWSInvalid, new Map([
        [
            'b64',
            true
        ]
    ]), options === null || options === void 0 ? void 0 : options.crit, parsedProt, joseHeader);
    let b64 = true;
    if (extensions.has('b64')) {
        b64 = parsedProt.b64;
        if (typeof b64 !== 'boolean') {
            throw new errors_js_1.JWSInvalid('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
        }
    }
    const { alg } = joseHeader;
    if (typeof alg !== 'string' || !alg) {
        throw new errors_js_1.JWSInvalid('JWS "alg" (Algorithm) Header Parameter missing or invalid');
    }
    const algorithms = options && (0, validate_algorithms_js_1.default)('algorithms', options.algorithms);
    if (algorithms && !algorithms.has(alg)) {
        throw new errors_js_1.JOSEAlgNotAllowed('"alg" (Algorithm) Header Parameter not allowed');
    }
    if (b64) {
        if (typeof jws.payload !== 'string') {
            throw new errors_js_1.JWSInvalid('JWS Payload must be a string');
        }
    } else if (typeof jws.payload !== 'string' && !(jws.payload instanceof Uint8Array)) {
        throw new errors_js_1.JWSInvalid('JWS Payload must be a string or an Uint8Array instance');
    }
    let resolvedKey = false;
    if (typeof key === 'function') {
        key = await key(parsedProt, jws);
        resolvedKey = true;
    }
    (0, check_key_type_js_1.default)(alg, key, 'verify');
    const data = (0, buffer_utils_js_1.concat)(buffer_utils_js_1.encoder.encode((_a = jws.protected) !== null && _a !== void 0 ? _a : ''), buffer_utils_js_1.encoder.encode('.'), typeof jws.payload === 'string' ? buffer_utils_js_1.encoder.encode(jws.payload) : jws.payload);
    let signature;
    try {
        signature = (0, base64url_js_1.decode)(jws.signature);
    } catch  {
        throw new errors_js_1.JWSInvalid('Failed to base64url decode the signature');
    }
    const verified = await (0, verify_js_1.default)(alg, key, signature, data);
    if (!verified) {
        throw new errors_js_1.JWSSignatureVerificationFailed();
    }
    let payload;
    if (b64) {
        try {
            payload = (0, base64url_js_1.decode)(jws.payload);
        } catch  {
            throw new errors_js_1.JWSInvalid('Failed to base64url decode the payload');
        }
    } else if (typeof jws.payload === 'string') {
        payload = buffer_utils_js_1.encoder.encode(jws.payload);
    } else {
        payload = jws.payload;
    }
    const result = {
        payload
    };
    if (jws.protected !== undefined) {
        result.protectedHeader = parsedProt;
    }
    if (jws.header !== undefined) {
        result.unprotectedHeader = jws.header;
    }
    if (resolvedKey) {
        return {
            ...result,
            key
        };
    }
    return result;
}
exports.flattenedVerify = flattenedVerify;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jws/compact/verify.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.compactVerify = void 0;
const verify_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jws/flattened/verify.js [app-rsc] (ecmascript)");
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/util/errors.js [app-rsc] (ecmascript)");
const buffer_utils_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/buffer_utils.js [app-rsc] (ecmascript)");
async function compactVerify(jws, key, options) {
    if (jws instanceof Uint8Array) {
        jws = buffer_utils_js_1.decoder.decode(jws);
    }
    if (typeof jws !== 'string') {
        throw new errors_js_1.JWSInvalid('Compact JWS must be a string or Uint8Array');
    }
    const { 0: protectedHeader, 1: payload, 2: signature, length } = jws.split('.');
    if (length !== 3) {
        throw new errors_js_1.JWSInvalid('Invalid Compact JWS');
    }
    const verified = await (0, verify_js_1.flattenedVerify)({
        payload,
        protected: protectedHeader,
        signature
    }, key, options);
    const result = {
        payload: verified.payload,
        protectedHeader: verified.protectedHeader
    };
    if (typeof key === 'function') {
        return {
            ...result,
            key: verified.key
        };
    }
    return result;
}
exports.compactVerify = compactVerify;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jws/general/verify.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.generalVerify = void 0;
const verify_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jws/flattened/verify.js [app-rsc] (ecmascript)");
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/util/errors.js [app-rsc] (ecmascript)");
const is_object_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/is_object.js [app-rsc] (ecmascript)");
async function generalVerify(jws, key, options) {
    if (!(0, is_object_js_1.default)(jws)) {
        throw new errors_js_1.JWSInvalid('General JWS must be an object');
    }
    if (!Array.isArray(jws.signatures) || !jws.signatures.every(is_object_js_1.default)) {
        throw new errors_js_1.JWSInvalid('JWS Signatures missing or incorrect type');
    }
    for (const signature of jws.signatures){
        try {
            return await (0, verify_js_1.flattenedVerify)({
                header: signature.header,
                payload: jws.payload,
                protected: signature.protected,
                signature: signature.signature
            }, key, options);
        } catch  {}
    }
    throw new errors_js_1.JWSSignatureVerificationFailed();
}
exports.generalVerify = generalVerify;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/epoch.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = (date)=>Math.floor(date.getTime() / 1000);
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/secs.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const minute = 60;
const hour = minute * 60;
const day = hour * 24;
const week = day * 7;
const year = day * 365.25;
const REGEX = /^(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)$/i;
exports.default = (str)=>{
    const matched = REGEX.exec(str);
    if (!matched) {
        throw new TypeError('Invalid time period format');
    }
    const value = parseFloat(matched[1]);
    const unit = matched[2].toLowerCase();
    switch(unit){
        case 'sec':
        case 'secs':
        case 'second':
        case 'seconds':
        case 's':
            return Math.round(value);
        case 'minute':
        case 'minutes':
        case 'min':
        case 'mins':
        case 'm':
            return Math.round(value * minute);
        case 'hour':
        case 'hours':
        case 'hr':
        case 'hrs':
        case 'h':
            return Math.round(value * hour);
        case 'day':
        case 'days':
        case 'd':
            return Math.round(value * day);
        case 'week':
        case 'weeks':
        case 'w':
            return Math.round(value * week);
        default:
            return Math.round(value * year);
    }
};
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/jwt_claims_set.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/util/errors.js [app-rsc] (ecmascript)");
const buffer_utils_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/buffer_utils.js [app-rsc] (ecmascript)");
const epoch_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/epoch.js [app-rsc] (ecmascript)");
const secs_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/secs.js [app-rsc] (ecmascript)");
const is_object_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/is_object.js [app-rsc] (ecmascript)");
const normalizeTyp = (value)=>value.toLowerCase().replace(/^application\//, '');
const checkAudiencePresence = (audPayload, audOption)=>{
    if (typeof audPayload === 'string') {
        return audOption.includes(audPayload);
    }
    if (Array.isArray(audPayload)) {
        return audOption.some(Set.prototype.has.bind(new Set(audPayload)));
    }
    return false;
};
exports.default = (protectedHeader, encodedPayload, options = {})=>{
    const { typ } = options;
    if (typ && (typeof protectedHeader.typ !== 'string' || normalizeTyp(protectedHeader.typ) !== normalizeTyp(typ))) {
        throw new errors_js_1.JWTClaimValidationFailed('unexpected "typ" JWT header value', 'typ', 'check_failed');
    }
    let payload;
    try {
        payload = JSON.parse(buffer_utils_js_1.decoder.decode(encodedPayload));
    } catch  {}
    if (!(0, is_object_js_1.default)(payload)) {
        throw new errors_js_1.JWTInvalid('JWT Claims Set must be a top-level JSON object');
    }
    const { requiredClaims = [], issuer, subject, audience, maxTokenAge } = options;
    if (maxTokenAge !== undefined) requiredClaims.push('iat');
    if (audience !== undefined) requiredClaims.push('aud');
    if (subject !== undefined) requiredClaims.push('sub');
    if (issuer !== undefined) requiredClaims.push('iss');
    for (const claim of new Set(requiredClaims.reverse())){
        if (!(claim in payload)) {
            throw new errors_js_1.JWTClaimValidationFailed(`missing required "${claim}" claim`, claim, 'missing');
        }
    }
    if (issuer && !(Array.isArray(issuer) ? issuer : [
        issuer
    ]).includes(payload.iss)) {
        throw new errors_js_1.JWTClaimValidationFailed('unexpected "iss" claim value', 'iss', 'check_failed');
    }
    if (subject && payload.sub !== subject) {
        throw new errors_js_1.JWTClaimValidationFailed('unexpected "sub" claim value', 'sub', 'check_failed');
    }
    if (audience && !checkAudiencePresence(payload.aud, typeof audience === 'string' ? [
        audience
    ] : audience)) {
        throw new errors_js_1.JWTClaimValidationFailed('unexpected "aud" claim value', 'aud', 'check_failed');
    }
    let tolerance;
    switch(typeof options.clockTolerance){
        case 'string':
            tolerance = (0, secs_js_1.default)(options.clockTolerance);
            break;
        case 'number':
            tolerance = options.clockTolerance;
            break;
        case 'undefined':
            tolerance = 0;
            break;
        default:
            throw new TypeError('Invalid clockTolerance option type');
    }
    const { currentDate } = options;
    const now = (0, epoch_js_1.default)(currentDate || new Date());
    if ((payload.iat !== undefined || maxTokenAge) && typeof payload.iat !== 'number') {
        throw new errors_js_1.JWTClaimValidationFailed('"iat" claim must be a number', 'iat', 'invalid');
    }
    if (payload.nbf !== undefined) {
        if (typeof payload.nbf !== 'number') {
            throw new errors_js_1.JWTClaimValidationFailed('"nbf" claim must be a number', 'nbf', 'invalid');
        }
        if (payload.nbf > now + tolerance) {
            throw new errors_js_1.JWTClaimValidationFailed('"nbf" claim timestamp check failed', 'nbf', 'check_failed');
        }
    }
    if (payload.exp !== undefined) {
        if (typeof payload.exp !== 'number') {
            throw new errors_js_1.JWTClaimValidationFailed('"exp" claim must be a number', 'exp', 'invalid');
        }
        if (payload.exp <= now - tolerance) {
            throw new errors_js_1.JWTExpired('"exp" claim timestamp check failed', 'exp', 'check_failed');
        }
    }
    if (maxTokenAge) {
        const age = now - payload.iat;
        const max = typeof maxTokenAge === 'number' ? maxTokenAge : (0, secs_js_1.default)(maxTokenAge);
        if (age - tolerance > max) {
            throw new errors_js_1.JWTExpired('"iat" claim timestamp check failed (too far in the past)', 'iat', 'check_failed');
        }
        if (age < 0 - tolerance) {
            throw new errors_js_1.JWTClaimValidationFailed('"iat" claim timestamp check failed (it should be in the past)', 'iat', 'check_failed');
        }
    }
    return payload;
};
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jwt/verify.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.jwtVerify = void 0;
const verify_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jws/compact/verify.js [app-rsc] (ecmascript)");
const jwt_claims_set_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/jwt_claims_set.js [app-rsc] (ecmascript)");
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/util/errors.js [app-rsc] (ecmascript)");
async function jwtVerify(jwt, key, options) {
    var _a;
    const verified = await (0, verify_js_1.compactVerify)(jwt, key, options);
    if (((_a = verified.protectedHeader.crit) === null || _a === void 0 ? void 0 : _a.includes('b64')) && verified.protectedHeader.b64 === false) {
        throw new errors_js_1.JWTInvalid('JWTs MUST NOT use unencoded payload');
    }
    const payload = (0, jwt_claims_set_js_1.default)(verified.protectedHeader, verified.payload, options);
    const result = {
        payload,
        protectedHeader: verified.protectedHeader
    };
    if (typeof key === 'function') {
        return {
            ...result,
            key: verified.key
        };
    }
    return result;
}
exports.jwtVerify = jwtVerify;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jwt/decrypt.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.jwtDecrypt = void 0;
const decrypt_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jwe/compact/decrypt.js [app-rsc] (ecmascript)");
const jwt_claims_set_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/jwt_claims_set.js [app-rsc] (ecmascript)");
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/util/errors.js [app-rsc] (ecmascript)");
async function jwtDecrypt(jwt, key, options) {
    const decrypted = await (0, decrypt_js_1.compactDecrypt)(jwt, key, options);
    const payload = (0, jwt_claims_set_js_1.default)(decrypted.protectedHeader, decrypted.plaintext, options);
    const { protectedHeader } = decrypted;
    if (protectedHeader.iss !== undefined && protectedHeader.iss !== payload.iss) {
        throw new errors_js_1.JWTClaimValidationFailed('replicated "iss" claim header parameter mismatch', 'iss', 'mismatch');
    }
    if (protectedHeader.sub !== undefined && protectedHeader.sub !== payload.sub) {
        throw new errors_js_1.JWTClaimValidationFailed('replicated "sub" claim header parameter mismatch', 'sub', 'mismatch');
    }
    if (protectedHeader.aud !== undefined && JSON.stringify(protectedHeader.aud) !== JSON.stringify(payload.aud)) {
        throw new errors_js_1.JWTClaimValidationFailed('replicated "aud" claim header parameter mismatch', 'aud', 'mismatch');
    }
    const result = {
        payload,
        protectedHeader
    };
    if (typeof key === 'function') {
        return {
            ...result,
            key: decrypted.key
        };
    }
    return result;
}
exports.jwtDecrypt = jwtDecrypt;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jwe/compact/encrypt.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CompactEncrypt = void 0;
const encrypt_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jwe/flattened/encrypt.js [app-rsc] (ecmascript)");
class CompactEncrypt {
    constructor(plaintext){
        this._flattened = new encrypt_js_1.FlattenedEncrypt(plaintext);
    }
    setContentEncryptionKey(cek) {
        this._flattened.setContentEncryptionKey(cek);
        return this;
    }
    setInitializationVector(iv) {
        this._flattened.setInitializationVector(iv);
        return this;
    }
    setProtectedHeader(protectedHeader) {
        this._flattened.setProtectedHeader(protectedHeader);
        return this;
    }
    setKeyManagementParameters(parameters) {
        this._flattened.setKeyManagementParameters(parameters);
        return this;
    }
    async encrypt(key, options) {
        const jwe = await this._flattened.encrypt(key, options);
        return [
            jwe.protected,
            jwe.encrypted_key,
            jwe.iv,
            jwe.ciphertext,
            jwe.tag
        ].join('.');
    }
}
exports.CompactEncrypt = CompactEncrypt;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jws/flattened/sign.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FlattenedSign = void 0;
const base64url_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/base64url.js [app-rsc] (ecmascript)");
const sign_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/sign.js [app-rsc] (ecmascript)");
const is_disjoint_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/is_disjoint.js [app-rsc] (ecmascript)");
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/util/errors.js [app-rsc] (ecmascript)");
const buffer_utils_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/buffer_utils.js [app-rsc] (ecmascript)");
const check_key_type_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/check_key_type.js [app-rsc] (ecmascript)");
const validate_crit_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/validate_crit.js [app-rsc] (ecmascript)");
class FlattenedSign {
    constructor(payload){
        if (!(payload instanceof Uint8Array)) {
            throw new TypeError('payload must be an instance of Uint8Array');
        }
        this._payload = payload;
    }
    setProtectedHeader(protectedHeader) {
        if (this._protectedHeader) {
            throw new TypeError('setProtectedHeader can only be called once');
        }
        this._protectedHeader = protectedHeader;
        return this;
    }
    setUnprotectedHeader(unprotectedHeader) {
        if (this._unprotectedHeader) {
            throw new TypeError('setUnprotectedHeader can only be called once');
        }
        this._unprotectedHeader = unprotectedHeader;
        return this;
    }
    async sign(key, options) {
        if (!this._protectedHeader && !this._unprotectedHeader) {
            throw new errors_js_1.JWSInvalid('either setProtectedHeader or setUnprotectedHeader must be called before #sign()');
        }
        if (!(0, is_disjoint_js_1.default)(this._protectedHeader, this._unprotectedHeader)) {
            throw new errors_js_1.JWSInvalid('JWS Protected and JWS Unprotected Header Parameter names must be disjoint');
        }
        const joseHeader = {
            ...this._protectedHeader,
            ...this._unprotectedHeader
        };
        const extensions = (0, validate_crit_js_1.default)(errors_js_1.JWSInvalid, new Map([
            [
                'b64',
                true
            ]
        ]), options === null || options === void 0 ? void 0 : options.crit, this._protectedHeader, joseHeader);
        let b64 = true;
        if (extensions.has('b64')) {
            b64 = this._protectedHeader.b64;
            if (typeof b64 !== 'boolean') {
                throw new errors_js_1.JWSInvalid('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
            }
        }
        const { alg } = joseHeader;
        if (typeof alg !== 'string' || !alg) {
            throw new errors_js_1.JWSInvalid('JWS "alg" (Algorithm) Header Parameter missing or invalid');
        }
        (0, check_key_type_js_1.default)(alg, key, 'sign');
        let payload = this._payload;
        if (b64) {
            payload = buffer_utils_js_1.encoder.encode((0, base64url_js_1.encode)(payload));
        }
        let protectedHeader;
        if (this._protectedHeader) {
            protectedHeader = buffer_utils_js_1.encoder.encode((0, base64url_js_1.encode)(JSON.stringify(this._protectedHeader)));
        } else {
            protectedHeader = buffer_utils_js_1.encoder.encode('');
        }
        const data = (0, buffer_utils_js_1.concat)(protectedHeader, buffer_utils_js_1.encoder.encode('.'), payload);
        const signature = await (0, sign_js_1.default)(alg, key, data);
        const jws = {
            signature: (0, base64url_js_1.encode)(signature),
            payload: ''
        };
        if (b64) {
            jws.payload = buffer_utils_js_1.decoder.decode(payload);
        }
        if (this._unprotectedHeader) {
            jws.header = this._unprotectedHeader;
        }
        if (this._protectedHeader) {
            jws.protected = buffer_utils_js_1.decoder.decode(protectedHeader);
        }
        return jws;
    }
}
exports.FlattenedSign = FlattenedSign;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jws/compact/sign.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CompactSign = void 0;
const sign_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jws/flattened/sign.js [app-rsc] (ecmascript)");
class CompactSign {
    constructor(payload){
        this._flattened = new sign_js_1.FlattenedSign(payload);
    }
    setProtectedHeader(protectedHeader) {
        this._flattened.setProtectedHeader(protectedHeader);
        return this;
    }
    async sign(key, options) {
        const jws = await this._flattened.sign(key, options);
        if (jws.payload === undefined) {
            throw new TypeError('use the flattened module for creating JWS with b64: false');
        }
        return `${jws.protected}.${jws.payload}.${jws.signature}`;
    }
}
exports.CompactSign = CompactSign;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jws/general/sign.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GeneralSign = void 0;
const sign_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jws/flattened/sign.js [app-rsc] (ecmascript)");
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/util/errors.js [app-rsc] (ecmascript)");
class IndividualSignature {
    constructor(sig, key, options){
        this.parent = sig;
        this.key = key;
        this.options = options;
    }
    setProtectedHeader(protectedHeader) {
        if (this.protectedHeader) {
            throw new TypeError('setProtectedHeader can only be called once');
        }
        this.protectedHeader = protectedHeader;
        return this;
    }
    setUnprotectedHeader(unprotectedHeader) {
        if (this.unprotectedHeader) {
            throw new TypeError('setUnprotectedHeader can only be called once');
        }
        this.unprotectedHeader = unprotectedHeader;
        return this;
    }
    addSignature(...args) {
        return this.parent.addSignature(...args);
    }
    sign(...args) {
        return this.parent.sign(...args);
    }
    done() {
        return this.parent;
    }
}
class GeneralSign {
    constructor(payload){
        this._signatures = [];
        this._payload = payload;
    }
    addSignature(key, options) {
        const signature = new IndividualSignature(this, key, options);
        this._signatures.push(signature);
        return signature;
    }
    async sign() {
        if (!this._signatures.length) {
            throw new errors_js_1.JWSInvalid('at least one signature must be added');
        }
        const jws = {
            signatures: [],
            payload: ''
        };
        for(let i = 0; i < this._signatures.length; i++){
            const signature = this._signatures[i];
            const flattened = new sign_js_1.FlattenedSign(this._payload);
            flattened.setProtectedHeader(signature.protectedHeader);
            flattened.setUnprotectedHeader(signature.unprotectedHeader);
            const { payload, ...rest } = await flattened.sign(signature.key, signature.options);
            if (i === 0) {
                jws.payload = payload;
            } else if (jws.payload !== payload) {
                throw new errors_js_1.JWSInvalid('inconsistent use of JWS Unencoded Payload (RFC7797)');
            }
            jws.signatures.push(rest);
        }
        return jws;
    }
}
exports.GeneralSign = GeneralSign;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jwt/produce.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ProduceJWT = void 0;
const epoch_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/epoch.js [app-rsc] (ecmascript)");
const is_object_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/is_object.js [app-rsc] (ecmascript)");
const secs_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/secs.js [app-rsc] (ecmascript)");
class ProduceJWT {
    constructor(payload){
        if (!(0, is_object_js_1.default)(payload)) {
            throw new TypeError('JWT Claims Set MUST be an object');
        }
        this._payload = payload;
    }
    setIssuer(issuer) {
        this._payload = {
            ...this._payload,
            iss: issuer
        };
        return this;
    }
    setSubject(subject) {
        this._payload = {
            ...this._payload,
            sub: subject
        };
        return this;
    }
    setAudience(audience) {
        this._payload = {
            ...this._payload,
            aud: audience
        };
        return this;
    }
    setJti(jwtId) {
        this._payload = {
            ...this._payload,
            jti: jwtId
        };
        return this;
    }
    setNotBefore(input) {
        if (typeof input === 'number') {
            this._payload = {
                ...this._payload,
                nbf: input
            };
        } else {
            this._payload = {
                ...this._payload,
                nbf: (0, epoch_js_1.default)(new Date()) + (0, secs_js_1.default)(input)
            };
        }
        return this;
    }
    setExpirationTime(input) {
        if (typeof input === 'number') {
            this._payload = {
                ...this._payload,
                exp: input
            };
        } else {
            this._payload = {
                ...this._payload,
                exp: (0, epoch_js_1.default)(new Date()) + (0, secs_js_1.default)(input)
            };
        }
        return this;
    }
    setIssuedAt(input) {
        if (typeof input === 'undefined') {
            this._payload = {
                ...this._payload,
                iat: (0, epoch_js_1.default)(new Date())
            };
        } else {
            this._payload = {
                ...this._payload,
                iat: input
            };
        }
        return this;
    }
}
exports.ProduceJWT = ProduceJWT;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jwt/sign.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SignJWT = void 0;
const sign_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jws/compact/sign.js [app-rsc] (ecmascript)");
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/util/errors.js [app-rsc] (ecmascript)");
const buffer_utils_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/buffer_utils.js [app-rsc] (ecmascript)");
const produce_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jwt/produce.js [app-rsc] (ecmascript)");
class SignJWT extends produce_js_1.ProduceJWT {
    setProtectedHeader(protectedHeader) {
        this._protectedHeader = protectedHeader;
        return this;
    }
    async sign(key, options) {
        var _a;
        const sig = new sign_js_1.CompactSign(buffer_utils_js_1.encoder.encode(JSON.stringify(this._payload)));
        sig.setProtectedHeader(this._protectedHeader);
        if (Array.isArray((_a = this._protectedHeader) === null || _a === void 0 ? void 0 : _a.crit) && this._protectedHeader.crit.includes('b64') && this._protectedHeader.b64 === false) {
            throw new errors_js_1.JWTInvalid('JWTs MUST NOT use unencoded payload');
        }
        return sig.sign(key, options);
    }
}
exports.SignJWT = SignJWT;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jwt/encrypt.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EncryptJWT = void 0;
const encrypt_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jwe/compact/encrypt.js [app-rsc] (ecmascript)");
const buffer_utils_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/buffer_utils.js [app-rsc] (ecmascript)");
const produce_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jwt/produce.js [app-rsc] (ecmascript)");
class EncryptJWT extends produce_js_1.ProduceJWT {
    setProtectedHeader(protectedHeader) {
        if (this._protectedHeader) {
            throw new TypeError('setProtectedHeader can only be called once');
        }
        this._protectedHeader = protectedHeader;
        return this;
    }
    setKeyManagementParameters(parameters) {
        if (this._keyManagementParameters) {
            throw new TypeError('setKeyManagementParameters can only be called once');
        }
        this._keyManagementParameters = parameters;
        return this;
    }
    setContentEncryptionKey(cek) {
        if (this._cek) {
            throw new TypeError('setContentEncryptionKey can only be called once');
        }
        this._cek = cek;
        return this;
    }
    setInitializationVector(iv) {
        if (this._iv) {
            throw new TypeError('setInitializationVector can only be called once');
        }
        this._iv = iv;
        return this;
    }
    replicateIssuerAsHeader() {
        this._replicateIssuerAsHeader = true;
        return this;
    }
    replicateSubjectAsHeader() {
        this._replicateSubjectAsHeader = true;
        return this;
    }
    replicateAudienceAsHeader() {
        this._replicateAudienceAsHeader = true;
        return this;
    }
    async encrypt(key, options) {
        const enc = new encrypt_js_1.CompactEncrypt(buffer_utils_js_1.encoder.encode(JSON.stringify(this._payload)));
        if (this._replicateIssuerAsHeader) {
            this._protectedHeader = {
                ...this._protectedHeader,
                iss: this._payload.iss
            };
        }
        if (this._replicateSubjectAsHeader) {
            this._protectedHeader = {
                ...this._protectedHeader,
                sub: this._payload.sub
            };
        }
        if (this._replicateAudienceAsHeader) {
            this._protectedHeader = {
                ...this._protectedHeader,
                aud: this._payload.aud
            };
        }
        enc.setProtectedHeader(this._protectedHeader);
        if (this._iv) {
            enc.setInitializationVector(this._iv);
        }
        if (this._cek) {
            enc.setContentEncryptionKey(this._cek);
        }
        if (this._keyManagementParameters) {
            enc.setKeyManagementParameters(this._keyManagementParameters);
        }
        return enc.encrypt(key, options);
    }
}
exports.EncryptJWT = EncryptJWT;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jwk/thumbprint.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.calculateJwkThumbprintUri = exports.calculateJwkThumbprint = void 0;
const digest_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/digest.js [app-rsc] (ecmascript)");
const base64url_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/base64url.js [app-rsc] (ecmascript)");
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/util/errors.js [app-rsc] (ecmascript)");
const buffer_utils_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/buffer_utils.js [app-rsc] (ecmascript)");
const is_object_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/is_object.js [app-rsc] (ecmascript)");
const check = (value, description)=>{
    if (typeof value !== 'string' || !value) {
        throw new errors_js_1.JWKInvalid(`${description} missing or invalid`);
    }
};
async function calculateJwkThumbprint(jwk, digestAlgorithm) {
    if (!(0, is_object_js_1.default)(jwk)) {
        throw new TypeError('JWK must be an object');
    }
    digestAlgorithm !== null && digestAlgorithm !== void 0 ? digestAlgorithm : digestAlgorithm = 'sha256';
    if (digestAlgorithm !== 'sha256' && digestAlgorithm !== 'sha384' && digestAlgorithm !== 'sha512') {
        throw new TypeError('digestAlgorithm must one of "sha256", "sha384", or "sha512"');
    }
    let components;
    switch(jwk.kty){
        case 'EC':
            check(jwk.crv, '"crv" (Curve) Parameter');
            check(jwk.x, '"x" (X Coordinate) Parameter');
            check(jwk.y, '"y" (Y Coordinate) Parameter');
            components = {
                crv: jwk.crv,
                kty: jwk.kty,
                x: jwk.x,
                y: jwk.y
            };
            break;
        case 'OKP':
            check(jwk.crv, '"crv" (Subtype of Key Pair) Parameter');
            check(jwk.x, '"x" (Public Key) Parameter');
            components = {
                crv: jwk.crv,
                kty: jwk.kty,
                x: jwk.x
            };
            break;
        case 'RSA':
            check(jwk.e, '"e" (Exponent) Parameter');
            check(jwk.n, '"n" (Modulus) Parameter');
            components = {
                e: jwk.e,
                kty: jwk.kty,
                n: jwk.n
            };
            break;
        case 'oct':
            check(jwk.k, '"k" (Key Value) Parameter');
            components = {
                k: jwk.k,
                kty: jwk.kty
            };
            break;
        default:
            throw new errors_js_1.JOSENotSupported('"kty" (Key Type) Parameter missing or unsupported');
    }
    const data = buffer_utils_js_1.encoder.encode(JSON.stringify(components));
    return (0, base64url_js_1.encode)(await (0, digest_js_1.default)(digestAlgorithm, data));
}
exports.calculateJwkThumbprint = calculateJwkThumbprint;
async function calculateJwkThumbprintUri(jwk, digestAlgorithm) {
    digestAlgorithm !== null && digestAlgorithm !== void 0 ? digestAlgorithm : digestAlgorithm = 'sha256';
    const thumbprint = await calculateJwkThumbprint(jwk, digestAlgorithm);
    return `urn:ietf:params:oauth:jwk-thumbprint:sha-${digestAlgorithm.slice(-3)}:${thumbprint}`;
}
exports.calculateJwkThumbprintUri = calculateJwkThumbprintUri;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jwk/embedded.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EmbeddedJWK = void 0;
const import_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/key/import.js [app-rsc] (ecmascript)");
const is_object_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/is_object.js [app-rsc] (ecmascript)");
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/util/errors.js [app-rsc] (ecmascript)");
async function EmbeddedJWK(protectedHeader, token) {
    const joseHeader = {
        ...protectedHeader,
        ...token === null || token === void 0 ? void 0 : token.header
    };
    if (!(0, is_object_js_1.default)(joseHeader.jwk)) {
        throw new errors_js_1.JWSInvalid('"jwk" (JSON Web Key) Header Parameter must be a JSON object');
    }
    const key = await (0, import_js_1.importJWK)({
        ...joseHeader.jwk,
        ext: true
    }, joseHeader.alg, true);
    if (key instanceof Uint8Array || key.type !== 'public') {
        throw new errors_js_1.JWSInvalid('"jwk" (JSON Web Key) Header Parameter must be a public key');
    }
    return key;
}
exports.EmbeddedJWK = EmbeddedJWK;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jwks/local.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createLocalJWKSet = exports.LocalJWKSet = exports.isJWKSLike = void 0;
const import_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/key/import.js [app-rsc] (ecmascript)");
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/util/errors.js [app-rsc] (ecmascript)");
const is_object_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/is_object.js [app-rsc] (ecmascript)");
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
            throw new errors_js_1.JOSENotSupported('Unsupported "alg" value for a JSON Web Key Set');
    }
}
function isJWKSLike(jwks) {
    return jwks && typeof jwks === 'object' && Array.isArray(jwks.keys) && jwks.keys.every(isJWKLike);
}
exports.isJWKSLike = isJWKSLike;
function isJWKLike(key) {
    return (0, is_object_js_1.default)(key);
}
function clone(obj) {
    if (typeof structuredClone === 'function') {
        return structuredClone(obj);
    }
    return JSON.parse(JSON.stringify(obj));
}
class LocalJWKSet {
    constructor(jwks){
        this._cached = new WeakMap();
        if (!isJWKSLike(jwks)) {
            throw new errors_js_1.JWKSInvalid('JSON Web Key Set malformed');
        }
        this._jwks = clone(jwks);
    }
    async getKey(protectedHeader, token) {
        const { alg, kid } = {
            ...protectedHeader,
            ...token === null || token === void 0 ? void 0 : token.header
        };
        const kty = getKtyFromAlg(alg);
        const candidates = this._jwks.keys.filter((jwk)=>{
            let candidate = kty === jwk.kty;
            if (candidate && typeof kid === 'string') {
                candidate = kid === jwk.kid;
            }
            if (candidate && typeof jwk.alg === 'string') {
                candidate = alg === jwk.alg;
            }
            if (candidate && typeof jwk.use === 'string') {
                candidate = jwk.use === 'sig';
            }
            if (candidate && Array.isArray(jwk.key_ops)) {
                candidate = jwk.key_ops.includes('verify');
            }
            if (candidate && alg === 'EdDSA') {
                candidate = jwk.crv === 'Ed25519' || jwk.crv === 'Ed448';
            }
            if (candidate) {
                switch(alg){
                    case 'ES256':
                        candidate = jwk.crv === 'P-256';
                        break;
                    case 'ES256K':
                        candidate = jwk.crv === 'secp256k1';
                        break;
                    case 'ES384':
                        candidate = jwk.crv === 'P-384';
                        break;
                    case 'ES512':
                        candidate = jwk.crv === 'P-521';
                        break;
                }
            }
            return candidate;
        });
        const { 0: jwk, length } = candidates;
        if (length === 0) {
            throw new errors_js_1.JWKSNoMatchingKey();
        } else if (length !== 1) {
            const error = new errors_js_1.JWKSMultipleMatchingKeys();
            const { _cached } = this;
            error[Symbol.asyncIterator] = async function*() {
                for (const jwk of candidates){
                    try {
                        yield await importWithAlgCache(_cached, jwk, alg);
                    } catch  {
                        continue;
                    }
                }
            };
            throw error;
        }
        return importWithAlgCache(this._cached, jwk, alg);
    }
}
exports.LocalJWKSet = LocalJWKSet;
async function importWithAlgCache(cache, jwk, alg) {
    const cached = cache.get(jwk) || cache.set(jwk, {}).get(jwk);
    if (cached[alg] === undefined) {
        const key = await (0, import_js_1.importJWK)({
            ...jwk,
            ext: true
        }, alg);
        if (key instanceof Uint8Array || key.type !== 'public') {
            throw new errors_js_1.JWKSInvalid('JSON Web Key Set members must be public keys');
        }
        cached[alg] = key;
    }
    return cached[alg];
}
function createLocalJWKSet(jwks) {
    const set = new LocalJWKSet(jwks);
    return async function(protectedHeader, token) {
        return set.getKey(protectedHeader, token);
    };
}
exports.createLocalJWKSet = createLocalJWKSet;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/fetch_jwks.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const http = __turbopack_context__.r("[externals]/http [external] (http, cjs)");
const https = __turbopack_context__.r("[externals]/https [external] (https, cjs)");
const events_1 = __turbopack_context__.r("[externals]/events [external] (events, cjs)");
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/util/errors.js [app-rsc] (ecmascript)");
const buffer_utils_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/buffer_utils.js [app-rsc] (ecmascript)");
const fetchJwks = async (url, timeout, options)=>{
    let get;
    switch(url.protocol){
        case 'https:':
            get = https.get;
            break;
        case 'http:':
            get = http.get;
            break;
        default:
            throw new TypeError('Unsupported URL protocol.');
    }
    const { agent, headers } = options;
    const req = get(url.href, {
        agent,
        timeout,
        headers
    });
    const [response] = await Promise.race([
        (0, events_1.once)(req, 'response'),
        (0, events_1.once)(req, 'timeout')
    ]);
    if (!response) {
        req.destroy();
        throw new errors_js_1.JWKSTimeout();
    }
    if (response.statusCode !== 200) {
        throw new errors_js_1.JOSEError('Expected 200 OK from the JSON Web Key Set HTTP response');
    }
    const parts = [];
    for await (const part of response){
        parts.push(part);
    }
    try {
        return JSON.parse(buffer_utils_js_1.decoder.decode((0, buffer_utils_js_1.concat)(...parts)));
    } catch  {
        throw new errors_js_1.JOSEError('Failed to parse the JSON Web Key Set HTTP response as JSON');
    }
};
exports.default = fetchJwks;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jwks/remote.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createRemoteJWKSet = void 0;
const fetch_jwks_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/fetch_jwks.js [app-rsc] (ecmascript)");
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/util/errors.js [app-rsc] (ecmascript)");
const local_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jwks/local.js [app-rsc] (ecmascript)");
function isCloudflareWorkers() {
    return typeof WebSocketPair !== 'undefined' || typeof navigator !== 'undefined' && navigator.userAgent === 'Cloudflare-Workers' || typeof EdgeRuntime !== 'undefined' && EdgeRuntime === 'vercel';
}
class RemoteJWKSet extends local_js_1.LocalJWKSet {
    constructor(url, options){
        super({
            keys: []
        });
        this._jwks = undefined;
        if (!(url instanceof URL)) {
            throw new TypeError('url must be an instance of URL');
        }
        this._url = new URL(url.href);
        this._options = {
            agent: options === null || options === void 0 ? void 0 : options.agent,
            headers: options === null || options === void 0 ? void 0 : options.headers
        };
        this._timeoutDuration = typeof (options === null || options === void 0 ? void 0 : options.timeoutDuration) === 'number' ? options === null || options === void 0 ? void 0 : options.timeoutDuration : 5000;
        this._cooldownDuration = typeof (options === null || options === void 0 ? void 0 : options.cooldownDuration) === 'number' ? options === null || options === void 0 ? void 0 : options.cooldownDuration : 30000;
        this._cacheMaxAge = typeof (options === null || options === void 0 ? void 0 : options.cacheMaxAge) === 'number' ? options === null || options === void 0 ? void 0 : options.cacheMaxAge : 600000;
    }
    coolingDown() {
        return typeof this._jwksTimestamp === 'number' ? Date.now() < this._jwksTimestamp + this._cooldownDuration : false;
    }
    fresh() {
        return typeof this._jwksTimestamp === 'number' ? Date.now() < this._jwksTimestamp + this._cacheMaxAge : false;
    }
    async getKey(protectedHeader, token) {
        if (!this._jwks || !this.fresh()) {
            await this.reload();
        }
        try {
            return await super.getKey(protectedHeader, token);
        } catch (err) {
            if (err instanceof errors_js_1.JWKSNoMatchingKey) {
                if (this.coolingDown() === false) {
                    await this.reload();
                    return super.getKey(protectedHeader, token);
                }
            }
            throw err;
        }
    }
    async reload() {
        if (this._pendingFetch && isCloudflareWorkers()) {
            this._pendingFetch = undefined;
        }
        this._pendingFetch || (this._pendingFetch = (0, fetch_jwks_js_1.default)(this._url, this._timeoutDuration, this._options).then((json)=>{
            if (!(0, local_js_1.isJWKSLike)(json)) {
                throw new errors_js_1.JWKSInvalid('JSON Web Key Set malformed');
            }
            this._jwks = {
                keys: json.keys
            };
            this._jwksTimestamp = Date.now();
            this._pendingFetch = undefined;
        }).catch((err)=>{
            this._pendingFetch = undefined;
            throw err;
        }));
        await this._pendingFetch;
    }
}
function createRemoteJWKSet(url, options) {
    const set = new RemoteJWKSet(url, options);
    return async function(protectedHeader, token) {
        return set.getKey(protectedHeader, token);
    };
}
exports.createRemoteJWKSet = createRemoteJWKSet;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jwt/unsecured.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UnsecuredJWT = void 0;
const base64url = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/base64url.js [app-rsc] (ecmascript)");
const buffer_utils_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/buffer_utils.js [app-rsc] (ecmascript)");
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/util/errors.js [app-rsc] (ecmascript)");
const jwt_claims_set_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/jwt_claims_set.js [app-rsc] (ecmascript)");
const produce_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jwt/produce.js [app-rsc] (ecmascript)");
class UnsecuredJWT extends produce_js_1.ProduceJWT {
    encode() {
        const header = base64url.encode(JSON.stringify({
            alg: 'none'
        }));
        const payload = base64url.encode(JSON.stringify(this._payload));
        return `${header}.${payload}.`;
    }
    static decode(jwt, options) {
        if (typeof jwt !== 'string') {
            throw new errors_js_1.JWTInvalid('Unsecured JWT must be a string');
        }
        const { 0: encodedHeader, 1: encodedPayload, 2: signature, length } = jwt.split('.');
        if (length !== 3 || signature !== '') {
            throw new errors_js_1.JWTInvalid('Invalid Unsecured JWT');
        }
        let header;
        try {
            header = JSON.parse(buffer_utils_js_1.decoder.decode(base64url.decode(encodedHeader)));
            if (header.alg !== 'none') throw new Error();
        } catch  {
            throw new errors_js_1.JWTInvalid('Invalid Unsecured JWT');
        }
        const payload = (0, jwt_claims_set_js_1.default)(header, base64url.decode(encodedPayload), options);
        return {
            payload,
            header
        };
    }
}
exports.UnsecuredJWT = UnsecuredJWT;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/util/base64url.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.decode = exports.encode = void 0;
const base64url = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/base64url.js [app-rsc] (ecmascript)");
exports.encode = base64url.encode;
exports.decode = base64url.decode;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/util/decode_protected_header.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.decodeProtectedHeader = void 0;
const base64url_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/util/base64url.js [app-rsc] (ecmascript)");
const buffer_utils_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/buffer_utils.js [app-rsc] (ecmascript)");
const is_object_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/is_object.js [app-rsc] (ecmascript)");
function decodeProtectedHeader(token) {
    let protectedB64u;
    if (typeof token === 'string') {
        const parts = token.split('.');
        if (parts.length === 3 || parts.length === 5) {
            ;
            [protectedB64u] = parts;
        }
    } else if (typeof token === 'object' && token) {
        if ('protected' in token) {
            protectedB64u = token.protected;
        } else {
            throw new TypeError('Token does not contain a Protected Header');
        }
    }
    try {
        if (typeof protectedB64u !== 'string' || !protectedB64u) {
            throw new Error();
        }
        const result = JSON.parse(buffer_utils_js_1.decoder.decode((0, base64url_js_1.decode)(protectedB64u)));
        if (!(0, is_object_js_1.default)(result)) {
            throw new Error();
        }
        return result;
    } catch  {
        throw new TypeError('Invalid Token or Protected Header formatting');
    }
}
exports.decodeProtectedHeader = decodeProtectedHeader;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/util/decode_jwt.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.decodeJwt = void 0;
const base64url_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/util/base64url.js [app-rsc] (ecmascript)");
const buffer_utils_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/buffer_utils.js [app-rsc] (ecmascript)");
const is_object_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/lib/is_object.js [app-rsc] (ecmascript)");
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/util/errors.js [app-rsc] (ecmascript)");
function decodeJwt(jwt) {
    if (typeof jwt !== 'string') throw new errors_js_1.JWTInvalid('JWTs must use Compact JWS serialization, JWT must be a string');
    const { 1: payload, length } = jwt.split('.');
    if (length === 5) throw new errors_js_1.JWTInvalid('Only JWTs using Compact JWS serialization can be decoded');
    if (length !== 3) throw new errors_js_1.JWTInvalid('Invalid JWT');
    if (!payload) throw new errors_js_1.JWTInvalid('JWTs must contain a payload');
    let decoded;
    try {
        decoded = (0, base64url_js_1.decode)(payload);
    } catch  {
        throw new errors_js_1.JWTInvalid('Failed to base64url decode the payload');
    }
    let result;
    try {
        result = JSON.parse(buffer_utils_js_1.decoder.decode(decoded));
    } catch  {
        throw new errors_js_1.JWTInvalid('Failed to parse the decoded payload as JSON');
    }
    if (!(0, is_object_js_1.default)(result)) throw new errors_js_1.JWTInvalid('Invalid JWT Claims Set');
    return result;
}
exports.decodeJwt = decodeJwt;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/generate.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.generateKeyPair = exports.generateSecret = void 0;
const crypto_1 = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
const util_1 = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
const random_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/random.js [app-rsc] (ecmascript)");
const check_modulus_length_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/check_modulus_length.js [app-rsc] (ecmascript)");
const errors_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/util/errors.js [app-rsc] (ecmascript)");
const generate = (0, util_1.promisify)(crypto_1.generateKeyPair);
async function generateSecret(alg, options) {
    let length;
    switch(alg){
        case 'HS256':
        case 'HS384':
        case 'HS512':
        case 'A128CBC-HS256':
        case 'A192CBC-HS384':
        case 'A256CBC-HS512':
            length = parseInt(alg.slice(-3), 10);
            break;
        case 'A128KW':
        case 'A192KW':
        case 'A256KW':
        case 'A128GCMKW':
        case 'A192GCMKW':
        case 'A256GCMKW':
        case 'A128GCM':
        case 'A192GCM':
        case 'A256GCM':
            length = parseInt(alg.slice(1, 4), 10);
            break;
        default:
            throw new errors_js_1.JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
    }
    return (0, crypto_1.createSecretKey)((0, random_js_1.default)(new Uint8Array(length >> 3)));
}
exports.generateSecret = generateSecret;
async function generateKeyPair(alg, options) {
    var _a, _b;
    switch(alg){
        case 'RS256':
        case 'RS384':
        case 'RS512':
        case 'PS256':
        case 'PS384':
        case 'PS512':
        case 'RSA-OAEP':
        case 'RSA-OAEP-256':
        case 'RSA-OAEP-384':
        case 'RSA-OAEP-512':
        case 'RSA1_5':
            {
                const modulusLength = (_a = options === null || options === void 0 ? void 0 : options.modulusLength) !== null && _a !== void 0 ? _a : 2048;
                if (typeof modulusLength !== 'number' || modulusLength < 2048) {
                    throw new errors_js_1.JOSENotSupported('Invalid or unsupported modulusLength option provided, 2048 bits or larger keys must be used');
                }
                const keypair = await generate('rsa', {
                    modulusLength,
                    publicExponent: 0x10001
                });
                (0, check_modulus_length_js_1.setModulusLength)(keypair.privateKey, modulusLength);
                (0, check_modulus_length_js_1.setModulusLength)(keypair.publicKey, modulusLength);
                return keypair;
            }
        case 'ES256':
            return generate('ec', {
                namedCurve: 'P-256'
            });
        case 'ES256K':
            return generate('ec', {
                namedCurve: 'secp256k1'
            });
        case 'ES384':
            return generate('ec', {
                namedCurve: 'P-384'
            });
        case 'ES512':
            return generate('ec', {
                namedCurve: 'P-521'
            });
        case 'EdDSA':
            {
                switch(options === null || options === void 0 ? void 0 : options.crv){
                    case undefined:
                    case 'Ed25519':
                        return generate('ed25519');
                    case 'Ed448':
                        return generate('ed448');
                    default:
                        throw new errors_js_1.JOSENotSupported('Invalid or unsupported crv option provided, supported values are Ed25519 and Ed448');
                }
            }
        case 'ECDH-ES':
        case 'ECDH-ES+A128KW':
        case 'ECDH-ES+A192KW':
        case 'ECDH-ES+A256KW':
            const crv = (_b = options === null || options === void 0 ? void 0 : options.crv) !== null && _b !== void 0 ? _b : 'P-256';
            switch(crv){
                case undefined:
                case 'P-256':
                case 'P-384':
                case 'P-521':
                    return generate('ec', {
                        namedCurve: crv
                    });
                case 'X25519':
                    return generate('x25519');
                case 'X448':
                    return generate('x448');
                default:
                    throw new errors_js_1.JOSENotSupported('Invalid or unsupported crv option provided, supported values are P-256, P-384, P-521, X25519, and X448');
            }
        default:
            throw new errors_js_1.JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
    }
}
exports.generateKeyPair = generateKeyPair;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/key/generate_key_pair.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.generateKeyPair = void 0;
const generate_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/generate.js [app-rsc] (ecmascript)");
async function generateKeyPair(alg, options) {
    return (0, generate_js_1.generateKeyPair)(alg, options);
}
exports.generateKeyPair = generateKeyPair;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/key/generate_secret.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.generateSecret = void 0;
const generate_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/generate.js [app-rsc] (ecmascript)");
async function generateSecret(alg, options) {
    return (0, generate_js_1.generateSecret)(alg, options);
}
exports.generateSecret = generateSecret;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/runtime.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = 'node:crypto';
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/util/runtime.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const runtime_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/runtime/runtime.js [app-rsc] (ecmascript)");
exports.default = runtime_js_1.default;
}}),
"[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/index.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cryptoRuntime = exports.base64url = exports.generateSecret = exports.generateKeyPair = exports.errors = exports.decodeJwt = exports.decodeProtectedHeader = exports.importJWK = exports.importX509 = exports.importPKCS8 = exports.importSPKI = exports.exportJWK = exports.exportSPKI = exports.exportPKCS8 = exports.UnsecuredJWT = exports.createRemoteJWKSet = exports.createLocalJWKSet = exports.EmbeddedJWK = exports.calculateJwkThumbprintUri = exports.calculateJwkThumbprint = exports.EncryptJWT = exports.SignJWT = exports.GeneralSign = exports.FlattenedSign = exports.CompactSign = exports.FlattenedEncrypt = exports.CompactEncrypt = exports.jwtDecrypt = exports.jwtVerify = exports.generalVerify = exports.flattenedVerify = exports.compactVerify = exports.GeneralEncrypt = exports.generalDecrypt = exports.flattenedDecrypt = exports.compactDecrypt = void 0;
var decrypt_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jwe/compact/decrypt.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "compactDecrypt", {
    enumerable: true,
    get: function() {
        return decrypt_js_1.compactDecrypt;
    }
});
var decrypt_js_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jwe/flattened/decrypt.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "flattenedDecrypt", {
    enumerable: true,
    get: function() {
        return decrypt_js_2.flattenedDecrypt;
    }
});
var decrypt_js_3 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jwe/general/decrypt.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "generalDecrypt", {
    enumerable: true,
    get: function() {
        return decrypt_js_3.generalDecrypt;
    }
});
var encrypt_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jwe/general/encrypt.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "GeneralEncrypt", {
    enumerable: true,
    get: function() {
        return encrypt_js_1.GeneralEncrypt;
    }
});
var verify_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jws/compact/verify.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "compactVerify", {
    enumerable: true,
    get: function() {
        return verify_js_1.compactVerify;
    }
});
var verify_js_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jws/flattened/verify.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "flattenedVerify", {
    enumerable: true,
    get: function() {
        return verify_js_2.flattenedVerify;
    }
});
var verify_js_3 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jws/general/verify.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "generalVerify", {
    enumerable: true,
    get: function() {
        return verify_js_3.generalVerify;
    }
});
var verify_js_4 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jwt/verify.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "jwtVerify", {
    enumerable: true,
    get: function() {
        return verify_js_4.jwtVerify;
    }
});
var decrypt_js_4 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jwt/decrypt.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "jwtDecrypt", {
    enumerable: true,
    get: function() {
        return decrypt_js_4.jwtDecrypt;
    }
});
var encrypt_js_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jwe/compact/encrypt.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "CompactEncrypt", {
    enumerable: true,
    get: function() {
        return encrypt_js_2.CompactEncrypt;
    }
});
var encrypt_js_3 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jwe/flattened/encrypt.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "FlattenedEncrypt", {
    enumerable: true,
    get: function() {
        return encrypt_js_3.FlattenedEncrypt;
    }
});
var sign_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jws/compact/sign.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "CompactSign", {
    enumerable: true,
    get: function() {
        return sign_js_1.CompactSign;
    }
});
var sign_js_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jws/flattened/sign.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "FlattenedSign", {
    enumerable: true,
    get: function() {
        return sign_js_2.FlattenedSign;
    }
});
var sign_js_3 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jws/general/sign.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "GeneralSign", {
    enumerable: true,
    get: function() {
        return sign_js_3.GeneralSign;
    }
});
var sign_js_4 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jwt/sign.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "SignJWT", {
    enumerable: true,
    get: function() {
        return sign_js_4.SignJWT;
    }
});
var encrypt_js_4 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jwt/encrypt.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "EncryptJWT", {
    enumerable: true,
    get: function() {
        return encrypt_js_4.EncryptJWT;
    }
});
var thumbprint_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jwk/thumbprint.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "calculateJwkThumbprint", {
    enumerable: true,
    get: function() {
        return thumbprint_js_1.calculateJwkThumbprint;
    }
});
Object.defineProperty(exports, "calculateJwkThumbprintUri", {
    enumerable: true,
    get: function() {
        return thumbprint_js_1.calculateJwkThumbprintUri;
    }
});
var embedded_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jwk/embedded.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "EmbeddedJWK", {
    enumerable: true,
    get: function() {
        return embedded_js_1.EmbeddedJWK;
    }
});
var local_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jwks/local.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "createLocalJWKSet", {
    enumerable: true,
    get: function() {
        return local_js_1.createLocalJWKSet;
    }
});
var remote_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jwks/remote.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "createRemoteJWKSet", {
    enumerable: true,
    get: function() {
        return remote_js_1.createRemoteJWKSet;
    }
});
var unsecured_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/jwt/unsecured.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "UnsecuredJWT", {
    enumerable: true,
    get: function() {
        return unsecured_js_1.UnsecuredJWT;
    }
});
var export_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/key/export.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "exportPKCS8", {
    enumerable: true,
    get: function() {
        return export_js_1.exportPKCS8;
    }
});
Object.defineProperty(exports, "exportSPKI", {
    enumerable: true,
    get: function() {
        return export_js_1.exportSPKI;
    }
});
Object.defineProperty(exports, "exportJWK", {
    enumerable: true,
    get: function() {
        return export_js_1.exportJWK;
    }
});
var import_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/key/import.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "importSPKI", {
    enumerable: true,
    get: function() {
        return import_js_1.importSPKI;
    }
});
Object.defineProperty(exports, "importPKCS8", {
    enumerable: true,
    get: function() {
        return import_js_1.importPKCS8;
    }
});
Object.defineProperty(exports, "importX509", {
    enumerable: true,
    get: function() {
        return import_js_1.importX509;
    }
});
Object.defineProperty(exports, "importJWK", {
    enumerable: true,
    get: function() {
        return import_js_1.importJWK;
    }
});
var decode_protected_header_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/util/decode_protected_header.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "decodeProtectedHeader", {
    enumerable: true,
    get: function() {
        return decode_protected_header_js_1.decodeProtectedHeader;
    }
});
var decode_jwt_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/util/decode_jwt.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "decodeJwt", {
    enumerable: true,
    get: function() {
        return decode_jwt_js_1.decodeJwt;
    }
});
exports.errors = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/util/errors.js [app-rsc] (ecmascript)");
var generate_key_pair_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/key/generate_key_pair.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "generateKeyPair", {
    enumerable: true,
    get: function() {
        return generate_key_pair_js_1.generateKeyPair;
    }
});
var generate_secret_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/key/generate_secret.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "generateSecret", {
    enumerable: true,
    get: function() {
        return generate_secret_js_1.generateSecret;
    }
});
exports.base64url = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/util/base64url.js [app-rsc] (ecmascript)");
var runtime_js_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/jose@4.15.9/node_modules/jose/dist/node/cjs/util/runtime.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "cryptoRuntime", {
    enumerable: true,
    get: function() {
        return runtime_js_1.default;
    }
});
}}),

};

//# sourceMappingURL=144d0_jose_dist_node_cjs_c0e4f85c._.js.map