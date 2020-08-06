import { NowRequest, NowResponse } from "@vercel/node";
import { renderToString } from "react-dom/server";

import { NinjaBadge } from "../components/NinjaBadge";

export default async function (req: NowRequest, res: NowResponse) {
  res.setHeader("Content-Type", "image/svg+xml");
  res.setHeader("Cache-Control", "s-maxage=1, stale-while-revalidate");

  const badge = renderToString(NinjaBadge({}));
  return res.status(200).send(badge);
}
