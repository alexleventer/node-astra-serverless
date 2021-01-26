import { createClient } from "@astrajs/collections";

const {
  ASTRA_DB_ID,
  ASTRA_DB_REGION,
  ASTRA_DB_USERNAME,
  ASTRA_DB_PASSWORD,
  ASTRA_DB_KEYSPACE,
} = process.env;

export const getCollection = async (collectionName) => {
  const astraClient = await createClient({
    astraDatabaseId: ASTRA_DB_ID,
    astraDatabaseRegion: ASTRA_DB_REGION,
    username: ASTRA_DB_USERNAME,
    password: ASTRA_DB_PASSWORD,
  });
  return await astraClient
    .namespace(ASTRA_DB_KEYSPACE)
    .collection(collectionName);
};
