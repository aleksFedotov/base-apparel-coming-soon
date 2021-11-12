const btn = document.querySelector('.btn');
const errorMsg = document.querySelector('.error-msg');
const errorIcon = document.querySelector('.error-icon');
const input = document.querySelector('.form-input');
const form = document.querySelector('.content-form');

console.log(form);

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

btn /
  addEventListener('submit', (e) => {
    e.preventDefault();
    form.classList.remove('error');
    if (input.value.trim() === '' || !validateEmail(input.value.trim())) {
      form.classList.add('error');
    }
  });
