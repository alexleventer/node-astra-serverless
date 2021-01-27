import { getCollection } from "./lib/astra";

export const main = async (event) => {
  try {
    const workoutsCollection = await getCollection("workouts");

    return {
      statusCode: 200,
      body: JSON.stringify({
        ok: true,
        results: await workoutsCollection.delete(JSON.parse(event).body.id),
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
