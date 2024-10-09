import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import fs from "fs";

const port = 2222;
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (request, response) => {
  response.send("Hello tanii GET huselt irlee");
});

app.get("/products", (request, response) => {
  fs.readFile("./data/products.json", "utf-8", (readError, data) => {
    if (readError) {
      response.json({
        success: false,
        error: error,
      });
    }

    let dbData = data ? JSON.parse(data) : [];

    response.json({
      success: true,
      products: dbData,
    });
  });
});

app.post("/product", (request, response) => {
  const { productName, category, price } = request.body;

  fs.readFile("./data/products.json", "utf-8", (readError, data) => {
    if (readError) {
      response.json({
        success: false,
        error: error,
      });
    }

    let dbData = data ? JSON.parse(data) : [];

    const newProduct = {
      id: Date.now().toString(),
      productName: productName,
      category: category,
      price: price,
    };

    dbData.push(newProduct);

    response.json({
      success: true,
      products: dbData,
    });
  });
});

app.listen(port, () => {
  console.log(`server ajillaa http://localhost:${port}`);
});
