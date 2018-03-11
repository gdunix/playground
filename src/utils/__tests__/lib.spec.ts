import { remove, upsert } from '../lib';

describe('remove tests', () => {
  it('remove non existing item', () => {
    const l = [{a: 1}, {a: 2}, {a: 3}];
    expect.assertions(1);
    expect(remove(l, {a: 4}, (i: any) => i.a)).toEqual([{a: 1}, {a: 2}, {a: 3}]);
  });

  it('remove last item', () => {
    const l = [{a: 1}];
    expect.assertions(1);
    expect(remove(l, {a: 1}, (i: any) => i.a)).toEqual([]);
  });

  it('remove from empty list', () => {
    const l: any = [];
    expect.assertions(1);
    expect(remove(l, {a: 1}, (i: any) => i.a)).toEqual([]);
  });

  it('remove from null list', () => {
    const l: any = null;
    expect.assertions(1);
    expect(remove(l, {a: 1}, (i: any) => i.a)).toEqual([]);
  });

  it('remove from undefined list', () => {
    const l: any = undefined;
    expect.assertions(1);
    expect(remove(l, {a: 1}, (i: any) => i.a)).toEqual([]);
  });
});

describe('upsert tests', () => {
  it('insert item', () => {
    const l = [{a: 1}, {a: 2}, {a: 3}];
    expect.assertions(1);
    expect(upsert(l, {a: 5}, (i: any) => i.a)).toEqual([{a: 1}, {a: 2}, {a: 3}, {a: 5}]);
  });

  it('upsert item', () => {
    const l = [{a: 1}, {a: 2}, {a: 3}];
    expect.assertions(1);
    expect(upsert(l, {a: 2, k: 9}, (i: any) => i.a)).toEqual([{a: 1}, {a: 2, k: 9}, {a: 3}]);
  });

  it('upsert null', () => {
    const l = [{a: 1}, {a: 2}, {a: 3}];
    expect.assertions(1);
    expect(upsert(l, {a: null}, (i: any) => i.a)).toEqual([{a: 1}, {a: 2}, {a: 3}, {a: null}]);
  });
});
