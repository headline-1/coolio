/* eslint-disable quote-props */
import { ContentType } from '../contentType';
import { bodySerializer } from '../bodySerializer';
import { BodyCasing, isFormData } from '../helpers';

describe('bodySerializer', () => {
  const jsonBodySample = Object.freeze({
    body: {
      test: {
        nested: [1, 2, 3],
      },
      casing: {
        'snake_case': 1,
        'camelCase': 2,
        'PascalCase': 3,
        'kebab-case': 4,
      },
      a: undefined,
      b: 'test',
      c: 0,
      d: false,
      e: null,
      f: '',
    }
  });

  const formDataBodySample = new FormData();
  formDataBodySample.append('abc', 'def');
  formDataBodySample.append('file', new Blob([
    Buffer.from('Zażółć gęślą jaźń.', 'utf8'),
  ]));

  it.each([
      [ContentType.JSON, BodyCasing.CAMEL_CASE],
      [ContentType.JSON, BodyCasing.KEBAB_CASE],
      [ContentType.JSON, BodyCasing.PASCAL_CASE],
      [ContentType.JSON, BodyCasing.SNAKE_CASE],
      [ContentType.URL_ENCODED, BodyCasing.CAMEL_CASE],
      [ContentType.URL_ENCODED, BodyCasing.KEBAB_CASE],
      [ContentType.URL_ENCODED, BodyCasing.PASCAL_CASE],
      [ContentType.URL_ENCODED, BodyCasing.SNAKE_CASE],
      [ContentType.MULTIPART_FORM, BodyCasing.CAMEL_CASE],
      [ContentType.MULTIPART_FORM, BodyCasing.KEBAB_CASE],
      [ContentType.MULTIPART_FORM, BodyCasing.PASCAL_CASE],
      [ContentType.MULTIPART_FORM, BodyCasing.SNAKE_CASE],
    ] as ([ContentType, BodyCasing])[]
  )('serializes request with %s body and %s casing', (contentType, bodyCasing) => {
    const body = bodySerializer({
      bodyCasing: bodyCasing,
    })({
      body: jsonBodySample,
      headers: {
        'Content-Type': contentType,
      }
    });
    expect(body).toMatchSnapshot(`${contentType}-with-${bodyCasing}`);
  });

  it('serializes request with text body', () => {
    const body = bodySerializer()({
      body: ['this is a text body'],
      headers: {
        'Content-Type': ContentType.TEXT,
      }
    });
    expect(body).toEqual('this is a text body');
  });

  it.each(
    [
      [undefined],
      [Buffer.from('buffer', 'utf8')],
      ['string'],
      [formDataBodySample]
    ] as [undefined | Buffer | string | FormData][]
  )('is a passthrough when %s is passed', (inputBody) => {
    const body = bodySerializer()({
      body: inputBody,
      headers: {},
    });
    expect(body).toBe(inputBody);
  });

  it('fails when Content-Type is not specified and non-passthrough item is passed', () => {
    expect(() => bodySerializer()({
      body: {},
      headers: {},
    })).toThrowError('Can not serialize request body');
  });

});
