import { EquipFetchAPI, RefreshSearch2 } from "./slice/equipment";
import { AppDispatch } from "../typescript/reduxState";
import { AccFetchAPI } from "./slice/account";
import { NCFetchAPI } from "./slice/numberCount";
import { ReportFetchAPI } from "./slice/report";
import { RoleFetchAPI } from "./slice/role";
import { ServFetchAPI } from "./slice/service";
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
    // dispatch( RefreshSearch() );
    dispatch( RefreshSearch2() );
    // dispatch( RefreshSearch() );
    // dispatch( RefreshSearch() );
    // dispatch( RefreshSearch() );
    // dispatch( RefreshSearch() );
    // dispatch( RefreshSearch() );
};