$().ready( 
    function() {
        // Selezione form e definizione dei metodi di validazione
        $("#form").validate({
            // Inserire Regole di validazione
            rules : {
                // login - nome del campo di input da validare
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
                }
            },

            //Messaggio di Errore
            messages: {
                'nome': {
                    required : "Inserisci il Tuo Nome",
                    maxlength : "Lunghezza Massima 100 caratteri",
                },

                'email': {
                    required : "Inserisci la tua Mail, è necessario per poterti ricontattare",
                    maxlength: "Lunghezza Massima 200 caratteri"
                },

                'telefono': {
                    required : "Inserisci un numero di Telefono (fisso o cellulare),è necessario per poterti ricontattare",
                },

                'messaggio' : {
                    required : "Scrivi qui il motivo per cui hai deciso di contattarci",
                    maxlength : "Lunghezza Massima 1000 caratteri",
                }
            },

            // Settiamo il submit handler per la form
            submitHandler: function(form) {
                form.submit();
            }
        });
});