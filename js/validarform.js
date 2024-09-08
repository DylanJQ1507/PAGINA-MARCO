(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        //regex para verificar los campos
        var regex = /^[^\d]*$/
        var regexmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        //obtener los valores de todos los campos
        var name = form.querySelector('#fullname')
        var email = form.querySelector('#email')
        var phone = form.querySelector('#phone')
        const phonel=parseInt(phone.value)
    var coment =form.querySelector
        if (!form.checkValidity()) {
          if (!regex.test(name.value) || name.value == "") {
            name.classList.remove("is-valid")
            name.classList.add("is-invalid")
          } else {
            name.classList.remove("is-invalid")
            name.classList.add("is-valid")
          }
          if (!regexmail.test(email.value)) {
            email.classList.remove("is-valid")
            email.classList.add("is-invalid")
          } else {
            email.classList.remove("is-invalid")
            email.classList.add("is-valid")
          } if (isNaN(phonel) || phone.value == "") {
            phone.classList.remove("is-valid")
            phone.classList.add("is-invalid")
          } else {
            phone.classList.remove("is-invalid")
            phone.classList.add("is-valid")
          }
          event.preventDefault()
          event.stopPropagation()
        } else {
          alert("listo")
         
          form.reset()
          name.classList.remove("is-valid")
          name.classList.remove("is-invalid")
          email.classList.remove("is-valid")
          email.classList.remove("is-invalid")
          phone.classList.remove("is-valid")
          phone.classList.remove("is-invalid")
        }
  
  
  
      }, false)
    })
  })()