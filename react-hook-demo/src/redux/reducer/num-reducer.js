import { ADD, DIS } from '../action/num-action';
const initialState = {
    count: 0
};
export default function (state = initialState, action) {
    switch (action.type) {
        case ADD: {
            return {
                count: state.count + action.payLoad
            }
        }
        case DIS: {
            return {
                count: state.count - action.payLoad
            }
        }
        default:
            return state;
    }
}