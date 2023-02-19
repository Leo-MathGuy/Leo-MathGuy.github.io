"""PEP 8 is having emotional damage right now"""
import caesarcipher, base64
list_1 = [str(ord(y)) for y in base64.b64encode(''.join([str(hex(ord(x)))[2:].upper() for x in caesarcipher.CaesarCipher("7"+input("Encode: "), offset=7).encoded]).encode("ascii")).decode("ascii")]
while len(list_1) % 3 != 0:
    list_1.append('0')

list_2 = []
for i in range(0, len(list_1), 3):
    list_2.append([int(list_1[i]),int(list_1[i+1]),int(list_1[i+2])])

print(list_2)