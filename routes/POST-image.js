import { RouteContext } from "gadget-server";
import { validateImage } from "../detect.js";
import { sendText } from "../twilio-integration.js";
/**
 * Route handler for POST image
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
  const imageUrl = await request.body.url;

  //   const result = await validateImage(imageUrl);
  //   logger.info(result, "result from detect api");
  sendText();

  await reply.type("application/json").send({ imageUrl });
}
