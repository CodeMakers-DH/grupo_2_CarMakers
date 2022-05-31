window.addEventListener('load', function(){
    let formRegister = document.querySelector('#form-register');
    let name = document.querySelector('.name-register');
    let textName = document.querySelector('.text-name');

    let lastName = document.querySelector('.lastname-register');
    let textLastname = document.querySelector('.text-lastname');

    let email = document.querySelector('.email-register');
    let textEmail = document.querySelector('.text-email');

    let password = document.querySelector('.password-register');
    let textPassword = document.querySelector('.text-password');


    let img = document.querySelector('.img-register');
    let imgText = document.querySelector('.text-image');



    //NAME

    name.addEventListener('focus', function(){
        let textCaracteres = "<br><small>El nombre debe tener al menos 2 caracteres.</small>"
        let textObligatorio = "<small>Este campo es obligatorio.</small>"
        textName.innerHTML = textObligatorio;
        textName.innerHTML += textCaracteres;
      })

    name.addEventListener('change', function(){

        if(name.value.length >= 2){
            name.style.backgroundColor = 'lightgreen';
            textName.innerHTML = '';
        }  else if(name.value.length < 2) {
            name.style.backgroundColor = 'pink';
            let textCaracteres = "<br><small>El nombre debe tener al menos 2 caracteres.</small>"
            let textObligatorio = "<small>Este campo es obligatorio.</small>"
            textName.innerHTML = textObligatorio;
            textName.innerHTML += textCaracteres;
        }
    })

    //LASTNAME

    lastName.addEventListener('focus', function(){
        let textCaracteres = "<br><small>El apellido debe tener al menos 2 caracteres.</small>"
        let textObligatorio = "<small>Este campo es obligatorio.</small>"
        textLastname.innerHTML = textObligatorio;
        textLastname.innerHTML += textCaracteres;
      })

    lastName.addEventListener('change', function(){

        if(lastName.value.length >= 2){
            lastName.style.backgroundColor = 'lightgreen';
            textLastname.innerHTML = '';
        }  else if(lastName.value.length < 2) {
            lastName.style.backgroundColor = 'pink';
            let textCaracteres = "<br><small>El apellido debe tener al menos 2 caracteres.</small>"
            let textObligatorio = "<small>Este campo es obligatorio.</small>"
            textLastname.innerHTML = textObligatorio;
            textLastname.innerHTML += textCaracteres;
        }
    })

    //EMAIL

    email.addEventListener('focus', function(){
        let textFormato = "<br><small>El email debe tener un formato válido.</small>"
        let textObligatorio = "<small>Este campo es obligatorio.</small>"
        textEmail.innerHTML = textObligatorio;
        textEmail.innerHTML += textFormato;
    })

    
    email.addEventListener('change', function(){
        if(email.value.match(/[@]/) && email.value.match(/[.]/)){
            email.style.backgroundColor = 'lightgreen';
            textEmail.innerHTML = '';
        } else {
            email.style.backgroundColor = 'pink';
            let textFormato = "<br><small>El email debe tener un formato válido.</small>"
            let textObligatorio = "<small>Este campo es obligatorio.</small>"
            textEmail.innerHTML = textObligatorio;
            textEmail.innerHTML += textFormato;
        }
    })


    //PASSWORD

    password.addEventListener('focus', function(){
        let textCaracteres = "<br><small>La contraseña debe tener al menos 8 caracteres.</small>"
        let textObligatorio = "<small>Este campo es obligatorio.</small>"
        let textEspecial = "<br><small>La contraseña debe tener al menos un número, una mayúscula, minúscula y un caracter especial.</small>"

        textPassword.innerHTML = textObligatorio;
        textPassword.innerHTML += textCaracteres;
        textPassword.innerHTML += textEspecial;
    })

    password.addEventListener('change', function(){
        if(password.value.length >= 8  && password.value.match(/[0-9]/) && password.value.match(/[A-Z]/) && password.value.match(/[a-z]/) && password.value.match(/[.,:;-_!"§$%&/()=?`+@]/)){
            password.style.backgroundColor = 'lightgreen';
            textPassword.innerHTML = '';
        }  else {
            password.style.backgroundColor = 'pink';

            let textCaracteres = "<br><small>La contraseña debe tener al menos 8 caracteres.</small>"
            let textObligatorio = "<small>Este campo es obligatorio.</small>"
            let textEspecial = "<br><small>La contraseña debe tener al menos un número, una mayúscula, minúscula y un caracter especial.</small>"
    
            textPassword.innerHTML = textObligatorio;
            textPassword.innerHTML += textCaracteres;
            textPassword.innerHTML += textEspecial;
        }
    })

    //IMAGE

    img.addEventListener('focus', function(){
        let textObligatorio = "<small>Este campo es obligatorio.</small>"
        let textFormato = "<br><small>Por favor seleccione un archivo en formato JPG, JPEG, GIF o PNG.</small>"
        imgText.innerHTML = textObligatorio;
        imgText.innerHTML += textFormato;
    })

    img.addEventListener('change', function(){
        if(img.value.match('png') || img.value.match('jpg') || img.value.match('jpeg') || img.value.match('gif')){
            imgText.innerHTML = '';
        }
    })


    /*  

    formRegister.addEventListener('submit', function(e){
        
    })

    */
})

