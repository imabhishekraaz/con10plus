import { useState } from 'react'
import Main from './pages/main/Main'
import { Router } from 'lucide-react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditorBook from './components/Editor/EditorBook/EditorBook';
import CameraBook from './components/CameraMan/CameraBook/CameraBook';
import OrderDetailsCameraman from './components/CameraMan/OrderDetailsCameraman/OrderDetailsCameraman';
import OrderDetailsEditor from './components/Editor/OrderDetailsEditor/OrderDetailsEditor';


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <BrowserRouter>
     <Routes>
        <Route path='/' element={<Main/>}>

        {/* child the page that match the URL of the given PATH */}

          {/* Editor Routes */}
          <Route path='/editor' element={<EditorBook/>}/>
          <Route path='/editor/details' element={<OrderDetailsEditor/>}/>

          {/* Cameraman Routes */}
          <Route path='/cameraman' element={<CameraBook/>}/>
          <Route path='/cameraman/details' element={<OrderDetailsCameraman/>}/>
        </Route>
        
        

        
        

     </Routes>
   </BrowserRouter>
        
   </>
  )
}

export default App
