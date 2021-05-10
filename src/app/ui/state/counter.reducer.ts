import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import { initialState } from '../../ui/state/counter.state'
import { getDecrementNumber, getIncrementNumber } from "./counter.actions";
import { reset } from "./counter.actions";

const _counterReducer = createReducer(
    initialState,
    on(getIncrementNumber, (state) => {
        return {
            ...state,
            counter: state.counter + 1,
        };

    }),
    on(getDecrementNumber, (state) => {
        return {
            ...state,
            counter: state.counter - 1,
        }

    }),
    on(reset, (state) => {
        return {
            ...state,
            counter: 0,
        }
    }),
    // on(customIncrement, (state,action) => {
    //     return{
    //         ...state,
    //         counter: action.value

    //     }

    // })
);

export function counterReducer(state: any, action: any) {
    return _counterReducer(state, action);
}