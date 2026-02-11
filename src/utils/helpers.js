export const escapeHtml = (text) => {
  if (text == null) return '';

  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;',
    '`': '&#x60;',
  };

  return String(text).replace(/[&<>"'`\/]/g, function (m) {
    return map[m];
  });
};

export const html = (strings, ...values) => String.raw(strings, ...values);
