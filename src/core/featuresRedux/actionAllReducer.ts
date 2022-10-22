import { AppDispatch } from "../typescript/reduxState";
import { EquipFetchAPI, RefreshSearch1 } from "./slice/equipment";
import { ServFetchAPI, RefreshSearch2 } from "./slice/service";
import { AccFetchAPI } from "./slice/account";
import { NCFetchAPI } from "./slice/numberCount";
import { ReportFetchAPI } from "./slice/report";
import { RoleFetchAPI } from "./slice/role";
import { LogsFetchAPI } from "./slice/logs";

export const FetchAll = (dispatch: AppDispatch) => {
    dispatch( AccFetchAPI() );
    dispatch( EquipFetchAPI() );
    dispatch( NCFetchAPI() );
    dispatch( ReportFetchAPI() );
    dispatch( RoleFetchAPI() );
    dispatch( ServFetchAPI() );
    dispatch( LogsFetchAPI() );
};

export const RefreshAllSearch = (dispatch: AppDispatch) => {
    dispatch( RefreshSearch1() );
    dispatch( RefreshSearch2() );
    // dispatch( RefreshSearch() );
    // dispatch( RefreshSearch() );
    // dispatch( RefreshSearch() );
    // dispatch( RefreshSearch() );
    // dispatch( RefreshSearch() );
};