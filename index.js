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

    // Need first 5 from hashed password to send with api call for k-anonymity
    var shortHashPasswordHex = hashPasswordToHex.substring(0,5);
    console.log(shortHashPasswordHex);

    // this sliced hash password is to get the corresponding object in the JSON answer (the first 5 are missing from the substring - K-anonymity)
    var slicedHashPasswordHex = hashPasswordToHex.slice(5);
    console.log(slicedHashPasswordHex);

    // building the get request
    // https://api.pwnedpasswords.com/range/
    const https = new XMLHttpRequest;
    const url = 'https://api.pwnedpasswords.com/range/' + shortHashPasswordHex;
    console.log(url);

    https.open("get", url);
    https.send();

    https.onreadystatechange=function(){
        if(this.readyState == 4 && this.status == 200)
        {
            console.log(https.responseText);
        }
    }

    return true;
}