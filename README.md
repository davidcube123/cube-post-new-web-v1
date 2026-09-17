# CUBE Post — entrega para GitHub y Hostinger

Incluye la revision con 42 trabajos, portada de tres filas por años, Equipo con LUT sin esferas y Espacios con cubo. No incluye claves, contraseñas ni el historial de otros repositorios.

## 1. Subir el proyecto al repositorio existente

Usa GitHub Desktop para incluir todas las carpetas, tambien .github. No subas el ZIP como un solo archivo.

1. Extrae CUBE-GitHub-Hostinger.zip con «Extraer todo» en Windows.
2. En GitHub Desktop inicia sesion con tu cuenta y selecciona File → Clone repository. Elige tu repositorio cube-post-new-web y una carpeta local vacia.
3. Abre esa carpeta clonada. Copia dentro TODO EL CONTENIDO de la carpeta cube-post-new-web de esta entrega, no la carpeta contenedora. package.json, src, public y .github deben quedar directamente en la raiz del repositorio.
4. En Desktop comprueba que la rama se llama main. Si tiene otro nombre, renombrala a main antes de publicar y usa main como rama predeterminada en GitHub.
5. Escribe «Web CUBE revisada» en Summary, pulsa Commit to main y despues Publish branch o Push origin, segun aparezca.
6. En GitHub verifica que aparecen src, public, package.json y .github/workflows/preparar-hostinger.yml. Mantén privado el repositorio durante la preparacion.

## 2. Crear la rama que usara Hostinger

1. En GitHub abre Actions → Preparar web para Hostinger.
2. Si GitHub pide habilitar Actions en tu repositorio, habilitalas.
3. Pulsa Run workflow, selecciona main y confirma Run workflow.
4. Espera a que termine en verde. Esta accion instala, comprueba y compila el proyecto; crea o actualiza la rama hostinger. No requiere contraseñas de Hostinger.
5. Si falla por permisos de escritura, revisa Settings → Actions → General → Workflow permissions y la politica de tu organizacion. La accion solicita contents: write; no sustituyas esto por tokens enviados por chat.
6. Si no aparece Run workflow, comprueba que main es la rama predeterminada y que se subio la carpeta .github.

## 3. Probar en Hostinger

En la pantalla que ya tienes abierta:
- Repositorio: cube-post-new-web.
- Rama: hostinger (refresca la pantalla cuando termine la accion).
- Directorio: public_html.
- Sitio de prueba mostrado: darkseagreen-rail-975138.hostingersite.com.

Selecciona hostinger, no main: main contiene codigo; hostinger contiene index.html y los archivos compilados.
Antes de Implementar, confirma que el destino sigue siendo ese sitio temporal y que no contiene otra web que necesites conservar. Prueba allí navegación, formularios/enlaces, fichas y móvil. Los canonical y sitemap del proyecto apuntan al destino final cube-post.com; el dominio temporal sirve solo para comprobar la entrega y no debe promoverse como web definitiva.

La sustitucion de cube-post.com se hará despues de revisar la prueba y guardar una copia descargable de la web actual. Este paquete no modifica dominios ni correos ni publica nada por si solo.

## 4. Cambios posteriores

Edita siempre main. Cada trabajo está en src/lib/projects.ts; los carteles en public/posters y las LUT en public/lmt. Usa el esquema de un trabajo existente e indica título, año, cartel, director, DOP, IMDb y LUT cuando existan. Los años y las filas de portada se calculan a partir del catalogo. No hay un gestor privado implementado todavía.

Guardar cambios en main NO actualiza hostinger automaticamente. Tras revisar los cambios, ejecuta de nuevo «Preparar web para Hostinger». Si Hostinger tiene el despliegue automatico activo, la actualizacion de su rama hostinger activará la publicacion en el sitio conectado. Si no se activa, usa Redeploy en Hostinger. Puedes consultar las versiones anteriores en el historial de GitHub.

## Desarrollo local (opcional)

Node.js 22 y npm: npm ci, npm run dev. Comprobaciones: npm run lint y npm run build. El resultado se genera en out/. No hace falta instalar Node en tu PC si usas GitHub Actions.

## Validacion y limites

La web de origen superó compilacion y controles de codigo; se probaron búsqueda, fichas y filtros. El mecanismo de rama se verifico localmente en un repositorio temporal. La primera ejecucion real en TU GitHub y la conexion con Hostinger quedan pendientes de subir este paquete. No se han conectado cuentas ni publicado cambios desde esta entrega.

Documentacion:
- https://docs.github.com/en/actions/how-tos/manage-workflow-runs/manually-run-a-workflow
- https://docs.hostinger.com/websites/git
