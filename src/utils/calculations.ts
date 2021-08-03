export function calculateSum(array: number[]) {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        sum += array[index];
    }
    return sum;
}

export function calculateNestedSum(array: number[][]) {
    let sum = 0;
    for (let index = 1; index < array.length; index++) {
        sum += calculateSum(array[index]);
    }
    return sum;
}
