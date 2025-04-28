let passwordBox = document.querySelector("#password");
const generateBtn = document.querySelector("#btn");
let Copy = document.querySelector(".copy");

const alphabets = () => {
    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return alphabet[Math.floor(Math.random() * alphabet.length)];
};

const numbers = () => {
    const number = "0123456789";
    return number[Math.floor(Math.random() * number.length)];
};

const symbols = () => {
    const symbol = "!@#$%^&*()_+{}[]|:;<>,.?/~`-=";
    return symbol[Math.floor(Math.random() * symbol.length)];
};

const generate = () => {
    let password = "";
    const allFunctions = [alphabets, numbers, symbols];
    for (let i = 0; i < 12; i++) {
        let randomFunc = allFunctions[Math.floor(Math.random() * allFunctions.length)];
        password += randomFunc();
    }
    passwordBox.value = password;
};

const copyFunction = () => {
    passwordBox.select();
    document.execCommand("copy");
    alert("Password Copied!");
};

generateBtn.addEventListener("click", generate);
Copy.addEventListener("click", copyFunction);