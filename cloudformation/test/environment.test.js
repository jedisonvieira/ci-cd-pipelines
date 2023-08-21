const lambdaHandler = require('../lambda/environment');

describe('Lambda Function Test', () => {
  test('should return a 201 status code and proper response body', async () => {
    const event = {}; 
    const context = {}; 

    const response = await lambdaHandler.handler(event, context);

    expect(response.statusCode).toBe(201);
    expect(response.headers["Content-Type"]).toBe("application/json");
    expect(response.body).toEqual(JSON.stringify({
      Message: "API works! :) with namespace"
    }));
  });

});