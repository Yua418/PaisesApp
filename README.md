# Paises App {<font color="red">In Progress</font>}
## Introduccion
Este es un proyecto del curso "Angular de cero a experto", esta es una aplicacion que consigue informacion sobre paises consumiendo varias API´s.


# Modulos
## Modulo App
***
Este es el modulo principal de la apliacion, donde se agrupan todos los modulos, el componente de este modulo es:

1. **app.component**: Este es el componente principal de la aplicacion, donde se construlle la app con todos los modulos secundarios.



## Shared
***
Este modulo contiene los componentes globales de la aplicacion:

1. **sidebar.component**: Esta es la barra lateral de la aplicacion

2. **menu.component**: Este era un menu, pero fue descartado.

3. **footer.component**: Este es el pie de pagina de la app.



## Paises
***
Este modulo contiene la funcionalidad principal de nuestra aplicacion, "la busqueda de paises", esta consta de tres carpetas principales que agrupan su tipo predeterminado de archivo.

1. **pages**: En esta carpeta se encuentran todos los componentes que componen las vistas de nuestra pagina en sus distintas rutas.
    * *por-pais.component.ts*: Aqui se introducen las busquedas por pais

2. **interfaces**: Aqui se encuentran las interfaces que facilitan el desarrollo del proyecto, como;
    * *Country*: esta interface contiene el tipado que debe tener el objeto llamado por la API `RESt Countries`.

3. **components**: Aqui se encuentran los componentes que funcionan dentro de las paginas que estan en la carpeta *Page*.

4. **services**: Aqui se encuentran las funcionalidades principales de la aplicacion

## app-routing.module.ts
***
Este modulo administra las rutas de nuestra aplicacion. Definimos un router con las siguietes caracteristicas

``` typescript
const routes:Routes = [
 {
    path: "", // Aqui va el nombre de nuestra ruta
    component: PorPaisComponent, // Aqui va el componente que se mostrara en nuestra ruta
    pathMatch: "full" 
  }
]
```

En el documento html tendremos dos elementos, el primero sera un boton, lista o input con el atributo `routerLink=""` que tomara como parametro el *path* de la ruta que queremos llamar.

El segundo sera una etiqueta llamada `<router-outlet></router-outlet>` , que contrenda el componente de la ruta que se llame en cuestion, por ejemplo si vamos a la ruta raiz, en esta etiqueta se presentara el componente que se encuentra en "PorPaisComponent".

Para controlar los estilos (o alguna funcionalidad) al seleccionar un componente con el atributo `routerLink=""` utilizamos el atributo `routerLinkActive=""` dentro de la misma etiqueta, este tomara como parametro el nombre de una clase que se aplicara al estar activo.

La configuracion `[routerLinkActiveOptions]="{ exact: true }"` sirve para especificar que los parametros de `routerLinkActive=""` solo se activaran cuando la ruta y el path seleccionados sean exactamente los mismos.
Si la ruta Raiz tubiese un nombre y no fuese un String vacio este comando no seria necesario.
