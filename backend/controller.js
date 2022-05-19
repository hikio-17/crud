const Product = require("./model");

const index = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const view = async (req, res) => {
  try {
    const products = await Product.findById(req.params.id);
    res.json(products);
  } catch (error) {
    res.status(404).json({ message: error.mesage });
  }
};

const store = async (req, res) => {
  const product = new Product(req.body);
  try {
    const addProduct = await product.save();
    res.status(201).json(addProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const destroy = async (req, res) => {
  try {
    const deleteProduct = await Product.deleteOne({ _id: req.params.id });
    res.status(200).json(deleteProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const update = async (req, res) => {
  try {
    const updateProduct = await Product.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updateProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  index,
  view,
  store,
  destroy,
  update,
};
