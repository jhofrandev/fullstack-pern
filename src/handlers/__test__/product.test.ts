import request from "supertest";
import server from "../../server";

describe("POSt /api/products", () => {
  it("should create a new product", async () => {
    const response = await request(server).post("/api/products").send({
      name: "Test Product",
      price: 100,
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("data");

    expect(response.status).not.toBe(400);
    expect(response.status).not.toBe(404);
    expect(response.body).not.toHaveProperty("error");
  });
});
