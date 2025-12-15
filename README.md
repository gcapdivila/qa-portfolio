# QA Automation Portfolio – Gilles Capdivila

This repository showcases my approach to **Quality Engineering** through
a live QA Playground and a set of focused automation examples.

The primary goal of this portfolio is to give recruiters a **clear and concrete view**
of how I design tests, structure automation frameworks, and reason about quality
in real-world scenarios.

---

## 🌐 Live QA Playground

A live demo application used as a test target for this portfolio:

👉 https://gcquality-automation-demo.vercel.app

The playground is intentionally simple from a functional point of view,
but designed to support realistic QA scenarios:
- authentication & permissions
- protected routes
- UI behaviors
- error handling
- visual regression components

---

## 🎯 What you’ll find here

This portfolio covers multiple aspects of Quality Engineering:

- **UI automation**
  - Playwright (TypeScript)
  - Selenium (Java & Python)
- **API testing**
  - Postman collections
  - Newman runners
- **Performance testing**
  - K6 (smoke & load scenarios)
- **Keyword-driven testing**
  - RobotFramework
- **Utilities & helpers**
  - Scripts supporting QA workflows
- **QA strategy & methodology**
  - shift-left practices
  - risk-based testing
  - documentation & structure
  - quality advocacy

---

## 📁 Repository structure

```
qa-portfolio/
├── playwright/ → Modern UI automation framework (TypeScript)
├── selenium-java/ → Java Selenium example with POM architecture
├── selenium-python/ → Python Selenium example
├── robotframework/ → RobotFramework suites & reusable keywords
├── api-tests/ → Postman collections & Newman runners
├── k6/ → Performance testing (smoke / load)
└── utils/ → Helper scripts for QA workflows
```


Each folder contains its own README describing:
- the intent of the project
- the technical choices
- the structure and conventions used

---

## 🧠 Guiding principles

Across all projects in this repository, I focus on:

- tests as a **product**, not a by-product
- clarity over cleverness
- separation between actions and assertions
- scalable test architecture
- minimal duplication
- readable test reports

The emphasis is deliberately placed on **design and maintainability** rather than raw test volume.

---

## 🧪 Live test target: QA Playground

This portfolio is progressively being connected to a dedicated **QA Playground** web application, used as a common test target.

The playground includes:
- authentication flows (guest / editor / admin)
- protected routes & permissions
- multi-step forms
- dynamic tables
- error scenarios
- API endpoints
- UI components for visual regression

Each automation project will eventually include **real, runnable test suites** targeting these workflows.

---

## 🔧 Technologies used

- **Playwright** – Modern UI testing
- **Selenium (Java & Python)** – Browser automation foundations
- **RobotFramework** – Keyword-driven testing
- **Postman / Newman** – API test automation
- **K6** – Performance & reliability testing
- **TypeScript / JavaScript / Python / Java**
- **GitHub Actions (optional)** – CI/CD examples

---

## 🧭 Work in progress

This portfolio evolves continuously as new experiments, refactors, and test strategies are added. Highlights of the current state:
- **Playwright**: framework scaffolded and live against the QA Playground; core flows (login, permissions, navigation) covered; a few UI tests still to be written.
- **Selenium (Java & Python)**: not started yet (planned POM examples).
- **API tests**: not started yet (planned Postman collections & Newman runners).
- **Performance**: not started yet (planned k6 smoke/load samples).

You can follow the progression through commit history and the README of each sub-project as they grow.

---

## 📬 Contact

If you'd like to discuss QA strategy, automation frameworks, or leadership topics:

- LinkedIn: https://www.linkedin.com/in/gillescapdivila  
- Medium: https://medium.com/@gcapdivila
- QA Playground / Portfolio website: https://gcquality-automation-demo.vercel.app 

---

## 🔒 Disclaimer

All code and examples in this repository are **generic, self-contained, and safe for public distribution**.  
No proprietary logic, test data, or confidential elements from any employer are included.

---

Thanks for visiting — and feel free to explore the projects.
