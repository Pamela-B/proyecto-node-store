import * as productsService from '../services/products.service.js';

export const getAllProducts = async (req, res) => {
    try {
        const products = await productsService.getAllProducts();
        res.status(200).json({
            description: "Products list",
            results: products
        });
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

export const getProductById = async (req, res) => {
    try {
        const productID = req.params.id;
        const product = await productsService.getProductById(productID);
        if (!product) {
            return res.status(404).json({error: `Can't get product ID: ${productID}. Product not found`});
        }
        res.status(200).json({
            description: `Information about Product ID: ${product.id}`,
            result: product
        });
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

export const createProduct = async (req, res) => {
    try {
        const newProduct = await productsService.createProduct(req.body);
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const productID = req.params.id;
        const product = await productsService.deleteProduct(productID);
        if (!product) {
            return res.status(404).json({error: `Can't delete product ID: ${productID}. Product not found`});
        }
        await productsService.deleteProduct(productID);
        res.status(200).send(`Product with ID: ${productID} was deleted successfully.`);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}