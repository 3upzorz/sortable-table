import React from 'react';
import FaSort from 'react-icons/lib/fa/sort';
import FaSortAsc from 'react-icons/lib/fa/sort-asc';
import FaSortDesc from 'react-icons/lib/fa/sort-desc';
import { formatColumnData } from '../../utils/format';

const SortIcon = (props) => {
  switch (props.sortDirection) {
    case 'asc': {
      return <FaSortAsc />;
    }
    case 'desc': {
      return <FaSortDesc />;
    }
    default: {
      return <FaSort />;
    }
  }
}

const TableHeading = (props) => {
  const { sortDirection, onClick, heading } = props;
  return (
    <td
      onClick={onClick(heading)}
    >
      {heading} <SortIcon sortDirection={sortDirection} />
    </td>
  )
}

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
  const { data, onSort, sortedColumn, sortDirection } = props;
  const tableHeadings = Object.keys(data[0]);

  return <table style={{ width: '100%' }}>
    <thead>
      <tr>
        {
          tableHeadings.map((heading) => (
            <TableHeading
              key={`heading_${heading}`}
              heading={heading}
              onClick={onSort}
              sortDirection={(sortedColumn === heading) ? sortDirection : undefined}
            />
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