import { useEffect, useMemo } from "react";
import { debounce } from "../lib/debounce";

export type Fn = (...args: unknown[]) => unknown | void;

export function useDebounce(ms: number) {
  const debounceObj = useMemo(() => {
    return debounce(ms);
  }, [ms]);

  useEffect(() => {
    return () => {
      debounceObj.cancel();
    };
  }, [debounceObj]);

  return debounceObj.execute;
}
