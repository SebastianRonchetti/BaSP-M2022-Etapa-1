const firstNameField = document.querySelector("#name");
const surNameField = document.querySelector("#surname");
const dniField = document.querySelector("#dni");
const birthDateField = document.querySelector("#birth");
const phoneField = document.querySelector("#phone");
const emailField = document.querySelector("#email");
const adressField = document.querySelector("#adress");
const locationField = document.querySelector("#location");
const postalField = document.querySelector("#postal");
const passwordField = document.querySelector("#password");
const passwordConfirmField = document.querySelector("#passwordConfirm");

function alertConstructor(alertToBuild, alertText)
{
    alertToBuild.style.visibility = "hidden";
    alertToBuild.style.fontSize = "12px";
    alertToBuild.style.color = "red";
    alertToBuild.style.fontWeight = "bold";
    alertToBuild.appendChild(alertText);
}

var nameAlert = document.createElement("p");
var nameAlertText = document.createTextNode('Invalid input');
alertConstructor(nameAlert, nameAlertText);
var surNameAlert = document.createElement("p");
var surNameAlertText = document.createTextNode('Invalid input');
alertConstructor(surNameAlert, surNameAlertText);
var dniAlert = document.createElement("p");
var dniAlertText = document.createTextNode('Invalid input');
alertConstructor(dniAlert, dniAlertText);
var birthDateAlert = document.createElement("p");
var birthDateAlertText = document.createTextNode('Invalid input');
alertConstructor(birthDateAlert, birthDateAlertText)
var phoneAlert = document.createElement("p");
var phoneAlertText = document.createTextNode('Invalid input');
alertConstructor(phoneAlert, phoneAlertText);
var emailAlert = document.createElement("p");
var emailAlertText = document.createTextNode('Invalid input');
alertConstructor(emailAlert, emailAlertText);
var adressAlert = document.createElement("p");
var adressAlertText = document.createTextNode('Invalid input');
alertConstructor(adressAlert, adressAlertText);
var locationAlert = document.createElement("p");
var locationAlertText = document.createTextNode('Invalid input');
alertConstructor(locationAlert, locationAlertText);
var postalAlert = document.createElement("p");
var postalAlertText = document.createTextNode('Invalid input');
alertConstructor(locationAlert, locationAlertText);
var passwordAlert = document.createElement("p");
var passwordAlertText = document.createTextNode('Invalid input');
alertConstructor(passwordAlert, passwordAlertText)
var passwordConfirmAlert = document.createElement("p");
var passwordConfirmAlertText = document.createTextNode('Invalid input');
alertConstructor(passwordConfirmAlert, passwordConfirmAlertText);


function hasLetters(toVerifyLetters)
{
    /*const hasLetters = /^(?!-)(?!.*-)[A-Za-z0-9-]+(?<!-)$/.test(toVerifyLetters.value);*/
    var arrToCheck = Array.from(toVerifyLetters.value);
    console.log(arrToCheck)
    console.log('hasLetters')
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
    console.log('hasnumbers')
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

function checkLengthBetween(toVerifyLength, targetLow, targetTop)
{
    var holder = toVerifyLength.value.length;
    if(targetLow >= holder || holder >= targetTop)
    {
        console.log(holder);
        return false;
    }
    else
    {
        console.log(holder);
        return true;
    }
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

function dateChecker(dateToCheck)
{
    var [day, month, year] = dateToCheck.value.split("/");
    var isoFormattedStr = `${year}-${month}-${day}`;

    var date = new Date(isoFormattedStr);

    var timestamp = date.getTime();

    if (typeof timestamp !== "number" || Number.isNaN(timestamp))
    {
        return false;
    }
    return date.toISOString().startsWith(isoFormattedStr);
}

var nameRight = false;
var surNameRight = false;
var dniRight = false;
var birthRight = false;
var phoneRight = false;
var mailRight = false;
var adressRight = false;
var locationRight
var postalRight = false;
var passwordRight = false;
var passwordConfirmRight = false;

function verifyName(toVerifyName)
{
    if(!checkLength(toVerifyName, 3) || hasNumber(toVerifyName))
    {
        toVerifyName.insertAdjacentElement("afterend", nameAlert);
        nameAlert.style.visibility = "visible";
        nameRight = false;
    }
    else
    {
        nameRight = true;
    }
}

function verifySurName(toVerifyName)
{
    if(!checkLength(toVerifyName, 3) || hasNumber(toVerifyName))
    {
        toVerifyName.insertAdjacentElement("afterend", surNameAlert);
        surNameAlert.style.visibility = "visible";
        surNameRight = false;
    }
    else
    {
        surNameRight = true;
    }
}

function verifyDNI(toVerifyDni)
{
    if(hasLetters(toVerifyDni) || checkLength(toVerifyDni, 7))
    {
        toVerifyDni.insertAdjacentElement("afterend", dniAlert);
        dniAlert.style.visibility = "visible";
        dniRight = false;
    }
    else
    {
        dniRight = true;
    }
}

function verifyDate(toVerifyDate)
{
    if(!dateChecker(toVerifyDate))
    {
        toVerifyDate.insertAdjacentElement("afterend", birthDateAlert);
        birthDateAlert.style.visibility = "visible";
        birthRight = false;
    }
    else
    {
        birthRight = true;
    }
}

function verifyPhone(toVerifyPhone)
{
    if(hasLetters(toVerifyPhone) || !checkLengthBetween(toVerifyPhone, 9, 11))
    {
        toVerifyPhone.insertAdjacentElement("afterend", phoneAlert);
        phoneAlert.style.visibility = "visible";
        phoneRight = false;
    }
    else
    {
        phoneRight = true;
    }
}

function verifyMail(toVerifyMail)
{    
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var testResult = mailFormat.test(toVerify.value);
    if(testResult)
    {        
        emailField.insertAdjacentElement("afterend", emailAlert);
        emailAlert.style.visibility = "visible";
        mailRight = false;
    }
    else
    {
        mailRight = true;
    }
}

function verifyAdress(toVerifyAdress)
{
    var space = toVerifyAdress.value.indexOf(" ");
    if(!hasLetters(toVerifyAdress) || !hasNumber(toVerifyAdress) || !space != -1)
    {
        adressField.insertAdjacentElement("afterend", adressAlert);
        adressAlert.style.visibility = "visible";
        adressRight = false;
    }
    else
    {
        adressRight = true;
    }
}

function verifyLocation(toVerifyLocation)
{
    if(!checkLength(toVerifyLocation, 3))
    {
        locationField.insertAdjacentElement("afterend", locationAlert);
        locationAlert.style.visibility = "visible";
        locationRight = false;
    }
    else
    {
        locationRight = true;
    }
}

function verifyPostal(toVerifyPostal)
{
    if(!checkLengthBetween(toVerifyPostal, 3, 6))
    {
        postalField.insertAdjacentElement("afterend", postalAlert);
        postalAlert.style.visibility = "visible";
        postalRight = false
    }
    else
    {
        postalRight = true;
    }
}

function verifyPassword(toVerifyPass)
{
    if(!hasLetters(toVerifyPass) || !hasNumber(toVerifyPass) || !checkLength(toVerifyPass, 8))
    {
        passwordField.insertAdjacentElement("afterend", passwordAlert);
        passwordAlert.style.visibility = "visible";
        passwordRight = false;
    }
    else
    {
        passwordRight = true;
    }
}

function verifyPasswordConfirmed(toVerifyPassConf, comparePass)
{
    if(!hasLetters(toVerifyPassConf) || !hasNumber(toVerifyPassConf) 
    || !checkLength(toVerifyPassConf, 8) || toVerifyPassConf.value !== comparePass.value)
    {
        passwordConfirmField.insertAdjacentElement("afterend", passwordConfirmAlert);
        passwordConfirmAlert.style.visibility = "visible";
        passwordConfirmRight = false;
    }
    else
    {
        passwordConfirmRight = true;
    }
}

function onNameFocus()
{
    nameAlert.parentElement.removeChild(nameAlert);
}

function onSurnameFocus()
{
    surNameAlert.parentElement.removeChild(surNameAlert);
}

function onDniFocus()
{
    dniAlert.parentElement.removeChild(dniAlert);
}

function onBirthFocus()
{
    birthDateAlert.parentElement.removeChild(birthDateAlert);
}

function onPhoneFocus()
{
    phoneAlert.parentElement.removeChild(phoneAlert);
}

function onMailFocus()
{
    emailAlert.parentElement.removeChild(emailAlert);
}

function onAdressFocus()
{
    adressAlert.parentElement.removeChild(adressAlert);
}

function onLocationFocus()
{
    locationAlert.parentElement.removeChild(locationAlert);
}

function onPostalFocus()
{
    postalAlert.parentElement.removeChild(postalAlert);
}

function onPasswordFocus()
{
    passwordAlert.parentElement.removeChild(passwordAlert);
}

function onFocus()
{
    passwordConfirmAlert.parentElement.removeChild(passwordConfirmAlert);
}

firstNameField.addEventListener("blur", function()
{
    verifyName(firstNameField);
});
firstNameField.addEventListener("focus", function()
{
    onNameFocus();
});

surNameField.addEventListener("blur", function()
{
    verifySurName(surNameField);
});
surNameField.addEventListener("focus", function()
{
    onSurnameFocus();
});

dniField.addEventListener("blur", function()
{
    verifyDNI(dniField);
} );
dniField.addEventListener("focus", function()
{
    onDniFocus();
});

birthDateField.addEventListener("blur", function()
{
    verifyDate(birthDateField);
});
birthDateField.addEventListener("focus", function()
{
    onBirthFocus();
});

phoneField.addEventListener("blur", function()
{
    verifyPhone(phoneField);
});
phoneField.addEventListener("focus", function()
{
    onPhoneFocus();
});

emailField.addEventListener("blur", function()
{
    verifyMail(emailField);
});
emailField.addEventListener("focus", function()
{
    onMailFocus();
});

adressField.addEventListener("blur", function()
{
    verifyAdress(adressField);
});
adressField.addEventListener("focus", function()
{
    onAdressFocus();
});

locationField.addEventListener("blur", function()
{
    verifyLocation(locationField);
});
locationField.addEventListener("focus", function()
{
    onLocationFocus();
});

postalField.addEventListener("blur", function()
{
    verifyPostal(postalField);
});
postalField.addEventListener("focus", function()
{
    onPostalFocus();
});

passwordField.addEventListener("blur", function()
{
    verifyPassword(passwordField);
});
passwordField.addEventListener("focus", function()
{
    onPasswordFocus();
});

passwordConfirmField.addEventListener("blur", function()
{
    verifyPasswordConfirmed(passwordConfirmField, passwordField)
    console.log('function call')
});
passwordConfirmField.addEventListener("focus", function()
{
    onPassConFocus();
});

var resultSection = document.createElement("section");
resultSection.id = "pop-up";
resultSection.classList.add("flex-container");

var fields1 = document.createElement("div");
fields1.classList.add("fields","flex-container");

var fields2 = document.createElement("div");
fields2.classList.add("fields","flex-container");

var fields3 = document.createElement("div");
fields3.classList.add("fields","flex-container");

var fields4 = document.createElement("div");
fields4.classList.add("fields","flex-container");

var nameResult = document.createElement("p");
nameResult.classList.add("descriptor")
var nameResultText = document.createTextNode('Name: ' + firstNameField.value);
nameResult.appendChild(nameResultText);

var surNameResult = document.createElement("p");
surNameResult.classList.add("descriptor")
var surNameResultText = document.createTextNode('Surname: ' + surNameField.value);
surNameResult.appendChild(surNameResultText);

var dniResult = document.createElement("p");
dniResult.classList.add("descriptor")
var dniResultText = document.createTextNode('DNI: ' + dniField.value);
dniResult.appendChild(dniResultText);

var birthResult = document.createElement("p");
birthResult.classList.add("descriptor")
var birthResultText = document.createTextNode('Date of Birth: ' + birthDateField.value);
birthResult.appendChild(birthResultText);

var phoneResult = document.createElement("p");
phoneResult.classList.add("descriptor")
var phoneResultText = document.createTextNode('Phone: ' + phoneField.value);
phoneResult.appendChild(phoneResultText);

var emailResult = document.createElement("p");
emailResult.classList.add("descriptor")
var emailResultText = document.createTextNode('Email: ' + emailField.value);
emailResult.appendChild(emailResultText);

var adressResult = document.createElement("p");
adressResult.classList.add("descriptor")
var adressResultText = document.createTextNode('Adress: ' + adressField.value);
adressResult.appendChild(adressResultText);

var locationResult = document.createElement("p");
locationResult.classList.add("descriptor")
var locationResultText = document.createTextNode('Location: ' + locationField.value);
locationResult.appendChild(locationResultText);

var postalResult = document.createElement("p");
postalResult.classList.add("descriptor")
var postalResultText = document.createTextNode('Postal: ' + postalField.value);
postalResult.appendChild(postalResultText);

var passwordResult = document.createElement("p");
passwordResult.classList.add("descriptor")
var passwordResultText = document.createTextNode('Password' + passwordField.value);
passwordResult.appendChild(passwordResultText);

var passwordConfirmResult = document.createElement("p");
passwordConfirmResult.classList.add("descriptor")
var passwordConfirmResultText = document.createTextNode('Password Confirmation: '
    + passwordConfirmField.value);
passwordConfirmResult.appendChild(passwordConfirmResultText);

fields1.appendChild(nameResult);
fields1.appendChild(surNameResult);
fields1.appendChild(dniResult);

fields2.appendChild(birthResult);
fields2.appendChild(phoneResult);
fields2.appendChild(emailResult);

fields3.appendChild(adressResult);
fields3.appendChild(locationResult);
fields3.appendChild(postalResult);

fields4.appendChild(passwordResult);
fields4.appendChild(passwordConfirmResult);

resultSection.appendChild(fields1);
resultSection.appendChild(fields2);
resultSection.appendChild(fields3);
resultSection.appendChild(fields4);

const fieldSection = document.querySelector(".form-section.flex-container");

var nameRight = false;
var surNameRight = false;
var dniRight = false;
var birthRight = false;
var phoneRight = false;
var mailRight = false;
var adressRight = false;
var locationRight
var postalRight = false;
var passwordRight = false;
var passwordConfirmRight = false;

function displayResults()
{
    if(!nameRight || !surNameRight || !dniRight || !birthRight || !phoneRight || !mailRight || 
        !adressRight || !locationRight || !postalRight || !passwordRight || !passwordConfirmRight)
    {
        window.alert('Complete the fields properly. \nOne or more fields are incorrect or empty');
    }
    else
    {
        fieldSection.insertAdjacentElement("afterend", resultSection);
        resultSection.style.visibility = "visible";
    }
}

var submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", function()
{
    displayResults()
});