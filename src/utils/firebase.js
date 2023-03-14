import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, getDocs, getDoc, updateDoc, deleteDoc } from "firebase/firestore"

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "react-js-coder.firebaseapp.com",
    projectId: "react-js-coder",
    storageBucket: "react-js-coder.appspot.com",
    messagingSenderId: "137183939088",
    appId: "1:137183939088:web:858ebe5f6d0eb7f94d1895"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore() // consultar a base de datos

export const getProductos = async() => {
    const productos = await getDocs(collection(db, "productos"))
    const items = productos.docs.map(prod => {
        return {...prod.data(), id: prod.id }
    })
    return items
}

export const getProducto = async(id) => {
    const producto = await getDoc(doc(db, "productos", id))
    const item = {...producto.data(), id: producto.id }
    return item
}

export const updateProducto = async(id, info) => {
    await updateDoc(doc(db, "productos", id), info)
}

export const deleteProducto = async(id) => {
    await deleteDoc(doc(db, "productos", id))
}

export const createOrdenCompra = async(cliente, productos, precioTotal, fecha) => {
    const ordenCompra = await addDoc(collection(db, "ordenesCompra"), {
        datosCliente: cliente,
        productos: productos,
        precioTotal: precioTotal,
        fecha: fecha
    })
    return ordenCompra
}

export const getOrdenCompra = async(id) => {
    const oC = await getDoc(doc(db, "ordenesCompra", id))
    const ordenCompra = {...oC.data(), id: oC.id }
    return ordenCompra
}