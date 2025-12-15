# Playwright Automation Framework

This folder contains a **Playwright-based UI automation framework**
used as part of my QA Automation Portfolio.

The goal of this project is not to provide a large test suite,
but to demonstrate **how I design and structure UI automation frameworks**
with a focus on readability, maintainability, and scalability.

Tests in this folder primarily target the **QA Playground** application:
👉 https://gcquality-automation-demo.vercel.app

---

## 🎯 What this project demonstrates

- Clean Playwright project structure
- Page Object Model & UI components
- Typed fixtures for shared setup
- Custom Playwright matchers (DSL-style assertions)
- Role-based permission testing
- Robust synchronization & waiting strategies
- UI + API interaction when relevant
- Visual regression testing (`toHaveScreenshot`)
- Cross-browser execution (Chromium, Firefox, WebKit)

The emphasis is placed on **test design and intent clarity**
rather than raw test quantity.

---

## 📁 Project structure

```
playwright/
├── tests/ # Test suites (login, permissions, UI behavior)
├── objects/ # Page Objects & UI components
├── fixtures/ # Typed Playwright fixtures
├── helpers/ # Utilities & shared logic
├── expectations/# Custom Playwright matchers
└── package.json # Playwright dependencies & scripts
```


Each layer has a clear responsibility:
- **objects** → actions & UI interactions
- **fixtures** → setup & context
- **helpers** → cross-cutting utilities
- **expectations** → assertions only

---

## 🧪 Test coverage examples

Current tests include:
- Login happy path & validation errors
- Role-based permissions (guest / editor / admin)
- Protected routes & navigation
- UI behavior validation
- Forbidden access scenarios (403)

---

## ▶️ Running the tests

```bash
cd playwright
npm install
npx playwright test
```

## 🧠 Design principles

This framework follows a few guiding principles:

* tests are readable and expressive
* assertions are separated from actions
* minimal duplication
* explicit permissions testing
* failures should be easy to understand

## 📌 Notes

All examples are generic and safe for public use.
This project is intended to illustrate automation framework design
rather than application complexity.