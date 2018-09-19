import * as React from "react";

export interface IDataSource {
  name?: string;
}

const DataSourcesComponent: React.SFC<IDataSource> = (props: IDataSource) => (
  <React.Fragment>
    <h1>Data Resources</h1>
  </React.Fragment>
);

export default DataSourcesComponent;
