window.addEventListener('load', function(){

    let email = document.querySelector('.email-login');
    let textEmail = document.querySelector('.text-email');

    let password = document.querySelector('.password-login');
    let textPassword = document.querySelector('.text-password');



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
        let textObligatorio = "<small>Este campo es obligatorio.</small>"
        textPassword.innerHTML = textObligatorio;
    })

    password.addEventListener('change', function(){
        if(password.value.length >= 8){
            password.style.backgroundColor = 'lightgreen';
            textPassword.innerHTML = '';
        }  else {
            password.style.backgroundColor = 'pink';

            let textObligatorio = "<small>Este campo es obligatorio.</small>"
    
            textPassword.innerHTML = textObligatorio;
        }
    })

})