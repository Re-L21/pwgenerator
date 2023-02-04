let passwordLength = document.getElementById("passwordLength")
let password = document.getElementById("password")
let saveBtn = document.getElementById("saveButton")

function GeneratePassword(len) {
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numeric = "0123456789"
    const symbol = "!@#$%^&*()_+=-{}[]';:/?,.<>~`"

    let generator ='';

    const data = lowerAlphabet + upperAlphabet + numeric + symbol

    for (let index = 0; index < len; index++) {
        // ~~ means Math.floor
        generator += data[~~(Math.random() * data.length)]
        
    }

    return generator

}

function GetPassword() {
    const newPass = GeneratePassword(passwordLength.value)
    setTimeout(() => {
        alert('Password has been generated')
        password.value = newPass
        
    }, 1000);


}

function SavePassword() {
    
    document.title = password.value

    saveBtn.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`Generated Password : ${document.title} `))
    saveBtn.setAttribute('download', 'MyGeneratedPassword.txt')
    setTimeout(() => {
        alert('Berhasil Disimpan')
    }, 1000)

}