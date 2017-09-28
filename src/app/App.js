import React, { Component } from 'react';
import SortableTable from './components/SortableTable/SortableTable';
import TextControl from './components/TextControl/TextControl';
import mockTableData from '../../mock/tableData.json';

const calculateCtr = (row) => {
  let ctr;

  if (row.social_clicks !== undefined && row.impressions !== undefined) {
    ctr = (100 / row.impressions) * row.social_clicks;
  } else if (row.clicks !== undefined && row.impressions !== undefined) {
    ctr = (100 / row.impressions) * row.clicks;
  }

  if (ctr !== undefined) {
    return Object.assign(row, { ctr });
  }
  return row;
}

const formatTableData = (data) => {
  return Object.keys(data.result).map((ID) => {
    const row = calculateCtr(data.result[ID]);
    return Object.assign({ ID }, row);
  });
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
    console.log(data);
    const tableData = formatTableData(data);
    this.setState({ tableData });
  }

  render() {
    const { tableData } = this.state;
    return (
      <div>
        <h1>Table Sort</h1>
        <SortableTable data={tableData} onSort={this.sort} />
        <TextControl onUpdate={this.update} />
      </div>
    );
  }
}