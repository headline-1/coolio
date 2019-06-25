/* eslint-disable @typescript-eslint/camelcase */

import { noConversion, splitWords, toCamelCase, toKebabCase, toPascalCase, toSnakeCase } from './caseConversion.helper';

const conversionMockup = {
  first_field: 'x',
  three_word_field: 'b',
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
    ],
  },
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
          ],
        },
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
          ],
        },
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
          ],
        },
      });
    });
  });

  describe('#toSnakeCase', () => {
    it('converts mixed case object to snake_case', () => {
      expect(toSnakeCase(conversionMockup)).toEqual({
        'first_field': 'x',
        'three_word_field': 'b',
        'kebab_case_field': {
          'an_array': [
            'a',
            'b',
            {
              'pascal_case': {
                'value': 'x',
                'value_two': 'y',
              },
            },
          ],
        },
      });
    });
  });

  describe('#noConversion', () => {
    it('is just a bypass', () => {
      expect(noConversion(conversionMockup)).toEqual(conversionMockup);
    });
  });

});
