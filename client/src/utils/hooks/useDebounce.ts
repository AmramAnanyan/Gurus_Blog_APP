import React, { useCallback, useEffect, useRef } from 'react';
export interface IDebounce {
  delay: number;
  callBack(): void;
}
const useDebounce = (): { debounce(arg: IDebounce): void } => {
  const timeOutId = useRef<any>(0);

  const debounce = useCallback(({ delay, callBack }: IDebounce) => {
    if (timeOutId.current) {
      clearTimeout(timeOutId.current);
    }
    timeOutId.current = setTimeout(() => {
      callBack();
    }, delay);
  }, []);

  useEffect(() => {
    return () => {
      clearTimeout(timeOutId.current);
    };
  }, []);
  return { debounce };
};

export default useDebounce;
