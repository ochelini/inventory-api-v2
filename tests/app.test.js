const request = require("supertest");
const app = require("../src/server");

describe("Inventory API", () => {

  test("GET /health should return healthy status", async () => {

    const response = await request(app)
      .get("/health");

    expect(response.statusCode).toBe(200);

    expect(response.body).toEqual({
      status: "healthy"
    });

  });

  test("GET /products should return products", async () => {

    const response = await request(app)
      .get("/products");

    expect(response.statusCode).toBe(200);

    expect(Array.isArray(response.body))
      .toBe(true);

  });

  test("POST /products should reject invalid payload", async () => {

    const response = await request(app)
      .post("/products")
      .send({
        name: "",
        quantity: -10
      });

    expect(response.statusCode).toBe(400);

  });

});
