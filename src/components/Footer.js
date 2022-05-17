import gitLogo from '../logo/github.png'
function Footer(){
    return (
        <footer >
            <div className='container'>
            <div className='left'>© 2022 fhvo team</div>
            <div className='right'>Test</div>
            <img className='center' src ={gitLogo} alt="gitLogo"/>
            </div>
        </footer>
    );
    }
    
    export default Footer;