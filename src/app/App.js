import React, { Component } from 'react';
import SortableTable from './components/SortableTable/SortableTable';
import mockTableData from '../../mock/tableData.json';

export default class App extends Component {
  constructor(props) {
    super(props);
    const tableData = Object.keys(mockTableData.result).map((ID) => {
      return Object.assign(mockTableData.result[ID], { ID });
    });
    this.sort = this.sort.bind(this);
    this.state = { tableData };
  }

  sort(col) {
    return () => {
      this.setState((prevState) => {
        const sortDesc = (prevState.sortedColumn === col && prevState.sortedAsc);
        return {
          tableData: this.state.tableData.sort((a, b) => {
            if (sortDesc) {
              return b[col] - a[col];
            }
            return a[col] - b[col];
          }),
          sortedColumn: col,
          sortedAsc: !sortDesc
        }
      })
    }
  }

  render() {
    const { tableData } = this.state;
    return (
      <div>
        <h1>Table Sort</h1>
        <SortableTable data={tableData} onSort={this.sort} />
      </div>
    );
  }
}