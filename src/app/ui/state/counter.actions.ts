import {createAction, props} from '@ngrx/store';

export const reset = createAction('reset');  

export const customIncrement = createAction('customincrement', 
props<{value:number}>());

const GET_INCREMENT= '[My Page] Increment number'
const GET_DECREMENT = '[My Page] decrement number'

// number actions
export const getIncrementNumber = createAction(GET_INCREMENT)
export const getDecrementNumber = createAction(GET_DECREMENT)