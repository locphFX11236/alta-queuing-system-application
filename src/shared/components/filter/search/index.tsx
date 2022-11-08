import React from 'react';

import './style.css';
import SearchCustom from './searchCustom';
import { FuncA2, FuncE3, FuncL2, FuncNc5, FuncR, FuncS3, FuncSI3 } from './functions';

export const SearchE3: React.FC = () => <SearchCustom functions={ FuncE3 } />;
export const SearchS3: React.FC = () => <SearchCustom functions={ FuncS3 } />;
export const SearchSI3: React.FC = () => <SearchCustom functions={ FuncSI3 } />;
export const SearchNc5: React.FC = () => <SearchCustom functions={ FuncNc5 } />;
export const SearchR: React.FC = () => <SearchCustom functions={ FuncR } />;
export const SearchA2: React.FC = () => <SearchCustom functions={ FuncA2 } />;
export const SearchL2: React.FC = () => <SearchCustom functions={ FuncL2 } />;