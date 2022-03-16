import rsa
import base64

def file_open(file):
    key_file = open(file, "rb")
    key_data = key_data.read()
    key_file.close()
    return key_data

privateKey = rsa.PrivateKey.load_pkcs1( file_open("private.pem"))
#Precisa de uma imagem a partir daqui
arquivo = file_open("imagem.jpg")
hashValue = rsa.compute_hash(arquivo, "SHA-512")
print("Hash: ", base64.b64encode(hashValue).decode())

signature = rsa.sign(arquivo, privateKey, "SHA-512")
#Gera o arquivo com hash
s = open("assinatura.imed", "wb")
s.write(signature)
s.close