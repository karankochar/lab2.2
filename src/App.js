import ProductTable from "./Components/ProductTable";

export default function App() {
  return (
    <div className="container col-8">
    <div>Product</div>
      <ProductTable
        products={[
          { id: 1, name: 'karan', salary: 4.9, department: 20 },
          {
            id: 2, name: 'ronak', salary
              : 1.9, department: 'java'
          },
          {
            id: 3, name: 'Akash', salary
              : 2.4, department: 'oracle'
          },
          {
            id: 4, name: 'Abhiti', salary
              : 3.9, department: 'angular'
          },
          {
            id: 5, name: 'Anuja', salary
              : 0.9, department: 'selenium'
          },
          {
            id: 6, name: 'Srushti ', salary
              : 2.9, department: 'ceh'
          },
          {
            id: 7, name: 'Aryak', salary
              : 99, department: 'pycharm'
          },
        ]}
      />
    </div>
  );
}