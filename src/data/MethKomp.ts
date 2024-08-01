import {IKriterien} from "Frontend/mock_data/evaluation/FachkompetenzKriterien";

export const MethodenkompetenzKriterien: IKriterien[] = [
  {
    name: "Projektplanung",
    soft: false,
    description: "Der Auszubildende erstellt realistische und detaillierte Projektpläne und hält diese ein.",
    assessmentPoints: ["Erstellung realistischer und detaillierter Projektpläne",
      "Festlegung klarer Ziele und Aufgaben",
      "Entwicklung präziser Zeitpläne",
      "Effektive Ressourcenzuweisung",
      "Durchführung von Risikomanagement",
      "Regelmäßige Überprüfung und Anpassung der Pläne",
      "Sicherstellung der Einhaltung von Meilensteinen und Deadlines",
      "Kommunikation des Projektstatus an relevante Stakeholder"],
    help: [{
      atRating: 1,
      description: "Der Auszubildende erstellt sehr realistische und detaillierte Projektpläne mit klaren Zielen und präzisen Zeitplänen. Ressourcen werden effektiv zugewiesen, Risiken werden umfassend gemanagt und Pläne regelmäßig überprüft und angepasst. Meilensteine und Deadlines werden stets eingehalten, und der Projektstatus wird klar an alle Stakeholder kommuniziert.",
      example: "Der Auszubildende plant ein Projekt, setzt detaillierte Ziele und Aufgaben, erstellt präzise Zeitpläne und weist Ressourcen effizient zu. Risiken werden frühzeitig identifiziert und gemanagt. Alle Meilensteine und Deadlines werden eingehalten, und der Projektstatus wird regelmäßig und klar kommuniziert."
    }, {
      atRating: 3,
      description: "Der Auszubildende erstellt realistische und detaillierte Projektpläne mit klaren Zielen und angemessenen Zeitplänen. Ressourcen werden effektiv zugewiesen, Risiken werden gemanagt und Pläne regelmäßig überprüft. Meilensteine und Deadlines werden meist eingehalten, und der Projektstatus wird an Stakeholder kommuniziert.",
      example: "Der Auszubildende plant ein Projekt, setzt klare Ziele und Aufgaben, erstellt angemessene Zeitpläne und weist Ressourcen effektiv zu. Risiken werden berücksichtigt und gemanagt. Die meisten Meilensteine und Deadlines werden eingehalten, und der Projektstatus wird ausreichend kommuniziert."
    }, {
      atRating: 5,
      description: "Der Auszubildende erstellt unzureichende Projektpläne mit vagen Zielen und ungenauen Zeitplänen. Ressourcen werden ineffektiv zugewiesen, Risiken werden kaum gemanagt und Pläne werden selten überprüft. Meilensteine und Deadlines werden oft verfehlt, und der Projektstatus wird unzureichend kommuniziert.",
      example: "Der Auszubildende plant ein Projekt mit vagen Zielen und ungenauen Zeitplänen, weist Ressourcen ineffektiv zu und vernachlässigt das Risikomanagement. Meilensteine und Deadlines werden häufig nicht eingehalten, und der Projektstatus wird selten oder unklar kommuniziert."
    },
    ]
  }, {
    name: "Anforderungsanalyse",
    soft: false,
    description: "Der Auszubildende erfasst, definiert und dokumentiert Anforderungen präzise.",
    assessmentPoints: ["Präzises Erfassen und Dokumentieren von Anforderungen",
      "Sammlung relevanter Informationen von Stakeholdern",
      "Verstehen und Berücksichtigen der Bedürfnisse der Benutzer",
      "Erstellung detaillierter Spezifikationen",
      "Verifizierung und Validierung der Anforderungen",
      "Nutzung geeigneter Analysemethoden und -werkzeuge",
      "Dokumentation und Nachverfolgung von Änderungsanforderungen",
      "Sicherstellung der Nachvollziehbarkeit der Anforderungen"],
    help: [{
      atRating: 1,
      description: "Anforderungen werden sehr präzise erfasst und dokumentiert. Relevante Informationen werden umfassend von Stakeholdern gesammelt, und die Bedürfnisse der Benutzer werden vollständig verstanden und berücksichtigt. Detaillierte Spezifikationen werden erstellt, Anforderungen werden gründlich verifiziert und validiert. Geeignete Analysemethoden und -werkzeuge werden effektiv genutzt, und Änderungsanforderungen werden umfassend dokumentiert und nachverfolgt. Die Nachvollziehbarkeit der Anforderungen ist vollständig gewährleistet.",
      example: "Der Auszubildende erfasst und dokumentiert alle Anforderungen präzise, sammelt umfassende Informationen von Stakeholdern, berücksichtigt die Bedürfnisse der Benutzer vollständig und erstellt detaillierte Spezifikationen. Anforderungen werden gründlich verifiziert und validiert, und alle Änderungen werden umfassend dokumentiert und nachverfolgt."
    }, {
      atRating: 3,
      description: "Anforderungen werden präzise erfasst und dokumentiert. Relevante Informationen werden von Stakeholdern gesammelt, und die Bedürfnisse der Benutzer werden berücksichtigt. Detaillierte Spezifikationen werden erstellt, Anforderungen werden verifiziert und validiert. Geeignete Analysemethoden und -werkzeuge werden genutzt, und Änderungsanforderungen werden dokumentiert und nachverfolgt. Die Nachvollziehbarkeit der Anforderungen ist weitgehend gewährleistet.",
      example: "Der Auszubildende erfasst und dokumentiert Anforderungen präzise, sammelt relevante Informationen von Stakeholdern, berücksichtigt die Bedürfnisse der Benutzer und erstellt detaillierte Spezifikationen. Anforderungen werden verifiziert und validiert, und Änderungen werden dokumentiert und nachverfolgt."
    }, {
      atRating: 5,
      description: "Anforderungen werden unzureichend erfasst und dokumentiert. Informationen von Stakeholdern werden nur teilweise gesammelt, und die Bedürfnisse der Benutzer werden kaum berücksichtigt. Spezifikationen sind vage, Anforderungen werden selten verifiziert und validiert. Geeignete Analysemethoden und -werkzeuge werden kaum genutzt, und Änderungsanforderungen werden schlecht dokumentiert und nachverfolgt. Die Nachvollziehbarkeit der Anforderungen ist nicht gewährleistet.",
      example: "Der Auszubildende erfasst und dokumentiert Anforderungen unzureichend, sammelt nur teilweise Informationen von Stakeholdern und berücksichtigt die Bedürfnisse der Benutzer kaum. Spezifikationen sind unklar, Anforderungen werden selten verifiziert und validiert, und Änderungen werden schlecht dokumentiert und nachverfolgt."
    },
    ]
  }, {
    name: "Zeitmanagement",
    soft: false,
    description: "Der Auszubildende plant Aufgaben und Projekte effizient und schließt sie termingerecht ab.",
    assessmentPoints: ["Einhaltung realistischer Deadlines",
      "Priorisierung von Aufgaben basierend auf ihrer Wichtigkeit",
      "Effektive Nutzung der verfügbaren Zeit",
      "Bewältigung von Verzögerungen und Engpässen",
      "Regelmäßige Überprüfung und Anpassung der Zeitpläne",
      "Nutzung von Zeitmanagement-Tools und -Techniken",
      "Dokumentation und Analyse der Zeitverwendung"],
    help: [{
      atRating: 1,
      description: "Der Auszubildende hält alle Deadlines stets ein, priorisiert Aufgaben effizient und nutzt die verfügbare Zeit optimal. Verzögerungen und Engpässe werden proaktiv bewältigt. Zeitpläne werden regelmäßig überprüft und angepasst. Zeitmanagement-Tools und -Techniken werden effektiv eingesetzt, und die Zeitverwendung wird umfassend dokumentiert und analysiert.",
      example: "Der Auszubildende erstellt einen detaillierten Zeitplan für ein Projekt, hält alle Meilensteine und Deadlines ein, passt den Plan bei Bedarf an und dokumentiert die Zeitverwendung sorgfältig. Zeitmanagement-Tools werden regelmäßig genutzt, um die Effizienz zu steigern."
    }, {
      atRating: 3,
      description: "Der Auszubildende hält die meisten Deadlines ein, priorisiert Aufgaben angemessen und nutzt die verfügbare Zeit effektiv. Verzögerungen und Engpässe werden bewältigt. Zeitpläne werden regelmäßig überprüft und angepasst. Zeitmanagement-Tools und -Techniken werden genutzt, und die Zeitverwendung wird dokumentiert und analysiert.",
      example: "Der Auszubildende erstellt einen Zeitplan für ein Projekt, hält die meisten Meilensteine und Deadlines ein, passt den Plan bei Bedarf an und dokumentiert die Zeitverwendung ausreichend. Zeitmanagement-Tools werden genutzt, um die Effizienz zu unterstützen."
    }, {
      atRating: 5,
      description: "Der Auszubildende hält viele Deadlines nicht ein, priorisiert Aufgaben unzureichend und nutzt die verfügbare Zeit ineffektiv. Verzögerungen und Engpässe werden kaum bewältigt. Zeitpläne werden selten überprüft und angepasst. Zeitmanagement-Tools und -Techniken werden kaum genutzt, und die Zeitverwendung wird schlecht dokumentiert und analysiert.",
      example: "Der Auszubildende erstellt einen groben Zeitplan für ein Projekt, verpasst viele Meilensteine und Deadlines, passt den Plan selten an und dokumentiert die Zeitverwendung unzureichend. Zeitmanagement-Tools werden selten oder gar nicht genutzt."
    },
    ]
  }, {
    name: "Problemlösungsfähigkeit",
    soft: false,
    description: "Der Auszubildende reagiert effektiv und effizient auf Herausforderungen und unerwartete Schwierigkeiten.",
    assessmentPoints: ["Effektive Reaktion auf Herausforderungen und Schwierigkeiten",
      "Identifizierung und Analyse von Problemen",
      "Entwicklung und Bewertung möglicher Lösungen",
      "Umsetzung der besten Lösung",
      "Überprüfung und Bewertung der Lösungsergebnisse",
      "Dokumentation des Problemlösungsprozesses",
      "Nutzung kreativer Ansätze zur Problemlösung",
      "Zusammenarbeit mit anderen zur Lösung komplexer Probleme"],
    help: [{
      atRating: 1,
      description: "Der Auszubildende reagiert sehr effektiv auf Herausforderungen und Schwierigkeiten. Probleme werden schnell identifiziert und gründlich analysiert. Es werden kreative und praktikable Lösungen entwickelt und bewertet. Die beste Lösung wird effizient umgesetzt, und die Ergebnisse werden sorgfältig überprüft und bewertet. Der Problemlösungsprozess wird umfassend dokumentiert. Zusammenarbeit mit anderen wird effektiv genutzt.",
      example: "Der Auszubildende erkennt ein technisches Problem im Projekt, analysiert es gründlich, entwickelt mehrere kreative Lösungsmöglichkeiten, bewertet diese und setzt die beste Lösung erfolgreich um. Die Ergebnisse werden überprüft, dokumentiert und das Team wird bei der Problemlösung einbezogen."
    }, {
      atRating: 3,
      description: "Der Auszubildende reagiert effektiv auf Herausforderungen und Schwierigkeiten. Probleme werden identifiziert und analysiert. Es werden mögliche Lösungen entwickelt und bewertet. Die beste Lösung wird umgesetzt, und die Ergebnisse werden überprüft. Der Problemlösungsprozess wird dokumentiert. Zusammenarbeit mit anderen findet statt.",
      example: "Der Auszubildende erkennt ein Problem im Projekt, analysiert es, entwickelt mögliche Lösungen und setzt die beste um. Die Ergebnisse werden überprüft und dokumentiert, und das Team wird bei Bedarf einbezogen."
    }, {
      atRating: 5,
      description: "Der Auszubildende reagiert ineffektiv auf Herausforderungen und Schwierigkeiten. Probleme werden oft nicht identifiziert oder unzureichend analysiert. Lösungen werden kaum entwickelt oder bewertet. Die Umsetzung ist unzureichend, und die Ergebnisse werden selten überprüft. Der Problemlösungsprozess wird schlecht dokumentiert. Zusammenarbeit mit anderen erfolgt selten.",
      example: "Der Auszubildende erkennt ein Problem im Projekt nicht oder nur unzureichend, entwickelt keine oder wenige Lösungen und setzt diese schlecht um. Die Ergebnisse werden nicht überprüft und dokumentiert, und das Team wird kaum einbezogen."
    },
    ]
  }, {
    name: "Tool-Kompetenz",
    soft: false,
    description: "Der Auszubildende nutzt Entwicklungswerkzeuge und -umgebungen effekti.",
    assessmentPoints: ["Effektive Nutzung von Entwicklungswerkzeugen und -umgebungen",
      "Nutzung von Versionskontrollsystemen",
      "Kompetenter Einsatz von Debugging-Werkzeugen",
      "Nutzung von weiteren unterstützenden Tools"],
    help: [{
      atRating: 1,
      description: "Der Auszubildende nutzt Entwicklungswerkzeuge und -umgebungen sehr effektiv. Versionskontrollsysteme werden kompetent verwendet, Debugging-Werkzeuge werden effizient eingesetzt und weitere unterstützende Tools werden optimal genutzt.",
      example: "Der Auszubildende verwendet alle wichtigen Funktionen einer integrierten Entwicklungsumgebung (IDE) effektiv, beherrscht Git vollständig, nutzt Debugging-Werkzeuge effizient und integriert weitere Tools wie Build-Automatisierung und Code-Analyse nahtlos in den Entwicklungsprozess."
    }, {
      atRating: 3,
      description: "Der Auszubildende nutzt Entwicklungswerkzeuge und -umgebungen effektiv. Versionskontrollsysteme werden kompetent verwendet, Debugging-Werkzeuge werden genutzt und weitere unterstützende Tools werden eingesetzt.",
      example: "Der Auszubildende verwendet die grundlegenden Funktionen einer IDE effektiv, beherrscht die grundlegenden Funktionen von Git, nutzt Debugging-Werkzeuge und setzt weitere Tools wie Build-Skripte und einfache Code-Analyse ein."
    }, {
      atRating: 5,
      description: "Der Auszubildende nutzt Entwicklungswerkzeuge und -umgebungen ineffektiv. Versionskontrollsysteme werden kaum verwendet, Debugging-Werkzeuge werden nicht kompetent eingesetzt und weitere unterstützende Tools werden wenig oder gar nicht genutzt.",
      example: "Der Auszubildende verwendet die IDE nur für grundlegende Aufgaben, hat Schwierigkeiten mit den grundlegenden Funktionen von Git, setzt Debugging-Werkzeuge kaum ein und nutzt keine weiteren unterstützenden Tools."
    },
    ]
  }, {
    name: "Dokumentation",
    soft: false,
    description: "Der Auszubildende dokumentiert seine Arbeitsergebnisse vollständig und verständlich.",
    assessmentPoints: ["Vollständige und verständliche Dokumentation der Arbeitsergebnisse",
      "Erstellung von Benutzerdokumentationen",
      "Erstellung von technischen Dokumentationen",
      "Pflege und Aktualisierung der Dokumentation",
      "Nutzung geeigneter Dokumentationstools",
      "Sicherstellung der Zugänglichkeit der Dokumentation für relevante Stakeholder",
      "Überprüfung und Validierung der Dokumentationsqualität",
      "Anpassung der Dokumentation an neue Anforderungen und Änderungen"],
    help: [{
      atRating: 1,
      description: "Der Auszubildende erstellt sehr vollständige und verständliche Dokumentationen. Sowohl Benutzer- als auch technische Dokumentationen sind umfassend und klar. Dokumentationen werden regelmäßig gepflegt und aktualisiert. Geeignete Dokumentationstools werden optimal genutzt. Die Dokumentation ist für alle relevanten Stakeholder leicht zugänglich, die Qualität wird regelmäßig überprüft und validiert. Anpassungen an neue Anforderungen und Änderungen erfolgen zeitnah und vollständig.",
      example: "Der Auszubildende erstellt eine detaillierte Benutzerdokumentation und eine umfassende technische Dokumentation. Beide Dokumentationen werden regelmäßig aktualisiert und sind für alle Stakeholder leicht zugänglich. Dokumentationstools wie Wikis oder spezielle Software werden effizient genutzt, und die Dokumentationsqualität wird regelmäßig überprüft und verbessert."
    }, {
      atRating: 3,
      description: "Der Auszubildende erstellt vollständige und verständliche Dokumentationen. Sowohl Benutzer- als auch technische Dokumentationen sind ausreichend und klar. Dokumentationen werden gepflegt und aktualisiert. Geeignete Dokumentationstools werden genutzt. Die Dokumentation ist für relevante Stakeholder zugänglich, die Qualität wird überprüft und validiert. Anpassungen an neue Anforderungen und Änderungen erfolgen zeitnah.",
      example: "Der Auszubildende erstellt eine ausreichende Benutzerdokumentation und eine klare technische Dokumentation. Beide Dokumentationen werden regelmäßig aktualisiert und sind für relevante Stakeholder zugänglich. Dokumentationstools werden effektiv genutzt, und die Dokumentationsqualität wird überprüft und angepasst."
    }, {
      atRating: 5,
      description: "Der Auszubildende erstellt unvollständige oder schwer verständliche Dokumentationen. Benutzer- und technische Dokumentationen sind unzureichend oder fehlen. Dokumentationen werden kaum gepflegt und aktualisiert. Geeignete Dokumentationstools werden wenig oder gar nicht genutzt. Die Dokumentation ist für relevante Stakeholder schwer zugänglich, die Qualität wird selten überprüft und validiert. Anpassungen an neue Anforderungen und Änderungen erfolgen nur unzureichend.",
      example: "Der Auszubildende erstellt eine unvollständige Benutzerdokumentation und eine unklare technische Dokumentation. Beide Dokumentationen werden selten aktualisiert und sind für relevante Stakeholder schwer zugänglich. Dokumentationstools werden kaum genutzt, und die Dokumentationsqualität wird selten überprüft und verbessert."
    },
    ]
  }, {
    name: "Recherche und Informationsbeschaffung",
    soft: false,
    description: "Der Auszubildende nutz Ressourcen effektiv um korrekte Informationen zu beschaffen.",
    assessmentPoints: ["Effektive Nutzung von Online- und Offline-Ressourcen",
      "Kritische Bewertung und Auswahl relevanter Informationen",
      "Nutzung wissenschaftlicher und technischer Literatur",
      "Dokumentation und Organisation der recherchierten Informationen",
      "Anwendung von Informationsbeschaffungstechniken und -tools",
      "Zusammenarbeit mit Kollegen zur Informationssammlung",
      "Integration der gefundenen Informationen in Projekte",
      "Kontinuierliche Aktualisierung des Wissensstands durch regelmäßige Recherche"],
    help: [{
      atRating: 1,
      description: "Der Auszubildende nutzt Online- und Offline-Ressourcen sehr effektiv. Informationen werden kritisch bewertet und relevante Quellen ausgewählt. Wissenschaftliche und technische Literatur wird umfassend genutzt. Recherchierte Informationen werden systematisch dokumentiert und organisiert. Informationsbeschaffungstechniken und -tools werden optimal eingesetzt. Zusammenarbeit mit Kollegen ist effektiv, und die gefundenen Informationen werden nahtlos in Projekte integriert. Der Wissensstand wird kontinuierlich durch regelmäßige Recherche aktualisiert.",
      example: "Der Auszubildende verwendet sowohl digitale Bibliotheken als auch Fachzeitschriften, bewertet die Qualität der Quellen kritisch und organisiert die Informationen in einer strukturierten Datenbank. Er nutzt fortschrittliche Recherchetools und arbeitet eng mit Kollegen zusammen, um umfassende und relevante Informationen in Projekte zu integrieren."
    }, {
      atRating: 3,
      description: "Der Auszubildende nutzt Online- und Offline-Ressourcen effektiv. Informationen werden bewertet und relevante Quellen ausgewählt. Wissenschaftliche und technische Literatur wird genutzt. Recherchierte Informationen werden dokumentiert und organisiert. Informationsbeschaffungstechniken und -tools werden angewendet. Zusammenarbeit mit Kollegen findet statt, und die gefundenen Informationen werden in Projekte integriert. Der Wissensstand wird durch regelmäßige Recherche aktualisiert.",
      example: "Der Auszubildende nutzt Fachbücher und Online-Datenbanken, bewertet die Quellen und organisiert die Informationen in einer strukturierten Form. Er nutzt grundlegende Recherchetools und arbeitet mit Kollegen zusammen, um relevante Informationen in Projekte zu integrieren."
    }, {
      atRating: 5,
      description: "Der Auszubildende nutzt Online- und Offline-Ressourcen ineffektiv. Informationen werden kaum bewertet und relevante Quellen nicht immer ausgewählt. Wissenschaftliche und technische Literatur wird selten genutzt. Recherchierte Informationen werden schlecht dokumentiert und organisiert. Informationsbeschaffungstechniken und -tools werden kaum genutzt. Zusammenarbeit mit Kollegen erfolgt selten, und die gefundenen Informationen werden kaum in Projekte integriert. Der Wissensstand wird nicht regelmäßig aktualisiert.",
      example: "Der Auszubildende verwendet hauptsächlich oberflächliche Internetquellen ohne kritische Bewertung, dokumentiert Informationen unstrukturiert und nutzt keine speziellen Recherchetools. Die Zusammenarbeit mit Kollegen ist gering, und die Integration der Informationen in Projekte erfolgt selten."
    },
    ]
  }, {
    name: "Präsentation",
    soft: false,
    description: "Der Auszubildende präsentiert seine Arbeitsergebnisse klar, strukturiert und ansprechend.",
    assessmentPoints: ["Klare und strukturierte Präsentation der Arbeitsergebnisse",
      "Nutzung geeigneter visueller und mündlicher Präsentationstechniken",
      "Einsatz passender Medien und Hilfsmittel",
      "Vorbereitung und Durchführung effektiver Präsentationen",
      "Anpassung der Präsentation an das Publikum",
      "Sicherstellung der Verständlichkeit der Präsentation",
      "Evaluation und Verbesserung der eigenen Präsentationsfähigkeiten"],
    help: [{
      atRating: 1,
      description: "Der Auszubildende präsentiert seine Arbeitsergebnisse sehr klar und strukturiert. Es werden hervorragende visuelle und mündliche Präsentationstechniken genutzt, und die Medien und Hilfsmittel sind optimal gewählt. Präsentationen sind sehr gut vorbereitet und durchgeführt, perfekt an das Publikum angepasst und leicht verständlich. Der Auszubildende evaluiert und verbessert kontinuierlich seine Präsentationsfähigkeiten.",
      example: "Der Auszubildende erstellt eine Präsentation, die logisch strukturiert ist, hochwertige Grafiken und Visualisierungen verwendet und klar und verständlich vorgetragen wird. Die Präsentation ist an das Publikum angepasst und der Auszubildende nimmt regelmäßig Feedback zur Verbesserung seiner Fähigkeiten auf."
    }, {
      atRating: 3,
      description: "Der Auszubildende präsentiert seine Arbeitsergebnisse klar und strukturiert. Geeignete visuelle und mündliche Präsentationstechniken werden genutzt, und die Medien und Hilfsmittel sind passend gewählt. Präsentationen sind gut vorbereitet und durchgeführt, an das Publikum angepasst und verständlich. Der Auszubildende evaluiert und verbessert seine Präsentationsfähigkeiten.",
      example: "Der Auszubildende erstellt eine Präsentation, die klar strukturiert ist, passende Grafiken und Visualisierungen verwendet und verständlich vorgetragen wird. Die Präsentation ist an das Publikum angepasst und der Auszubildende nimmt Feedback zur Verbesserung seiner Fähigkeiten auf."
    }, {
      atRating: 5,
      description: "Der Auszubildende präsentiert seine Arbeitsergebnisse unklar und wenig strukturiert. Visuelle und mündliche Präsentationstechniken werden kaum genutzt, und die Medien und Hilfsmittel sind unpassend gewählt. Präsentationen sind schlecht vorbereitet und durchgeführt, nicht an das Publikum angepasst und schwer verständlich. Der Auszubildende evaluiert und verbessert seine Präsentationsfähigkeiten kaum.",
      example: "Der Auszubildende erstellt eine Präsentation, die unstrukturiert ist, wenige oder unpassende Grafiken verwendet und schwer verständlich vorgetragen wird. Die Präsentation ist nicht an das Publikum angepasst und der Auszubildende nimmt wenig bis kein Feedback zur Verbesserung seiner Fähigkeiten auf."
    },
    ]
  }, {
    name: "Prozessverständnis",
    soft: false,
    description: "Der Auszubildende versteht und wendet verschiedene Entwicklungsprozesse und -methodologien an.",
    assessmentPoints: ["Verständnis und Anwendung verschiedener Entwicklungsprozesse",
      "Kenntnisse in agilen Methoden wie Scrum und Kanban",
      "Kenntnisse in klassischen Modellen wie Wasserfall und V-Modell",
      "Anwendung von Best Practices im Projektmanagement",
      "Nutzung geeigneter Prozess- und Methodologie-Tools",
      "Dokumentation und Analyse der Prozessabläufe",
      "Anpassung und Optimierung der Prozesse basierend auf Feedback"],
    help: [{
      atRating: 1,
      description: "Der Auszubildende hat ein tiefes Verständnis und wendet verschiedene Entwicklungsprozesse und -methodologien sehr effektiv an. Er verfügt über fundierte Kenntnisse in agilen Methoden wie Scrum und Kanban sowie in klassischen Modellen wie Wasserfall und V-Modell. Best Practices im Projektmanagement werden konsequent angewendet, geeignete Tools werden optimal genutzt. Prozessabläufe werden detailliert dokumentiert und analysiert. Prozesse werden kontinuierlich basierend auf Feedback angepasst und optimiert.",
      example: "Der Auszubildende führt ein Projekt nach Scrum durch, nutzt alle relevanten Tools, dokumentiert den gesamten Prozess detailliert und passt die Methoden basierend auf regelmäßigen Retrospektiven und Feedback kontinuierlich an."
    }, {
      atRating: 3,
      description: "Der Auszubildende hat ein gutes Verständnis und wendet verschiedene Entwicklungsprozesse und -methodologien an. Er verfügt über Kenntnisse in agilen Methoden wie Scrum und Kanban sowie in klassischen Modellen wie Wasserfall und V-Modell. Best Practices im Projektmanagement werden angewendet, geeignete Tools werden genutzt. Prozessabläufe werden dokumentiert und analysiert. Prozesse werden basierend auf Feedback angepasst und optimiert.",
      example: "Der Auszubildende führt ein Projekt nach einem agilen oder klassischen Modell durch, nutzt relevante Tools, dokumentiert den Prozess und passt die Methoden basierend auf Feedback an."
    }, {
      atRating: 5,
      description: "Der Auszubildende hat ein begrenztes Verständnis und wendet verschiedene Entwicklungsprozesse und -methodologien kaum an. Kenntnisse in agilen Methoden wie Scrum und Kanban sowie in klassischen Modellen wie Wasserfall und V-Modell sind unzureichend. Best Practices im Projektmanagement werden selten angewendet, geeignete Tools werden kaum genutzt. Prozessabläufe werden schlecht dokumentiert und analysiert. Prozesse werden kaum basierend auf Feedback angepasst und optimiert.",
      example: "Der Auszubildende führt ein Projekt ohne klare Methodologie durch, nutzt wenige oder keine relevanten Tools, dokumentiert den Prozess kaum und passt die Methoden selten an."
    },
    ]
  }, {
    name: "Methodische Vielfalt",
    soft: true,
    description: "Der Auszubildende kennt und wendet verschiedene Entwicklungsmethoden und -techniken an.",
    assessmentPoints: ["Anwendung des Wasserfallmodells für lineare Projektstrukturen",
      "Nutzung des V-Modells für Validierung und Verifizierung",
      "Implementierung agiler Methoden wie Scrum und Kanban",
      "Anwendung von Test-Driven Development (TDD) zur Qualitätssicherung",
      "Anpassung der Methodik an projekt- und team-spezifische Anforderungen",
      "Kombination verschiedener Methoden für hybride Ansätze",
      "Dokumentation und Analyse der angewendeten Methoden zur kontinuierlichen Verbesserung"],
    help: [{
      atRating: 1,
      description: "Der Auszubildende kennt und wendet eine breite Palette von Entwicklungsmethoden und -techniken an, passt diese flexibel an projekt- und team-spezifische Anforderungen an und kombiniert verschiedene Methoden erfolgreich für hybride Ansätze. Er dokumentiert und analysiert die angewendeten Methoden kontinuierlich zur Verbesserung.",
      example: "Der Auszubildende nutzt das Wasserfallmodell für ein strukturiertes Projekt, wechselt zu Scrum für ein iteratives Projekt und integriert TDD für die Qualitätssicherung. Er dokumentiert und analysiert die Methoden, um zukünftige Projekte effizienter zu gestalten."
    }, {
      atRating: 2,
      description: "Der Auszubildende kennt und wendet verschiedene Entwicklungsmethoden und -techniken an, passt diese an projekt- und team-spezifische Anforderungen an und dokumentiert die angewendeten Methoden.",
      example: "Der Auszubildende nutzt das Wasserfallmodell für ein strukturiertes Projekt, implementiert Scrum für ein agiles Projekt und setzt TDD zur Qualitätssicherung ein. Er dokumentiert die angewendeten Methoden und passt sie bei Bedarf an."
    }
    ]
  }, {
    name: "Testmethoden",
    soft: true,
    description: "Der Auszubildende wählt und wendet geeignete Testverfahren und -methoden an, um die Qualität und Zuverlässigkeit der Software zu gewährleisten.",
    assessmentPoints: ["Auswahl und Anwendung geeigneter Unit-Test-Strategien",
      "Durchführung von Integrationstests zur Überprüfung der Zusammenarbeit von Komponenten",
      "Einsatz von Systemtests zur Validierung der gesamten Softwarelösung",
      "Implementierung von Akzeptanztests zur Sicherstellung der Benutzeranforderungen",
      "Durchführung von Regressionstests zur Sicherstellung der Stabilität nach Änderungen",
      "Nutzung automatisierter Testwerkzeuge zur Effizienzsteigerung",
      "Dokumentation und Analyse der Testergebnisse zur Fehlerverfolgung",
      "Anpassung der Teststrategien basierend auf Projekterfahrungen und Feedback"],
    help: [{
      atRating: 1,
      description: "Der Auszubildende wählt und wendet eine breite Palette geeigneter Testverfahren und -methoden äußerst effektiv an, um die Qualität und Zuverlässigkeit der Software zu gewährleisten. Er setzt automatisierte Testwerkzeuge effizient ein, dokumentiert und analysiert Testergebnisse umfassend und passt Teststrategien kontinuierlich basierend auf Projekterfahrungen und Feedback an.",
      example: "Der Auszubildende entwickelt umfassende Unit-Tests, führt gründliche Integrationstests und Systemtests durch, implementiert Akzeptanztests und Regressionstests, nutzt automatisierte Testwerkzeuge und dokumentiert die Ergebnisse detailliert. Er analysiert die Testergebnisse und passt die Teststrategien basierend auf den Erfahrungen im Projekt kontinuierlich an."
    }, {
      atRating: 2,
      description: "Der Auszubildende wählt und wendet geeignete Testverfahren und -methoden an, um die Qualität und Zuverlässigkeit der Software zu gewährleisten. Er nutzt automatisierte Testwerkzeuge, dokumentiert und analysiert Testergebnisse und passt Teststrategien basierend auf Projekterfahrungen und Feedback an.",
      example: "Der Auszubildende entwickelt Unit-Tests, führt Integrationstests und Systemtests durch, implementiert Akzeptanztests und Regressionstests, nutzt automatisierte Testwerkzeuge und dokumentiert die Ergebnisse. Er analysiert die Testergebnisse und passt die Teststrategien bei Bedarf an."
    }
    ]
  }, {
    name: "Anpassungsfähigkeit",
    soft: true,
    description: "Der Auszubildende reagiert flexibel und effektiv auf Änderungen im Projektverlauf.",
    assessmentPoints: ["Erkennen von Änderungsbedarf im Projektverlauf",
      "Entwicklung und Implementierung geeigneter Anpassungen",
      "Proaktive Lösungssuche bei unerwarteten Herausforderungen",
      "Flexibles Reagieren auf Kunden- und Marktanforderungen",
      "Anpassung von Arbeitsmethoden und -prozessen bei Bedarf",
      "Zusammenarbeit mit Teammitgliedern zur Erarbeitung von Anpassungsstrategien",
      "Dokumentation und Kommunikation von Änderungen an relevante Stakeholder",
      "Evaluation und Verbesserung der Anpassungsstrategien für zukünftige Projekte"],
    help: [{
      atRating: 1,
      description: "Der Auszubildende erkennt Änderungsbedarf frühzeitig und entwickelt sowie implementiert geeignete Anpassungen äußerst effektiv. Er sucht proaktiv nach Lösungen bei unerwarteten Herausforderungen und reagiert flexibel auf Kunden- und Marktanforderungen. Arbeitsmethoden und -prozesse werden bei Bedarf angepasst. Er arbeitet eng mit Teammitgliedern zusammen, um Anpassungsstrategien zu erarbeiten, dokumentiert und kommuniziert Änderungen umfassend und evaluiert sowie verbessert kontinuierlich die Anpassungsstrategien für zukünftige Projekte.",
      example: "Der Auszubildende erkennt frühzeitig, dass eine Marktänderung die Ausrichtung des Projekts beeinflusst, und entwickelt sofort eine neue Strategie. Er passt die Arbeitsmethoden an, arbeitet eng mit dem Team zusammen, kommuniziert die Änderungen klar an alle Stakeholder und evaluiert die Effektivität der Anpassung, um zukünftige Projekte zu verbessern."
    }, {
      atRating: 2,
      description: "Der Auszubildende erkennt Änderungsbedarf und entwickelt sowie implementiert geeignete Anpassungen. Er sucht proaktiv nach Lösungen bei unerwarteten Herausforderungen und reagiert flexibel auf Kunden- und Marktanforderungen. Arbeitsmethoden und -prozesse werden bei Bedarf angepasst. Er arbeitet mit Teammitgliedern zusammen, um Anpassungsstrategien zu erarbeiten, dokumentiert und kommuniziert Änderungen und evaluiert Anpassungsstrategien für zukünftige Projekte.",
      example: "Der Auszubildende erkennt eine notwendige Anpassung im Projektverlauf, entwickelt eine geeignete Lösung und passt die Arbeitsmethoden entsprechend an. Er arbeitet mit dem Team zusammen, kommuniziert die Änderungen an die Stakeholder und evaluiert die Anpassung für zukünftige Projekte."
    }
    ]
  }
]