import express from "express";
import axios from "axios";
import config from "config";

const SIMPLECAST_BEARER = config.get("SIMPLECAST_BEARER");
const router = express.Router();

router.get("", async (req, res) => {
  /**
   * Gets data about the podcasts episodes.
   *
   * @param req -> the request object which contains the body and params of the request
   * @param res -> the response object, which is returned with the correct status header and podcast episodes data
   *
   * @return -> res.status(200).send(data) || res.status(400).json(error)
   */
  try {
    const simplecastRequest = await axios.get(
      "https://api.simplecast.com/podcasts/5b3564ed-5910-4943-a8f8-1cd845425e53/episodes?preview=true",
      {
        headers: {
			authorization: SIMPLECAST_BEARER,
		  },
      }
    );
    res.status(200).send({ simplecastData: simplecastRequest.data.collection });
  } catch (error) {
	  console.log(error);
	  res.status(400).json({ error: error });
  }
});

router.get("/:episodeId", async (req, res) => {
  /**
   * Gets data pertaining to a specific episode (based off ``episodeId``).
   *
   * @param req -> the request object which contains the body and params (``episodeId``) of the request
   * @param res -> the response object, which is returned with the correct status header and episode data
   *
   * @return -> res.status(200).send(episodeData) || res.status(400).json(error)
   */
  try {
    const episodeId = req.params.episodeId;
    const episodeData = await axios.get(
      `https://api.simplecast.com/episodes/${episodeId}?preview=true`,
      {
        headers: {
			authorization: SIMPLECAST_BEARER,
		  },
      }
    );
    res.status(200).send(episodeData.data);
  } catch (error) {
	console.log(error);
    res.status(400).json({ error: error });
  }
});

router.get("/analytics/top_10", async (req, res) => {
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
      `https://api.simplecast.com/analytics/episodes/top_10?podcast=${podcastId}`,
      {
        headers: {
          authorization: SIMPLECAST_BEARER,
        },
      }
    );
	console.log(topEpisodeData);
    res.status(200).send(topEpisodeData.data);
  } catch (error) {
	  console.log(error);
	  res.status(400).json({ error: error });
  }
});

export default router;

//https://api.simplecast.com/podcasts/5b3564ed-5910-4943-a8f8-1cd845425e53/episodes?preview=true  gets all episodes
//https://api.simplecast.com/seasons/a9ec7b7a-02be-4252-9760-fab7c9945b7e   - get season
//https://api.simplecast.com/episodes/38dd12b5-0197-49ee-b231-4a933609fd40?preview=true   - get episdode by ID
