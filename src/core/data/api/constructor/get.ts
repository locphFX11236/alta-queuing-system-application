import { message } from "antd";

import { items } from "./items";

const Fake = async (dataJSON: string) => new Promise((resolve, rejects) => {
    try {
        return setTimeout(() => {
            const datas = JSON.parse(dataJSON);
            resolve( datas );
        }, 1000);
    } catch {
        return rejects( () => message.error('Lỗi fetch api') );
    }
});

const Really = async (url: string) => fetch(url)
    .then( response => response.json() ) //Trả về danh sách
    .catch( error => message.error('Lỗi fetch api') )
    .finally( () => console.log('Fetched!!!') )
;

const GetData = (key: string) => {
    const isFake = true;

    if (isFake) return Fake(items[key].dataJSON);
    else return Really(items[key].url);
};

export default GetData; 