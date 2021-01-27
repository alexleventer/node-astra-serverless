import { getCollection } from "./lib/astra";

export const main = async () => {
  try {
    const workoutsCollection = await getCollection("workouts");
    const results = await workoutsCollection.find();

    return {
      statusCode: 200,
      body: JSON.stringify({
        ok: true,
        results,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
