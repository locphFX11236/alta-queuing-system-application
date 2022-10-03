import { configureStore } from '@reduxjs/toolkit'

import EquipmentReducer from './featuresRedux/slice/equipmentSlice'
import UserReducer from './featuresRedux/slice/userSlice'

export const store = configureStore({
    reducer: {
        UserState: UserReducer,
        EquipmentState: EquipmentReducer
    },
})