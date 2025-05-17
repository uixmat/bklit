module.exports = {

"[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/utils/lodash.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isArguments = exports.defaults = exports.noop = void 0;
const defaults = __turbopack_context__.r("[project]/node_modules/.pnpm/lodash.defaults@4.2.0/node_modules/lodash.defaults/index.js [app-rsc] (ecmascript)");
exports.defaults = defaults;
const isArguments = __turbopack_context__.r("[project]/node_modules/.pnpm/lodash.isarguments@3.1.0/node_modules/lodash.isarguments/index.js [app-rsc] (ecmascript)");
exports.isArguments = isArguments;
function noop() {}
exports.noop = noop;
}}),
"[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/utils/debug.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.genRedactedString = exports.getStringValue = exports.MAX_ARGUMENT_LENGTH = void 0;
const debug_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/debug@4.4.1/node_modules/debug/src/index.js [app-rsc] (ecmascript)");
const MAX_ARGUMENT_LENGTH = 200;
exports.MAX_ARGUMENT_LENGTH = MAX_ARGUMENT_LENGTH;
const NAMESPACE_PREFIX = "ioredis";
/**
 * helper function that tried to get a string value for
 * arbitrary "debug" arg
 */ function getStringValue(v) {
    if (v === null) {
        return;
    }
    switch(typeof v){
        case "boolean":
            return;
        case "number":
            return;
        case "object":
            if (Buffer.isBuffer(v)) {
                return v.toString("hex");
            }
            if (Array.isArray(v)) {
                return v.join(",");
            }
            try {
                return JSON.stringify(v);
            } catch (e) {
                return;
            }
        case "string":
            return v;
    }
}
exports.getStringValue = getStringValue;
/**
 * helper function that redacts a string representation of a "debug" arg
 */ function genRedactedString(str, maxLen) {
    const { length } = str;
    return length <= maxLen ? str : str.slice(0, maxLen) + ' ... <REDACTED full-length="' + length + '">';
}
exports.genRedactedString = genRedactedString;
/**
 * a wrapper for the `debug` module, used to generate
 * "debug functions" that trim the values in their output
 */ function genDebugFunction(namespace) {
    const fn = (0, debug_1.default)(`${NAMESPACE_PREFIX}:${namespace}`);
    function wrappedDebug(...args) {
        if (!fn.enabled) {
            return; // no-op
        }
        // we skip the first arg because that is the message
        for(let i = 1; i < args.length; i++){
            const str = getStringValue(args[i]);
            if (typeof str === "string" && str.length > MAX_ARGUMENT_LENGTH) {
                args[i] = genRedactedString(str, MAX_ARGUMENT_LENGTH);
            }
        }
        return fn.apply(null, args);
    }
    Object.defineProperties(wrappedDebug, {
        namespace: {
            get () {
                return fn.namespace;
            }
        },
        enabled: {
            get () {
                return fn.enabled;
            }
        },
        destroy: {
            get () {
                return fn.destroy;
            }
        },
        log: {
            get () {
                return fn.log;
            },
            set (l) {
                fn.log = l;
            }
        }
    });
    return wrappedDebug;
}
exports.default = genDebugFunction;
}}),
"[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/constants/TLSProfiles.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * TLS settings for Redis Cloud. Updated on 2022-08-19.
 */ const RedisCloudCA = `-----BEGIN CERTIFICATE-----
MIIDTzCCAjegAwIBAgIJAKSVpiDswLcwMA0GCSqGSIb3DQEBBQUAMD4xFjAUBgNV
BAoMDUdhcmFudGlhIERhdGExJDAiBgNVBAMMG1NTTCBDZXJ0aWZpY2F0aW9uIEF1
dGhvcml0eTAeFw0xMzEwMDExMjE0NTVaFw0yMzA5MjkxMjE0NTVaMD4xFjAUBgNV
BAoMDUdhcmFudGlhIERhdGExJDAiBgNVBAMMG1NTTCBDZXJ0aWZpY2F0aW9uIEF1
dGhvcml0eTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBALZqkh/DczWP
JnxnHLQ7QL0T4B4CDKWBKCcisriGbA6ZePWVNo4hfKQC6JrzfR+081NeD6VcWUiz
rmd+jtPhIY4c+WVQYm5PKaN6DT1imYdxQw7aqO5j2KUCEh/cznpLxeSHoTxlR34E
QwF28Wl3eg2vc5ct8LjU3eozWVk3gb7alx9mSA2SgmuX5lEQawl++rSjsBStemY2
BDwOpAMXIrdEyP/cVn8mkvi/BDs5M5G+09j0gfhyCzRWMQ7Hn71u1eolRxwVxgi3
TMn+/vTaFSqxKjgck6zuAYjBRPaHe7qLxHNr1So/Mc9nPy+3wHebFwbIcnUojwbp
4nctkWbjb2cCAwEAAaNQME4wHQYDVR0OBBYEFP1whtcrydmW3ZJeuSoKZIKjze3w
MB8GA1UdIwQYMBaAFP1whtcrydmW3ZJeuSoKZIKjze3wMAwGA1UdEwQFMAMBAf8w
DQYJKoZIhvcNAQEFBQADggEBAG2erXhwRAa7+ZOBs0B6X57Hwyd1R4kfmXcs0rta
lbPpvgULSiB+TCbf3EbhJnHGyvdCY1tvlffLjdA7HJ0PCOn+YYLBA0pTU/dyvrN6
Su8NuS5yubnt9mb13nDGYo1rnt0YRfxN+8DM3fXIVr038A30UlPX2Ou1ExFJT0MZ
uFKY6ZvLdI6/1cbgmguMlAhM+DhKyV6Sr5699LM3zqeI816pZmlREETYkGr91q7k
BpXJu/dtHaGxg1ZGu6w/PCsYGUcECWENYD4VQPd8N32JjOfu6vEgoEAwfPP+3oGp
Z4m3ewACcWOAenqflb+cQYC4PsF7qbXDmRaWrbKntOlZ3n0=
-----END CERTIFICATE-----
-----BEGIN CERTIFICATE-----
MIIGMTCCBBmgAwIBAgICEAAwDQYJKoZIhvcNAQELBQAwajELMAkGA1UEBhMCVVMx
CzAJBgNVBAgMAkNBMQswCQYDVQQHDAJDQTESMBAGA1UECgwJUmVkaXNMYWJzMS0w
KwYDVQQDDCRSZWRpc0xhYnMgUm9vdCBDZXJ0aWZpY2F0ZSBBdXRob3JpdHkwHhcN
MTgwMjI1MTUzNzM3WhcNMjgwMjIzMTUzNzM3WjBfMQswCQYDVQQGEwJVUzELMAkG
A1UECAwCQ0ExEjAQBgNVBAoMCVJlZGlzTGFiczEvMC0GA1UEAwwmUkNQIEludGVy
bWVkaWF0ZSBDZXJ0aWZpY2F0ZSBBdXRob3JpdHkwggIiMA0GCSqGSIb3DQEBAQUA
A4ICDwAwggIKAoICAQDf9dqbxc8Bq7Ctq9rWcxrGNKKHivqLAFpPq02yLPx6fsOv
Tq7GsDChAYBBc4v7Y2Ap9RD5Vs3dIhEANcnolf27QwrG9RMnnvzk8pCvp1o6zSU4
VuOE1W66/O1/7e2rVxyrnTcP7UgK43zNIXu7+tiAqWsO92uSnuMoGPGpeaUm1jym
hjWKtkAwDFSqvHY+XL5qDVBEjeUe+WHkYUg40cAXjusAqgm2hZt29c2wnVrxW25W
P0meNlzHGFdA2AC5z54iRiqj57dTfBTkHoBczQxcyw6hhzxZQ4e5I5zOKjXXEhZN
r0tA3YC14CTabKRus/JmZieyZzRgEy2oti64tmLYTqSlAD78pRL40VNoaSYetXLw
hhNsXCHgWaY6d5bLOc/aIQMAV5oLvZQKvuXAF1IDmhPA+bZbpWipp0zagf1P1H3s
UzsMdn2KM0ejzgotbtNlj5TcrVwpmvE3ktvUAuA+hi3FkVx1US+2Gsp5x4YOzJ7u
P1WPk6ShF0JgnJH2ILdj6kttTWwFzH17keSFICWDfH/+kM+k7Y1v3EXMQXE7y0T9
MjvJskz6d/nv+sQhY04xt64xFMGTnZjlJMzfQNi7zWFLTZnDD0lPowq7l3YiPoTT
t5Xky83lu0KZsZBo0WlWaDG00gLVdtRgVbcuSWxpi5BdLb1kRab66JptWjxwXQID
AQABo4HrMIHoMDoGA1UdHwQzMDEwL6AtoCuGKWh0dHBzOi8vcmwtY2Etc2VydmVy
LnJlZGlzbGFicy5jb20vdjEvY3JsMEYGCCsGAQUFBwEBBDowODA2BggrBgEFBQcw
AYYqaHR0cHM6Ly9ybC1jYS1zZXJ2ZXIucmVkaXNsYWJzLmNvbS92MS9vY3NwMB0G
A1UdDgQWBBQHar5OKvQUpP2qWt6mckzToeCOHDAfBgNVHSMEGDAWgBQi42wH6hM4
L2sujEvLM0/u8lRXTzASBgNVHRMBAf8ECDAGAQH/AgEAMA4GA1UdDwEB/wQEAwIB
hjANBgkqhkiG9w0BAQsFAAOCAgEAirEn/iTsAKyhd+pu2W3Z5NjCko4NPU0EYUbr
AP7+POK2rzjIrJO3nFYQ/LLuC7KCXG+2qwan2SAOGmqWst13Y+WHp44Kae0kaChW
vcYLXXSoGQGC8QuFSNUdaeg3RbMDYFT04dOkqufeWVccoHVxyTSg9eD8LZuHn5jw
7QDLiEECBmIJHk5Eeo2TAZrx4Yx6ufSUX5HeVjlAzqwtAqdt99uCJ/EL8bgpWbe+
XoSpvUv0SEC1I1dCAhCKAvRlIOA6VBcmzg5Am12KzkqTul12/VEFIgzqu0Zy2Jbc
AUPrYVu/+tOGXQaijy7YgwH8P8n3s7ZeUa1VABJHcxrxYduDDJBLZi+MjheUDaZ1
jQRHYevI2tlqeSBqdPKG4zBY5lS0GiAlmuze5oENt0P3XboHoZPHiqcK3VECgTVh
/BkJcuudETSJcZDmQ8YfoKfBzRQNg2sv/hwvUv73Ss51Sco8GEt2lD8uEdib1Q6z
zDT5lXJowSzOD5ZA9OGDjnSRL+2riNtKWKEqvtEG3VBJoBzu9GoxbAc7wIZLxmli
iF5a/Zf5X+UXD3s4TMmy6C4QZJpAA2egsSQCnraWO2ULhh7iXMysSkF/nzVfZn43
iqpaB8++9a37hWq14ZmOv0TJIDz//b2+KC4VFXWQ5W5QC6whsjT+OlG4p5ZYG0jo
616pxqo=
-----END CERTIFICATE-----
-----BEGIN CERTIFICATE-----
MIIFujCCA6KgAwIBAgIJAJ1aTT1lu2ScMA0GCSqGSIb3DQEBCwUAMGoxCzAJBgNV
BAYTAlVTMQswCQYDVQQIDAJDQTELMAkGA1UEBwwCQ0ExEjAQBgNVBAoMCVJlZGlz
TGFiczEtMCsGA1UEAwwkUmVkaXNMYWJzIFJvb3QgQ2VydGlmaWNhdGUgQXV0aG9y
aXR5MB4XDTE4MDIyNTE1MjA0MloXDTM4MDIyMDE1MjA0MlowajELMAkGA1UEBhMC
VVMxCzAJBgNVBAgMAkNBMQswCQYDVQQHDAJDQTESMBAGA1UECgwJUmVkaXNMYWJz
MS0wKwYDVQQDDCRSZWRpc0xhYnMgUm9vdCBDZXJ0aWZpY2F0ZSBBdXRob3JpdHkw
ggIiMA0GCSqGSIb3DQEBAQUAA4ICDwAwggIKAoICAQDLEjXy7YrbN5Waau5cd6g1
G5C2tMmeTpZ0duFAPxNU4oE3RHS5gGiok346fUXuUxbZ6QkuzeN2/2Z+RmRcJhQY
Dm0ZgdG4x59An1TJfnzKKoWj8ISmoHS/TGNBdFzXV7FYNLBuqZouqePI6ReC6Qhl
pp45huV32Q3a6IDrrvx7Wo5ZczEQeFNbCeCOQYNDdTmCyEkHqc2AGo8eoIlSTutT
ULOC7R5gzJVTS0e1hesQ7jmqHjbO+VQS1NAL4/5K6cuTEqUl+XhVhPdLWBXJQ5ag
54qhX4v+ojLzeU1R/Vc6NjMvVtptWY6JihpgplprN0Yh2556ewcXMeturcKgXfGJ
xeYzsjzXerEjrVocX5V8BNrg64NlifzTMKNOOv4fVZszq1SIHR8F9ROrqiOdh8iC
JpUbLpXH9hWCSEO6VRMB2xJoKu3cgl63kF30s77x7wLFMEHiwsQRKxooE1UhgS9K
2sO4TlQ1eWUvFvHSTVDQDlGQ6zu4qjbOpb3Q8bQwoK+ai2alkXVR4Ltxe9QlgYK3
StsnPhruzZGA0wbXdpw0bnM+YdlEm5ffSTpNIfgHeaa7Dtb801FtA71ZlH7A6TaI
SIQuUST9EKmv7xrJyx0W1pGoPOLw5T029aTjnICSLdtV9bLwysrLhIYG5bnPq78B
cS+jZHFGzD7PUVGQD01nOQIDAQABo2MwYTAdBgNVHQ4EFgQUIuNsB+oTOC9rLoxL
yzNP7vJUV08wHwYDVR0jBBgwFoAUIuNsB+oTOC9rLoxLyzNP7vJUV08wDwYDVR0T
AQH/BAUwAwEB/zAOBgNVHQ8BAf8EBAMCAYYwDQYJKoZIhvcNAQELBQADggIBAHfg
z5pMNUAKdMzK1aS1EDdK9yKz4qicILz5czSLj1mC7HKDRy8cVADUxEICis++CsCu
rYOvyCVergHQLREcxPq4rc5Nq1uj6J6649NEeh4WazOOjL4ZfQ1jVznMbGy+fJm3
3Hoelv6jWRG9iqeJZja7/1s6YC6bWymI/OY1e4wUKeNHAo+Vger7MlHV+RuabaX+
hSJ8bJAM59NCM7AgMTQpJCncrcdLeceYniGy5Q/qt2b5mJkQVkIdy4TPGGB+AXDJ
D0q3I/JDRkDUFNFdeW0js7fHdsvCR7O3tJy5zIgEV/o/BCkmJVtuwPYOrw/yOlKj
TY/U7ATAx9VFF6/vYEOMYSmrZlFX+98L6nJtwDqfLB5VTltqZ4H/KBxGE3IRSt9l
FXy40U+LnXzhhW+7VBAvyYX8GEXhHkKU8Gqk1xitrqfBXY74xKgyUSTolFSfFVgj
mcM/X4K45bka+qpkj7Kfv/8D4j6aZekwhN2ly6hhC1SmQ8qjMjpG/mrWOSSHZFmf
ybu9iD2AYHeIOkshIl6xYIa++Q/00/vs46IzAbQyriOi0XxlSMMVtPx0Q3isp+ji
n8Mq9eOuxYOEQ4of8twUkUDd528iwGtEdwf0Q01UyT84S62N8AySl1ZBKXJz6W4F
UhWfa/HQYOAPDdEjNgnVwLI23b8t0TozyCWw7q8h
-----END CERTIFICATE-----

-----BEGIN CERTIFICATE-----
MIIEjzCCA3egAwIBAgIQe55B/ALCKJDZtdNT8kD6hTANBgkqhkiG9w0BAQsFADBM
MSAwHgYDVQQLExdHbG9iYWxTaWduIFJvb3QgQ0EgLSBSMzETMBEGA1UEChMKR2xv
YmFsU2lnbjETMBEGA1UEAxMKR2xvYmFsU2lnbjAeFw0yMjAxMjYxMjAwMDBaFw0y
NTAxMjYwMDAwMDBaMFgxCzAJBgNVBAYTAkJFMRkwFwYDVQQKExBHbG9iYWxTaWdu
IG52LXNhMS4wLAYDVQQDEyVHbG9iYWxTaWduIEF0bGFzIFIzIE9WIFRMUyBDQSAy
MDIyIFEyMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAmGmg1LW9b7Lf
8zDD83yBDTEkt+FOxKJZqF4veWc5KZsQj9HfnUS2e5nj/E+JImlGPsQuoiosLuXD
BVBNAMcUFa11buFMGMeEMwiTmCXoXRrXQmH0qjpOfKgYc5gHG3BsRGaRrf7VR4eg
ofNMG9wUBw4/g/TT7+bQJdA4NfE7Y4d5gEryZiBGB/swaX6Jp/8MF4TgUmOWmalK
dZCKyb4sPGQFRTtElk67F7vU+wdGcrcOx1tDcIB0ncjLPMnaFicagl+daWGsKqTh
counQb6QJtYHa91KvCfKWocMxQ7OIbB5UARLPmC4CJ1/f8YFm35ebfzAeULYdGXu
jE9CLor0OwIDAQABo4IBXzCCAVswDgYDVR0PAQH/BAQDAgGGMB0GA1UdJQQWMBQG
CCsGAQUFBwMBBggrBgEFBQcDAjASBgNVHRMBAf8ECDAGAQH/AgEAMB0GA1UdDgQW
BBSH5Zq7a7B/t95GfJWkDBpA8HHqdjAfBgNVHSMEGDAWgBSP8Et/qC5FJK5NUPpj
move4t0bvDB7BggrBgEFBQcBAQRvMG0wLgYIKwYBBQUHMAGGImh0dHA6Ly9vY3Nw
Mi5nbG9iYWxzaWduLmNvbS9yb290cjMwOwYIKwYBBQUHMAKGL2h0dHA6Ly9zZWN1
cmUuZ2xvYmFsc2lnbi5jb20vY2FjZXJ0L3Jvb3QtcjMuY3J0MDYGA1UdHwQvMC0w
K6ApoCeGJWh0dHA6Ly9jcmwuZ2xvYmFsc2lnbi5jb20vcm9vdC1yMy5jcmwwIQYD
VR0gBBowGDAIBgZngQwBAgIwDAYKKwYBBAGgMgoBAjANBgkqhkiG9w0BAQsFAAOC
AQEAKRic9/f+nmhQU/wz04APZLjgG5OgsuUOyUEZjKVhNGDwxGTvKhyXGGAMW2B/
3bRi+aElpXwoxu3pL6fkElbX3B0BeS5LoDtxkyiVEBMZ8m+sXbocwlPyxrPbX6mY
0rVIvnuUeBH8X0L5IwfpNVvKnBIilTbcebfHyXkPezGwz7E1yhUULjJFm2bt0SdX
y+4X/WeiiYIv+fTVgZZgl+/2MKIsu/qdBJc3f3TvJ8nz+Eax1zgZmww+RSQWeOj3
15Iw6Z5FX+NwzY/Ab+9PosR5UosSeq+9HhtaxZttXG1nVh+avYPGYddWmiMT90J5
ZgKnO/Fx2hBgTxhOTMYaD312kg==
-----END CERTIFICATE-----

-----BEGIN CERTIFICATE-----
MIIDXzCCAkegAwIBAgILBAAAAAABIVhTCKIwDQYJKoZIhvcNAQELBQAwTDEgMB4G
A1UECxMXR2xvYmFsU2lnbiBSb290IENBIC0gUjMxEzARBgNVBAoTCkdsb2JhbFNp
Z24xEzARBgNVBAMTCkdsb2JhbFNpZ24wHhcNMDkwMzE4MTAwMDAwWhcNMjkwMzE4
MTAwMDAwWjBMMSAwHgYDVQQLExdHbG9iYWxTaWduIFJvb3QgQ0EgLSBSMzETMBEG
A1UEChMKR2xvYmFsU2lnbjETMBEGA1UEAxMKR2xvYmFsU2lnbjCCASIwDQYJKoZI
hvcNAQEBBQADggEPADCCAQoCggEBAMwldpB5BngiFvXAg7aEyiie/QV2EcWtiHL8
RgJDx7KKnQRfJMsuS+FggkbhUqsMgUdwbN1k0ev1LKMPgj0MK66X17YUhhB5uzsT
gHeMCOFJ0mpiLx9e+pZo34knlTifBtc+ycsmWQ1z3rDI6SYOgxXG71uL0gRgykmm
KPZpO/bLyCiR5Z2KYVc3rHQU3HTgOu5yLy6c+9C7v/U9AOEGM+iCK65TpjoWc4zd
QQ4gOsC0p6Hpsk+QLjJg6VfLuQSSaGjlOCZgdbKfd/+RFO+uIEn8rUAVSNECMWEZ
XriX7613t2Saer9fwRPvm2L7DWzgVGkWqQPabumDk3F2xmmFghcCAwEAAaNCMEAw
DgYDVR0PAQH/BAQDAgEGMA8GA1UdEwEB/wQFMAMBAf8wHQYDVR0OBBYEFI/wS3+o
LkUkrk1Q+mOai97i3Ru8MA0GCSqGSIb3DQEBCwUAA4IBAQBLQNvAUKr+yAzv95ZU
RUm7lgAJQayzE4aGKAczymvmdLm6AC2upArT9fHxD4q/c2dKg8dEe3jgr25sbwMp
jjM5RcOO5LlXbKr8EpbsU8Yt5CRsuZRj+9xTaGdWPoO4zzUhw8lo/s7awlOqzJCK
6fBdRoyV3XpYKBovHd7NADdBj+1EbddTKJd+82cEHhXXipa0095MJ6RMG3NzdvQX
mcIfeg7jLQitChws/zyrVQ4PkX4268NXSb7hLi18YIvDQVETI53O9zJrlAGomecs
Mx86OyXShkDOOyyGeMlhLxS67ttVb9+E7gUJTb0o2HLO02JQZR7rkpeDMdmztcpH
WD9f
-----END CERTIFICATE-----`;
const TLSProfiles = {
    RedisCloudFixed: {
        ca: RedisCloudCA
    },
    RedisCloudFlexible: {
        ca: RedisCloudCA
    }
};
exports.default = TLSProfiles;
}}),
"[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/utils/index.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.noop = exports.defaults = exports.Debug = exports.zipMap = exports.CONNECTION_CLOSED_ERROR_MSG = exports.shuffle = exports.sample = exports.resolveTLSProfile = exports.parseURL = exports.optimizeErrorStack = exports.toArg = exports.convertMapToArray = exports.convertObjectToArray = exports.timeout = exports.packObject = exports.isInt = exports.wrapMultiResult = exports.convertBufferToString = void 0;
const url_1 = __turbopack_context__.r("[externals]/url [external] (url, cjs)");
const lodash_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/utils/lodash.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "defaults", {
    enumerable: true,
    get: function() {
        return lodash_1.defaults;
    }
});
Object.defineProperty(exports, "noop", {
    enumerable: true,
    get: function() {
        return lodash_1.noop;
    }
});
const debug_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/utils/debug.js [app-rsc] (ecmascript)");
exports.Debug = debug_1.default;
const TLSProfiles_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/constants/TLSProfiles.js [app-rsc] (ecmascript)");
/**
 * Convert a buffer to string, supports buffer array
 *
 * @example
 * ```js
 * const input = [Buffer.from('foo'), [Buffer.from('bar')]]
 * const res = convertBufferToString(input, 'utf8')
 * expect(res).to.eql(['foo', ['bar']])
 * ```
 */ function convertBufferToString(value, encoding) {
    if (value instanceof Buffer) {
        return value.toString(encoding);
    }
    if (Array.isArray(value)) {
        const length = value.length;
        const res = Array(length);
        for(let i = 0; i < length; ++i){
            res[i] = value[i] instanceof Buffer && encoding === "utf8" ? value[i].toString() : convertBufferToString(value[i], encoding);
        }
        return res;
    }
    return value;
}
exports.convertBufferToString = convertBufferToString;
/**
 * Convert a list of results to node-style
 *
 * @example
 * ```js
 * const input = ['a', 'b', new Error('c'), 'd']
 * const output = exports.wrapMultiResult(input)
 * expect(output).to.eql([[null, 'a'], [null, 'b'], [new Error('c')], [null, 'd'])
 * ```
 */ function wrapMultiResult(arr) {
    // When using WATCH/EXEC transactions, the EXEC will return
    // a null instead of an array
    if (!arr) {
        return null;
    }
    const result = [];
    const length = arr.length;
    for(let i = 0; i < length; ++i){
        const item = arr[i];
        if (item instanceof Error) {
            result.push([
                item
            ]);
        } else {
            result.push([
                null,
                item
            ]);
        }
    }
    return result;
}
exports.wrapMultiResult = wrapMultiResult;
/**
 * Detect if the argument is a int
 * @example
 * ```js
 * > isInt('123')
 * true
 * > isInt('123.3')
 * false
 * > isInt('1x')
 * false
 * > isInt(123)
 * true
 * > isInt(true)
 * false
 * ```
 */ function isInt(value) {
    const x = parseFloat(value);
    return !isNaN(value) && (x | 0) === x;
}
exports.isInt = isInt;
/**
 * Pack an array to an Object
 *
 * @example
 * ```js
 * > packObject(['a', 'b', 'c', 'd'])
 * { a: 'b', c: 'd' }
 * ```
 */ function packObject(array) {
    const result = {};
    const length = array.length;
    for(let i = 1; i < length; i += 2){
        result[array[i - 1]] = array[i];
    }
    return result;
}
exports.packObject = packObject;
/**
 * Return a callback with timeout
 */ function timeout(callback, timeout) {
    let timer = null;
    const run = function() {
        if (timer) {
            clearTimeout(timer);
            timer = null;
            callback.apply(this, arguments);
        }
    };
    timer = setTimeout(run, timeout, new Error("timeout"));
    return run;
}
exports.timeout = timeout;
/**
 * Convert an object to an array
 * @example
 * ```js
 * > convertObjectToArray({ a: '1' })
 * ['a', '1']
 * ```
 */ function convertObjectToArray(obj) {
    const result = [];
    const keys = Object.keys(obj); // Object.entries requires node 7+
    for(let i = 0, l = keys.length; i < l; i++){
        result.push(keys[i], obj[keys[i]]);
    }
    return result;
}
exports.convertObjectToArray = convertObjectToArray;
/**
 * Convert a map to an array
 * @example
 * ```js
 * > convertMapToArray(new Map([[1, '2']]))
 * [1, '2']
 * ```
 */ function convertMapToArray(map) {
    const result = [];
    let pos = 0;
    map.forEach(function(value, key) {
        result[pos] = key;
        result[pos + 1] = value;
        pos += 2;
    });
    return result;
}
exports.convertMapToArray = convertMapToArray;
/**
 * Convert a non-string arg to a string
 */ function toArg(arg) {
    if (arg === null || typeof arg === "undefined") {
        return "";
    }
    return String(arg);
}
exports.toArg = toArg;
/**
 * Optimize error stack
 *
 * @param error actually error
 * @param friendlyStack the stack that more meaningful
 * @param filterPath only show stacks with the specified path
 */ function optimizeErrorStack(error, friendlyStack, filterPath) {
    const stacks = friendlyStack.split("\n");
    let lines = "";
    let i;
    for(i = 1; i < stacks.length; ++i){
        if (stacks[i].indexOf(filterPath) === -1) {
            break;
        }
    }
    for(let j = i; j < stacks.length; ++j){
        lines += "\n" + stacks[j];
    }
    if (error.stack) {
        const pos = error.stack.indexOf("\n");
        error.stack = error.stack.slice(0, pos) + lines;
    }
    return error;
}
exports.optimizeErrorStack = optimizeErrorStack;
/**
 * Parse the redis protocol url
 */ function parseURL(url) {
    if (isInt(url)) {
        return {
            port: url
        };
    }
    let parsed = (0, url_1.parse)(url, true, true);
    if (!parsed.slashes && url[0] !== "/") {
        url = "//" + url;
        parsed = (0, url_1.parse)(url, true, true);
    }
    const options = parsed.query || {};
    const result = {};
    if (parsed.auth) {
        const index = parsed.auth.indexOf(":");
        result.username = index === -1 ? parsed.auth : parsed.auth.slice(0, index);
        result.password = index === -1 ? "" : parsed.auth.slice(index + 1);
    }
    if (parsed.pathname) {
        if (parsed.protocol === "redis:" || parsed.protocol === "rediss:") {
            if (parsed.pathname.length > 1) {
                result.db = parsed.pathname.slice(1);
            }
        } else {
            result.path = parsed.pathname;
        }
    }
    if (parsed.host) {
        result.host = parsed.hostname;
    }
    if (parsed.port) {
        result.port = parsed.port;
    }
    if (typeof options.family === "string") {
        const intFamily = Number.parseInt(options.family, 10);
        if (!Number.isNaN(intFamily)) {
            result.family = intFamily;
        }
    }
    (0, lodash_1.defaults)(result, options);
    return result;
}
exports.parseURL = parseURL;
/**
 * Resolve TLS profile shortcut in connection options
 */ function resolveTLSProfile(options) {
    let tls = options === null || options === void 0 ? void 0 : options.tls;
    if (typeof tls === "string") tls = {
        profile: tls
    };
    const profile = TLSProfiles_1.default[tls === null || tls === void 0 ? void 0 : tls.profile];
    if (profile) {
        tls = Object.assign({}, profile, tls);
        delete tls.profile;
        options = Object.assign({}, options, {
            tls
        });
    }
    return options;
}
exports.resolveTLSProfile = resolveTLSProfile;
/**
 * Get a random element from `array`
 */ function sample(array, from = 0) {
    const length = array.length;
    if (from >= length) {
        return null;
    }
    return array[from + Math.floor(Math.random() * (length - from))];
}
exports.sample = sample;
/**
 * Shuffle the array using the Fisher-Yates Shuffle.
 * This method will mutate the original array.
 */ function shuffle(array) {
    let counter = array.length;
    // While there are elements in the array
    while(counter > 0){
        // Pick a random index
        const index = Math.floor(Math.random() * counter);
        // Decrease counter by 1
        counter--;
        // And swap the last element with it
        [array[counter], array[index]] = [
            array[index],
            array[counter]
        ];
    }
    return array;
}
exports.shuffle = shuffle;
/**
 * Error message for connection being disconnected
 */ exports.CONNECTION_CLOSED_ERROR_MSG = "Connection is closed.";
function zipMap(keys, values) {
    const map = new Map();
    keys.forEach((key, index)=>{
        map.set(key, values[index]);
    });
    return map;
}
exports.zipMap = zipMap;
}}),
"[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/Command.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const commands_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@ioredis+commands@1.2.0/node_modules/@ioredis/commands/built/index.js [app-rsc] (ecmascript)");
const calculateSlot = __turbopack_context__.r("[project]/node_modules/.pnpm/cluster-key-slot@1.1.2/node_modules/cluster-key-slot/lib/index.js [app-rsc] (ecmascript)");
const standard_as_callback_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/standard-as-callback@2.1.0/node_modules/standard-as-callback/built/index.js [app-rsc] (ecmascript)");
const utils_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/utils/index.js [app-rsc] (ecmascript)");
/**
 * Command instance
 *
 * It's rare that you need to create a Command instance yourself.
 *
 * ```js
 * var infoCommand = new Command('info', null, function (err, result) {
 *   console.log('result', result);
 * });
 *
 * redis.sendCommand(infoCommand);
 *
 * // When no callback provided, Command instance will have a `promise` property,
 * // which will resolve/reject with the result of the command.
 * var getCommand = new Command('get', ['foo']);
 * getCommand.promise.then(function (result) {
 *   console.log('result', result);
 * });
 * ```
 */ class Command {
    /**
     * Creates an instance of Command.
     * @param name Command name
     * @param args An array of command arguments
     * @param options
     * @param callback The callback that handles the response.
     * If omit, the response will be handled via Promise
     */ constructor(name, args = [], options = {}, callback){
        this.name = name;
        this.inTransaction = false;
        this.isResolved = false;
        this.transformed = false;
        this.replyEncoding = options.replyEncoding;
        this.errorStack = options.errorStack;
        this.args = args.flat();
        this.callback = callback;
        this.initPromise();
        if (options.keyPrefix) {
            // @ts-expect-error
            const isBufferKeyPrefix = options.keyPrefix instanceof Buffer;
            // @ts-expect-error
            let keyPrefixBuffer = isBufferKeyPrefix ? options.keyPrefix : null;
            this._iterateKeys((key)=>{
                if (key instanceof Buffer) {
                    if (keyPrefixBuffer === null) {
                        keyPrefixBuffer = Buffer.from(options.keyPrefix);
                    }
                    return Buffer.concat([
                        keyPrefixBuffer,
                        key
                    ]);
                } else if (isBufferKeyPrefix) {
                    // @ts-expect-error
                    return Buffer.concat([
                        options.keyPrefix,
                        Buffer.from(String(key))
                    ]);
                }
                return options.keyPrefix + key;
            });
        }
        if (options.readOnly) {
            this.isReadOnly = true;
        }
    }
    /**
     * Check whether the command has the flag
     */ static checkFlag(flagName, commandName) {
        return !!this.getFlagMap()[flagName][commandName];
    }
    static setArgumentTransformer(name, func) {
        this._transformer.argument[name] = func;
    }
    static setReplyTransformer(name, func) {
        this._transformer.reply[name] = func;
    }
    static getFlagMap() {
        if (!this.flagMap) {
            this.flagMap = Object.keys(Command.FLAGS).reduce((map, flagName)=>{
                map[flagName] = {};
                Command.FLAGS[flagName].forEach((commandName)=>{
                    map[flagName][commandName] = true;
                });
                return map;
            }, {});
        }
        return this.flagMap;
    }
    getSlot() {
        if (typeof this.slot === "undefined") {
            const key = this.getKeys()[0];
            this.slot = key == null ? null : calculateSlot(key);
        }
        return this.slot;
    }
    getKeys() {
        return this._iterateKeys();
    }
    /**
     * Convert command to writable buffer or string
     */ toWritable(_socket) {
        let result;
        const commandStr = "*" + (this.args.length + 1) + "\r\n$" + Buffer.byteLength(this.name) + "\r\n" + this.name + "\r\n";
        if (this.bufferMode) {
            const buffers = new MixedBuffers();
            buffers.push(commandStr);
            for(let i = 0; i < this.args.length; ++i){
                const arg = this.args[i];
                if (arg instanceof Buffer) {
                    if (arg.length === 0) {
                        buffers.push("$0\r\n\r\n");
                    } else {
                        buffers.push("$" + arg.length + "\r\n");
                        buffers.push(arg);
                        buffers.push("\r\n");
                    }
                } else {
                    buffers.push("$" + Buffer.byteLength(arg) + "\r\n" + arg + "\r\n");
                }
            }
            result = buffers.toBuffer();
        } else {
            result = commandStr;
            for(let i = 0; i < this.args.length; ++i){
                const arg = this.args[i];
                result += "$" + Buffer.byteLength(arg) + "\r\n" + arg + "\r\n";
            }
        }
        return result;
    }
    stringifyArguments() {
        for(let i = 0; i < this.args.length; ++i){
            const arg = this.args[i];
            if (typeof arg === "string") {
            // buffers and strings don't need any transformation
            } else if (arg instanceof Buffer) {
                this.bufferMode = true;
            } else {
                this.args[i] = (0, utils_1.toArg)(arg);
            }
        }
    }
    /**
     * Convert buffer/buffer[] to string/string[],
     * and apply reply transformer.
     */ transformReply(result) {
        if (this.replyEncoding) {
            result = (0, utils_1.convertBufferToString)(result, this.replyEncoding);
        }
        const transformer = Command._transformer.reply[this.name];
        if (transformer) {
            result = transformer(result);
        }
        return result;
    }
    /**
     * Set the wait time before terminating the attempt to execute a command
     * and generating an error.
     */ setTimeout(ms) {
        if (!this._commandTimeoutTimer) {
            this._commandTimeoutTimer = setTimeout(()=>{
                if (!this.isResolved) {
                    this.reject(new Error("Command timed out"));
                }
            }, ms);
        }
    }
    initPromise() {
        const promise = new Promise((resolve, reject)=>{
            if (!this.transformed) {
                this.transformed = true;
                const transformer = Command._transformer.argument[this.name];
                if (transformer) {
                    this.args = transformer(this.args);
                }
                this.stringifyArguments();
            }
            this.resolve = this._convertValue(resolve);
            if (this.errorStack) {
                this.reject = (err)=>{
                    reject((0, utils_1.optimizeErrorStack)(err, this.errorStack.stack, __dirname));
                };
            } else {
                this.reject = reject;
            }
        });
        this.promise = (0, standard_as_callback_1.default)(promise, this.callback);
    }
    /**
     * Iterate through the command arguments that are considered keys.
     */ _iterateKeys(transform = (key)=>key) {
        if (typeof this.keys === "undefined") {
            this.keys = [];
            if ((0, commands_1.exists)(this.name)) {
                // @ts-expect-error
                const keyIndexes = (0, commands_1.getKeyIndexes)(this.name, this.args);
                for (const index of keyIndexes){
                    this.args[index] = transform(this.args[index]);
                    this.keys.push(this.args[index]);
                }
            }
        }
        return this.keys;
    }
    /**
     * Convert the value from buffer to the target encoding.
     */ _convertValue(resolve) {
        return (value)=>{
            try {
                const existingTimer = this._commandTimeoutTimer;
                if (existingTimer) {
                    clearTimeout(existingTimer);
                    delete this._commandTimeoutTimer;
                }
                resolve(this.transformReply(value));
                this.isResolved = true;
            } catch (err) {
                this.reject(err);
            }
            return this.promise;
        };
    }
}
exports.default = Command;
Command.FLAGS = {
    VALID_IN_SUBSCRIBER_MODE: [
        "subscribe",
        "psubscribe",
        "unsubscribe",
        "punsubscribe",
        "ssubscribe",
        "sunsubscribe",
        "ping",
        "quit"
    ],
    VALID_IN_MONITOR_MODE: [
        "monitor",
        "auth"
    ],
    ENTER_SUBSCRIBER_MODE: [
        "subscribe",
        "psubscribe",
        "ssubscribe"
    ],
    EXIT_SUBSCRIBER_MODE: [
        "unsubscribe",
        "punsubscribe",
        "sunsubscribe"
    ],
    WILL_DISCONNECT: [
        "quit"
    ]
};
Command._transformer = {
    argument: {},
    reply: {}
};
const msetArgumentTransformer = function(args) {
    if (args.length === 1) {
        if (args[0] instanceof Map) {
            return (0, utils_1.convertMapToArray)(args[0]);
        }
        if (typeof args[0] === "object" && args[0] !== null) {
            return (0, utils_1.convertObjectToArray)(args[0]);
        }
    }
    return args;
};
const hsetArgumentTransformer = function(args) {
    if (args.length === 2) {
        if (args[1] instanceof Map) {
            return [
                args[0]
            ].concat((0, utils_1.convertMapToArray)(args[1]));
        }
        if (typeof args[1] === "object" && args[1] !== null) {
            return [
                args[0]
            ].concat((0, utils_1.convertObjectToArray)(args[1]));
        }
    }
    return args;
};
Command.setArgumentTransformer("mset", msetArgumentTransformer);
Command.setArgumentTransformer("msetnx", msetArgumentTransformer);
Command.setArgumentTransformer("hset", hsetArgumentTransformer);
Command.setArgumentTransformer("hmset", hsetArgumentTransformer);
Command.setReplyTransformer("hgetall", function(result) {
    if (Array.isArray(result)) {
        const obj = {};
        for(let i = 0; i < result.length; i += 2){
            const key = result[i];
            const value = result[i + 1];
            if (key in obj) {
                // can only be truthy if the property is special somehow, like '__proto__' or 'constructor'
                // https://github.com/luin/ioredis/issues/1267
                Object.defineProperty(obj, key, {
                    value,
                    configurable: true,
                    enumerable: true,
                    writable: true
                });
            } else {
                obj[key] = value;
            }
        }
        return obj;
    }
    return result;
});
class MixedBuffers {
    constructor(){
        this.length = 0;
        this.items = [];
    }
    push(x) {
        this.length += Buffer.byteLength(x);
        this.items.push(x);
    }
    toBuffer() {
        const result = Buffer.allocUnsafe(this.length);
        let offset = 0;
        for (const item of this.items){
            const length = Buffer.byteLength(item);
            Buffer.isBuffer(item) ? item.copy(result, offset) : result.write(item, offset, length);
            offset += length;
        }
        return result;
    }
}
}}),
"[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/errors/ClusterAllFailedError.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const redis_errors_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/redis-errors@1.2.0/node_modules/redis-errors/index.js [app-rsc] (ecmascript)");
class ClusterAllFailedError extends redis_errors_1.RedisError {
    constructor(message, lastNodeError){
        super(message);
        this.lastNodeError = lastNodeError;
        Error.captureStackTrace(this, this.constructor);
    }
    get name() {
        return this.constructor.name;
    }
}
exports.default = ClusterAllFailedError;
ClusterAllFailedError.defaultMessage = "Failed to refresh slots cache.";
}}),
"[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/ScanStream.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const stream_1 = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)");
/**
 * Convenient class to convert the process of scanning keys to a readable stream.
 */ class ScanStream extends stream_1.Readable {
    constructor(opt){
        super(opt);
        this.opt = opt;
        this._redisCursor = "0";
        this._redisDrained = false;
    }
    _read() {
        if (this._redisDrained) {
            this.push(null);
            return;
        }
        const args = [
            this._redisCursor
        ];
        if (this.opt.key) {
            args.unshift(this.opt.key);
        }
        if (this.opt.match) {
            args.push("MATCH", this.opt.match);
        }
        if (this.opt.type) {
            args.push("TYPE", this.opt.type);
        }
        if (this.opt.count) {
            args.push("COUNT", String(this.opt.count));
        }
        if (this.opt.noValues) {
            args.push("NOVALUES");
        }
        this.opt.redis[this.opt.command](args, (err, res)=>{
            if (err) {
                this.emit("error", err);
                return;
            }
            this._redisCursor = res[0] instanceof Buffer ? res[0].toString() : res[0];
            if (this._redisCursor === "0") {
                this._redisDrained = true;
            }
            this.push(res[1]);
        });
    }
    close() {
        this._redisDrained = true;
    }
}
exports.default = ScanStream;
}}),
"[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/autoPipelining.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.executeWithAutoPipelining = exports.getFirstValueInFlattenedArray = exports.shouldUseAutoPipelining = exports.notAllowedAutoPipelineCommands = exports.kCallbacks = exports.kExec = void 0;
const lodash_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/utils/lodash.js [app-rsc] (ecmascript)");
const calculateSlot = __turbopack_context__.r("[project]/node_modules/.pnpm/cluster-key-slot@1.1.2/node_modules/cluster-key-slot/lib/index.js [app-rsc] (ecmascript)");
const standard_as_callback_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/standard-as-callback@2.1.0/node_modules/standard-as-callback/built/index.js [app-rsc] (ecmascript)");
exports.kExec = Symbol("exec");
exports.kCallbacks = Symbol("callbacks");
exports.notAllowedAutoPipelineCommands = [
    "auth",
    "info",
    "script",
    "quit",
    "cluster",
    "pipeline",
    "multi",
    "subscribe",
    "psubscribe",
    "unsubscribe",
    "unpsubscribe",
    "select"
];
function executeAutoPipeline(client, slotKey) {
    /*
      If a pipeline is already executing, keep queueing up commands
      since ioredis won't serve two pipelines at the same time
    */ if (client._runningAutoPipelines.has(slotKey)) {
        return;
    }
    if (!client._autoPipelines.has(slotKey)) {
        /*
          Rare edge case. Somehow, something has deleted this running autopipeline in an immediate
          call to executeAutoPipeline.
         
          Maybe the callback in the pipeline.exec is sometimes called in the same tick,
          e.g. if redis is disconnected?
        */ return;
    }
    client._runningAutoPipelines.add(slotKey);
    // Get the pipeline and immediately delete it so that new commands are queued on a new pipeline
    const pipeline = client._autoPipelines.get(slotKey);
    client._autoPipelines.delete(slotKey);
    const callbacks = pipeline[exports.kCallbacks];
    // Stop keeping a reference to callbacks immediately after the callbacks stop being used.
    // This allows the GC to reclaim objects referenced by callbacks, especially with 16384 slots
    // in Redis.Cluster
    pipeline[exports.kCallbacks] = null;
    // Perform the call
    pipeline.exec(function(err, results) {
        client._runningAutoPipelines.delete(slotKey);
        /*
          Invoke all callback in nextTick so the stack is cleared
          and callbacks can throw errors without affecting other callbacks.
        */ if (err) {
            for(let i = 0; i < callbacks.length; i++){
                process.nextTick(callbacks[i], err);
            }
        } else {
            for(let i = 0; i < callbacks.length; i++){
                process.nextTick(callbacks[i], ...results[i]);
            }
        }
        // If there is another pipeline on the same node, immediately execute it without waiting for nextTick
        if (client._autoPipelines.has(slotKey)) {
            executeAutoPipeline(client, slotKey);
        }
    });
}
function shouldUseAutoPipelining(client, functionName, commandName) {
    return functionName && client.options.enableAutoPipelining && !client.isPipeline && !exports.notAllowedAutoPipelineCommands.includes(commandName) && !client.options.autoPipeliningIgnoredCommands.includes(commandName);
}
exports.shouldUseAutoPipelining = shouldUseAutoPipelining;
function getFirstValueInFlattenedArray(args) {
    for(let i = 0; i < args.length; i++){
        const arg = args[i];
        if (typeof arg === "string") {
            return arg;
        } else if (Array.isArray(arg) || (0, lodash_1.isArguments)(arg)) {
            if (arg.length === 0) {
                continue;
            }
            return arg[0];
        }
        const flattened = [
            arg
        ].flat();
        if (flattened.length > 0) {
            return flattened[0];
        }
    }
    return undefined;
}
exports.getFirstValueInFlattenedArray = getFirstValueInFlattenedArray;
function executeWithAutoPipelining(client, functionName, commandName, args, callback) {
    // On cluster mode let's wait for slots to be available
    if (client.isCluster && !client.slots.length) {
        if (client.status === "wait") client.connect().catch(lodash_1.noop);
        return (0, standard_as_callback_1.default)(new Promise(function(resolve, reject) {
            client.delayUntilReady((err)=>{
                if (err) {
                    reject(err);
                    return;
                }
                executeWithAutoPipelining(client, functionName, commandName, args, null).then(resolve, reject);
            });
        }), callback);
    }
    // If we have slot information, we can improve routing by grouping slots served by the same subset of nodes
    // Note that the first value in args may be a (possibly empty) array.
    // ioredis will only flatten one level of the array, in the Command constructor.
    const prefix = client.options.keyPrefix || "";
    const slotKey = client.isCluster ? client.slots[calculateSlot(`${prefix}${getFirstValueInFlattenedArray(args)}`)].join(",") : "main";
    if (!client._autoPipelines.has(slotKey)) {
        const pipeline = client.pipeline();
        pipeline[exports.kExec] = false;
        pipeline[exports.kCallbacks] = [];
        client._autoPipelines.set(slotKey, pipeline);
    }
    const pipeline = client._autoPipelines.get(slotKey);
    /*
      Mark the pipeline as scheduled.
      The symbol will make sure that the pipeline is only scheduled once per tick.
      New commands are appended to an already scheduled pipeline.
    */ if (!pipeline[exports.kExec]) {
        pipeline[exports.kExec] = true;
        /*
          Deferring with setImmediate so we have a chance to capture multiple
          commands that can be scheduled by I/O events already in the event loop queue.
        */ setImmediate(executeAutoPipeline, client, slotKey);
    }
    // Create the promise which will execute the command in the pipeline.
    const autoPipelinePromise = new Promise(function(resolve, reject) {
        pipeline[exports.kCallbacks].push(function(err, value) {
            if (err) {
                reject(err);
                return;
            }
            resolve(value);
        });
        if (functionName === "call") {
            args.unshift(commandName);
        }
        pipeline[functionName](...args);
    });
    return (0, standard_as_callback_1.default)(autoPipelinePromise, callback);
}
exports.executeWithAutoPipelining = executeWithAutoPipelining;
}}),
"[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/Script.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const crypto_1 = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
const Command_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/Command.js [app-rsc] (ecmascript)");
const standard_as_callback_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/standard-as-callback@2.1.0/node_modules/standard-as-callback/built/index.js [app-rsc] (ecmascript)");
class Script {
    constructor(lua, numberOfKeys = null, keyPrefix = "", readOnly = false){
        this.lua = lua;
        this.numberOfKeys = numberOfKeys;
        this.keyPrefix = keyPrefix;
        this.readOnly = readOnly;
        this.sha = (0, crypto_1.createHash)("sha1").update(lua).digest("hex");
        const sha = this.sha;
        const socketHasScriptLoaded = new WeakSet();
        this.Command = class CustomScriptCommand extends Command_1.default {
            toWritable(socket) {
                const origReject = this.reject;
                this.reject = (err)=>{
                    if (err.message.indexOf("NOSCRIPT") !== -1) {
                        socketHasScriptLoaded.delete(socket);
                    }
                    origReject.call(this, err);
                };
                if (!socketHasScriptLoaded.has(socket)) {
                    socketHasScriptLoaded.add(socket);
                    this.name = "eval";
                    this.args[0] = lua;
                } else if (this.name === "eval") {
                    this.name = "evalsha";
                    this.args[0] = sha;
                }
                return super.toWritable(socket);
            }
        };
    }
    execute(container, args, options, callback) {
        if (typeof this.numberOfKeys === "number") {
            args.unshift(this.numberOfKeys);
        }
        if (this.keyPrefix) {
            options.keyPrefix = this.keyPrefix;
        }
        if (this.readOnly) {
            options.readOnly = true;
        }
        const evalsha = new this.Command("evalsha", [
            this.sha,
            ...args
        ], options);
        evalsha.promise = evalsha.promise.catch((err)=>{
            if (err.message.indexOf("NOSCRIPT") === -1) {
                throw err;
            }
            // Resend the same custom evalsha command that gets transformed
            // to an eval in case it's not loaded yet on the connection.
            const resend = new this.Command("evalsha", [
                this.sha,
                ...args
            ], options);
            const client = container.isPipeline ? container.redis : container;
            return client.sendCommand(resend);
        });
        (0, standard_as_callback_1.default)(evalsha.promise, callback);
        return container.sendCommand(evalsha);
    }
}
exports.default = Script;
}}),
"[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/utils/Commander.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const commands_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@ioredis+commands@1.2.0/node_modules/@ioredis/commands/built/index.js [app-rsc] (ecmascript)");
const autoPipelining_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/autoPipelining.js [app-rsc] (ecmascript)");
const Command_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/Command.js [app-rsc] (ecmascript)");
const Script_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/Script.js [app-rsc] (ecmascript)");
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class Commander {
    constructor(){
        this.options = {};
        /**
         * @ignore
         */ this.scriptsSet = {};
        /**
         * @ignore
         */ this.addedBuiltinSet = new Set();
    }
    /**
     * Return supported builtin commands
     */ getBuiltinCommands() {
        return commands.slice(0);
    }
    /**
     * Create a builtin command
     */ createBuiltinCommand(commandName) {
        return {
            string: generateFunction(null, commandName, "utf8"),
            buffer: generateFunction(null, commandName, null)
        };
    }
    /**
     * Create add builtin command
     */ addBuiltinCommand(commandName) {
        this.addedBuiltinSet.add(commandName);
        this[commandName] = generateFunction(commandName, commandName, "utf8");
        this[commandName + "Buffer"] = generateFunction(commandName + "Buffer", commandName, null);
    }
    /**
     * Define a custom command using lua script
     */ defineCommand(name, definition) {
        const script = new Script_1.default(definition.lua, definition.numberOfKeys, this.options.keyPrefix, definition.readOnly);
        this.scriptsSet[name] = script;
        this[name] = generateScriptingFunction(name, name, script, "utf8");
        this[name + "Buffer"] = generateScriptingFunction(name + "Buffer", name, script, null);
    }
    /**
     * @ignore
     */ sendCommand(command, stream, node) {
        throw new Error('"sendCommand" is not implemented');
    }
}
const commands = commands_1.list.filter((command)=>command !== "monitor");
commands.push("sentinel");
commands.forEach(function(commandName) {
    Commander.prototype[commandName] = generateFunction(commandName, commandName, "utf8");
    Commander.prototype[commandName + "Buffer"] = generateFunction(commandName + "Buffer", commandName, null);
});
Commander.prototype.call = generateFunction("call", "utf8");
Commander.prototype.callBuffer = generateFunction("callBuffer", null);
// @ts-expect-error
Commander.prototype.send_command = Commander.prototype.call;
function generateFunction(functionName, _commandName, _encoding) {
    if (typeof _encoding === "undefined") {
        _encoding = _commandName;
        _commandName = null;
    }
    return function(...args) {
        const commandName = _commandName || args.shift();
        let callback = args[args.length - 1];
        if (typeof callback === "function") {
            args.pop();
        } else {
            callback = undefined;
        }
        const options = {
            errorStack: this.options.showFriendlyErrorStack ? new Error() : undefined,
            keyPrefix: this.options.keyPrefix,
            replyEncoding: _encoding
        };
        // No auto pipeline, use regular command sending
        if (!(0, autoPipelining_1.shouldUseAutoPipelining)(this, functionName, commandName)) {
            return this.sendCommand(// @ts-expect-error
            new Command_1.default(commandName, args, options, callback));
        }
        // Create a new pipeline and make sure it's scheduled
        return (0, autoPipelining_1.executeWithAutoPipelining)(this, functionName, commandName, // @ts-expect-error
        args, callback);
    };
}
function generateScriptingFunction(functionName, commandName, script, encoding) {
    return function(...args) {
        const callback = typeof args[args.length - 1] === "function" ? args.pop() : undefined;
        const options = {
            replyEncoding: encoding
        };
        if (this.options.showFriendlyErrorStack) {
            options.errorStack = new Error();
        }
        // No auto pipeline, use regular command sending
        if (!(0, autoPipelining_1.shouldUseAutoPipelining)(this, functionName, commandName)) {
            return script.execute(this, args, options, callback);
        }
        // Create a new pipeline and make sure it's scheduled
        return (0, autoPipelining_1.executeWithAutoPipelining)(this, functionName, commandName, args, callback);
    };
}
exports.default = Commander;
}}),
"[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/Pipeline.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const calculateSlot = __turbopack_context__.r("[project]/node_modules/.pnpm/cluster-key-slot@1.1.2/node_modules/cluster-key-slot/lib/index.js [app-rsc] (ecmascript)");
const commands_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@ioredis+commands@1.2.0/node_modules/@ioredis/commands/built/index.js [app-rsc] (ecmascript)");
const standard_as_callback_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/standard-as-callback@2.1.0/node_modules/standard-as-callback/built/index.js [app-rsc] (ecmascript)");
const util_1 = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
const Command_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/Command.js [app-rsc] (ecmascript)");
const utils_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/utils/index.js [app-rsc] (ecmascript)");
const Commander_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/utils/Commander.js [app-rsc] (ecmascript)");
/*
  This function derives from the cluster-key-slot implementation.
  Instead of checking that all keys have the same slot, it checks that all slots are served by the same set of nodes.
  If this is satisfied, it returns the first key's slot.
*/ function generateMultiWithNodes(redis, keys) {
    const slot = calculateSlot(keys[0]);
    const target = redis._groupsBySlot[slot];
    for(let i = 1; i < keys.length; i++){
        if (redis._groupsBySlot[calculateSlot(keys[i])] !== target) {
            return -1;
        }
    }
    return slot;
}
class Pipeline extends Commander_1.default {
    constructor(redis){
        super();
        this.redis = redis;
        this.isPipeline = true;
        this.replyPending = 0;
        this._queue = [];
        this._result = [];
        this._transactions = 0;
        this._shaToScript = {};
        this.isCluster = this.redis.constructor.name === "Cluster" || this.redis.isCluster;
        this.options = redis.options;
        Object.keys(redis.scriptsSet).forEach((name)=>{
            const script = redis.scriptsSet[name];
            this._shaToScript[script.sha] = script;
            this[name] = redis[name];
            this[name + "Buffer"] = redis[name + "Buffer"];
        });
        redis.addedBuiltinSet.forEach((name)=>{
            this[name] = redis[name];
            this[name + "Buffer"] = redis[name + "Buffer"];
        });
        this.promise = new Promise((resolve, reject)=>{
            this.resolve = resolve;
            this.reject = reject;
        });
        const _this = this;
        Object.defineProperty(this, "length", {
            get: function() {
                return _this._queue.length;
            }
        });
    }
    fillResult(value, position) {
        if (this._queue[position].name === "exec" && Array.isArray(value[1])) {
            const execLength = value[1].length;
            for(let i = 0; i < execLength; i++){
                if (value[1][i] instanceof Error) {
                    continue;
                }
                const cmd = this._queue[position - (execLength - i)];
                try {
                    value[1][i] = cmd.transformReply(value[1][i]);
                } catch (err) {
                    value[1][i] = err;
                }
            }
        }
        this._result[position] = value;
        if (--this.replyPending) {
            return;
        }
        if (this.isCluster) {
            let retriable = true;
            let commonError;
            for(let i = 0; i < this._result.length; ++i){
                const error = this._result[i][0];
                const command = this._queue[i];
                if (error) {
                    if (command.name === "exec" && error.message === "EXECABORT Transaction discarded because of previous errors.") {
                        continue;
                    }
                    if (!commonError) {
                        commonError = {
                            name: error.name,
                            message: error.message
                        };
                    } else if (commonError.name !== error.name || commonError.message !== error.message) {
                        retriable = false;
                        break;
                    }
                } else if (!command.inTransaction) {
                    const isReadOnly = (0, commands_1.exists)(command.name) && (0, commands_1.hasFlag)(command.name, "readonly");
                    if (!isReadOnly) {
                        retriable = false;
                        break;
                    }
                }
            }
            if (commonError && retriable) {
                const _this = this;
                const errv = commonError.message.split(" ");
                const queue = this._queue;
                let inTransaction = false;
                this._queue = [];
                for(let i = 0; i < queue.length; ++i){
                    if (errv[0] === "ASK" && !inTransaction && queue[i].name !== "asking" && (!queue[i - 1] || queue[i - 1].name !== "asking")) {
                        const asking = new Command_1.default("asking");
                        asking.ignore = true;
                        this.sendCommand(asking);
                    }
                    queue[i].initPromise();
                    this.sendCommand(queue[i]);
                    inTransaction = queue[i].inTransaction;
                }
                let matched = true;
                if (typeof this.leftRedirections === "undefined") {
                    this.leftRedirections = {};
                }
                const exec = function() {
                    _this.exec();
                };
                const cluster = this.redis;
                cluster.handleError(commonError, this.leftRedirections, {
                    moved: function(_slot, key) {
                        _this.preferKey = key;
                        cluster.slots[errv[1]] = [
                            key
                        ];
                        cluster._groupsBySlot[errv[1]] = cluster._groupsIds[cluster.slots[errv[1]].join(";")];
                        cluster.refreshSlotsCache();
                        _this.exec();
                    },
                    ask: function(_slot, key) {
                        _this.preferKey = key;
                        _this.exec();
                    },
                    tryagain: exec,
                    clusterDown: exec,
                    connectionClosed: exec,
                    maxRedirections: ()=>{
                        matched = false;
                    },
                    defaults: ()=>{
                        matched = false;
                    }
                });
                if (matched) {
                    return;
                }
            }
        }
        let ignoredCount = 0;
        for(let i = 0; i < this._queue.length - ignoredCount; ++i){
            if (this._queue[i + ignoredCount].ignore) {
                ignoredCount += 1;
            }
            this._result[i] = this._result[i + ignoredCount];
        }
        this.resolve(this._result.slice(0, this._result.length - ignoredCount));
    }
    sendCommand(command) {
        if (this._transactions > 0) {
            command.inTransaction = true;
        }
        const position = this._queue.length;
        command.pipelineIndex = position;
        command.promise.then((result)=>{
            this.fillResult([
                null,
                result
            ], position);
        }).catch((error)=>{
            this.fillResult([
                error
            ], position);
        });
        this._queue.push(command);
        return this;
    }
    addBatch(commands) {
        let command, commandName, args;
        for(let i = 0; i < commands.length; ++i){
            command = commands[i];
            commandName = command[0];
            args = command.slice(1);
            this[commandName].apply(this, args);
        }
        return this;
    }
}
exports.default = Pipeline;
// @ts-expect-error
const multi = Pipeline.prototype.multi;
// @ts-expect-error
Pipeline.prototype.multi = function() {
    this._transactions += 1;
    return multi.apply(this, arguments);
};
// @ts-expect-error
const execBuffer = Pipeline.prototype.execBuffer;
// @ts-expect-error
Pipeline.prototype.execBuffer = (0, util_1.deprecate)(function() {
    if (this._transactions > 0) {
        this._transactions -= 1;
    }
    return execBuffer.apply(this, arguments);
}, "Pipeline#execBuffer: Use Pipeline#exec instead");
// NOTE: To avoid an unhandled promise rejection, this will unconditionally always return this.promise,
// which always has the rejection handled by standard-as-callback
// adding the provided rejection callback.
//
// If a different promise instance were returned, that promise would cause its own unhandled promise rejection
// errors, even if that promise unconditionally resolved to **the resolved value of** this.promise.
Pipeline.prototype.exec = function(callback) {
    // Wait for the cluster to be connected, since we need nodes information before continuing
    if (this.isCluster && !this.redis.slots.length) {
        if (this.redis.status === "wait") this.redis.connect().catch(utils_1.noop);
        if (callback && !this.nodeifiedPromise) {
            this.nodeifiedPromise = true;
            (0, standard_as_callback_1.default)(this.promise, callback);
        }
        this.redis.delayUntilReady((err)=>{
            if (err) {
                this.reject(err);
                return;
            }
            this.exec(callback);
        });
        return this.promise;
    }
    if (this._transactions > 0) {
        this._transactions -= 1;
        return execBuffer.apply(this, arguments);
    }
    if (!this.nodeifiedPromise) {
        this.nodeifiedPromise = true;
        (0, standard_as_callback_1.default)(this.promise, callback);
    }
    if (!this._queue.length) {
        this.resolve([]);
    }
    let pipelineSlot;
    if (this.isCluster) {
        // List of the first key for each command
        const sampleKeys = [];
        for(let i = 0; i < this._queue.length; i++){
            const keys = this._queue[i].getKeys();
            if (keys.length) {
                sampleKeys.push(keys[0]);
            }
            // For each command, check that the keys belong to the same slot
            if (keys.length && calculateSlot.generateMulti(keys) < 0) {
                this.reject(new Error("All the keys in a pipeline command should belong to the same slot"));
                return this.promise;
            }
        }
        if (sampleKeys.length) {
            pipelineSlot = generateMultiWithNodes(this.redis, sampleKeys);
            if (pipelineSlot < 0) {
                this.reject(new Error("All keys in the pipeline should belong to the same slots allocation group"));
                return this.promise;
            }
        } else {
            // Send the pipeline to a random node
            pipelineSlot = Math.random() * 16384 | 0;
        }
    }
    const _this = this;
    execPipeline();
    return this.promise;
    "TURBOPACK unreachable";
    function execPipeline() {
        let writePending = _this.replyPending = _this._queue.length;
        let node;
        if (_this.isCluster) {
            node = {
                slot: pipelineSlot,
                redis: _this.redis.connectionPool.nodes.all[_this.preferKey]
            };
        }
        let data = "";
        let buffers;
        const stream = {
            isPipeline: true,
            destination: _this.isCluster ? node : {
                redis: _this.redis
            },
            write (writable) {
                if (typeof writable !== "string") {
                    if (!buffers) {
                        buffers = [];
                    }
                    if (data) {
                        buffers.push(Buffer.from(data, "utf8"));
                        data = "";
                    }
                    buffers.push(writable);
                } else {
                    data += writable;
                }
                if (!--writePending) {
                    if (buffers) {
                        if (data) {
                            buffers.push(Buffer.from(data, "utf8"));
                        }
                        stream.destination.redis.stream.write(Buffer.concat(buffers));
                    } else {
                        stream.destination.redis.stream.write(data);
                    }
                    // Reset writePending for resending
                    writePending = _this._queue.length;
                    data = "";
                    buffers = undefined;
                }
            }
        };
        for(let i = 0; i < _this._queue.length; ++i){
            _this.redis.sendCommand(_this._queue[i], stream, node);
        }
        return _this.promise;
    }
};
}}),
"[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/transaction.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addTransactionSupport = void 0;
const utils_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/utils/index.js [app-rsc] (ecmascript)");
const standard_as_callback_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/standard-as-callback@2.1.0/node_modules/standard-as-callback/built/index.js [app-rsc] (ecmascript)");
const Pipeline_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/Pipeline.js [app-rsc] (ecmascript)");
function addTransactionSupport(redis) {
    redis.pipeline = function(commands) {
        const pipeline = new Pipeline_1.default(this);
        if (Array.isArray(commands)) {
            pipeline.addBatch(commands);
        }
        return pipeline;
    };
    const { multi } = redis;
    redis.multi = function(commands, options) {
        if (typeof options === "undefined" && !Array.isArray(commands)) {
            options = commands;
            commands = null;
        }
        if (options && options.pipeline === false) {
            return multi.call(this);
        }
        const pipeline = new Pipeline_1.default(this);
        // @ts-expect-error
        pipeline.multi();
        if (Array.isArray(commands)) {
            pipeline.addBatch(commands);
        }
        const exec = pipeline.exec;
        pipeline.exec = function(callback) {
            // Wait for the cluster to be connected, since we need nodes information before continuing
            if (this.isCluster && !this.redis.slots.length) {
                if (this.redis.status === "wait") this.redis.connect().catch(utils_1.noop);
                return (0, standard_as_callback_1.default)(new Promise((resolve, reject)=>{
                    this.redis.delayUntilReady((err)=>{
                        if (err) {
                            reject(err);
                            return;
                        }
                        this.exec(pipeline).then(resolve, reject);
                    });
                }), callback);
            }
            if (this._transactions > 0) {
                exec.call(pipeline);
            }
            // Returns directly when the pipeline
            // has been called multiple times (retries).
            if (this.nodeifiedPromise) {
                return exec.call(pipeline);
            }
            const promise = exec.call(pipeline);
            return (0, standard_as_callback_1.default)(promise.then(function(result) {
                const execResult = result[result.length - 1];
                if (typeof execResult === "undefined") {
                    throw new Error("Pipeline cannot be used to send any commands when the `exec()` has been called on it.");
                }
                if (execResult[0]) {
                    execResult[0].previousErrors = [];
                    for(let i = 0; i < result.length - 1; ++i){
                        if (result[i][0]) {
                            execResult[0].previousErrors.push(result[i][0]);
                        }
                    }
                    throw execResult[0];
                }
                return (0, utils_1.wrapMultiResult)(execResult[1]);
            }), callback);
        };
        // @ts-expect-error
        const { execBuffer } = pipeline;
        // @ts-expect-error
        pipeline.execBuffer = function(callback) {
            if (this._transactions > 0) {
                execBuffer.call(pipeline);
            }
            return pipeline.exec(callback);
        };
        return pipeline;
    };
    const { exec } = redis;
    redis.exec = function(callback) {
        return (0, standard_as_callback_1.default)(exec.call(this).then(function(results) {
            if (Array.isArray(results)) {
                results = (0, utils_1.wrapMultiResult)(results);
            }
            return results;
        }), callback);
    };
}
exports.addTransactionSupport = addTransactionSupport;
}}),
"[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/utils/applyMixin.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function applyMixin(derivedConstructor, mixinConstructor) {
    Object.getOwnPropertyNames(mixinConstructor.prototype).forEach((name)=>{
        Object.defineProperty(derivedConstructor.prototype, name, Object.getOwnPropertyDescriptor(mixinConstructor.prototype, name));
    });
}
exports.default = applyMixin;
}}),
"[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/cluster/ClusterOptions.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DEFAULT_CLUSTER_OPTIONS = void 0;
const dns_1 = __turbopack_context__.r("[externals]/dns [external] (dns, cjs)");
exports.DEFAULT_CLUSTER_OPTIONS = {
    clusterRetryStrategy: (times)=>Math.min(100 + times * 2, 2000),
    enableOfflineQueue: true,
    enableReadyCheck: true,
    scaleReads: "master",
    maxRedirections: 16,
    retryDelayOnMoved: 0,
    retryDelayOnFailover: 100,
    retryDelayOnClusterDown: 100,
    retryDelayOnTryAgain: 100,
    slotsRefreshTimeout: 1000,
    useSRVRecords: false,
    resolveSrv: dns_1.resolveSrv,
    dnsLookup: dns_1.lookup,
    enableAutoPipelining: false,
    autoPipeliningIgnoredCommands: [],
    shardedSubscribers: false
};
}}),
"[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/cluster/util.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getConnectionName = exports.weightSrvRecords = exports.groupSrvRecords = exports.getUniqueHostnamesFromOptions = exports.normalizeNodeOptions = exports.nodeKeyToRedisOptions = exports.getNodeKey = void 0;
const utils_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/utils/index.js [app-rsc] (ecmascript)");
const net_1 = __turbopack_context__.r("[externals]/net [external] (net, cjs)");
function getNodeKey(node) {
    node.port = node.port || 6379;
    node.host = node.host || "127.0.0.1";
    return node.host + ":" + node.port;
}
exports.getNodeKey = getNodeKey;
function nodeKeyToRedisOptions(nodeKey) {
    const portIndex = nodeKey.lastIndexOf(":");
    if (portIndex === -1) {
        throw new Error(`Invalid node key ${nodeKey}`);
    }
    return {
        host: nodeKey.slice(0, portIndex),
        port: Number(nodeKey.slice(portIndex + 1))
    };
}
exports.nodeKeyToRedisOptions = nodeKeyToRedisOptions;
function normalizeNodeOptions(nodes) {
    return nodes.map((node)=>{
        const options = {};
        if (typeof node === "object") {
            Object.assign(options, node);
        } else if (typeof node === "string") {
            Object.assign(options, (0, utils_1.parseURL)(node));
        } else if (typeof node === "number") {
            options.port = node;
        } else {
            throw new Error("Invalid argument " + node);
        }
        if (typeof options.port === "string") {
            options.port = parseInt(options.port, 10);
        }
        // Cluster mode only support db 0
        delete options.db;
        if (!options.port) {
            options.port = 6379;
        }
        if (!options.host) {
            options.host = "127.0.0.1";
        }
        return (0, utils_1.resolveTLSProfile)(options);
    });
}
exports.normalizeNodeOptions = normalizeNodeOptions;
function getUniqueHostnamesFromOptions(nodes) {
    const uniqueHostsMap = {};
    nodes.forEach((node)=>{
        uniqueHostsMap[node.host] = true;
    });
    return Object.keys(uniqueHostsMap).filter((host)=>!(0, net_1.isIP)(host));
}
exports.getUniqueHostnamesFromOptions = getUniqueHostnamesFromOptions;
function groupSrvRecords(records) {
    const recordsByPriority = {};
    for (const record of records){
        if (!recordsByPriority.hasOwnProperty(record.priority)) {
            recordsByPriority[record.priority] = {
                totalWeight: record.weight,
                records: [
                    record
                ]
            };
        } else {
            recordsByPriority[record.priority].totalWeight += record.weight;
            recordsByPriority[record.priority].records.push(record);
        }
    }
    return recordsByPriority;
}
exports.groupSrvRecords = groupSrvRecords;
function weightSrvRecords(recordsGroup) {
    if (recordsGroup.records.length === 1) {
        recordsGroup.totalWeight = 0;
        return recordsGroup.records.shift();
    }
    // + `recordsGroup.records.length` to support `weight` 0
    const random = Math.floor(Math.random() * (recordsGroup.totalWeight + recordsGroup.records.length));
    let total = 0;
    for (const [i, record] of recordsGroup.records.entries()){
        total += 1 + record.weight;
        if (total > random) {
            recordsGroup.totalWeight -= record.weight;
            recordsGroup.records.splice(i, 1);
            return record;
        }
    }
}
exports.weightSrvRecords = weightSrvRecords;
function getConnectionName(component, nodeConnectionName) {
    const prefix = `ioredis-cluster(${component})`;
    return nodeConnectionName ? `${prefix}:${nodeConnectionName}` : prefix;
}
exports.getConnectionName = getConnectionName;
}}),
"[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/cluster/ClusterSubscriber.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const util_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/cluster/util.js [app-rsc] (ecmascript)");
const utils_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/utils/index.js [app-rsc] (ecmascript)");
const Redis_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/Redis.js [app-rsc] (ecmascript)");
const debug = (0, utils_1.Debug)("cluster:subscriber");
class ClusterSubscriber {
    constructor(connectionPool, emitter, isSharded = false){
        this.connectionPool = connectionPool;
        this.emitter = emitter;
        this.isSharded = isSharded;
        this.started = false;
        //There is only one connection for the entire pool
        this.subscriber = null;
        //The slot range for which this subscriber is responsible
        this.slotRange = [];
        this.onSubscriberEnd = ()=>{
            if (!this.started) {
                debug("subscriber has disconnected, but ClusterSubscriber is not started, so not reconnecting.");
                return;
            }
            // If the subscriber closes whilst it's still the active connection,
            // we might as well try to connecting to a new node if possible to
            // minimise the number of missed publishes.
            debug("subscriber has disconnected, selecting a new one...");
            this.selectSubscriber();
        };
        // If the current node we're using as the subscriber disappears
        // from the node pool for some reason, we will select a new one
        // to connect to.
        // Note that this event is only triggered if the connection to
        // the node has been used; cluster subscriptions are setup with
        // lazyConnect = true. It's possible for the subscriber node to
        // disappear without this method being called!
        // See https://github.com/luin/ioredis/pull/1589
        this.connectionPool.on("-node", (_, key)=>{
            if (!this.started || !this.subscriber) {
                return;
            }
            if ((0, util_1.getNodeKey)(this.subscriber.options) === key) {
                debug("subscriber has left, selecting a new one...");
                this.selectSubscriber();
            }
        });
        this.connectionPool.on("+node", ()=>{
            if (!this.started || this.subscriber) {
                return;
            }
            debug("a new node is discovered and there is no subscriber, selecting a new one...");
            this.selectSubscriber();
        });
    }
    getInstance() {
        return this.subscriber;
    }
    /**
     * Associate this subscriber to a specific slot range.
     *
     * Returns the range or an empty array if the slot range couldn't be associated.
     *
     * BTW: This is more for debugging and testing purposes.
     *
     * @param range
     */ associateSlotRange(range) {
        if (this.isSharded) {
            this.slotRange = range;
        }
        return this.slotRange;
    }
    start() {
        this.started = true;
        this.selectSubscriber();
        debug("started");
    }
    stop() {
        this.started = false;
        if (this.subscriber) {
            this.subscriber.disconnect();
            this.subscriber = null;
        }
    }
    isStarted() {
        return this.started;
    }
    selectSubscriber() {
        const lastActiveSubscriber = this.lastActiveSubscriber;
        // Disconnect the previous subscriber even if there
        // will not be a new one.
        if (lastActiveSubscriber) {
            lastActiveSubscriber.off("end", this.onSubscriberEnd);
            lastActiveSubscriber.disconnect();
        }
        if (this.subscriber) {
            this.subscriber.off("end", this.onSubscriberEnd);
            this.subscriber.disconnect();
        }
        const sampleNode = (0, utils_1.sample)(this.connectionPool.getNodes());
        if (!sampleNode) {
            debug("selecting subscriber failed since there is no node discovered in the cluster yet");
            this.subscriber = null;
            return;
        }
        const { options } = sampleNode;
        debug("selected a subscriber %s:%s", options.host, options.port);
        /*
         * Create a specialized Redis connection for the subscription.
         * Note that auto reconnection is enabled here.
         *
         * `enableReadyCheck` is also enabled because although subscription is allowed
         * while redis is loading data from the disk, we can check if the password
         * provided for the subscriber is correct, and if not, the current subscriber
         * will be disconnected and a new subscriber will be selected.
         */ let connectionPrefix = "subscriber";
        if (this.isSharded) connectionPrefix = "ssubscriber";
        this.subscriber = new Redis_1.default({
            port: options.port,
            host: options.host,
            username: options.username,
            password: options.password,
            enableReadyCheck: true,
            connectionName: (0, util_1.getConnectionName)(connectionPrefix, options.connectionName),
            lazyConnect: true,
            tls: options.tls,
            // Don't try to reconnect the subscriber connection. If the connection fails
            // we will get an end event (handled below), at which point we'll pick a new
            // node from the pool and try to connect to that as the subscriber connection.
            retryStrategy: null
        });
        // Ignore the errors since they're handled in the connection pool.
        this.subscriber.on("error", utils_1.noop);
        // The node we lost connection to may not come back up in a
        // reasonable amount of time (e.g. a slave that's taken down
        // for maintainence), we could potentially miss many published
        // messages so we should reconnect as quickly as possible, to
        // a different node if needed.
        this.subscriber.once("end", this.onSubscriberEnd);
        // Re-subscribe previous channels
        const previousChannels = {
            subscribe: [],
            psubscribe: [],
            ssubscribe: []
        };
        if (lastActiveSubscriber) {
            const condition = lastActiveSubscriber.condition || lastActiveSubscriber.prevCondition;
            if (condition && condition.subscriber) {
                previousChannels.subscribe = condition.subscriber.channels("subscribe");
                previousChannels.psubscribe = condition.subscriber.channels("psubscribe");
                previousChannels.ssubscribe = condition.subscriber.channels("ssubscribe");
            }
        }
        if (previousChannels.subscribe.length || previousChannels.psubscribe.length || previousChannels.ssubscribe.length) {
            let pending = 0;
            for (const type of [
                "subscribe",
                "psubscribe",
                "ssubscribe"
            ]){
                const channels = previousChannels[type];
                if (channels.length) {
                    pending += 1;
                    debug("%s %d channels", type, channels.length);
                    this.subscriber[type](channels).then(()=>{
                        if (!--pending) {
                            this.lastActiveSubscriber = this.subscriber;
                        }
                    }).catch(()=>{
                        // TODO: should probably disconnect the subscriber and try again.
                        debug("failed to %s %d channels", type, channels.length);
                    });
                }
            }
        } else {
            this.lastActiveSubscriber = this.subscriber;
        }
        for (const event of [
            "message",
            "messageBuffer"
        ]){
            this.subscriber.on(event, (arg1, arg2)=>{
                this.emitter.emit(event, arg1, arg2);
            });
        }
        for (const event of [
            "pmessage",
            "pmessageBuffer"
        ]){
            this.subscriber.on(event, (arg1, arg2, arg3)=>{
                this.emitter.emit(event, arg1, arg2, arg3);
            });
        }
        if (this.isSharded == true) {
            for (const event of [
                "smessage",
                "smessageBuffer"
            ]){
                this.subscriber.on(event, (arg1, arg2)=>{
                    this.emitter.emit(event, arg1, arg2);
                });
            }
        }
    }
}
exports.default = ClusterSubscriber;
}}),
"[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/cluster/ConnectionPool.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const events_1 = __turbopack_context__.r("[externals]/events [external] (events, cjs)");
const utils_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/utils/index.js [app-rsc] (ecmascript)");
const util_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/cluster/util.js [app-rsc] (ecmascript)");
const Redis_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/Redis.js [app-rsc] (ecmascript)");
const debug = (0, utils_1.Debug)("cluster:connectionPool");
class ConnectionPool extends events_1.EventEmitter {
    constructor(redisOptions){
        super();
        this.redisOptions = redisOptions;
        // master + slave = all
        this.nodes = {
            all: {},
            master: {},
            slave: {}
        };
        this.specifiedOptions = {};
    }
    getNodes(role = "all") {
        const nodes = this.nodes[role];
        return Object.keys(nodes).map((key)=>nodes[key]);
    }
    getInstanceByKey(key) {
        return this.nodes.all[key];
    }
    getSampleInstance(role) {
        const keys = Object.keys(this.nodes[role]);
        const sampleKey = (0, utils_1.sample)(keys);
        return this.nodes[role][sampleKey];
    }
    /**
     * Add a master node to the pool
     * @param node
     */ addMasterNode(node) {
        const key = (0, util_1.getNodeKey)(node.options);
        const redis = this.createRedisFromOptions(node, node.options.readOnly);
        //Master nodes aren't read-only
        if (!node.options.readOnly) {
            this.nodes.all[key] = redis;
            this.nodes.master[key] = redis;
            return true;
        }
        return false;
    }
    /**
     * Creates a Redis connection instance from the node options
     * @param node
     * @param readOnly
     */ createRedisFromOptions(node, readOnly) {
        const redis = new Redis_1.default((0, utils_1.defaults)({
            // Never try to reconnect when a node is lose,
            // instead, waiting for a `MOVED` error and
            // fetch the slots again.
            retryStrategy: null,
            // Offline queue should be enabled so that
            // we don't need to wait for the `ready` event
            // before sending commands to the node.
            enableOfflineQueue: true,
            readOnly: readOnly
        }, node, this.redisOptions, {
            lazyConnect: true
        }));
        return redis;
    }
    /**
     * Find or create a connection to the node
     */ findOrCreate(node, readOnly = false) {
        const key = (0, util_1.getNodeKey)(node);
        readOnly = Boolean(readOnly);
        if (this.specifiedOptions[key]) {
            Object.assign(node, this.specifiedOptions[key]);
        } else {
            this.specifiedOptions[key] = node;
        }
        let redis;
        if (this.nodes.all[key]) {
            redis = this.nodes.all[key];
            if (redis.options.readOnly !== readOnly) {
                redis.options.readOnly = readOnly;
                debug("Change role of %s to %s", key, readOnly ? "slave" : "master");
                redis[readOnly ? "readonly" : "readwrite"]().catch(utils_1.noop);
                if (readOnly) {
                    delete this.nodes.master[key];
                    this.nodes.slave[key] = redis;
                } else {
                    delete this.nodes.slave[key];
                    this.nodes.master[key] = redis;
                }
            }
        } else {
            debug("Connecting to %s as %s", key, readOnly ? "slave" : "master");
            redis = this.createRedisFromOptions(node, readOnly);
            this.nodes.all[key] = redis;
            this.nodes[readOnly ? "slave" : "master"][key] = redis;
            redis.once("end", ()=>{
                this.removeNode(key);
                this.emit("-node", redis, key);
                if (!Object.keys(this.nodes.all).length) {
                    this.emit("drain");
                }
            });
            this.emit("+node", redis, key);
            redis.on("error", function(error) {
                this.emit("nodeError", error, key);
            });
        }
        return redis;
    }
    /**
     * Reset the pool with a set of nodes.
     * The old node will be removed.
     */ reset(nodes) {
        debug("Reset with %O", nodes);
        const newNodes = {};
        nodes.forEach((node)=>{
            const key = (0, util_1.getNodeKey)(node);
            // Don't override the existing (master) node
            // when the current one is slave.
            if (!(node.readOnly && newNodes[key])) {
                newNodes[key] = node;
            }
        });
        Object.keys(this.nodes.all).forEach((key)=>{
            if (!newNodes[key]) {
                debug("Disconnect %s because the node does not hold any slot", key);
                this.nodes.all[key].disconnect();
                this.removeNode(key);
            }
        });
        Object.keys(newNodes).forEach((key)=>{
            const node = newNodes[key];
            this.findOrCreate(node, node.readOnly);
        });
    }
    /**
     * Remove a node from the pool.
     */ removeNode(key) {
        const { nodes } = this;
        if (nodes.all[key]) {
            debug("Remove %s from the pool", key);
            delete nodes.all[key];
        }
        delete nodes.master[key];
        delete nodes.slave[key];
    }
}
exports.default = ConnectionPool;
}}),
"[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/cluster/DelayQueue.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const utils_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/utils/index.js [app-rsc] (ecmascript)");
const Deque = __turbopack_context__.r("[project]/node_modules/.pnpm/denque@2.1.0/node_modules/denque/index.js [app-rsc] (ecmascript)");
const debug = (0, utils_1.Debug)("delayqueue");
/**
 * Queue that runs items after specified duration
 */ class DelayQueue {
    constructor(){
        this.queues = {};
        this.timeouts = {};
    }
    /**
     * Add a new item to the queue
     *
     * @param bucket bucket name
     * @param item function that will run later
     * @param options
     */ push(bucket, item, options) {
        const callback = options.callback || process.nextTick;
        if (!this.queues[bucket]) {
            this.queues[bucket] = new Deque();
        }
        const queue = this.queues[bucket];
        queue.push(item);
        if (!this.timeouts[bucket]) {
            this.timeouts[bucket] = setTimeout(()=>{
                callback(()=>{
                    this.timeouts[bucket] = null;
                    this.execute(bucket);
                });
            }, options.timeout);
        }
    }
    execute(bucket) {
        const queue = this.queues[bucket];
        if (!queue) {
            return;
        }
        const { length } = queue;
        if (!length) {
            return;
        }
        debug("send %d commands in %s queue", length, bucket);
        this.queues[bucket] = null;
        while(queue.length > 0){
            queue.shift()();
        }
    }
}
exports.default = DelayQueue;
}}),
"[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/cluster/ClusterSubscriberGroup.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const utils_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/utils/index.js [app-rsc] (ecmascript)");
const ClusterSubscriber_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/cluster/ClusterSubscriber.js [app-rsc] (ecmascript)");
const ConnectionPool_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/cluster/ConnectionPool.js [app-rsc] (ecmascript)");
const util_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/cluster/util.js [app-rsc] (ecmascript)");
const calculateSlot = __turbopack_context__.r("[project]/node_modules/.pnpm/cluster-key-slot@1.1.2/node_modules/cluster-key-slot/lib/index.js [app-rsc] (ecmascript)");
const debug = (0, utils_1.Debug)("cluster:subscriberGroup");
/**
 * Redis differs between "normal" and sharded PubSub. If using the "normal" PubSub feature, exactly one
 * ClusterSubscriber exists per cluster instance. This works because the Redis cluster bus forwards m
 * messages between shards. However, this has scalability limitations, which is the reason why the sharded
 * PubSub feature was added to Redis. With sharded PubSub, each shard is responsible for its own messages.
 * Given that, we need at least one ClusterSubscriber per master endpoint/node.
 *
 * This class leverages the previously exising ClusterSubscriber by adding support for multiple such subscribers
 * in alignment to the master nodes of the cluster. The ClusterSubscriber class was extended in a non-breaking way
 * to support this feature.
 */ class ClusterSubscriberGroup {
    /**
     * Register callbacks
     *
     * @param cluster
     */ constructor(cluster){
        this.cluster = cluster;
        this.shardedSubscribers = new Map();
        this.clusterSlots = [];
        //Simple [min, max] slot ranges aren't enough because you can migrate single slots
        this.subscriberToSlotsIndex = new Map();
        this.channels = new Map();
        cluster.on("+node", (redis)=>{
            this._addSubscriber(redis);
        });
        cluster.on("-node", (redis)=>{
            this._removeSubscriber(redis);
        });
        cluster.on("refresh", ()=>{
            this._refreshSlots(cluster);
        });
    }
    /**
     * Get the responsible subscriber.
     *
     * Returns null if no subscriber was found
     *
     * @param slot
     */ getResponsibleSubscriber(slot) {
        const nodeKey = this.clusterSlots[slot][0];
        return this.shardedSubscribers.get(nodeKey);
    }
    /**
     * Adds a channel for which this subscriber group is responsible
     *
     * @param channels
     */ addChannels(channels) {
        const slot = calculateSlot(channels[0]);
        //Check if the all channels belong to the same slot and otherwise reject the operation
        channels.forEach((c)=>{
            if (calculateSlot(c) != slot) return -1;
        });
        const currChannels = this.channels.get(slot);
        if (!currChannels) {
            this.channels.set(slot, channels);
        } else {
            this.channels.set(slot, currChannels.concat(channels));
        }
        return [
            ...this.channels.values()
        ].flatMap((v)=>v).length;
    }
    /**
     * Removes channels for which the subscriber group is responsible by optionally unsubscribing
     * @param channels
     */ removeChannels(channels) {
        const slot = calculateSlot(channels[0]);
        //Check if the all channels belong to the same slot and otherwise reject the operation
        channels.forEach((c)=>{
            if (calculateSlot(c) != slot) return -1;
        });
        const slotChannels = this.channels.get(slot);
        if (slotChannels) {
            const updatedChannels = slotChannels.filter((c)=>!channels.includes(c));
            this.channels.set(slot, updatedChannels);
        }
        return [
            ...this.channels.values()
        ].flatMap((v)=>v).length;
    }
    /**
     * Disconnect all subscribers
     */ stop() {
        for (const s of this.shardedSubscribers.values()){
            s.stop();
        }
    }
    /**
     * Start all not yet started subscribers
     */ start() {
        for (const s of this.shardedSubscribers.values()){
            if (!s.isStarted()) {
                s.start();
            }
        }
    }
    /**
     * Add a subscriber to the group of subscribers
     *
     * @param redis
     */ _addSubscriber(redis) {
        const pool = new ConnectionPool_1.default(redis.options);
        if (pool.addMasterNode(redis)) {
            const sub = new ClusterSubscriber_1.default(pool, this.cluster, true);
            const nodeKey = (0, util_1.getNodeKey)(redis.options);
            this.shardedSubscribers.set(nodeKey, sub);
            sub.start();
            // We need to attempt to resubscribe them in case the new node serves their slot
            this._resubscribe();
            this.cluster.emit("+subscriber");
            return sub;
        }
        return null;
    }
    /**
     * Removes a subscriber from the group
     * @param redis
     */ _removeSubscriber(redis) {
        const nodeKey = (0, util_1.getNodeKey)(redis.options);
        const sub = this.shardedSubscribers.get(nodeKey);
        if (sub) {
            sub.stop();
            this.shardedSubscribers.delete(nodeKey);
            // Even though the subscriber to this node is going down, we might have another subscriber
            // handling the same slots, so we need to attempt to subscribe the orphaned channels
            this._resubscribe();
            this.cluster.emit("-subscriber");
        }
        return this.shardedSubscribers;
    }
    /**
     * Refreshes the subscriber-related slot ranges
     *
     * Returns false if no refresh was needed
     *
     * @param cluster
     */ _refreshSlots(cluster) {
        //If there was an actual change, then reassign the slot ranges
        if (this._slotsAreEqual(cluster.slots)) {
            debug("Nothing to refresh because the new cluster map is equal to the previous one.");
        } else {
            debug("Refreshing the slots of the subscriber group.");
            //Rebuild the slots index
            this.subscriberToSlotsIndex = new Map();
            for(let slot = 0; slot < cluster.slots.length; slot++){
                const node = cluster.slots[slot][0];
                if (!this.subscriberToSlotsIndex.has(node)) {
                    this.subscriberToSlotsIndex.set(node, []);
                }
                this.subscriberToSlotsIndex.get(node).push(Number(slot));
            }
            //Update the subscribers from the index
            this._resubscribe();
            //Update the cached slots map
            this.clusterSlots = JSON.parse(JSON.stringify(cluster.slots));
            this.cluster.emit("subscribersReady");
            return true;
        }
        return false;
    }
    /**
     * Resubscribes to the previous channels
     *
     * @private
     */ _resubscribe() {
        if (this.shardedSubscribers) {
            this.shardedSubscribers.forEach((s, nodeKey)=>{
                const subscriberSlots = this.subscriberToSlotsIndex.get(nodeKey);
                if (subscriberSlots) {
                    //More for debugging purposes
                    s.associateSlotRange(subscriberSlots);
                    //Resubscribe on the underlying connection
                    subscriberSlots.forEach((ss)=>{
                        //Might return null if being disconnected
                        const redis = s.getInstance();
                        const channels = this.channels.get(ss);
                        if (channels && channels.length > 0) {
                            //Try to subscribe now
                            if (redis) {
                                redis.ssubscribe(channels);
                                //If the instance isn't ready yet, then register the re-subscription for later
                                redis.on("ready", ()=>{
                                    redis.ssubscribe(channels);
                                });
                            }
                        }
                    });
                }
            });
        }
    }
    /**
     * Deep equality of the cluster slots objects
     *
     * @param other
     * @private
     */ _slotsAreEqual(other) {
        if (this.clusterSlots === undefined) return false;
        else return JSON.stringify(this.clusterSlots) === JSON.stringify(other);
    }
}
exports.default = ClusterSubscriberGroup;
}}),
"[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/cluster/index.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const commands_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@ioredis+commands@1.2.0/node_modules/@ioredis/commands/built/index.js [app-rsc] (ecmascript)");
const events_1 = __turbopack_context__.r("[externals]/events [external] (events, cjs)");
const redis_errors_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/redis-errors@1.2.0/node_modules/redis-errors/index.js [app-rsc] (ecmascript)");
const standard_as_callback_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/standard-as-callback@2.1.0/node_modules/standard-as-callback/built/index.js [app-rsc] (ecmascript)");
const Command_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/Command.js [app-rsc] (ecmascript)");
const ClusterAllFailedError_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/errors/ClusterAllFailedError.js [app-rsc] (ecmascript)");
const Redis_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/Redis.js [app-rsc] (ecmascript)");
const ScanStream_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/ScanStream.js [app-rsc] (ecmascript)");
const transaction_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/transaction.js [app-rsc] (ecmascript)");
const utils_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/utils/index.js [app-rsc] (ecmascript)");
const applyMixin_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/utils/applyMixin.js [app-rsc] (ecmascript)");
const Commander_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/utils/Commander.js [app-rsc] (ecmascript)");
const ClusterOptions_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/cluster/ClusterOptions.js [app-rsc] (ecmascript)");
const ClusterSubscriber_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/cluster/ClusterSubscriber.js [app-rsc] (ecmascript)");
const ConnectionPool_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/cluster/ConnectionPool.js [app-rsc] (ecmascript)");
const DelayQueue_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/cluster/DelayQueue.js [app-rsc] (ecmascript)");
const util_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/cluster/util.js [app-rsc] (ecmascript)");
const Deque = __turbopack_context__.r("[project]/node_modules/.pnpm/denque@2.1.0/node_modules/denque/index.js [app-rsc] (ecmascript)");
const ClusterSubscriberGroup_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/cluster/ClusterSubscriberGroup.js [app-rsc] (ecmascript)");
const debug = (0, utils_1.Debug)("cluster");
const REJECT_OVERWRITTEN_COMMANDS = new WeakSet();
/**
 * Client for the official Redis Cluster
 */ class Cluster extends Commander_1.default {
    /**
     * Creates an instance of Cluster.
     */ //TODO: Add an option that enables or disables sharded PubSub
    constructor(startupNodes, options = {}){
        super();
        this.slots = [];
        /**
         * @ignore
         */ this._groupsIds = {};
        /**
         * @ignore
         */ this._groupsBySlot = Array(16384);
        /**
         * @ignore
         */ this.isCluster = true;
        this.retryAttempts = 0;
        this.delayQueue = new DelayQueue_1.default();
        this.offlineQueue = new Deque();
        this.isRefreshing = false;
        this._refreshSlotsCacheCallbacks = [];
        this._autoPipelines = new Map();
        this._runningAutoPipelines = new Set();
        this._readyDelayedCallbacks = [];
        /**
         * Every time Cluster#connect() is called, this value will be
         * auto-incrementing. The purpose of this value is used for
         * discarding previous connect attampts when creating a new
         * connection.
         */ this.connectionEpoch = 0;
        events_1.EventEmitter.call(this);
        this.startupNodes = startupNodes;
        this.options = (0, utils_1.defaults)({}, options, ClusterOptions_1.DEFAULT_CLUSTER_OPTIONS, this.options);
        if (this.options.shardedSubscribers == true) this.shardedSubscribers = new ClusterSubscriberGroup_1.default(this);
        if (this.options.redisOptions && this.options.redisOptions.keyPrefix && !this.options.keyPrefix) {
            this.options.keyPrefix = this.options.redisOptions.keyPrefix;
        }
        // validate options
        if (typeof this.options.scaleReads !== "function" && [
            "all",
            "master",
            "slave"
        ].indexOf(this.options.scaleReads) === -1) {
            throw new Error('Invalid option scaleReads "' + this.options.scaleReads + '". Expected "all", "master", "slave" or a custom function');
        }
        this.connectionPool = new ConnectionPool_1.default(this.options.redisOptions);
        this.connectionPool.on("-node", (redis, key)=>{
            this.emit("-node", redis);
        });
        this.connectionPool.on("+node", (redis)=>{
            this.emit("+node", redis);
        });
        this.connectionPool.on("drain", ()=>{
            this.setStatus("close");
        });
        this.connectionPool.on("nodeError", (error, key)=>{
            this.emit("node error", error, key);
        });
        this.subscriber = new ClusterSubscriber_1.default(this.connectionPool, this);
        if (this.options.scripts) {
            Object.entries(this.options.scripts).forEach(([name, definition])=>{
                this.defineCommand(name, definition);
            });
        }
        if (this.options.lazyConnect) {
            this.setStatus("wait");
        } else {
            this.connect().catch((err)=>{
                debug("connecting failed: %s", err);
            });
        }
    }
    /**
     * Connect to a cluster
     */ connect() {
        return new Promise((resolve, reject)=>{
            if (this.status === "connecting" || this.status === "connect" || this.status === "ready") {
                reject(new Error("Redis is already connecting/connected"));
                return;
            }
            const epoch = ++this.connectionEpoch;
            this.setStatus("connecting");
            this.resolveStartupNodeHostnames().then((nodes)=>{
                if (this.connectionEpoch !== epoch) {
                    debug("discard connecting after resolving startup nodes because epoch not match: %d != %d", epoch, this.connectionEpoch);
                    reject(new redis_errors_1.RedisError("Connection is discarded because a new connection is made"));
                    return;
                }
                if (this.status !== "connecting") {
                    debug("discard connecting after resolving startup nodes because the status changed to %s", this.status);
                    reject(new redis_errors_1.RedisError("Connection is aborted"));
                    return;
                }
                this.connectionPool.reset(nodes);
                const readyHandler = ()=>{
                    this.setStatus("ready");
                    this.retryAttempts = 0;
                    this.executeOfflineCommands();
                    this.resetNodesRefreshInterval();
                    resolve();
                };
                let closeListener = undefined;
                const refreshListener = ()=>{
                    this.invokeReadyDelayedCallbacks(undefined);
                    this.removeListener("close", closeListener);
                    this.manuallyClosing = false;
                    this.setStatus("connect");
                    if (this.options.enableReadyCheck) {
                        this.readyCheck((err, fail)=>{
                            if (err || fail) {
                                debug("Ready check failed (%s). Reconnecting...", err || fail);
                                if (this.status === "connect") {
                                    this.disconnect(true);
                                }
                            } else {
                                readyHandler();
                            }
                        });
                    } else {
                        readyHandler();
                    }
                };
                closeListener = ()=>{
                    const error = new Error("None of startup nodes is available");
                    this.removeListener("refresh", refreshListener);
                    this.invokeReadyDelayedCallbacks(error);
                    reject(error);
                };
                this.once("refresh", refreshListener);
                this.once("close", closeListener);
                this.once("close", this.handleCloseEvent.bind(this));
                this.refreshSlotsCache((err)=>{
                    if (err && err.message === ClusterAllFailedError_1.default.defaultMessage) {
                        Redis_1.default.prototype.silentEmit.call(this, "error", err);
                        this.connectionPool.reset([]);
                    }
                });
                this.subscriber.start();
                if (this.options.shardedSubscribers) {
                    this.shardedSubscribers.start();
                }
            }).catch((err)=>{
                this.setStatus("close");
                this.handleCloseEvent(err);
                this.invokeReadyDelayedCallbacks(err);
                reject(err);
            });
        });
    }
    /**
     * Disconnect from every node in the cluster.
     */ disconnect(reconnect = false) {
        const status = this.status;
        this.setStatus("disconnecting");
        if (!reconnect) {
            this.manuallyClosing = true;
        }
        if (this.reconnectTimeout && !reconnect) {
            clearTimeout(this.reconnectTimeout);
            this.reconnectTimeout = null;
            debug("Canceled reconnecting attempts");
        }
        this.clearNodesRefreshInterval();
        this.subscriber.stop();
        if (this.options.shardedSubscribers) {
            this.shardedSubscribers.stop();
        }
        if (status === "wait") {
            this.setStatus("close");
            this.handleCloseEvent();
        } else {
            this.connectionPool.reset([]);
        }
    }
    /**
     * Quit the cluster gracefully.
     */ quit(callback) {
        const status = this.status;
        this.setStatus("disconnecting");
        this.manuallyClosing = true;
        if (this.reconnectTimeout) {
            clearTimeout(this.reconnectTimeout);
            this.reconnectTimeout = null;
        }
        this.clearNodesRefreshInterval();
        this.subscriber.stop();
        if (this.options.shardedSubscribers) {
            this.shardedSubscribers.stop();
        }
        if (status === "wait") {
            const ret = (0, standard_as_callback_1.default)(Promise.resolve("OK"), callback);
            // use setImmediate to make sure "close" event
            // being emitted after quit() is returned
            setImmediate((function() {
                this.setStatus("close");
                this.handleCloseEvent();
            }).bind(this));
            return ret;
        }
        return (0, standard_as_callback_1.default)(Promise.all(this.nodes().map((node)=>node.quit().catch((err)=>{
                // Ignore the error caused by disconnecting since
                // we're disconnecting...
                if (err.message === utils_1.CONNECTION_CLOSED_ERROR_MSG) {
                    return "OK";
                }
                throw err;
            }))).then(()=>"OK"), callback);
    }
    /**
     * Create a new instance with the same startup nodes and options as the current one.
     *
     * @example
     * ```js
     * var cluster = new Redis.Cluster([{ host: "127.0.0.1", port: "30001" }]);
     * var anotherCluster = cluster.duplicate();
     * ```
     */ duplicate(overrideStartupNodes = [], overrideOptions = {}) {
        const startupNodes = overrideStartupNodes.length > 0 ? overrideStartupNodes : this.startupNodes.slice(0);
        const options = Object.assign({}, this.options, overrideOptions);
        return new Cluster(startupNodes, options);
    }
    /**
     * Get nodes with the specified role
     */ nodes(role = "all") {
        if (role !== "all" && role !== "master" && role !== "slave") {
            throw new Error('Invalid role "' + role + '". Expected "all", "master" or "slave"');
        }
        return this.connectionPool.getNodes(role);
    }
    /**
     * This is needed in order not to install a listener for each auto pipeline
     *
     * @ignore
     */ delayUntilReady(callback) {
        this._readyDelayedCallbacks.push(callback);
    }
    /**
     * Get the number of commands queued in automatic pipelines.
     *
     * This is not available (and returns 0) until the cluster is connected and slots information have been received.
     */ get autoPipelineQueueSize() {
        let queued = 0;
        for (const pipeline of this._autoPipelines.values()){
            queued += pipeline.length;
        }
        return queued;
    }
    /**
     * Refresh the slot cache
     *
     * @ignore
     */ refreshSlotsCache(callback) {
        if (callback) {
            this._refreshSlotsCacheCallbacks.push(callback);
        }
        if (this.isRefreshing) {
            return;
        }
        this.isRefreshing = true;
        const _this = this;
        const wrapper = (error)=>{
            this.isRefreshing = false;
            for (const callback of this._refreshSlotsCacheCallbacks){
                callback(error);
            }
            this._refreshSlotsCacheCallbacks = [];
        };
        const nodes = (0, utils_1.shuffle)(this.connectionPool.getNodes());
        let lastNodeError = null;
        function tryNode(index) {
            if (index === nodes.length) {
                const error = new ClusterAllFailedError_1.default(ClusterAllFailedError_1.default.defaultMessage, lastNodeError);
                return wrapper(error);
            }
            const node = nodes[index];
            const key = `${node.options.host}:${node.options.port}`;
            debug("getting slot cache from %s", key);
            _this.getInfoFromNode(node, function(err) {
                switch(_this.status){
                    case "close":
                    case "end":
                        return wrapper(new Error("Cluster is disconnected."));
                    case "disconnecting":
                        return wrapper(new Error("Cluster is disconnecting."));
                }
                if (err) {
                    _this.emit("node error", err, key);
                    lastNodeError = err;
                    tryNode(index + 1);
                } else {
                    _this.emit("refresh");
                    wrapper();
                }
            });
        }
        tryNode(0);
    }
    /**
     * @ignore
     */ sendCommand(command, stream, node) {
        if (this.status === "wait") {
            this.connect().catch(utils_1.noop);
        }
        if (this.status === "end") {
            command.reject(new Error(utils_1.CONNECTION_CLOSED_ERROR_MSG));
            return command.promise;
        }
        let to = this.options.scaleReads;
        if (to !== "master") {
            const isCommandReadOnly = command.isReadOnly || (0, commands_1.exists)(command.name) && (0, commands_1.hasFlag)(command.name, "readonly");
            if (!isCommandReadOnly) {
                to = "master";
            }
        }
        let targetSlot = node ? node.slot : command.getSlot();
        const ttl = {};
        const _this = this;
        if (!node && !REJECT_OVERWRITTEN_COMMANDS.has(command)) {
            REJECT_OVERWRITTEN_COMMANDS.add(command);
            const reject = command.reject;
            command.reject = function(err) {
                const partialTry = tryConnection.bind(null, true);
                _this.handleError(err, ttl, {
                    moved: function(slot, key) {
                        debug("command %s is moved to %s", command.name, key);
                        targetSlot = Number(slot);
                        if (_this.slots[slot]) {
                            _this.slots[slot][0] = key;
                        } else {
                            _this.slots[slot] = [
                                key
                            ];
                        }
                        _this._groupsBySlot[slot] = _this._groupsIds[_this.slots[slot].join(";")];
                        _this.connectionPool.findOrCreate(_this.natMapper(key));
                        tryConnection();
                        debug("refreshing slot caches... (triggered by MOVED error)");
                        _this.refreshSlotsCache();
                    },
                    ask: function(slot, key) {
                        debug("command %s is required to ask %s:%s", command.name, key);
                        const mapped = _this.natMapper(key);
                        _this.connectionPool.findOrCreate(mapped);
                        tryConnection(false, `${mapped.host}:${mapped.port}`);
                    },
                    tryagain: partialTry,
                    clusterDown: partialTry,
                    connectionClosed: partialTry,
                    maxRedirections: function(redirectionError) {
                        reject.call(command, redirectionError);
                    },
                    defaults: function() {
                        reject.call(command, err);
                    }
                });
            };
        }
        tryConnection();
        function tryConnection(random, asking) {
            if (_this.status === "end") {
                command.reject(new redis_errors_1.AbortError("Cluster is ended."));
                return;
            }
            let redis;
            if (_this.status === "ready" || command.name === "cluster") {
                if (node && node.redis) {
                    redis = node.redis;
                } else if (Command_1.default.checkFlag("ENTER_SUBSCRIBER_MODE", command.name) || Command_1.default.checkFlag("EXIT_SUBSCRIBER_MODE", command.name)) {
                    if (_this.options.shardedSubscribers == true && (command.name == "ssubscribe" || command.name == "sunsubscribe")) {
                        const sub = _this.shardedSubscribers.getResponsibleSubscriber(targetSlot);
                        let status = -1;
                        if (command.name == "ssubscribe") status = _this.shardedSubscribers.addChannels(command.getKeys());
                        if (command.name == "sunsubscribe") status = _this.shardedSubscribers.removeChannels(command.getKeys());
                        if (status !== -1) {
                            redis = sub.getInstance();
                        } else {
                            command.reject(new redis_errors_1.AbortError("Can't add or remove the given channels. Are they in the same slot?"));
                        }
                    } else {
                        redis = _this.subscriber.getInstance();
                    }
                    if (!redis) {
                        command.reject(new redis_errors_1.AbortError("No subscriber for the cluster"));
                        return;
                    }
                } else {
                    if (!random) {
                        if (typeof targetSlot === "number" && _this.slots[targetSlot]) {
                            const nodeKeys = _this.slots[targetSlot];
                            if (typeof to === "function") {
                                const nodes = nodeKeys.map(function(key) {
                                    return _this.connectionPool.getInstanceByKey(key);
                                });
                                redis = to(nodes, command);
                                if (Array.isArray(redis)) {
                                    redis = (0, utils_1.sample)(redis);
                                }
                                if (!redis) {
                                    redis = nodes[0];
                                }
                            } else {
                                let key;
                                if (to === "all") {
                                    key = (0, utils_1.sample)(nodeKeys);
                                } else if (to === "slave" && nodeKeys.length > 1) {
                                    key = (0, utils_1.sample)(nodeKeys, 1);
                                } else {
                                    key = nodeKeys[0];
                                }
                                redis = _this.connectionPool.getInstanceByKey(key);
                            }
                        }
                        if (asking) {
                            redis = _this.connectionPool.getInstanceByKey(asking);
                            redis.asking();
                        }
                    }
                    if (!redis) {
                        redis = (typeof to === "function" ? null : _this.connectionPool.getSampleInstance(to)) || _this.connectionPool.getSampleInstance("all");
                    }
                }
                if (node && !node.redis) {
                    node.redis = redis;
                }
            }
            if (redis) {
                redis.sendCommand(command, stream);
            } else if (_this.options.enableOfflineQueue) {
                _this.offlineQueue.push({
                    command: command,
                    stream: stream,
                    node: node
                });
            } else {
                command.reject(new Error("Cluster isn't ready and enableOfflineQueue options is false"));
            }
        }
        return command.promise;
    }
    sscanStream(key, options) {
        return this.createScanStream("sscan", {
            key,
            options
        });
    }
    sscanBufferStream(key, options) {
        return this.createScanStream("sscanBuffer", {
            key,
            options
        });
    }
    hscanStream(key, options) {
        return this.createScanStream("hscan", {
            key,
            options
        });
    }
    hscanBufferStream(key, options) {
        return this.createScanStream("hscanBuffer", {
            key,
            options
        });
    }
    zscanStream(key, options) {
        return this.createScanStream("zscan", {
            key,
            options
        });
    }
    zscanBufferStream(key, options) {
        return this.createScanStream("zscanBuffer", {
            key,
            options
        });
    }
    /**
     * @ignore
     */ handleError(error, ttl, handlers) {
        if (typeof ttl.value === "undefined") {
            ttl.value = this.options.maxRedirections;
        } else {
            ttl.value -= 1;
        }
        if (ttl.value <= 0) {
            handlers.maxRedirections(new Error("Too many Cluster redirections. Last error: " + error));
            return;
        }
        const errv = error.message.split(" ");
        if (errv[0] === "MOVED") {
            const timeout = this.options.retryDelayOnMoved;
            if (timeout && typeof timeout === "number") {
                this.delayQueue.push("moved", handlers.moved.bind(null, errv[1], errv[2]), {
                    timeout
                });
            } else {
                handlers.moved(errv[1], errv[2]);
            }
        } else if (errv[0] === "ASK") {
            handlers.ask(errv[1], errv[2]);
        } else if (errv[0] === "TRYAGAIN") {
            this.delayQueue.push("tryagain", handlers.tryagain, {
                timeout: this.options.retryDelayOnTryAgain
            });
        } else if (errv[0] === "CLUSTERDOWN" && this.options.retryDelayOnClusterDown > 0) {
            this.delayQueue.push("clusterdown", handlers.connectionClosed, {
                timeout: this.options.retryDelayOnClusterDown,
                callback: this.refreshSlotsCache.bind(this)
            });
        } else if (error.message === utils_1.CONNECTION_CLOSED_ERROR_MSG && this.options.retryDelayOnFailover > 0 && this.status === "ready") {
            this.delayQueue.push("failover", handlers.connectionClosed, {
                timeout: this.options.retryDelayOnFailover,
                callback: this.refreshSlotsCache.bind(this)
            });
        } else {
            handlers.defaults();
        }
    }
    resetOfflineQueue() {
        this.offlineQueue = new Deque();
    }
    clearNodesRefreshInterval() {
        if (this.slotsTimer) {
            clearTimeout(this.slotsTimer);
            this.slotsTimer = null;
        }
    }
    resetNodesRefreshInterval() {
        if (this.slotsTimer || !this.options.slotsRefreshInterval) {
            return;
        }
        const nextRound = ()=>{
            this.slotsTimer = setTimeout(()=>{
                debug('refreshing slot caches... (triggered by "slotsRefreshInterval" option)');
                this.refreshSlotsCache(()=>{
                    nextRound();
                });
            }, this.options.slotsRefreshInterval);
        };
        nextRound();
    }
    /**
     * Change cluster instance's status
     */ setStatus(status) {
        debug("status: %s -> %s", this.status || "[empty]", status);
        this.status = status;
        process.nextTick(()=>{
            this.emit(status);
        });
    }
    /**
     * Called when closed to check whether a reconnection should be made
     */ handleCloseEvent(reason) {
        if (reason) {
            debug("closed because %s", reason);
        }
        let retryDelay;
        if (!this.manuallyClosing && typeof this.options.clusterRetryStrategy === "function") {
            retryDelay = this.options.clusterRetryStrategy.call(this, ++this.retryAttempts, reason);
        }
        if (typeof retryDelay === "number") {
            this.setStatus("reconnecting");
            this.reconnectTimeout = setTimeout(()=>{
                this.reconnectTimeout = null;
                debug("Cluster is disconnected. Retrying after %dms", retryDelay);
                this.connect().catch(function(err) {
                    debug("Got error %s when reconnecting. Ignoring...", err);
                });
            }, retryDelay);
        } else {
            this.setStatus("end");
            this.flushQueue(new Error("None of startup nodes is available"));
        }
    }
    /**
     * Flush offline queue with error.
     */ flushQueue(error) {
        let item;
        while(item = this.offlineQueue.shift()){
            item.command.reject(error);
        }
    }
    executeOfflineCommands() {
        if (this.offlineQueue.length) {
            debug("send %d commands in offline queue", this.offlineQueue.length);
            const offlineQueue = this.offlineQueue;
            this.resetOfflineQueue();
            let item;
            while(item = offlineQueue.shift()){
                this.sendCommand(item.command, item.stream, item.node);
            }
        }
    }
    natMapper(nodeKey) {
        const key = typeof nodeKey === "string" ? nodeKey : `${nodeKey.host}:${nodeKey.port}`;
        let mapped = null;
        if (this.options.natMap && typeof this.options.natMap === "function") {
            mapped = this.options.natMap(key);
        } else if (this.options.natMap && typeof this.options.natMap === "object") {
            mapped = this.options.natMap[key];
        }
        if (mapped) {
            debug("NAT mapping %s -> %O", key, mapped);
            return Object.assign({}, mapped);
        }
        return typeof nodeKey === "string" ? (0, util_1.nodeKeyToRedisOptions)(nodeKey) : nodeKey;
    }
    getInfoFromNode(redis, callback) {
        if (!redis) {
            return callback(new Error("Node is disconnected"));
        }
        // Use a duplication of the connection to avoid
        // timeouts when the connection is in the blocking
        // mode (e.g. waiting for BLPOP).
        const duplicatedConnection = redis.duplicate({
            enableOfflineQueue: true,
            enableReadyCheck: false,
            retryStrategy: null,
            connectionName: (0, util_1.getConnectionName)("refresher", this.options.redisOptions && this.options.redisOptions.connectionName)
        });
        // Ignore error events since we will handle
        // exceptions for the CLUSTER SLOTS command.
        duplicatedConnection.on("error", utils_1.noop);
        duplicatedConnection.cluster("SLOTS", (0, utils_1.timeout)((err, result)=>{
            duplicatedConnection.disconnect();
            if (err) {
                debug("error encountered running CLUSTER.SLOTS: %s", err);
                return callback(err);
            }
            if (this.status === "disconnecting" || this.status === "close" || this.status === "end") {
                debug("ignore CLUSTER.SLOTS results (count: %d) since cluster status is %s", result.length, this.status);
                callback();
                return;
            }
            const nodes = [];
            debug("cluster slots result count: %d", result.length);
            for(let i = 0; i < result.length; ++i){
                const items = result[i];
                const slotRangeStart = items[0];
                const slotRangeEnd = items[1];
                const keys = [];
                for(let j = 2; j < items.length; j++){
                    if (!items[j][0]) {
                        continue;
                    }
                    const node = this.natMapper({
                        host: items[j][0],
                        port: items[j][1]
                    });
                    node.readOnly = j !== 2;
                    nodes.push(node);
                    keys.push(node.host + ":" + node.port);
                }
                debug("cluster slots result [%d]: slots %d~%d served by %s", i, slotRangeStart, slotRangeEnd, keys);
                for(let slot = slotRangeStart; slot <= slotRangeEnd; slot++){
                    this.slots[slot] = keys;
                }
            }
            // Assign to each node keys a numeric value to make autopipeline comparison faster.
            this._groupsIds = Object.create(null);
            let j = 0;
            for(let i = 0; i < 16384; i++){
                const target = (this.slots[i] || []).join(";");
                if (!target.length) {
                    this._groupsBySlot[i] = undefined;
                    continue;
                }
                if (!this._groupsIds[target]) {
                    this._groupsIds[target] = ++j;
                }
                this._groupsBySlot[i] = this._groupsIds[target];
            }
            this.connectionPool.reset(nodes);
            callback();
        }, this.options.slotsRefreshTimeout));
    }
    invokeReadyDelayedCallbacks(err) {
        for (const c of this._readyDelayedCallbacks){
            process.nextTick(c, err);
        }
        this._readyDelayedCallbacks = [];
    }
    /**
     * Check whether Cluster is able to process commands
     */ readyCheck(callback) {
        this.cluster("INFO", (err, res)=>{
            if (err) {
                return callback(err);
            }
            if (typeof res !== "string") {
                return callback();
            }
            let state;
            const lines = res.split("\r\n");
            for(let i = 0; i < lines.length; ++i){
                const parts = lines[i].split(":");
                if (parts[0] === "cluster_state") {
                    state = parts[1];
                    break;
                }
            }
            if (state === "fail") {
                debug("cluster state not ok (%s)", state);
                callback(null, state);
            } else {
                callback();
            }
        });
    }
    resolveSrv(hostname) {
        return new Promise((resolve, reject)=>{
            this.options.resolveSrv(hostname, (err, records)=>{
                if (err) {
                    return reject(err);
                }
                const self = this, groupedRecords = (0, util_1.groupSrvRecords)(records), sortedKeys = Object.keys(groupedRecords).sort((a, b)=>parseInt(a) - parseInt(b));
                function tryFirstOne(err) {
                    if (!sortedKeys.length) {
                        return reject(err);
                    }
                    const key = sortedKeys[0], group = groupedRecords[key], record = (0, util_1.weightSrvRecords)(group);
                    if (!group.records.length) {
                        sortedKeys.shift();
                    }
                    self.dnsLookup(record.name).then((host)=>resolve({
                            host,
                            port: record.port
                        }), tryFirstOne);
                }
                tryFirstOne();
            });
        });
    }
    dnsLookup(hostname) {
        return new Promise((resolve, reject)=>{
            this.options.dnsLookup(hostname, (err, address)=>{
                if (err) {
                    debug("failed to resolve hostname %s to IP: %s", hostname, err.message);
                    reject(err);
                } else {
                    debug("resolved hostname %s to IP %s", hostname, address);
                    resolve(address);
                }
            });
        });
    }
    /**
     * Normalize startup nodes, and resolving hostnames to IPs.
     *
     * This process happens every time when #connect() is called since
     * #startupNodes and DNS records may chanage.
     */ async resolveStartupNodeHostnames() {
        if (!Array.isArray(this.startupNodes) || this.startupNodes.length === 0) {
            throw new Error("`startupNodes` should contain at least one node.");
        }
        const startupNodes = (0, util_1.normalizeNodeOptions)(this.startupNodes);
        const hostnames = (0, util_1.getUniqueHostnamesFromOptions)(startupNodes);
        if (hostnames.length === 0) {
            return startupNodes;
        }
        const configs = await Promise.all(hostnames.map((this.options.useSRVRecords ? this.resolveSrv : this.dnsLookup).bind(this)));
        const hostnameToConfig = (0, utils_1.zipMap)(hostnames, configs);
        return startupNodes.map((node)=>{
            const config = hostnameToConfig.get(node.host);
            if (!config) {
                return node;
            }
            if (this.options.useSRVRecords) {
                return Object.assign({}, node, config);
            }
            return Object.assign({}, node, {
                host: config
            });
        });
    }
    createScanStream(command, { key, options = {} }) {
        return new ScanStream_1.default({
            objectMode: true,
            key: key,
            redis: this,
            command: command,
            ...options
        });
    }
}
(0, applyMixin_1.default)(Cluster, events_1.EventEmitter);
(0, transaction_1.addTransactionSupport)(Cluster.prototype);
exports.default = Cluster;
}}),
"[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/connectors/AbstractConnector.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const utils_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/utils/index.js [app-rsc] (ecmascript)");
const debug = (0, utils_1.Debug)("AbstractConnector");
class AbstractConnector {
    constructor(disconnectTimeout){
        this.connecting = false;
        this.disconnectTimeout = disconnectTimeout;
    }
    check(info) {
        return true;
    }
    disconnect() {
        this.connecting = false;
        if (this.stream) {
            const stream = this.stream; // Make sure callbacks refer to the same instance
            const timeout = setTimeout(()=>{
                debug("stream %s:%s still open, destroying it", stream.remoteAddress, stream.remotePort);
                stream.destroy();
            }, this.disconnectTimeout);
            stream.on("close", ()=>clearTimeout(timeout));
            stream.end();
        }
    }
}
exports.default = AbstractConnector;
}}),
"[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/connectors/StandaloneConnector.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const net_1 = __turbopack_context__.r("[externals]/net [external] (net, cjs)");
const tls_1 = __turbopack_context__.r("[externals]/tls [external] (tls, cjs)");
const utils_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/utils/index.js [app-rsc] (ecmascript)");
const AbstractConnector_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/connectors/AbstractConnector.js [app-rsc] (ecmascript)");
class StandaloneConnector extends AbstractConnector_1.default {
    constructor(options){
        super(options.disconnectTimeout);
        this.options = options;
    }
    connect(_) {
        const { options } = this;
        this.connecting = true;
        let connectionOptions;
        if ("path" in options && options.path) {
            connectionOptions = {
                path: options.path
            };
        } else {
            connectionOptions = {};
            if ("port" in options && options.port != null) {
                connectionOptions.port = options.port;
            }
            if ("host" in options && options.host != null) {
                connectionOptions.host = options.host;
            }
            if ("family" in options && options.family != null) {
                connectionOptions.family = options.family;
            }
        }
        if (options.tls) {
            Object.assign(connectionOptions, options.tls);
        }
        // TODO:
        // We use native Promise here since other Promise
        // implementation may use different schedulers that
        // cause issue when the stream is resolved in the
        // next tick.
        // Should use the provided promise in the next major
        // version and do not connect before resolved.
        return new Promise((resolve, reject)=>{
            process.nextTick(()=>{
                if (!this.connecting) {
                    reject(new Error(utils_1.CONNECTION_CLOSED_ERROR_MSG));
                    return;
                }
                try {
                    if (options.tls) {
                        this.stream = (0, tls_1.connect)(connectionOptions);
                    } else {
                        this.stream = (0, net_1.createConnection)(connectionOptions);
                    }
                } catch (err) {
                    reject(err);
                    return;
                }
                this.stream.once("error", (err)=>{
                    this.firstError = err;
                });
                resolve(this.stream);
            });
        });
    }
}
exports.default = StandaloneConnector;
}}),
"[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/connectors/SentinelConnector/SentinelIterator.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function isSentinelEql(a, b) {
    return (a.host || "127.0.0.1") === (b.host || "127.0.0.1") && (a.port || 26379) === (b.port || 26379);
}
class SentinelIterator {
    constructor(sentinels){
        this.cursor = 0;
        this.sentinels = sentinels.slice(0);
    }
    next() {
        const done = this.cursor >= this.sentinels.length;
        return {
            done,
            value: done ? undefined : this.sentinels[this.cursor++]
        };
    }
    reset(moveCurrentEndpointToFirst) {
        if (moveCurrentEndpointToFirst && this.sentinels.length > 1 && this.cursor !== 1) {
            this.sentinels.unshift(...this.sentinels.splice(this.cursor - 1));
        }
        this.cursor = 0;
    }
    add(sentinel) {
        for(let i = 0; i < this.sentinels.length; i++){
            if (isSentinelEql(sentinel, this.sentinels[i])) {
                return false;
            }
        }
        this.sentinels.push(sentinel);
        return true;
    }
    toString() {
        return `${JSON.stringify(this.sentinels)} @${this.cursor}`;
    }
}
exports.default = SentinelIterator;
}}),
"[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/connectors/SentinelConnector/FailoverDetector.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FailoverDetector = void 0;
const utils_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/utils/index.js [app-rsc] (ecmascript)");
const debug = (0, utils_1.Debug)("FailoverDetector");
const CHANNEL_NAME = "+switch-master";
class FailoverDetector {
    // sentinels can't be used for regular commands after this
    constructor(connector, sentinels){
        this.isDisconnected = false;
        this.connector = connector;
        this.sentinels = sentinels;
    }
    cleanup() {
        this.isDisconnected = true;
        for (const sentinel of this.sentinels){
            sentinel.client.disconnect();
        }
    }
    async subscribe() {
        debug("Starting FailoverDetector");
        const promises = [];
        for (const sentinel of this.sentinels){
            const promise = sentinel.client.subscribe(CHANNEL_NAME).catch((err)=>{
                debug("Failed to subscribe to failover messages on sentinel %s:%s (%s)", sentinel.address.host || "127.0.0.1", sentinel.address.port || 26739, err.message);
            });
            promises.push(promise);
            sentinel.client.on("message", (channel)=>{
                if (!this.isDisconnected && channel === CHANNEL_NAME) {
                    this.disconnect();
                }
            });
        }
        await Promise.all(promises);
    }
    disconnect() {
        // Avoid disconnecting more than once per failover.
        // A new FailoverDetector will be created after reconnecting.
        this.isDisconnected = true;
        debug("Failover detected, disconnecting");
        // Will call this.cleanup()
        this.connector.disconnect();
    }
}
exports.FailoverDetector = FailoverDetector;
}}),
"[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/connectors/SentinelConnector/index.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SentinelIterator = void 0;
const net_1 = __turbopack_context__.r("[externals]/net [external] (net, cjs)");
const utils_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/utils/index.js [app-rsc] (ecmascript)");
const tls_1 = __turbopack_context__.r("[externals]/tls [external] (tls, cjs)");
const SentinelIterator_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/connectors/SentinelConnector/SentinelIterator.js [app-rsc] (ecmascript)");
exports.SentinelIterator = SentinelIterator_1.default;
const AbstractConnector_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/connectors/AbstractConnector.js [app-rsc] (ecmascript)");
const Redis_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/Redis.js [app-rsc] (ecmascript)");
const FailoverDetector_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/connectors/SentinelConnector/FailoverDetector.js [app-rsc] (ecmascript)");
const debug = (0, utils_1.Debug)("SentinelConnector");
class SentinelConnector extends AbstractConnector_1.default {
    constructor(options){
        super(options.disconnectTimeout);
        this.options = options;
        this.emitter = null;
        this.failoverDetector = null;
        if (!this.options.sentinels.length) {
            throw new Error("Requires at least one sentinel to connect to.");
        }
        if (!this.options.name) {
            throw new Error("Requires the name of master.");
        }
        this.sentinelIterator = new SentinelIterator_1.default(this.options.sentinels);
    }
    check(info) {
        const roleMatches = !info.role || this.options.role === info.role;
        if (!roleMatches) {
            debug("role invalid, expected %s, but got %s", this.options.role, info.role);
            // Start from the next item.
            // Note that `reset` will move the cursor to the previous element,
            // so we advance two steps here.
            this.sentinelIterator.next();
            this.sentinelIterator.next();
            this.sentinelIterator.reset(true);
        }
        return roleMatches;
    }
    disconnect() {
        super.disconnect();
        if (this.failoverDetector) {
            this.failoverDetector.cleanup();
        }
    }
    connect(eventEmitter) {
        this.connecting = true;
        this.retryAttempts = 0;
        let lastError;
        const connectToNext = async ()=>{
            const endpoint = this.sentinelIterator.next();
            if (endpoint.done) {
                this.sentinelIterator.reset(false);
                const retryDelay = typeof this.options.sentinelRetryStrategy === "function" ? this.options.sentinelRetryStrategy(++this.retryAttempts) : null;
                let errorMsg = typeof retryDelay !== "number" ? "All sentinels are unreachable and retry is disabled." : `All sentinels are unreachable. Retrying from scratch after ${retryDelay}ms.`;
                if (lastError) {
                    errorMsg += ` Last error: ${lastError.message}`;
                }
                debug(errorMsg);
                const error = new Error(errorMsg);
                if (typeof retryDelay === "number") {
                    eventEmitter("error", error);
                    await new Promise((resolve)=>setTimeout(resolve, retryDelay));
                    return connectToNext();
                } else {
                    throw error;
                }
            }
            let resolved = null;
            let err = null;
            try {
                resolved = await this.resolve(endpoint.value);
            } catch (error) {
                err = error;
            }
            if (!this.connecting) {
                throw new Error(utils_1.CONNECTION_CLOSED_ERROR_MSG);
            }
            const endpointAddress = endpoint.value.host + ":" + endpoint.value.port;
            if (resolved) {
                debug("resolved: %s:%s from sentinel %s", resolved.host, resolved.port, endpointAddress);
                if (this.options.enableTLSForSentinelMode && this.options.tls) {
                    Object.assign(resolved, this.options.tls);
                    this.stream = (0, tls_1.connect)(resolved);
                    this.stream.once("secureConnect", this.initFailoverDetector.bind(this));
                } else {
                    this.stream = (0, net_1.createConnection)(resolved);
                    this.stream.once("connect", this.initFailoverDetector.bind(this));
                }
                this.stream.once("error", (err)=>{
                    this.firstError = err;
                });
                return this.stream;
            } else {
                const errorMsg = err ? "failed to connect to sentinel " + endpointAddress + " because " + err.message : "connected to sentinel " + endpointAddress + " successfully, but got an invalid reply: " + resolved;
                debug(errorMsg);
                eventEmitter("sentinelError", new Error(errorMsg));
                if (err) {
                    lastError = err;
                }
                return connectToNext();
            }
        };
        return connectToNext();
    }
    async updateSentinels(client) {
        if (!this.options.updateSentinels) {
            return;
        }
        const result = await client.sentinel("sentinels", this.options.name);
        if (!Array.isArray(result)) {
            return;
        }
        result.map(utils_1.packObject).forEach((sentinel)=>{
            const flags = sentinel.flags ? sentinel.flags.split(",") : [];
            if (flags.indexOf("disconnected") === -1 && sentinel.ip && sentinel.port) {
                const endpoint = this.sentinelNatResolve(addressResponseToAddress(sentinel));
                if (this.sentinelIterator.add(endpoint)) {
                    debug("adding sentinel %s:%s", endpoint.host, endpoint.port);
                }
            }
        });
        debug("Updated internal sentinels: %s", this.sentinelIterator);
    }
    async resolveMaster(client) {
        const result = await client.sentinel("get-master-addr-by-name", this.options.name);
        await this.updateSentinels(client);
        return this.sentinelNatResolve(Array.isArray(result) ? {
            host: result[0],
            port: Number(result[1])
        } : null);
    }
    async resolveSlave(client) {
        const result = await client.sentinel("slaves", this.options.name);
        if (!Array.isArray(result)) {
            return null;
        }
        const availableSlaves = result.map(utils_1.packObject).filter((slave)=>slave.flags && !slave.flags.match(/(disconnected|s_down|o_down)/));
        return this.sentinelNatResolve(selectPreferredSentinel(availableSlaves, this.options.preferredSlaves));
    }
    sentinelNatResolve(item) {
        if (!item || !this.options.natMap) return item;
        const key = `${item.host}:${item.port}`;
        let result = item;
        if (typeof this.options.natMap === "function") {
            result = this.options.natMap(key) || item;
        } else if (typeof this.options.natMap === "object") {
            result = this.options.natMap[key] || item;
        }
        return result;
    }
    connectToSentinel(endpoint, options) {
        const redis = new Redis_1.default({
            port: endpoint.port || 26379,
            host: endpoint.host,
            username: this.options.sentinelUsername || null,
            password: this.options.sentinelPassword || null,
            family: endpoint.family || // @ts-expect-error
            ("path" in this.options && this.options.path ? undefined : this.options.family),
            tls: this.options.sentinelTLS,
            retryStrategy: null,
            enableReadyCheck: false,
            connectTimeout: this.options.connectTimeout,
            commandTimeout: this.options.sentinelCommandTimeout,
            ...options
        });
        // @ts-expect-error
        return redis;
    }
    async resolve(endpoint) {
        const client = this.connectToSentinel(endpoint);
        // ignore the errors since resolve* methods will handle them
        client.on("error", noop);
        try {
            if (this.options.role === "slave") {
                return await this.resolveSlave(client);
            } else {
                return await this.resolveMaster(client);
            }
        } finally{
            client.disconnect();
        }
    }
    async initFailoverDetector() {
        var _a;
        if (!this.options.failoverDetector) {
            return;
        }
        // Move the current sentinel to the first position
        this.sentinelIterator.reset(true);
        const sentinels = [];
        // In case of a large amount of sentinels, limit the number of concurrent connections
        while(sentinels.length < this.options.sentinelMaxConnections){
            const { done, value } = this.sentinelIterator.next();
            if (done) {
                break;
            }
            const client = this.connectToSentinel(value, {
                lazyConnect: true,
                retryStrategy: this.options.sentinelReconnectStrategy
            });
            client.on("reconnecting", ()=>{
                var _a;
                // Tests listen to this event
                (_a = this.emitter) === null || _a === void 0 ? void 0 : _a.emit("sentinelReconnecting");
            });
            sentinels.push({
                address: value,
                client
            });
        }
        this.sentinelIterator.reset(false);
        if (this.failoverDetector) {
            // Clean up previous detector
            this.failoverDetector.cleanup();
        }
        this.failoverDetector = new FailoverDetector_1.FailoverDetector(this, sentinels);
        await this.failoverDetector.subscribe();
        // Tests listen to this event
        (_a = this.emitter) === null || _a === void 0 ? void 0 : _a.emit("failoverSubscribed");
    }
}
exports.default = SentinelConnector;
function selectPreferredSentinel(availableSlaves, preferredSlaves) {
    if (availableSlaves.length === 0) {
        return null;
    }
    let selectedSlave;
    if (typeof preferredSlaves === "function") {
        selectedSlave = preferredSlaves(availableSlaves);
    } else if (preferredSlaves !== null && typeof preferredSlaves === "object") {
        const preferredSlavesArray = Array.isArray(preferredSlaves) ? preferredSlaves : [
            preferredSlaves
        ];
        // sort by priority
        preferredSlavesArray.sort((a, b)=>{
            // default the priority to 1
            if (!a.prio) {
                a.prio = 1;
            }
            if (!b.prio) {
                b.prio = 1;
            }
            // lowest priority first
            if (a.prio < b.prio) {
                return -1;
            }
            if (a.prio > b.prio) {
                return 1;
            }
            return 0;
        });
        // loop over preferred slaves and return the first match
        for(let p = 0; p < preferredSlavesArray.length; p++){
            for(let a = 0; a < availableSlaves.length; a++){
                const slave = availableSlaves[a];
                if (slave.ip === preferredSlavesArray[p].ip) {
                    if (slave.port === preferredSlavesArray[p].port) {
                        selectedSlave = slave;
                        break;
                    }
                }
            }
            if (selectedSlave) {
                break;
            }
        }
    }
    // if none of the preferred slaves are available, a random available slave is returned
    if (!selectedSlave) {
        selectedSlave = (0, utils_1.sample)(availableSlaves);
    }
    return addressResponseToAddress(selectedSlave);
}
function addressResponseToAddress(input) {
    return {
        host: input.ip,
        port: Number(input.port)
    };
}
function noop() {}
}}),
"[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/connectors/index.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SentinelConnector = exports.StandaloneConnector = void 0;
const StandaloneConnector_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/connectors/StandaloneConnector.js [app-rsc] (ecmascript)");
exports.StandaloneConnector = StandaloneConnector_1.default;
const SentinelConnector_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/connectors/SentinelConnector/index.js [app-rsc] (ecmascript)");
exports.SentinelConnector = SentinelConnector_1.default;
}}),
"[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/errors/MaxRetriesPerRequestError.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const redis_errors_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/redis-errors@1.2.0/node_modules/redis-errors/index.js [app-rsc] (ecmascript)");
class MaxRetriesPerRequestError extends redis_errors_1.AbortError {
    constructor(maxRetriesPerRequest){
        const message = `Reached the max retries per request limit (which is ${maxRetriesPerRequest}). Refer to "maxRetriesPerRequest" option for details.`;
        super(message);
        Error.captureStackTrace(this, this.constructor);
    }
    get name() {
        return this.constructor.name;
    }
}
exports.default = MaxRetriesPerRequestError;
}}),
"[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/errors/index.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MaxRetriesPerRequestError = void 0;
const MaxRetriesPerRequestError_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/errors/MaxRetriesPerRequestError.js [app-rsc] (ecmascript)");
exports.MaxRetriesPerRequestError = MaxRetriesPerRequestError_1.default;
}}),
"[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/SubscriptionSet.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Tiny class to simplify dealing with subscription set
 */ class SubscriptionSet {
    constructor(){
        this.set = {
            subscribe: {},
            psubscribe: {},
            ssubscribe: {}
        };
    }
    add(set, channel) {
        this.set[mapSet(set)][channel] = true;
    }
    del(set, channel) {
        delete this.set[mapSet(set)][channel];
    }
    channels(set) {
        return Object.keys(this.set[mapSet(set)]);
    }
    isEmpty() {
        return this.channels("subscribe").length === 0 && this.channels("psubscribe").length === 0 && this.channels("ssubscribe").length === 0;
    }
}
exports.default = SubscriptionSet;
function mapSet(set) {
    if (set === "unsubscribe") {
        return "subscribe";
    }
    if (set === "punsubscribe") {
        return "psubscribe";
    }
    if (set === "sunsubscribe") {
        return "ssubscribe";
    }
    return set;
}
}}),
"[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/DataHandler.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const Command_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/Command.js [app-rsc] (ecmascript)");
const utils_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/utils/index.js [app-rsc] (ecmascript)");
const RedisParser = __turbopack_context__.r("[project]/node_modules/.pnpm/redis-parser@3.0.0/node_modules/redis-parser/index.js [app-rsc] (ecmascript)");
const SubscriptionSet_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/SubscriptionSet.js [app-rsc] (ecmascript)");
const debug = (0, utils_1.Debug)("dataHandler");
class DataHandler {
    constructor(redis, parserOptions){
        this.redis = redis;
        const parser = new RedisParser({
            stringNumbers: parserOptions.stringNumbers,
            returnBuffers: true,
            returnError: (err)=>{
                this.returnError(err);
            },
            returnFatalError: (err)=>{
                this.returnFatalError(err);
            },
            returnReply: (reply)=>{
                this.returnReply(reply);
            }
        });
        // prependListener ensures the parser receives and processes data before socket timeout checks are performed
        redis.stream.prependListener("data", (data)=>{
            parser.execute(data);
        });
        // prependListener() doesn't enable flowing mode automatically - we need to resume the stream manually
        redis.stream.resume();
    }
    returnFatalError(err) {
        err.message += ". Please report this.";
        this.redis.recoverFromFatalError(err, err, {
            offlineQueue: false
        });
    }
    returnError(err) {
        const item = this.shiftCommand(err);
        if (!item) {
            return;
        }
        err.command = {
            name: item.command.name,
            args: item.command.args
        };
        this.redis.handleReconnection(err, item);
    }
    returnReply(reply) {
        if (this.handleMonitorReply(reply)) {
            return;
        }
        if (this.handleSubscriberReply(reply)) {
            return;
        }
        const item = this.shiftCommand(reply);
        if (!item) {
            return;
        }
        if (Command_1.default.checkFlag("ENTER_SUBSCRIBER_MODE", item.command.name)) {
            this.redis.condition.subscriber = new SubscriptionSet_1.default();
            this.redis.condition.subscriber.add(item.command.name, reply[1].toString());
            if (!fillSubCommand(item.command, reply[2])) {
                this.redis.commandQueue.unshift(item);
            }
        } else if (Command_1.default.checkFlag("EXIT_SUBSCRIBER_MODE", item.command.name)) {
            if (!fillUnsubCommand(item.command, reply[2])) {
                this.redis.commandQueue.unshift(item);
            }
        } else {
            item.command.resolve(reply);
        }
    }
    handleSubscriberReply(reply) {
        if (!this.redis.condition.subscriber) {
            return false;
        }
        const replyType = Array.isArray(reply) ? reply[0].toString() : null;
        debug('receive reply "%s" in subscriber mode', replyType);
        switch(replyType){
            case "message":
                if (this.redis.listeners("message").length > 0) {
                    // Check if there're listeners to avoid unnecessary `toString()`.
                    this.redis.emit("message", reply[1].toString(), reply[2] ? reply[2].toString() : "");
                }
                this.redis.emit("messageBuffer", reply[1], reply[2]);
                break;
            case "pmessage":
                {
                    const pattern = reply[1].toString();
                    if (this.redis.listeners("pmessage").length > 0) {
                        this.redis.emit("pmessage", pattern, reply[2].toString(), reply[3].toString());
                    }
                    this.redis.emit("pmessageBuffer", pattern, reply[2], reply[3]);
                    break;
                }
            case "smessage":
                {
                    if (this.redis.listeners("smessage").length > 0) {
                        this.redis.emit("smessage", reply[1].toString(), reply[2] ? reply[2].toString() : "");
                    }
                    this.redis.emit("smessageBuffer", reply[1], reply[2]);
                    break;
                }
            case "ssubscribe":
            case "subscribe":
            case "psubscribe":
                {
                    const channel = reply[1].toString();
                    this.redis.condition.subscriber.add(replyType, channel);
                    const item = this.shiftCommand(reply);
                    if (!item) {
                        return;
                    }
                    if (!fillSubCommand(item.command, reply[2])) {
                        this.redis.commandQueue.unshift(item);
                    }
                    break;
                }
            case "sunsubscribe":
            case "unsubscribe":
            case "punsubscribe":
                {
                    const channel = reply[1] ? reply[1].toString() : null;
                    if (channel) {
                        this.redis.condition.subscriber.del(replyType, channel);
                    }
                    const count = reply[2];
                    if (Number(count) === 0) {
                        this.redis.condition.subscriber = false;
                    }
                    const item = this.shiftCommand(reply);
                    if (!item) {
                        return;
                    }
                    if (!fillUnsubCommand(item.command, count)) {
                        this.redis.commandQueue.unshift(item);
                    }
                    break;
                }
            default:
                {
                    const item = this.shiftCommand(reply);
                    if (!item) {
                        return;
                    }
                    item.command.resolve(reply);
                }
        }
        return true;
    }
    handleMonitorReply(reply) {
        if (this.redis.status !== "monitoring") {
            return false;
        }
        const replyStr = reply.toString();
        if (replyStr === "OK") {
            // Valid commands in the monitoring mode are AUTH and MONITOR,
            // both of which always reply with 'OK'.
            // So if we got an 'OK', we can make certain that
            // the reply is made to AUTH & MONITOR.
            return false;
        }
        // Since commands sent in the monitoring mode will trigger an exception,
        // any replies we received in the monitoring mode should consider to be
        // realtime monitor data instead of result of commands.
        const len = replyStr.indexOf(" ");
        const timestamp = replyStr.slice(0, len);
        const argIndex = replyStr.indexOf('"');
        const args = replyStr.slice(argIndex + 1, -1).split('" "').map((elem)=>elem.replace(/\\"/g, '"'));
        const dbAndSource = replyStr.slice(len + 2, argIndex - 2).split(" ");
        this.redis.emit("monitor", timestamp, args, dbAndSource[1], dbAndSource[0]);
        return true;
    }
    shiftCommand(reply) {
        const item = this.redis.commandQueue.shift();
        if (!item) {
            const message = "Command queue state error. If you can reproduce this, please report it.";
            const error = new Error(message + (reply instanceof Error ? ` Last error: ${reply.message}` : ` Last reply: ${reply.toString()}`));
            this.redis.emit("error", error);
            return null;
        }
        return item;
    }
}
exports.default = DataHandler;
const remainingRepliesMap = new WeakMap();
function fillSubCommand(command, count) {
    let remainingReplies = remainingRepliesMap.has(command) ? remainingRepliesMap.get(command) : command.args.length;
    remainingReplies -= 1;
    if (remainingReplies <= 0) {
        command.resolve(count);
        remainingRepliesMap.delete(command);
        return true;
    }
    remainingRepliesMap.set(command, remainingReplies);
    return false;
}
function fillUnsubCommand(command, count) {
    let remainingReplies = remainingRepliesMap.has(command) ? remainingRepliesMap.get(command) : command.args.length;
    if (remainingReplies === 0) {
        if (Number(count) === 0) {
            remainingRepliesMap.delete(command);
            command.resolve(count);
            return true;
        }
        return false;
    }
    remainingReplies -= 1;
    if (remainingReplies <= 0) {
        command.resolve(count);
        return true;
    }
    remainingRepliesMap.set(command, remainingReplies);
    return false;
}
}}),
"[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/redis/event_handler.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.readyHandler = exports.errorHandler = exports.closeHandler = exports.connectHandler = void 0;
const redis_errors_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/redis-errors@1.2.0/node_modules/redis-errors/index.js [app-rsc] (ecmascript)");
const Command_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/Command.js [app-rsc] (ecmascript)");
const errors_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/errors/index.js [app-rsc] (ecmascript)");
const utils_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/utils/index.js [app-rsc] (ecmascript)");
const DataHandler_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/DataHandler.js [app-rsc] (ecmascript)");
const debug = (0, utils_1.Debug)("connection");
function connectHandler(self) {
    return function() {
        self.setStatus("connect");
        self.resetCommandQueue();
        // AUTH command should be processed before any other commands
        let flushed = false;
        const { connectionEpoch } = self;
        if (self.condition.auth) {
            self.auth(self.condition.auth, function(err) {
                if (connectionEpoch !== self.connectionEpoch) {
                    return;
                }
                if (err) {
                    if (err.message.indexOf("no password is set") !== -1) {
                        console.warn("[WARN] Redis server does not require a password, but a password was supplied.");
                    } else if (err.message.indexOf("without any password configured for the default user") !== -1) {
                        console.warn("[WARN] This Redis server's `default` user does not require a password, but a password was supplied");
                    } else if (err.message.indexOf("wrong number of arguments for 'auth' command") !== -1) {
                        console.warn(`[ERROR] The server returned "wrong number of arguments for 'auth' command". You are probably passing both username and password to Redis version 5 or below. You should only pass the 'password' option for Redis version 5 and under.`);
                    } else {
                        flushed = true;
                        self.recoverFromFatalError(err, err);
                    }
                }
            });
        }
        if (self.condition.select) {
            self.select(self.condition.select).catch((err)=>{
                // If the node is in cluster mode, select is disallowed.
                // In this case, reconnect won't help.
                self.silentEmit("error", err);
            });
        }
        if (!self.options.enableReadyCheck) {
            exports.readyHandler(self)();
        }
        /*
          No need to keep the reference of DataHandler here
          because we don't need to do the cleanup.
          `Stream#end()` will remove all listeners for us.
        */ new DataHandler_1.default(self, {
            stringNumbers: self.options.stringNumbers
        });
        if (self.options.enableReadyCheck) {
            self._readyCheck(function(err, info) {
                if (connectionEpoch !== self.connectionEpoch) {
                    return;
                }
                if (err) {
                    if (!flushed) {
                        self.recoverFromFatalError(new Error("Ready check failed: " + err.message), err);
                    }
                } else {
                    if (self.connector.check(info)) {
                        exports.readyHandler(self)();
                    } else {
                        self.disconnect(true);
                    }
                }
            });
        }
    };
}
exports.connectHandler = connectHandler;
function abortError(command) {
    const err = new redis_errors_1.AbortError("Command aborted due to connection close");
    err.command = {
        name: command.name,
        args: command.args
    };
    return err;
}
// If a contiguous set of pipeline commands starts from index zero then they
// can be safely reattempted. If however we have a chain of pipelined commands
// starting at index 1 or more it means we received a partial response before
// the connection close and those pipelined commands must be aborted. For
// example, if the queue looks like this: [2, 3, 4, 0, 1, 2] then after
// aborting and purging we'll have a queue that looks like this: [0, 1, 2]
function abortIncompletePipelines(commandQueue) {
    var _a;
    let expectedIndex = 0;
    for(let i = 0; i < commandQueue.length;){
        const command = (_a = commandQueue.peekAt(i)) === null || _a === void 0 ? void 0 : _a.command;
        const pipelineIndex = command.pipelineIndex;
        if (pipelineIndex === undefined || pipelineIndex === 0) {
            expectedIndex = 0;
        }
        if (pipelineIndex !== undefined && pipelineIndex !== expectedIndex++) {
            commandQueue.remove(i, 1);
            command.reject(abortError(command));
            continue;
        }
        i++;
    }
}
// If only a partial transaction result was received before connection close,
// we have to abort any transaction fragments that may have ended up in the
// offline queue
function abortTransactionFragments(commandQueue) {
    var _a;
    for(let i = 0; i < commandQueue.length;){
        const command = (_a = commandQueue.peekAt(i)) === null || _a === void 0 ? void 0 : _a.command;
        if (command.name === "multi") {
            break;
        }
        if (command.name === "exec") {
            commandQueue.remove(i, 1);
            command.reject(abortError(command));
            break;
        }
        if (command.inTransaction) {
            commandQueue.remove(i, 1);
            command.reject(abortError(command));
        } else {
            i++;
        }
    }
}
function closeHandler(self) {
    return function() {
        const prevStatus = self.status;
        self.setStatus("close");
        if (self.commandQueue.length) {
            abortIncompletePipelines(self.commandQueue);
        }
        if (self.offlineQueue.length) {
            abortTransactionFragments(self.offlineQueue);
        }
        if (prevStatus === "ready") {
            if (!self.prevCondition) {
                self.prevCondition = self.condition;
            }
            if (self.commandQueue.length) {
                self.prevCommandQueue = self.commandQueue;
            }
        }
        if (self.manuallyClosing) {
            self.manuallyClosing = false;
            debug("skip reconnecting since the connection is manually closed.");
            return close();
        }
        if (typeof self.options.retryStrategy !== "function") {
            debug("skip reconnecting because `retryStrategy` is not a function");
            return close();
        }
        const retryDelay = self.options.retryStrategy(++self.retryAttempts);
        if (typeof retryDelay !== "number") {
            debug("skip reconnecting because `retryStrategy` doesn't return a number");
            return close();
        }
        debug("reconnect in %sms", retryDelay);
        self.setStatus("reconnecting", retryDelay);
        self.reconnectTimeout = setTimeout(function() {
            self.reconnectTimeout = null;
            self.connect().catch(utils_1.noop);
        }, retryDelay);
        const { maxRetriesPerRequest } = self.options;
        if (typeof maxRetriesPerRequest === "number") {
            if (maxRetriesPerRequest < 0) {
                debug("maxRetriesPerRequest is negative, ignoring...");
            } else {
                const remainder = self.retryAttempts % (maxRetriesPerRequest + 1);
                if (remainder === 0) {
                    debug("reach maxRetriesPerRequest limitation, flushing command queue...");
                    self.flushQueue(new errors_1.MaxRetriesPerRequestError(maxRetriesPerRequest));
                }
            }
        }
    };
    "TURBOPACK unreachable";
    function close() {
        self.setStatus("end");
        self.flushQueue(new Error(utils_1.CONNECTION_CLOSED_ERROR_MSG));
    }
}
exports.closeHandler = closeHandler;
function errorHandler(self) {
    return function(error) {
        debug("error: %s", error);
        self.silentEmit("error", error);
    };
}
exports.errorHandler = errorHandler;
function readyHandler(self) {
    return function() {
        self.setStatus("ready");
        self.retryAttempts = 0;
        if (self.options.monitor) {
            self.call("monitor").then(()=>self.setStatus("monitoring"), (error)=>self.emit("error", error));
            const { sendCommand } = self;
            self.sendCommand = function(command) {
                if (Command_1.default.checkFlag("VALID_IN_MONITOR_MODE", command.name)) {
                    return sendCommand.call(self, command);
                }
                command.reject(new Error("Connection is in monitoring mode, can't process commands."));
                return command.promise;
            };
            self.once("close", function() {
                delete self.sendCommand;
            });
            return;
        }
        const finalSelect = self.prevCondition ? self.prevCondition.select : self.condition.select;
        if (self.options.connectionName) {
            debug("set the connection name [%s]", self.options.connectionName);
            self.client("setname", self.options.connectionName).catch(utils_1.noop);
        }
        if (self.options.readOnly) {
            debug("set the connection to readonly mode");
            self.readonly().catch(utils_1.noop);
        }
        if (self.prevCondition) {
            const condition = self.prevCondition;
            self.prevCondition = null;
            if (condition.subscriber && self.options.autoResubscribe) {
                // We re-select the previous db first since
                // `SELECT` command is not valid in sub mode.
                if (self.condition.select !== finalSelect) {
                    debug("connect to db [%d]", finalSelect);
                    self.select(finalSelect);
                }
                const subscribeChannels = condition.subscriber.channels("subscribe");
                if (subscribeChannels.length) {
                    debug("subscribe %d channels", subscribeChannels.length);
                    self.subscribe(subscribeChannels);
                }
                const psubscribeChannels = condition.subscriber.channels("psubscribe");
                if (psubscribeChannels.length) {
                    debug("psubscribe %d channels", psubscribeChannels.length);
                    self.psubscribe(psubscribeChannels);
                }
                const ssubscribeChannels = condition.subscriber.channels("ssubscribe");
                if (ssubscribeChannels.length) {
                    debug("ssubscribe %d channels", ssubscribeChannels.length);
                    self.ssubscribe(ssubscribeChannels);
                }
            }
        }
        if (self.prevCommandQueue) {
            if (self.options.autoResendUnfulfilledCommands) {
                debug("resend %d unfulfilled commands", self.prevCommandQueue.length);
                while(self.prevCommandQueue.length > 0){
                    const item = self.prevCommandQueue.shift();
                    if (item.select !== self.condition.select && item.command.name !== "select") {
                        self.select(item.select);
                    }
                    self.sendCommand(item.command, item.stream);
                }
            } else {
                self.prevCommandQueue = null;
            }
        }
        if (self.offlineQueue.length) {
            debug("send %d commands in offline queue", self.offlineQueue.length);
            const offlineQueue = self.offlineQueue;
            self.resetOfflineQueue();
            while(offlineQueue.length > 0){
                const item = offlineQueue.shift();
                if (item.select !== self.condition.select && item.command.name !== "select") {
                    self.select(item.select);
                }
                self.sendCommand(item.command, item.stream);
            }
        }
        if (self.condition.select !== finalSelect) {
            debug("connect to db [%d]", finalSelect);
            self.select(finalSelect);
        }
    };
}
exports.readyHandler = readyHandler;
}}),
"[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/redis/RedisOptions.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DEFAULT_REDIS_OPTIONS = void 0;
exports.DEFAULT_REDIS_OPTIONS = {
    // Connection
    port: 6379,
    host: "localhost",
    family: 4,
    connectTimeout: 10000,
    disconnectTimeout: 2000,
    retryStrategy: function(times) {
        return Math.min(times * 50, 2000);
    },
    keepAlive: 0,
    noDelay: true,
    connectionName: null,
    // Sentinel
    sentinels: null,
    name: null,
    role: "master",
    sentinelRetryStrategy: function(times) {
        return Math.min(times * 10, 1000);
    },
    sentinelReconnectStrategy: function() {
        // This strategy only applies when sentinels are used for detecting
        // a failover, not during initial master resolution.
        // The deployment can still function when some of the sentinels are down
        // for a long period of time, so we may not want to attempt reconnection
        // very often. Therefore the default interval is fairly long (1 minute).
        return 60000;
    },
    natMap: null,
    enableTLSForSentinelMode: false,
    updateSentinels: true,
    failoverDetector: false,
    // Status
    username: null,
    password: null,
    db: 0,
    // Others
    enableOfflineQueue: true,
    enableReadyCheck: true,
    autoResubscribe: true,
    autoResendUnfulfilledCommands: true,
    lazyConnect: false,
    keyPrefix: "",
    reconnectOnError: null,
    readOnly: false,
    stringNumbers: false,
    maxRetriesPerRequest: 20,
    maxLoadingRetryTime: 10000,
    enableAutoPipelining: false,
    autoPipeliningIgnoredCommands: [],
    sentinelMaxConnections: 10
};
}}),
"[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/Redis.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const commands_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/@ioredis+commands@1.2.0/node_modules/@ioredis/commands/built/index.js [app-rsc] (ecmascript)");
const events_1 = __turbopack_context__.r("[externals]/events [external] (events, cjs)");
const standard_as_callback_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/standard-as-callback@2.1.0/node_modules/standard-as-callback/built/index.js [app-rsc] (ecmascript)");
const cluster_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/cluster/index.js [app-rsc] (ecmascript)");
const Command_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/Command.js [app-rsc] (ecmascript)");
const connectors_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/connectors/index.js [app-rsc] (ecmascript)");
const SentinelConnector_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/connectors/SentinelConnector/index.js [app-rsc] (ecmascript)");
const eventHandler = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/redis/event_handler.js [app-rsc] (ecmascript)");
const RedisOptions_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/redis/RedisOptions.js [app-rsc] (ecmascript)");
const ScanStream_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/ScanStream.js [app-rsc] (ecmascript)");
const transaction_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/transaction.js [app-rsc] (ecmascript)");
const utils_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/utils/index.js [app-rsc] (ecmascript)");
const applyMixin_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/utils/applyMixin.js [app-rsc] (ecmascript)");
const Commander_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/utils/Commander.js [app-rsc] (ecmascript)");
const lodash_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/utils/lodash.js [app-rsc] (ecmascript)");
const Deque = __turbopack_context__.r("[project]/node_modules/.pnpm/denque@2.1.0/node_modules/denque/index.js [app-rsc] (ecmascript)");
const debug = (0, utils_1.Debug)("redis");
/**
 * This is the major component of ioredis.
 * Use it to connect to a standalone Redis server or Sentinels.
 *
 * ```typescript
 * const redis = new Redis(); // Default port is 6379
 * async function main() {
 *   redis.set("foo", "bar");
 *   redis.get("foo", (err, result) => {
 *     // `result` should be "bar"
 *     console.log(err, result);
 *   });
 *   // Or use Promise
 *   const result = await redis.get("foo");
 * }
 * ```
 */ class Redis extends Commander_1.default {
    constructor(arg1, arg2, arg3){
        super();
        this.status = "wait";
        /**
         * @ignore
         */ this.isCluster = false;
        this.reconnectTimeout = null;
        this.connectionEpoch = 0;
        this.retryAttempts = 0;
        this.manuallyClosing = false;
        // Prepare autopipelines structures
        this._autoPipelines = new Map();
        this._runningAutoPipelines = new Set();
        this.parseOptions(arg1, arg2, arg3);
        events_1.EventEmitter.call(this);
        this.resetCommandQueue();
        this.resetOfflineQueue();
        if (this.options.Connector) {
            this.connector = new this.options.Connector(this.options);
        } else if (this.options.sentinels) {
            const sentinelConnector = new SentinelConnector_1.default(this.options);
            sentinelConnector.emitter = this;
            this.connector = sentinelConnector;
        } else {
            this.connector = new connectors_1.StandaloneConnector(this.options);
        }
        if (this.options.scripts) {
            Object.entries(this.options.scripts).forEach(([name, definition])=>{
                this.defineCommand(name, definition);
            });
        }
        // end(or wait) -> connecting -> connect -> ready -> end
        if (this.options.lazyConnect) {
            this.setStatus("wait");
        } else {
            this.connect().catch(lodash_1.noop);
        }
    }
    /**
     * Create a Redis instance.
     * This is the same as `new Redis()` but is included for compatibility with node-redis.
     */ static createClient(...args) {
        return new Redis(...args);
    }
    get autoPipelineQueueSize() {
        let queued = 0;
        for (const pipeline of this._autoPipelines.values()){
            queued += pipeline.length;
        }
        return queued;
    }
    /**
     * Create a connection to Redis.
     * This method will be invoked automatically when creating a new Redis instance
     * unless `lazyConnect: true` is passed.
     *
     * When calling this method manually, a Promise is returned, which will
     * be resolved when the connection status is ready.
     */ connect(callback) {
        const promise = new Promise((resolve, reject)=>{
            if (this.status === "connecting" || this.status === "connect" || this.status === "ready") {
                reject(new Error("Redis is already connecting/connected"));
                return;
            }
            this.connectionEpoch += 1;
            this.setStatus("connecting");
            const { options } = this;
            this.condition = {
                select: options.db,
                auth: options.username ? [
                    options.username,
                    options.password
                ] : options.password,
                subscriber: false
            };
            const _this = this;
            (0, standard_as_callback_1.default)(this.connector.connect(function(type, err) {
                _this.silentEmit(type, err);
            }), function(err, stream) {
                if (err) {
                    _this.flushQueue(err);
                    _this.silentEmit("error", err);
                    reject(err);
                    _this.setStatus("end");
                    return;
                }
                let CONNECT_EVENT = options.tls ? "secureConnect" : "connect";
                if ("sentinels" in options && options.sentinels && !options.enableTLSForSentinelMode) {
                    CONNECT_EVENT = "connect";
                }
                _this.stream = stream;
                if (options.noDelay) {
                    stream.setNoDelay(true);
                }
                // Node ignores setKeepAlive before connect, therefore we wait for the event:
                // https://github.com/nodejs/node/issues/31663
                if (typeof options.keepAlive === "number") {
                    if (stream.connecting) {
                        stream.once(CONNECT_EVENT, ()=>{
                            stream.setKeepAlive(true, options.keepAlive);
                        });
                    } else {
                        stream.setKeepAlive(true, options.keepAlive);
                    }
                }
                if (stream.connecting) {
                    stream.once(CONNECT_EVENT, eventHandler.connectHandler(_this));
                    if (options.connectTimeout) {
                        /*
                         * Typically, Socket#setTimeout(0) will clear the timer
                         * set before. However, in some platforms (Electron 3.x~4.x),
                         * the timer will not be cleared. So we introduce a variable here.
                         *
                         * See https://github.com/electron/electron/issues/14915
                         */ let connectTimeoutCleared = false;
                        stream.setTimeout(options.connectTimeout, function() {
                            if (connectTimeoutCleared) {
                                return;
                            }
                            stream.setTimeout(0);
                            stream.destroy();
                            const err = new Error("connect ETIMEDOUT");
                            // @ts-expect-error
                            err.errorno = "ETIMEDOUT";
                            // @ts-expect-error
                            err.code = "ETIMEDOUT";
                            // @ts-expect-error
                            err.syscall = "connect";
                            eventHandler.errorHandler(_this)(err);
                        });
                        stream.once(CONNECT_EVENT, function() {
                            connectTimeoutCleared = true;
                            stream.setTimeout(0);
                        });
                    }
                } else if (stream.destroyed) {
                    const firstError = _this.connector.firstError;
                    if (firstError) {
                        process.nextTick(()=>{
                            eventHandler.errorHandler(_this)(firstError);
                        });
                    }
                    process.nextTick(eventHandler.closeHandler(_this));
                } else {
                    process.nextTick(eventHandler.connectHandler(_this));
                }
                if (!stream.destroyed) {
                    stream.once("error", eventHandler.errorHandler(_this));
                    stream.once("close", eventHandler.closeHandler(_this));
                }
                const connectionReadyHandler = function() {
                    _this.removeListener("close", connectionCloseHandler);
                    resolve();
                };
                var connectionCloseHandler = function() {
                    _this.removeListener("ready", connectionReadyHandler);
                    reject(new Error(utils_1.CONNECTION_CLOSED_ERROR_MSG));
                };
                _this.once("ready", connectionReadyHandler);
                _this.once("close", connectionCloseHandler);
            });
        });
        return (0, standard_as_callback_1.default)(promise, callback);
    }
    /**
     * Disconnect from Redis.
     *
     * This method closes the connection immediately,
     * and may lose some pending replies that haven't written to client.
     * If you want to wait for the pending replies, use Redis#quit instead.
     */ disconnect(reconnect = false) {
        if (!reconnect) {
            this.manuallyClosing = true;
        }
        if (this.reconnectTimeout && !reconnect) {
            clearTimeout(this.reconnectTimeout);
            this.reconnectTimeout = null;
        }
        if (this.status === "wait") {
            eventHandler.closeHandler(this)();
        } else {
            this.connector.disconnect();
        }
    }
    /**
     * Disconnect from Redis.
     *
     * @deprecated
     */ end() {
        this.disconnect();
    }
    /**
     * Create a new instance with the same options as the current one.
     *
     * @example
     * ```js
     * var redis = new Redis(6380);
     * var anotherRedis = redis.duplicate();
     * ```
     */ duplicate(override) {
        return new Redis({
            ...this.options,
            ...override
        });
    }
    /**
     * Mode of the connection.
     *
     * One of `"normal"`, `"subscriber"`, or `"monitor"`. When the connection is
     * not in `"normal"` mode, certain commands are not allowed.
     */ get mode() {
        var _a;
        return this.options.monitor ? "monitor" : ((_a = this.condition) === null || _a === void 0 ? void 0 : _a.subscriber) ? "subscriber" : "normal";
    }
    /**
     * Listen for all requests received by the server in real time.
     *
     * This command will create a new connection to Redis and send a
     * MONITOR command via the new connection in order to avoid disturbing
     * the current connection.
     *
     * @param callback The callback function. If omit, a promise will be returned.
     * @example
     * ```js
     * var redis = new Redis();
     * redis.monitor(function (err, monitor) {
     *   // Entering monitoring mode.
     *   monitor.on('monitor', function (time, args, source, database) {
     *     console.log(time + ": " + util.inspect(args));
     *   });
     * });
     *
     * // supports promise as well as other commands
     * redis.monitor().then(function (monitor) {
     *   monitor.on('monitor', function (time, args, source, database) {
     *     console.log(time + ": " + util.inspect(args));
     *   });
     * });
     * ```
     */ monitor(callback) {
        const monitorInstance = this.duplicate({
            monitor: true,
            lazyConnect: false
        });
        return (0, standard_as_callback_1.default)(new Promise(function(resolve, reject) {
            monitorInstance.once("error", reject);
            monitorInstance.once("monitoring", function() {
                resolve(monitorInstance);
            });
        }), callback);
    }
    /**
     * Send a command to Redis
     *
     * This method is used internally and in most cases you should not
     * use it directly. If you need to send a command that is not supported
     * by the library, you can use the `call` method:
     *
     * ```js
     * const redis = new Redis();
     *
     * redis.call('set', 'foo', 'bar');
     * // or
     * redis.call(['set', 'foo', 'bar']);
     * ```
     *
     * @ignore
     */ sendCommand(command, stream) {
        var _a, _b;
        if (this.status === "wait") {
            this.connect().catch(lodash_1.noop);
        }
        if (this.status === "end") {
            command.reject(new Error(utils_1.CONNECTION_CLOSED_ERROR_MSG));
            return command.promise;
        }
        if (((_a = this.condition) === null || _a === void 0 ? void 0 : _a.subscriber) && !Command_1.default.checkFlag("VALID_IN_SUBSCRIBER_MODE", command.name)) {
            command.reject(new Error("Connection in subscriber mode, only subscriber commands may be used"));
            return command.promise;
        }
        if (typeof this.options.commandTimeout === "number") {
            command.setTimeout(this.options.commandTimeout);
        }
        let writable = this.status === "ready" || !stream && this.status === "connect" && (0, commands_1.exists)(command.name) && (0, commands_1.hasFlag)(command.name, "loading");
        if (!this.stream) {
            writable = false;
        } else if (!this.stream.writable) {
            writable = false;
        // @ts-expect-error
        } else if (this.stream._writableState && this.stream._writableState.ended) {
            // TODO: We should be able to remove this as the PR has already been merged.
            // https://github.com/iojs/io.js/pull/1217
            writable = false;
        }
        if (!writable) {
            if (!this.options.enableOfflineQueue) {
                command.reject(new Error("Stream isn't writeable and enableOfflineQueue options is false"));
                return command.promise;
            }
            if (command.name === "quit" && this.offlineQueue.length === 0) {
                this.disconnect();
                command.resolve(Buffer.from("OK"));
                return command.promise;
            }
            // @ts-expect-error
            if (debug.enabled) {
                debug("queue command[%s]: %d -> %s(%o)", this._getDescription(), this.condition.select, command.name, command.args);
            }
            this.offlineQueue.push({
                command: command,
                stream: stream,
                select: this.condition.select
            });
        } else {
            // @ts-expect-error
            if (debug.enabled) {
                debug("write command[%s]: %d -> %s(%o)", this._getDescription(), (_b = this.condition) === null || _b === void 0 ? void 0 : _b.select, command.name, command.args);
            }
            if (stream) {
                if ("isPipeline" in stream && stream.isPipeline) {
                    stream.write(command.toWritable(stream.destination.redis.stream));
                } else {
                    stream.write(command.toWritable(stream));
                }
            } else {
                this.stream.write(command.toWritable(this.stream));
            }
            this.commandQueue.push({
                command: command,
                stream: stream,
                select: this.condition.select
            });
            if (Command_1.default.checkFlag("WILL_DISCONNECT", command.name)) {
                this.manuallyClosing = true;
            }
            if (this.options.socketTimeout !== undefined && this.socketTimeoutTimer === undefined) {
                this.setSocketTimeout();
            }
        }
        if (command.name === "select" && (0, utils_1.isInt)(command.args[0])) {
            const db = parseInt(command.args[0], 10);
            if (this.condition.select !== db) {
                this.condition.select = db;
                this.emit("select", db);
                debug("switch to db [%d]", this.condition.select);
            }
        }
        return command.promise;
    }
    setSocketTimeout() {
        this.socketTimeoutTimer = setTimeout(()=>{
            this.stream.destroy(new Error(`Socket timeout. Expecting data, but didn't receive any in ${this.options.socketTimeout}ms.`));
            this.socketTimeoutTimer = undefined;
        }, this.options.socketTimeout);
        // this handler must run after the "data" handler in "DataHandler"
        // so that `this.commandQueue.length` will be updated
        this.stream.once("data", ()=>{
            clearTimeout(this.socketTimeoutTimer);
            this.socketTimeoutTimer = undefined;
            if (this.commandQueue.length === 0) return;
            this.setSocketTimeout();
        });
    }
    scanStream(options) {
        return this.createScanStream("scan", {
            options
        });
    }
    scanBufferStream(options) {
        return this.createScanStream("scanBuffer", {
            options
        });
    }
    sscanStream(key, options) {
        return this.createScanStream("sscan", {
            key,
            options
        });
    }
    sscanBufferStream(key, options) {
        return this.createScanStream("sscanBuffer", {
            key,
            options
        });
    }
    hscanStream(key, options) {
        return this.createScanStream("hscan", {
            key,
            options
        });
    }
    hscanBufferStream(key, options) {
        return this.createScanStream("hscanBuffer", {
            key,
            options
        });
    }
    zscanStream(key, options) {
        return this.createScanStream("zscan", {
            key,
            options
        });
    }
    zscanBufferStream(key, options) {
        return this.createScanStream("zscanBuffer", {
            key,
            options
        });
    }
    /**
     * Emit only when there's at least one listener.
     *
     * @ignore
     */ silentEmit(eventName, arg) {
        let error;
        if (eventName === "error") {
            error = arg;
            if (this.status === "end") {
                return;
            }
            if (this.manuallyClosing) {
                // ignore connection related errors when manually disconnecting
                if (error instanceof Error && (error.message === utils_1.CONNECTION_CLOSED_ERROR_MSG || // @ts-expect-error
                error.syscall === "connect" || // @ts-expect-error
                error.syscall === "read")) {
                    return;
                }
            }
        }
        if (this.listeners(eventName).length > 0) {
            return this.emit.apply(this, arguments);
        }
        if (error && error instanceof Error) {
            console.error("[ioredis] Unhandled error event:", error.stack);
        }
        return false;
    }
    /**
     * @ignore
     */ recoverFromFatalError(_commandError, err, options) {
        this.flushQueue(err, options);
        this.silentEmit("error", err);
        this.disconnect(true);
    }
    /**
     * @ignore
     */ handleReconnection(err, item) {
        var _a;
        let needReconnect = false;
        if (this.options.reconnectOnError) {
            needReconnect = this.options.reconnectOnError(err);
        }
        switch(needReconnect){
            case 1:
            case true:
                if (this.status !== "reconnecting") {
                    this.disconnect(true);
                }
                item.command.reject(err);
                break;
            case 2:
                if (this.status !== "reconnecting") {
                    this.disconnect(true);
                }
                if (((_a = this.condition) === null || _a === void 0 ? void 0 : _a.select) !== item.select && item.command.name !== "select") {
                    this.select(item.select);
                }
                // TODO
                // @ts-expect-error
                this.sendCommand(item.command);
                break;
            default:
                item.command.reject(err);
        }
    }
    /**
     * Get description of the connection. Used for debugging.
     */ _getDescription() {
        let description;
        if ("path" in this.options && this.options.path) {
            description = this.options.path;
        } else if (this.stream && this.stream.remoteAddress && this.stream.remotePort) {
            description = this.stream.remoteAddress + ":" + this.stream.remotePort;
        } else if ("host" in this.options && this.options.host) {
            description = this.options.host + ":" + this.options.port;
        } else {
            // Unexpected
            description = "";
        }
        if (this.options.connectionName) {
            description += ` (${this.options.connectionName})`;
        }
        return description;
    }
    resetCommandQueue() {
        this.commandQueue = new Deque();
    }
    resetOfflineQueue() {
        this.offlineQueue = new Deque();
    }
    parseOptions(...args) {
        const options = {};
        let isTls = false;
        for(let i = 0; i < args.length; ++i){
            const arg = args[i];
            if (arg === null || typeof arg === "undefined") {
                continue;
            }
            if (typeof arg === "object") {
                (0, lodash_1.defaults)(options, arg);
            } else if (typeof arg === "string") {
                (0, lodash_1.defaults)(options, (0, utils_1.parseURL)(arg));
                if (arg.startsWith("rediss://")) {
                    isTls = true;
                }
            } else if (typeof arg === "number") {
                options.port = arg;
            } else {
                throw new Error("Invalid argument " + arg);
            }
        }
        if (isTls) {
            (0, lodash_1.defaults)(options, {
                tls: true
            });
        }
        (0, lodash_1.defaults)(options, Redis.defaultOptions);
        if (typeof options.port === "string") {
            options.port = parseInt(options.port, 10);
        }
        if (typeof options.db === "string") {
            options.db = parseInt(options.db, 10);
        }
        // @ts-expect-error
        this.options = (0, utils_1.resolveTLSProfile)(options);
    }
    /**
     * Change instance's status
     */ setStatus(status, arg) {
        // @ts-expect-error
        if (debug.enabled) {
            debug("status[%s]: %s -> %s", this._getDescription(), this.status || "[empty]", status);
        }
        this.status = status;
        process.nextTick(this.emit.bind(this, status, arg));
    }
    createScanStream(command, { key, options = {} }) {
        return new ScanStream_1.default({
            objectMode: true,
            key: key,
            redis: this,
            command: command,
            ...options
        });
    }
    /**
     * Flush offline queue and command queue with error.
     *
     * @param error The error object to send to the commands
     * @param options options
     */ flushQueue(error, options) {
        options = (0, lodash_1.defaults)({}, options, {
            offlineQueue: true,
            commandQueue: true
        });
        let item;
        if (options.offlineQueue) {
            while(item = this.offlineQueue.shift()){
                item.command.reject(error);
            }
        }
        if (options.commandQueue) {
            if (this.commandQueue.length > 0) {
                if (this.stream) {
                    this.stream.removeAllListeners("data");
                }
                while(item = this.commandQueue.shift()){
                    item.command.reject(error);
                }
            }
        }
    }
    /**
     * Check whether Redis has finished loading the persistent data and is able to
     * process commands.
     */ _readyCheck(callback) {
        const _this = this;
        this.info(function(err, res) {
            if (err) {
                if (err.message && err.message.includes("NOPERM")) {
                    console.warn(`Skipping the ready check because INFO command fails: "${err.message}". You can disable ready check with "enableReadyCheck". More: https://github.com/luin/ioredis/wiki/Disable-ready-check.`);
                    return callback(null, {});
                }
                return callback(err);
            }
            if (typeof res !== "string") {
                return callback(null, res);
            }
            const info = {};
            const lines = res.split("\r\n");
            for(let i = 0; i < lines.length; ++i){
                const [fieldName, ...fieldValueParts] = lines[i].split(":");
                const fieldValue = fieldValueParts.join(":");
                if (fieldValue) {
                    info[fieldName] = fieldValue;
                }
            }
            if (!info.loading || info.loading === "0") {
                callback(null, info);
            } else {
                const loadingEtaMs = (info.loading_eta_seconds || 1) * 1000;
                const retryTime = _this.options.maxLoadingRetryTime && _this.options.maxLoadingRetryTime < loadingEtaMs ? _this.options.maxLoadingRetryTime : loadingEtaMs;
                debug("Redis server still loading, trying again in " + retryTime + "ms");
                setTimeout(function() {
                    _this._readyCheck(callback);
                }, retryTime);
            }
        }).catch(lodash_1.noop);
    }
}
Redis.Cluster = cluster_1.default;
Redis.Command = Command_1.default;
/**
 * Default options
 */ Redis.defaultOptions = RedisOptions_1.DEFAULT_REDIS_OPTIONS;
(0, applyMixin_1.default)(Redis, events_1.EventEmitter);
(0, transaction_1.addTransactionSupport)(Redis.prototype);
exports.default = Redis;
}}),
"[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/index.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.print = exports.ReplyError = exports.SentinelIterator = exports.SentinelConnector = exports.AbstractConnector = exports.Pipeline = exports.ScanStream = exports.Command = exports.Cluster = exports.Redis = exports.default = void 0;
exports = module.exports = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/Redis.js [app-rsc] (ecmascript)").default;
var Redis_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/Redis.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Redis_1.default;
    }
});
var Redis_2 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/Redis.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "Redis", {
    enumerable: true,
    get: function() {
        return Redis_2.default;
    }
});
var cluster_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/cluster/index.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "Cluster", {
    enumerable: true,
    get: function() {
        return cluster_1.default;
    }
});
/**
 * @ignore
 */ var Command_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/Command.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "Command", {
    enumerable: true,
    get: function() {
        return Command_1.default;
    }
});
/**
 * @ignore
 */ var ScanStream_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/ScanStream.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "ScanStream", {
    enumerable: true,
    get: function() {
        return ScanStream_1.default;
    }
});
/**
 * @ignore
 */ var Pipeline_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/Pipeline.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "Pipeline", {
    enumerable: true,
    get: function() {
        return Pipeline_1.default;
    }
});
/**
 * @ignore
 */ var AbstractConnector_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/connectors/AbstractConnector.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "AbstractConnector", {
    enumerable: true,
    get: function() {
        return AbstractConnector_1.default;
    }
});
/**
 * @ignore
 */ var SentinelConnector_1 = __turbopack_context__.r("[project]/node_modules/.pnpm/ioredis@5.6.1/node_modules/ioredis/built/connectors/SentinelConnector/index.js [app-rsc] (ecmascript)");
Object.defineProperty(exports, "SentinelConnector", {
    enumerable: true,
    get: function() {
        return SentinelConnector_1.default;
    }
});
Object.defineProperty(exports, "SentinelIterator", {
    enumerable: true,
    get: function() {
        return SentinelConnector_1.SentinelIterator;
    }
});
// No TS typings
exports.ReplyError = __turbopack_context__.r("[project]/node_modules/.pnpm/redis-errors@1.2.0/node_modules/redis-errors/index.js [app-rsc] (ecmascript)").ReplyError;
/**
 * @ignore
 */ Object.defineProperty(exports, "Promise", {
    get () {
        console.warn("ioredis v5 does not support plugging third-party Promise library anymore. Native Promise will be used.");
        return Promise;
    },
    set (_lib) {
        console.warn("ioredis v5 does not support plugging third-party Promise library anymore. Native Promise will be used.");
    }
});
/**
 * @ignore
 */ function print(err, reply) {
    if (err) {
        console.log("Error: " + err);
    } else {
        console.log("Reply: " + reply);
    }
}
exports.print = print;
}}),

};

//# sourceMappingURL=9f5c4_ioredis_built_3314c96a._.js.map