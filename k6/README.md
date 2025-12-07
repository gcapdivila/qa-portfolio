# K6 – Performance Testing Examples

This folder contains lightweight performance test examples using K6.

## 🚀 Features

- Smoke test example
- Load test example with ramping VUs
- Threshold definitions
- Optional integration with Grafana/InfluxDB
- Portfolio-safe (does not target production systems)

## 📁 Structure

```
k6/
├── smoke-test.js
├── load-test.js
└── thresholds/
```


## ▶️ Run tests

```bash
k6 run smoke-test.js
k6 run load-test.js
```

⚠️ Load tests will target either:
* a safe public playground API (e.g., test-api.k6.io), or
* a controlled API deployment separate from Vercel.

## 📌 Notes

K6 is included to showcase performance testing expertise, not to stress-test the QA Playground host.