import { configureStore } from '@reduxjs/toolkit'
import AccReducer from './featuresRedux/slice/account'
import DashboardReducer from './featuresRedux/slice/dashboard'

import EquipmentReducer from './featuresRedux/slice/equipment'
import LogsReducer from './featuresRedux/slice/logs'
import NumCouReducer from './featuresRedux/slice/numberCount'
import ReportReducer from './featuresRedux/slice/report'
import RoleReducer from './featuresRedux/slice/role'
import ServiceReducer from './featuresRedux/slice/service'
import UserReducer from './featuresRedux/slice/user'

export const store = configureStore({
    reducer: {
        UserState: UserReducer,
        EquipmentState: EquipmentReducer,
        ServiceState: ServiceReducer,
        NumCouState: NumCouReducer,
        ReportState: ReportReducer,
        RoleState: RoleReducer,
        AccState: AccReducer,
        LogsState: LogsReducer,
        DashboardState: DashboardReducer,
    },
})