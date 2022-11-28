import { Keys } from "./dummy/items";
import Methods from "./setting";

const { GetData, PostData, PutData } = Methods("firebase");

export const RequestAPI = {
    getEquipDatas: () => GetData('equip'),
    getServDatas: () => GetData('serv'),
    getNCDatas: () => GetData('numCou'),
    getReportDatas: () => GetData('report'),
    getRoleDatas: () => GetData('role'),
    getAccDatas: () => GetData('acc'),
    getLogsDatas: () => GetData('logs'),
    getDashboard: () => GetData('dashboard'),

    postEquip: (data: any) => PostData(data, 'equip'),
    postServ: (data: any) => PostData(data, 'serv'),
    postNC: (data: any) => PostData(data, 'numCou'),
    postRole: (data: any) => PostData(data, 'role'),
    postAcc: (data: any) => PostData(data, 'acc'),

    putEquip: (data: any, index: number) => PutData(data, index, 'equip'),
    putServ: (data: any, index: number) => PutData(data, index, 'serv'),
    putRole: (data: any, index: number) => PutData(data, index, 'role'),
    putAcc: (data: any, index: number) => PutData(data, index, 'acc'),
};

export const PostImg = (file: any, key: string) => {
    const { PostData } = Methods('api');
    PostData(file, key);
};

export const Clone = (key: string) => {
    const { PostData } = Methods('firebase');
    if (key === 'dashboard') return PostData(Keys[key], key); // key: dashboard
    else return Keys[key].forEach((d: any) => PostData(d, key)); // key: other
};