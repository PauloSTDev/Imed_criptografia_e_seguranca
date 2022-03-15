var criptoJs = require("crypto-js")
var pass = "IMED"
var body = "Estou criptografando a mensagem"
var cipher = criptoJs.AES.encrypt(body, pass).toString()
console.log(cipher)

var bytes = criptoJs.AES.decrypt(cipher, "Im3d")
var originalBody = bytes.toString(criptoJs.enc.Utf8)
console.log("Decript:", originalBody)
