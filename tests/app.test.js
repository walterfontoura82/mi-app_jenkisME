const request = require("supertest");
const app = require("../src/app");

describe("App Express", () => {
  test("GET / retorna 200 y tiene mensaje", async () => {
    const response = await request(app).get("/");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty(
      "mensaje",
      "Hola Mundo desde mi primera app con Jenkins",
    );
  });

  test("GET /health retorna status ok", async () => {
    const response = await request(app).get("/health");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: "ok" });
  });

  test("GET /suma/2/3 retorna 5", async () => {
    const response = await request(app).get("/suma/2/3");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ resultado: 5 });
  });

  test("GET /suma/hola/mundo retorna 400", async () => {
    const response = await request(app).get("/suma/hola/mundo");

    expect(response.status).toBe(400);
  });
});
