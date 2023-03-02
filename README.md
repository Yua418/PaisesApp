# Paises App
## Introduccion
Este es un proyecto del curso "Angular de cero a experto", esta es una aplicacion que consigue informacion sobre paises consumiendo varias API´s.

Estas API´s probienen de  [REST Countries](https://restcountries.com/#api-endpoints-v2-all "Web de API´s de Geografia") 
# Modulos
## Modulo App
***
Este es el modulo principal de la apliacion, donde se agrupan todos los modulos, el componente de este modulo es:

1. **app.component**: Este es el componente principal de la aplicacion, donde se construlle la app con todos los modulos secundarios.



## Shared
***
Este modulo contiene los componentes globales de la aplicacion:

1. **sidebar.component**: Esta es la barra lateral de la aplicacion

2. **menu.component**:

3. **footer.component**:



## Paises
***
Este modulo contiene la funcionalidad principal de nuestra aplicacion, "la busqueda de paises", esta consta de tres carpetas principales que agrupan su tipo predeterminado de archivo.

1. **pages**:
    * *c*:

2. **interfaces**:

3. **components**:

4. **services**:

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
