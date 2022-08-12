const initialState = {
  searchHistory: []
};

const ADD_SEARCH = "ADD_SEARCH";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SEARCH: {
      return Object.assign({}, state, {
        searchHistory: [...state.searchHistory, action.payload],
      });
    }

    default: {
      return state;
    }
  }
}

export function addSearch(search) {
    return {
        type: ADD_SEARCH,
        payload: search
    }
}