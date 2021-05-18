import React from 'react';
import { Table, TableBody } from "@material-ui/core";
import {  } from "react-bootstrap";


const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const ProductTable = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(props.products);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <div>
      <Table>
        <caption className="card-title">Products</caption>
        <thead>
          <tr>
          <th>
              <button
                type="button"
                onClick={() => requestSort('id')}
                className={getClassNamesFor('id')}
              >
                Id
            </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort('name')}
                className={getClassNamesFor('name')}
              >
                Name
            </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort('salary')}
                className={getClassNamesFor('salary')}
              >
                Salary
            </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort('department')}
                className={getClassNamesFor('department')}
              >
                department  
            </button>
            </th>
          </tr>
        </thead>
        <TableBody>
          {items.map((item) => (
            <tr key={item.id}>  
            {/* using id i can sort */}
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>${item.salary}</td>
              <td>{item.department}</td>
            </tr>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductTable;