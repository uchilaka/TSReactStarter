import * as React from "react";

export interface IRulesProps {
  name?: string;
}

const RulesComponent: React.SFC<IRulesProps> = (props: IRulesProps) => (
  <React.Fragment>
    <h1>Rules</h1>
  </React.Fragment>
);

export default RulesComponent;
