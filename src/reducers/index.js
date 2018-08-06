import { combineReducers } from 'redux';
import BookReducer from './reducer_books';
import AuthorReducer from './author_books';

const rootReducer = combineReducers({
   books: BookReducer,
   author:AuthorReducer
});


export default rootReducer;
