import express from "express";
import path from "path";
import ProductController from "./src/product.controller.js";

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "src", "Views"));

app.use(express.urlencoded({ extended: true }));

const productcontroller = new ProductController();

app.get("/", productcontroller.getProducts);
app.get("/search", productcontroller.searchProducts);
app.use(express.static("src/Views"));

app.listen(3000, () => {
  console.log("Server is listening at 3000...");
});
