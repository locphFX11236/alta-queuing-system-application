import * as Local from "./dummy";
import * as RestAPI from './api';
import * as Firebase from './firebase';

type SBFProps = 'dummy' | 'firebase' | 'api';

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