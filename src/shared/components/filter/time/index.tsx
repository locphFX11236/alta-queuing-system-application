import React from 'react';

import RangePickerCustom from './rangePickerCustom';
import { FuncNumCou, FuncReport, FuncSerInfo, FuncSerList, FuncUserLog } from './functions';

export const RangeSerList: React.FC = () => <RangePickerCustom Func={FuncSerList} />;
export const RangeSerInfo: React.FC = () => <RangePickerCustom Func={FuncSerInfo} />;
export const RangeNumCou: React.FC = () => <RangePickerCustom Func={FuncNumCou} />;
export const RangeReport: React.FC = () => <RangePickerCustom Func={FuncReport} />;
export const RangeUserLog: React.FC = () => <RangePickerCustom Func={FuncUserLog} />;