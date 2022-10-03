import { equipJSON } from "../data/dummy";
import HandleData from "./handleData";
// import { useAppDispatch } from "../featuresRedux/hookRedux";
// import { addEquipDatas } from "../featuresRedux/slice/equipmentSlice";

export const FetchDatas = {
    getDatas: async () => {
        // return fetch(url)
        // .then( response => response.json() ) //Trả về danh sách
        // .then( staffs => dispatch( addStaffs( staffs ) ) )
        // .catch( error => dispatch( staffsFailed( error.message ) ) )

        return new Promise((resolve, rejects) => {
            setTimeout(() => {
                const equipDatas = HandleData(equipJSON);
                resolve(equipDatas);
            }, 2000);
        })
    }

    // const dispatch = useAppDispatch();
    // console.log(equipDatas);
    // dispatch( addEquipDatas( equipDatas ) );
};