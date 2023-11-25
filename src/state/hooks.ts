import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import type {RootState, AppDispatch} from './store';

export const useTracsDispatch: () => AppDispatch = useDispatch;
export const useTracsSelector: TypedUseSelectorHook<RootState> = useSelector;
