import { encodeArrayBuffer, encodeText } from '../encoder.helper';
import { TextEncoder } from 'util';

describe('encoder.helper', () => {
  describe('encodeArrayBuffer', () => {

  });

  describe('encodeText', () => {
    it('encodes plain text', () => {
      const text = 'This is a test sentence.';

      const encoder = new TextEncoder();
      const arrayBuffer = encoder.encode(text).buffer;

      expect(encodeText(arrayBuffer, 'utf-8')).toEqual(text);
    });

    it('encodes text containing special characters', () => {
      const text = 'zażółć gęślą jaźń. 😅🏵📺 üä';

      const encoder = new TextEncoder();
      const arrayBuffer = encoder.encode(text).buffer;

      expect(encodeText(arrayBuffer, 'utf-8')).toEqual(text);
    });
  });
});
