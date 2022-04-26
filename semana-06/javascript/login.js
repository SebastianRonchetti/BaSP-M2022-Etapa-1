const eMailField = document.querySelector("#eMail");
const passwordField = document.querySelector("#password");
const popUpField = document.querySelector("#popup");
var correctMail;
var correctPass;
//popUpField.style.visibility = "hidden";

var mailAlert = document.createElement("p");
var mailAlertText = document.createTextNode('Invalid E-mail format');
mailAlert.style.fontSize = "12px";
mailAlert.style.color = "red";
mailAlert.style.fontWeight = "bold";
mailAlert.appendChild(mailAlertText);
mailAlert.style.visibility = "hidden";

var passwordAlert = document.createElement("p");
var passwordAlertText = document.createTextNode('Invalid Password format');
passwordAlert.style.fontSize = "12px";
passwordAlert.style.color = "red";
passwordAlert.style.fontWeight = "bold";
passwordAlert.appendChild(passwordAlertText);
passwordAlert.style.visibility = "hidden";

function hasLetters(toVerifyLetters)
{
    /*const hasLetters = /^(?!-)(?!.*-)[A-Za-z0-9-]+(?<!-)$/.test(toVerifyLetters.value);*/
    var arrToCheck = Array.from(toVerifyLetters.value);
    console.log(arrToCheck)
    for(var i = 0; i < arrToCheck.length; i++)
    {
        if(isNaN(arrToCheck[i]))
        {
            console.log(arrToCheck[i]);
            return true;
        }
    }
    return false;
}

function hasNumber(toVerifyNumber)
{
    /*const hasNumber = /\d+/.test(toverifyNumber.value);*/
    var arrToCheck = Array.from(toVerifyNumber.value);
    for(var i = 0; i < arrToCheck.length; i++)
    {
        if(!isNaN(arrToCheck[i]))
        {
            console.log(arrToCheck[i]);
            return true;
        }
    }
    return false;
}

function checkLength(toVerifyLength, targetLow)
{
    var holder = toVerifyLength.value.length
    console.log(holder)
    if(holder < targetLow)
    {
        console.log('not big enough')
        return false;
    }
    else
    {
        console.log('pass length')
        return true;
    }
}

eMailField.addEventListener("blur", function()
{
    verifyMail(eMailField);
});
eMailField.addEventListener("focus", function()
{
    onMailFocus();
});

passwordField.addEventListener("blur", function() 
{
    verifyPassword(passwordField);
});
passwordField.addEventListener("focus", function()
{
    onPasswordFocus();
})

function verifyMail(toVerify)
{
    //entiendo que hace pero no entiendo que es (mail format)
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var testResult = mailFormat.test(toVerify.value);
    if(!testResult){
        correctMail = false;
        eMailField.insertAdjacentElement("afterend", mailAlert);
        mailAlert.style.visibility = "visible"
    }
    else
    {
        correctMail = true;
    }
}

function onMailFocus()
{
    mailAlert.parentElement.removeChild(mailAlert);
}

function verifyPassword(toVerifyPass)
{
    if(lengthOfPass < 8 || !hasLetters(toVerifyPass) || !hasNumber(toVerifyPass))
    {
        passwordField.insertAdjacentElement("afterend", passwordAlert);
        passwordAlert.style.visibility = "visible"
    }
    else
    {
        correctPass = true;
    }
}

function onPasswordFocus(){
    passwordAlert.parentElement.removeChild(passwordAlert);
}

const fieldSection = document.querySelector(".form-section.flex-container");

var resultSection = document.createElement("section");
resultSection.id = "popup";
resultSection.classList.add("flex-container");

var text1 = document.createElement("p");
text1.classList.add("descriptor");
var text1Value = document.createTextNode('Email:');
text1.appendChild(text1Value);

var text2 = document.createElement("p");
text2.classList.add("descriptor");
var text2Value = document.createTextNode('Password: ');
text2.appendChild(text2Value);

resultSection.appendChild(text1, "beforeend");
resultSection.appendChild(text2, "beforeend");

const logInButton = document.querySelector("#login");

function onLogInClick()
{
    if(correctPass && correctMail){
        text1Value.textContent = 'E-Mail: ' + eMailField.value;
        text2Value.textContent = 'Password: ' + passwordField.value;
        fieldSection.insertAdjacentElement("afterend", resultSection);
    }
    else
    {
        window.alert('Check for correct E-mail and password values');
    }
}

logInButton.addEventListener("click", function()
{
    onLogInClick()
});