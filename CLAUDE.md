# SAFEONLINE — Contexto del proyecto

## Qué es
Club de Playtown de **seguridad digital**: alertas, consejos, microchecks y guías para proteger tu identidad, tus cuentas y a tus hijos en internet. "Internet cambió, los riesgos también." Dos frentes: **Seguridad para Adultos** (estafas, phishing, contraseñas, apps peligrosas, limpieza digital) y **Protección Infantil y Juegos** (configuración de juegos, semáforo de plataformas, señales de grooming, cómo hablarlo con los hijos). Hermana de Mis Gastos en Orden, Historias del Mundo, Retofit y MindMusic (mismo patrón de arquitectura). Sin registro ni login: acceso por ANI, datos del usuario en `localStorage`.

Fuente del producto: `SAFEONLINE - Presentación.pdf` + `SAFEONLINE - Brochure.png`. Brief completo en `BRIEF.md` (§11 = decisiones del usuario).

- **Mockup**: los 3 mockups del PDF/brochure (Inicio · Seguridad · Mi cuenta) **son referencia**, con libertad creativa. Se mantienen los **colores del mockup** (azul, blanco, card roja de alerta, tiles oscuras), no los del logo.
- **Mercado**: Chile primero con selector AR/PY en el gate de ANI (igual que Historias del Mundo). Sumar un país = una fila en `ANI_COUNTRIES` (`app.js`) + sus canales de denuncia en el contenido.
- **Idioma**: español **neutro con tú**. Tono: informar sin asustar, siempre cerrar con qué hacer; con chicos, acompañar (no espiar ni prohibir).

## Archivos
| Archivo | Rol |
|---|---|
| `index.html` | Inicio: alerta urgente (la más nueva sin leer), Puntuación + "Tu próximo paso", Consejos diarios, ¿Estafa o no?, Centro de Seguridad (Adultos / Familia) |
| `seguridad.html` | "Notas de Seguridad": grilla de plataformas con semáforo (chips `?tipo=`), Guías, Todas las alertas |
| `plataforma.html?id=` | Hero, semáforo + PEGI/ESRB/edad mínima, Riesgos conocidos, "Configúrala segura" (microchecks), alertas y guías |
| `centro.html?area=adultos\|familia` | Sub-puntaje, microchecks (5 + "Ver los N"), temas (`?tema=`) con sus guías; Familia suma "¿Pasó algo?" con canales de denuncia por país |
| `nota.html?id=` | Qué está pasando → Qué hacer → Por qué funciona → Si tienes hijos → Hazlo ahora (microchecks) → "Entendido". Estrella = guardar |
| `perfil.html` | Mi cuenta: nombre, puntuación, stats, Modo oscuro, "Tengo chicos a cargo", Guardados / Historial, Borrar datos locales |
| `app.js` | Íconos, utils, localStorage, tema, capa de contenido, motores, puntuación, renderers, init de páginas, ANI |
| `app-data.js` | Catálogo local atado a la UI: áreas, temas (ícono/tono), tipos de plataforma, semáforo, estados del puntaje |
| `content-seed.js` | Contenido inicial con la forma exacta del JSON de WordPress (12 plataformas, 28 microchecks, 20 consejos, 10 alertas, 14 guías, 14 casos, 9 canales) |
| `assets/brand/` | Escudo extraído del PDF (`logo-mark.png`), íconos de app y favicon |
| `assets/img/` | Fotos de Unsplash (licencia libre, **sin logos de marcas**); autores en `CREDITOS.txt` |
| `.claude/launch.json` | Server estático local (`python3 -m http.server 4323`) |

## Contenido: WordPress (todavía no existe)
Mismo patrón que Mis Gastos / Historias del Mundo: JSON en el cuerpo del post → `mobile_content`, una llamada `fulldata/category/{slug}?limit=100` por categoría, `parseMobileContent()` tolerante, dedupe por `id`.
- **Hoy `WP_ENABLED = false`** en `app.js` → todo sale de `content-seed.js`. Cuando exista el sitio (`contenidos.vip/safeonline`, slug a confirmar): importar el seed, poner `WP_ENABLED = true` y sacar `content-seed.js` de los HTML.
- Categorías (`WP_CATEGORY`): `plataformas`, `microchecks`, `consejos`, `alertas`, `notas`, `casos-estafa`, `canales-denuncia`. Formas en `MAPPERS`.
- **Datos verificados** (ratings, edades mínimas, rutas de menús, teléfonos de denuncia) a oct-2026. Los menús de las apps cambian seguido: revisar al actualizar. Bancos y couriers de los casos son **ficticios** (Banco Andino, EnvíaYa) para no imitar marcas reales.

## Motores (sin cron: funciones puras)
- `dayIndex()` cuenta días desde `DAILY_EPOCH` (1-ene-2024); `dailyPick(pool)` = `pool[dayIndex % n]`. Así rotan el **consejo del día** y el caso de **¿Estafa o no?**.
- **Alertas**: no rotan. Se muestra la más nueva (`date` desc) que no esté leída ni vencida (`expires`). Abrir su guía la marca leída.
- **Racha de aciertos**: días seguidos respondiendo bien "¿Estafa o no?"; si hoy no respondió, cuenta desde ayer.

## Puntuación de seguridad (pieza de identidad)
Anillo 0–100 con el escudo del logo adentro (`renderScoreRing()`). Puntaje de área = puntos de microchecks vigentes / puntos posibles; general = promedio Adultos/Familia, o sólo Adultos si "Tengo chicos a cargo" está apagado. Microchecks con `renewDays` vencen y vuelven a pendiente (mismo motor de recurrentes que Mis Gastos); "vence pronto" = `renewWarnDays` (7). Estados: Por empezar (0) · Expuesto · En camino (40) · Buen estado (70) · Blindado (90). Al subir de estado: `celebrateScore()`. **Nada se guarda como contador**: todo se deriva de `so_checks`.

## localStorage (`so_`)
`so_profile` `{name, hasKids}` · `so_checks` `{[id]: 'YYYY-MM-DD'}` · `so_alerts_read` `[ids]` · `so_notes` `{[id]: {openedAt, doneOn?}}` · `so_favorites` `[noteIds]` · `so_quiz` `{[día]: {caseId, correct}}` · `so_theme` (`'dark'|'light'`, string plano, lo lee un script inline del `<head>`) · `so_ani` (no lo borra `resetLocalData()`).

## ANI
Igual que las otras apps (gate bloqueante, `?ani=` de la operadora, vigencia por mes calendario). ⚠️ **`ANI_CLUB_ID = 'TODO'`**: pedir el club ID antes de deployar. Para previsualizar local: abrir con `?ani=56900000000`.

## Sistema visual — "Guardián"
Colores del mockup: fondo `--bg #f3f5f9`, cards blancas, azul `--brand #2563eb`, rojo `--alert` **sólo** para alertas urgentes (avisos en ámbar). Turquesa `--familia #0e7490` distingue el área Familia. Semáforo siempre con texto, nunca sólo color. `Poppins` (títulos, la de la presentación) + `Inter` (cuerpo). Modo oscuro completo (navy) por `prefers-color-scheme` + override manual en Mi cuenta. Nav mobile en píldora flotante oscura (3 ítems: Inicio · Seguridad · Mi cuenta); sidebar claro en desktop (≥900px).

## Convenciones
- Sin frameworks ni build. CSS con custom properties en `:root` (redefinidas para oscuro). `app.js` detecta la página por el id del contenedor (`home-container`, `seguridad-container`, `plataforma-container`, `centro-container`, `nota-container`, `perfil-container`).
- Los 6 HTML comparten head/nav: si se cambia uno, cambiar todos.
- Skeletons mientras carga; empty-state si falla (sin fallback cuando WP esté activo).
- Buscador (lupa): busca local en plataformas, guías, microchecks y alertas (sin tildes, todas las palabras).
- Sin notificaciones push (no hay backend): no se muestra el toggle del mockup.
