
import React, { useState, useEffect } from 'react';

import toast, { Toaster } from 'react-hot-toast';
import Navbar from '../Navbar';
import './index.css';

import { ColorCode } from '../ColorCode';

const colorCode = '#eb9175';
const colorHead = '#ff7618';

function CategoryCreate() {
  const [formData, setFormData] = useState({
    name: '',
    is_active: false,
    icon: null
  });


  const [categorydata, setCategoryPosts] = useState([]);
  const [image, setImage] = useState(null);


  const [isOpenPopupEditCategory, setisOpenPopupEditCategory] = useState(false)

  const [updateEditcategorydata, setupdateDataEditdata] = useState({})


  const PopupEditCategoryhandle = (eachItem) => {

    setupdateDataEditdata(eachItem)
    console.log(eachItem)

    setisOpenPopupEditCategory(true)

  }



  const closePopup = () => {
    setisOpenPopupEditCategory(false)


  };

  ///get method 

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
    const imageData = event.target.files[0];
    setFormData((prevState) => ({
      ...prevState,
      icon: imageData
    }));

    const dataImage = URL.createObjectURL(imageData);
    setImage(dataImage);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  // handleRadioEditData
  const handleRadioEditData = (e) => {
    const value = e.target.value === 'true';
    setupdateDataEditdata((prevState) => ({
      ...prevState,
      is_active: value
    }));
  };

  const handleRadioChange = (e) => {
    const value = e.target.value === 'true';
    setFormData((prevState) => ({
      ...prevState,
      is_active: value
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('is_active', formData.is_active);
      formDataToSend.append('icon', formData.icon);


      console.log(formDataToSend)

      const response = await fetch('https://freakapp.pythonanywhere.com/category/', {
        method: 'POST',
        body: formDataToSend
      });



      // const data = await response.json()

        // console.log(response)
      // console.log(data,'response')

      if (!response.ok) {
        toast.error("Please Fill All Correct Way.")
        throw new Error('Failed to create entry');


      }
      // window.location.reload(false);
      toast.success('Category created successfully ')

      // console.log('Category created successfully');
    } catch (error) {
      console.error('Error:', error);
    }
  };


  const handlePopupCategoryEditSubmit = async (selectedCategory) => {
    try {
      const response = await fetch(`https://freakapp.pythonanywhere.com/category/${selectedCategory.id}`, {
        method: 'PATCH', // Use PATCH method for partial updates
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ is_active: updateEditcategorydata.is_active }) // Only send the updated field
      });

      console.log(response.detail)

      if (!response.ok) {
        toast.error('Failed to update category ')

        throw new Error('Failed to update category');

      }
      toast.success(response.detail)

      console.log('Category updated successfully');
      closePopup();
      window.location.reload(false);

      // Reloading the page after update
    } catch (error) {
      console.error('Error:', error);
    }
  }






  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const totalPages = Math.ceil(categorydata.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = categorydata.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  const OnDeletebutton = async (categoryId) => {
    try {
      const response = await fetch(`https://freakapp.pythonanywhere.com/category/${categoryId}`, {
        method: 'DELETE'
      });
      console.log(response)




      if (!response.ok) {
        toast.error('Failed to delete category')

        throw new Error('Failed to delete category');

      }
      toast.success(response.detail)
      // console.log('Category deleted successfully');

      // window.location.reload(false); // Reloading the page after deletion
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (

    <div className='container-bg' style={{ backgroundColor: ColorCode.bgColor }}>

      <div className='nav-container'>
        <Navbar />
      </div>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
      />
      <div className='conatinerbg-inputs'>

        <form onSubmit={handleSubmit}>
          <div class="inputext">
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" style={{ color: ColorCode.textColor }}>Category Name</label>
            <input type="text" id="first_name" name="name"
              value={formData.name}
              onChange={handleChange} className="textInputname" style={{ borderColor: ColorCode.borderColor }} placeholder="Name" required />
          </div>

          <p className='categoryName' style={{ color: ColorCode.textColor }}>Category</p>

          <div className="radiocontainer">
            <div className='activecontainer' style={{ borderColor: ColorCode.borderColor }}>
              <input
                type="radio"
                id="active"
                name="status"
                value="true"
                checked={formData.is_active}
                onChange={handleRadioChange}
                className="radioElement"
              />
              <label htmlFor="active" className='inputelement' style={{ color: ColorCode.textColor }}>Active</label>
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
                required
              />
              <label htmlFor="inactive" className='inputelement' style={{ color: ColorCode.textColor }}>Inactive</label>
            </div>
          </div>
          <p className='categoryName' style={{ color: ColorCode.textColor }}>Category Icon</p>
          <input type="file" onChange={handleFileChange} required accept="image/*" className='imageElementInput' style={{ borderColor: ColorCode.borderColor, color: ColorCode.textColor }} />
          {formData.icon && (
            <img
              src={image}
              alt="Selected"
              style={{ maxWidth: '100%', maxHeight: '200px', margin: '20px' }}
            />
          )}
          <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full addbutton" style={{ backgroundColor: colorCode }}>
            ADD
          </button>
        </form>
        <div className='container-table-list'>
          <h1 style={{ color: ColorCode.textColor }}>Categories </h1>
          <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
            <table class="w-full border-collapse bg-black text-left text-sm text-gray-500">
              <thead class="bg-black-50">
                <tr>
                  <th scope="col" class="px-6 py-4 font-medium " style={{ color: colorHead }}>Category Name</th>
                  <th scope="col" class="px-6 py-4 font-medium " style={{ color: colorHead }}>Category Status</th>
                  <th scope="col" class="px-6 py-4 font-medium " style={{ color: colorHead }}>Category Icon</th>
                  <th scope="col" class="px-6 py-4 font-medium " style={{ color: colorHead }}>Category Action</th>

                </tr>
              </thead>
              <tbody class="divide-y divide-white-100 border-t border-white-100">
                {currentItems.map((eachItem) => {
                  return (
                    <tr class="hover:bg-gray-50">
                      <td class="px-6 py-4" style={{ color: colorCode }}>{eachItem.name}</td>
                      <td class="px-6 py-4" style={{ color: colorCode }}>{eachItem.is_active ? 'Active' : 'Inactive'}</td>
                      <td class="px-6 py-4" style={{ color: colorCode }}><img src={eachItem.icon} className='iconElmenteach' alt="n" /></td>
                      <td class="px-6 py-4" style={{ color: colorCode }}>
                        {/* <div className='Deletebg' >  */}

                        <button className='deletebutton' onClick={() => OnDeletebutton(eachItem.id)}> <i class="bi bi-trash3 delteicon" ></i></button>
                        <button className='deletebutton' onClick={() => PopupEditCategoryhandle(eachItem)}><i class="bi bi-pencil-square"></i></button>

                        {/* </div> */}
                      </td>

                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {totalPages > 1 && (
            <div className="flex justify-center mt-4 mb-5">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 mr-2 bg-black-200 text-gray-700 rounded-md hover:bg-gray-300 buttonBorder"
                style={{ color: ColorCode.borderColor }}
              >
                Previous
              </button>
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
                    className={`px-3 py-1 mr-2 rounded-md ${currentPage === pageNumber ? 'bg-gray-500 text-white' : 'bg-black-200 text-gray-700 hover:bg-gray-300 buttonBorder'}`}
                    style={{ color: ColorCode.borderColor }}

                  >
                    {pageNumber}
                  </button>
                );
              })}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 ml-2 bg-black-200 text-gray-700 rounded-md hover:bg-gray-300 buttonBorder"
                style={{ color: ColorCode.borderColor }}

              >
                Next
              </button>
            </div>
          )}
        </div>

        {isOpenPopupEditCategory && (
          <div className="popup">
            <div className="popup-content">
              <div className='headingwalletcontainer'>
                <h1 className='headingnameWallet' style={{ color: ColorCode.borderColor }}>Status Update</h1>
              </div>
              <div className="container-updateStatus">

                <div className='activecontainer buttonStatus'>
                  <input
                    type="radio"
                    id="activeEdit"
                    name="status"
                    value="true"
                    checked={updateEditcategorydata.is_active}
                    onChange={handleRadioEditData}
                    className="radioElement"

                  />
                  <label htmlFor="activeEdit" style={{ color: ColorCode.textColor }} className='inputelement'>Active</label>
                </div>

                <div className='leftRadioButton buttonStatus'>

                  <input
                    type="radio"
                    id="inactiveEdit"
                    name="status"
                    value="false"
                    checked={!updateEditcategorydata.is_active}
                    onChange={handleRadioEditData}
                    className="radioElement"

                  />
                  <label htmlFor="inactiveEdit" style={{ color: ColorCode.textColor }} className='inputelement' >Inactive</label>
                </div>
              </div>

              <div className='containerButton'>
                <button className='submitbutton' onClick={() => handlePopupCategoryEditSubmit(updateEditcategorydata)}>Submit</button>
                <button onClick={closePopup} className='closeButton'>Close</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CategoryCreate;




