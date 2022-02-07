
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { daoReducer } from './dao'
import { walletEpics, walletReducer } from './wallet'
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { EpicDependency } from './state';
import { serviceObjectExecutor } from '..';

//@redux-helper/rootReducer
const rootReducer = combineReducers({
	dao: daoReducer,
	wallet: walletReducer,
});


export function configureStore() {
	// middleware.push(thunk);

	// if (process.env.NODE_ENV !== 'production') {
	//   middleware.push(createLogger());
	// }
	const rootEpic = combineEpics(
		walletEpics
	);

	const dependencies: EpicDependency = {
		serviceExecutor: serviceObjectExecutor
	}

	const epicMiddleware = createEpicMiddleware({ dependencies });
	const middleware: any[] = [epicMiddleware];

	const enhancers = [applyMiddleware(...middleware)];
	const composedEnhancers = composeWithDevTools(...enhancers);
	const store = createStore(rootReducer, {}, composedEnhancers);
    epicMiddleware.run(rootEpic);
	return store;
}


