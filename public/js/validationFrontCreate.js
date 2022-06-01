window.addEventListener('load', function(){

    let name = document.querySelector('.name-create');
    let textName = document.querySelector('.text-name');

    let desc = document.querySelector('.desc-create');
    let textDesc = document.querySelector('.text-desc');

    let img = document.querySelector('.img-create');
    let textImg = document.querySelector('.text-image');

    let delivery = document.querySelector('.delivery-create');
    let textDelivery = document.querySelector('.text-delivery');

    let precio = document.querySelector('.precio-create');
    let textPrecio = document.querySelector('.text-precio');

    let autonomia = document.querySelector('.autonomia-create');
    let textAutonomia = document.querySelector('.text-autonomia');

    let velocidad = document.querySelector('.velocidad-create');
    let textVelocidad = document.querySelector('.text-velocidad');

    let tiempo = document.querySelector('.tiempo-create');
    let textTiempo = document.querySelector('.text-tiempo');

    let ingreso = document.querySelector('.ingreso-create');
    let textIngreso = document.querySelector('.text-ingreso');


    //NAME

    name.addEventListener('focus', function(){
        let textCaracteres = "<br><small>El nombre debe tener al menos 5 caracteres.</small>"
        let textObligatorio = "<small>Este campo es obligatorio.</small>"
        textName.innerHTML = textObligatorio;
        textName.innerHTML += textCaracteres;
      })

    name.addEventListener('change', function(){

        if(name.value.length >= 5){
            name.style.backgroundColor = 'lightgreen';
            textName.innerHTML = '';
        }  else if(name.value.length < 5) {
            name.style.backgroundColor = 'pink';
            let textCaracteres = "<br><small>El nombre debe tener al menos 2 caracteres.</small>"
            let textObligatorio = "<small>Este campo es obligatorio.</small>"
            textName.innerHTML = textObligatorio;
            textName.innerHTML += textCaracteres;
        }
    })


    //DESC

    desc.addEventListener('focus', function(){
        let textCaracteres = "<br><small>La descripción debe tener al menos 20 caracteres.</small>"
        let textObligatorio = "<small>Este campo es obligatorio.</small>"
        textDesc.innerHTML = textObligatorio;
        textDesc.innerHTML += textCaracteres;
      })

    desc.addEventListener('change', function(){

        if(desc.value.length >= 20){
            desc.style.backgroundColor = 'lightgreen';
            textDesc.innerHTML = '';
        }  else if(desc.value.length < 20) {
            desc.style.backgroundColor = 'pink';
            let textCaracteres = "<br><small>La descripción debe tener al menos 20 caracteres.</small>"
            let textObligatorio = "<small>Este campo es obligatorio.</small>"
            textDesc.innerHTML = textObligatorio;
            textDesc.innerHTML += textCaracteres;
        }
    })


})