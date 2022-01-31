import { createStore, combineReducers, applyMiddleware } from 'redux';
import word from './modules/word';
import thunk from "redux-thunk";

// reducer를 뭉친것을 rootReducer 라고 정해준다.
// reducer는 여러개 있을 수 있으므로 하나로 뭉쳐주는 작업이다.
const rootReducer = combineReducers({ word });

// 뭉쳐진 리듀서들을 넣어서 스토어를 만들어준다.
// 리듀서뿐만 아니라 미들웨어나 필요한 것들도 같이 넣을 수 있다.
// 미들웨어 묶어주기
const middlewares = [thunk];
// 미들웨어를 하나씩 풀어서 넣어준다.
const enhancer = applyMiddleware(...middlewares);

// 리듀서+optional들을 넣어서 스토어를 만들어준다.
const store = createStore(rootReducer, enhancer);

export default store;