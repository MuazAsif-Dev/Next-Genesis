import ky from "ky";

import { env } from "@/config/env";

const api = ky.create({ prefixUrl: env.client.BASE_API_URL });

const serverApi = ky.create({ prefixUrl: env.server.BASE_API_URL });

export { api, serverApi };
