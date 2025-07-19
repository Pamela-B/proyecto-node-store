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
        const product = await productsService.getProductById(req.params.id);
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