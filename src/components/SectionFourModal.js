import './SectionFourModal.css'
import closeButton from '../images/close-button.png'

export default function SectionFourModal({setModalSectionFour}){

    return(
        <div className='section-four-modal'>
            <img src={closeButton} alt="close-button" className="close-btn" onClick={()=>setModalSectionFour(false)}/>       
            <h2 className='modal-title'>
                <span className='first-text'>GET </span>
                <span className='spacer'></span>
                <span className='last-text'>IN TOUCH </span>
            </h2>
            <div className="divider">
                <span className="divider-line">
                </span>
                <span className="fa fa-vcard" aria-hidden="true"></span>
                <span className="divider-line">
                </span>
            </div>
            <div className="content content-wrapper">
                <div className="row modal-data">        
                    <div className="left-section col-12 col-sm-4">
                        <p className="title first-element">PHONE</p>
                        <div className="contact-data">
                            <i className="fa fa-phone"></i>
                            <span>+01 23 45 67</span>
                        </div>
                        <p className="title">EMAIL</p>
                        <div className="contact-data">
                            <i className="fa fa-envelope"></i>
                            <span>you@yourwebsite.com</span>
                        </div>
                        <p className="title">SKYPE</p>
                        <div className="contact-data">
                            <i className="fab fa-skype"></i>
                            <span>skype.id</span>
                        </div>
                        <p className="title">ADDRESS</p>
                        <div className="contact-data">
                            <i className="fa fa-home"></i>
                            <span>Iran</span>
                        </div>
                        <p className="title">SOCIAL PROFILES</p>
                        <div className="contact-data">
                            <ul className="list-inline social-icons center-align p-none d-flex flex-wrap">
                                <li className="facebook"><a href="#"><i className="fab fa-facebook"></i></a></li>
                                <li className="twitter"><a href="#"><i className="fab fa-twitter"></i></a></li>
                                <li className="google-plus"><a href="#"><i className="fab fa-google-plus"></i></a></li>
                                <li className="linkedin"><a href="#"><i className="fab fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="right-section col-12 col-sm-8">
                        <p className="title">
                            FEEL FREE TO DROP ME A LINE
                        </p>
                        <p className="content">
                            If you have any suggestion, project or even you want to say Hello.. please fill out the form below and I will reply you shortly.
                        </p>
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <div className='input-wrapper'>
                                    <i className="fa fa-user prefix"></i><input type="text" className="form-control" id="name" placeholder="Your Name" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Your Email</label>
                                <div className='input-wrapper'>
                                    <i className="fa fa-envelope prefix"></i>
                                    <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="comment">Your Comment</label>
                                <div className='input-wrapper'>
                                    <i className="fa fa-comments prefix"></i>
                                    <textarea type="text" className="form-control" id="comment" placeholder="Your Comment" ></textarea>
                                </div>
                            </div>  
                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>  
        </div>
    )
}