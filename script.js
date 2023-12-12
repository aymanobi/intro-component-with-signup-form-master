const firstNameInput = document.querySelector("#name");
const lastNameInput = document.querySelector("#lastname");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

const nameImage = document.getElementById('name_img');
const lastImage = document.getElementById('last_img');
const emailImage = document.getElementById('email_img');
const passImage = document.getElementById('pass_img');

const formSubmitButton = document.querySelector("#form_submit");

const name_error = document.querySelector(".name_error")
const last_error = document.querySelector(".last_error")
const email_error = document.querySelector(".email_error")
const password_error = document.querySelector(".password_error")

const br_name = document.querySelector(".br_name")
const br_last = document.querySelector(".br_last")
const br_email = document.querySelector(".br_email")
const br_pass = document.querySelector(".br_pass")

br_name.addEventListener('click', () => {
    br_name.style.border = '1px solid hsl(248, 32%, 49%)'
})

br_last.addEventListener('click', () => {
    br_last.style.border = '1px solid hsl(248, 32%, 49%)'
})

br_email.addEventListener('click', () => {
    br_email.style.border = '1px solid hsl(248, 32%, 49%)'
})

br_pass.addEventListener('click', () => {
    br_pass.style.border = '1px solid hsl(248, 32%, 49%)'
})

const validateForm = (e) => {
    e.preventDefault();

    if (firstNameInput.value === '') {
        nameImage.style.display = 'block';
        name_error.style.display = 'block';
        br_name.style.border = '1px solid hsl(0, 100%, 74%)'
    } else {
        nameImage.style.display = 'none';
        name_error.style.display = 'none'
        br_name.style.border = '1px solid hsl(248, 32%, 49%)'
    }

    if (lastNameInput.value === '') {
        lastImage.style.display = 'block';
        last_error.style.display = 'block';
        br_last.style.border = '1px solid hsl(0, 100%, 74%)'
    } else {
        lastImage.style.display = 'none';
        last_error.style.display = 'none';
        br_last.style.border = '1px solid hsl(248, 32%, 49%)'
    }

    if (emailInput.value === '') {
        emailImage.style.display = 'block';
        email_error.style.display = 'block';
        br_email.style.border = '1px solid hsl(0, 100%, 74%)'
    } else {
        emailImage.style.display = 'none';
        email_error.style.display = 'none'
        br_email.style.border = '1px solid hsl(248, 32%, 49%)'
    }

    if (passwordInput.value === '') {
        passImage.style.display = 'block';
        password_error.style.display = 'block';
        br_pass.style.border = '1px solid hsl(0, 100%, 74%)'
    } else {
        passImage.style.display = 'none';
        password_error.style.display = 'none'
        br_pass.style.border = '1px solid hsl(248, 32%, 49%)'
    }

};

formSubmitButton.addEventListener('click', validateForm);
