---
title: "Por qué el espaciado importa más que el color"
date: "2024-11-10"
summary: "El color se lleva toda la gloria, pero el espaciado es lo que hace que un diseño se sienta bien. Por qué pienso primero en el espacio en blanco."
---

Toda diseñadora tiene un momento en el que se da cuenta de que el color no es lo que hace que sus layouts se vean mal. En mi caso ocurrió mientras miraba un dashboard que había estado ajustando durante dos horas — cambiando tonos, probando paletas — hasta que finalmente añadí 8px de padding a una tarjeta y todo encajó.

## La estructura invisible

El espaciado es la estructura invisible de un diseño. Le dice al ojo qué pertenece junto, qué está separado y dónde descansar. El color comunica estado de ánimo y jerarquía, pero el espaciado comunica *relación*.

Un botón con poco padding se siente apretado y poco fiable, sin importar lo bonito que sea el color. Una tarjeta con espaciado interno inconsistente parece rota aunque cada elemento dentro de ella esté perfectamente estilado.

## Empieza con una cuadrícula de 8px

Lo más sencillo que puedes hacer es comprometerte con una escala de espaciado basada en múltiplos de 8: `8, 16, 24, 32, 48, 64`. Esta única restricción elimina cientos de microdecisiones y crea ritmo visual sin que tengas que pensarlo.

En Tailwind, esto se corresponde casi directamente con `p-2, p-4, p-6, p-8, p-12, p-16`. Elige uno y sé consistente.

## La prueba

Antes de buscar un color nuevo, prueba a añadir más espacio. Nueve de cada diez veces, el layout mejora inmediatamente. Si no mejora, *entonces* piensa en el color.

Un buen espaciado hace que el color quede mejor. Un buen color no puede arreglar un mal espaciado.
