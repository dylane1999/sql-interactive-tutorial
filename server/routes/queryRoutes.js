import express from "express";
import axios from "axios";
import config from "config";
import SqlDriver from "../config/db.js";

// const SIMPLECAST_BEARER = config.get("SIMPLECAST_BEARER");
const router = express.Router();

router.post("/query", async (req, res) => {
  /**
   * queries the post request to the sql server
   *
   * @param req -> the request object which contains the body and params (``podcastId``) of the request
   * @param res -> the response object, which is returned with the sql database response
   *
   */
  try {
    const driver = SqlDriver.getDriver();
    const query = req.body.query;
    const data = await SqlDriver.queryDB(query);
    console.log(data, "query results");
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error });
  }
});

export default router;
