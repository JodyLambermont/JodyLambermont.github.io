function dataFetcher()
{
    // getting the password value
    var password = document.getElementById("PasswordToCheck").value;
    console.log(password);

    // hashing the password to sha1
    // sha1 is required to use have i been pwned API
    var hashPassword = CryptoJS.SHA1(password);
    console.log(hashPassword);

    // transforming to hexadecimal
    var hashPasswordToHex = hashPassword.toString(CryptoJS.enc.Hex);
    console.log(hashPasswordToHex);

    var shortHashPasswordToHex = hashPasswordToHex.substring(0,5);
    console.log(shortHashPasswordToHex);


    return true;
}