// src/shared/hooks/redux.ts
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../app/store';

// В новых версиях react-redux TypedUseSelectorHook больше не экспортируется
// Используем простую типизацию
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = <T>(selector: (state: RootState) => T): T => 
  useSelector(selector);