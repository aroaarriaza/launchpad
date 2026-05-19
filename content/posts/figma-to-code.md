---
title: "De Figma a código: mi flujo sin fricciones"
date: "2025-01-22"
summary: "Cómo dejé de tratar el diseño y el desarrollo como fases separadas y empecé a pensar en componentes desde el principio."
---

Durante años traté Figma y VS Code como mundos separados. Terminaba un diseño, me lo pasaba a mí misma (sí, soy las dos), y luego pasaba días traduciendo decisiones que ya había tomado una vez. Era agotador y propenso a errores.

El cambio llegó cuando empecé a diseñar *en el mismo lenguaje que el código*.

## Diseña con componentes, no con pantallas

En lugar de diseñar páginas completas, ahora diseño componentes: un botón, una tarjeta, una barra de navegación. Cada componente en Figma se corresponde directamente con un componente en código. Cuando finalizo el botón en Figma, lo construyo en código ese mismo día — mientras cada decisión todavía está fresca.

Esto significa que nunca estoy traduciendo. Solo estoy moviendo.

## Usa restricciones reales desde el principio

La escala de espaciado y tipografía de Tailwind es lo mejor que le ha pasado a mi flujo de diseño. Uso una cuadrícula de 8px en Figma que coincide con la escala por defecto de Tailwind. Cuando elijo `gap-6` en código, sé exactamente cómo se ve porque diseñé con gaps de 24px.

Nunca más "esto se veía bien en Figma pero se siente raro en el navegador".

## Lanza el componente, luego la página

Mi regla: ninguna página existe hasta que cada componente que hay en ella esté construido y probado. Esto me obliga a pensar en piezas reutilizables y evita el problema clásico de diseñar pantallas hermosas que son imposibles de implementar de forma consistente.

El resultado es una base de código que refleja el sistema de diseño, no un collage de estilos únicos.
