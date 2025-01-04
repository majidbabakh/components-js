import { useReducer } from 'react';
import { produce } from 'immer';

function App() {
  const INCREMENT_COUNT = 'increment';
  const DECREMENT_COUNT = 'decrement';
  const SET_VALUE_TO_ADD = 'change-value-to-add';
  const ADD_VALUE_TO_COUNT = 'add-value-to-count';

  const [state, dispatch] = useReducer(produce(reducer), {
    count: 0,
    valueToAdd: 0
  });

  const handleIncrementClick = () => {
    dispatch({
      type: INCREMENT_COUNT
    });
  };
  const handleDecrementClick = () => {
    dispatch({
      type: DECREMENT_COUNT
    });
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: ADD_VALUE_TO_COUNT
    });
  };

  function reducer(state, action) {
    switch (action.type) {
      case INCREMENT_COUNT:
        state.count = state.count + 1;
        return;

      case DECREMENT_COUNT:
        state.count = state.count - 1;
        return;

      case ADD_VALUE_TO_COUNT:
        state.count = state.count + state.valueToAdd;
        state.valueToAdd = 0;
        return;

      case SET_VALUE_TO_ADD:
        state.valueToAdd = action.payload;
        return;

      default:
        return state;
    }
  }

  return (
    <div>
      <p>Current Count: {state.count}</p>
      <button onClick={handleIncrementClick}>Increment</button>
      <button onClick={handleDecrementClick}>Decrement</button>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={state.valueToAdd || ''}
          onChange={handleChange}
          placeholder="Add new item"
        />
        <button type="submit ">Add</button>
      </form>
    </div>
  );
}

export default App;
