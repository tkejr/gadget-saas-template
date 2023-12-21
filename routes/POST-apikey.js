import { RouteContext } from "gadget-server";

/**
 * Route handler for GET hello
 *
 * @param { RouteContext } route context - see: https://docs.gadget.dev/guides/http-routes/route-configuration#route-context
 *
 */
export default async function route({
  request,
  reply,
  api,
  logger,
  connections,
}) {
  // This route file will respond to an http request -- feel free to edit or change it!
  // For more information on HTTP routes in Gadget applications, see https://docs.gadget.dev/guides/http-routes

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.UNKEY_API_KEY}`,
    },
    body: JSON.stringify({
      apiId: process.env.UNKEY_API_ID, // Dynamic value from environment variable
      byteLength: 135,
      expires: 1623869797161,
      meta: {
        billingTier: "PRO",
        trialEnds: "2023-06-16T17:16:37.161Z",
      },
      name: "test-tk",
      ownerId: "team_123",
      prefix: "<string>",
      ratelimit: {
        limit: 10,
        refillInterval: 60,
        refillRate: 1,
        type: "fast",
      },
      remaining: 1000,
    }),
  };

  try {
    const response = await fetch(
      "https://api.unkey.dev/v1/keys.createKey",
      options
    );
    const jsonResponse = await response.json();
    logger.debug(jsonResponse);
    await reply.type("application/json").send(jsonResponse); // Send the JSON response from the fetch request
  } catch (err) {
    logger.error(err);
    reply.status(500).send({ error: "Internal Server Error" });
  }
}
