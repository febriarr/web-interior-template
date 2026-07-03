import { getPayload } from "payload";

import config from "@/payload.config";

export async function getHomePage() {
  const payload = await getPayload({ config });

  const { docs } = await payload.find({
    collection: "pages",
    where: {
      slug: {
        equals: "home",
      },
    },
    limit: 1,
    depth: 2,
  });

  return docs[0] ?? null;
}