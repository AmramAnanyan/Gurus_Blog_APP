import { useDispatch } from 'react-redux';
import type { AppDispatch } from 'app/Store';

export const useAppDispatch: () => AppDispatch = useDispatch;
