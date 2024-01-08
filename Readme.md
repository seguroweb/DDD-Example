# Proyecto CRUD con DDD y Firebase

## Descripción
Este repositorio contiene un proyecto de CRUD (Crear, Leer, Actualizar, Eliminar) desarrollado utilizando el enfoque de Diseño Dirigido por el Dominio (DDD). La aplicación gestiona usuarios y utiliza Firebase como base de datos en tiempo real para almacenar la información.

# Breve resumen sobre capas DDD

### Capa de Dominio
- Contiene las entidades, value objects, agregados y reglas de negocio.
- Es la capa más interna y representa el núcleo del sistema.

### Capa de Aplicación (Caso de uso)
- Coordina las interacciones entre la capa de dominio y la capa de infraestructura.
- Contiene servicios de aplicación y orquesta las operaciones del sistema.

### Capa de Infraestructura (Adaptadores)
- Maneja detalles técnicos como almacenamiento de datos, comunicación externa y servicios.
- Contiene controladores, modelos y rutas.

## Instalación
- Clona este repositorio.
- Instala las dependencias con npm install.
- Entrar en la carpeta src.
- Ejecuta la aplicación con el siguiente comando: npx ts-node index.ts.
- Tendras el servidor corriendo, deberas utilizar alguna herramienta como postman, para utilizar y probar las funcionalidades del CRUD.

Si no conoces postman abajo dejo la documentacion del mismo y la documentacion completa de nuestro CRUD desarrollado con DDD.

## Documentacion Postman
https://learning.postman.com/docs/introduction/overview/

## Documentación del Proyecto
https://wirehaired-bream-e32.notion.site/Documentaci-n-de-CRUD-utilizando-DDD-Domain-Driven-Design-27e436af7c014f838fc418197969b88a?pvs=4.
