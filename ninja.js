 function cambiarNombre (Elemento)
 {
     /*console.log (Elemento.innerText);*/
    /* Elemento.innerText="Sing in"*/
     if(Elemento.innerText=="Sign Out")
     {
        Elemento.innerText="Sign In"; 
     }
     else if ( Elemento.innerText=="Sign In")
     {
        Elemento.innerText="Sign Out"; 
     }
      

 }

 function Remover (Elemento)
 {
     Elemento.remove();
 }

 function alertar (Mensaje)
 {
     alert(Mensaje)
 }