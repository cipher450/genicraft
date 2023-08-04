import {createStore} from 'redux'
import rootReducer  from "./reducers"


const store = createStore(rootReducer);


export  const server = {
    main:'http://localhost:5000'
}

export default store;

