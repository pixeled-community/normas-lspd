/* ══════════════════════════════════════
   LSPD — Los Santos Police Department
   Lógica interactiva
═══════════════════════════════════════ */

/**
 * Abre o cierra el cuerpo de un artículo desplegable.
 * @param {HTMLElement} header - El encabezado clickado (.article-header)
 */
function toggleArticle(header) {
  const body = header.nextElementSibling;
  const chevron = header.querySelector('.article-chevron');
  const isOpen = body.classList.contains('open');

  body.classList.toggle('open', !isOpen);
  chevron.style.transform = isOpen ? '' : 'rotate(180deg)';
}
