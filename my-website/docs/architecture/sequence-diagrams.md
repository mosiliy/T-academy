---
title: Sequence Diagrams
sidebar_position: 3
---

# Добавление продукта

```plantuml
@startuml

actor User
participant App
participant Backend
database DB

User -> App: Добавить продукт
App -> Backend: POST /products
Backend -> DB: INSERT product
DB --> Backend: OK
Backend --> App: 201 Created

@enduml
```