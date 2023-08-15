const envConfig = require("../env");
exports.handler = async function (event, context) {
  try {
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        currentEnvironment: `${envConfig.env}`,
      }),
    };
  } catch (err) {
    return { statusCode: 500, body: "Failed to show environment" };
  }
};
