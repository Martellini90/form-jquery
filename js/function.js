// Wait for the DOM to be ready
$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='registration']").validate({
    // Inserire Regole di validazione
    rules: {
    'nome' : {
                    required : true, // Definisco il campo login come obbligatorio
                    maxlength : 100, // Imposto la lunghezza massima per il campo
                },

                'email' : {
                    required : true, 
                    email : true, // Definisco il campo email come un campo di tipo email
                },

                'telefono' : {
                    required : true,
                    maxlength : 200,
                },

                'messaggio' : {
                    required : true,
                    maxlength : 1000,
                }  // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      firstname: "required",
      lastname: "required",
      email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
      password: {
        required: true,
        minlength: 5
      }
    },
    // Specify validation error messages
    messages: {
      firstname: "Please enter your firstname",
      lastname: "Please enter your lastname",
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long"
      },
      email: "Please enter a valid email address"
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});