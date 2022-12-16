import { Product } from "../models/products.js";
const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({ name: "vase table" });
  res.status(200).json({ products, nbHits: products.length });
};

const getAllProducts = (req, res) => {
  res.status(200).json({
    msg: "Products route.",
  });
};

export { getAllProductsStatic, getAllProducts };
