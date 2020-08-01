import { NowRequest, NowResponse } from "@vercel/node";
import { renderToString } from "react-dom/server";
import { decode } from "querystring";
import { Image } from "../components/Image";

export default async function (req: NowRequest, res: NowResponse) {
  const params = decode(req.url.split("?")[1]) as any;

  res.setHeader("Content-Type", "image/svg+xml");
  res.setHeader("Cache-Control", "s-maxage=1, stale-while-revalidate");

  const text = renderToString(
    Image({
      width: 128,
      height: 28,
      src: "../assets/ninja_badge.svg",
      imageId: "Made By Kaiz",
    })
  );
  return res.status(200).send(text);
}
