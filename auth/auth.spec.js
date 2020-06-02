const server = require("../api/server");
const request = require("supertest");

describe("POST /app/auth/login", () => {
    let user = { username: "Vish", password: "Vish" };
    it("testing Login  user:", () => {
      return request(server)
        .post("/app/auth/login")
        .send(user)
        // .expect(200)
        .then(res => {
          const token = res.body.token;
          expect(res.body.token).toBe(token);
        });
    });
  });