import Link from "next/link";
import App from "../components/App.jsx";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import reducerUsers from "../reducers/reducer-users.jsx";
import ActiveUserReducer from "../reducers/reducer-active-users.jsx";
import reducerTodolist from "../reducers/reducer-todolist";
import reducerTaskChecked from "../reducers/reducer-task-checked";
import reducerDueData from "../reducers/reducer-duedate-data";
import reducerDue from "../reducers/reducer-due";
/*
const Index = () => (
    <div className="root">
        <Link href="/other">
            <a>go to other page</a>
        </Link>
        <style jsx>
        {' a { background: yellow; } '}
        </style>
        <style jsx global>
        {' body { background: grey; } '}
        </style>

        <App />
    </div>
)
*/

/*
const reducer = (state, action) => {
    switch(action.type){
        case 'ADD':
            state = state + action.payload;
            break;
        case 'SUBTRACT':
            state = state - action.payload;
            break;
    }
    return state;
}

const allReducers = combineReducers({
    users: reducerUsers,
    activeUser: ActiveUserReducer
});
*/
const allReducers = combineReducers({
  todo: reducerTodolist,
  taskChecked: reducerTaskChecked,
  dueData: reducerDueData,
  dueReducer: reducerDue
});

const store = createStore(allReducers);

const Index = () => (
  <Provider store={store}>
    <App />
    <style jsx>
      {
        " body{background: #f0f8ff;} html, body {overflow: auto; overflow-y:scroll; }"
      }
    </style>
  </Provider>
);

export default Index;
