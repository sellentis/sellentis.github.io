var form = document.querySelector('.formWithValidation');
var validateBtn = form.querySelector('.validateBtn');

var firstName = form.querySelector('.firstNameInput');
var lastName = form.querySelector('.lastNameInput');
var email = form.querySelector('.emailInput');
var website = form.querySelector('.websiteInput');
var message = form.querySelector('.messageInput')


form.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log('clicked on validate')
  console.log('firstName: ', firstName.value)
  console.log('lastName: ', lastName.value)
  console.log('email: ', email.value)
  console.log('website: ', website.value)
  console.log('message: ', message.value)
})

var fields = form.querySelectorAll('.field')

form.addEventListener('submit', function (event) {
  event.preventDefault()

  for (var i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      console.log('field is blank', fields[i])
      $(form[i]).css("border-color","red")
    }
  }
})
