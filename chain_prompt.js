
function toKebabCase(str) {
  if (typeof str !== 'string' || str === null || str === undefined) {
    throw new Error('Input must be a valid string');
  }

  // Normalize string
  let result = str
    .trim()
    .toLowerCase()
    .replace(/[\s_.]+/g, '-');

  // Remove consecutive hyphens and trim
  result = result.replace(/-+/g, '-').replace(/^-|-$/g, '');

  return result;
}

