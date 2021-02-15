import express from "express";
import axios from "axios";
import config from "config";

const SIMPLECAST_BEARER = config.get("SIMPLECAST_BEARER");

const router = express.Router();

router.get("/season1", async (req, res) => {
  /**
   * Gets data about a season, publish date
   * no. of episdodes, meta data about season
   *
   * @param req -> the request object which contains the body and params of the request
   * @param res -> the response object, which is returned with the correct status header and podcast season data
   *
   * @return -> res.status(200).send(data) || res.status(400).json(error)
   */
  try {
    const simplecastRequest = await axios.get(
      "https://api.simplecast.com/seasons/a9ec7b7a-02be-4252-9760-fab7c9945b7e",
      {
        headers: {
          authorization: SIMPLECAST_BEARER,
        },
      }
    );
    res.status(200).send({ simplecastData: simplecastRequest.data });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

router.get("/season1/episodes", async (req, res) => {
  /**
   * Gets every episode in the season.
   * includes mp3 files and episode descriptions
   *
   * @param req -> the request object which contains the body and params of the request
   * @param res -> the response object, which is returned with the correct status header and podcast episodes for season 1
   *
   * @return -> res.status(200).send(data) || res.status(400).json(error)
   */
  try {
    const simplecastRequest = await axios.get(
      "https://api.simplecast.com/seasons/a9ec7b7a-02be-4252-9760-fab7c9945b7e/episodes",
      {
        headers: {
          authorization: SIMPLECAST_BEARER,
        },
      }
    );
    res.status(200).send({ simplecastData: simplecastRequest.data });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

export default router;
