// eslint-disable-next-line @typescript-eslint/no-explicit-any
function throttle<T extends (...args: any[]) => void>(callback: T, delay: number) {
  let timerId: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<T>) => {
    if (timerId) return;

    timerId = setTimeout(() => {
      callback(...args);
      timerId = null;
    }, delay);
  };
}

export default throttle;
