import { MyState } from './counter.state';
import {createFeatureSelector, createSelector} from '@ngrx/store';


export const getCounterState = createFeatureSelector<MyState>('mystate')


// create selector for get conter
export const getCounter = createSelector(getCounterState,
    (state) => {
     return state.counter;
  })