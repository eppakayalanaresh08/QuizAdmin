import React, { useState } from 'react';
import Navbar from '../Navbar'
import './index.css'

import { ColorCode } from '../ColorCode';

const items = [
    { id: 101, selectedOption: 'Sports',image:'https://quizdemo.wrteam.in/images/category/1676898247.1697.png' },
    { id: 102, selectedOption: 'Entertainment' ,image:'https://quizdemo.wrteam.in/images/category/1676895620.2716.png'},
    { id: 103, selectedOption: 'Entertainment',image:'https://quizdemo.wrteam.in/images/category/1676884941.9042.png' },
    { id: 104, selectedOption: 'General Knowledge' ,image:'https://quizdemo.wrteam.in/images/category/1676895649.6293.png'},
    // { id: 105, selectedOption: 'Matrices' ,image:'https://quizdemo.wrteam.in/images/category/1676898247.1697.png'},
    // { id: 106, selectedOption: 'Scientific',image:'https://quizdemo.wrteam.in/images/category/1676898247.1697.png' }
];

const Answeroption = [
    { id: 101, selectedOption: 'A' },
    { id: 102, selectedOption: 'B' },
    { id: 103, selectedOption: 'C' },
    { id: 104, selectedOption: 'D' },


]


const AnsweroptiontrueFalse=[
    { id: 101, selectedOption: 'A' },
    { id: 102, selectedOption: 'B' },
  
    
]





function QuestionsCategory() {

 
    const [textareaValue, setTextareaValue] = useState('');
    const [selectedItem, setSelectedItem] = useState(null);
    const [valuTextareahint,setvaluTextareahint]=useState('')
    const [answerElement,setanswer]=useState('')




    const maxCharacters = 100;

    const handleChange = (event) => {
        const newValue = event.target.value;

        if (newValue.length <= maxCharacters) {
            setTextareaValue(newValue);
        }
    };
    const handleChangetexthint=(event)=>{
           const newtext=event.target.value
           const newValue = event.target.value;

        if (newValue.length <= maxCharacters) {
            setvaluTextareahint(newtext)

        }
    }

    const handleFileChange = () => {
    }
    const [showText,setShowText]=useState(true)
    const [showmedia,setshowmedia]=useState(false)
    const [showOptions, setShowOptions] = useState(true);
    const [showTrueFalse, setShowTrueFalse] = useState(false);
    const [showImage, setShowImage] = useState(false);
    // const handleChange=()=>{
            const [optionA,setOptionA]=useState('')
            const [optionB,setOptionB]=useState('')
            const [optionC,setOptionC]=useState('')
            const [optionD,setOptionD]=useState('')
            const [trueElement,setTrueElement]=useState(true)
            const [flaseElement,setFalseElement]=useState(false)

            const [isvideoupload,setvideoupload]=useState(false)


            const [isAudioUpload,setAudioupload]=useState(false)

            const [QuestionType,setQuestionType]=useState("Text")



    const handleOptionsClick = () => {
        setShowOptions(true);
        setShowTrueFalse(false);
        setShowImage(false);
    };

    const handleTrueFalseClick = () => {
        setShowOptions(false);
        setShowTrueFalse(true);
    };

    const handleImageClick = () => {
        setShowOptions(false);
        setShowTrueFalse(false);
        setShowImage(true);
        
    };

    
// Question TypeButtons

    const handleTextClick=()=>{
        setShowText(true)
        setshowmedia(false)
        setvideoupload(false)
        setAudioupload(false)
        setQuestionType('Text')
    }

   
    const handleMediaImage=()=>{
        setShowText(false)
        setshowmedia(true)
        setvideoupload(false)
        setAudioupload(false)
        setQuestionType('Image')



    }

    const handleMediaVideo=()=>{
        setvideoupload(true)
        setshowmedia(false)
        setAudioupload(false)
        setShowText(false)
        setQuestionType('Video')


    }

    const handleMediaAudio=()=>{
        setAudioupload(true)
        setvideoupload(false)
        setshowmedia(false)
        setQuestionType('Audio')


    }



    
    const  onhandleClick=()=>{
        const data={
            'category':selectedItem,
            'statement':textareaValue,
            'question_type':QuestionType,

            'option_1':optionA,
            'option_2':optionB,
            'option_3':optionC,
            'option_4':optionD,
            // 'option_true':trueElement,
            // 'option_false':flaseElement,
            'hint':valuTextareahint,
            'answer':answerElement,

            // 'OptionType'

        }
        console.log(data)

    }




    const handleSelect = (event) => {
        const selectedIndex=event.target.value
    //   const selectedIndex = event.target.selectedIndex;
    //  let datacategory=DataQuestion.category
    //   datacategory=event.target.value
    //   console.log(DataQuestion)

    
    //   setSelectedItem(items[selectedIndex - 1]); // -1 to account for the "Select Main Category" option
    setSelectedItem(selectedIndex)
    };


 
    const handleanswer=(event)=>{
        setanswer(event.target.value)
    }


    const TextOnchangeoptionA=(event)=>{
      
        setOptionA(event.target.value)
    }

    const TextOnchangeoptionB=(event)=>{
        setOptionB(event.target.value)
    }

    const TextOnchangeoptionC=(event)=>{
        setOptionC(event.target.value)
    }

    const TextOnchangeoptionD=(event)=>{
        setOptionD(event.target.value)
    }

    const TrueOption=(event)=>{
        setTrueElement(event.target.value)
    }

    const FalseOption=(event)=>{
        setFalseElement(event.target.value)
    }
    

    return (

        <div className='bg-container-main' style={{backgroundColor:ColorCode.bgColor}}>
            <div className='navElement'>
                <Navbar />
            </div>
            <div className='container-right-Element'>
            <div className='QuestionContainer'>
                <h1 className='Quizheading' style={{color:ColorCode.borderColor}}>Questions for Quiz</h1>
                <div className=''>
                    <h1 className='nameQuestions' style={{color:ColorCode.borderColor}} >Create Question</h1>
                </div>
              
                <p className='nameElementQuestions' style={{color:ColorCode.textColor}}>Category</p>
                <select className='selectElement' onChange={handleSelect}>
                    <option >Select Main Category</option>

                    {
                        items.map((each) => (
                              
                                <option>
                {each.selectedOption}
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
                <p className='nameElementQuestions' style={{color:ColorCode.textColor}}>Question Type</p>

                <div className='buttonContainer'>
                        <button onClick={handleTextClick} className={showText ? 'selectedbuttonQuestions' : 'noneSelected'}>Text</button>
                        <button onClick={handleMediaImage} className={`${showmedia? 'selectedbuttonQuestions' : 'noneSelected'} `} >Image</button>
                        <button onClick={handleMediaVideo} className={`${isvideoupload? 'selectedbuttonQuestions' : 'noneSelected'} `} >Video</button>
                        <button onClick={handleMediaAudio} className={`${isAudioUpload? 'selectedbuttonQuestions' : 'noneSelected'} `} >Audio</button>


                        {/* <button onClick={handleImageClick} className={showImage ? 'selectedbutton' : 'noneSelected'}>Image</button> */}
                    </div>
                 {
                    showText&&(
                        <div className='conatinerQuestionType'>
                        <p className='nameElementQuestions' style={{color:ColorCode.textColor}}>Question</p>
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
                    <p className='nameElementQuestions' style={{color:ColorCode.textColor}}>Question</p>
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
                    <p className='nameElementQuestions' style={{color:ColorCode.textColor}}>{QuestionType} Type Question </p>
                    <input type="file" onChange={handleFileChange} accept="image/*" className='textInputnameImage' />
                 </div>  
                )
             }  


{
                isvideoupload && (
                    <div className='conatinerQuestionType'>
                    <p className='nameElementQuestions' style={{color:ColorCode.textColor}}>Question</p>
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
                    <p className='nameElementQuestions' style={{color:ColorCode.textColor}}>{QuestionType} Type Question </p>
                    <input type="file" onChange={handleFileChange} accept="image/*" className='textInputnameImage' />
                 </div>  
                )
             }  

{
                isAudioUpload && (
                    <div className='conatinerQuestionType'>
                    <p className='nameElementQuestions' style={{color:ColorCode.textColor}}>Question</p>
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
                    <p className='nameElementQuestions' style={{color:ColorCode.textColor}}>{QuestionType} Type Question </p>
                    <input type="file" onChange={handleFileChange} accept="image/*" className='textInputnameImage' />
                 </div>  
                )
             } 


                <div>
                    <p className='nameElementQuestions' style={{color:ColorCode.textColor}}>Option Type</p>
                    <div className='buttonContainer'>
                        <button onClick={handleOptionsClick} className={showOptions ? 'selectedbutton' : 'noneSelected'} >Text</button>
                        <button onClick={handleTrueFalseClick} className={`${showTrueFalse ? 'selectedbutton' : 'noneSelected'} buttontrue`} >True/False</button>
                        <button onClick={handleImageClick} className={showImage ? 'selectedbutton' : 'noneSelected'}>Image</button>
                    </div>

                    <p className='nameElementQuestions' style={{color:ColorCode.borderColor}}>Options </p>
                    {showOptions && (
                        <div className='containerOptions'>
                            <div className='eachOption'>
                                <p className='nameoptionElement' style={{color:ColorCode.textColor}}>A</p>
                                <input type="text" placeholder="Option 1" className='textinputElement'   required onChange={TextOnchangeoptionA} value={optionA}
/>
                            </div>
                            <div className='eachOption'>
                                <p className='nameoptionElement' style={{color:ColorCode.textColor}}>B</p>
                                <input type="text" placeholder="Option 2" className='textinputElement'   required onChange={TextOnchangeoptionB} value={optionB}
 />
                            </div>
                            <div className='eachOption'>
                                <p className='nameoptionElement' style={{color:ColorCode.textColor}}>C</p>

                                <input type="text" placeholder="Option 3" className='textinputElement'   required onChange={TextOnchangeoptionC} value={optionC}
 />
                            </div>
                            <div className='eachOption'>
                                <p className='nameoptionElement' style={{color:ColorCode.textColor}}>D</p>

                                <input type="text" placeholder="Option 4" className='textinputElement'  required    onChange={TextOnchangeoptionD}     value={optionD}         />
                            </div>
                        </div>
                    )}

                    {showTrueFalse && (
                        <div className='containerOptions'>
                            <div className='eachOption'>
                                <p className='nameoptionElement' style={{color:ColorCode.textColor}}>A</p>
                                <input type='text' className='textinputElement' placeholder="True"  defaultValue={true}  onChange={TrueOption} value={trueElement}/>
                            </div>
                            <div className='eachOption'>
                                <p className='nameoptionElement' style={{color:ColorCode.textColor}}>B</p>
                                <input type="text" className='textinputElement' placeholder="False" defaultValue={false} onChange={FalseOption} value={flaseElement}/>
                            </div>
                        </div>
                    )}

                    {showImage && (
                        <div className='containerOptions'>
                            <div className='eachOption'>
                                <p className='nameoptionElement' style={{color:ColorCode.textColor}}>A</p>
                                <input type="file" className='textinputElement' />
                            </div>
                            <div className='eachOption'>
                                <p className='nameoptionElement' style={{color:ColorCode.textColor}}>B</p>
                                <input type="file" className='textinputElement' />
                            </div>
                            <div className='eachOption'>
                                <p className='nameoptionElement' style={{color:ColorCode.textColor}}>C</p>
                                <input type="file" className='textinputElement' />
                            </div>
                            <div className='eachOption'>
                                <p className='nameoptionElement' style={{color:ColorCode.textColor}}>D</p>
                                <input type="file" className='textinputElement' />
                            </div>
                        </div>
                    )}



                </div>
                <div>
                    <p className='nameElementQuestions' style={{color:ColorCode.textColor}}>Answer</p>
                    {
                        showOptions&&   
                        <select className='selectElement' onChange={handleanswer}>
                        <option>Select Right Answer</option>

                        {
                            Answeroption.map((each) => (
                                <option>{each.selectedOption}</option>

                            ))
                        }
                    </select>

                    }

{
                        showTrueFalse&&   <select className='selectElement' onChange={handleanswer}>
                        <option>Select Right Answer</option>

                        {
                            AnsweroptiontrueFalse.map((each) => (
                                <option>{each.selectedOption}</option>

                            ))
                        }
                    </select>

                    }

{
                        showImage&&   <select className='selectElement' onChange={handleanswer}>
                        <option>Select Right Answer</option>

                        {
                            Answeroption.map((each) => (
                                <option>{each.selectedOption}</option>

                            ))
                        }
                    </select>

                    }


                    
                 
                </div>

                <p className='nameElementQuestions' style={{color:ColorCode.textColor}}> Hint
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
                    <button type="button" class="text-button text-gray-900 hover:text-white border border-gray-1200 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800" onClick={onhandleClick} style={{color:ColorCode.textColor}}>Create Now</button>
                </div>
            </div>    

            <div className='importQuestions'>
                <h1 className='importQsheading' style={{color:ColorCode.textColor}}>Import Questions</h1>
                <p className='csvQuestions'style={{color:ColorCode.textColor}}>CSV Questions file</p>
                    <input type="file" onChange={handleFileChange} accept="*/*" className='textInputnameImage' />
                    <div className='buttoncontainerQuiz'>
                    <button type="button" class="text-button text-gray-900 hover:text-white border border-orange-1200 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-orange-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800" onClick={onhandleClick} style={{color:ColorCode.textColor}}>Upload CSV file</button>
                </div>
            </div>
           
            </div>
        </div>

        // <div>index</div>
    )
}

export default QuestionsCategory















// import React, { useState } from 'react';
// import Navbar from '../Navbar'
// import './index.css'

// const items = [
//     { id: 101, selectedOption: 'Football' },
//     { id: 102, selectedOption: 'Matrices' },
//     { id: 103, selectedOption: 'Scientific' }
// ];

// const Answeroption = [
//     { id: 101, selectedOption: 'A' },
//     { id: 102, selectedOption: 'B' },
//     { id: 103, selectedOption: 'C' },
//     { id: 104, selectedOption: 'D' },
// ];

// function MainCategory() {
//     const [category, setCategory] = useState('');
//     const [question, setQuestion] = useState('');
//     const [hint, setHint] = useState('');
//     const [selectedAnswer, setSelectedAnswer] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');
//     const maxCharacters = 100;

//     const handleCategoryChange = (event) => {
//         setCategory(event.target.value);
//     };

//     const handleQuestionChange = (event) => {
//         setQuestion(event.target.value);
//     };

//     const handleHintChange = (event) => {
//         setHint(event.target.value);
//     };

//     const handleAnswerChange = (event) => {
//         setSelectedAnswer(event.target.value);
//     };

//     const onhandleClick = () => {
//         if (!category || !question || !selectedAnswer || !hint) {
//             setErrorMessage('Please fill in all required fields.');
//         } else {
//             setErrorMessage('');
//             // Proceed with creating the question
//             console.log('Question created!');
//         }
//     };

//     return (
//         <div className='bg-container-main'>
//             <div className='navElement'>
//                 <Navbar />
//             </div>
//             <div className='QuestionContainer'>
//                 <h1 className='Quizheading'>Questions for Quiz</h1>
//                 <div>
//                     <h1 className='nameQuestions'>Create Question</h1>
//                 </div>
              
//                 <p className='nameElementQuestions'>Category</p>
//                 <select className='selectElement' value={category} onChange={handleCategoryChange}>
//                     <option disabled>Select Main Category</option>
//                     {items.map((each) => (
//                         <option key={each.id}>{each.selectedOption}</option>
//                     ))}
//                 </select>

//                 <p className='nameElementQuestions'>Question</p>
//                 <textarea
//                     placeholder=''
//                     className='textareaElement'
//                     value={question}
//                     onChange={handleQuestionChange}
//                     maxLength={maxCharacters}
//                     rows={4} 
//                     cols={50} 
//                 />

//                 <p className='nameElementQuestions'>Image for Question </p>
//                 <input type="file" accept="image/*" className='textInputnameImage' />

//                 <div>
//                     <p className='nameElementQuestions'>Question Type</p>
//                     <div className='buttonContainer'>
//                         <button className='selectedbutton'>Options</button>
//                         <button className='noneSelected buttontrue'>True/False</button>
//                         <button className='noneSelected'>Image</button>
//                     </div>

//                     <p className='nameElementQuestions'>Options </p>
//                     <div className='containerOptions'>
//                         <div className='eachOption'>
//                             <p className='nameoptionElement'>A</p>
//                             <input type="text" defaultValue="Option 1" className='textinputElement' />
//                         </div>
//                         <div className='eachOption'>
//                             <p className='nameoptionElement'>B</p>
//                             <input type="text" defaultValue="Option 2" className='textinputElement' />
//                         </div>
//                         <div className='eachOption'>
//                             <p className='nameoptionElement'>C</p>
//                             <input type="text" defaultValue="Option 3" className='textinputElement' />
//                         </div>
//                         <div className='eachOption'>
//                             <p className='nameoptionElement'>D</p>
//                             <input type="text" defaultValue="Option 4" className='textinputElement' />
//                         </div>
//                     </div>
//                 </div>
                
//                 <div>
//                     <p className='nameElementQuestions'>Answer</p>
//                     <select className='selectElement' value={selectedAnswer} onChange={handleAnswerChange}>
//                         <option disabled>Select Right Answer</option>
//                         {Answeroption.map((each) => (
//                             <option key={each.id}>{each.selectedOption}</option>
//                         ))}
//                     </select>
//                 </div>

//                 <p className='nameElementQuestions'>Hint</p>
//                 <textarea
//                     placeholder=''
//                     className='textareaElement'
//                     value={hint}
//                     onChange={handleHintChange}
//                     maxLength={maxCharacters}
//                     rows={4}
//                     cols={50} 
//                 />

//                 <p className='errorMessage'>{errorMessage}</p>

//                 <div className='buttoncontainer'>
//                     <button type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800" onClick={onhandleClick}>Create Now</button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default MainCategory;
