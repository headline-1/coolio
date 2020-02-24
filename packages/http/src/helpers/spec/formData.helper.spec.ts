import { createFormData, isFormData } from '../multipart.helper';

describe('formData.helper', () => {
  describe('#createFormData()', () => {
    it('returns input if it is already FormData', () => {
      const input = new FormData();
      const formData = createFormData(input);
      expect(formData).toBe(input);
    });

    it('serializes primitives to FormData', () => {
      const formData = createFormData({
        string: 'abc',
        emptyString: '',
        number: 123,
        boolTrue: true,
        boolFalse: false,
        valueUndefined: undefined,
        valueNull: null,
      });

      expect(formData.get('string')).toBe('abc');
      expect(formData.get('emptyString')).toBe('');
      expect(formData.get('number')).toBe('123');
      expect(formData.get('boolTrue')).toBe('true');
      expect(formData.get('boolFalse')).toBe('false');
      expect(formData.get('valueUndefined')).toBe(null);
      expect(formData.get('valueNull')).toBe(null);
    });

    it('serializes file to FormData', () => {
      const fileMock = new File(
        [Buffer.from('This is some kind of text file mock', 'utf8')],
        'sample-text.txt'
      );
      const formData = createFormData({
        file: fileMock,
      });
      expect(formData.get('file')).toBe(fileMock);
    });

    it('serializes nested objects and Arrays to FormData', () => {
      const formData = createFormData({
        array: [
          { text: 'test' },
          2,
          3,
        ],
        obj: {
          a: {
            b: {
              c: 'c',
            }
          }
        }
      });

      expect(formData.get('array[0][text]')).toBe('test');
      expect(formData.get('array[1]')).toBe('2');
      expect(formData.get('array[2]')).toBe('3');
      expect(formData.get('obj[a][b][c]')).toBe('c');
    });
  });

  describe('#isFormData()', () => {
    it('returns true if passed object is FormData', () => {
      expect(isFormData(new FormData())).toBe(true);
    });
    it('returns false if passed object is not FormData', () => {
      expect(isFormData('FormData')).toBe(false);
      expect(isFormData(true)).toBe(false);
      expect(isFormData(false)).toBe(false);
      expect(isFormData(FormData)).toBe(false);
      expect(isFormData(Buffer.from(''))).toBe(false);
      expect(isFormData({})).toBe(false);
    });
  });
});
