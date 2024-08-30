const formData = {
  email: '',
  message: '',
};

const messageForm = document.querySelector('.feedback-form');

const fillFormFields = () => {
  const formDataFormLS = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );
  if (formDataFormLS === null) {
    return;
  }

  for (const key in formDataFormLS) {
    if (formDataFormLS.hasOwnProperty(key)) {
      messageForm.elements[key].value = formDataFormLS[key];
    }
  }
};

fillFormFields();

const onFormFieldInput = event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

messageForm.addEventListener('input', onFormFieldInput);

const onMessageFormSubmit = event => {
  event.preventDefault();
  event.target.reset();
  localStorage.removeItem('feedback-form-state');
  if (!formData.email || !formData.message) {
    alert('Please fill all fields');
  } else {
    console.log(formData);
  }
};

messageForm.addEventListener('submit', onMessageFormSubmit);
