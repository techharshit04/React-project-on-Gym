import { legacy_createStore as createstore } from "redux";
import { root } from "./reducers/todoreducer"
export let store = createstore(root);
console.log(store);
 