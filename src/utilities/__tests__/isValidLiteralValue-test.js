// @flow strict

import { expect } from 'chai';
import { describe, it } from 'mocha';
import { isValidLiteralValue } from '../isValidLiteralValue';
import { parseValue } from '../../language';
import { GraphQLInt } from '../../type';

describe('isValidLiteralValue', () => {
  it('Returns no errors for a valid value', () => {
    expect(isValidLiteralValue(GraphQLInt, parseValue('123'))).to.deep.equal(
      [],
    );
  });

  it('Returns errors for an invalid value', () => {
    expect(isValidLiteralValue(GraphQLInt, parseValue('"abc"'))).to.deep.equal([
      {
        message: 'Expected type Int, found "abc".',
        locations: [{ line: 1, column: 1 }],
      },
    ]);
  });
});
