export default (state = { posts: [] }, action) => {

  switch (action.type) {

    case 'DELETE':

      return state.filter((p) => p._id !== action.payload)

    case 'LIKE':

      return state.map((post) => post._id == action.payload._id ? action.payload : post)

    case 'UPDATE':

      return state.map((post) => post._id == action.payload._id ? action.payload : post)

    case 'FATCH_ALL':

      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages
      };

    case 'FETCH_BY_SEARCH':

      return { ...state, posts: action.payload }

    case 'FETCH_POST':

      return { ...state, post: action.payload }

    case 'CREATE':

      return [...state, action.payload];

    default:
      return state;
  }

}