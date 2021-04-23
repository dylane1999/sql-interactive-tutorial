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
   * @return -> res.status(200).send(sqlResponse); ||  res.status(400).json({ error: error });
   *
   */
  try {
    console.log("started query request")
    const driver = SqlDriver.getDriver();
    const query = req.body.query;
    const sqlResponse = await SqlDriver.queryDB(query);
    if (sqlResponse instanceof Error){
        throw sqlResponse
    }
    res.status(200).send(sqlResponse);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

export default router;
