let products = [];
class ProductModel {
  static async fetchAll() {
    try {
      const response = await fetch(
        "https://openapi.etsy.com/v3/application/listings/active",
        {
          headers: {
            "x-api-key": "0aa6qx7gfy3cds87hvijwe40",
          },
        }
      );
      const data = await response.json();
      products.push(...data["results"]);
      return data;
    } catch (err) {
      console.log(err);
    }
  }

  static getAll() {
    return products;
  }

  static search(item) {
    //searching based on title
    const toSearch = item.toLowerCase().trim();
    const data = products.filter((p) => {
      if (p.title.trim().toLowerCase().includes(toSearch)) return true;
      else return false;
    });
    return data;
  }
}
export default ProductModel;
