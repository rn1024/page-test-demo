import CryptoJS from "crypto-js";

const key = "F09ED908";
const keyHex = CryptoJS.enc.Utf8.parse(key);

// des加密,isHex表示结果是否有密文,输出hex,否则输出base64
// key为加密的秘钥。message 为需要加密的信息
let encryptDES = function (message) {
    var keyHex = CryptoJS.enc.Utf8.parse('F09ED908')
    var option = { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 }
    var encrypted = CryptoJS.DES.encrypt(message, keyHex, option)
    return encrypted.ciphertext.toString().toUpperCase()
}

// DES 解密,isHex表示对hex解密,否则对base64解密
let decryptDES = (ciphertext, isHex = true) => {
    if (isHex) ciphertext = CryptoJS.enc.Hex.parse(ciphertext)
    else ciphertext = CryptoJS.enc.Base64.parse(ciphertext)
    var decrypted = CryptoJS.DES.decrypt({ ciphertext }, keyHex, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
}

export {
    encryptDES, decryptDES
}