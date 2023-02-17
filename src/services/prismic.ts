import Prismic from "@prismicio/client";
import { HttpRequestLike } from '@prismicio/client';
import { enableAutoPreviews } from '@prismicio/next';

export interface PrismicConfig {
  req?: HttpRequestLike;
}

export function getPrismicClient(config: PrismicConfig): Prismic.Client {
  const client = Prismic.createClient(process.env.PRISMIC_END_POINT, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  });

  enableAutoPreviews({
    client,
    req: config.req,
  })
  
  return client;
}
