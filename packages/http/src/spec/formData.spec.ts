import { CFormData, SUPPORTS_BROWSER_FORM_DATA } from '../formData';

describe('CoolioFormData', () => {
  describe('testing environment', () => {
    it('supports native (browser) FormData', () => {
      expect(SUPPORTS_BROWSER_FORM_DATA).toBe(true);
    });
  });

  describe('#from()', () => {
    it('returns the input if it already is custom or native FormData', async () => {
      const input = new CFormData();
      const input2 = new FormData();

      const formData = CFormData.from(input);
      const formData2 = CFormData.from(input2);

      expect(formData).toBe(input);
      expect(formData2).toBe(input2);
    });

    it('converts existing native FormData to custom format', () => {
      const input = new FormData();
      const fileMock = new File(
        [Buffer.from('This is some kind of text file mock', 'utf8')],
        'sample-text.txt'
      );
      input.append('test', 'value');
      input.append('file', fileMock);

      const result = CFormData.from(input, { forceImplementation: 'custom' });
      expect(result).not.toBe(input);
      expect(result instanceof CFormData).toBeTruthy();
      expect(result.get('test')).toBe('value');
      expect(result.get('file')).toBe(fileMock);
    });

    it('converts existing custom FormData to native format', ()=>{
      const input = new CFormData();
      const fileMock = new File(
        [Buffer.from('This is some kind of text file mock', 'utf8')],
        'sample-text.txt'
      );
      input.append('test', 'value');
      input.append('file', fileMock);

      const result = CFormData.from(input, { forceImplementation: 'native' });
      expect(result).not.toBe(input);
      expect(result instanceof FormData).toBeTruthy();
      expect(result.get('test')).toBe('value');
      expect(result.get('file')).toBe(fileMock);
    });

    it('serializes primitives to FormData', async () => {
      const formData = await CFormData.from({
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

    it('serializes file to FormData', async () => {
      const fileMock = new File(
        [Buffer.from('This is some kind of text file mock', 'utf8')],
        'sample-text.txt'
      );
      const formData = CFormData.from({
        file: fileMock,
      });
      expect(formData.get('file')).toBe(fileMock);
    });

    it('serializes nested objects and Arrays to FormData', async () => {
      const formData = await CFormData.from({
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

  it('converts DOM FormData to custom implementation', () => {
    const input = new FormData();
    input.append('a', 'a');
    const formData = new CFormData(input);
    expect(formData.get('a')).toBe('a');
  });

  it('creates a Buffer with complete FormData output', async () => {
    const randomFileBuffer = Buffer.from('Sample file contents.');

    const formData = new CFormData();
    formData.append('text', 'Sample text');
    formData.append('file', new File([randomFileBuffer], 'file.txt'));

    const boundary = formData.getBoundary();
    const buffer = (await formData.getBuffer()).toString();
    expect(buffer.split(boundary)).toMatchSnapshot();
  });

  describe('#isFormData()', () => {
    it('returns true if passed object is FormData', () => {
      expect(CFormData.isFormData(new FormData())).toBe(true);
      expect(CFormData.isFormData(new CFormData())).toBe(true);
    });
    it('returns false if passed object is not FormData', () => {
      expect(CFormData.isFormData('FormData')).toBe(false);
      expect(CFormData.isFormData(true)).toBe(false);
      expect(CFormData.isFormData(false)).toBe(false);
      expect(CFormData.isFormData(FormData)).toBe(false);
      expect(CFormData.isFormData(Buffer.from(''))).toBe(false);
      expect(CFormData.isFormData({})).toBe(false);
    });
  });
});
