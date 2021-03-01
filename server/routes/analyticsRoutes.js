import express from "express";
import axios from "axios";
import config from "config";

// const SIMPLECAST_BEARER = config.get("SIMPLECAST_BEARER");
const router = express.Router();

router.get("/top_10", async (req, res) => {
    /**
     * Gets the top 10 episodes for a specific podcast (based off ``podcastId``).
     *
     * @param req -> the request object which contains the body and params (``podcastId``) of the request
     * @param res -> the response object, which is returned with the correct status header and top ten episodes data
     *
     * @return -> res.status(200).send(episodeData) || res.status(400).json(error)
     */
    try {
      const podcastId = config.get("PODCAST_ID");
      const topEpisodeData = await axios.get(
        `https://api.simplecast.com/analytics/episodes/top_10?podcast=6768956`,
        {
          headers: {
            authorization: SIMPLECAST_BEARER,
          },
        }
      );
      console.log(topEpisodeData.data);
      res.status(200).send(topEpisodeData.data);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error });
    }
  });
  
  export default router;