
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AllHomePages from './Components/Home/AllHomePages';
import AllAboutPages from './Components/About/AllAboutPages';
import AllCareerPages from './Components/Careers/AllCareerPages';
import AllContactPages from './Components/Contact/AllContactPages';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AllHomePages/>}/>
      <Route path='/About' element={<AllAboutPages/>}/>
      <Route path='/Careers' element={<AllCareerPages/>}/>
      <Route path='/Contact' element={<AllContactPages/>}/>

    </Routes>
    </BrowserRouter>
    
    
  )

}

export default App;
