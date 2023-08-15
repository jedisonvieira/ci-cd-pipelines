const envConfig = require('../env');
exports.handler = async function (event, context) {
  const environment = {
    currentEnvironment: `${envConfig.env}`,
  };
  try {
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(environment),
    };
  } catch (err) {
    return { statusCode: 500, body: "Failed to show environment" };
  }
};
