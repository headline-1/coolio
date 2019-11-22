import TypedArray = NodeJS.TypedArray;

const charsetBits = {
  'utf-8': 8,
  'utf-16': 16,
};

const encodeTypedArray = (buffer: ArrayBuffer, bits: number): Uint8Array | Uint16Array => {
  switch (bits) {
    case 16:
      return new Uint16Array(buffer);
    case 8:
    default:
      return new Uint8Array(buffer);
  }
};

export const encodeArrayBuffer = (data: TypedArray | string | undefined) => data
  ? typeof data === 'string' ? Buffer.from(data, 'utf8') : Buffer.from(data)
  : Buffer.from('');

export const encodeText = (buffer: ArrayBuffer, charset = 'utf-8') => {
  const array = encodeTypedArray(buffer, charsetBits[charset]);
  let data = '';
  for (let i = 0, l = array.length; i < l; i++) {
    data += String.fromCharCode(array[i]);
  }
  return data;
};
