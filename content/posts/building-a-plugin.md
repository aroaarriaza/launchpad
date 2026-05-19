---
title: "Lo que aprendí construyendo mi primer plugin"
date: "2025-03-05"
summary: "Construir Open Hours, un plugin de Figma para gestionar estados de componentes, me enseñó más sobre diseño de APIs que cualquier cosa que hubiera leído antes."
---

Construí Open Hours para resolver un problema que tenía cada semana: gestionar los diferentes estados de un componente en Figma — por defecto, hover, deshabilitado, error — sin perder la pista de qué variante era cuál.

El plugin en sí es sencillo. El proceso de construirlo no lo fue.

## La API de plugins de Figma es sorprendentemente cruda

A diferencia de construir una aplicación web, donde tienes un DOM completo y APIs del navegador, el entorno del plugin de Figma está en un sandbox. Te comunicas entre la UI del plugin (una vista web) y el hilo principal de Figma mediante `postMessage`. Suena manejable hasta que te das cuenta de que cualquier error en la serialización de mensajes falla silenciosamente.

Mi primera lección: define tus tipos de mensaje de forma estricta con TypeScript. Cada mensaje entre la UI y el hilo principal debe tener un campo `type` y estar tipado de forma exhaustiva. Esto me ahorró horas de depuración.

## El estado es más difícil que la lógica

La parte más difícil no fue leer o escribir nodos de Figma. Fue gestionar el estado entre dos contextos en sandbox — la UI del plugin y el hilo de Figma — que solo pueden comunicarse de forma asíncrona.

Terminé tratando el documento de Figma como la fuente de verdad y la UI como una vista de solo lectura que envía comandos. Sin estado compartido, sin problemas de sincronización.

## Lanza pronto, aunque sea para ti misma

Lancé Open Hours cuando podía hacer exactamente una cosa: renombrar variantes según un patrón que yo definía. Eso era suficiente. Usar el plugin yo misma durante dos semanas reveló cada funcionalidad que faltaba con más claridad que cualquier sesión de planificación.

El mejor roadmap es el que escriben tus usuarios al usar el producto de verdad.
