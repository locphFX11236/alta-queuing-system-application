import { configureStore } from '@reduxjs/toolkit'

import EquipmentReducer from './featuresRedux/slice/equipment'
import NumCouReducer from './featuresRedux/slice/numberCount'
import ServiceReducer from './featuresRedux/slice/service'
import UserReducer from './featuresRedux/slice/user'

export const store = configureStore({
    reducer: {
        UserState: UserReducer,
        EquipmentState: EquipmentReducer,
        ServiceState: ServiceReducer,
        NumCouState: NumCouReducer,
    },
})