const crypto = require("crypto")
//fs = File System
const {writeFileSync, readFileSync} = require("fs")
const {privateKey, publicKey} = crypto.generateKeyPairSync(
    "rsa",
    {
        modulusLenght: 4096,
        publicKeyEncoding : {
            type: "pkcs1",
            format: "pem"
        },
        privateKeyEncoding : {
            type: "pkcs1",
            format: "pem",
            cipher: "aes-256-cbc",
            passphase: "minhasenha"
        }
    }
)


writeFileSync("private.pem", privateKey)
writeFileSync("public.pem", publicKey)