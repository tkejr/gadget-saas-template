import { Client } from "@gadget-client/chrome-ext";

export const api = new Client({ environment: window.gadgetConfig.environment });
