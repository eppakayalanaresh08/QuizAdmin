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











import React, { useState } from 'react';
import Navbar from '../Navbar'
import './index.css'



import { ColorCode } from '../ColorCode';

function CategoryCreate() {
  const [formData, setFormData] = useState({
    name: '',
    is_active: false,
    icon: null
  });

  const [image, setImage] = useState(null)




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
    try {
      const response = await fetch('https://server-ip.com/category', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Failed to create entry');
      }
      // If successful, you can handle the response here
      console.log('Entry created successfully');
    } catch (error) {
      console.error('Error:', error);
    }
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
