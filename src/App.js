import { useState } from 'react';

//components
import Typewrite from './components/Typewriter'
import SectionTwoModal from './components/SectionTwoModal';
import SectionThreeModal from './components/SectionThreeModal';
import SectionFourModal from './components/SectionFourModal';
import ownerImage from './images/shaho-farivar.jpg'

//styles
import './App.css';

function App() {
  const [modalSectionTwo, setModalSectionTwo] = useState(false)
  const [modalSectionThree, setModalSectionThree] = useState(false)
  const [modalSectionFour, setModalSectionFour] = useState(false)

  const handleModalSectionTwo = () => {
    setModalSectionTwo(true)
  }

  const handleModalSectionThree = () => {
    setModalSectionThree(true)
  }

  const handleModalSectionFour = () => {
    setModalSectionFour(true)
  }

  return (
    <div className="App">
      <div className='container-xxl main-container overflow-hidden'>
        <div className='row'>
          <div className='col-lg-4 d-none d-lg-block d-xl-block d-xxl-block' >
            <img src={ownerImage} alt="cover" className='owner-image'/>
          </div>
          <div className='col-12 col-lg-8  container-fluid content-container'>   
              <div className="modal-wrapper">
                {modalSectionTwo &&
                  <SectionTwoModal setModalSectionTwo={setModalSectionTwo} />
                }
                {modalSectionThree &&
                  <SectionThreeModal setModalSectionThree={setModalSectionThree} />
                }
                {modalSectionFour &&
                  <SectionFourModal setModalSectionFour={setModalSectionFour} />
                }
              </div>
              <div className="row upper-section ">
                <div className="col-12 col-md-6 setion-one ">
                  <div className="section-wrapper-first w-100 h-100 d-flex flex-column justify-content-center align-items-center">
                      <p className='greetings'>Hi there! I'm </p>
                      <p className='owner-name'>Shaho Farivar</p>  
                      <Typewrite />
                  </div>
                </div>
                <div className="col-12 col-md-6 section-two" onClick={()=>handleModalSectionTwo()}>
                  <div className="section-wrapper-other w-100 h-100 d-flex justify-content-center align-items-center">
                    <span className='first-text'>About </span>
                    <span className='spacer'></span>
                    <span className='last-text'>me</span>
                  </div>
                </div>
              </div>
              <div className="row lower-section ">  
                <div className="col-12 col-md-6 section-three" onClick={()=>handleModalSectionThree()}>
                  <div className="section-wrapper-other w-100 h-100 d-flex justify-content-center align-items-center">
                    <span className='first-text'>My </span>
                    <span className='spacer'></span>
                    <span className='last-text'>portfolio</span>
                  </div>
                </div>
                <div className="col-12 col-md-6 section-four" onClick={()=>handleModalSectionFour()}>
                  <div className="section-wrapper-other w-100 h-100 d-flex justify-content-center align-items-center">
                    <span className='first-text'>Get </span>
                    <span className='spacer'></span>
                    <span className='last-text'>in touch</span>
                  </div>
                </div>
              </div>
           
          </div>
        </div>
      </div>
    </div> 
  );
}

export default App;
