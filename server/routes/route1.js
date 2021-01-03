module.exports = (app) => {
  const axios = require("axios");

  app.get("/getAuthorData", async (req, res) => {
    try {
      const simplecastRequest = await axios.get(
        "https://api.simplecast.com/authors/eb5d2dd2-3fd4-441d-b640-871b7893a856",
        {
          headers: {
            Token:
              "eyJhcGlfa2V5IjoiNzVkMzc3N2M3NWFhM2QwOTkxOWEyZTI4ZjhiM2M1YTkifQ==",
          },
        }
      );
      res.send({"simplecastData" : simplecastRequest.data});
    } catch (error) {
      res.status(400).json({"error": error});
    }
  });
};
