// CLEAR FORM IN THE CONTACT.HTML PAGE
const clearBtn = document.querySelector('#clearBtn');


clearBtn.addEventListener('click', () => {

    const nameField = document.querySelector('input[name="name"]');
    const emailField = document.querySelector('input[name="email"]');
    const messageField = document.querySelector('textarea[name="message"]');

    nameField.value = '';
    emailField.value = '';
    messageField.value = '';
});


