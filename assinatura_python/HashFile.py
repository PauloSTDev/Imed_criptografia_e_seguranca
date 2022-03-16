import hashlib

md5 = hashlib.md5()
sha1 = hashlib.sha1()

//Qualquer mudança altera o hash
//Se usar os dois hashs ao mesmo tempo da conflito, usar um por vez
data = open("doc.txt", "rb")
md5.update(data.read())
sha1.update(daa.read())

print("MD5:", md5.hexdigest())
//print("SHA1:", sha1.hexdigest())