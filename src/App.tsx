import { BrowserRouter } from 'react-router-dom'
import {Routes} from 'react-router-dom'
import {Route} from 'react-router-dom'

// import {Home} from './pages/home/Home'

import {Suspense, lazy} from 'react'
// import { Home } from './pages/home/Home'

const Home = lazy(()=>import('./pages/home/Home'))
const Products = lazy(()=>import('./pages/products/Products'))
const Contact = lazy(()=>import('./pages/contact/Contact'))

function App() { 
  
  return (
  <BrowserRouter>
    <Suspense fallback={<div>Carregando</div>}>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/produtos' element={<Products/>}/>
      <Route path='/contatos' element={<Contact/>}/>
     


    </Routes>
    </Suspense>
  </BrowserRouter>
  )
  
}

export default App
