exports.handler = async function (event, context) {
  const obj = {
    Message: "API works! :) with namespace",
  };
  try {
    return {
      statusCode: 201,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    };
  } catch (err) {
    return { statusCode: 500, body: "Error" };
  }
};
