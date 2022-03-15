var md5 = require("crypto-js/md5")
var sha256 = require("crypto-js/sha256")

var hashMd5 = md5("Teste")
var hashSha256 = sha256("Teste")

console.log("Teste MD5: ", hashMd5.toString())
console.log("Teste Sha256", hashSha256.toString())
