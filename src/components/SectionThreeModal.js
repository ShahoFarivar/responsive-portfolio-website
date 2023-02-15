import { useState } from 'react'

//styles
import './SectionThreeModal.css'

//components
import closeButton from '../images/close-button.png'

export default function SectionThreeModal({setModalSectionThree}){
    const [modalSection1, setModalSection1] = useState(false)
    const [modalSection2, setModalSection2] = useState(false)
    const [modalSection3, setModalSection3] = useState(false)
    const [modalSection4, setModalSection4] = useState(false)

    const handleModalSection1 = () => {
        setModalSection1(true)
    }
    
    const handleModalSection2 = () => {
        setModalSection2(true)
    }
    
    const handleModalSection3 = () => {
        setModalSection3(true)
    }

    const handleModalSection4 = () => {
        setModalSection4(true)
    }

    return(
        <div className='section-three-modal'>
            <img src={closeButton} alt="close-button" className="close-btn" onClick={()=>setModalSectionThree(false)}/>
            {modalSection1 &&
                <div className="sub-section-modal">
                    <img src={closeButton} alt="close-button-subsection" className="close-sub-section-btn" onClick={()=>setModalSection1(false)}/>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-6 left-section">
                            </div>
                            <div className="col-12 col-sm-6 right-section">
                                <p>
                                    IMAGE PROJECT
                                </p>
                                <ul>
                                    <li><i class="fa fa-user"></i><span className='w-700'>Client :</span><span> GRAPHICRIVER</span></li>
                                    <li><i class="fa fa-calendar"></i><span className='w-700'>Start Date</span><span> 02/09/2022</span></li>
                                    <li><i class="fa fa-calendar-check"></i><span className='w-700'> End Date :</span><span> 02/08/2023</span></li>
                                    <li><i class="fa fa-cogs"></i><span className='w-700'>Used Technologies :</span><span> ADOBE PHOTOSHOP, GIMP</span></li>
                                </ul>
                                <hr />
                                <button><span>PREVIEW</span><i class="fa fa-external-link"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {modalSection2 &&
                <div className="sub-section-modal">
                    <img src={closeButton} alt="close-button-subsection" className="close-sub-section-btn" onClick={()=>setModalSection2(false)}/>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-6 left-section">
                            </div>
                            <div className="col-12 col-sm-6 right-section">
                                <p>
                                    IMAGE PROJECT
                                </p>
                                <ul>
                                    <li><i class="fa fa-user"></i><span className='w-700'>Client :</span><span> GRAPHICRIVER</span></li>
                                    <li><i class="fa fa-calendar"></i><span className='w-700'>Start Date</span><span> 02/09/2022</span></li>
                                    <li><i class="fa fa-calendar-check"></i><span className='w-700'> End Date :</span><span> 02/08/2023</span></li>
                                    <li><i class="fa fa-cogs"></i><span className='w-700'>Used Technologies :</span><span> ADOBE PHOTOSHOP, GIMP</span></li>
                                </ul>
                                <hr />
                                <button><span>PREVIEW</span><i class="fa fa-external-link"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {modalSection3 &&
                <div className="sub-section-modal">
                    <img src={closeButton} alt="close-button-subsection" className="close-sub-section-btn" onClick={()=>setModalSection3(false)}/>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-6 left-section">
                            </div>
                            <div className="col-12 col-sm-6 right-section">
                                <p>
                                    IMAGE PROJECT
                                </p>
                                <ul>
                                    <li><i class="fa fa-user"></i><span className='w-700'>Client :</span><span> GRAPHICRIVER</span></li>
                                    <li><i class="fa fa-calendar"></i><span className='w-700'>Start Date</span><span> 02/09/2022</span></li>
                                    <li><i class="fa fa-calendar-check"></i><span className='w-700'> End Date :</span><span> 02/08/2023</span></li>
                                    <li><i class="fa fa-cogs"></i><span className='w-700'>Used Technologies :</span><span> ADOBE PHOTOSHOP, GIMP</span></li>
                                </ul>
                                <hr />
                                <button><span>PREVIEW</span><i class="fa fa-external-link"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {modalSection4 &&
                <div className="sub-section-modal">
                    <img src={closeButton} alt="close-button-subsection" className="close-sub-section-btn" onClick={()=>setModalSection4(false)}/>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-6 left-section">
                            </div>
                            <div className="col-12 col-sm-6 right-section">
                                <p>
                                    IMAGE PROJECT
                                </p>
                                <ul>
                                    <li><i class="fa fa-user"></i><span className='w-700'>Client :</span><span> GRAPHICRIVER</span></li>
                                    <li><i class="fa fa-calendar"></i><span className='w-700'>Start Date</span><span> 02/09/2022</span></li>
                                    <li><i class="fa fa-calendar-check"></i><span className='w-700'> End Date :</span><span> 02/08/2023</span></li>
                                    <li><i class="fa fa-cogs"></i><span className='w-700'>Used Technologies :</span><span> ADOBE PHOTOSHOP, GIMP</span></li>
                                </ul>
                                <hr />
                                <button><span>PREVIEW</span><i class="fa fa-external-link"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            }      
            <h2 className='modal-title'>
                <span className='first-text'>MY </span>
                <span className='spacer'></span>
                <span className='last-text'>PORTFOLIO </span>
            </h2>
            <div className="divider">
                <span className="divider-line">
                </span>
                <span className="fa fa-vcard" aria-hidden="true"></span>
                <span className="divider-line">
                </span>
            </div>
            <div className="container content-wrapper ">
                <div className="row portfolio-row ">
                    <div className="col-12 col-md-5  m-3 portfolio-item portfolio-item-1" onClick={()=>handleModalSection1()}>
                        1
                    </div>
                    <div className="col-12 col-md-5  m-3 portfolio-item portfolio-item-2" onClick={()=>handleModalSection2()}>
                        2
                    </div>
                    <div className="col-12 col-md-5  m-3 portfolio-item portfolio-item-3" onClick={()=>handleModalSection3()}>
                        3
                    </div>
                    <div className="col-12 col-md-5  m-3 portfolio-item portfolio-item-4" onClick={()=>handleModalSection4()}>
                        4
                    </div>
                </div>
            </div> 
        </div>
    )
}