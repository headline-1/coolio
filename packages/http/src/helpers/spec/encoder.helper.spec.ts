import { encodeArrayBuffer, encodeText } from '../encoder.helper';
import { TextEncoder } from 'util';

describe('encoder.helper', () => {
  describe('encodeArrayBuffer', () => {
    it('encodes plain text as array buffer', () => {
      const text = 'This is a test sentence.';

      const encoder = new TextEncoder();
      const arrayBuffer = encoder.encode(text).subarray();

      expect(encodeArrayBuffer(text)).toEqual(arrayBuffer);
    });

    it('encodes text containing special characters as array buffer', () => {
      const text = 'zażółć gęślą jaźń. 😅🏵📺 üä';

      const encoder = new TextEncoder();
      const arrayBuffer = encoder.encode(text).subarray();

      expect(encodeArrayBuffer(text)).toEqual(arrayBuffer);
    });
  });

  describe('encodeText', () => {
    it('decodes plain text from buffer', () => {
      const text = 'This is a test sentence.';

      const encoder = new TextEncoder();
      const arrayBuffer = encoder.encode(text).buffer;

      expect(encodeText(arrayBuffer, 'utf-8')).toEqual(text);
    });

    it('decodes text containing special characters from buffer', () => {
      const text = 'zażółć gęślą jaźń. 😅🏵📺 üä';

      const encoder = new TextEncoder();
      const arrayBuffer = encoder.encode(text).buffer;

      expect(encodeText(arrayBuffer, 'utf-8')).toEqual(text);
    });
  });
});
