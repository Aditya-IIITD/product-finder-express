import ProductModel from "./product.model.js";

export default class ProductController {
  async getProducts(req, res) {
    const data = await ProductModel.fetchAll();
    const listing = data["results"];
    if (data) {
      res.render("products", { data: listing });
    } else {
      res.status(500).send("something went wrong");
    }
  }

  searchProducts(req, res) {
    const data = ProductModel.search(req.query.searchItem);
    if (data.length > 0) {
      res.render("products", { data: data });
    } else {
      res.send("Product not found");
    }
  }
}
