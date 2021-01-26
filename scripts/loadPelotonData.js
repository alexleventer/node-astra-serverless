require('dotenv').config();
const { peloton } = require('peloton-client-node');
const { createClient } = require('@astrajs/collections');

const {
  ASTRA_DB_ID,
  ASTRA_DB_REGION,
  ASTRA_DB_USERNAME,
  ASTRA_DB_PASSWORD,
  ASTRA_DB_KEYSPACE,
  PELOTON_USERNAME,
  PELOTON_PASSWORD
} = process.env;

const loadPelotonData = async () => {
  const astraClient = await createClient({
    astraDatabaseId: ASTRA_DB_ID,
    astraDatabaseRegion: ASTRA_DB_REGION,
    username: ASTRA_DB_USERNAME,
    password: ASTRA_DB_PASSWORD,
  });

  const workoutsCollection = await astraClient.namespace(ASTRA_DB_KEYSPACE).collection('workouts');
  await peloton.authenticate({
    username: PELOTON_USERNAME,
    password: PELOTON_PASSWORD
  });

  const workouts = await peloton.workouts({
    limit: 200, // Increase if you'd like to import more workouts
  });

  const timeout = (ms) => new Promise(resolve => setTimeout(resolve, ms))

  workouts.data.forEach(async (workout) => {
    try {
      await workoutsCollection.create(workout.id, workout);
      console.log(`${workout.name} loaded...`);

      // Upgrade to a paid tier and get rid of this line :)
      await timeout(3000);
    } catch (e) {
      console.log(e);
    }
  });
};

loadPelotonData();
