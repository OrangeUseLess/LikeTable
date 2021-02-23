import React from "react";
import OperationIndex from "./operation/operationIndex";
import TableIndex from "./table";
import ToolbarIndex from "./toolbar/toolbarIndex";
import './table/index.scss';
import '../node_modules/antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <OperationIndex />
      <ToolbarIndex />
      <TableIndex />
    </div>
  );
}

export default App;
