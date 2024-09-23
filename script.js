// Animacion de vista
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });
  
    elements.forEach(element => {
      observer.observe(element);
    });
  });
  
  // formulario de contacto 
  
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const subjectInput = document.getElementById("phone");
  const messageInput = document.getElementById("comment");
  const submitBtn = document.getElementById("submitBtn");
  
  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const subjectError = document.getElementById("subject-error");
  const messageError = document.getElementById("message-error");
  const charCount = document.getElementById("char-count");
  
  // Función para validar el formulario
  function validateForm() {
      let isValid = true;
  
      // Validar campo Nombre
      const name = nameInput.value.trim();
      if (name === "") {
          nameError.textContent = "El campo Nombre no debe estar en blanco.";
          isValid = false;
      } else if (name.length > 50) {
          nameError.textContent = "El campo Nombre no debe exceder los 50 caracteres.";
          isValid = false;
      } else {
          nameError.textContent = "";
      }
  
      // Validar campo Email
      const email = emailInput.value.trim();
      const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
      if (email === "") {
          emailError.textContent = "El campo Email no debe estar en blanco.";
          isValid = false;
      } else if (!emailPattern.test(email)) {
          emailError.textContent = "El formato del correo no es válido.";
          isValid = false;
      } else {
          emailError.textContent = "";
      }
  
      // Validar campo Asunto (phone)
      const subject = subjectInput.value.trim();
      if (subject === "") {
          subjectError.textContent = "El campo Asunto no debe estar en blanco.";
          isValid = false;
      } else if (subject.length > 50) {
          subjectError.textContent = "El campo Asunto no debe exceder los 50 caracteres.";
          isValid = false;
      } else {
          subjectError.textContent = "";
      }
  
      // Validar campo Mensaje
      const message = messageInput.value.trim();
      if (message === "") {
          messageError.textContent = "El campo Mensaje no debe estar en blanco.";
          isValid = false;
      } else if (message.length > 300) {
          messageError.textContent = "El campo Mensaje no debe exceder los 300 caracteres.";
          isValid = false;
      } else {
          messageError.textContent = "";
      }
  
      // Activar/desactivar el botón de enviar según la validez del formulario
      submitBtn.disabled = !isValid;
  }
  
  // Función para actualizar el contador de caracteres
  function updateCharCount() {
      const maxLength = 300;
      const currentLength = messageInput.value.length;
  
      // Actualiza el contador en el formato "0/300"
      charCount.textContent = `${currentLength}/${maxLength}`;
  
      // Mostrar mensaje cuando se alcanza el límite
      if (currentLength > maxLength) {
          charCount.textContent = `300/${maxLength}`; // Cuando excede el límite
      }
  
      // Actualizar la validez del formulario
      validateForm();
  }
  
  // Actualizar el contador de caracteres
  messageInput.addEventListener("input", function() {
    validateForm();
    charCount.textContent = `${messageInput.value.length}/300`;
  });
  
  // Reiniciar el contador de caracteres después de enviar el formulario
  document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    validateForm();
  
    if (!submitBtn.disabled) {
        alert("Formulario enviado correctamente");
        document.getElementById("contactForm").reset(); // Limpiar el formulario
        submitBtn.disabled = true; // Desactivar el botón después del envío
        charCount.textContent = "0/300"; // Reiniciar el contador de caracteres
    }
  });
  
  
  // Añadir eventos de escucha a los inputs para validar en tiempo real
  nameInput.addEventListener("input", validateForm);
  emailInput.addEventListener("input", validateForm);
  subjectInput.addEventListener("input", validateForm);
  messageInput.addEventListener("input", updateCharCount);
  
  // Validar el formulario al enviarlo
  document.getElementById("contactForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Evita que el formulario se envíe si hay errores
      validateForm();
  
      // Si todo es válido, enviar el formulario
      if (!submitBtn.disabled) {
          alert("Formulario enviado correctamente");
          document.getElementById("contactForm").reset(); // Limpiar el formulario
          submitBtn.disabled = true; // Desactivar el botón después del envío
      }
  });
  