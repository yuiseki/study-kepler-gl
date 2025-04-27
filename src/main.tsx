import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";

import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { connect } from "react-redux";

import keplerGlReducer, { enhanceReduxMiddleware } from "@kepler.gl/reducers";
import KeplerGl from "@kepler.gl/components";

import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";

const reducers = combineReducers({
  keplerGl: keplerGlReducer.initialState({
    uiState: {
      readOnly: false,
      currentModal: null,
    },
  }),
});

const middleWares = enhanceReduxMiddleware([
  // Add other middlewares here
]);

const enhancers = applyMiddleware(...middleWares);

const initialState = {};
const store = createStore(reducers, initialState, compose(enhancers));

const App = () => (
  <div
    style={{
      position: "absolute",
      top: "0px",
      left: "0px",
      width: "100%",
      height: "100%",
    }}
  >
    <AutoSizer>
      {({ height, width }) => (
        <KeplerGl
          mapboxApiAccessToken="xxx" // Replace with your mapbox token
          id="map"
          width={width}
          height={height}
        />
      )}
    </AutoSizer>
  </div>
);

const mapStateToProps = (state: any) => state;
const dispatchToProps = (dispatch: any) => ({ dispatch });
const ConnectedApp = connect(mapStateToProps, dispatchToProps)(App);

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>
);
