// kepler.glとその関連パッケージの型定義
declare module "@kepler.gl/reducers" {
  const keplerGlReducer: {
    initialState: (options?: any) => any;
    default: any;
  };
  export const enhanceReduxMiddleware: (deps: any[]) => any[];
  export default keplerGlReducer;
}

declare module "@kepler.gl/middleware" {
  export const enhanceReduxMiddleware: (deps: any[]) => any[];
  export const exportJson: any;
  export const forwardTo: any;
  export const keplerGlMiddleware: any[];
  export const reduxMiddleware: any[];
  export default {
    enhanceReduxMiddleware,
    exportJson,
    forwardTo,
    keplerGlMiddleware,
    reduxMiddleware,
  };
}

declare module "@kepler.gl/components" {
  import { Component } from "react";

  interface KeplerGlProps {
    id: string;
    width: number;
    height: number;
    mapboxApiAccessToken: string;
    [key: string]: any;
  }

  class KeplerGl extends Component<KeplerGlProps> {}
  export default KeplerGl;
}

declare module "react-palm/tasks" {
  export const taskMiddleware: any;
}

declare module "react-virtualized/dist/commonjs/AutoSizer" {
  import { Component } from "react";

  interface AutoSizerProps {
    children: (dimensions: {
      width: number;
      height: number;
    }) => React.ReactNode;
    [key: string]: any;
  }

  class AutoSizer extends Component<AutoSizerProps> {}
  export default AutoSizer;
}
