import * as productsModel from '../models/products.model.js';

export async function getAllProducts() {
    return await productsModel.getAllProducts();
}

export async function getProductsById(id) {
    return await productsModel.getProductsById(id);
}
