'use strict';

import {
  Reader,
  Writer
} from '../../';


describe('moddle-xml', function() {

  it('should expose Reader / Writer', function() {
    expect(Reader).to.exist;
    expect(Writer).to.exist;
  });

});