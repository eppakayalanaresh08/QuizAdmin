// import React,{useState} from 'react'
// import Navbar from '../Navbar'
// import './index.css'

// function QuestionCreate() {
//     const [nameValue,setCurrentName]=useState('')
//     const onnameText =()=>{
//         // console.log("naresh")
//         setCurrentName(nameValue)
//         console.log(nameValue)

//     }
//   return (
//     <div className='container-bg'>
//         <div className='nav-container'>
//         <Navbar/>
//         </div>
//         <div>
//             <p>hlo</p>
//             <input type='text'value={nameValue} onChange={()=>onnameText()}/>
//         </div>
//     </div>
//   )
// }

// export default QuestionCreate











import React, { useState ,useEffect} from 'react';
import Navbar from '../Navbar'
import './index.css'



import { ColorCode } from '../ColorCode';



const colorCode = '#eb9175'
const colorHead = '#ff7618'

function CategoryCreate() {
  const [formData, setFormData] = useState({
    name: '',
    is_active: false,
    icon: null
  });
  const [categorydata,setCategoryPosts]=useState([])

  

  const [image, setImage] = useState(null)

  useEffect(() => {
    fetch('https://freakapp.pythonanywhere.com/category/')
       .then((response) => response.json())
       .then((data) => {
          console.log(data);
          setCategoryPosts(data);
       })
       .catch((err) => {
          console.log(err.message);
       });
 }, []);




  const handleFileChange = (event) => {
    const imageData = event.target.files[0]
    setFormData(prevState => ({
      ...prevState,
      icon: imageData
    }))

    const dataimgae = URL.createObjectURL(imageData)

    console.log('Image URL:', URL.createObjectURL(imageData));
    setImage(dataimgae)

    // setSelectedFile();
    // console.log(selectedFile)
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };


  const handleRadioChange = (e) => {
    const value = e.target.value === 'true';
    setFormData(prevState => ({
      ...prevState,
      is_active: value
    }));

  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    // const dataForm={
    //   "name":"cricket",
    //   "is_active":true,
    //   "icon":null
    // }

    try {
      const response = await fetch('https://freakapp.pythonanywhere.com/category/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      // Alert('successfully Category')
      console.log(response,'successfully')
      if (!response.ok) {
        throw new Error('Failed to create entry');
      }
      window.location.reload(false);

      // If successful, you can handle the response here
      console.log('successfully Category');
    } catch (error) {
      console.error('Error:', error);
    }
  };





  const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(7); // Change this value as needed



    // const data = generateRandomData;

    // Calculate total number of pages
    const totalPages = Math.ceil(categorydata.length / itemsPerPage);

    // Logic to slice the data array based on current page and items per page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = categorydata.slice(indexOfFirstItem, indexOfLastItem);

    // Function to handle page navigation
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

  return (
    <div className='container-bg' style={{backgroundColor:ColorCode.bgColor}}>
      <div className='nav-container'>

        <Navbar />
      </div>
      <div className='conatinerbg-inputs'>
        <form onSubmit={handleSubmit} >

          <div class="inputext" >
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" style={{color:ColorCode.textColor}}>Category Name</label>
            <input type="text" id="first_name" name="name"
              value={formData.name}
              onChange={handleChange} className="textInputname"  style={{borderColor:ColorCode.borderColor}} placeholder="Name" required />
          </div>

           <p className='categoryName' style={{color:ColorCode.textColor}}>Category</p>

          <div className="radiocontainer">

            <div className='activecontainer' style={{borderColor:ColorCode.borderColor}}>
              <input
                type="radio"
                id="active"
                name="status"
                value="true"
                checked={formData.is_active}
                onChange={handleRadioChange}
                className="radioElement"

              />
              <label htmlFor="active" className='inputelement' style={{color:ColorCode.textColor}}>Active</label>
            </div>

            <div className='leftRadioButton'>
              <input
                type="radio"
                id="inactive"
                name="status"
                value="false"
                checked={!formData.is_active}
                onChange={handleRadioChange}
                className="radioElement"

              />
              <label htmlFor="inactive" className='inputelement' style={{color:ColorCode.textColor}}>Inactive</label>
            </div>
          </div>
          <p className='categoryName' style={{color:ColorCode.textColor}}>Category Icon</p>
          <input type="file" onChange={handleFileChange} accept="image/*" className='imageElementInput'  style={{borderColor:ColorCode.borderColor}} />
          {formData.icon && (
            <img
              src={image}
              alt="Selected"
              style={{ maxWidth: '100%', maxHeight: '200px', margin: '20px' }}
            />
          )}
          {/* <p>Selected status: {formData.is_active ? 'Active' : 'Inactive'}</p> */}
          <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" >
            ADD
          </button>
          {/* <button type="submit">Submit</button> */}
        </form>
      <div className='container-table-list'>
      <h1 style={{color:ColorCode.textColor}}>Categories </h1>

        <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
          <table class="w-full border-collapse bg-black text-left text-sm text-gray-500">
            <thead class="bg-black-50">
              <tr>
                {/* <th scope="col" class="px-6 py-4 font-medium " style={{ color: colorHead }}>Name</th> */}
                {/* <th scope="col" class="px-6 py-4 font-medium " style={{ color: colorHead }}>Status</th> */}
                <th scope="col" class="px-6 py-4 font-medium " style={{ color: colorHead }}>Category Name</th>
                <th scope="col" class="px-6 py-4 font-medium " style={{ color: colorHead }}>Category Status</th>
                <th scope="col" class="px-6 py-4 font-medium " style={{ color: colorHead }}>Category Icon</th>
                {/* <th scope="col" class="px-6 py-4 font-medium " style={{ color: colorHead }}>Action</th> */}
              </tr>
            </thead>
            <tbody class="divide-y divide-white-100 border-t border-white-100">

              {currentItems.map((eachItem) => {
                return (

                  <tr class="hover:bg-gray-50">
                    
                
                    <td class="px-6 py-4" style={{ color: colorCode }}>{eachItem.name}</td>
                    <td class="px-6 py-4" style={{ color: colorCode }}>{eachItem.is_active?'Active':'InActive'}</td>
                    <td class="px-6 py-4" style={{ color: colorCode }}><img src={eachItem.icon} className='iconElmenteach' alt="n"/></td>

                   
                
                  </tr>
                )
              })}



            </tbody>
          </table>
        </div>
        
        {totalPages > 1 && (
                <div className="flex justify-center mt-4">
                    {/* Previous page button */}
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-3 py-1 mr-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                    >
                        Previous
                    </button>

                    {/* Displaying only a subset of page numbers */}
                    {Array.from({ length: totalPages > 5 ? 5 : totalPages }, (_, i) => {
                        let pageNumber;
                        if (totalPages <= 5 || currentPage <= 3) {
                            pageNumber = i + 1;
                        } else if (currentPage > totalPages - 2) {
                            pageNumber = totalPages - 4 + i;
                        } else {
                            pageNumber = currentPage - 2 + i;
                        }

                        return (
                            <button
                                key={pageNumber}
                                onClick={() => handlePageChange(pageNumber)}
                                className={`px-3 py-1 mr-2 rounded-md ${currentPage === pageNumber ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                            >
                                {pageNumber}
                            </button>
                        );
                    })}

                    {/* Next page button */}
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-3 py-1 ml-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                    >
                        Next
                    </button>
                </div>
            )}
      </div>
      </div>
    </div>
  );
}

// export default QuestionCreate;


export default CategoryCreate















// import React, { useState, useEffect } from 'react';

// function QuestionCreate() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch('https://server-ip.com/category');
//       console.log(response)
//       if (!response.ok) {
//         throw new Error('Failed to fetch data');
//       }
//       const jsonData = await response.json();
//       setData(jsonData);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Data:</h2>
//       <ul>
//         {data.map(item => (
//           <li key={item.id}>
//             <p>Name: {item.name}</p>
//             <p>Active: {item.is_active.toString()}</p>
//             <p>Icon: {item.icon}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default QuestionCreate;














// import React, { useState } from 'react';

// function MyComponent() {
//   const [isActive, setIsActive] = useState(false);

//   const handleRadioChange = (e) => {
//     setIsActive(e.target.value === 'true');
//   };

//   return (
//     <div>
//       <h2>Status:</h2>
//       <div>
//         <input
//           type="radio"
//           id="active"
//           name="status"
//           value="true"
//           checked={isActive}
//           onChange={handleRadioChange}
//         />
//         <label htmlFor="active">Active</label>
//       </div>
//       <div>
//         <input
//           type="radio"
//           id="inactive"
//           name="status"
//           value="false"
//           checked={!isActive}
//           onChange={handleRadioChange}
//         />
//         <label htmlFor="inactive">Inactive</label>
//       </div>
//       <p>Selected status: {isActive ? 'Active' : 'Inactive'}</p>
//     </div>
//   );
// }

// export default MyComponent;
