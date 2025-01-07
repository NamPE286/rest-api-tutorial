import { Router } from "express";

const router = Router();

router.get("/:id", (req, res) => {
    const { id } = req.params;

    res.send({
        id: parseInt(id),
        name: `Product no ${id}`,
        price: 5000,
    });
});

router.get("/:id/reviews", (req, res) => {
    res.send([
        {
            author: "tachi",
            content: "hay day",
        },
    ]);
});

router.post("/", (req, res) => {
    if (JSON.stringify(req.body) === "{}") {
        res.status(400).send({
            error: "Body must not be empty",
        });
    }

    res.status(200).send();
});

export default router;
