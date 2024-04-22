// import React, { useState } from 'react';
// import Navbar from '../Navbar'

// import './index.css'

// function Users() {
//   const products = [
//     { id: 1, name: 'Apple MacBook Pro 17"', color: 'Silver', category: 'Laptop', price: '$2999' },
//     { id: 2, name: 'Microsoft Surface Pro', color: 'White', category: 'Laptop PC', price: '$1999' },
//     { id: 3, name: 'Magic Mouse 2', color: 'Black', category: 'Accessories', price: '$99' },
//     { id: 4, name: 'Apple Watch', color: 'Silver', category: 'Accessories', price: '$179' },
//     { id: 5, name: 'iPad', color: 'Gold', category: 'Tablet', price: '$699' },
//     { id: 6, name: 'Apple iMac 27"', color: 'Silver', category: 'PC Desktop', price: '$3999' },
//   ];

//   // State for search input
//   const [searchTerm, setSearchTerm] = useState('');

//   // Handle search input change
//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };



//   return (
//     <div className="bg-container">
//       <div className='nav-container'>
//         <Navbar />
//       </div>
//       <div class="container-User">
//         <h1>User Details</h1>

//         <div className="relative overflow-x-auto shadow-md sm:rounded-lg tablecontainer">
//           <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
//             {/* Search input */}
//             <label htmlFor="table-search" className="sr-only">Search</label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
//                 <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
//               </div>
//               <input
//                 type="text"
//                 id="table-search"
//                 className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                 placeholder="Search for items"
//                 value={searchTerm}
//                 onChange={handleSearchChange}
//               />
//             </div>
//           </div>
//           {/* Product table */}
//           <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//             {/* Table header */}
//             <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//               <tr>
//                 <th scope="col" className="p-4">
//                   {/* Checkbox */}
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Product name
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Color
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Category
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Price
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Action
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {/* Table body rows */}
//               {products.map(product => (
//                 <tr key={product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
//                   <td className="w-4 p-4">
//                     {/* Checkbox */}
//                   </td>
//                   <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                     {product.name}
//                   </td>
//                   <td className="px-6 py-4">
//                     {product.color}
//                   </td>
//                   <td className="px-6 py-4">
//                     {product.category}
//                   </td>
//                   <td className="px-6 py-4">
//                     {product.price}
//                   </td>
//                   <td className="px-6 py-4">
//                     <a href="#dd" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>



//       </div>

//     </div>
//   )
// }

// export default Users












// import React, { useState } from 'react';
// import Navbar from '../Navbar';
// import './index.css';

// function Users() {
//   const products = [
//     { id: 1, name: 'Apple MacBook Pro 17"', color: 'Silver', category: 'Laptop', price: '$2999' },
//     { id: 2, name: 'Microsoft Surface Pro', color: 'White', category: 'Laptop PC', price: '$1999' },
//     { id: 3, name: 'Magic Mouse 2', color: 'Black', category: 'Accessories', price: '$99' },
//     { id: 4, name: 'Apple Watch', color: 'Silver', category: 'Accessories', price: '$179' },
//     { id: 5, name: 'iPad', color: 'Gold', category: 'Tablet', price: '$699' },
//     { id: 6, name: 'Apple iMac 27"', color: 'Silver', category: 'PC Desktop', price: '$3999' },
//     { id: 1, name: 'Apple MacBook Pro 17"', color: 'Silver', category: 'Laptop', price: '$2999' },
//     { id: 2, name: 'Microsoft Surface Pro', color: 'White', category: 'Laptop PC', price: '$1999' },
//     { id: 3, name: 'Magic Mouse 2', color: 'Black', category: 'Accessories', price: '$99' },
//     { id: 4, name: 'Apple Watch', color: 'Silver', category: 'Accessories', price: '$179' },
//     { id: 5, name: 'iPad', color: 'Gold', category: 'Tablet', price: '$699' },
//     { id: 6, name: 'Apple iMac 27"', color: 'Silver', category: 'PC Desktop', price: '$3999' },
//     { id: 1, name: 'Apple MacBook Pro 17"', color: 'Silver', category: 'Laptop', price: '$2999' },
//     { id: 2, name: 'Microsoft Surface Pro', color: 'White', category: 'Laptop PC', price: '$1999' },
//     { id: 3, name: 'Magic Mouse 2', color: 'Black', category: 'Accessories', price: '$99' },
//     { id: 4, name: 'Apple Watch', color: 'Silver', category: 'Accessories', price: '$179' },
//     { id: 5, name: 'iPad', color: 'Gold', category: 'Tablet', price: '$699' },
//     { id: 6, name: 'Apple iMac 27"', color: 'Silver', category: 'PC Desktop', price: '$3999' },
//   ];

//   // State for search input
//   const [searchTerm, setSearchTerm] = useState('');
//   // State for selected products
//   const [selectedProducts, setSelectedProducts] = useState([]);

//   // Handle search input change
//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   // Handle checkbox toggle
//   const toggleProductSelection = (productId) => {
//     setSelectedProducts((prevSelected) => {
//       if (prevSelected.includes(productId)) {
//         return prevSelected.filter((id) => id !== productId);
//       } else {
//         return [...prevSelected, productId];
//       }
//     });
//   };

//   return (
//     <div className="bg-container">
//       <div className='nav-container'>
//       <Navbar />
//       </div>
//       <div className="relative overflow-x-auto shadow-md sm:rounded-lg tablecontainer">
//         <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
//           {/* Search input */}
//           <label htmlFor="table-search" className="sr-only">Search</label>
//           <div className="relative">
//             <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
//               <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
//             </div>
//             <input 
//               type="text" 
//               id="table-search" 
//               className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
//               placeholder="Search for items" 
//               value={searchTerm} 
//               onChange={handleSearchChange} 
//             />
//           </div>
//         </div>
//         {/* Product table */}
//         <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//           {/* Table header */}
//           <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//             <tr>
//               <th scope="col" className="p-4">
//                 {/* Checkbox */}

//                 <input 
//                     type="checkbox" 
                   
//                   />

//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Product name
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Color
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Category
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Price
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Action
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* Table body rows */}
//             {products.map(product => (
//               <tr key={product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
//                 <td className="w-4 p-4">
//                   <input 
//                     type="checkbox" 
//                     checked={selectedProducts.includes(product.id)} 
//                     onChange={() => toggleProductSelection(product.id)} 
//                   />
//                 </td>
//                 <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                   {product.name}
//                 </td>
//                 <td className="px-6 py-4">
//                   {product.color}
//                 </td>
//                 <td className="px-6 py-4">
//                   {product.category}
//                 </td>
//                 <td className="px-6 py-4">
//                   {product.price}
//                 </td>
//                 <td className="px-6 py-4">
//                   <a href="#dd" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Users;








// import React, { useState, useEffect } from 'react';
// import Navbar from '../Navbar';
// import './index.css';
// const products = [
//   { id: 1, name: 'Apple MacBook Pro 17"', color: 'Silver', category: 'Laptop', price: '$2999' },
//   { id: 2, name: 'Microsoft Surface Pro', color: 'White', category: 'Laptop PC', price: '$1999' },
//   { id: 3, name: 'Magic Mouse 2', color: 'Black', category: 'Accessories', price: '$99' },
//   { id: 4, name: 'Apple Watch', color: 'Silver', category: 'Accessories', price: '$179' },
//   { id: 5, name: 'iPad', color: 'Gold', category: 'Tablet', price: '$699' },
//   { id: 6, name: 'Apple iMac 27"', color: 'Silver', category: 'PC Desktop', price: '$3999' },

// ];

// function Users() {


//   // const [searchTerm, setSearchTerm] = useState('');
//   const [selectedProducts, setSelectedProducts] = useState([]);
//   const [selectAll, setSelectAll] = useState(false);

//   useEffect(() => {
//     if (selectAll) {
//       const allIds = products.map(product => product.id);
//       setSelectedProducts(allIds);
//     } else {
//       setSelectedProducts([]);
//     }
//   }, [selectAll]);

//   // const handleSearchChange = (e) => {
//   //   setSearchTerm(e.target.value);
//   // };

//   const toggleProductSelection = (productId) => {
//     setSelectedProducts(prevSelected => {
//       if (prevSelected.includes(productId)) {
//         return prevSelected.filter(id => id !== productId);
//       } else {
//         return [...prevSelected, productId];
//       }
//     });
//   };

//   const toggleSelectAll = () => {
//     setSelectAll(prevSelectAll => !prevSelectAll);
//   };

//   return (
//     <div className="bg-container">
//       <div className='nav-container'>
//         <Navbar />
//       </div>
//       <div className="relative overflow-x-auto shadow-md sm:rounded-lg tablecontainer">
//         <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
//           <label htmlFor="table-search" className="sr-only">Search</label>
//           {/* <div className="relative">
//             <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
//               <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
//             </div>
//             <input 
//               type="text" 
//               id="table-search" 
//               className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
//               placeholder="Search for items" 
//               value={searchTerm} 
//               onChange={handleSearchChange} 
//             />
//           </div> */}
//         </div>
//         <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//           <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//             <tr>
//               <th scope="col" className="p-4">
//                 <input 
//                   type="checkbox" 
//                   checked={selectAll} 
//                   onChange={toggleSelectAll} 
//                 />
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Product name
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Color
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Category
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Price
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Action
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {products.map(product => (
//               <tr key={product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
//                 <td className="w-4 p-4">
//                   <input 
//                     type="checkbox" 
//                     checked={selectedProducts.includes(product.id)} 
//                     onChange={() => toggleProductSelection(product.id)} 
//                   />
//                 </td>
//                 <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                   {product.name}
//                 </td>
//                 <td className="px-6 py-4">
//                   {product.color}
//                 </td>
//                 <td className="px-6 py-4">
//                   {product.category}
//                 </td>
//                 <td className="px-6 py-4">
//                   {product.price}
//                 </td>
//                 <td className="px-6 py-4">
//                   <a href="#dd" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Users;




import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import './index.css';

const products = [
  { id: 1, name: 'Apple MacBook Pro 17"', color: 'Silver', category: 'Laptop', price: '$2999' },
  { id: 2, name: 'Microsoft Surface Pro', color: 'White', category: 'Laptop PC', price: '$1999' },
  { id: 3, name: 'Magic Mouse 2', color: 'Black', category: 'Accessories', price: '$99' },
  { id: 4, name: 'Apple Watch', color: 'Silver', category: 'Accessories', price: '$179' },
  { id: 5, name: 'iPad', color: 'Gold', category: 'Tablet', price: '$699' },
  { id: 6, name: 'Apple iMac 27"', color: 'Silver', category: 'PC Desktop', price: '$3999' },
  { id: 7, name: 'Apple MacBook Pro 17"', color: 'Silver', category: 'Laptop', price: '$2999' },
  { id: 8, name: 'Microsoft Surface Pro', color: 'White', category: 'Laptop PC', price: '$1999' },
  { id: 9, name: 'Magic Mouse 2', color: 'Black', category: 'Accessories', price: '$99' },
  { id: 10, name: 'Apple Watch', color: 'Silver', category: 'Accessories', price: '$179' },
  { id: 11, name: 'iPad', color: 'Gold', category: 'Tablet', price: '$699' },
  { id: 12, name: 'Apple iMac 27"', color: 'Silver', category: 'PC Desktop', price: '$3999' },
];

function Users() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    if (selectAll) {
      setSelectedProducts(products.map(product => product.id));
    } else {
      setSelectedProducts([]);
    }
  }, [selectAll]);

  const toggleProductSelection = (productId) => {
    setSelectedProducts(prevSelected => {
      if (prevSelected.includes(productId)) {
        return prevSelected.filter(id => id !== productId);
      } else {
        return [...prevSelected, productId];
      }
    });
  };

  const toggleSelectAll = () => {
    setSelectAll(prevSelectAll => !prevSelectAll);
  };

  const handleRandomSelection = () => {
    const randomIndexes = [];
    while (randomIndexes.length < 10) {
      const randomIndex = Math.floor(Math.random() * products.length);
      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
      }
    }
    const selectedIds = randomIndexes.map(index => products[index].id);
    setSelectedProducts(selectedIds);
  };

  const handleRemoveSelected = () => {
    setSelectedProducts([]);
  };

  return (
    <div className="bg-container">
      <div className='nav-container'>
        <Navbar />
      </div>
      <button onClick={handleRandomSelection}>Random checked Quiz</button>
      <button onClick={handleRemoveSelected}>Remove Random checked Quiz</button>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg tablecontainer">
        <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
          <label htmlFor="table-search" className="sr-only">Search</label>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <input 
                  type="checkbox" 
                  checked={selectAll} 
                  onChange={toggleSelectAll} 
                />
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                  <input 
                    type="checkbox" 
                    checked={selectedProducts.includes(product.id)} 
                    onChange={() => toggleProductSelection(product.id)} 
                  />
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {product.name}
                </td>
                <td className="px-6 py-4">
                  {product.color}
                </td>
                <td className="px-6 py-4">
                  {product.category}
                </td>
                <td className="px-6 py-4">
                  {product.price}
                </td>
                <td className="px-6 py-4">
                  <a href="#dd" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h2>Selected Products</h2>
        <ul>
          {selectedProducts.map(productId => {
            const product = products.find(p => p.id === productId);
            return (
              <li key={productId}>{product.name}</li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Users;