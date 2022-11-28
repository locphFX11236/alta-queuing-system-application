import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, updateDoc, doc } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyBvCZT1QatkR7uJIUZ-_8mrr-VnXmCPm_s",
    authDomain: "queuing-system-application.firebaseapp.com",
    projectId: "queuing-system-application",
    storageBucket: "queuing-system-application.appspot.com",
    messagingSenderId: "485149135126",
    appId: "1:485149135126:web:f149dc0e9ce95b77454037",
    measurementId: "G-VKN08ZYFN7"
}; // Đoạn mã cho đối tượng Config của ứng dụng liên kết với Firebase

export const app = initializeApp(firebaseConfig); // Khởi tạo Firebase
export const db = getFirestore(app); // Liên kết với fire store

// export const dataPending = async () => {
//     const datasCol1 = collection(db, 'ticket-list'); // Truy cập vào collection 'ticket-list'
//     const dataSnapshot1 = await getDocs(datasCol1); // Lấy data từ dữ liệu trả về trong .docs
//     const dataList1 = dataSnapshot1.docs.map( (doc) => ({ ...doc.data(), id: doc.id }) ); // Xử lý data nhận được

//     const datasCol2 = collection(db, 'ticket-group'); // Truy cập vào collection 'ticket-group'
//     const dataSnapshot2 = await getDocs(datasCol2); // Lấy data từ dữ liệu trả về trong .docs
//     const dataList2 = dataSnapshot2.docs.map( (doc) => ({ ...doc.data(), id: doc.id }) ); // Xử lý data nhận được

//     const dataList = {
//         ticketList: dataList1,
//         ticketGroup: dataList2
//     };
//     return dataList;
// }; // Lấy dữ liệu từ fire store

// export const AddData = async (data: any, coll: any) => {
//     return await addDoc( collection( db, coll ), data );
// };

// export const UpdateData = async (data: any, coll: any) => {
//     return await updateDoc( doc( db, coll, data.id ), data);
// }