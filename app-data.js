// ============================================================
// SAFEONLINE — app-data.js
// Catálogo LOCAL atado a la UI (áreas, temas, íconos, tonos y reglas de la
// Puntuación de seguridad). Nada de contenido editorial: eso vive en
// WordPress (o, mientras no exista, en content-seed.js).
// ============================================================

const APP_DATA = {
  // Los dos frentes del producto. El `id` es el `area` de cada contenido.
  areas: {
    adultos: {
      id: 'adultos',
      name: 'Seguridad para Adultos',
      short: 'Adultos',
      eyebrow: 'Personal',
      image: 'assets/img/centro-adultos.jpg',
      desc: 'Protege tu identidad, tus cuentas y tu dinero de estafas y robos de datos.',
    },
    familia: {
      id: 'familia',
      name: 'Protección Infantil y Juegos',
      short: 'Familia',
      eyebrow: 'Familia',
      image: 'assets/img/centro-familia.jpg',
      desc: 'Acompaña a tus hijos en los juegos y redes: configuración, señales de alerta y cómo hablarlo.',
    },
  },

  // Temas de cada área. El `id` es el `topicId` de notas y microchecks.
  topics: [
    { id: 'phishing',    area: 'adultos', name: 'Phishing y estafas',    icon: 'mail',        tone: 'blue' },
    { id: 'contrasenas', area: 'adultos', name: 'Contraseñas',           icon: 'key',         tone: 'green' },
    { id: 'apps',        area: 'adultos', name: 'Apps peligrosas',       icon: 'download',    tone: 'amber' },
    { id: 'privacidad',  area: 'adultos', name: 'Privacidad en redes',   icon: 'eye',         tone: 'violet' },
    { id: 'limpieza',    area: 'adultos', name: 'Limpieza digital',      icon: 'broom',       tone: 'teal' },
    { id: 'compras',     area: 'adultos', name: 'Compras y billeteras',  icon: 'card',        tone: 'rose' },
    { id: 'juegos',      area: 'familia', name: 'Juegos online',         icon: 'gamepad',     tone: 'blue' },
    { id: 'grooming',    area: 'familia', name: 'Señales de grooming',   icon: 'alert',       tone: 'rose' },
    { id: 'hablar',      area: 'familia', name: 'Hablemos de…',          icon: 'chat',        tone: 'green' },
    { id: 'pantallas',   area: 'familia', name: 'Tiempo de pantalla',    icon: 'clock',       tone: 'violet' },
    { id: 'monedas',     area: 'familia', name: 'Monedas virtuales',     icon: 'coin',        tone: 'amber' },
  ],

  // Tipos de plataforma (filtro de Seguridad).
  kinds: [
    { id: 'juego',       name: 'Juegos',       icon: 'gamepad' },
    { id: 'red',         name: 'Redes y chat', icon: 'chat' },
    { id: 'dispositivo', name: 'Dispositivos', icon: 'phone' },
  ],

  // Semáforo de plataformas. Siempre con texto, nunca sólo color.
  lights: {
    verde:    { name: 'Apto',               long: 'Apto con configuración básica' },
    amarillo: { name: 'Con supervisión',    long: 'Apto con supervisión y configuración' },
    rojo:     { name: 'No recomendado',     long: 'No recomendado para menores de {age}' },
  },

  // Estados de la Puntuación de seguridad (se elige el último con from <= puntaje).
  scoreStates: [
    { from: 0,  id: 'start',   name: 'Por empezar' },
    { from: 1,  id: 'exposed', name: 'Expuesto' },
    { from: 40, id: 'onway',   name: 'En camino' },
    { from: 70, id: 'good',    name: 'Buen estado' },
    { from: 90, id: 'shield',  name: 'Blindado' },
  ],

  // Un microcheck con renovación avisa "vence pronto" estos días antes.
  renewWarnDays: 7,
};
