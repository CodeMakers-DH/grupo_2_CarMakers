
## Daily 14-04-22 - Sprint 4
==== Reunión de Avance ====

### Qué hizo ayer.
- Se puede registrar un usuario y en el JSON aparecen todos los campos rellenados, incluida la imagen, la cual además se sube al servidor sin problemas.
- Se puede logear, también deberia aparecerles el cartel de guardar la contraseña, el problema que tiene sin embargo es que la cookie no se esta guardando por lo que si abris otra pestaña o cerras el navegador, la sesión se pierde, pero me parece que eso no tiene un error, solo que no llegué a codear esa parte. 
- En el JSON, todos los usuarios estan actualizados, el correo electronico que tenia de propiedad ahora se llama email en todos y ademas les agregué por defecto a todos los objetos la propiedad de imagen junto con el archivo default.png
- Hay una nueva vista llamada profile, que es la que se va a mostrar cuando el usuario ingrese, con su nombre y foto de perfil (todavia no la implemente, solo esta el EJS) 
- Tienen una carpeta dentro de imgs que se llama imgsPerfil y es donde se guardan las imagenes subidas a través del registro. 
- Hay una nueva carpeta llamada modelos con un archivo llamado users.js
- Estan instalados e implementados el session y las cookies.
- Hay una nueva carpeta llamada middlewares con un middleware que se llama rememberMeMiddleware para recordar al usuario.
  
### Si se encontró con algún impedimento.
- Cuando subo un archivo con formato NO aceptado, lo que sucede es que me tira el error muy bien, PERO el archivo se me sube al servidor de todas maneras.
-  El problema es que yo le paso 3 argumentos a mi router.post, y lo que sucede es que el tercero, el que me lleva a la funcion dentro del controlador, se ejecuta siempre, haya o no haya error, intente solucionarlo con poco codigo, con mucho, con funciones, intentando traer el error y filtrarlo con if, pero nada me funcionó.


### Qué va a hacer hoy.
-SV: Intentar resolver los errores del código y lograr que funcionen de manera óptima el Login y el Register.

-GR: Terminar de implementar la entidad usuarios.
