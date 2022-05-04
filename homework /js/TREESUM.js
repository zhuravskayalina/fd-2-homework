
let arr = [5, 7, [4, [2], 8, [1, 3], 2],
    [9, []], 1, 8]

//   function treeSum(arr) {
//       let newArr = arr.flat(Infinity);
//       console.log(newArr);
//       let result = newArr.reduce((accum, current) => accum + current);
//       return result;
//   }

//   console.log(treeSum(arr));

function flat(array, result = []) {
    for (const el of array) {
        if (Array.isArray(el)) {
            flat(el, result);
        } else {
            result.push(el);
        }
    }
    return result.reduce((prev, curr) => prev + curr);
}

const result = document.querySelector('.result-text')

result.append(flat(arr).toString());
