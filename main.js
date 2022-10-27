const nombre=document.querySelector('#nombre')
const apellido=document.querySelector('#apellido')
const enviar=document.querySelector('#enviar')
const correoPrimero=document.querySelector('#correo')
const numero=document.querySelector('#numero')
const parrafoPrimero=document.querySelector('.textoPrimero')
const parrafoSegundo=document.querySelector('.textoSegundo')


 enviar.addEventListener('click',()=>{
     if(nombre.value==='' && apellido.value===''  && numero.value===''){
         parrafoPrimero.innerHTML=('Datos imcompletos, por favor verifique nuevamente')
     }else{
         console.log('aja')
     }

 })
 document.getElementById('email').addEventListener('input', function() {
    campo = event.target;
    valido = document.getElementById('emailOK');
        
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    //validacion de correo
    if (emailRegex.test(campo.value)) {
      valido.innerText = "correo válido";
    } else {
      valido.innerText = "correo incorrecto";
    }
});

function Validacion(campo, ValidacionMaxima) {
    try {
        if (campo.value.length > (ValidacionMaxima - 1))
            return false;
        else
            return true;             
    } catch (i) {
        return false;
    }
}
