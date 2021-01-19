import { createStore } from "redux";
import { reducer } from "../reducers/PlayListReducers";

export let store = createStore(reducer);