import { Router } from "express";
import { ProductModel } from "@src/models/product";

const router = Router();

router.get("/:id", async (req, res) => {
    const { id } = req.params;

    res.send(await ProductModel.getProductByID(parseInt(id)));
});

router.get("/:id/reviews", async (req, res) => {
    const { id } = req.params;

    res.send(await ProductModel.getProductReviews(parseInt(id)));
});

router.post("/", async (req, res) => {
    try {
        await ProductModel.addProduct(req.body);
        res.status(200).send();
    } catch (err) {
        if (err instanceof Error) {
            res.status(400).send({ message: err.message });
        }
    }
});

export default router;
