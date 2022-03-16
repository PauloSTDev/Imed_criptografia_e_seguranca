# pip install RSA

import rsa

(pubKey, privKey) = rsa.newKeys(2048)

with open("public.pem" , "wb") as key_file:
    key_file.write(pubKey.save_pkcs1("PEM"))

with open("private.pem" , "wb") as key_file:
    key_file.write(privKey.save_pkcs1("PEM"))