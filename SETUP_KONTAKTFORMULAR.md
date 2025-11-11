# Setup: Kontaktformular E-Mail Integration

Das Kontaktformular auf `/kontakt` ist bereit für die Integration mit **Web3Forms** - einem kostenlosen Service für Formular-zu-E-Mail-Weiterleitung.

## Schnelle Einrichtung (5 Minuten)

### Schritt 1: Kostenlosen API Key holen

1. Gehe zu: **https://web3forms.com**
2. Klicke auf "Get Started - It's FREE"
3. Gib deine E-Mail ein: `info@aitoolvault.de`
4. Bestätige deine E-Mail-Adresse
5. Kopiere deinen **Access Key**

### Schritt 2: API Key einfügen

Öffne die Datei: `src/pages/kontakt.astro`

Finde Zeile 254:
```html
<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
```

Ersetze `YOUR_ACCESS_KEY_HERE` mit deinem echten Access Key:
```html
<input type="hidden" name="access_key" value="abc123-dein-echter-key-hier">
```

### Schritt 3: Fertig! ✅

Das war's! Jetzt werden alle Formular-Anfragen automatisch an `info@aitoolvault.de` gesendet.

## Was wurde implementiert?

✅ **Dark Mode Support** - Kontaktseite nutzt jetzt Layout.astro
✅ **Web3Forms Integration** - Echte E-Mails an info@aitoolvault.de
✅ **Spam-Schutz** - Honeypot-Feld gegen Bots
✅ **Erfolgs-/Fehlermeldungen** - Benutzerfreundliche Rückmeldungen
✅ **Google Analytics Tracking** - Formular-Submissions werden getrackt
✅ **Responsive Design** - Funktioniert auf allen Geräten

## E-Mail Format

Empfangene E-Mails enthalten:
- **Name** des Absenders
- **E-Mail-Adresse** des Absenders
- **Betreff** (Anfrage-Typ)
- **Unternehmen** (falls angegeben)
- **Nachricht**
- **Zeitstempel**

## Erweiterte Optionen (optional)

Du kannst in der Web3Forms Dashboard weitere Einstellungen vornehmen:
- Custom E-Mail-Templates
- Auto-Reply an Absender
- Webhook-Integration
- File Uploads erlauben
- reCAPTCHA hinzufügen

## Support

Bei Fragen zu Web3Forms: https://docs.web3forms.com
Kostenlos für unbegrenzte Submissions!
