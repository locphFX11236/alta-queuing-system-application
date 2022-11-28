import { AppDispatch } from "../typescript/reduxState";
import { EquipFetchAPI, RefreshSearch1 } from "./slice/equipment";
import { ServFetchAPI, RefreshSearch2 } from "./slice/service";
import { NCFetchAPI, RefreshSearch3 } from "./slice/numberCount";
import { ReportFetchAPI, RefreshSearch4 } from "./slice/report";
import { AccFetchAPI, RefreshSearch5 } from "./slice/account";
import { RoleFetchAPI, RefreshSearch6 } from "./slice/role";
import { LogsFetchAPI, RefreshSearch7 } from "./slice/logs";
import { DashboardFetchAPI } from "./slice/dashboard";

export const FetchAll = (dispatch: AppDispatch) => {
    console.log('Get All Data!');
    dispatch( AccFetchAPI() );
    dispatch( EquipFetchAPI() );
    dispatch( NCFetchAPI() );
    dispatch( ReportFetchAPI() );
    dispatch( RoleFetchAPI() );
    dispatch( ServFetchAPI() );
    dispatch( LogsFetchAPI() );
    dispatch( DashboardFetchAPI() );
};

export const RefreshAllSearch = (dispatch: AppDispatch) => {
    console.log('Refresh All Search!');
    dispatch( RefreshSearch1() );
    dispatch( RefreshSearch2() );
    dispatch( RefreshSearch3() );
    dispatch( RefreshSearch4() );
    dispatch( RefreshSearch5() );
    dispatch( RefreshSearch6() );
    dispatch( RefreshSearch7() );
};