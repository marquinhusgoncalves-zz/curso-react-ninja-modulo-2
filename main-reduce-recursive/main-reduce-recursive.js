const isInitialValueUndefined = initialValue => initialValue === undefined;

const mainReduceRecursive = (arr, func, initialValue) => {
  let acc = isInitialValueUndefined(initialValue) ? arr[0] : initialValue;
  let arrCopy = isInitialValueUndefined(initialValue) ? arr.slice(1) : arr;

  return (function reduceInternal(accInternal, arrInternal, counter) {
    const [head, ...tail] = arrInternal;
    const accNext = () => func(accInternal, head, counter, arrCopy);
    return arrInternal.length === 0
      ? accInternal
      : reduceInternal(accNext(), tail, counter + 1);
  })(acc, arrCopy, 0);
};

export default mainReduceRecursive;
