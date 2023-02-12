import './SectionThreeModal.css'
import closeButton from '../images/close-button.png'


export default function SectionThreeModal({setModalSectionThree}){

    return(
        <div className='section-three-modal'>
            <img src={closeButton} alt="close-button" className="close-btn" onClick={()=>setModalSectionThree(false)}/>       
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
            <div className="content content-wrapper">
                <div className="row">  
                    <div className="modal-data col-12">
                    2
                     </div>
                </div>
            </div>  
        </div>
    )
}