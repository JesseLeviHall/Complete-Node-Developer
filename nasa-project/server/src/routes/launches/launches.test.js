describe("Test GET /launches", () => {
  test("It should respond with 200 success", async () => {
    const response = await request(app).get("/launches");
    expect(response.statusCode).toBe(200);
  });
});

describe("Test POST /launches", () => {
  const completeLaunchData = {
    mission: "USS Enterprise",
    rocket: "NCC-1701-D",
    target: "Kepler-442 b",
    launchDate: "January 4, 2028",
  };

  const launchDataWithoutDate = {
    mission: "USS Enterprise",
    rocket: "NCC-1701-D",
    target: "Kepler-442 b",
  };

  const launchDataWithInvalidDate = {
    mission: "USS Enterprise",
    rocket: "NCC-1701-D",
    target: "Kepler-442 b",
    launchDate: "zoot",
  };

  test("It should respond with 201 created", async () => {
    const response = await request(app)
      .post("/launches")
      .send(completeLaunchData);
    expect(response.statusCode).toBe(201);
    expect(response.body).toMatchObject(completeLaunchData);
  });

  test("It should catch missing required properties", async () => {
    const response = await request(app)
      .post("/launches")
      .send(launchDataWithoutDate);
    expect(response.statusCode).toBe(400);
    expect(response.body).toStrictEqual({
      error: "Missing required launch property",
    });
  });

  test("It should catch invalid dates", async () => {
    const response = await request(app)
      .post("/launches")
      .send(launchDataWithInvalidDate);
    expect(response.statusCode).toBe(400);
    expect(response.body).toStrictEqual({
      error: "Invalid launch date",
    });
  });
});
