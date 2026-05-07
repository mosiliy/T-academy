---
title: Component Diagram
sidebar_position: 2
---

# Component Diagram

```plantuml
@startuml

package "Home Supplies System" {

  [Mobile App]

  [Backend API]

  database "Database"

  [Notification Service]

}

[Mobile App] --> [Backend API]

[Backend API] --> "Database"

[Backend API] --> [Notification Service]

@enduml
```