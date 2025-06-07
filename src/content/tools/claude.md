---
title: "Claude"
description: "Anthropics sicherer und hilfreicher KI-Assistent für komplexe Gespräche und Analysen"
category: "Textgenerierung"
pricing: "Freemium"
affiliate_link: "https://claude.ai?via=aitoolvault"
website_url: "https://claude.ai"
rating: 4.7
founded: "2021"
company: "Anthropic"
api_available: true
mobile_app: true
free_trial: true
featured: true

# DETAILLIERTE PREISSTRUKTUR
pricing_details:
  free_plan:
    available: true
    price: 0
    currency: "€"
    billing_cycle: "monthly"
    features:
      - "Claude 3.5 Sonnet Zugang"
      - "Begrenzte Nachrichten pro Tag"
      - "Web-Interface"
      - "Mobile App"
      - "Basis-Dokumentenupload"
    limitations:
      - "~15-45 Nachrichten alle 3-5 Stunden (je nach Auslastung)"
      - "Kein API-Zugang"
      - "Kleinere Uploads (max. 5 Dateien, 10MB)"
      - "Rate Limits bei hoher Auslastung"
      
  paid_plans:
    - name: "Claude Pro"
      price: 18
      currency: "€"
      billing_cycle: "monthly"
      features:
        - "Claude 3 Opus & 3.5 Sonnet Zugang"
        - "5x mehr Nutzung als kostenlose Version"
        - "Priorität bei hoher Auslastung"
        - "Früher Zugang zu neuen Features"
        - "Erweiterte Dokumentenverarbeitung"
        - "Größere Uploads (bis zu 5 Dateien, 32MB pro Datei)"
      limitations:
        - "Immer noch Usage Limits (aber viel höher)"
        - "Kein API-Zugang enthalten"
      popular: true
    
    - name: "Claude Team"
      price: 22.50
      currency: "€"
      billing_cycle: "monthly"
      per_user: true
      minimum_users: 5
      features:
        - "Alles aus Claude Pro"
        - "Team-Workspace und -Bibliothek"
        - "Zentrale Rechnungsstellung"
        - "Früher Zugang zu Kollaboration-Features"
        - "Erweiterte Admin-Tools"
        - "Prioritäts-Support"
      limitations:
        - "Mindestens 5 Nutzer erforderlich"
        - "Jährliche Abrechnung verfügbar"
    
    - name: "Claude Enterprise"
      price: "Auf Anfrage"
      billing_cycle: "monthly"
      features:
        - "Erweiterte Sicherheit und Compliance"
        - "SSO und Domain-Capture"
        - "Audit Logs"
        - "Erweiterte Admin Dashboard"
        - "Prioritäts-Support und Onboarding"
        - "Längere Kontextfenster"
        - "Höhere Rate Limits"

# API-PREISE (separat) - REPARIERT
api_pricing:
  models:
    - name: "Claude 3.5 Sonnet"
      input_price: 2.70
      output_price: 13.50
      currency: "€"
      per_million_tokens: true
      context_window: "200k tokens"
      popular: true
      
    - name: "Claude 3 Opus"
      input_price: 13.50
      output_price: 67.50
      currency: "€"
      per_million_tokens: true
      context_window: "200k tokens"
      note: "Höchste Intelligenz"
      
    - name: "Claude 3 Haiku"
      input_price: 0.225
      output_price: 1.125
      currency: "€"
      per_million_tokens: true
      context_window: "200k tokens"
      note: "Schnellstes Modell"

# VERGLEICHSMETRIKEN
comparison_metrics:
  messages_per_day:
    free: "15-45 (variiert)"
    pro: "75-225 (5x mehr)"
    team: "75-225 (5x mehr)"
    enterprise: "Custom Limits"
  
  models_included:
    free: ["Claude 3.5 Sonnet"]
    pro: ["Claude 3.5 Sonnet", "Claude 3 Opus"]
    team: ["Claude 3.5 Sonnet", "Claude 3 Opus"]
    enterprise: ["Alle Modelle", "Custom Models möglich"]
  
  context_window:
    free: "200k tokens (~150k Wörter)"
    pro: "200k tokens (~150k Wörter)"
    team: "200k tokens (~150k Wörter)"
    enterprise: "Erweitert verfügbar"
  
  file_upload_limit:
    free: "5 Dateien, 10MB"
    pro: "5 Dateien, 32MB"
    team: "5 Dateien, 32MB"
    enterprise: "Erweiterte Limits"
  
  support_level:
    free: "Community"
    pro: "Email Support"
    team: "Prioritäts-Support"
    enterprise: "Dedicated Support + Onboarding"

# BEWERTUNGSMETRIKEN
price_per_feature_score: 9.2
value_for_money: 9.5
price_category: "mid-range"
last_price_update: "2025-01-20"

# ZUSÄTZLICHE METADATEN
pros:
  - "Sehr sichere und ethische KI"
  - "Längere Kontextfenster als ChatGPT"
  - "Hervorragende Reasoning-Fähigkeiten"
  - "Transparentes Preismodell"
  - "Starke Dokumentenverarbeitung"
  - "Keine Trainingsdaten-Nutzung"

cons:
  - "Weniger Plugins als ChatGPT"
  - "Konservativ bei sensiblen Themen"
  - "API teurer als OpenAI"
  - "Kleinere Community"
  - "Usage Limits auch im Pro Plan"

use_cases:
  - "Wissenschaftliche Analyse und Research"
  - "Lange Dokumentenanalyse"
  - "Ethische KI-Anwendungen"
  - "Komplexe Reasoning-Aufgaben"
  - "Code-Review und Programmierung"
  - "Content-Erstellung mit hoher Qualität"

languages:
  - "Deutsch"
  - "Englisch" 
  - "Französisch"
  - "Spanisch"
  - "Italienisch"
  - "Portugiesisch"
  - "Japanisch"
  - "Koreanisch"
  - "Chinesisch"

# BESONDERE FEATURES
special_features:
  - name: "Constitutional AI"
    description: "Trainiert auf Hilfsbereitschaft, Ehrlichkeit und Harmlosigkeit"
  - name: "200k Context Window"
    description: "Kann sehr lange Dokumente verarbeiten"
  - name: "Vision Capabilities"
    description: "Kann Bilder analysieren und beschreiben"
  - name: "Artifacts"
    description: "Kann Code und Dokumente in separaten Fenstern erstellen"

# SICHERHEIT & COMPLIANCE
security_features:
  - "SOC 2 Type II zertifiziert"
  - "GDPR-konform"
  - "Keine Trainingsdaten-Nutzung von Gesprächen"
  - "Verschlüsselte Datenübertragung"
  - "Regelmäßige Sicherheits-Audits"
---

# Claude - Der ethische KI-Assistent

Claude von Anthropic ist bekannt für besonders sichere, hilfreiche und ehrliche Antworten. Der KI-Assistent wurde mit Constitutional AI trainiert und legt großen Wert auf ethische Prinzipien.

## Was macht Claude besonders?

Claude zeichnet sich durch sein **Constitutional AI** Training aus, das den Assistenten besonders sicher und ethisch macht. Mit einem **200.000 Token Kontextfenster** kann Claude sehr lange Dokumente verarbeiten - deutlich mehr als die meisten Konkurrenten.

### Hauptmerkmale

- **🛡️ Sicherheit**: Constitutional AI für ethische Antworten
- **📚 Lange Kontexte**: 200k Token = ~150.000 Wörter
- **🔍 Vision**: Kann Bilder analysieren und beschreiben  
- **⚡ Artifacts**: Erstellt Code und Dokumente in separaten Fenstern
- **🌍 Multisprache**: Unterstützt 10+ Sprachen fließend

## Preismodelle im Detail

### Kostenlose Version
Perfekt zum Ausprobieren und für gelegentliche Nutzung:
- **Claude 3.5 Sonnet** Zugang
- **15-45 Nachrichten** alle 3-5 Stunden
- **Dokumentenupload** bis 10MB
- **Mobile App** und Web-Interface

### Claude Pro (18€/Monat)
Ideal für Power-User und Profis:
- **5x mehr Nutzung** als kostenlose Version
- **Claude 3 Opus** Zugang (höchste Intelligenz)
- **Priorität** bei hoher Auslastung
- **Erweiterte Uploads** bis 32MB
- **Früher Zugang** zu neuen Features

### Für Teams & Unternehmen
- **Claude Team**: 22,50€/Nutzer (min. 5 Nutzer)
- **Claude Enterprise**: Individuelle Preise
- **Erweiterte Sicherheit** und Admin-Tools
- **SSO Integration** und Audit Logs

## API-Preise

Claude bietet auch direkten API-Zugang:

| Modell | Input | Output | Kontext |
|--------|-------|--------|---------|
| **Claude 3.5 Sonnet** | 2,70€ | 13,50€ | 200k Token |
| Claude 3 Opus | 13,50€ | 67,50€ | 200k Token |
| Claude 3 Haiku | 0,23€ | 1,13€ | 200k Token |

*Preise pro Million Token*

## Warum Claude wählen?

**Für Sicherheit bewusste Nutzer**: Claude ist die erste Wahl wenn Datenschutz und ethische KI wichtig sind. Anthropic nutzt keine Nutzerdaten für Training.

**Für lange Dokumente**: Mit 200k Token kann Claude ganze Bücher analysieren - perfekt für Research und Dokumentenanalyse.

**Für professionelle Anwendungen**: Constitutional AI macht Claude besonders zuverlässig für Business-Anwendungen.

## Fazit

Claude bietet das beste **Preis-Leistungs-Verhältnis** für Nutzer, die Wert auf **Sicherheit** und **Qualität** legen. Besonders das **200k Kontextfenster** und die **ethischen Prinzipien** machen Claude zur idealen Wahl für professionelle Anwendungen.

**Empfehlung**: Starte mit der kostenlosen Version und upgrade zu Pro, wenn du mehr als 15-45 tägliche Nachrichten brauchst.
