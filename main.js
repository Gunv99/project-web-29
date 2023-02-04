import "./css/style.css";
import "./css/bootstrap.css";

import { setupAlert } from "./js/alert";
import { getDocs, collection } from "firebase/firestore";
import { db } from "./js/firebase";

setupAlert();

const productCollection = collection(db, "products");

const products = await getDocs(productCollection);

console.log(
  products.docs.map((item) => ({
    id: item.id,
    ...item.data(),
  }))
);