// This is a workaround for FormData, so we could check it's contents in a snapshot
FormData.prototype.toString = function () {
  const values: string[] = [];
  this.forEach((value: any, key: string) => values.push(`${key}=${value || 'undefined'}`));
  return `FormData { ${values.join('; ')} }`;
};
(FormData.prototype as any).toJSON = function () {
  return this.toString();
};
