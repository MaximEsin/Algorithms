const partition = (arr: number[], start: number, end: number): number => {
  const pivot = arr[end];
  let i = start;

  for (let j = start; j <= end - 1; j++) {
    if (arr[j] <= pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }

  [arr[i], arr[end]] = [arr[end], arr[i]];
  return i;
};

const quickSort = (arr: number[], start: number, end: number): void => {
  if (start < end) {
    const pi = partition(arr, start, end);

    quickSort(arr, start, pi - 1);
    quickSort(arr, pi + 1, end);
  }
};
