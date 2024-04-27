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
  { id: 1, profile: 'https://lh3.googleusercontent.com/a/ACg8ocK7DKQVBEkSyecX1KW8DIsZayYQcIiCU6Hj7vuxwwJX3bcSCA=s96-c', name: 'Nani', email: 'nani@gmail.com', mobileno: '********', color: 'Silver', category: 'Laptop', price: '$2999', RegisterDate: '15-Jul-2020 01:00 AM', state: 'Active', stateColor: 'orange' },
  { id: 2, profile: 'https://lh3.googleusercontent.com/a/ACg8ocK7DKQVBEkSyecX1KW8DIsZayYQcIiCU6Hj7vuxwwJX3bcSCA=s96-c', name: 'Rakesh', email: 'rakesh@gmail.com', mobileno: '********', color: 'White', category: 'Laptop PC', price: '$1999', RegisterDate: '15-Jul-2020 04:54 AM', state: 'Inactive', stateColor: 'orange' },
  { id: 3, profile: 'https://lh3.googleusercontent.com/a/ACg8ocK7DKQVBEkSyecX1KW8DIsZayYQcIiCU6Hj7vuxwwJX3bcSCA=s96-c', name: 'Vamshi', email: 'vamshi@gmail.com', mobileno: '********', color: 'Black', category: 'Accessories', price: '$99', RegisterDate: '15-Jul-2020 04:54 AM', state: 'Active', stateColor: 'green' },
  { id: 4, profile: 'https://lh3.googleusercontent.com/a/ACg8ocK7DKQVBEkSyecX1KW8DIsZayYQcIiCU6Hj7vuxwwJX3bcSCA=s96-c', name: 'hemanth', email: 'hemanth@gmail.com', mobileno: '********', color: 'Si', category: 'Accessories', price: '$179', RegisterDate: '15-Jul-2020 04:54 AM', state: 'Inactive', stateColor: 'red' },
  { id: 5, profile: 'https://lh3.googleusercontent.com/a/ACg8ocK7DKQVBEkSyecX1KW8DIsZayYQcIiCU6Hj7vuxwwJX3bcSCA=s96-c', name: 'saswith', email: 'saswith@gmail.com', mobileno: '********', color: 'Gold', category: 'Tablet', price: '$699', RegisterDate: '15-Jul-2020 04:54 AM', state: 'Inactive', stateColor: 'red' },


];

const colorCode = '#eb9175'
const colorHead = '#ff7618'

function Users() {

  const [isPopupOpen, setPopupOpen] = useState(false);

  const [isOpenPopupstatus, setopenPopupstatus] = useState(false)
  const [formData, setFormData] = useState({
    is_active: false,
  });

  const openClickPopup = () => {
    setPopupOpen(true);
  }



  const openClickpopupStatus = () => {
    setopenPopupstatus(true)
  }



  const closePopup = () => {
    setopenPopupstatus(false)
    setPopupOpen(false);

  };


  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        // Fetch data from an API
        const response = await fetch('https://jsonplaceholder.typicode.com/photos/3');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        // Parse response JSON
        const jsonData = await response.json();
        // Update state with fetched data
        setData(jsonData);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();

    // Cleanup function (optional)
    return () => {
      // Cleanup tasks, if any
    };
  }, []); // Empty dependency array ensures useEffect runs only once

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }




  const handleRadioChange = (e) => {
    const value = e.target.value === 'true';
    setFormData(prevState => ({
      ...prevState,
      is_active: value
    }));

  };




  console.log(data)



  return (
    <div className="bg-container">
      <div className='nav-container'>
        <Navbar />
      </div>
      <div >
        <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
          <table class="w-full border-collapse bg-black text-left text-sm text-gray-500">
            <thead class="bg-black-50">
              <tr>
                <th scope="col" class="px-6 py-4 font-medium " style={{ color: colorHead }}>Name</th>
                <th scope="col" class="px-6 py-4 font-medium " style={{ color: colorHead }}>Status</th>
                <th scope="col" class="px-6 py-4 font-medium " style={{ color: colorHead }}>Email</th>
                <th scope="col" class="px-6 py-4 font-medium " style={{ color: colorHead }}>Mobile</th>
                <th scope="col" class="px-6 py-4 font-medium " style={{ color: colorHead }}>Register Date</th>
                <th scope="col" class="px-6 py-4 font-medium " style={{ color: colorHead }}>Wallet</th>
                <th scope="col" class="px-6 py-4 font-medium " style={{ color: colorHead }}>Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-white-100 border-t border-white-100">

              {products.map((eachItem) => {
                return (

                  <tr class="hover:bg-gray-50">
                    <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
                      <div class="relative h-10 w-10">
                        <img
                          class="h-full w-full rounded-full object-cover object-center"
                          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                        {/* <span class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span> */}
                      </div>
                      <div class="text-sm">
                        <div class="font-medium text-gray-700" style={{ color: '#eda48d' }}>Steven Jobs</div>
                        <div class="text-orange-400">jobs@sailboatui.com</div>
                      </div>
                    </th>
                    <td class="px-6 py-4">
                      <span
                        class={`inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs font-semibold text-orange-600`}
                      >
                       
                        <span class={`h-1.5 w-1.5 rounded-full bg-orange-600`}></span>
                        {eachItem.state}
                      </span>
                    </td>
                    <td class="px-6 py-4" style={{ color: colorCode }}>email@gmail.com</td>
                    <td class="px-6 py-4" style={{ color: colorCode }}>***********</td>
                    <td class="px-6 py-4" style={{ color: colorCode }}>26-Apr-2024 04:49 AM</td>

                    <td class="px-6 py-4">
                      <div class="flex gap-2">
                        <span
                          class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600"
                        >
                          Coins 0
                        </span>
                        <span
                          class="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600"
                        >
                          Cash 2
                        </span>
                       
                      </div>
                    </td>
                    <td class="px-6 py-4">
                      <div class="flex justify-end gap-4">
                        <a x-data="{ tooltip: 'Delete' }" href="#hb">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="red"
                            class="h-5 w-5 "
                            x-tooltip="tooltip"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </a>
                        <button onClick={openClickpopupStatus}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#94946b" class="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                          </svg>
                        </button>
                        <button onClick={openClickPopup}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#3e9c35" class="bi bi-currency-dollar" viewBox="0 0 16 16">
                            <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              })}


            </tbody>
          </table>
        </div>
      </div>
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <div className='headingwalletcontainer'>
              <h1 className='headingnameWallet'>Wallet</h1>
            </div>
            <div className='inputContainerbg'>
              <div className='inputContainer'>
                <h2 className='addheading'>Add Coins</h2>
                <input type="text" className='inputText' />
              </div>
              <div className='inputContainer'>
                <h2 className='addheading'>Add Cash</h2>
                <input type="text" className='inputText' />
              </div>

            </div>
            <div className='containerButton'>
              <button className='submitbutton'>Submit</button>
              <button onClick={closePopup} className='closeButton'>Close</button>
            </div>
          </div>
        </div>
      )}

      {isOpenPopupstatus && (
        <div className="popup">
          <div className="popup-content">
            <div className='headingwalletcontainer'>
              <h1 className='headingnameWallet'>Status Update</h1>
            </div>
            <div className="container-updateStatus">

              <div className='activecontainer buttonStatus'>
                <input
                  type="radio"
                  id="active"
                  name="status"
                  value="true"
                  checked={formData.is_active}
                  onChange={handleRadioChange}
                  className="radioElement"

                />
                <label htmlFor="active" className='inputelement'>Active</label>
              </div>

              <div className='leftRadioButton buttonStatus'>

                <input
                  type="radio"
                  id="inactive"
                  name="status"
                  value="false"
                  checked={!formData.is_active}
                  onChange={handleRadioChange}
                  className="radioElement"

                />
                <label htmlFor="inactive" className='inputelement'>Inactive</label>
              </div>
            </div>

            <div className='containerButton'>
              <button className='submitbutton'>Submit</button>
              <button onClick={closePopup} className='closeButton'>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Users;
