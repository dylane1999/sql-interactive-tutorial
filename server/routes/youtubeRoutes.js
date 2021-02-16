import axios from "axios";
import config from "config";
import express from "express";

const googleAuth = config.get("googleAuth");

const router = express.Router();

router.get("/popular-shopify-content", async (req, res) => {
    /**
     * get the top 5 most popular videos related to shopify
     * 
     * use the video id and https://www.youtube.com/embed/{videoId}
     * to embed the video on the frontend in an iFrame
     * 
     * @param req -> the request object which contains the body and params of the request
     * @param res -> the response object, which is returned with the correct status header and a list of videos and thier Id's
     * 
     * @return -> res.status(200).send(data) || res.status(400).json(error)
     */
    try {
        const googleResponse = await axios.get(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCNJm-QbohaMzH-YTe6LyqSg&maxResults=2&order=viewCount&q=Shopify&topicId=Shopify&key=${googleAuth}`,
            {
                headers: {
                    Authorization: googleAuth,
                    Accept: "application/json",
                },
            }
        );
        if (googleResponse.status != 200) {
            res.status(googleResponse.status).send({ error: "Problem with Google Youtube API" });
        }
        const searchPayload = {
            videos: googleResponse.data.items,
            pageInfo: googleResponse.data.pageInfo,
        };
        res.status(200).send(searchPayload);
    } catch (error) {
        console.log(error.message);
        res.status(400).send({ error: error.message });
    }
});


router.get("/recent-shopify-content", async (req, res) => {
    /**
     * get 10 most recent videos related to shopify 
     * 
     * use the video id and https://www.youtube.com/embed/{videoId}
     * to embed the video on the frontend in an iFrame
     * 
     * @param req -> the request object which contains the body and params of the request
     * @param res -> the response object, which is returned with the correct status header and a list of videos and thier Id's
     * 
     * @return -> res.status(200).send(data) || res.status(400).json(error)
     */
    try {
        const googleResponse = await axios.get(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCNJm-QbohaMzH-YTe6LyqSg&maxResults=10&order=date&q=Shopify&topicId=Shopify&key=${googleAuth}`,
            {
                headers: {
                    Authorization: googleAuth,
                    Accept: "application/json",
                },
            }
        );
        if (googleResponse.status != 200) {
            res.status(googleResponse.status).send({ error: "Problem with Google Youtube API" });
        }
        const searchPayload = {
            videos: googleResponse.data.items,
            pageInfo: googleResponse.data.pageInfo,
        };
        res.status(200).send(searchPayload);
    } catch (error) {
        console.log(error.message);
        res.status(400).send({ error: error.message });
    }
});

router.get("/popular-amazon-content", async (req, res) => {
    /**
     * get the top 5 most popular videos related to shopify
     * 
     * use the video id and https://www.youtube.com/embed/{videoId}
     * to embed the video on the frontend in an iFrame
     * 
     * @param req -> the request object which contains the body and params of the request
     * @param res -> the response object, which is returned with the correct status header and a list of videos and thier Id's
     * 
     * @return -> res.status(200).send(data) || res.status(400).json(error)
     */
    try {
        const googleResponse = await axios.get(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCNJm-QbohaMzH-YTe6LyqSg&maxResults=2&order=viewCount&q=Amazon&topicId=Amazon&key=${googleAuth}`,
            {
                headers: {
                    Authorization: googleAuth,
                    Accept: "application/json",
                },
            }
        );
        if (googleResponse.status != 200) {
            res.status(googleResponse.status).send({ error: "Problem with Google Youtube API" });
        }
        const searchPayload = {
            videos: googleResponse.data.items,
            pageInfo: googleResponse.data.pageInfo,
        };
        res.status(200).send(searchPayload);
    } catch (error) {
        console.log(error.message);
        res.status(400).send({ error: error.message });
    }
});


router.get("/recent-amazon-content", async (req, res) => {
    /**
     * get 10 most recent videos related to amazon 
     * 
     * use the video id and https://www.youtube.com/embed/{videoId}
     * to embed the video on the frontend in an iFrame
     * 
     * @param req -> the request object which contains the body and params of the request
     * @param res -> the response object, which is returned with the correct status header and a list of videos and thier Id's
     * 
     * @return -> res.status(200).send(data) || res.status(400).json(error)
     */
    try {
        const googleResponse = await axios.get(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCNJm-QbohaMzH-YTe6LyqSg&maxResults=10&order=date&q=Amazon&topicId=Amazon&key=${googleAuth}`,
            {
                headers: {
                    Authorization: googleAuth,
                    Accept: "application/json",
                },
            }
        );
        if (googleResponse.status != 200) {
            res.status(googleResponse.status).send({ error: "Problem with Google Youtube API" });
        }
        const searchPayload = {
            videos: googleResponse.data.items,
            pageInfo: googleResponse.data.pageInfo,
        };
        res.status(200).send(searchPayload);
    } catch (error) {
        console.log(error.message);
        res.status(400).send({ error: error.message });
    }
});

export default router;

