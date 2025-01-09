import express from "express";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use('/product', require('./routers/product').default)

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});
