import './SectionTwoModal.css'
import closeButton from '../images/close-button.png'
import ownerImageModal from '../images/shaho-farivar.jpg'
import { useState } from 'react'

export default function SectionTwoModal({setModalSectionTwo}){
    const [expSection, setExpSection] = useState(true)
    const [eduSection, setEduSection] = useState(false)
    const [skillsSection, setSkillsSection] = useState(false)

    const handleExpSection = () => {
        setExpSection(true)
        setEduSection(false)
        setSkillsSection(false)
    }

    const handleEduSection = () => {
        setExpSection(false)
        setEduSection(true)
        setSkillsSection(false)
    }

    const handleSkillsSection = () => {
        setExpSection(false)
        setEduSection(false)
        setSkillsSection(true)
    }


    return(
        <div className='section-two-modal'>
            <img src={closeButton} alt="close-button" className="close-btn" onClick={()=>setModalSectionTwo(false)}/>       
            <h2 className='modal-title'>
                <span className='first-text'>ABOUT </span>
                <span className='spacer'></span>
                <span className='last-text'>ME</span>
            </h2>
            <div className="divider">
                <span className="divider-line">
                </span>
                <span className="fa fa-vcard" aria-hidden="true"></span>
                <span className="divider-line">
                </span>
            </div>
            <div className="content content-wrapper">
                <div className="row">  
                    <div className="modal-owner-image col-sm-12 col-md-4 d-lg-none">
                        {/* <img src={ownerImageModal} alt="shaho-farivar" className='d-sm-block d-lg-none w-100' /> */}
                        <div className='img-fluid owner-image-modal'  style={{backgroundImage: `url(${ownerImageModal})`}}></div>
                    </div> 
                    <div className="modal-data col-sm-12 col-md-8 col-lg-12">
                            <div className="row personal-info-wrapper">
                                <p className='col-12 personal-info-title'><i className="fa fa-user"></i> PERSONAL INFO</p> 
                                <div className="col-12 personal-info-desc">
                                    <p>
                                        I'm a Freelance Web Designer & Developer based in Moscow, Russia, I have serious passion for UI effects, animations and creating intuitive, with over a decade of experience.
                                    </p>
                                </div>
                                <div className="col-12 personal-info-items-wrapper w-100">
                                    <div className="col-12 col-lg-6 personal-info-items-1">
                                        <ul>
                                            <li><span>First Name:</span>Shaho</li>
                                            <li><span>Last Name:</span>Farivar</li>
                                            <li><span>Date of birth</span>1990</li>
                                            <li><span>Nationality:</span>Iran</li>
                                            <li><span>Freelance: </span>Available</li>
                                        </ul>
                                    </div>
                                    <div className="col-12 col-lg-6 personal-info-items-2">
                                        <ul>
                                            <li><span>Phone: </span>+012 34 56 78</li>
                                            <li><span>Address:</span>Iran</li>
                                            <li><span>Email:</span>you@yourwebsite.com</li>
                                            <li><span>Spoken Langages:</span>English - German</li>
                                            <li><span>Skype:</span>id</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12 personal-info-btn-wrapper w-100 justify-content-around">
                                    <button className='col-12 col-md-6  download-resume-btn'>DOWNLOAD RESUME <i className="fa fa-file-pdf"></i></button>
                                    <button className='col-12 col-md-5  my-blog-btn'>MY BLOG <i className="fa fa-edit"></i></button>
                                </div>
                            </div>
                            <div className="row abilities-section d-sm-block d-md-none  ">
                                <div className="col-12 ability-wrapper ability-1">
                                    <div className="header text-center">
                                        <p><i className="fa fa-briefcase"></i>  EXPERIENCE</p>
                                    </div>
                                    <div className="ability-content">
                                        <div className="ability-info-wrapper">
                                            <div className="ability-info-header">
                                                <p>
                                                    <span>WEB DESIGNER</span> - ENVATO
                                                </p>
                                            </div>
                                            <div className="ability-info-year">
                                                <p>
                                                    <i className="fa fa-calendar"></i> 2015 - 2023
                                                </p>
                                            </div>
                                            <div className="ability-info-disc">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium orci sit amet mi ullamcorper
                                                </p>
                                            </div>
                                        </div>
                                        <span className="separator"></span>
                                        <div className="ability-info-wrapper">
                                            <div className="ability-info-header">
                                                <p>
                                                    <span>WEB DEVELOPER</span> - GOOGLE
                                                </p>
                                            </div>
                                            <div className="ability-info-year">
                                                <p>
                                                    <i className="fa fa-calendar"></i> 2011 - 2015
                                                </p>
                                            </div>
                                            <div className="ability-info-disc">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium orci sit amet mi ullamcorper
                                                </p>
                                            </div>
                                        </div>
                                        <span className="separator"></span>
                                        <div className="ability-info-wrapper">
                                            <div className="ability-info-header">
                                                <p>
                                                    <span>COMMUNITY MANAGER</span> - ADOBE
                                                </p>
                                            </div>
                                            <div className="ability-info-year">
                                                <p>
                                                    <i className="fa fa-calendar"></i> 2007 - 2011
                                                </p>
                                            </div>
                                            <div className="ability-info-disc">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium orci sit amet mi ullamcorper
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 ability-wrapper ability-2">
                                    <div className="header text-center">
                                        <p><i className="fa fa-graduation-cap"></i>  EDUCATION</p>
                                    </div>
                                    <div className="ability-content">
                                        <div className="ability-info-wrapper">
                                            <div className="ability-info-header">
                                                <p>
                                                    <span>ENGINEERING DIPLOMA</span> - OXFORD UNIVERSITY
                                                </p>
                                            </div>
                                            <div className="ability-info-year">
                                                <p>
                                                    <i className="fa fa-calendar"></i>  2015 - 2023
                                                </p>
                                            </div>
                                            <div className="ability-info-disc">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium orci sit amet mi ullamcorper
                                                </p>
                                            </div>
                                        </div>
                                        <span className="separator"></span>
                                        <div className="ability-info-wrapper">
                                            <div className="ability-info-header">
                                                <p>
                                                    <span>MASTERS DEGREE</span> - PARIS UNIVERSITY
                                                </p>
                                            </div>
                                            <div className="ability-info-year">
                                                <p>
                                                    <i className="fa fa-calendar"></i> 2011 - 2015
                                                </p>
                                            </div>
                                            <div className="ability-info-disc">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium orci sit amet mi ullamcorper
                                                </p>
                                            </div>
                                        </div>
                                        <span className="separator"></span>
                                        <div className="ability-info-wrapper">
                                            <div className="ability-info-header">
                                                <p>
                                                    <span>BACHELOR DEGREE</span> - BERLIN HIGHER INSTITUTE
                                                </p>
                                            </div>
                                            <div className="ability-info-year">
                                                <p>
                                                    <i className="fa fa-calendar"></i> 2007 - 2011
                                                </p>
                                            </div>
                                            <div className="ability-info-disc">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium orci sit amet mi ullamcorper
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 ability-wrapper ability-3">
                                    <div className="header text-center">
                                        <p><i className="fa fa-star"></i>  SKILLS</p>
                                    </div>
                                    <div className="ability-items-wrapper d-flex flex-row">
                                        <div className="col-6 ability-items-section">
                                            <ul>
                                                <li><span>HTML </span>
                                                    <p>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </p>
                                                </li>
                                                <li><span>JAVASCRIPT </span>
                                                    <p>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </p>
                                                </li>
                                                <li><span>CSS </span>
                                                    <p>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </p>
                                                </li>
                                                <li><span>PHP </span>
                                                    <p>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </p>
                                                </li>
                                                <li><span>JQUERY </span>
                                                    <p>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </p>
                                                </li>
                                                <li><span>ANGULAR JS </span>
                                                    <p>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-6 ability-items-section">
                                            <ul>
                                                <li><span>WORDPRESS </span>
                                                    <p>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </p>
                                                </li>
                                                <li><span>JOOMLA </span>
                                                    <p>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </p>
                                                </li>
                                                <li><span>MAGENTO </span>
                                                    <p>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </p>
                                                </li>
                                                <li><span>DRUPAL </span>
                                                    <p>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </p>
                                                </li>
                                                <li><span>ADOBE PHOTOSHOP </span>
                                                    <p>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </p>
                                                </li>
                                                <li><span>ADOBE ILLUSTRATOR</span>
                                                    <p>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>         
                                    </div>
                                </div>
                            </div>
                            <div className="row abilities-section-lg d-none d-md-block justify-content-around ">
                                <div className="col-3 d-flex flex-column ability-btns">
                                    <button className='exp-btn' onClick={()=> handleExpSection()}>
                                        <i className="fa fa-briefcase"></i> <span>EXPERIENCE</span>
                                    </button>
                                    <button className='edu-btn' onClick={()=>handleEduSection()}>
                                        <i className="fa fa-graduation-cap"></i> <span>EDUCATIONS</span>
                                    </button>
                                    <button className='skills-btn' onClick={()=>handleSkillsSection()}>
                                        <i className="fa fa-star"></i> <span>SKILLS</span>
                                    </button>
                                </div>
                                <div className="col-7 abilities-content">
                                    {expSection &&
                                        <div className="col-12 ability-wrapper ability-1">
                                            <div className="header text-center">
                                                <p><i className="fa fa-briefcase"></i>  EXPERIENCE</p>
                                            </div>
                                            <div className="ability-content">
                                                <div className="ability-info-wrapper">
                                                    <div className="ability-info-header">
                                                        <p>
                                                            <span>WEB DESIGNER</span> - ENVATO
                                                        </p>
                                                    </div>
                                                    <div className="ability-info-year">
                                                        <p>
                                                            <i className="fa fa-calendar"></i> 2015 - 2023
                                                        </p>
                                                    </div>
                                                    <div className="ability-info-disc">
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium orci sit amet mi ullamcorper
                                                        </p>
                                                    </div>
                                                </div>
                                                <span className="separator"></span>
                                                <div className="ability-info-wrapper">
                                                    <div className="ability-info-header">
                                                        <p>
                                                            <span>WEB DEVELOPER</span> - GOOGLE
                                                        </p>
                                                    </div>
                                                    <div className="ability-info-year">
                                                        <p>
                                                            <i className="fa fa-calendar"></i> 2011 - 2015
                                                        </p>
                                                    </div>
                                                    <div className="ability-info-disc">
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium orci sit amet mi ullamcorper
                                                        </p>
                                                    </div>
                                                </div>
                                                <span className="separator"></span>
                                                <div className="ability-info-wrapper">
                                                    <div className="ability-info-header">
                                                        <p>
                                                            <span>COMMUNITY MANAGER</span> - ADOBE
                                                        </p>
                                                    </div>
                                                    <div className="ability-info-year">
                                                        <p>
                                                            <i className="fa fa-calendar"></i> 2007 - 2011
                                                        </p>
                                                    </div>
                                                    <div className="ability-info-disc">
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium orci sit amet mi ullamcorper
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                    {eduSection &&
                                        <div className="col-12 ability-wrapper ability-2">
                                            <div className="header text-center">
                                                <p><i className="fa fa-graduation-cap"></i>  EDUCATION</p>
                                            </div>
                                            <div className="ability-content">
                                                <div className="ability-info-wrapper">
                                                    <div className="ability-info-header">
                                                        <p>
                                                            <span>ENGINEERING DIPLOMA</span> - OXFORD UNIVERSITY
                                                        </p>
                                                    </div>
                                                    <div className="ability-info-year">
                                                        <p>
                                                            <i className="fa fa-calendar"></i>  2015 - 2023
                                                        </p>
                                                    </div>
                                                    <div className="ability-info-disc">
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium orci sit amet mi ullamcorper
                                                        </p>
                                                    </div>
                                                </div>
                                                <span className="separator"></span>
                                                <div className="ability-info-wrapper">
                                                    <div className="ability-info-header">
                                                        <p>
                                                            <span>MASTERS DEGREE</span> - PARIS UNIVERSITY
                                                        </p>
                                                    </div>
                                                    <div className="ability-info-year">
                                                        <p>
                                                            <i className="fa fa-calendar"></i> 2011 - 2015
                                                        </p>
                                                    </div>
                                                    <div className="ability-info-disc">
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium orci sit amet mi ullamcorper
                                                        </p>
                                                    </div>
                                                </div>
                                                <span className="separator"></span>
                                                <div className="ability-info-wrapper">
                                                    <div className="ability-info-header">
                                                        <p>
                                                            <span>BACHELOR DEGREE</span> - BERLIN HIGHER INSTITUTE
                                                        </p>
                                                    </div>
                                                    <div className="ability-info-year">
                                                        <p>
                                                            <i className="fa fa-calendar"></i> 2007 - 2011
                                                        </p>
                                                    </div>
                                                    <div className="ability-info-disc">
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium orci sit amet mi ullamcorper
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                    {skillsSection &&
                                        <div className="col-12 ability-wrapper ability-3">
                                            <div className="header text-center">
                                                <p><i className="fa fa-star"></i>  SKILLS</p>
                                            </div>
                                            <div className="ability-items-wrapper d-flex flex-row">
                                                <div className="col-6 ability-items-section">
                                                    <ul>
                                                        <li><span>HTML </span>
                                                            <p>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                            </p>
                                                        </li>
                                                        <li><span>JAVASCRIPT </span>
                                                            <p>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                            </p>
                                                        </li>
                                                        <li><span>CSS </span>
                                                            <p>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                            </p>
                                                        </li>
                                                        <li><span>PHP </span>
                                                            <p>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                            </p>
                                                        </li>
                                                        <li><span>JQUERY </span>
                                                            <p>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                            </p>
                                                        </li>
                                                        <li><span>ANGULAR JS </span>
                                                            <p>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                            </p>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-6 ability-items-section">
                                                    <ul>
                                                        <li><span>WORDPRESS </span>
                                                            <p>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                            </p>
                                                        </li>
                                                        <li><span>JOOMLA </span>
                                                            <p>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                            </p>
                                                        </li>
                                                        <li><span>MAGENTO </span>
                                                            <p>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                            </p>
                                                        </li>
                                                        <li><span>DRUPAL </span>
                                                            <p>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                            </p>
                                                        </li>
                                                        <li><span>ADOBE PHOTOSHOP </span>
                                                            <p>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                            </p>
                                                        </li>
                                                        <li><span>ADOBE ILLUSTRATOR</span>
                                                            <p>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                            </p>
                                                        </li>
                                                    </ul>
                                                </div>         
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className="row badges w-100">
                                <div className="col-12 col-md-4 d-flex flex-column align-items-center justify-content-center text-center badge-section badge-1 ">
                                    <i className="fa fa-briefcase"></i>
                                    <span className="">4+</span>
                                    <p>YEARS EXPERIENCE</p>
                                </div>
                                <div className="col-12 col-md-4 d-flex flex-column align-items-center justify-content-center text-center badge-section badge-2">
                                    <i className="fa fa-handshake"></i>
                                    <span className="">89+</span>
                                    <p>DONE PROJECTS</p>
                                </div>
                                <div className="col-12 col-md-4 d-flex flex-column align-items-center justify-content-center text-center badge-section badge-3">
                                    <i className="fa fa-heart"></i>
                                    <span className="">77+</span>
                                    <p>HAPPY CUSTOMERS</p>
                                </div>
                            </div>                        
                    </div>
                </div>
            </div>  
        </div>
    )
}