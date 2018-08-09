const reduce = (arr, func, initialValue) => {
  let acc = initialValue;
  for (let i = 0; i < arr.length; i++) {
    acc = func(acc, arr[1]);
  }
  return acc;
};

export default reduce;
