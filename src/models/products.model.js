import {db} from '../config/db.js'
import {collection, doc, getDoc, getDocs} from 'firebase/firestore';

const productsCollection = collection(db, 'products');

export async function getAllProducts() {
    try {
    const results = await getDocs(productsCollection);
    const productsArray = [];
    results.forEach((result) => {
        productsArray.push({id: result.id, ...result.data()});
    })
        return productsArray;
    } catch (err) {
        throw new Error(`Error while attempting to get all products. Error: ${err.message}`);
    }
}

export async function getProductsById(id) {
    try {
        const docReference = doc(productsCollection, id);
        const docSnapshot = await getDoc(docReference);
        return docSnapshot.exists() ? { id: docSnapshot.id, ...docSnapshot.data() } : null;
    } catch (err) {
        throw new Error(`Error while attempting to get product ID: ${id}. // Error message: ${err.message}`);
    }
}