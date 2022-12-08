const request = require('supertest');

it("should return some text here", async () => {
  await request(strapi.server.httpServer)
    .get("/api/public") //add your API route here
    .expect(200) // Expect response http code 200
    .then((data) => {
      expect(data.text).toBe("Hello World!"); // expect the response text
    });
});