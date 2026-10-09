# SAFEONLINE — Brief de producto y página

> Club Playtown · app web mobile-first · hermana de Mis Gastos en Orden, Historias del Mundo, Retofit y MindMusic (mismo patrón de arquitectura).
> Fuentes: `SAFEONLINE - Presentación.pdf` (6 slides), `SAFEONLINE - Brochure.png` y los 3 mockups de pantalla que traen los dos (Inicio · Seguridad · Mi cuenta). Referencia viva: `safe-online.vercel.app` (es una cáscara: la estructura está, pero las tiles no abren nada).

---

## 1. Qué es

**"Internet cambió, los riesgos también."**

Un servicio diario para **proteger tu identidad, tu privacidad y tus cuentas, y las de tus hijos**. Contenido simple, accionable y actualizado, sin lenguaje técnico.

Unifica **dos frentes**:

| Frente | Para quién | Qué aprende |
|---|---|---|
| **Seguridad para adultos** | El propio usuario | Detectar estafas · evitar phishing · reconocer apps peligrosas · proteger contraseñas · hacer "limpieza digital" |
| **Protección infantil** | Madres, padres, tutores | Configurar seguro los juegos online · qué juegos son seguros y cuáles no · señales de grooming · cómo hablar con los hijos · alertas tempranas |

**Por qué existe** (de la presentación): los chicos están expuestos a riesgos que los padres no ven, sobre todo en plataformas donde los controles fallan: adultos que se hacen pasar por niños, grooming disfrazado de "roleplay", chats sin moderar, contenido sexualizado creado por usuarios y estafas con monedas digitales (Robux, V-Bucks). La propia presentación cita que el CEO de Roblox reconoció fallas en la protección de menores.

**Éxito =** el usuario entra todos los días, hace **una cosa concreta** (un microcheck, una alerta, un caso de "¿Estafa o no?") y ve subir su **Puntuación de seguridad**.

---

## 2. Los formatos del brochure → la app

| Formato (PDF / brochure) | Cómo vive en la app |
|---|---|
| **Alertas rápidas** / **Alertas tempranas de amenazas nuevas** | Card roja **"Alerta de seguridad"** arriba de todo en Inicio (como el mockup). Es la alerta **más nueva sin leer**, no rota: son novedades con fecha. La campanita muestra cuántas hay sin leer. |
| **Tips breves** | **Consejos diarios**: carrusel en Inicio (como el mockup). El primero es el "consejo del día", que rota solo. |
| **Microchecks de seguridad** | Acciones de 1–3 minutos con pasos ("Activa la verificación en dos pasos en WhatsApp"). Marcarlas suma a la **Puntuación de seguridad** (§4). Es la pieza de identidad. |
| **Explicaciones claras sin lenguaje técnico** | Formato fijo de cada **nota**: qué pasa → qué hacer → por qué. Sin jerga; si aparece un término ("phishing", "2FA"), se explica en una línea. |
| **Configuración segura de juegos online** | En cada **plataforma** (Roblox, Fortnite…): guía paso a paso, y cada paso es un microcheck de Familia. |
| **Listado de juegos seguros / peligrosos** | **Semáforo** en la grilla de plataformas: 🟢 apto con configuración básica · 🟡 apto con supervisión · 🔴 no recomendado para menores de X. Ver pregunta abierta #4. |
| **Señales de grooming** | Guía **"Señales de alerta"** en el área Familia: checklist de cambios de conducta y patrones (de la slide de casos: adultos que fingen ser niños, conversaciones que migran a canales privados, regalos de monedas del juego, pedidos de secreto). Cierra con **qué hacer si pasa** y dónde denunciar. |
| **Cómo hablar con tus hijos** | Guías **"Hablemos de…"**: guiones cortos por edad (6–9, 10–12, 13+), con frases textuales para empezar la charla. |
| **Detectar estafas / evitar phishing** | **"¿Estafa o no?"** del día en Inicio: un mensaje realista (SMS, mail, WhatsApp) y el usuario decide. Feedback inmediato marcando las pistas. Propuesta nueva, no está en el mockup. |

---

## 3. Mapa de páginas

Nav inferior de **3 ítems**, igual que el mockup: **Inicio · Seguridad · Mi cuenta**.
(En desktop ≥900px, sidebar como en las otras apps.)

```
index.html          → Inicio                          [nav: Inicio]
seguridad.html      → Seguridad (plataformas + guías)  [nav: Seguridad]
plataforma.html?id= → Detalle de una plataforma        [nav: Seguridad, con "← Volver"]
centro.html?area=   → Centro: Adultos | Familia        [nav: Inicio, con "← Volver"]
nota.html?id=       → Nota / guía / tip ampliado       [nav: el de origen, con "← Volver"]
perfil.html         → Mi cuenta                        [nav: Mi cuenta]
```

### 3.1 `index.html`: Inicio
De arriba a abajo (mockup pantalla 1, completado con lo que pide el PDF):

1. **Header**: logo SafeOnline ("DIGITAL GUARDIAN" como en el mockup) + lupa (ver pregunta #6) + campanita con puntito si hay alertas sin leer → abre un bottom sheet con la lista de alertas.
2. **Alerta de seguridad** (card roja, como el mockup): eyebrow `ALERTA DE SEGURIDAD` + "hace 2 días", título, 2 líneas, botón **"Cómo protegerme"** → `nota.html`. Botón secundario "Ya lo revisé" → la marca leída y aparece la siguiente. Si no hay ninguna sin leer, se achica a una línea verde: "Estás al día con las alertas ✓".
3. **Tu Puntuación de seguridad** (en el mockup está al fondo; propongo subirla acá porque es lo que hace volver): anillo 0–100 + estado ("74 · Buen estado") + **"Tu próximo paso"**: el microcheck pendiente de más puntos, con botón directo.
4. **Consejos diarios** ("Ver todo"): carrusel horizontal de cards con ícono, título y bajada (como el mockup). El primero es el consejo del día.
5. **¿Estafa o no?**: card con el mensaje del día dibujado como burbuja de SMS/WhatsApp/mail, y dos botones: **"Es estafa"** / **"Es real"**. Al responder se muestran las pistas resaltadas. Una por día.
6. **Centro de Seguridad** (como el mockup): dos cards grandes con foto:
   - **Seguridad para Adultos** · `PERSONAL` · chips: Contraseñas · Phishing · Apps peligrosas · Limpieza digital → `centro.html?area=adultos`
   - **Protección Infantil y Juegos** · `FAMILIA` · chips: Juegos · Señales de grooming · Hablar con tus hijos → `centro.html?area=familia`
   Cada card muestra su sub-puntaje (ej. "Familia 6/10 checks").

### 3.2 `seguridad.html`: Seguridad
(Mockup pantalla 2: "Notas de Seguridad".)

1. **Plataformas**: grilla 2 columnas de tiles oscuras con imagen, ícono, nombre y "VER ALERTAS" (como el mockup) + el **semáforo** en una esquina. Filtro con chips: **Todas · Juegos · Redes y chat · Dispositivos**.
   Propuesta inicial (12): Roblox · Fortnite · Minecraft · Among Us · Discord · Steam · TikTok · Instagram · WhatsApp · YouTube · Celular (Android/iPhone) · Navegador.
2. **Guías**: lista de notas largas agrupadas (Señales de grooming, Hablemos de…, Limpieza digital, Contraseñas…).
3. **Todas las alertas**: historial cronológico, con estado leída / sin leer.

### 3.3 `plataforma.html?id=`: Plataforma
1. Hero con imagen, nombre, semáforo + edad sugerida + **clasificación oficial** (PEGI / ESRB) y edad mínima de la plataforma.
2. **Riesgos conocidos**: 3–5 bullets en lenguaje llano (los de la slide "Casos conocidos" para Roblox, Fortnite, Minecraft, Discord y Among Us).
3. **Configúrala segura**: pasos numerados; cada paso es un **microcheck** que se tilda y suma puntos. Barra "3 de 5 ajustes hechos".
4. **Alertas** de esa plataforma.
5. **Notas relacionadas**.

### 3.4 `centro.html?area=adultos|familia`: Centro de Seguridad
Una sola plantilla para los dos frentes, con color de acento propio:

1. Header del área + sub-puntaje con anillo chico.
2. **Microchecks** del área: lista con estado (pendiente / hecho / **vence pronto** / vencido, ver §4).
3. **Temas** del área: tiles que llevan a sus notas.
   - Adultos: Contraseñas · Phishing y estafas · Apps peligrosas · Privacidad en redes · Limpieza digital · Compras y billeteras.
   - Familia: Juegos online · Señales de grooming · Hablemos de… · Tiempo de pantalla · Monedas virtuales y compras.
4. En Familia, bloque fijo **"¿Pasó algo?"**: qué hacer ya (no borrar el chat, sacar capturas, no confrontar al adulto, bloquear y denunciar) + canales de denuncia del país (ver pregunta #5).

### 3.5 `nota.html?id=`: Nota
Estructura fija, leíble en 1–2 minutos:

1. Eyebrow (área · tema · tiempo de lectura) + título.
2. **Qué está pasando**: 1–2 líneas con la situación real.
3. **Qué hacer**: 2–5 pasos accionables (si son microchecks, se tildan acá mismo).
4. **Por qué funciona**: párrafo corto, sin tecnicismos.
5. **Si tienes hijos** (opcional): cómo se traslada a los chicos, o una frase para charlarlo.
6. Botón **"Guardar"** (estrella en el header) y **"Entendido"** → marca leída.
7. **Sigue leyendo**: hasta 3 relacionadas.

### 3.6 `perfil.html`: Mi cuenta
(Mockup pantalla 3, adaptado a "sin login".)

1. Nombre editable + puntuación grande + desglose **Adultos / Familia**.
2. **Stats**: microchecks hechos · alertas revisadas · aciertos en "¿Estafa o no?" (racha de aciertos).
3. **Configuración** (como el mockup):
   - **Modo oscuro**: toggle real (sigue el sistema por defecto; guardado en `so_theme`). La referencia viva ya viene en oscuro, así que tiene sentido que exista.
   - **Notificaciones**: se saca. Sin backend no hay push real y un toggle que no hace nada es mentirle al usuario. Ver pregunta #7.
4. **Privacidad y datos** (como el mockup): **Mis guardados** · **Historial** · **Borrar datos locales** (con confirmación). Más una línea de transparencia: "Todo lo que marcas queda solo en este teléfono".
5. Se **saca "Cerrar sesión"**: no hay login (acceso por ANI, como las otras apps).

---

## 4. Pieza de identidad: la Puntuación de seguridad

Así como Mis Gastos tiene el anillo de vencimiento e Historias del Mundo el pasaporte con sellos, SafeOnline tiene **el escudo con puntaje**:

- Un **anillo 0–100 que envuelve el escudo del logo**. Aparece en Inicio, en Mi cuenta y chico en cada Centro.
- **Puntaje** = puntos de los microchecks vigentes / puntos posibles × 100. Hay dos sub-puntajes (Adultos, Familia) y el general es el promedio de los dos. Si el usuario dice "no tengo hijos a cargo", el general es solo Adultos.
- **Microchecks que vencen**: algunos se renuevan solos ("Revisa las sesiones abiertas de tu Google" cada 90 días, "Limpieza digital" cada 30 días, "Charla de seguridad con tus hijos" cada 60 días). Al vencer bajan el puntaje y vuelven a pendiente. Es el mismo motor de recurrentes de Mis Gastos y le da sentido a volver.
- **Estados**: 0–39 *Expuesto* · 40–69 *En camino* · 70–89 *Buen estado* (el "74/100 · Buen estado" del mockup) · 90–100 *Blindado*.
- Gramática visual: el anillo se llena con el color del estado; cuando se tilda un check, el número sube animado y el escudo hace un pulso. Al cruzar un umbral (ej. llegar a "Blindado") hay una micro-celebración.

---

## 5. Motores (misma filosofía: sin backend, sin cron, funciones puras)

| Motor | Regla |
|---|---|
| **Consejo del día** | `pool[dayIndex % pool.length]` ordenado por `order`, con `dayIndex` = días desde `DAILY_EPOCH` (mismo que Historias del Mundo). Todos ven el mismo; recargar no lo cambia. |
| **¿Estafa o no?** | Misma rotación diaria sobre el pool de casos. La respuesta se guarda por día (`so_quiz`). La racha de aciertos se deriva de ahí. |
| **Alerta de seguridad** | **No rota**: la más nueva (`date` desc) que no esté en `so_alerts_read`. Las alertas tienen `expires` opcional para que una vieja no quede arriba para siempre. |
| **Puntuación** | Se recalcula en cada carga desde `so_checks` (`{[id]: doneOn}`) + `renewDays` de cada check. No se guarda ningún contador. |
| **Próximo paso** | Microcheck pendiente o vencido con más puntos; si hay empate, el del área con menor sub-puntaje. |

---

## 6. Stack (idéntico a Historias del Mundo)

- **Multi-página estática**, HTML + `styles.css` + `app.js` compartidos. Sin framework, sin build.
- `app-data.js`: catálogo atado a la UI → áreas, temas (ícono y tono), umbrales y etiquetas de estado del puntaje.
- `content-seed.js`: contenido inicial con la forma exacta del JSON de WordPress. **`WP_ENABLED = false`** hasta que exista el sitio en `contenidos.vip/{slug}`; después, el mismo patrón: `mobile_content`, `fulldata/category/{slug}?limit=100`, `parseMobileContent()` tolerante, dedupe por `id`, skeletons, empty-state sin fallback.
- **Datos del usuario 100% `localStorage`** con prefijo `so_`: `so_profile` (`{name, hasKids}`), `so_checks`, `so_alerts_read`, `so_notes` (leídas), `so_favorites`, `so_quiz`, `so_theme`, `so_ani` (este no lo borra `resetLocalData()`).
- **Validación de ANI** igual que las otras (gate bloqueante, `?ani=` de la operadora, vigencia por mes calendario, selector de país).
- `wp-import/` + `tools/generate-wp-import.js`, `CLAUDE.md` / `PRODUCT.md`, `.claude/launch.json` (server estático local), `vercel.json`. El mockup muestra `safe-online.vercel.app`.

### Categorías de WordPress propuestas

| Categoría | JSON |
|---|---|
| `alertas` | `{ id, date, expires?, severity: 'urgente'\|'aviso', area, platformId?, title, text, noteId?, order }` |
| `consejos` | `{ id, area, icon, title, text, noteId?, order }` |
| `microchecks` | `{ id, area, topicId, platformId?, title, why, steps[], minutes, points, renewDays?, order }` |
| `plataformas` | `{ id, name, kind: 'juego'\|'red'\|'dispositivo', image, light: 'verde'\|'amarillo'\|'rojo', ageSuggested, rating: {pegi?, esrb?}, minAge, risks[], checkIds[], order }` |
| `notas` | `{ id, area, topicId, platformId?, title, readMin, situation, steps[], why, kids?, checkIds?, order }` |
| `casos-estafa` | `{ id, channel: 'sms'\|'whatsapp'\|'mail', sender, body, isScam, clues[], explanation, order }` |

---

## 7. Sistema visual: el mockup como base, con la paleta del logo

El mockup se respeta en **layout y componentes** (card roja de alerta, carrusel de consejos, cards grandes del Centro con foto, grilla oscura de plataformas, lista de ajustes con toggles). Lo que propongo cambiar es el **color**: el mockup usa un azul genérico de Tailwind y el logo tiene una identidad propia (escudo en azul petróleo → cian).

- **Color** (claro por defecto, con modo oscuro completo; la referencia viva ya viene oscura)
  - `--bg` gris azulado muy pálido `#f2f6f8` · `--card` blanco
  - `--ink` `#0f1d26` · `--ink-dim` `#5a6b77`
  - `--brand` **azul petróleo del escudo** `#1b6a8c` (CTA, nav activo) · `--brand-2` **cian** `#2a9dc0` (anillo, acentos)
  - `--alert` rojo para alertas urgentes `#c8312b` sobre fondo rosado `#fdeceb`, como el mockup. Es el **único** rojo de la app, para que conserve su peso.
  - `--family` acento cálido para el área Familia (ámbar suave) y `--adult` el petróleo, así se distinguen los dos frentes de un vistazo.
  - Semáforo: verde / ámbar / rojo, siempre con texto además del color (accesibilidad).
  - Oscuro: base `#0b1620` (el navy de la referencia viva y del brochure), cards `#13222e`.
- **Tipografía**: **Poppins** para títulos (es la de la presentación y el brochure: mantiene la marca) + **Inter** para cuerpo/UI. Eyebrows en mayúsculas espaciadas (`ALERTA DE SEGURIDAD`, `PERSONAL`, `FAMILIA`), como el mockup.
- **Formas**: cards con radio 14–16px, botones pill, tiles de plataforma oscuras con imagen a sangre (como el mockup), íconos lineales en círculos de color suave (como "Revisa tu privacidad").
- **Nav inferior mobile**: 3 ítems con ícono + label. El mockup lo tiene como barra blanca pegada; propongo la **píldora flotante** de las otras apps (en petróleo oscuro) para que se vea de la familia Playtown. Ver pregunta #8.
- **Imágenes**: fotos reales (Unsplash, como en Historias del Mundo) para los heroes del Centro y de las plataformas. **No usar logos oficiales** de Roblox, Fortnite, etc.: van nombre + ícono propio + foto genérica (chicos jugando, consola, celular). Es lo más seguro legalmente.
- **Tono de voz**: español neutro con **tú** (el mockup ya usa "Tómate 2 minutos"). Calmo y concreto: **informar sin asustar**. Nada de "¡PELIGRO!"; siempre se cierra con qué hacer. Con chicos, el enfoque es acompañar y no espiar ni prohibir.
- **Logo**: se extrae del PDF (escudo con transparencia) → `assets/brand/`, más los íconos de app y el favicon.

---

## 8. Mobile first (prioridades)

- Diseño a 375–430px. La alerta, la puntuación y el próximo paso se ven sin scroll.
- Touch targets ≥ 44px, texto de cuerpo ≥ 16px. El público incluye adultos mayores (la slide de "La propuesta" muestra a uno): buen contraste y nada de letra chica en lo importante.
- Carruseles con scroll-snap (consejos) y padding que deja asomar la siguiente card, como el mockup.
- `viewport-fit=cover` + safe areas; `loading="lazy"` en imágenes (la mayoría entra con datos móviles).
- Modo oscuro: `prefers-color-scheme` por defecto + override manual, sin flash al cargar (script inline en el `<head>`).

---

## 9. Contenido inicial (para el seed / WXR)

Propuesta de semilla, fiel a la presentación:

- **12 plataformas** (las de §3.2), con riesgos y guía de configuración. Las 5 de la slide de casos (Roblox, Fortnite, Minecraft, Discord, Among Us) usan esos datos.
- **~24 microchecks** (12 Adultos, 12 Familia), algunos con `renewDays`.
- **~20 consejos diarios**, **~10 alertas** con fecha, **~14 casos de "¿Estafa o no?"** (mitad reales, mitad estafa).
- **~12 notas/guías**, incluidas: Señales de grooming · Hablemos de… (3 edades) · Limpieza digital paso a paso · Contraseñas y gestores · Cómo reconocer un phishing · Apps peligrosas · Monedas virtuales y estafas.
- Todo dato (clasificaciones de edad, pasos de configuración, nombres de menús) **verificado contra fuentes oficiales** al escribirlo: los menús de las apps cambian seguido.

---

## 10. Preguntas abiertas (necesito respuesta antes de arrancar)

1. **Mercado / ANI**: ¿igual que Historias del Mundo (Chile por defecto con selector AR/PY), o Argentina primero?
2. **WordPress y club ID**: ¿existe `contenidos.vip/safeonline` (o qué slug)? ¿Cuál es el **club ID** para el ANI? Mientras tanto arranco con `WP_ENABLED = false` y el seed.
3. **Calco vs guía**: dijiste que el mockup es referencia. ¿Lo sigo fiel en layout y cambio solo la paleta al color del logo (lo que propongo en §7), o lo calco también en colores (azul Tailwind)?
4. **"Juegos peligrosos"**: ¿te sirve el **semáforo** (verde / amarillo / rojo, "no recomendado para menores de X") o quieren literalmente una lista de "peligrosos"? Recomiendo el semáforo: es más útil para el padre y evita tildar de "peligrosa" a una marca.
5. **Canales de denuncia**: en "¿Pasó algo?" pongo los oficiales del país (ej. en Chile, la PDI y su brigada de cibercrimen). ¿Les sirve, o Playtown tiene un canal propio?
6. **Lupa del header**: el mockup la tiene, pero Mis Gastos e Historias del Mundo no tienen buscador. Con todo el contenido cargado local, un buscador simple sale barato. ¿Lo incluyo?
7. **Notificaciones**: sin backend no hay push. ¿Saco el toggle (lo que propongo) o lo dejamos como "Próximamente"?
8. **Nav**: ¿píldora flotante como las otras apps de Playtown (lo que propongo) o barra blanca pegada como el mockup?
9. **Imágenes**: ¿fotos de Unsplash como en Historias del Mundo, o tienen material propio? Higgsfield está conectado pero pide autorización.

---

## 11. Decisiones (respuestas del usuario, 2026-10-07)

1. **Mercado**: Chile por defecto con selector AR/PY (igual que Historias del Mundo).
2. **WordPress / club ID**: todavía no existen → `WP_ENABLED = false` con `content-seed.js`; `ANI_CLUB_ID = 'TODO'`.
3. **Mockup**: se mantienen **sus colores** (azul / blanco / rojo de alerta / tiles oscuras), con libertad creativa en el resto. Queda descartada la paleta del logo propuesta en §7.
4. **Juegos seguros / peligrosos**: semáforo (verde / con supervisión / "Solo +13").
5. **Resto (a criterio)**: buscador local sí · toggle de notificaciones no (sin push real) · nav en píldora flotante como las otras apps · canales de denuncia oficiales por país (verificados) · fotos de Unsplash sin logos de marcas.
