const crypto = require("crypto")
const {writeFileSync, readFileSync} = require("fs")

const data ="Meus dados Secretos 5499999999"
const publicKey = readFileSync("public.pem")

const encriptData = crypto.publicEncrypt(
    {
        key: publicKey,
        pading: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: "sha256"
    },
    Buffer.from(data)
)

//Esse arquivo será binário, sem extensão
writeFileSync("data.cripto", encriptData)
console.log("Dados Criptografados: ", encriptData.toString("base64"));