import { collection, getDocs, addDoc, updateDoc, doc, query, where } from 'firebase/firestore/lite';

import { db } from './config';

export const GetData = async (key: string) => {
    const collRef = collection(db, key); // Truy cập vào collection
    const querySnapshot = await getDocs(collRef); // Lấy data từ dữ liệu trả về trong .docs
    const checkDoc = querySnapshot.docs;
    if (checkDoc.length > 1) {
        const data = checkDoc.map( (doc) => ({ ...doc.data(), id: doc.id }) ); // Xử lý data nhận được
        return data;
    } else {
        let data = {};
        checkDoc.forEach( (doc) => (data = { ...doc.data(), id: doc.id }) ); // Xử lý data nhận được
        return data;
    };
}; // Lấy dữ liệu từ fire store

export const PostData = async (file: any, key: string) => {
    try {
        const docRef = await addDoc(collection(db, key), file);
        console.log("Document written with ID: ", docRef.id);
        console.log(`Post ${key} to backend! With data: `, file);
    } catch (err) {
        console.error("Error adding document: ", err);
    }
};

export const PutData = async (data: any, index: number, key: string) => {
    const collRef = collection(db, key); // Truy cập vào collection
    const q = query(collRef, where("key", "==", index));
    const querySnapshot = await getDocs(q);
    querySnapshot.docs.forEach((d) => updateDoc( doc( collRef, d.id ), data) );
    console.log(`Put ${key} to backend! At position ${index} with data: `, data);
};

/**
 * Once time adds only One document
 * doc( <File store>, <Collection name/ id>, <Document name/ id> ). VD: doc(db, 'cities', 'BJ')
 * collection( <File store>,  <Collection name/ id> ). VD: collection(db, "cities")
 * setDoc( <Document address has to name/id>, dataObj1, dataObj2) => Overwritten/created, Result: { ...obj1, ...obj2 }. VD: setDoc(doc(db, 'cities', 'BJ'), { capital: true }, { merge: true })
 * addDoc( <Collection address> do not has name/id of collection, dataObj ). VD: addDoc(collection(db, "cities"), { capital: true })
 */