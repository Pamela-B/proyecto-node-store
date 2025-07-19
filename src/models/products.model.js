import {db} from '../config/db.js'
import {collection, doc, getDoc, getDocs, addDoc, deleteDoc,setDoc} from 'firebase/firestore';

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
        throw new Error(`Error while attempting to get all products. Error message: ${err.message}`);
    }
}

export async function getProductById(id) {
    try {
        const docReference = doc(productsCollection, id);
        const docSnapshot = await getDoc(docReference);
        return docSnapshot.exists() ? {id: docSnapshot.id, ...docSnapshot.data()} : null;
    } catch (err) {
        throw new Error(`Error while attempting to get product ID: ${id}. // Error message: ${err.message}`);
    }
}

export async function createProduct(data) {
    try {
        const newProduct = { id, data.name, data.price, data.category }
        const docRef = await addDoc(productsCollection, newProduct);
        return { id: docRef.id, ...data };
    } catch (err) {
        throw new Error(`Error while attempting to create a new product. // Error message: ${err.message}`);
    }
}