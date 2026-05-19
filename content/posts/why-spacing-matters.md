---
title: "Why spacing matters more than color"
date: "2024-11-10"
summary: "Color gets all the glory, but spacing is what makes a layout feel right. Here's why I think about whitespace first."
---

Every designer has a moment when they realize color isn't the thing making their layouts feel off. For me, it happened while staring at a dashboard I'd been tweaking for two hours — adjusting shades, trying different palettes — when I finally added 8px of padding to a card and everything clicked.

## The invisible structure

Spacing is the invisible structure of a design. It tells the eye what belongs together, what's separate, and where to rest. Color communicates mood and hierarchy, but spacing communicates *relationship*.

A button with too little padding feels cramped and untrustworthy, no matter how beautiful the color. A card with inconsistent internal spacing looks broken even if every element inside it is perfectly styled.

## Start with an 8px grid

The simplest thing you can do is commit to a spacing scale based on multiples of 8: `8, 16, 24, 32, 48, 64`. This single constraint eliminates hundreds of micro-decisions and creates visual rhythm without you having to think about it.

In Tailwind, this maps almost directly to `p-2, p-4, p-6, p-8, p-12, p-16`. Pick one and be consistent.

## The test

Before you reach for a new color, try adding more breathing room. Nine times out of ten, the layout improves immediately. If it doesn't, *then* think about color.

Good spacing makes color look better. Good color can't fix bad spacing.
