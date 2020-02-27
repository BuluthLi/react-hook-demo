export const ADD = 'ADD';
export const DIS = 'DIS';
export function numAdd(diff) {
    return {
        type: ADD,
        payLoad: diff
    }
}
export function numDis(diff) {
    return {
        type: DIS,
        payLoad: diff
    }
}