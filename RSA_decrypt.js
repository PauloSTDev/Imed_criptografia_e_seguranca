const crypto = require("crypto")
const {writeFileSync, readFileSync} = require("fs")

const privateKey = readFileSync("private.pem")

//Pega a chave publica de alguem
const dataCripto = readFileSync("data.cripto")

const decriptyData = crypto.privateDecrypt({
    key: privateKey,
    pading: crypto.constants.RSA_PKCS1_OAEP_PADDING,
    oaepHash: "sha256",
    passphrase: "minhasenha"
},dataCripto)

console.log(decriptyData.toString());



