import Navbar from "./Navbar";
import Main from "./Main";
import TravelJournalData from "./TravelJournalData";

let count = 1
let arrLength = TravelJournalData.length

let TravelCard = TravelJournalData.map(item => (
    <Main 
    key = {item.id}
    id = {item.id}
    img = {item.img}
    location = {item.location}
    googleMapLink = {item.googleMapLink}
    title = {item.title}
    date = {item.date}
    description = {item.description}
    itemCount = {count++}
    arrLength = {arrLength}
    />
))



export default function App(){
    return(
        <div className="app">
            <Navbar/>
            {TravelCard}
        </div>
    )
}