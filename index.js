const form = document.getElementById('form');
const email = document.getElementById('email');
const number = document.getElementById('number');

form.addEventListener('sumbit', e=> {
  e.preventDefault();
  validateInputs();
});
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validate Inputs = () => {
  const emailValue = document.getElementById('email');
  const numberValue = document.getElementById('number');
}

if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }
if(number === '') {
        setError(number, 'Phone number is required');
    } else if (passwordValue.length < 10 ) {
        setError(password, 'Invalid phone number.')
    } else {
        setSuccess(password);
    }
