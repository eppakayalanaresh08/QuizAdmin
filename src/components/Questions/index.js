import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar'
import './index.css'

import { ColorCode } from '../ColorCode';


const Answeroption = [
    { id: 101, selectedOption: 'A', correct: 1 },
    { id: 102, selectedOption: 'B', correct: 2 },
    { id: 103, selectedOption: 'C', correct: 3 },
    { id: 104, selectedOption: 'D', correct: 4 },


]


const AnsweroptiontrueFalse = [
    { id: 101, selectedOption: 'A' },
    { id: 102, selectedOption: 'B' },


]





function QuestionsCategory() {


    const [textareaValue, setTextareaValue] = useState('');
    const [selectedItem, setSelectedItem] = useState(null);
    const [valuTextareahint, setvaluTextareahint] = useState('')
    const [answerElement, setanswer] = useState('')
    const [getCategorymethod, setgetCategorymethod] = useState([])

    useEffect(() => {
        fetch('https://freakapp.pythonanywhere.com/category/')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setgetCategorymethod(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);


    const maxCharacters = 100;

    const handleChange = (event) => {
        const newValue = event.target.value;

        if (newValue.length <= maxCharacters) {
            setTextareaValue(newValue);
        }
    };
    const handleChangetexthint = (event) => {
        const newtext = event.target.value
        const newValue = event.target.value;

        if (newValue.length <= maxCharacters) {
            setvaluTextareahint(newtext)

        }
    }


    const [showText, setShowText] = useState(true)
    const [showmedia, setshowmedia] = useState(false)
    const [showOptions, setShowOptions] = useState(true);
    const [showTrueFalse, setShowTrueFalse] = useState(false);
    const [showImage, setShowImage] = useState(false);
    const [optionA, setOptionA] = useState('')
    const [optionB, setOptionB] = useState('')
    const [optionC, setOptionC] = useState('')
    const [optionD, setOptionD] = useState('')

    const [imageQuestion, setimageQuestion] = useState(null)



    const [trueElement, setTrueElement] = useState(true)
    const [flaseElement, setFalseElement] = useState(false)

    const [isvideoupload, setvideoupload] = useState(false)


    const [isAudioUpload, setAudioupload] = useState(false)

    const [QuestionType, setQuestionType] = useState("text")
    const [optionType, setOptionType] = useState("text")




    const handleOptionsClick = () => {
        setShowOptions(true);
        setShowTrueFalse(false);
        setShowImage(false);
        setOptionType('text')
    };

    const handleTrueFalseClick = () => {
        setShowOptions(false);
        setShowTrueFalse(true);
        setShowImage(false);

        setOptionType('Boolean')

    };

    const handleImageClick = () => {
        setShowOptions(false);
        setShowTrueFalse(false);
        setShowImage(true);
        setOptionType('image')

    };



    const handleTextClick = () => {
        setShowText(true)
        setshowmedia(false)
        setvideoupload(false)
        setAudioupload(false)
        setQuestionType('text')
    }


    const handleMediaImage = () => {
        setShowText(false)
        setshowmedia(true)
        setvideoupload(false)
        setAudioupload(false)
        setQuestionType('image')



    }

    const handleMediaVideo = () => {
        setvideoupload(true)
        setshowmedia(false)
        setAudioupload(false)
        setShowText(false)
        setQuestionType('Video')


    }

    const handleMediaAudio = () => {
        setAudioupload(true)
        setvideoupload(false)
        setshowmedia(false)
        setQuestionType('Audio')


    }




    const onhandleClick = async (e) => {


        e.preventDefault();



        const formData = {
            'category': selectedItem,
            'statement': textareaValue,
            'question_type': QuestionType,
            'option_1': optionA,
            'option_2': optionB,
            'option_3': optionC,
            'option_4': optionD,
            'hint': valuTextareahint,
            'answer': answerElement,
            'option_type': optionType,
            'true_false_type': false,
            'question_media': imageQuestion
        }
        console.log(formData)




        const formDataToSend = new FormData();
        formDataToSend.append('category', formData.category);
        formDataToSend.append('statement', formData.statement);
        formDataToSend.append('question_type', formData.question_type);
        formDataToSend.append('option_1', formData.option_1);
        formDataToSend.append('option_2', formData.option_2);
        formDataToSend.append('option_3', formData.option_3);
        formDataToSend.append('option_4', formData.option_4);
        formDataToSend.append('hint', formData.hint);
        formDataToSend.append('answer', formData.answer);
        formDataToSend.append('option_type', formData.option_type);
        formDataToSend.append('true_false_type', formData.true_false_type);
        formDataToSend.append('question_media', formData.question_media);


        console.log(formDataToSend)





    
        try {
            const response = await fetch('https://freakapp.pythonanywhere.com/question/', {
                method: 'POST',
              
                body: formDataToSend

            });
            // Alert('successfully Category')
            console.log(response, 'successfully')

            //  window.location.reload(false);
            if (!response.ok) {
                throw new Error('Failed to create entry');
            }
            window.location.reload(false);

            // If successful, you can handle the response here
            console.log('successfully Category');
        } catch (error) {
            console.error('Error:', error);
        }
        // console.log(data)

    }




    const handleSelect = (event) => {
        const selectedIndex = event.target.value

        setSelectedItem(selectedIndex)
    };



    const handleanswer = (event) => {
        const optionvalue = parseInt(event.target.value)
        setanswer(optionvalue)
    }


    const TextOnchangeoptionA = (event) => {

        setOptionA(event.target.value)
    }

    const TextOnchangeoptionB = (event) => {
        setOptionB(event.target.value)
    }

    const TextOnchangeoptionC = (event) => {
        setOptionC(event.target.value)
    }

    const TextOnchangeoptionD = (event) => {
        setOptionD(event.target.value)
    }

    const TrueOption = (event) => {
        setTrueElement(event.target.value)
    }

    const FalseOption = (event) => {
        setFalseElement(event.target.value)
    }

    const handleFileChange = (e) => {
        const questionImage = e.target.files[0];
        setimageQuestion(questionImage)

    }

    const onhandleImageeOptionA = (e) => {


        const imageDataA = e.target.files[0];
    
        console.log(imageDataA)

        setOptionA(imageDataA)

    }

    const onhandleImageeOptionB = (e) => {
        const imageDataB = e.target.files[0];
        console.log(imageDataB)

        setOptionB(imageDataB)
    }


    const onhandleImageeOptionC = (e) => {
        const imageDataC = e.target.files[0];

        setOptionC(imageDataC)
    }


    const onhandleImageeOptionD = (e) => {
        const imageDataD = e.target.files[0];

        setOptionD(imageDataD)
    }


    return (

        <div className='bg-container-main' style={{ backgroundColor: ColorCode.bgColor }}>
            <div className='navElement'>
                <Navbar />
            </div>
           

            <div className='container-right-Element'>
            <div className='heading-container-Question'>
            <h1 className='Quizheading' style={{ color: ColorCode.borderColor }}>Questions for Quiz</h1>
            </div>
            <div class='import-and-Question-container'>
                <div className='QuestionContainer'>
                    <div className=''>
                        <h1 className='nameQuestions' style={{ color: ColorCode.borderColor }} >Create Question</h1>
                    </div>

                    <p className='nameElementQuestions' style={{ color: ColorCode.textColor }}>Category</p>
                    <select className='selectElement' onChange={handleSelect}>
                        <option >Select Main Category</option>

                        {
                            getCategorymethod.map((each) => (

                                <option>
                                    {each.name}
                                </option>


                            ))
                        }
                    </select>


                    {selectedItem && (
                        <div>
                            <img src={selectedItem.image} alt='' className='imagecategory' />
                            <span>{selectedItem.selectedOption}</span>
                        </div>
                    )}
                    {/* <img src='https://quizdemo.wrteam.in/images/category/1676898247.1697.png' alt='' className='imagecategory'/> */}
                    <p className='nameElementQuestions' style={{ color: ColorCode.textColor }}>Question Type</p>

                    <div className='buttonContainer'>
                        <button onClick={handleTextClick} className={showText ? 'selectedbuttonQuestions' : 'noneSelected'}>Text</button>
                        <button onClick={handleMediaImage} className={`${showmedia ? 'selectedbuttonQuestions' : 'noneSelected'} `} >Image</button>
                        <button onClick={handleMediaVideo} disabled={true} className={`${isvideoupload ? 'selectedbuttonQuestions' : 'noneSelected'} `} >Video</button>
                        <button onClick={handleMediaAudio}  disabled={true} className={`${isAudioUpload ? 'selectedbuttonQuestions' : 'noneSelected'} `} >Audio</button>


                        {/* <button onClick={handleImageClick} className={showImage ? 'selectedbutton' : 'noneSelected'}>Image</button> */}
                    </div>
                    {
                        showText && (
                            <div className='conatinerQuestionType'>
                                <p className='nameElementQuestions' style={{ color: ColorCode.textColor }}>Question</p>
                                <textarea
                                    placeholder=''
                                    className='textareaElement'
                                    id="textarea"
                                    value={textareaValue}
                                    onChange={handleChange}
                                    maxLength={maxCharacters}
                                    rows={4}
                                    cols={50}
                                />
                            </div>
                        )

                    }


                    {
                        showmedia && (
                            <div className='conatinerQuestionType'>
                                <p className='nameElementQuestions' style={{ color: ColorCode.textColor }}>Question</p>
                                <textarea
                                    placeholder=''
                                    className='textareaElement'
                                    id="textarea"
                                    value={textareaValue}
                                    onChange={handleChange}
                                    maxLength={maxCharacters}
                                    rows={4}
                                    cols={50}
                                    required
                                />
                                <p className='nameElementQuestions' style={{ color: ColorCode.textColor }}>{QuestionType} Type Question </p>
                                <input type="file" onChange={handleFileChange} accept="image/*" className='textInputnameImage' />
                            </div>
                        )
                    }


                    {
                        isvideoupload && (
                            <div className='conatinerQuestionType'>
                                <p className='nameElementQuestions' style={{ color: ColorCode.textColor }}>Question</p>
                                <textarea
                                    placeholder=''
                                    className='textareaElement'
                                    id="textarea"
                                    value={textareaValue}
                                    onChange={handleChange}
                                    maxLength={maxCharacters}
                                    rows={4}
                                    cols={50}
                                    required
                                />
                                <p className='nameElementQuestions' style={{ color: ColorCode.textColor }}>{QuestionType} Type Question </p>
                                <input type="file" onChange={handleFileChange} accept="image/*" className='textInputnameImage' />
                            </div>
                        )
                    }

                    {
                        isAudioUpload && (
                            <div className='conatinerQuestionType'>
                                <p className='nameElementQuestions' style={{ color: ColorCode.textColor }}>Question</p>
                                <textarea
                                    placeholder=''
                                    className='textareaElement'
                                    id="textarea"
                                    value={textareaValue}
                                    onChange={handleChange}
                                    maxLength={maxCharacters}
                                    rows={4}
                                    cols={50}
                                    required
                                />
                                <p className='nameElementQuestions' style={{ color: ColorCode.textColor }}>{QuestionType} Type Question </p>
                                <input type="file" onChange={handleFileChange} accept="image/*" className='textInputnameImage' />
                            </div>
                        )
                    }


                    <div>
                        <p className='nameElementQuestions' style={{ color: ColorCode.textColor }}>Option Type</p>
                        <div className='buttonContainer'>
                            <button onClick={handleOptionsClick} className={showOptions ? 'selectedbutton' : 'noneSelectedoptiontype'} >Text</button>
                            <button onClick={handleTrueFalseClick} className={`${showTrueFalse ? 'selectedbutton' : 'noneSelectedoptiontype'}`} disabled={true}>True/False</button>
                            <button onClick={handleImageClick} className={showImage ? 'selectedbutton' : 'noneSelectedoptiontype'}>Image</button>
                        </div>

                        <p className='nameElementQuestions' style={{ color: ColorCode.borderColor }}>Options </p>
                        {showOptions && (
                            <div className='containerOptions'>
                                <div className='eachOption'>
                                    <p className='nameoptionElement' style={{ color: ColorCode.textColor }}>A</p>
                                    <input type="text" placeholder="Option 1" className='textinputElement' required onChange={TextOnchangeoptionA} value={optionA}
                                    />
                                </div>
                                <div className='eachOption'>
                                    <p className='nameoptionElement' style={{ color: ColorCode.textColor }}>B</p>
                                    <input type="text" placeholder="Option 2" className='textinputElement' required onChange={TextOnchangeoptionB} value={optionB}
                                    />
                                </div>
                                <div className='eachOption'>
                                    <p className='nameoptionElement' style={{ color: ColorCode.textColor }}>C</p>

                                    <input type="text" placeholder="Option 3" className='textinputElement' required onChange={TextOnchangeoptionC} value={optionC}
                                    />
                                </div>
                                <div className='eachOption'>
                                    <p className='nameoptionElement' style={{ color: ColorCode.textColor }}>D</p>

                                    <input type="text" placeholder="Option 4" className='textinputElement' required onChange={TextOnchangeoptionD} value={optionD} />
                                </div>
                            </div>
                        )}

                        {showTrueFalse && (
                            <div className='containerOptions'>
                                <div className='eachOption'>
                                    <p className='nameoptionElement' style={{ color: ColorCode.textColor }}>A</p>
                                    <input type='text' className='textinputElement' placeholder="True" defaultValue={true} onChange={TrueOption} value={trueElement} />
                                </div>
                                <div className='eachOption'>
                                    <p className='nameoptionElement' style={{ color: ColorCode.textColor }}>B</p>
                                    <input type="text" className='textinputElement' placeholder="False" defaultValue={false} onChange={FalseOption} value={flaseElement} />
                                </div>
                            </div>
                        )}

                        {showImage && (
                            <div className='containerOptions'>
                                <div className='eachOption'>
                                    <p className='nameoptionElement' style={{ color: ColorCode.textColor }}>A</p>
                                    <input type="file" className='textinputElement'  style={{ color: ColorCode.textColor }}onChange={onhandleImageeOptionA} />
                                </div>
                                <div className='eachOption'>
                                    <p className='nameoptionElement' style={{ color: ColorCode.textColor }} >B</p>
                                    <input type="file" className='textinputElement' style={{ color: ColorCode.textColor }} onChange={onhandleImageeOptionB} />
                                </div>
                                <div className='eachOption'>
                                    <p className='nameoptionElement' style={{ color: ColorCode.textColor }} >C</p>
                                    <input type="file" className='textinputElement' style={{ color: ColorCode.textColor }} onChange={onhandleImageeOptionC} />
                                </div>
                                <div className='eachOption'>
                                    <p className='nameoptionElement' style={{ color: ColorCode.textColor }} >D</p>
                                    <input type="file" className='textinputElement' style={{ color: ColorCode.textColor }} onChange={onhandleImageeOptionD} />
                                </div>
                            </div>
                        )}



                    </div>
                    <div>
                        <p className='nameElementQuestions' style={{ color: ColorCode.textColor }}>Answer</p>
                        {
                            showOptions &&
                            <select className='selectElement' onChange={handleanswer}>
                                <option>Select Right Answer</option>

                                {
                                    Answeroption.map((each) => (
                                        <option>{each.correct}</option>

                                    ))
                                }
                            </select>

                        }

                        {
                            showTrueFalse && <select className='selectElement' onChange={handleanswer}>
                                <option>Select Right Answer</option>

                                {
                                    AnsweroptiontrueFalse.map((each) => (
                                        <option>{each.selectedOption}</option>

                                    ))
                                }
                            </select>

                        }

                        {
                            showImage && <select className='selectElement' onChange={handleanswer}>
                                <option>Select Right Answer</option>

                                {
                                    Answeroption.map((each) => (
                                        <option>{each.correct}</option>

                                    ))
                                }
                            </select>

                        }




                    </div>

                    <p className='nameElementQuestions' style={{ color: ColorCode.textColor }}> Hint
                    </p>
                    <textarea
                        placeholder=''
                        className='textareaElement'
                        id="textarea"
                        value={valuTextareahint}
                        onChange={handleChangetexthint}
                        maxLength={maxCharacters}
                        rows={4}
                        cols={50}
                    />
                    <div className='buttoncontainer'>
                        <button type="button" class="text-button text-gray-900 hover:text-white border border-gray-1200 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800" onClick={onhandleClick} style={{ color: ColorCode.textColor }}>Create Now</button>
                    </div>
                </div>

                <div className='importQuestions'>
                    <h1 className='importQsheading' style={{ color: ColorCode.textColor }}>Import Questions</h1>
                    <p className='csvQuestions' style={{ color: ColorCode.textColor }}>CSV Questions file</p>
                    <input type="file" onChange={handleFileChange} disabled={true} accept="*/*" className='textInputnameImage' />
                    <div className='buttoncontainerQuiz'>
                        <button type="button"  disabled={true} class="text-button text-gray-900 hover:text-white border border-orange-1200 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-orange-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800" onClick={onhandleClick} style={{ color: ColorCode.textColor }}>Upload CSV file</button>
                    </div>
                </div>
                </div>
            </div>
        </div>

        // <div>index</div>
    )
}

export default QuestionsCategory









