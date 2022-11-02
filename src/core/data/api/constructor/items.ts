import { accountJSON, count_numJSON, equipJSON, reportJSON, roleJSON, serviceJSON, userLogJSON } from "../../dummy";

export const items: Record<string, any> = {
    'equip': {
        dataJSON: equipJSON,
        // url: ,
    },
    'serv': {
        dataJSON: serviceJSON,
    },
    'numCou': {
        dataJSON: count_numJSON,
    },
    'report': {
        dataJSON: reportJSON,
    },
    'role': {
        dataJSON: roleJSON,
    },
    'acc': {
        dataJSON: accountJSON,
    },
    'logs': {
        dataJSON: userLogJSON,
    },
    'imgStore': {
        url: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    }
};