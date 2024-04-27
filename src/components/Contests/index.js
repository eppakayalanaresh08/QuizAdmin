import Navbar from '../Navbar'
import React, { useState ,useEffect} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './index.css'


import { ColorCode } from '../ColorCode';



// const products = [
//     { id: 1, name: 'Apple MacBook Pro 17"', color: 'Silver', category: 'Laptop', price: '$2999' },
//     { id: 2, name: 'Microsoft Surface Pro', color: 'White', category: 'Laptop PC', price: '$1999' },
//     { id: 3, name: 'Magic Mouse 2', color: 'Black', category: 'Accessories', price: '$99' },
//     { id: 4, name: 'Apple Watch', color: 'Silver', category: 'Accessories', price: '$179' },
//     { id: 5, name: 'iPad', color: 'Gold', category: 'Tablet', price: '$699' },
//     { id: 6, name: 'Apple iMac 27"', color: 'Silver', category: 'PC Desktop', price: '$3999' },
  
//   ];

//   108950	Apple Computer is the maker of the iPhone.
//   108948	Which of these is not a kind of computer?
//   108947	Which of these is not an early computer?
//   108946	When was the DVD introduced?
//   108945	What does fiber optic cable resemble, in terms of size?
//   108944	What is the capital of France?
//   108943	Who painted the famous artwork "The Starry Night"?
//   108942	Who wrote the famous novel "To Kill a Mockingbird"?
//   108941	What is the main religion in India?

  const products=[
    {
         id:108950,name:'Apple Computer is the maker of the iPhone.',idElement:1
    },
    {
        id:108948,name:'Which of these is not a kind of computer?',idElement:2
   },
   {
    id:108947,name:'What does fiber optic cable resemble, in terms of size?',idElement:3
},
{
    id:108946,name:'When was the DVD introduced?',idElement:4
},
{
    id:108945,name:'Who wrote the famous novel "To Kill a Mockingbird"?',idElement:5
},
{
    id:107944,name:'What is the capital of France?',idElement:6
},
{
id:108943,name:'What is the main religion in India?',idElement:7
},
{
    id:118945,name:'Who wrote the famous novel "To Kill a Mockingbird"?',idElement:8
},
{
    id:118944,name:'What is the capital of France?',idElement:9
},
{
id:102943,name:'What is the main religion in India?',idElement:10

}
,{
    id:103944,name:'What is the capital of France?',idElement:11
},
{
  id:108950,name:'Apple Computer is the maker of the iPhone.',idElement:12
},
{
 id:108948,name:'Which of these is not a kind of computer?',idElement:13
},
{
id:108947,name:'What does fiber optic cable resemble, in terms of size?',idElement:14
},
{
id:108946,name:'When was the DVD introduced?',idElement:15
},
{
id:108945,name:'Who wrote the famous novel "To Kill a Mockingbird"?',idElement:16
},
{
id:107944,name:'What is the capital of France?',idElement:17
},
{
id:108943,name:'What is the main religion in India?',idElement:18
},
{
id:118945,name:'Who wrote the famous novel "To Kill a Mockingbird"?',idElement:19
},
{
id:118944,name:'What is the capital of France?',idElement:20
},
{
id:102943,name:'What is the main religion in India?',idElement:21

}
,{
id:103944,name:'What is the capital of France?',idElement:22
},




  ]

function ContestsPage() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate,setEndDate]=useState(new Date())


    const [selectedProducts, setSelectedProducts] = useState([]);
    const [selectAll, setSelectAll] = useState(false);



    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10); // Change this value as needed



    // const data = generateRandomData;

    // Calculate total number of pages
    const totalPages = Math.ceil(products.length / itemsPerPage);

    // Logic to slice the data array based on current page and items per page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

    // Function to handle page navigation
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };




  
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
  


    const [textareaValue, setTextareaValue] = useState('');

    const maxCharacters = 100;

    const handleChange = (event) => {
        const newValue = event.target.value;
        if (newValue.length <= maxCharacters) {
            setTextareaValue(newValue);
        }
    };



    return (
      <div className='containerbg' style={{backgroundColor:ColorCode.bgColor}}>
            <div className='navContainer'>
                <Navbar />
            </div>

     <div className='right-container-contest'>
            <div className='container-right-Element-contest'>
                <h1 className='nameContest' style={{color:ColorCode.textColor}}>Create a Contest</h1>
                <div className='container-input-contest'>
                    <div className='eachInputElement'>

                        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white " style={{color:ColorCode.textColor}}> Name</label>
                        <input type="text" id="first_name" name="name"
                          style={{borderColor:ColorCode.borderColor}} 
                            className="textInputnameImagecontest" placeholder="Name" required />
                    </div>

                    <div className='eachInputElement'>
                        <p className='imageElement' style={{color:ColorCode.textColor}}>Image</p>
                        <input type="file" onChange={''} accept="*/*" className='textInputnameImagecontest' style={{borderColor:ColorCode.borderColor}} />

                    </div>
                    <div className='datepickerElement eachInputElement'>
                        <div>
                            <p className='imageElement' style={{color:ColorCode.textColor}}>Start Date</p>
                        <DatePicker
                        className='datepickerstart'
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={60}
                            timeCaption="time"
                            dateFormat="MMMM d, yyyy h:mm aa"
                            withPortal
                        />
                        </div>
                        <div>
                            <p className='imageElement' style={{color:ColorCode.textColor}}>End Date</p>
                         <DatePicker
                        className='datepickerstart'
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={60}
                            timeCaption="time"
                            dateFormat="MMMM d, yyyy h:mm aa"
                            withPortal
                        />
                        </div>
                    </div>

                   
                    <div className='eachInputElement'>
                        <p className='imageElement' style={{color:ColorCode.textColor}}>Entry Fee</p>


                        <input type="number" id="first_name" name="name"
                            defaultValue={0}
                            style={{borderColor:ColorCode.borderColor}}
                            className="textInputnameImagecontest" placeholder="These amount will be deducted from users wallet" required />
                    </div>
                    <div className='elementDescription'>
                        <p style={{color:ColorCode.textColor}}>Description</p>
                    <textarea
                    placeholder=''
                    className='textareaElementDescription'
                    id="textarea"
                    rows={4}
                    cols={50} 
                    value={textareaValue}
                    onChange={handleChange}
                    maxLength={maxCharacters}
                    style={{borderColor:ColorCode.borderColor}} 
                />                
                    </div>
                </div>

            </div>
            <div className='container-Quiz-contest'>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg tablecontainer">
        <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
          <label htmlFor="table-search" className="sr-only">Search</label>
        </div>
        <div className='QuestionContainerselect'>
        <p className='SelectQuestions' style={{color:ColorCode.textColor}}>Select Questions for Daily Quiz</p>
        <button className='buttonQuiz' onClick={handleRandomSelection}>Random Quiz</button>
        <button className='buttonDelete' onClick={handleRemoveSelected}>Clear</button>

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
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              
            </tr>
          </thead>
          <tbody>
            {currentItems.map(product => (
              <tr key={product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                  <input 
                    type="checkbox" 
                    checked={selectedProducts.includes(product.id)} 
                    onChange={() => toggleProductSelection(product.id)} 
                  />
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {product.id}
                </td>
                <td className="px-6 py-4">
                  {product.name}
                </td>
               
              </tr>
            ))}
          </tbody>
        </table>

        
        {totalPages > 1 && (
                <div className="flex justify-center mt-4 mb-3">
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
      <div className='selectedProduct'>
        <h2 className='SelectedQuestions'>Selected Questions</h2>
        <ul>
          {selectedProducts.map(productId => {
            const product = products.find(p => p.id === productId);
            return (
                <div className='listElementContainer' style={{color:'#fff'}}>
                    <p>{product.idElement}{')'}</p>
              <li className='listitem' key={productId} >{product.name}</li>
              </div>

            );
          })}
        </ul>
      </div>
           
      </div>
           </div>


        </div>
    )
}

export default ContestsPage






















// selected={startDate}
// onChange={(update) => {
//     setDateRange(update);
//   }}
//   timeInputLabel="Time:"
// showTimeInput
// // isClearable 
// startDate={startDate}
// endDate={endDate}
// withPortal







// () => {
//     const [dateRange, setDateRange] = useState([null, null]);
//     const [startDate, endDate] = dateRange;
//     return (
//       <DatePicker
//         selectsRange={true}
//         startDate={startDate}
//         endDate={endDate}
//         onChange={(update) => {
//           setDateRange(update);
//         }}
//         isClearable={true}
//       />
//     );
//   };













// range

//  <DatePicker
                     

// selectsRange={true}
// startDate={startDate}
// endDate={endDate}


// onChange={(update) => {
//     setDateRange(update);
//     handleStartDateChange(update[0]);
//     handleEndDateChange(update[1]);
// }}


// showTimeSelect
// timeFormat="HH:mm"
// timeIntervals={1}
// timeCaption="time"
// dateFormat="MMMM d, yyyy h:mm aa"

// withPortal


// /> 