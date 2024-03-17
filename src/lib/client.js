import { SanityClient } from "@sanity/client";

import PicoSanity from "picosanity";

export const client = new PicoSanity({
  projectId: "ffl96mby",
  dataset: "production",
  apiVersion: "2021-10-25",
  useCdn: process.env.NODE_ENV === "production",
});
