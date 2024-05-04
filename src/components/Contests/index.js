

import Navbar from '../Navbar';
import React, { useState, useEffect } from 'react';
import './index.css';
import { ColorCode } from '../ColorCode';

function ContestsPage() {


    const [selectedProductsget, setSelectedProductsget] = useState('1,2,3')
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [selectAll, setSelectAll] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10); // Change this value as needed
    const [Categorylist, setCategoryPosts] = useState([])


    const [nameContest, setnameContest] = useState('')
    const [newstartDate, newsetStartDate] = useState(null);
    const [ImageContest, setImagecontest] = useState('')
    const [contestFee, setContestFee] = useState(0)
    const maxCharacters = 100;
    const [textareaValueContest, setTextareaValue] = useState('');
    const [dateTimeEnd, setDateTimeEnd] = useState('');
    const [dateTimeStart, setDateTimeStart] = useState('');

    // Calculate total number of pages
    const totalPages = Math.ceil(Categorylist.length / itemsPerPage);

    // Logic to slice the data array based on current page and items per page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = Categorylist.slice(indexOfFirstItem, indexOfLastItem);



    const onChagetextcontest = (e) => {
        setnameContest(e.target.value)
    }

    // Function to handle page navigation
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handelinputImagecontest = (event) => {
        const imageData = event.target.files[0];
        setImagecontest(imageData)

    }

    const onChangeContestFee = (e) => {
        // contestFee
        const numbercontestfee = parseInt(e.target.value)
        setContestFee(numbercontestfee)
    }


    useEffect(() => {
        fetch('https://freakapp.pythonanywhere.com/question/')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setCategoryPosts(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    useEffect(() => {
        if (selectAll) {
            setSelectedProducts(Categorylist.map(product => product.id));
        } else {
            setSelectedProducts([]);
        }
    }, [selectAll, Categorylist]);

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
        const selectedIds = [];
        const availableProducts = [...Categorylist]; // Create a copy of the products array to manipulate

        // Ensure we have at least 10 unique questions or until all questions are exhausted
        while (selectedIds.length < 3 && availableProducts.length > 0) {
            // Get a random index within the available products
            const randomIndex = Math.floor(Math.random() * availableProducts.length);
            // Get the product at that random index
            const selectedProduct = availableProducts[randomIndex];
            // Add its ID to the selectedIds array if it's not already selected
            if (!selectedIds.includes(selectedProduct.id)) {
                selectedIds.push(selectedProduct.id);
            }
            // Remove the selected product from the available products array to avoid repetition
            availableProducts.splice(randomIndex, 1);
        }

        // Update the selected products state with the unique IDs
        setSelectedProducts(selectedIds);

        // const numbers = selectedProducts
        const convertedString = selectedIds.join(',');
        // console.log(convertedString); // Output: '5,7,11'
        setSelectedProductsget(convertedString)


        // newStringFormat()
    };

    // const newStringFormat = () => {
    //     const numbers = selectedProducts
    //     const convertedString = selectedIds.join(',');
    //     // console.log(convertedString); // Output: '5,7,11'
    //     setSelectedProductsget(convertedString)

    // }

    const handleRemoveSelected = () => {
        setSelectedProducts([]);
    };



    const handledescriptionChange = (event) => {
        const newValue = event.target.value;


        setTextareaValue(newValue);

    };






    const handleChangeStartDate = (event) => {
        setDateTimeStart(event.target.value);
    };




    const handleChangeEndDate = (event) => {
        setDateTimeEnd(event.target.value);

    }




    const onClickSubmitContest = async () => {

        const objectNew = {
            'name': nameContest,
            'icon': ImageContest,
            'entry_fee': contestFee,
            'start_time': dateTimeStart,
            'end_time': dateTimeEnd,
            'description': textareaValueContest,
            'question': selectedProductsget
        }


        console.log(objectNew, 'object')

        console.log(selectedProductsget,'selectedObject')
        // console.log(endDate)



        // "status": "ready",
        // "question_count": 3,

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('name', nameContest);
            formDataToSend.append('icon', ImageContest);
            formDataToSend.append('entry_fee', contestFee);
            // startDate
            formDataToSend.append('start_time', dateTimeStart);
            // endDate
            formDataToSend.append('end_time', dateTimeEnd);
            formDataToSend.append('description', textareaValueContest);
            formDataToSend.append('question', selectedProductsget);
            // formDataToSend.append('status', 'ready');

            // formDataToSend.append('question_count', 3);


            console.log(formDataToSend)

            const response = await fetch('https://freakapp.pythonanywhere.com/contest/', {
                method: 'POST',
                body: formDataToSend
            });

            console.log(response, 'what error')

            if (!response.ok) {
                throw new Error('Failed to create entry');


            }
            // window.location.reload(false);

            // console.log('Category created successfully');
        } catch (error) {
            console.error('Error:', error);
        }
    }



    console.log(newsetStartDate)
    console.log(newstartDate)
    console.log(selectedProductsget)

    // console.log(dateTime, 'datetime')


    const numbers = selectedProducts
    const convertedString = numbers.join(',');
    console.log(convertedString); // Output: '5,7,11'
    return (
        <div className='containerbg' style={{ backgroundColor: ColorCode.bgColor }}>
            <div className='navContainer'>
                <Navbar />
            </div>

            <div className='right-container-contest'>
                <h1 className='nameContestpending' >The contest part is currently in progress. please refrain from providing details.</h1>

                <div className='container-right-Element-contest'>

                    <h1 className='nameContest' style={{ color: ColorCode.textColor }}>Create a Contest</h1>
                    <div className='container-input-contest'>
                        <div className='eachInputElement'>

                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white " style={{ color: ColorCode.textColor }}> Name</label>
                            <input type="text" id="first_name" name="name"
                                style={{ borderColor: ColorCode.borderColor }}

                                className="textInputnameImagecontest" placeholder="Name" onChange={onChagetextcontest} required />
                        </div>
                        {/* <DatePicker selected={startDate}  dateFormat="yyyy/MM/dd" onChange={(date) => newsetStartDate(date)} /> */}

                        <div className='eachInputElement'>
                            <p className='imageElement' style={{ color: ColorCode.textColor }}>Image</p>
                            <input type="file" onChange={handelinputImagecontest} accept="*/*" className='textInputnameImagecontest' style={{ borderColor: ColorCode.borderColor }} />

                        </div>
                        <div className='datepickerElement eachInputElement'>
                            <div>
                                <p className='imageElement' style={{ color: ColorCode.textColor }}>Start Date</p>

                                <input
                                    type="datetime-local"
                                    id="datetime"
                                    name="datetime"
                                    value={dateTimeStart}
                                    onChange={handleChangeStartDate}
                                    className='date-time'
                                />


                            </div>
                            <div>
                                <p className='imageElement' style={{ color: ColorCode.textColor }}>End Date</p>

                                <input
                                    type="datetime-local"
                                    id="datetime"
                                    name="datetime"
                                    value={dateTimeEnd}
                                    onChange={handleChangeEndDate}
                                    className='date-time'

                                />
                            </div>




                        </div>

                        <div className='eachInputElement'>
                            <p className='imageElement' style={{ color: ColorCode.textColor }}>Entry Fee</p>


                            <input type="number" id="first_name" name="name"
                                defaultValue={0}
                                style={{ borderColor: ColorCode.borderColor }}
                                className="textInputnameImagecontest" onChange={onChangeContestFee} placeholder="These amount will be deducted from users wallet" required />
                        </div>
                        <div className='elementDescription'>
                            <p style={{ color: ColorCode.textColor }}>Description</p>
                            <textarea
                                placeholder=''
                                className='textareaElementDescription'
                                id="textarea"
                                rows={4}
                                cols={50}
                                value={textareaValueContest}
                                onChange={handledescriptionChange}
                                maxLength={maxCharacters}
                                style={{ borderColor: ColorCode.borderColor }}
                            />
                        </div>
                        {/* <div className='elementDescription'>
                            <button onClick={onClickSubmitContest} className='create-Contest' style={{ color: ColorCode.borderColor }}>Create Contest</button>

                        </div> */}
                    </div>

                </div>
                <div className='container-Quiz-contest'>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg tablecontainer">
                        <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
                            <label htmlFor="table-search" className="sr-only">Search</label>
                        </div>
                        <div className='QuestionContainerselect'>
                            <p className='SelectQuestions' style={{ color: ColorCode.textColor }}>Select Questions for Daily Quiz</p>
                            <button className='buttonQuiz' onClick={handleRandomSelection}>Random Quiz</button>
                            <button className='buttonDelete' onClick={handleRemoveSelected}>Clear</button>

                        </div>
                        <table className=" text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
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
                                            {product.statement}
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
                                const product = Categorylist.find(p => p.id === productId);
                                return (
                                    <div className='listElementContainer' style={{ color: '#fff' }}>
                                        <p>{product.id}{')'}</p>
                                        <li className='listitem' key={productId} >{product.statement}</li>
                                    </div>

                                );
                            })}
                        </ul>
                    </div>




                </div>



                {/* <div>
                    <h1 style={{ color: ColorCode.borderColor }}>jhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh i</h1>

                </div> */}

                <div className='elementDescription button-submit'>
                            <button onClick={onClickSubmitContest} className='create-Contest' style={{ color: ColorCode.borderColor }}>Create Contest</button>

                        </div>

            </div>


        </div>
    );
}

export default ContestsPage;
