export default function Contacts({img, name, mobile, email}){
    console.log(    )
    return(
        <div className="contacts">
            <div className="contact--card">
                <img src={img}/>
                <h3>{name}</h3>
                <div className="info--group"> 
                    <span><i className="bi bi-telephone-fill"></i></span><p>{mobile}</p>
                </div>
                <div className="info--group">
                    <span><i className="bi bi-envelope-fill"></i></span><p>{email}</p>
                </div>
            </div>
        </div>
    )
}