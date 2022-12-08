const fs = require('fs');
const { setupStrapi, teardownStrapi } = require("./helpers/strapi");
const sum = require('../sum');
require('./public');

beforeAll(async () => {
  await setupStrapi();
});

afterAll(async () => {
  await teardownStrapi();
});

it("strapi is defined", () => {
  expect(strapi).toBeDefined(); //confirms that the strapi instance is defined
});

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
    });
 