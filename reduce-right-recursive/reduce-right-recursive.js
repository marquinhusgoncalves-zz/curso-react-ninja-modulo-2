import mainReduceRecursive from './../main-reduce-recursive/main-reduce-recursive';
import reverseRecursive from '../reverse-recursive/reverse-recursive';

const reduceRightRecursive = (arr, ...params) =>
  mainReduceRecursive(reverseRecursive(arr), ...params);

export default reduceRightRecursive;
