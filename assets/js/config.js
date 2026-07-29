const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/1UzhFd2dZdvKyQp0rTxw3CPo7R5Aj62Bo87WnhFX8kX8/viewform';

function initApplyFormLinks() {
  document.querySelectorAll('.apply-form-link').forEach((link) => {
    link.href = GOOGLE_FORM_URL;
  });
}

initApplyFormLinks();
