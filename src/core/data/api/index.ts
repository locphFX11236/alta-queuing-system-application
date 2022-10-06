import { message } from "antd";

import { equipJSON } from "../dummy";

const FakeAPI = (dataJSON: string) => new Promise((resolve, rejects) => {
    try {
        return setTimeout(() => {
            const datas = JSON.parse(dataJSON);
            resolve( datas );
        }, 2000);
    } catch {
        return rejects( () => message.warning('Lỗi fetch api') );
    }
});

// const FetchAPI = (url: string) => fetch(url)
//     .then( response => response.json() ) //Trả về danh sách
//     .catch( error => message.warning('Lỗi fetch api') )
//     .finally( () => console.log('Fetched!!!') )
// ;

export const RequestAPI = {
    getEquipDatas: async () => {
        return FakeAPI(equipJSON); // Fake fetch Api
        // return FetchAPI(url); // Fetch API
    }
};