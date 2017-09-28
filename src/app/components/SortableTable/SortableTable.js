import React from 'react';
import { formatColumnData } from '../../utils/format';

const TableRow = (props) => {
  const { data } = props;
  return (
    <tr>
      {Object.keys(data).map((col) => (
        <td key={`row_${data.ID}_col_${col}`}>
          {formatColumnData(col, data[col])}
        </td>))}
    </tr>
  )
}

const Table = (props) => {
  const { data, onSort } = props;
  const tableHeadings = Object.keys(data[0]);

  return <table style={{ width: '100%' }}>
    <thead>
      <tr>
        {
          tableHeadings.map((heading) => (
            <td
              key={`heading_${heading}`}
              onClick={onSort(heading)}
            >
              {heading}
            </td>
          ))
        }
      </tr>
    </thead>
    <tbody>
      {data.map((row) => <TableRow key={`row_${row.ID}`} data={row} />)}
    </tbody>
  </table>
}

export default Table;