window.addEventListener('load', function(){

    let name = document.querySelector('.name-create');
    let textName = document.querySelector('.text-name');

    let desc = document.querySelector('.desc-create');
    let textDesc = document.querySelector('.text-desc');

    let img = document.querySelector('.img-create');
    let imgText = document.querySelector('.text-image');

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


    //DELIVERY

    delivery.addEventListener('focus', function(){
        let textObligatorio = "<small>Este campo es obligatorio.</small>"
        let textNumber = "<br><small>Este campo solo puede contener números.</small>"
        let textPositiv = "<br><small>Los números negativos no están permitidos.</small>"
        textDelivery.innerHTML = textObligatorio;
        textDelivery.innerHTML += textNumber;
        textDelivery.innerHTML += textPositiv;
      })


      delivery.addEventListener('change', function(){

        if(delivery.value.match(/[0-9]/) && delivery.value > -1){
            delivery.style.backgroundColor = 'lightgreen';
            textDelivery.innerHTML = '';
        }  else{
            delivery.style.backgroundColor = 'pink';
            let textObligatorio = "<small>Este campo es obligatorio.</small>"
            let textNumber = "<br><small>Este campo solo puede contener números.</small>"
            let textPositiv = "<br><small>Los números negativos no están permitidos.</small>"
            textDelivery.innerHTML = textObligatorio;
            textDelivery.innerHTML += textNumber;
            textDelivery.innerHTML += textPositiv;
        }

})


    //PRECIO

    precio.addEventListener('focus', function(){
        let textObligatorio = "<small>Este campo es obligatorio.</small>"
        let textNumber = "<br><small>Este campo solo puede contener números.</small>"
        let textCaracteres = "<br><small>Este campo debe tener al menos 5 caracteres.</small>"
        let textPositiv = "<br><small>Los números negativos no están permitidos.</small>"
        textPrecio.innerHTML = textObligatorio;
        textPrecio.innerHTML += textNumber;
        textPrecio.innerHTML += textCaracteres;
        textPrecio.innerHTML += textPositiv;
      })


      precio.addEventListener('change', function(){

        if(precio.value.match(/[0-9]/) && precio.value.length >= 5 && precio.value > -1){
            precio.style.backgroundColor = 'lightgreen';
            textPrecio.innerHTML = '';
        }  else{
            precio.style.backgroundColor = 'pink';
            let textObligatorio = "<small>Este campo es obligatorio.</small>"
            let textNumber = "<br><small>Este campo solo puede contener números.</small>"
            let textCaracteres = "<br><small>Este campo debe tener al menos 5 caracteres.</small>"
            let textPositiv = "<br><small>Los números negativos no están permitidos.</small>"
            textPrecio.innerHTML = textObligatorio;
            textPrecio.innerHTML += textNumber;
            textPrecio.innerHTML += textCaracteres;
            textPrecio.innerHTML += textPositiv;
        }
})


    //AUTONOMÍA

    autonomia.addEventListener('focus', function(){
        let textObligatorio = "<small>Este campo es obligatorio.</small>"
        let textNumber = "<br><small>Este campo solo puede contener números.</small>"
        let textCaracteres = "<br><small>Este campo debe tener al menos 4 caracteres.</small>"
        let textPositiv = "<br><small>Los números negativos no están permitidos.</small>"
        textAutonomia.innerHTML = textObligatorio;
        textAutonomia.innerHTML += textNumber;
        textAutonomia.innerHTML += textCaracteres;
        textAutonomia.innerHTML += textPositiv;
      })


      autonomia.addEventListener('change', function(){

        if(autonomia.value.match(/[0-9]/) && autonomia.value.length >= 4 && autonomia.value > -1){
            autonomia.style.backgroundColor = 'lightgreen';
            textAutonomia.innerHTML = '';
        }  else{
            autonomia.style.backgroundColor = 'pink';
            let textObligatorio = "<small>Este campo es obligatorio.</small>"
            let textNumber = "<br><small>Este campo solo puede contener números.</small>"
            let textCaracteres = "<br><small>Este campo debe tener al menos 4 caracteres.</small>"
            let textPositiv = "<br><small>Los números negativos no están permitidos.</small>"
            textAutonomia.innerHTML = textObligatorio;
            textAutonomia.innerHTML += textNumber;
            textAutonomia.innerHTML += textCaracteres;
            textAutonomia.innerHTML += textPositiv;
        }
})

    //VELOCIDAD MÁXIMA

    velocidad.addEventListener('focus', function(){
        let textObligatorio = "<small>Este campo es obligatorio.</small>"
        let textNumber = "<br><small>Este campo solo puede contener números.</small>"
        let textCaracteres = "<br><small>Este campo debe tener al menos 3 caracteres.</small>"
        let textPositiv = "<br><small>Los números negativos no están permitidos.</small>"
        textVelocidad.innerHTML = textObligatorio;
        textVelocidad.innerHTML += textNumber;
        textVelocidad.innerHTML += textCaracteres;
        textVelocidad.innerHTML += textPositiv;
      })


      velocidad.addEventListener('change', function(){

        if(velocidad.value.match(/[0-9]/) && velocidad.value.length >= 3 && velocidad.value > -1){
            velocidad.style.backgroundColor = 'lightgreen';
            textVelocidad.innerHTML = '';
        }  else{
            velocidad.style.backgroundColor = 'pink';
            let textObligatorio = "<small>Este campo es obligatorio.</small>"
            let textNumber = "<br><small>Este campo solo puede contener números.</small>"
            let textCaracteres = "<br><small>Este campo debe tener al menos 3 caracteres.</small>"
            let textPositiv = "<br><small>Los números negativos no están permitidos.</small>"
            textVelocidad.innerHTML = textObligatorio;
            textVelocidad.innerHTML += textNumber;
            textVelocidad.innerHTML += textCaracteres;
            textVelocidad.innerHTML += textPositiv;
        }
})

    //TIEMPO DE CERO A CIEN

    tiempo.addEventListener('focus', function(){
        let textObligatorio = "<small>Este campo es obligatorio.</small>"
        let textNumber = "<br><small>Este campo solo puede contener números.</small>"
        let textPositiv = "<br><small>Los números negativos no están permitidos.</small>"
        textTiempo.innerHTML = textObligatorio;
        textTiempo.innerHTML += textNumber;
        textTiempo.innerHTML += textPositiv;
      })


      tiempo.addEventListener('change', function(){

        if(tiempo.value.match(/[0-9]/) && tiempo.value > -1){
            tiempo.style.backgroundColor = 'lightgreen';
            textTiempo.innerHTML = '';
        }  else{
            tiempo.style.backgroundColor = 'pink';
            let textObligatorio = "<small>Este campo es obligatorio.</small>"
            let textNumber = "<br><small>Este campo solo puede contener números.</small>"
            let textPositiv = "<br><small>Los números negativos no están permitidos.</small>"
            textTiempo.innerHTML = textObligatorio;
            textTiempo.innerHTML += textNumber;
            textTiempo.innerHTML += textPositiv;
        }

})


    //INGRESO

    ingreso.addEventListener('focus', function(){
        let textObligatorio = "<small>Este campo es obligatorio.</small>"
        textIngreso.innerHTML = textObligatorio;
      })


      ingreso.addEventListener('change', function(){

        if(ingreso.value.match(/[0-9]/)){
            ingreso.style.backgroundColor = 'lightgreen';
            textIngreso.innerHTML = '';
        }  else{
            ingreso.style.backgroundColor = 'pink';
            let textObligatorio = "<small>Este campo es obligatorio.</small>"
            textIngreso.innerHTML = textObligatorio;
        }

})
})


/* 
Falta:
- no funciona correctamente los caracteres especiales
- que las fechas esten limitadas en el año que se pueda seleccionar
- que valide el formato de la fecha
*/