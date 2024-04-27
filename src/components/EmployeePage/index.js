import React ,{useState}from 'react'
import Navbar from '../Navbar'

import { ColorCode } from '../ColorCode'
import './index.css'


function EmployeePage() {
    const [isPopupOpen, setPopupOpen] = useState(false);

    const openClickAddEmpolyee = () => {
        setPopupOpen(true);
      }
    
    
    
      const closePopup = () => {
        setPopupOpen(false);
    
      };

  return (
    <div style={{backgroundColor:ColorCode.bgColor}} className='bg-container'>
        <div className='navbar-container'>
         <Navbar/>
         </div>
         <div className='main-container'>
           <button className='button-card-add' onClick={openClickAddEmpolyee}>
           <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill={ColorCode.cardText} class="bi bi-person-plus" viewBox="0 0 16 16">
  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
  <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5"/>
</svg>
            <button style={{color:ColorCode.textColor}}>Add Empolyee</button>
           </button>
         </div>
         {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <div className='headingwalletcontainer'>
              <h1 className='headingnameWallet'>Empolyee</h1>
            </div>
            <div className='inputContainerbg'>
              <div className='inputContainer'>
                <h2 className='addheading'>Add Empolyee</h2>
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

    </div>
  )
}

export default EmployeePage