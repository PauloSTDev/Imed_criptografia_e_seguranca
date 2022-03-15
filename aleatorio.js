const bcrypt = require("bcrypt")

function getPassWordHash(pass) {
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(pass, salt)
}

hashPass = getPassWordHash("Imed123")
console.log(hashPass)

var autenticou = bcrypt.compareSync("Imed123", "$2b$10$4KKFSYjnmiPqJmJpp23x7.kbGdq.dDyT9BblTYeCkAC32Ub2XBIOy")
console.log(autenticou)

