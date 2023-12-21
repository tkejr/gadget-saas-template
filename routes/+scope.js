import { Server } from "gadget-server";

/**
 * Route plugin for *
 *
 * @param { Server } server - server instance to customize, with customizations scoped to descendant paths
 *
 * @see {@link https://www.fastify.dev/docs/latest/Reference/Server}
 */
import FastifyCors from "fastify-cors";
export default async function (server) {
  await server.register(FastifyCors, {
    // allow CORS requests from my-cool-frontend.com
    origin: ["http://localhost:50464"],
    // allow GET, POST, and PUT requests
    methods: ["GET", "POST", "PUT"],
    // other options, see here: https://www.npmjs.com/package/fastify-cors/v/6.0.3
  });
}