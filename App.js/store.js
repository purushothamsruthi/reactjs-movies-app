import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import movieReducer from './reducers/movieReducer';

const store = createStore(movieReducer, applyMiddleware(thunk));

export const StoreProvider = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);