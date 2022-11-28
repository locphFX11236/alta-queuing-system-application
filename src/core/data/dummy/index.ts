import { message } from "antd";

import { Keys } from "./items";

export const GetData = async (key: string) => new Promise((resolve, rejects) => {
    const datas = Keys[key];

    try {
        setTimeout(() => {
            resolve( datas );
        }, 1000);
    } catch(err) {
        console.log(err);
        return rejects( () => message.error('Lỗi fetch api') );
    }
});

export const PostData = (data: any, key: string) => {
    console.log(`Post ${key} to backend! With data: `, data);
};

export const PutData = (data: any, index: number, key: string) => {
    console.log(`Put ${key} to backend! At position ${index} with data: `, data);
};