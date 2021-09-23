export default (posts = [], action) => {

  switch (action.type) {

    case 'DELETE':

      return posts.filter((p) => p._id !== action.payload)

    case 'LIKE':

      return posts.map((post) => post._id == action.payload._id ? action.payload : post)

    case 'UPDATE':

      return posts.map((post) => post._id == action.payload._id ? action.payload : post)

    case 'FATCH_ALL':

      return action.payload;

    case 'CREATE':

      return [...posts, action.payload];

    default:
      return posts;
  }

}