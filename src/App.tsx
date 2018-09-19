import * as React from "react";

import View1 from "./View1";
import View2 from "./View2";

export default class AppComponent extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <div>
          <h1>Hello React TS World!!</h1>
        </div>
        <View1 />
        <View2 />
      </React.Fragment>
    );
  }
}
