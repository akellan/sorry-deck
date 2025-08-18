export function debounce(ms: number) {
  let timerId: number | undefined;

  return {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    execute: <T extends (...args: any) => any>(
      fn: T,
      ...args: Parameters<T>
    ) => {
      window.clearTimeout(timerId);

      timerId = window.setTimeout(() => {
        fn(...args);
        timerId = undefined;
      }, ms);
    },

    cancel: () => {
      window.clearTimeout(timerId);
    },
  };
}
