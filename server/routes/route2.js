import express from "express";

const router = express.Router();

router.get("/route2/test", async (req, res) => {
	try {
		const { param1 } = req.body;
		res.send({ testParameter: param1 });
	} catch (error) {
		res.status(400).send("Error");
	}
});

export default router;
