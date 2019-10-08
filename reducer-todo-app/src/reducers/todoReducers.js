export const initialState = [{
  item: 'Learn about reducers',
  completed: false,
  id: 3892987589
}];

export const todoReducer = (state, action) => {
    console.log(state);
     switch(action.type){
        case "ADD_TODO":
            return[
                ...state,
                {
                  item: action.payload,
                  completed: false,
                  id: Date.now()
              }
            ];
        case "TODO_COMPLETE":
            return state.map(todo => {
                if(todo.id === action.payload) {
                    return {
                        ...todo, completed: !todo.completed
                    }
                }
                return todo
            });
          case "DELETE_TODO":
              return state.filter(todo => !todo.completed)
        default:
            return state;
    }
};