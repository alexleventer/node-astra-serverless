import { getCollection } from './lib/astra';

export const main = async () => {
  try {
    const workoutsCollection = await getCollection('workouts');

    return {
      statusCode: 200,
      body: {
        ok: true,
        results: await workoutsCollection.find(),
      }
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
