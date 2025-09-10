import Navbar from "./components/Navbar"
import Manager from "./components/Manager"
import Footer from "./components/Footer"

function App() {

  return (
    <>
     <Navbar />
     <Manager />
     <Footer />
    </>
  )
}

export default App

//steps to follow if you want to run this mongo db version 

// 1. run backend folder in new vs code not with this 
// with command npm run dev
// open mongoDb while running server is running  and connect to database

//2. run this react app in differnt vs code window 
// with comand npm run dev