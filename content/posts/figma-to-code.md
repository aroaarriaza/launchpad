---
title: "From Figma to code: my frictionless workflow"
date: "2025-01-22"
summary: "How I stopped treating design and development as separate phases and started thinking in components from the very beginning."
---

For years I treated Figma and VS Code as separate worlds. I'd finish a design, hand it off to myself (yes, I'm both), and then spend days translating decisions I'd already made once. It was exhausting and error-prone.

The shift happened when I started designing *in the same language as the code*.

## Design with components, not screens

Instead of designing full pages, I now design components: a button, a card, a navigation bar. Each component in Figma maps directly to a component in code. When I finalize the button in Figma, I build it in code the same day — while every decision is still fresh.

This means I'm never translating. I'm just moving.

## Use real constraints from the start

Tailwind's spacing scale and typography scale are the best thing that ever happened to my design workflow. I use an 8px grid in Figma that matches Tailwind's default scale. When I pick `gap-6` in code, I know exactly what it looks like because I designed with 24px gaps.

No more "this looked right in Figma but feels off in the browser."

## Ship the component, then the page

My rule: no page exists until every component on it is built and tested. This forces me to think in reusable pieces and prevents the classic problem of designing beautiful screens that are impossible to implement consistently.

The result is a codebase that reflects the design system, not a patchwork of one-off styles.
