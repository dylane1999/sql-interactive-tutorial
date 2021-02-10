export default (app) => {

  const axios = require("axios");

  app.get("/episodes", async (req, res) => {
    try {
      const simplecastRequest = await axios.get(
        "https://api.simplecast.com/podcasts/5b3564ed-5910-4943-a8f8-1cd845425e53/episodes?preview=true",
        {
          headers: {
            Token: process.env.SIMPLECAST_BEARER,
          },
        }
      );
      res.send({ simplecastData: simplecastRequest.data.collection });
    } catch (error) {
      res.status(400).json({ error: error });
    }
  });

  app.get("/episodes/:episodeId", async (req, res) => {
    try {
      episodeId = req.params.episodeId;
      const episodeData = await axios.get(
        `https://api.simplecast.com/episodes/${episodeId}?preview=true`,
        {
          headers: {
            Token: process.env.SIMPLECAST_BEARER,
          },
        }
      );
      res.send(episodeData.data);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  });
  
};

//https://api.simplecast.com/podcasts/5b3564ed-5910-4943-a8f8-1cd845425e53/episodes?preview=true  gets all episodes
//https://api.simplecast.com/seasons/a9ec7b7a-02be-4252-9760-fab7c9945b7e   - get season
//https://api.simplecast.com/episodes/38dd12b5-0197-49ee-b231-4a933609fd40?preview=true   - get episdode by ID
