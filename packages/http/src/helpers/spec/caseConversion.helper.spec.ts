/* eslint-disable @typescript-eslint/camelcase */

import {
  BodyCasing,
  getCaseConverter,
  noConversion,
  splitWords,
  toCamelCase,
  toKebabCase,
  toPascalCase,
  toScreamingSnakeCase,
  toSnakeCase
} from '../caseConversion.helper';

const conversionMockup = {
  'first_field': 'x',
  'three_word_field': 'b',
  'kebab-case-field': {
    'an array': [
      'a',
      'b',
      {
        PascalCase: {
          value: 'x',
          value_two: 'y',
        },
      },
      {},
      null,
    ],
  },
  'undefinedField': undefined,
  'NULL_FIELD': null,
};

describe('caseConversion.helper', () => {
  describe('#splitWords', () => {
    it('splits camelCase', () => {
      expect(splitWords('thisIsACamelCaseString')).toEqual([
        'this', 'Is', 'A', 'Camel', 'Case', 'String',
      ]);
    });

    it('splits PascalCase', () => {
      expect(splitWords('ThisIsAPascalCaseString')).toEqual([
        'This', 'Is', 'A', 'Pascal', 'Case', 'String',
      ]);
    });

    it('splits snake_case', () => {
      expect(splitWords('this_is_a_snake_case_string')).toEqual([
        'this', 'is', 'a', 'snake', 'case', 'string',
      ]);
    });

    it('splits kebab-case', () => {
      expect(splitWords('this-is-a-kebab-case-string')).toEqual([
        'this', 'is', 'a', 'kebab', 'case', 'string',
      ]);
    });

    it('splits space separated string', () => {
      expect(splitWords('this is a space separated string')).toEqual([
        'this', 'is', 'a', 'space', 'separated', 'string',
      ]);
    });

    it('splits SCREAMING_SNAKE_CASE', () => {
      expect(splitWords('THIS_IS_A_SCREAMING_SNAKE_CASE_STRING')).toEqual([
        'THIS', 'IS', 'A', 'SCREAMING', 'SNAKE', 'CASE', 'STRING',
      ]);
    });

    it('returns normalized arrays when splitting fields', () => {
      expect(splitWords('weird_field__')).toEqual(['weird', 'field']);
      expect(splitWords('__')).toEqual(['__']);
      expect(splitWords('__11abc')).toEqual(['11abc']);
    });
  });

  describe('#toCamelCase', () => {
    it('converts mixed case object to camelCase', () => {
      expect(toCamelCase(conversionMockup)).toEqual({
        firstField: 'x',
        threeWordField: 'b',
        kebabCaseField: {
          anArray: [
            'a',
            'b',
            {
              pascalCase: {
                value: 'x',
                valueTwo: 'y',
              },
            },
            {},
            null,
          ],
        },
        undefinedField: undefined,
        nullField: null,
      });
    });
  });

  describe('#toPascalCase', () => {
    it('converts mixed case object to PascalCase', () => {
      expect(toPascalCase(conversionMockup)).toEqual({
        FirstField: 'x',
        ThreeWordField: 'b',
        KebabCaseField: {
          AnArray: [
            'a',
            'b',
            {
              PascalCase: {
                Value: 'x',
                ValueTwo: 'y',
              },
            },
            {},
            null,
          ],
        },
        UndefinedField: undefined,
        NullField: null,
      });
    });
  });

  describe('#toKebabCase', () => {
    it('converts mixed case object to kebab-case', () => {
      expect(toKebabCase(conversionMockup)).toEqual({
        'first-field': 'x',
        'three-word-field': 'b',
        'kebab-case-field': {
          'an-array': [
            'a',
            'b',
            {
              'pascal-case': {
                'value': 'x',
                'value-two': 'y',
              },
            },
            {},
            null,
          ],
        },
        'undefined-field': undefined,
        'null-field': null,
      });
    });
  });

  describe('#toSnakeCase', () => {
    it('converts mixed case object to snake_case', () => {
      expect(toSnakeCase(conversionMockup)).toEqual({
        first_field: 'x',
        three_word_field: 'b',
        kebab_case_field: {
          an_array: [
            'a',
            'b',
            {
              pascal_case: {
                value: 'x',
                value_two: 'y',
              },
            },
            {},
            null,
          ],
        },
        undefined_field: undefined,
        null_field: null,
      });
    });
  });

  describe('#toScreamingSnakeCase', () => {
    it('converts mixed case object to SCREAMING_SNAKE_CASE', () => {
      expect(toScreamingSnakeCase(conversionMockup)).toEqual({
        FIRST_FIELD: 'x',
        THREE_WORD_FIELD: 'b',
        KEBAB_CASE_FIELD: {
          AN_ARRAY: [
            'a',
            'b',
            {
              PASCAL_CASE: {
                VALUE: 'x',
                VALUE_TWO: 'y',
              },
            },
            {},
            null,
          ],
        },
        UNDEFINED_FIELD: undefined,
        NULL_FIELD: null,
      });
    });
  });

  describe('#noConversion', () => {
    it('is just a bypass', () => {
      expect(noConversion(conversionMockup)).toEqual(conversionMockup);
    });
  });

  describe('#getCaseConverter', () => {
    it('provides converter for BodyCasing.CAMEL_CASE', () => {
      const converter = getCaseConverter(BodyCasing.CAMEL_CASE);
      expect(converter).toEqual(toCamelCase);
    });

    it('provides converter for BodyCasing.CAMEL_CASE', () => {
      const converter = getCaseConverter(BodyCasing.KEBAB_CASE);
      expect(converter).toEqual(toKebabCase);
    });

    it('provides converter for BodyCasing.CAMEL_CASE', () => {
      const converter = getCaseConverter(BodyCasing.PASCAL_CASE);
      expect(converter).toEqual(toPascalCase);
    });

    it('provides converter for BodyCasing.CAMEL_CASE', () => {
      const converter = getCaseConverter(BodyCasing.SNAKE_CASE);
      expect(converter).toEqual(toSnakeCase);
    });

    it('provides pass-through converter if no BodyCasing was specified', () => {
      const converter = getCaseConverter();
      expect(converter).toEqual(noConversion);
    });
  });

});
