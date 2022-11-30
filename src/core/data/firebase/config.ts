import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

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