import * as productsModel from '../models/products.model.js';

export async function getAllProducts() {
    return await productsModel.getAllProducts();
}

export async function getProductById(id) {
    return await productsModel.getProductById(id);
}

export async function createProduct(body) {
    return await productsModel.createProduct(body);
}