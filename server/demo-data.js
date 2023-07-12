const { createUser } = require("./utils");
/** Creating demo data */
const creds = require("./secrets.json");
const demoPassword = "password123";
const redis = require("redis");
let redisClient;

async function redisConnect() {
  redisClient = redis.createClient({
    password: creds.password,
    socket: {
      host: creds.host,
      port: creds.port,
    },
  });
  redisClient.on("error", (error) => console.error(`Error : ${error}`));

  await redisClient.connect();
}

const createDemoData = async () => {
  await redisConnect();
  const cacheResults = await redisClient.get("members");
  const DATA_EMPLOYEE = JSON.parse(cacheResults);
  console.log("Creating demo data");
  /** For each name create a user. */
  const users = [];
  for (let x = 0; x < DATA_EMPLOYEE.length; x++) {
    const user = await createUser(DATA_EMPLOYEE[x].displayName, demoPassword);
    /** This one should go to the session */
    console.log(user);
    users.push(user);
  }
  console.log(users);
};

module.exports = {
  createDemoData,
};
