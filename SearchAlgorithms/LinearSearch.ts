const linearSearch = (arr: number[], findEl: number): number => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === findEl) {
      return i;
    }
  }
  return -1;
};
