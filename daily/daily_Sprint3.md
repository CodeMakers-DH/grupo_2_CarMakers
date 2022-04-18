
## Daily 28-02-22 - Sprint 3
==== Reunión de Avance ====

### Qué hizo ayer.
-CS: creo modelo vista controlador (controladores, rutas, EJS vistas, y partials). 

-SV: clono el proyecto, y reviso los cambios realizados por CS.


### Si se encontró con algún impedimento.
- Pagina de registro no terminada por Salvador. Se reasina a Sara por sus habilidades en HTML y CSS. Se tomará como base el formulario de Login.
- SV no pudo correr el clone del proyecto, se realizó una revisión del package.json, se instalaron dependencias (express, nodemon, EJS) y se resolvio el problema. El servidor esta corriendo en el puerto 5001.
-SV advierte que las tareas resueltas del Sprint3 quedaron cargadas por error en el sprint2 en el Tablero de Trabajo.


### Qué va a hacer hoy.
-SV: revisará los footers para optimizar código. Eliminara código innecesario en el head. Realizará la vista de registro e incorporará al modelo vista controlador.

-CS: resolverá los problemas en el tablero, diseñará un modelo de objeto literal para ser usado en la pagina (modelo de autos y características. Escribirá la Daily del dia de hoy.

Proxima reunion: 01/03. Horario a confirmar.


## Daily 01-03-22 - Sprint 3
==== Reunión de Avance ====

### Qué hizo ayer.
-CS: Organizó las tareas del ClickUp. 

-SV: creó el register.

### Si se encontró con algún impedimento.
- Teníamos algunas dudas sobre cómo nos conviene iterar las secciones sin tener problemas con las imágenes de fondo.

### Qué va a hacer hoy.
-SV: optimizar el HTML del index. Linkear todas las páginas. Seguir puliendo register login y home.

-CS: crear los objetos literales con las características de los autos. Modificará el CSS de las páginas carrito y detalle para desktop y tablet.

## Daily 04-03-22 - Sprint 3
==== Reunión de Avance ====

### Qué hizo ayer.
-CS: Creo los objetos literales con las características de los autos. 

-SV: Optimizo el HTML del index. Pulio las paginas register login y home, actualizo los banners y puso en dinamica la vista de index, se creo un nuevo partial llamado secciones.

### Si se encontró con algún impedimento.
- Hay un problema con el ''Conoce aca'' que no esta tomando el vinculo.

### Qué va a hacer hoy.
-SV: Agregar el Admin.
-Linkear todas las páginas.
- Ayudar a salva

-CS: 
-Cambiar imagenes en objeto literal
-Vista de creacion y edicion de productos

-SM: 
- Version Desktop Carrito y DetalleProducto


PENDIENTE : 
Agregar la condicion predeterminada de que si no hay un numero deberia ir al modelo 1


## Daily 07-03-22 - Sprint 3
==== Reunión de Avance ====

### Qué hizo ayer.
-CS: Se actualizó el objetoLiteral con las imagenes disponibles. Se crearon las vistas de edición y creación de productos. Se agregó el condicional cuando no se especifica en Id del modelo (404 error).

-SV: Se actualizo la versión desktop del carrito. Se creó la vista 404.

-SM: Trabajó con Sara en os estilos y vistas de escritorio del carrito.

### Si se encontró con algún impedimento.
- Proceso de actualización del codigo en git, hay que comitear mas seguido para evitar perder codigo.
- Se actualizo el aplicativo en JS para crear productos, no esta vinculado a la app aun. 

### Qué va a hacer hoy.
-SV: Crea vista 404. Linkear todas las páginas.

-CS: Actualiza la Daily. 

-SM: 
- Version Desktop DetalleProducto



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


