const envConfig = require("../env");

exports.handler = async function (event, context) {
  const transaction = {
    env: envConfig.env,
  };
  try {
    return {
      statusCode: 201,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(transaction),
    };
  } catch (err) {
    return { statusCode: 500, body: "Failed to add transaction" };
  }
};
