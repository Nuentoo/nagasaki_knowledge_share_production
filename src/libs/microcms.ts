// SDK利用準備
import { createClient } from "microcms-js-sdk";
import type { MicroCMSQueries, MicroCMSImage } from "microcms-js-sdk";

//　型定義
export type Cats = {
  image: {
    url: string;
    image: MicroCMSImage;
  };
  caption: string;
};

const client = createClient({
  serviceDomain: import.meta.env.SERVICE_DOMAIN,
  apiKey: import.meta.env.API_KEY,
});

//　APIの呼び出し
export const getCats = async (queries?: MicroCMSQueries) => {
  return await client.get({ endpoint: "omagarineko", queries });
};
