const data = require('./candidates.json');
const filter = require('./filter');

it('should return only AVAILABLE_IMMEDIATELY candidates with [AVAILABLE_IMMEDIATELY]', () => {
  const candidates = filter(data, ['AVAILABLE_IMMEDIATELY']);

  expect(candidates.length).toBe(3);
  expect(candidates[0].name).toBe('Julian Assange');
  expect(candidates[1].name).toBe('Marc Brown');
  expect(candidates[2].name).toBe('Maria Bianchi');
});

it('should return only AVAILABLE_IMMEDIATELY candidates with [AVAILABLE_IMMEDIATELY, FRESH_GRADS]', () => {
  const candidates = filter(data, ['AVAILABLE_IMMEDIATELY', 'FRESH_GRAD']);

  expect(candidates.length).toBe(3);
  expect(candidates[0].name).toBe('Julian Assange');
  expect(candidates[1].name).toBe('Marc Brown');
  expect(candidates[2].name).toBe('Maria Bianchi');
});

it('should return only AVAILABLE_IMMEDIATELY candidates with [AVAILABLE_IMMEDIATELY, FRESH_GRADS, JUNIOR]', () => {
  const candidates = filter(data, ['AVAILABLE_IMMEDIATELY', 'FRESH_GRAD', 'JUNIOR']);

  expect(candidates.length).toBe(3);
  expect(candidates[0].name).toBe('Julian Assange');
  expect(candidates[1].name).toBe('Marc Brown');
  expect(candidates[2].name).toBe('Maria Bianchi');
});

it('should return only FRESH_GRAD candidates with [FRESH_GRADS, JUNIOR]', () => {
  const candidates = filter(data, ['FRESH_GRAD', 'JUNIOR']);

  expect(candidates.length).toBe(4);
  expect(candidates[0].name).toBe('Julian Assange');
  expect(candidates[1].name).toBe('Kelly Diamond');
  expect(candidates[2].name).toBe('Maria Bianchi');
  expect(candidates[3].name).toBe('Winnie the Pooh');
});

it('should return 2 JUNIOR candidates with [JUNIOR]', () => {
  const candidates = filter(data, ['JUNIOR']);

  expect(candidates.length).toBe(2);
  expect(candidates[0].name).toBe('Julian Assange');
  expect(candidates[1].name).toBe('Marc Brown');
});

it('should return 1 candidate with [JUNIOR, PHP]', () => {
  const candidates = filter(data, ['JUNIOR', 'PHP']);

  expect(candidates.length).toBe(1);
  expect(candidates[0].name).toBe('Marc Brown');
});

it('should return 5 candidate with [JAVASCRIPT]', () => {
  const candidates = filter(data, ['JAVASCRIPT']);

  expect(candidates.length).toBe(5);
  expect(candidates[0].name).toBe('Julian Assange');
  expect(candidates[2].name).toBe('Donald Obama');
});

it('Should return results when no filter', () => {
  let candidates = filter(data, []);
  expect(candidates.length).toBe(8);
  //candidates = filter(data);
  //expect(candidates.length).toBe(8);
});
