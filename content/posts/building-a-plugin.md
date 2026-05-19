---
title: "What I learned building my first plugin"
date: "2025-03-05"
summary: "Building Open Hours, a Figma plugin for managing component states, taught me more about API design than anything I'd read before."
---

I built Open Hours to solve a problem I had every week: managing the different states of a component in Figma — default, hover, disabled, error — without losing track of which variant was which.

The plugin itself is simple. The process of building it was not.

## The Figma plugin API is surprisingly raw

Unlike building a web app, where you have a full DOM and browser APIs, the Figma plugin environment is sandboxed. You communicate between the plugin UI (a web view) and Figma's main thread via `postMessage`. It sounds manageable until you realize that any mistake in message serialization silently fails.

My first lesson: define your message types strictly with TypeScript. Every message between the UI and the main thread should have a `type` field and be exhaustively typed. This saved me hours of debugging.

## State is harder than logic

The hardest part wasn't reading or writing Figma nodes. It was managing state across two sandboxed contexts — the plugin UI and the Figma thread — that can only communicate asynchronously.

I ended up treating the Figma document as the source of truth and the UI as a read-only view that sends commands. No shared state, no sync issues.

## Ship early, even to yourself

I launched Open Hours when it could do exactly one thing: rename variants according to a pattern I defined. That was enough. Using the plugin myself for two weeks surfaced every missing feature more clearly than any planning session could have.

The best roadmap is the one your users write by actually using the thing.
