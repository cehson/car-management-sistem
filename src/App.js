import './App.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Listing from './pages/List'
import ListingObserver from "./pages/AddCarMaker/index";
function App() {
    return (
        <BrowserRouter>
            <main className="App container mx-auto">
                <nav>
                    <ul className='flex items-center gap-5 py-3'>
                        <li>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link to='/add-car-maker' >Add car maker</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route index key='home' exact path='/' element={<Listing/>}/>
                    <Route key='AddCarMaker' path='/add-car-maker' element={<ListingObserver />}/>
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
