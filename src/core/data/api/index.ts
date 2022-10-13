import { message } from "antd";

import { count_numJSON, equipJSON, serviceJSON } from "../dummy";

const FakeAPI = async (dataJSON: string) => new Promise((resolve, rejects) => {
    try {
        return setTimeout(() => {
            const datas = JSON.parse(dataJSON);
            resolve( datas );
        }, 2000);
    } catch {
        return rejects( () => message.warning('Lỗi fetch api') );
    }
});

// const FetchAPI = async (url: string) => (
//     fetch(url)
//         .then( response => response.json() ) //Trả về danh sách
//         .catch( error => message.warning('Lỗi fetch api') )
//         .finally( () => console.log('Fetched!!!') )
// );

export const RequestAPI = {
    getEquipDatas: () => {
        return FakeAPI(equipJSON); // Fake fetch Api
        // return FetchAPI(url); // Fetch API
    },
    getServDatas: () => {
        return FakeAPI(serviceJSON); // Fake fetch Api
    },
    getNCDatas: () => {
        return FakeAPI(count_numJSON); // Fake fetch Api
    }
};