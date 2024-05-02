import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar'

import { ColorCode } from '../ColorCode'
import './index.css'


// const Emopleelist = [
//   {
//     id: 1,

//     name: 'Naresh',
//     email: '@gmail.com',
//     mobileNo: 8346876776,
//     role: 'Front-end',
//     startDate: '2002-09-02',
//     EndDate: '2002-09-02'
//   },
//   {
//     id: 2,

//     name: 'Rakesh',
//     email: '@gmail.com',
//     mobileNo: 565465468346,
//     role: 'Front-end',
//     startDate: '2007-09-02',
//     EndDate: '2020-10-02'
//   },
//   {
//     id: 3,

//     name: 'Lokesh',
//     email: '@gmail.com',
//     mobileNo: 9767798346,
//     role: 'Front-end',
//     startDate: '2006-09-02',
//     EndDate: '2027-09-02'
//   },
//   {
//     id: 4,

//     name: 'Dinesh',
//     email: '@gmail.com',
//     mobileNo: 987878346,
//     role: 'Front-end',
//     startDate: '2003-08-02',
//     EndDate: '2020-09-09'
//   },
//   {
//     id: 5,

//     name: 'Avinash',
//     email: '@gmail.com',
//     mobileNo: 9879788346,
//     role: 'Front-end',
//     startDate: '2001-09-02',
//     EndDate: '2023-09-02'
//   }
// ]

const colorCode = '#eb9175';
const colorHead = '#ff7618';


function EmployeePage() {
  const [isPopupOpenEmployeeadd, setPopupOpenEmployeeadd] = useState(false);
  const [isOpenPopupEditEmployee, setisOpenPopupEditEmpolyee] = useState(false)
  const [getEmpolyeeDetails, setgetEmpolyeeDetails] = useState([])
  const [rolegettheData, setgetroleData] = useState([])

  useEffect(() => {
    fetch('https://freakapp.pythonanywhere.com/employee/role')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setgetroleData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });


    fetch('https://freakapp.pythonanywhere.com/employee/')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setgetEmpolyeeDetails(data);
      })
      .catch((err) => {
        console.log(err.message);
      });




  }, []);


  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const totalPages = Math.ceil(rolegettheData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = rolegettheData.slice(indexOfFirstItem, indexOfLastItem);
  const [updateEditEmpolyeedata, setupdateEditEmpolyeedata] = useState({})
  const [openroleEmpolyee, setopenRoleEmpolyee] = useState(false)
  const [rolename, setrolename] = useState('')
  const [openmodelroleEdit, setmodelRoleEdit] = useState(false)
  const [passthedataRoleEdit, setpassdataEditRole] = useState({})
  const [nameroleinput, setrolenameEidt] = useState('')

  const [NameEmpolyee, setNameEmpolyee] = useState('')
  const [roleselectItem, setRoleSelectEmpolyee] = useState('')
  const [getEmailName, setChangeEmailName] = useState('')
  const [getDateOfBirth, setChangeDateOfBirth] = useState('')
  const [getJoinOfDate, setChangeJoinOfDate] = useState('')

  const [updateEmailinputEmployee, setChangeUpdateEmailEmployee] = useState('')


  console.log(nameroleinput, 'editvalue')
  console.log(passthedataRoleEdit.name, 'editrolevalue')


  const [currentPageEmployee, setCurrentPageEmployee] = useState(1);
  const [itemsPerPageEmployee] = useState(5);
  const totalPagesEmployee = Math.ceil(getEmpolyeeDetails.length / itemsPerPageEmployee);
  const indexOfLastItemEmployee = currentPageEmployee * itemsPerPageEmployee;
  const indexOfFirstItemEmployee = indexOfLastItemEmployee - itemsPerPageEmployee;
  const currentItemsEmployee = getEmpolyeeDetails.slice(indexOfFirstItemEmployee, indexOfLastItemEmployee);


  const PopupEditEmpolyeehandle = (eachItem) => {

    setupdateEditEmpolyeedata(eachItem)
    // console.log(eachItem)

    setisOpenPopupEditEmpolyee(true)
    setChangeUpdateEmailEmployee(eachItem.email)

  }





  const openClickAddEmpolyee = () => {
    setPopupOpenEmployeeadd(true);
  }



  const closePopup = () => {
    setPopupOpenEmployeeadd(false);
    setisOpenPopupEditEmpolyee(false)
    setopenRoleEmpolyee(false)
    setmodelRoleEdit(false)

  };


  const OnDeleteEmployeebutton = async (EmployeeId) => {
    try {
      const response = await fetch(`https://freakapp.pythonanywhere.com/employee/${EmployeeId}`, {
        method: 'DELETE'
      });
      console.log(response)

      if (!response.ok) {
        throw new Error('Failed to delete category');
      }

      console.log('Category deleted successfully');

      window.location.reload(false); // Reloading the page after deletion
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const handlePopupEmpolyeeEditSubmit = async (EmpolyeeId) => {
    try {
      const response = await fetch(`https://freakapp.pythonanywhere.com/employee/${EmpolyeeId}`, {
        method: 'PATCH', // Use PATCH method for partial updates
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: updateEmailinputEmployee }) // Only send the updated field
      });

      console.log(response)

      if (!response.ok) {
        throw new Error('Failed to update category');
      }

      console.log('Category updated successfully');

      window.location.reload(false); // Reloading the page after update
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const handlePageChangeEmployee=(page)=>{
    setCurrentPageEmployee(page)
  }


  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const openRoleClickEmpolyee = () => {
    setopenRoleEmpolyee(true);

  }

  const nameChangeEditroleinput = (e) => {
    setrolenameEidt(e.target.value)
  }

  const NameChangeRoleEmpolyee = (e) => {
    setrolename(e.target.value)
  }



  const onClickSubmitnameRole = async () => {
    const nameObject = {
      name: rolename
    }
    try {


      const response = await fetch('https://freakapp.pythonanywhere.com/employee/role', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(nameObject)
      });


      console.log(response)

      if (!response.ok) {
        throw new Error('Failed to update category');
      }

      console.log('Category updated successfully');
      closePopup();
      window.location.reload(false); // Reloading the page after update
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const onClickRoleDelete = async (roleId) => {
    try {
      const response = await fetch(`https://freakapp.pythonanywhere.com/employee/role/${roleId}`, {
        method: 'DELETE'
      });
      console.log(response)

      if (!response.ok) {
        throw new Error('Failed to delete role');
      }

      console.log('role deleted successfully');

      window.location.reload(false); // Reloading the page after deletion
    } catch (error) {
      console.error('Error:', error);
    }
  }


  const handleEditRoleSubmit = async (roleId) => {
    try {
      const response = await fetch(`https://freakapp.pythonanywhere.com/employee/role/${roleId}`, {
        method: 'PATCH', // Use PATCH method for partial updates
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: nameroleinput }) // Only send the updated field
      });

      console.log(response)

      if (!response.ok) {
        throw new Error('Failed to update category');
      }

      console.log('Category updated successfully');
      closePopup();
      window.location.reload(false); // Reloading the page after update
    } catch (error) {
      console.error('Error:', error);
    }
  }



  const onClickEditRole = (roleObject) => {
    setmodelRoleEdit(true)
    setpassdataEditRole(roleObject)
    setrolenameEidt(roleObject.name)
  }

  const handleSelectRole = (e) => {
    setRoleSelectEmpolyee(e.target.value)
  }

  const ChangeNameEmpolyee = (e) => {
    setNameEmpolyee(e.target.value)
  }

  const inputChangeEmail = (e) => {
    setChangeEmailName(e.target.value)
  }

  const inputChangeDateOfBirth = (e) => {
    setChangeDateOfBirth(e.target.value)
  }


  const inputChangeJoinOfDate = (e) => {
    setChangeJoinOfDate(e.target.value)
  }

  const inputChangeEditEmailEmployee = (e) => {
    setChangeUpdateEmailEmployee(e.target.value)
  }

  const handleSubmitEmpolyee = async () => {
    const formEmployeData = {
      name: NameEmpolyee,
      email: getEmailName,
      date_of_birth: getDateOfBirth,
      date_of_joining: getJoinOfDate,
      role: roleselectItem

    }
    try {


      const response = await fetch('https://freakapp.pythonanywhere.com/employee/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formEmployeData)
      });


      console.log(response)

      if (!response.ok) {
        throw new Error('Failed to update category');
      }

      console.log('Category updated successfully');
      closePopup();
      window.location.reload(false); // Reloading the page after update
    } catch (error) {
      console.error('Error:', error);
    }
  }







  return (
    <div style={{ backgroundColor: ColorCode.bgColor }} className='bg-container'>
      <div className='navbar-container'>
        <Navbar />
      </div>
      <div className='empolyee-list-add-container'>
        <div className='main-container'>
          <button className='button-card-add' onClick={openRoleClickEmpolyee}>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill={ColorCode.cardText} class="bi bi-person-plus" viewBox="0 0 16 16">
              <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
              <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5" />
            </svg>
            <button style={{ color: ColorCode.textColor }}>Add Role</button>
          </button>

          <button className='button-card-add' onClick={openClickAddEmpolyee}>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill={ColorCode.cardText} class="bi bi-person-plus" viewBox="0 0 16 16">
              <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
              <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5" />
            </svg>
            <button style={{ color: ColorCode.textColor }}>Add Empolyee</button>
          </button>
        </div>


        {/* table empolyeee */}


        <div className='container-table-empolyee-list'>
          <h1 style={{ color: ColorCode.textColor }} className='employeeheading'>Empolyee list </h1>
          <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
            <table class="w-full border-collapse bg-black text-left text-sm text-gray-500">
              <thead class="bg-black-50">
                <tr>
                  <th scope="col" class="px-6 py-4 font-medium " style={{ color: colorHead }}>Employee Name</th>
                  <th scope="col" class="px-6 py-4 font-medium " style={{ color: colorHead }}>Employee Email</th>
                  {/* <th scope="col" class="px-6 py-4 font-medium " style={{ color: colorHead }}>Employee Mobile No</th> */}
                  <th scope="col" class="px-6 py-4 font-medium " style={{ color: colorHead }}>Employee Role</th>

                  <th scope="col" class="px-6 py-4 font-medium " style={{ color: colorHead }}>Date Of Birth</th>
                  <th scope="col" class="px-6 py-4 font-medium " style={{ color: colorHead }}>Date Of Joining</th>


                  <th scope="col" class="px-6 py-4 font-medium " style={{ color: colorHead }}>Action</th>


                </tr>
              </thead>
              <tbody class="divide-y divide-white-100 border-t border-white-100">
                {currentItemsEmployee.map((eachItem) => {
                  return (
                    <tr class="hover:bg-gray-50">
                      <td class="px-6 py-4" style={{ color: colorCode }}>{eachItem.name}</td>
                      <td class="px-6 py-4" style={{ color: colorCode }}>
                        {/* {eachItem.is_active ? 'Active' : 'Inactive'} */}
                        {eachItem.email}
                      </td>
                      {/* <td class="px-6 py-4" style={{ color: colorCode }}>
                      {eachItem.mobileNo}
                      </td> */}
                      <td class="px-6 py-4 " style={{ color: colorCode }}>
                        {eachItem.role}
                      </td>
                      <td class="px-6 py-4" style={{ color: colorCode }}>
                        {eachItem.date_of_birth}
                      </td>
                      <td class="px-6 py-4" style={{ color: colorCode }}>
                        {eachItem.date_of_joining}
                      </td>
                      <td class="px-6 py-4" style={{ color: colorCode }}>
                        {/* <div className='Deletebg' >  */}

                        <button className='deleteEmpolyeebutton' onClick={() => OnDeleteEmployeebutton(eachItem.id)}> <i class="bi bi-trash3 delteicon" ></i></button>
                        <button className='deleteEmpolyeebutton' onClick={() => PopupEditEmpolyeehandle(eachItem)}><i class="bi bi-pencil-square"></i></button>

                        {/* </div> */}
                      </td>

                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {totalPagesEmployee > 1 && (
            <div className="flex justify-center mt-4">
              <button
                onClick={() => handlePageChangeEmployee(currentPageEmployee - 1)}
                disabled={currentPageEmployee === 1}
                className="px-3 py-1 mr-2 bg-black-200 text-gray-700 rounded-md hover:bg-gray-300 buttonBorder"
                style={{ color: ColorCode.textColor }}

              >
                Previous
              </button>
              {Array.from({ length: totalPagesEmployee > 5 ? 5 : totalPagesEmployee }, (_, i) => {
                let pageNumber;
                if (totalPagesEmployee <= 5 || currentPageEmployee <= 3) {
                  pageNumber = i + 1;
                } else if (currentPageEmployee > totalPagesEmployee - 2) {
                  pageNumber = totalPagesEmployee - 4 + i;
                } else {
                  pageNumber = currentPageEmployee - 2 + i;
                }
                return (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageChangeEmployee(pageNumber)}
                    className={`px-3 py-1 mr-2 rounded-md ${currentPageEmployee === pageNumber ? 'bg-gray-500 text-white' : 'bg-black-200 text-gray-700 hover:bg-gray-300 buttonBorder'}`}
                    style={{ color: ColorCode.textColor }}

                  >
                    {pageNumber}
                  </button>
                );
              })}
              <button
                onClick={() => handlePageChangeEmployee(currentPageEmployee + 1)}
                disabled={currentPageEmployee === totalPagesEmployee}
                className="px-3 py-1 ml-2 bg-black-200 text-gray-700 rounded-md hover:bg-gray-300 buttonBorder"
                style={{ color: ColorCode.textColor }}
              >
                Next
              </button>
            </div>
          )}
        </div>

        {/* add Employee Section */}

        {isPopupOpenEmployeeadd && (
          <div className="popup">
            <div className="popup-content">
              <div className='headingwalletcontainer'>
                <h1 className='headingnameWallet' style={{ color: ColorCode.borderColor }}>Add Empolyee Details</h1>
              </div>
              <div className='inputContainerbg'>
                <div className='inputContainer'>
                  <h2 className='addheading' style={{ color: ColorCode.textColor }}>Name Empolyee</h2>
                  <input type="text" className='inputTextElement' onChange={ChangeNameEmpolyee} placeholder='Enter the Name' />
                </div>

                {/* <div className='inputContainer'>
                  <h2 className='addheading' style={{ color: ColorCode.textColor }}>Role Empolyee</h2>
                  <input type="text" className='inputText' />
                </div> */}
                <div className='inputContainer'>
                  <h2 className='addheading ' style={{ color: ColorCode.textColor }}>Role Empolyee</h2>

                  <select className='selectRoleItem inputTextElement' onChange={handleSelectRole}>
                    <option>Select Role</option>

                    {
                      rolegettheData.map((each) => (
                        <option value={each.id}>{each.name}</option>
                       


                      ))
                    }
                  </select>
                </div>

                <div className='inputContainer'>
                  <h2 className='addheading' style={{ color: ColorCode.textColor }}>Email</h2>
                  <input type="text" className='inputTextElement' onChange={inputChangeEmail} placeholder='Enter the Email' />
                </div>
                <div className='inputContainer'>
                  <h2 className='addheading' style={{ color: ColorCode.textColor }}>Date of Birth</h2>
                  <input type="text" className='inputTextElement' onChange={inputChangeDateOfBirth} placeholder='YYYY-MM-DD' />
                </div>
                <div className='inputContainer'>
                  <h2 className='addheading' style={{ color: ColorCode.textColor }} >Date Of Joining</h2>
                  <input type="text" className='inputTextElement' onChange={inputChangeJoinOfDate} placeholder='YYYY-MM-DD' />
                </div>
              </div>
              <div className='containerButton'>
                <button className='submitbutton' onClick={handleSubmitEmpolyee}>Submit</button>
                <button onClick={closePopup} className='closeButton'>Close</button>
              </div>
            </div>
          </div>
        )}

        {/* Edit Employee Section */}

        {isOpenPopupEditEmployee && (
          <div className="popup">
            <div className="popup-content">
              <div className='headingwalletcontainer'>
                <h1 className='headingnameWallet' style={{ color: ColorCode.borderColor }}>Update Empolyee Details</h1>
              </div>
              <div className='inputContainerbg'>
                <div className='inputContainer'>
                  <h2 className='addheading' style={{ color: ColorCode.textColor }}>Name Empolyee</h2>
                  <input type="text" className='inputTextElement' value={updateEditEmpolyeedata.name} placeholder='Enter the Name' />
                </div>

                {/* <div className='inputContainer'>
                <h2 className='addheading' style={{ color: ColorCode.textColor }}>Role Empolyee</h2>
                <input type="text" className='inputText' />
              </div> */}
                <div className='inputContainer'>
                  <h2 className='addheading ' style={{ color: ColorCode.textColor }}>Role Empolyee</h2>

                  <select className='selectRoleItem inputTextElement' value={updateEditEmpolyeedata.role}>
                    <option>Select Role</option>

                    {
                      rolegettheData.map((each) => (
                        <option>{each.id}</option>

                      ))
                    }
                  </select>
                </div>

                <div className='inputContainer'>
                  <h2 className='addheading' style={{ color: ColorCode.textColor }}>Email</h2>
                  <input type="text" className='inputTextElement' onChange={inputChangeEditEmailEmployee} value={updateEmailinputEmployee} placeholder='Enter the Email' />
                </div>
                <div className='inputContainer'>
                  <h2 className='addheading' style={{ color: ColorCode.textColor }}>Date of Birth</h2>
                  <input type="text" className='inputTextElement' value={updateEditEmpolyeedata.date_of_birth} placeholder='YYYY-MM-DD' />
                </div>
                <div className='inputContainer'>
                  <h2 className='addheading' style={{ color: ColorCode.textColor }} >Date Of Joining</h2>
                  <input type="text" className='inputTextElement' value={updateEditEmpolyeedata.date_of_joining} placeholder='YYYY-MM-DD' />
                </div>
              </div>
              <div className='containerButton'>
                <button className='submitbutton' onClick={() => handlePopupEmpolyeeEditSubmit(updateEditEmpolyeedata.id)}>Submit</button>
                <button onClick={closePopup} className='closeButton'>Close</button>
              </div>
            </div>
          </div>
        )}



        {/* add role get role */}

        {openroleEmpolyee && (
          <div className="popup ">
            <div className="popup-content">
              <div className='headingwalletcontainer'>
                <h1 className='headingnameWallet' style={{ color: ColorCode.borderColor }}>Employee Role</h1>
              </div>
              <div className='inputContainerbg'>


                <div className='inputContainer'>
                  <h2 className='addheadingrole' style={{ color: ColorCode.textColor }}>Role Name</h2>
                  <input type="text" className='inputText' onChange={NameChangeRoleEmpolyee} />
                </div>

              </div>
              <div className='containerButton'>
                <button className='submitbutton' onClick={onClickSubmitnameRole}>Submit</button>
                <button onClick={closePopup} className='closeButton'>Close</button>
              </div>

              <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
                <table class="w-full border-collapse bg-black text-left text-sm text-gray-500">
                  <thead class="bg-black-50">
                    <tr>
                      <th scope="col" class="px-6 py-4 font-medium " style={{ color: colorHead }}>id</th>
                      <th scope="col" class="px-6 py-4 font-medium " style={{ color: colorHead }}>Empolyee Role</th>
                      <th scope="col" class="px-6 py-4 font-medium " style={{ color: colorHead }}>Role Action</th>

                    </tr>
                  </thead>
                  <tbody class="divide-y divide-white-100 border-t border-white-100">
                    {currentItems.map((eachItem) => {
                      return (
                        <tr class="hover:bg-gray-50">
                          <td class="px-6 py-4" style={{ color: colorCode }}>{eachItem.id}</td>
                          <td class="px-6 py-4" style={{ color: colorCode }}>{eachItem.name}</td>
                          <td class="px-6 py-4" style={{ color: colorCode }}>

                            <button className='deletebutton' onClick={() => onClickRoleDelete(eachItem.id)}> <i class="bi bi-trash3 delteicon" ></i></button>
                            <button className='deletebutton' onClick={() => onClickEditRole(eachItem)}><i class="bi bi-pencil-square"></i></button>

                          </td>

                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>


              {totalPages > 1 && (
                <div className="flex justify-center mt-4">
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
                    style={{ color: ColorCode.borderColor}}
                  >
                    Next
                  </button>
                </div>
              )}



            </div>
          </div>
        )}

        {/* edit role */}
        {openmodelroleEdit && (
          <div className="popup">
            <div className="popup-content">
              <div className='headingwalletcontainer'>
                <h1 className='headingnameWallet' style={{ color: ColorCode.borderColor }}>Update Role Empolyee</h1>
              </div>
              <div className='inputContainerbg'>


                <div className='inputContainer'>
                  <h2 className='addheading' style={{ color: ColorCode.textColor }} >Name Role</h2>
                  <input type="text" className='inputText' onChange={nameChangeEditroleinput} value={nameroleinput} />
                </div>

              </div>
              <div className='containerButton'>
                <button className='submitbutton' onClick={() => handleEditRoleSubmit(passthedataRoleEdit.id)}>Submit</button>
                <button onClick={closePopup} className='closeButton'>Close</button>
              </div>
            </div>
          </div>
        )}





      </div>
    </div>
  )
}

export default EmployeePage