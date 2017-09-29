import React, { Component } from 'react';
import SortableTable from './components/SortableTable/SortableTable';
import TextControl from './components/TextControl/TextControl';
import { formatTableData } from './utils/data';
import mockTableData from '../../mock/tableData.json';

const determineSortDirection = (sortedAsc) => {
  if (sortedAsc === false) {
    return 'desc';
  } else if (sortedAsc === true) {
    return 'asc';
  }
  return undefined;
}

export default class App extends Component {
  constructor(props) {
    super(props);

    const tableData = formatTableData(mockTableData)
    this.sort = this.sort.bind(this);
    this.update = this.update.bind(this);
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

  update(data) {
    const tableData = formatTableData(data);
    this.setState({ tableData, sortedColumn: undefined, sortedAsc: undefined });
  }

  render() {
    const { tableData, sortedColumn, sortedAsc } = this.state;
    return (
      <div>
        <h1>Table Sort</h1>
        <SortableTable
          data={tableData}
          onSort={this.sort}
          sortedColumn={sortedColumn}
          sortDirection={determineSortDirection(sortedAsc)}
        />
        <TextControl onUpdate={this.update} />
      </div>
    );
  }
}