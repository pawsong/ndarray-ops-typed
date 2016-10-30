import ndarray = require('ndarray');
import { expect } from 'chai';
import {
  all,
  any,
  argmax,
  argmin,
  assign,
  assigns,
  equals,
  inf,
  map,
  norm1,
  norm2,
  norm2squared,
  norminf,
  prod,
  random,
  sum,
  sup,
} from '..';

describe('all', () => {
  it('should checks if any element of the array is falsy', () => {
    const x = ndarray(new Float64Array(10));
    expect(all(x)).to.equal(false);

    for (let i = 0; i < 9; ++i) {
      x.set(i, 1);
    }
    expect(all(x)).to.equal(false);

    x.set(9, 1);
    expect(all(x)).to.equal(true);
  });
});

describe('any', () => {
  it('should check if any element of the array is truthy', () => {
    const x = ndarray(new Float64Array(10));
    expect(any(x)).to.equal(false);

    x.set(1, 10);
    expect(any(x)).to.equal(true);
  });
});

describe('argmax', () => {
  it('should return index of max element', () => {
    const x = ndarray(new Float64Array(10));
    x.set(0, 10);
    x.set(1, -10);

    expect(argmax(x)).to.deep.equal([0]);
  });
});

describe('argmin', () => {
  it('should return index of min element', () => {
    const x = ndarray(new Float64Array(10));
    x.set(0, 10);
    x.set(1, -10);

    expect(argmin(x)).to.deep.equal([1]);
  });
});

describe('assign', () => {
  it('should copies one array into another', () => {
    const x = ndarray(new Float64Array(10));
    const y = ndarray(new Float64Array(10));

    x.set(2, 1);
    assign(y, x);

    for (let i=0; i<10; ++i) {
      expect(y.get(i)).to.equal(x.get(i));
    }
  });
});

describe('assigns', () => {
  it('should broadcasts a scalar to all elements of an array', () => {
    const x = ndarray(new Float64Array(10));

    assigns(x, 5);
    for (let i = 0; i < 10; ++i) {
      expect(x.get(i)).to.equal(5);
    }
  });
});

describe('equals', () => {
  it('should check if two ndarrays are equal', () => {
    const x = ndarray(new Float64Array(10));
    const y = ndarray(new Float64Array(10));

    x.set(2, 1);
    expect(equals(x, y)).to.equal(false);

    y.set(2, 1);
    expect(equals(x, y)).to.equal(true);
  });
});

describe('inf', () => {
  it('should return min element in array', () => {
    const x = ndarray(new Float64Array(10));
    for (let i = 0; i < 10; ++i) {
      x.set(i, 5);
    }
    expect(inf(x)).to.equal(5);
  });
});

describe('map', () => {
  it('should assign the result of calling a provided function on every element', () => {
    const x = ndarray(new Float64Array(10));
    const y = ndarray(new Float64Array(10));

    x.set(2, 2);
    x.set(3, 3);
    x.set(4, 4);
    map(y, x, v => v * 2);

    expect(y.get(2)).to.equal(4);
    expect(y.get(3)).to.equal(6);
    expect(y.get(4)).to.equal(8);
  });
});

describe('norm1', () => {
  it('should computes the L1 norm', () => {
    const x = ndarray(new Float64Array(10));
    for (let i = 0; i < 10; ++i) {
      x.set(i, 5);
    }
    expect(norm1(x)).to.equal(50);
  });
});

describe('norm2', () => {
  it('should computes the L2 norm', () => {
    const x = ndarray(new Float64Array(10));
    for (let i = 0; i < 10; ++i) {
      x.set(i, 5);
    }
    expect(norm2(x)).to.equal(Math.sqrt(250));
  });
});

describe('norm2squared', () => {
  it('should computes the squared L2 norm', () => {
    const x = ndarray(new Float64Array(10));
    for (let i = 0; i < 10; ++i) {
      x.set(i, 5);
    }
    expect(norm2squared(x)).to.equal(250);
  });
});

describe('norminf', () => {
  it('should computes the L-infinity norm', () => {
    const x = ndarray(new Float64Array(10));
    for (let i = 0; i < 10; ++i) {
      x.set(i, 5);
    }
    expect(norminf(x)).to.equal(5);
  });
});

describe('prod', () => {
  it('should return multiplies all elements of the array', () => {
    const x = ndarray(new Float64Array(10));
    for (let i = 0; i < 10; ++i) {
      x.set(i, 5);
    }
    expect(prod(x)).to.equal(Math.pow(5, 10));
  });
});

describe('random', () => {
  it('should sets each element of an array to a random scalar between 0 and 1', () => {
    const x = ndarray(new Float64Array(10));
    assigns(x, 10);
    random(x);
    for (let i = 0; i < 10; ++i) {
      expect(x.get(i)).to.not.greaterThan(1).and.not.lessThan(0);
    }
  });
});

describe('sum', () => {
  it('should sums all elements of the array', () => {
    const x = ndarray(new Float64Array(10));
    for (let i = 0; i < 10; ++i) {
      x.set(i, i);
    }
    expect(sum(x)).to.equal(45);
  });
});

describe('sup', () => {
  it('should return max element in array', () => {
    const x = ndarray(new Float64Array(10));
    for (let i = 0; i < 10; ++i) {
      x.set(i, 5);
    }
    expect(sup(x)).to.equal(5);
  });
});
