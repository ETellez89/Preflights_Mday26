// src/templates/index.js
// ─────────────────────────────────────────────────────────────
//  REGISTRO CENTRAL DE SENDS
//  Para añadir un nuevo send:
//    1. Crea src/templates/sendN.js con el mismo formato
//    2. Importa su EMAIL_TEMPLATES aquí
//    3. Añade una entrada en ALL_SENDS
// ─────────────────────────────────────────────────────────────

import { EMAIL_TEMPLATES as SEND1, LANGUAGE_OPTIONS } from './Send1.js';
import { EMAIL_TEMPLATES as SEND2 } from './Send2.js';
// import { EMAIL_TEMPLATES as SEND3 } from './send3.js';  ← descomenta cuando tengas send3

export { LANGUAGE_OPTIONS };

export const ALL_SENDS = [
  { key: 'Send1', label: 'Email Send 1', templates: SEND1 },
  { key: 'Send2', label: 'Email Send 2', templates: SEND2 },
  // { key: 'send3', label: 'Email Send 3', templates: SEND3 },  ← descomenta cuando tengas send3
];
