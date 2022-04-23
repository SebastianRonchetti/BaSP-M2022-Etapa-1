const eMailField = document.querySelector('#eMail');
const passwordField = document.querySelector('#password');
const popUpField = document.querySelector('#pop-up');
var correctMail;
var correctPass;
//popUpField.style.visibility = 'hidden';

var mailAlert = document.createElement('p');
var mailAlertText = document.createTextNode('Invalid E-mail format');
mailAlert.style.fontSize = '12px';
mailAlert.style.color = 'red';
mailAlert.style.fontWeight = 'bold';
mailAlert.appendChild(mailAlertText);
mailAlert.style.visibility = 'hidden';

var passwordAlert = document.createElement('p');
var passwordAlertText = document.createTextNode('Invalid Password format');
passwordAlert.style.fontSize = '12px';
passwordAlert.style.color = 'red';
passwordAlert.style.fontWeight = 'bold';
passwordAlert.appendChild(passwordAlertText);
passwordAlert.style.visibility = 'hidden';

eMailField.addEventListener('blur', () => verifyMail(eMailField));
eMailField.addEventListener('focus', () => onMailFocus());

passwordField.addEventListener('blur', () => verifyPassword(passwordField));
passwordField.addEventListener('focus', () => onPasswordFocus())

function verifyMail(toVerify)
{
    //entiendo que hace pero no entiendo que es (mail format)
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var testResult = mailFormat.test(toVerify.value);
    if(!testResult){
        correctMail = false;
        eMailField.insertAdjacentElement('afterend', mailAlert);
        mailAlert.style.visibility = 'visible'
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
    const hasNumber = /\d+/.test(toVerifyPass.value);
    const hasLetters = /^(?!-)(?!.*-)[A-Za-z0-9-]+(?<!-)$/.test(toVerifyPass.value);
    var lengthOfPass = toVerifyPass.value.length;
    
    if(lengthOfPass < 8 || !hasLetters || !hasNumber){
        passwordField.insertAdjacentElement('afterend', passwordAlert);
        passwordAlert.style.visibility = 'visible'
    }
    else
    {
        correctPass = true;
    }
}

function onPasswordFocus(){
    passwordAlert.parentElement.removeChild(passwordAlert);
}

const fieldSection = document.querySelector('section.flex-container');

var resultSection = document.createElement('section');
resultSection.id = 'pop-up';
resultSection.classList.add('flex-container');

var text1 = document.createElement('p');
text1.classList.add('descriptor');
var text1Value = document.createTextNode('Email:');
text1.appendChild(text1Value);

var text2 = document.createElement('p');
text2.classList.add('descriptor');
var text2Value = document.createTextNode('Password: ');
text2.appendChild(text2Value);

resultSection.appendChild(text1, 'beforeend');
resultSection.appendChild(text2, 'beforeend');

const logInButton = document.querySelector('#login');

logInButton.addEventListener('click', () => onLogInClick());

function onLogInClick()
{
    if(correctPass && correctMail){
        text1Value.textContent = 'E-Mail: ' + eMailField.value;
        text2Value.textContent = 'Password: ' + passwordField.value;
        fieldSection.insertAdjacentElement('afterend', resultSection);
    }
    else
    {
        window.alert('Check for correct E-mail and password values');
    }
}