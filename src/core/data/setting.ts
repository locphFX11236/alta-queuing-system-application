import * as Local from "./dummy";
import * as RestAPI from './api';
import * as Firebase from './firebase';
import { SBFProps } from "../typescript/other";

const Methods = (storeBackendFrom: SBFProps) => {
    switch (storeBackendFrom) {
        case 'dummy':
            return { ...Local };
        case 'api':
            return { ...RestAPI };
        case 'firebase':
            return { ...Firebase };
    };
};

export default Methods;