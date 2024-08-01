export interface IKriteriumHelp {
  atRating: number,
  description: string,
  example: string
}

export interface IKriterien {
  name: string,
  description: string,
  soft: boolean,
  assessmentPoints: string[],
  help: IKriteriumHelp[]
}

export const FachkompetenzKriterien: IKriterien[] = [
  {
    name: "Code-Qualität",
    soft: false,
    description: "Der Auszubildende hält festgelegte Coding-Standards und -Konventionen genau und präzise ein.",
    assessmentPoints: ["Einhaltung von Namenskonventionen",
      "Konsistente Einrückungen und Code-Strukturierung",
      "Nutzung von Standardbibliotheken und -methoden",
      "Anwendung von Best Practices der spezifischen Programmiersprache",
      "Einhaltung der Projektumfeld-Spezifikationen",
      "Regelmäßige Code-Reviews und deren Feedback umsetzen",
      "Vermeidung von Code-Duplikationen"],
    help: [{
      atRating: 1,
      description: "Hält sich in allen Bereichen vollständig an die Coding-Standards. Der Code ist hervorragend strukturiert, konsequent eingerückt, vollständig kommentiert und nutzt Standardbibliotheken optimal.",
      example: "Der Auszubildende schreibt Code, der klar strukturiert ist, durchdachte Namen für Variablen und Funktionen verwendet, umfassend kommentiert ist und die Best Practices und Projektumfeld-Spezifikationen vollständig umsetzt."
    }, {
      atRating: 3,
      description: "Hält sich an die wesentlichen Coding-Standards. Der Code ist gut strukturiert, korrekt eingerückt, kommentiert und verwendet Standardbibliotheken.",
      example: "Der Auszubildende schreibt Code, der gut strukturiert ist, mit größtenteils sinnvollen Variablen- und Funktionsnamen, ausreichender Kommentierung und Einhaltung der Projektumfeld-Spezifikationen."
    }, {
      atRating: 5,
      description: "Hält sich kaum an die Coding-Standards. Der Code ist schlecht strukturiert, nicht korrekt eingerückt, unkommentiert und nutzt Standardbibliotheken nicht.",
      example: "Der Auszubildende schreibt Code, der schlecht strukturiert und schwer verständlich ist, ohne Kommentare und mit vielen Abweichungen von den Coding-Standards und Projektumfeld-Spezifikationen."
    },
    ]
  }, {
    name: "Wartbarkeit",
    soft: false,
    description: "Der Auszubildende schreibt leicht verständlichen, modifizierbaren und erweiterbaren Code.",
    assessmentPoints: ["Sinnvolle und aussagekräftige Benennungen",
      "Umfangreiche und hilfreiche Kommentare",
      "Vollständige und aktuelle Dokumentation",
      "Geringe Kopplung und hohe Kohäsion innerhalb der Module",
      "Verwendung von klaren und verständlichen Schnittstellen (APIs)",
      "Fähigkeit zur Anpassung des Codes bei Änderungen und Erweiterungen",
      "Einhaltung von Modularitätsprinzipien",],
    help: [{
      atRating: 1,
      description: "Der Code ist hervorragend verständlich, sehr leicht modifizierbar und erweiterbar. Benennungen sind sinnvoll und aussagekräftig, Kommentare sind umfangreich und hilfreich, Dokumentation ist vollständig und aktuell. Es gibt geringe Kopplung und hohe Kohäsion innerhalb der Module, Schnittstellen sind klar und verständlich. Der Code kann leicht angepasst und erweitert werden.",
      example: "Der Auszubildende schreibt einen Algorithmus, der klar strukturiert ist, durchdachte und sinnvolle Namen für Variablen und Funktionen verwendet, umfassend kommentiert ist und vollständige Dokumentation bietet. Schnittstellen sind klar und einfach zu verstehen, Module arbeiten unabhängig voneinander und sind leicht zu ändern oder zu erweitern."
    }, {
      atRating: 3,
      description: "Der Code ist verständlich, modifizierbar und erweiterbar. Benennungen sind meist sinnvoll, Kommentare ausreichend und Dokumentation vorhanden. Kopplung und Kohäsion innerhalb der Module sind akzeptabel, Schnittstellen sind größtenteils klar. Der Code kann angepasst und erweitert werden.",
      example: "Der Auszubildende schreibt eine Funktion, die gut strukturiert ist, mit größtenteils sinnvollen Variablen- und Funktionsnamen, ausreichender Kommentierung und akzeptabler Dokumentation. Schnittstellen sind klar, Module sind verständlich und weitgehend unabhängig."
    }, {
      atRating: 5,
      description: "Der Code ist schwer verständlich, kaum modifizierbar und wenig erweiterbar. Benennungen sind unklar, Kommentare fehlen weitgehend und Dokumentation ist unvollständig. Es gibt hohe Kopplung und geringe Kohäsion innerhalb der Module, Schnittstellen sind unklar. Der Code ist schwer anzupassen und zu erweitern.",
      example: "Der Auszubildende schreibt Code, der schlecht strukturiert ist, mit unklaren oder verwirrenden Namen für Variablen und Funktionen, fehlenden Kommentaren und keiner oder nur unzureichender Dokumentation. Schnittstellen sind unklar und schwer zu verstehen, Module sind stark miteinander verknüpft und schwer zu ändern oder zu erweitern."
    },
    ]
  }, {
    name: "Funktionalität",
    soft: false,
    description: "Der Auszubildende entwickelt Software, die die festgelegten Anforderungen und Spezifikationen erfüllt.",
    assessmentPoints: ["Umsetzung aller geforderten Funktionen",
      "Einhaltung der festgelegten Anforderungen und Spezifikationen",
      "Korrekte Implementierung der Funktionen",
      "Sicherstellung der Kompatibilität mit bestehenden Systemen",
      "Optimierung der Funktionalität für Leistung und Effizienz",],
    help: [{
      atRating: 1,
      description: "Alle geforderten Funktionen sind vollständig und korrekt umgesetzt. Anforderungen und Spezifikationen werden genau eingehalten. Funktionen sind optimal implementiert, kompatibel mit bestehenden Systemen und für Leistung und Effizienz optimiert.",
      example: "Der Auszubildende entwickelt eine Anwendung, die alle vorgegebenen Funktionen fehlerfrei und effizient ausführt. Die Anwendung ist vollständig kompatibel mit den bestehenden Systemen und zeigt eine hervorragende Leistung."
    }, {
      atRating: 3,
      description: "Die meisten geforderten Funktionen sind umgesetzt und funktionieren korrekt. Anforderungen und Spezifikationen werden überwiegend eingehalten. Funktionen sind weitgehend korrekt implementiert und kompatibel mit bestehenden Systemen. Leistung und Effizienz sind zufriedenstellend.",
      example: "Der Auszubildende entwickelt eine Anwendung, die die meisten geforderten Funktionen fehlerfrei ausführt und überwiegend kompatibel mit bestehenden Systemen ist. Die Anwendung zeigt eine zufriedenstellende Leistung."
    }, {
      atRating: 5,
      description: "Viele geforderte Funktionen sind nicht umgesetzt oder fehlerhaft. Anforderungen und Spezifikationen werden nur teilweise eingehalten. Funktionen sind unzureichend implementiert und nicht kompatibel mit bestehenden Systemen. Leistung und Effizienz sind ungenügend.",
      example: "Der Auszubildende entwickelt eine Anwendung, die viele der geforderten Funktionen nicht korrekt ausführt und nicht kompatibel mit bestehenden Systemen ist. Die Anwendung zeigt eine unzureichende Leistung."
    },
    ]
  }, {
    name: "Fehlertoleranz",
    soft: false,
    description: "Der Auszubildende schreibt robuste Software, die korrekt auf Ausnahmefälle und Fehler reagiert.",
    assessmentPoints: ["Identifizierung und Behandlung von Fehlerquellen",
      "Implementierung effektiver Fehlerbehandlungsmechanismen",
      "Sicherstellung der Systemstabilität bei Ausnahmefällen",
      "Nutzung von Logging und Monitoring zur Fehlerverfolgung",],
    help: [{
      atRating: 1,
      description: "Fehlerquellen werden vollständig identifiziert und behandelt. Fehlerbehandlungsmechanismen sind effektiv und sorgen für hohe Systemstabilität bei Ausnahmefällen. Umfassende Logging- und Monitoring-Mechanismen sind implementiert.",
      example: "Der Auszubildende entwickelt eine Anwendung, die alle potenziellen Fehlerquellen identifiziert und effektiv behandelt. Die Anwendung bleibt auch unter extremen Bedingungen stabil und nutzt umfassende Logging- und Monitoring-Mechanismen."
    }, {
      atRating: 3,
      description: "Die meisten Fehlerquellen werden identifiziert und behandelt. Fehlerbehandlungsmechanismen sind funktional und gewährleisten weitgehend die Systemstabilität. Logging- und Monitoring-Mechanismen sind implementiert.",
      example: "Der Auszubildende entwickelt eine Anwendung, die die meisten Fehlerquellen identifiziert und behandelt. Die Anwendung bleibt unter normalen Bedingungen stabil und nutzt grundlegende Logging- und Monitoring-Mechanismen."
    }, {
      atRating: 5,
      description: "Viele Fehlerquellen werden nicht identifiziert oder behandelt. Fehlerbehandlungsmechanismen sind unzureichend und gewährleisten nicht die Systemstabilität. Logging- und Monitoring-Mechanismen fehlen weitgehend.",
      example: "Der Auszubildende entwickelt eine Anwendung, die viele Fehlerquellen nicht erkennt oder behandelt. Die Anwendung ist instabil bei Ausnahmefällen und nutzt kaum Logging- und Monitoring-Mechanismen."
    },
    ]
  }, {
    name: "Testabdeckung",
    soft: false,
    description: "Der Auszubildende sorgt für einen hohen Grad an Unit-Test-Abdeckung und hohe Testqualität.",
    assessmentPoints: ["Erstellung und Pflege von Unit-Tests",
      "Hohe Abdeckung des Codes durch Tests",
      "Durchführung von Integrationstests",
      "Dokumentation und Analyse der Testergebnisse",
      "Regelmäßige Durchführung von Regressionstests",
      "Automatisierung von Tests zur Effizienzsteigerung",],
    help: [{
      atRating: 1,
      description: "Der Auszubildende erstellt und pflegt umfassende Unit-Tests, die eine sehr hohe Abdeckung des Codes sicherstellen. Integrationstests werden regelmäßig durchgeführt. Testergebnisse werden gründlich dokumentiert und analysiert. Regressionstests werden konsequent und regelmäßig durchgeführt, und Tests sind weitgehend automatisiert.",
      example: "Der Auszubildende hat eine Suite von Unit-Tests entwickelt, die 95% des Codes abdeckt, führt regelmäßig Integrationstests durch und dokumentiert die Ergebnisse detailliert. Automatisierte Regressionstests laufen bei jeder Änderung und stellen sicher, dass keine neuen Fehler eingeführt werden."
    }, {
      atRating: 3,
      description: "Der Auszubildende erstellt und pflegt Unit-Tests, die eine gute Abdeckung des Codes sicherstellen. Integrationstests werden durchgeführt. Testergebnisse werden dokumentiert und analysiert. Regressionstests werden regelmäßig durchgeführt, und einige Tests sind automatisiert.",
      example: "Der Auszubildende hat eine Suite von Unit-Tests entwickelt, die 70% des Codes abdeckt, führt regelmäßig Integrationstests durch und dokumentiert die Ergebnisse ausreichend. Automatisierte Tests werden teilweise genutzt, um die Effizienz zu steigern."
    }, {
      atRating: 5,
      description: "Der Auszubildende erstellt und pflegt nur wenige Unit-Tests, die eine geringe Abdeckung des Codes sicherstellen. Integrationstests werden selten durchgeführt. Testergebnisse werden kaum dokumentiert und analysiert. Regressionstests werden unregelmäßig durchgeführt, und Tests sind kaum automatisiert.",
      example: "Der Auszubildende hat eine Suite von Unit-Tests entwickelt, die weniger als 30% des Codes abdeckt, führt selten Integrationstests durch und dokumentiert die Ergebnisse kaum. Automatisierte Tests sind selten oder nicht vorhanden."
    },
    ]
  }, {
    name: "Datenbankkenntnisse",
    soft: false,
    description: "Der Auszubildende entwirft und implementiert Datenbankstrukturen sinvoll und korrekt.",
    assessmentPoints: ["Verständnis der Datenbanktheorie und -konzepte",
      "Entwurf effizienter und normalisierter Datenbankstrukturen",
      "Anwendung von SQL für Datenmanipulation und -abfrage",
      "Optimierung von Datenbankabfragen und -leistung",
      "Sicherstellung der Datenintegrität und -sicherheit",
      "Nutzung von NoSQL-Datenbanken und deren Anwendungsfällen",],
    help: [{
      atRating: 1,
      description: "Der Auszubildende zeigt ein tiefes Verständnis der Datenbanktheorie und -konzepte. Er entwirft sehr effiziente und vollständig normalisierte Datenbankstrukturen. SQL wird äußerst kompetent für Datenmanipulation und -abfragen angewendet. Datenbankabfragen und -leistung werden optimal optimiert. Datenintegrität und -sicherheit werden vollständig sichergestellt. NoSQL-Datenbanken werden bei geeigneten Anwendungsfällen effektiv genutzt.",
      example: "Der Auszubildende entwirft eine komplexe, vollständig normalisierte Datenbank, die alle Best Practices der Datenbanktheorie anwendet. SQL-Abfragen sind hoch optimiert, und die Datenbank zeigt hervorragende Leistung und Sicherheit. NoSQL-Datenbanken werden bei Bedarf effizient integriert und genutzt."
    }, {
      atRating: 3,
      description: "Der Auszubildende zeigt ein gutes Verständnis der Datenbanktheorie und -konzepte. Er entwirft effiziente und normalisierte Datenbankstrukturen. SQL wird kompetent für Datenmanipulation und -abfragen angewendet. Datenbankabfragen und -leistung werden gut optimiert. Datenintegrität und -sicherheit werden sichergestellt. NoSQL-Datenbanken werden bei geeigneten Anwendungsfällen genutzt.",
      example: "Der Auszubildende entwirft eine normalisierte Datenbank, die die wichtigsten Best Practices der Datenbanktheorie anwendet. SQL-Abfragen sind gut optimiert, und die Datenbank zeigt gute Leistung und Sicherheit. NoSQL-Datenbanken werden bei Bedarf genutzt."
    }, {
      atRating: 5,
      description: "Der Auszubildende zeigt ein begrenztes Verständnis der Datenbanktheorie und -konzepte. Er entwirft ineffiziente oder nicht normalisierte Datenbankstrukturen. SQL wird nur teilweise kompetent für Datenmanipulation und -abfragen angewendet. Datenbankabfragen und -leistung werden kaum optimiert. Datenintegrität und -sicherheit werden unzureichend sichergestellt. NoSQL-Datenbanken werden selten oder ineffektiv genutzt.",
      example: "Der Auszubildende entwirft eine Datenbank, die nicht normalisiert ist und viele Redundanzen aufweist. SQL-Abfragen sind ineffizient, und die Datenbank zeigt schlechte Leistung und Sicherheitslücken. NoSQL-Datenbanken werden kaum oder gar nicht genutzt, auch wenn sie geeignet wären."
    },
    ]
  }, {
    name: "Komplexität",
    soft: true,
    description: "Der Auszubildende implementiert und nutzt komplexe Algorithmen und Datenstrukturen effektiv.",
    assessmentPoints: ["Anwendung und Implementierung fortgeschrittener Algorithmen",
      "Effiziente Nutzung von Datenstrukturen",
      "Optimierung des Codes für Leistung und Effizienz",
      "Verständnis und Anwendung von Big-O-Notation zur Analyse der Komplexität",
      "Fähigkeit zur Lösung komplexer Probleme durch innovative Ansätze",
      "Dokumentation und Erklärung komplexer Algorithmen",
      "Anpassung komplexer Lösungen an spezifische Projektanforderungen",
      "Bewertung und Reduzierung der kognitiven Belastung des Codes",],
    help: [{
      atRating: 1,
      description: "Der Auszubildende implementiert und nutzt komplexe Algorithmen und Datenstrukturen sehr effektiv. Er wendet fortgeschrittene Algorithmen an und optimiert den Code für höchste Leistung und Effizienz. Er versteht und nutzt die Big-O-Notation umfassend zur Analyse der Komplexität und löst komplexe Probleme durch innovative Ansätze. Komplexe Algorithmen werden klar dokumentiert und erklärt. Lösungen werden spezifisch an die Projektanforderungen angepasst, und die kognitive Belastung des Codes wird aktiv reduziert.",
      example: "Der Auszubildende entwickelt einen komplexen Algorithmus zur Datenverarbeitung, optimiert diesen für maximale Effizienz und dokumentiert ihn ausführlich. Er nutzt die Big-O-Notation zur Analyse der Laufzeit und passt die Lösung an die spezifischen Anforderungen des Projekts an. Der Code ist klar und verständlich, wodurch die kognitive Belastung minimiert wird."
    }, {
      atRating: 2,
      description: "Der Auszubildende implementiert und nutzt komplexe Algorithmen und Datenstrukturen effektiv. Er wendet fortgeschrittene Algorithmen an und optimiert den Code für Leistung und Effizienz. Er versteht und nutzt die Big-O-Notation zur Analyse der Komplexität und löst komplexe Probleme durch innovative Ansätze. Komplexe Algorithmen werden dokumentiert und erklärt. Lösungen werden an die Projektanforderungen angepasst.",
      example: "Der Auszubildende entwickelt einen komplexen Algorithmus zur Datenverarbeitung, optimiert diesen für gute Effizienz und dokumentiert ihn ausreichend. Er nutzt die Big-O-Notation zur Analyse der Laufzeit und passt die Lösung an die spezifischen Anforderungen des Projekts an."
    }
    ]
  }, {
    name: "Verständnis der Architektur",
    soft: true,
    description: "Der Auszubildende versteht und wendet Softwarearchitekturen und Design-Patterns an.",
    assessmentPoints: ["Anwendung von Design-Patterns und Best Practices der Softwarearchitektur",
      "Verständnis und Nutzung verschiedener Architekturtypen (z.B. MVC, Microservices, Layered Architecture)",
      "Gestaltung und Dokumentation von Architekturen",
      "Berücksichtigung von Skalierbarkeit und Wartbarkeit",
      "Durchführung von Architektur-Reviews und -Analysen",
      "Anpassung der Architektur an sich ändernde Anforderungen",],
    help: [{
      atRating: 1,
      description: "Der Auszubildende wendet Design-Patterns und Best Practices der Softwarearchitektur sehr effektiv an. Er versteht und nutzt verschiedene Architekturtypen umfassend und gestaltet sowie dokumentiert Architekturen klar und detailliert. Skalierbarkeit und Wartbarkeit werden stets berücksichtigt. Er führt regelmäßig Architektur-Reviews und -Analysen durch und passt die Architektur proaktiv an sich ändernde Anforderungen an.",
      example: "Der Auszubildende entwirft eine Microservices-Architektur für ein neues Projekt, dokumentiert sie detailliert und berücksichtigt dabei Skalierbarkeit und Wartbarkeit. Er führt regelmäßige Reviews durch und passt die Architektur bei Bedarf an neue Anforderungen an, wobei er verschiedene Design-Patterns zur Lösung spezifischer Probleme einsetzt."
    }, {
      atRating: 2,
      description: "Der Auszubildende wendet Design-Patterns und Best Practices der Softwarearchitektur effektiv an. Er versteht und nutzt verschiedene Architekturtypen und gestaltet sowie dokumentiert Architekturen klar. Skalierbarkeit und Wartbarkeit werden berücksichtigt. Er führt Architektur-Reviews und -Analysen durch und passt die Architektur an sich ändernde Anforderungen an.",
      example: "Der Auszubildende entwirft eine Layered Architecture für ein Projekt, dokumentiert sie klar und berücksichtigt dabei Skalierbarkeit und Wartbarkeit. Er führt Reviews durch und passt die Architektur bei Bedarf an neue Anforderungen an."
    }
    ]
  }, {
    name: "Sicherheit",
    soft: true,
    description: "Der Auszubildende erkennt potenzielle Sicherheitslücken und implementiert effektive Schutzmechanismen wie Authentifizierung, Autorisierung, Datenverschlüsselung und Sicherheitsprüfungen.",
    assessmentPoints: ["Identifizierung und Behebung von Sicherheitslücken",
      "Implementierung von Authentifizierungs- und Autorisierungsmechanismen",
      "Anwendung von Datenverschlüsselungstechniken",
      "Einhaltung von Sicherheitsstandards und -richtlinien",
      "Implementierung von sicheren Entwicklungspraktiken",],
    help: [{
      atRating: 1,
      description: "Der Auszubildende erkennt potenzielle Sicherheitslücken sehr frühzeitig und implementiert äußerst effektive Schutzmechanismen. Er wendet fortgeschrittene Authentifizierungs- und Autorisierungsmechanismen an, nutzt moderne Datenverschlüsselungstechniken und stellt die Einhaltung von Sicherheitsstandards und -richtlinien sicher. Sichere Entwicklungspraktiken werden konsequent umgesetzt.",
      example: "Der Auszubildende identifiziert und behebt Sicherheitslücken im System vor einem größeren Release, implementiert eine Zwei-Faktor-Authentifizierung und verschlüsselt alle sensiblen Daten. Er führt regelmäßige Sicherheitsüberprüfungen durch und stellt sicher, dass alle Sicherheitsstandards und -richtlinien eingehalten werden."
    }, {
      atRating: 2,
      description: "Der Auszubildende erkennt potenzielle Sicherheitslücken und implementiert effektive Schutzmechanismen. Er wendet Authentifizierungs- und Autorisierungsmechanismen an, nutzt Datenverschlüsselungstechniken und hält Sicherheitsstandards und -richtlinien ein. Sichere Entwicklungspraktiken werden angewendet.",
      example: "Der Auszubildende identifiziert und behebt Sicherheitslücken im System, implementiert grundlegende Authentifizierungs- und Autorisierungsmechanismen und verschlüsselt sensible Daten. Er stellt sicher, dass die Sicherheitsstandards und -richtlinien eingehalten werden und wendet sichere Entwicklungspraktiken an."
    }
    ]
  }, {
    name: "Deployment-Lifecycle",
    soft: true,
    description: "Der Auszubildende kennt den Deployment-Lifecycle seiner Applikation und implementiert und konfiguriert CI/CD-Pipelines.",
    assessmentPoints: ["Verständnis des Deployment-Lifecycles einer Applikation",
      "Implementierung und Konfiguration von CI/CD-Pipelines",
      "Automatisierung von Build-, Test- und Deployment-Prozessen",
      "Sicherstellung der Konsistenz und Stabilität der Deployment-Prozesse",
      "Dokumentation des Deployment-Lifecycles und der Pipelines",
      "Integration von Sicherheitsprüfungen in den CI/CD-Prozess",
      "Optimierung der Deployment-Performance und -Zuverlässigkeit",],
    help: [{
      atRating: 1,
      description: "Der Auszubildende zeigt ein tiefes Verständnis des Deployment-Lifecycles und implementiert sowie konfiguriert CI/CD-Pipelines äußerst effektiv. Er automatisiert umfassend Build-, Test- und Deployment-Prozesse und stellt eine hohe Konsistenz und Stabilität sicher. Sicherheitsprüfungen sind nahtlos integriert und die Deployment-Performance sowie -Zuverlässigkeit werden kontinuierlich optimiert. Alle Prozesse sind detailliert dokumentiert.",
      example: "Der Auszubildende implementiert eine komplexe CI/CD-Pipeline, die alle Schritte von Code-Commit über automatisierte Tests bis zum Deployment auf Produktionsserver automatisiert. Sicherheitsprüfungen sind integriert, die Pipeline ist äußerst stabil und performant, und alle Schritte sind detailliert dokumentiert und optimiert."
    }, {
      atRating: 2,
      description: "Der Auszubildende zeigt ein gutes Verständnis des Deployment-Lifecycles und implementiert sowie konfiguriert CI/CD-Pipelines effektiv. Er automatisiert Build-, Test- und Deployment-Prozesse und stellt die Konsistenz und Stabilität sicher. Sicherheitsprüfungen sind integriert und die Deployment-Performance sowie -Zuverlässigkeit sind gut. Prozesse sind dokumentiert.",
      example: "Der Auszubildende implementiert eine CI/CD-Pipeline, die Build-, Test- und Deployment-Prozesse automatisiert. Sicherheitsprüfungen sind integriert, die Pipeline ist stabil und performant, und die Prozesse sind dokumentiert."
    }
    ]
  }, {
    name: "Integrationsstandards und Protokolle",
    soft: true,
    description: "Der Auszubildende kennt Integrationsstandards und Protokolle und kann diese korrekt implementieren.",
    assessmentPoints: ["Kenntnis gängiger Integrationsstandards (z.B. REST, SOAP)",
      "Implementierung und Nutzung von Integrationsprotokollen (z.B. HTTP, MQTT)",
      "Verständnis der Funktionsweise von APIs und Webservices",
      "Sicherstellung der Datenintegrität und -sicherheit bei Integrationen",
      "Dokumentation der Integrationsschnittstellen und -protokolle",],
    help: [{
      atRating: 1,
      description: "Der Auszubildende zeigt ein tiefes Verständnis des Deployment-Lifecycles und implementiert sowie konfiguriert CI/CD-Pipelines äußerst effektiv. Er automatisiert umfassend Build-, Test- und Deployment-Prozesse und stellt eine hohe Konsistenz und Stabilität sicher. Sicherheitsprüfungen sind nahtlos integriert und die Deployment-Performance sowie -Zuverlässigkeit werden kontinuierlich optimiert. Alle Prozesse sind detailliert dokumentiert.",
      example: "Der Auszubildende implementiert eine komplexe CI/CD-Pipeline, die alle Schritte von Code-Commit über automatisierte Tests bis zum Deployment auf Produktionsserver automatisiert. Sicherheitsprüfungen sind integriert, die Pipeline ist äußerst stabil und performant, und alle Schritte sind detailliert dokumentiert und optimiert."
    }, {
      atRating: 2,
      description: "Der Auszubildende zeigt ein gutes Verständnis des Deployment-Lifecycles und implementiert sowie konfiguriert CI/CD-Pipelines effektiv. Er automatisiert Build-, Test- und Deployment-Prozesse und stellt die Konsistenz und Stabilität sicher. Sicherheitsprüfungen sind integriert und die Deployment-Performance sowie -Zuverlässigkeit sind gut. Prozesse sind dokumentiert.",
      example: "Der Auszubildende implementiert eine CI/CD-Pipeline, die Build-, Test- und Deployment-Prozesse automatisiert. Sicherheitsprüfungen sind integriert, die Pipeline ist stabil und performant, und die Prozesse sind dokumentiert."
    }
    ]
  }, {
    name: "Technologische Aktualität",
    soft: true,
    description: "Der Auszubildende erkennt und nutzt aktuelle Technologien und Trends, insbesondere in Künstlicher Intelligenz (AI).",
    assessmentPoints: ["Kontinuierliche Weiterbildung in aktuellen Technologien",
      "Experimentieren und Anwenden neuer Tools und Frameworks",
      "Einbringen neuer Ideen und Technologien ins Team",
      "Bewertung der Relevanz und Anwendbarkeit neuer Technologien für aktuelle Projekte",
      "Beobachtung und Analyse von Technologietrends",],
    help: [{
      atRating: 1,
      description: "Der Auszubildende hält sich kontinuierlich über aktuelle Technologien und Trends auf dem Laufenden und nutzt diese äußerst effektiv. Er experimentiert regelmäßig mit neuen Tools und Frameworks, bringt innovative Ideen und Technologien ins Team ein und bewertet deren Relevanz und Anwendbarkeit für aktuelle Projekte präzise. Er beobachtet und analysiert Technologietrends aktiv und trägt dadurch wesentlich zur Weiterentwicklung des Teams bei.",
      example: "Der Auszubildende implementiert erfolgreich ein neues Machine-Learning-Framework in ein Projekt, das er nach umfassender Recherche und Bewertung als besonders geeignet identifiziert hat. Er teilt seine Erkenntnisse mit dem Team und bietet Workshops an, um das Wissen weiterzugeben."
    }, {
      atRating: 2,
      description: "Der Auszubildende hält sich über aktuelle Technologien und Trends auf dem Laufenden und nutzt diese effektiv. Er experimentiert mit neuen Tools und Frameworks, bringt neue Ideen und Technologien ins Team ein und bewertet deren Relevanz und Anwendbarkeit für aktuelle Projekte. Er beobachtet und analysiert Technologietrends und trägt zur Weiterentwicklung des Teams bei.",
      example: "Der Auszubildende testet ein neues AI-Tool und schlägt dessen Einsatz für ein aktuelles Projekt vor. Er bewertet die Anwendbarkeit und teilt seine Erkenntnisse mit dem Team, um die Effizienz des Projekts zu steigern."
    }
    ]
  },
]