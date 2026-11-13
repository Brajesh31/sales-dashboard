# Security Policy

## Scope
This repository is a static dashboard demo using local sample data. It does not implement authentication, authorization, a backend, or a database.

## Safe use
Do not place real customer, employee, financial, or confidential business data in the static JSON file. Static assets and JavaScript are publicly accessible after deployment.

The dashboard currently constructs table and feed markup from JSON values. If the data source is ever made dynamic or user-controlled, render untrusted values safely and validate them before use.

## Reporting
Do not publish exploitable details or private data in a public issue. Use GitHub private vulnerability reporting when available, or contact the repository owner privately with impact and reproduction steps.
