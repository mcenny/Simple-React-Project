export default function Navbar(){
    return(
        <div className='navbar'>
            <img src={require('../img/react-logo.png')} alt='react logo' className='navbar-logo'/>
            <h3>ReactFacts</h3>
            <p className='course-module'>React Course - Project 1</p>
        </div>
    )
}