import rsa

def file_open(file):
    key_file = open(file, "rb")
    key_data = key_data.read()
    key_file.close()
    return key_data


publicKey = rsa.PublicKey.load_pkcs1(file_open("public.pem"))
arquivo = file_open("imagem.jpg")
assinatura = file_open("assinatura.imed")
try:
    rsa.verify(arquivo, assinatura, publicKey)
    print("Arquivo validado com sucesso!")
except:
    print("Assinatura Inválida!")