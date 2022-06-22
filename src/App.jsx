import { useState } from 'react';
import styled from 'styled-components'
import './App.css'
import HomePage from './pages/HomePage'
import FavoritePage from './pages/FavoritesPage'

export default function App() {
  const [page, setPage] = useState(0);
  return (
    <Wrapper> 
      { page == 0 ?
      <HomePage setPage={setPage} /> :
      <FavoritePage setPage={setPage} />}
    </Wrapper>
  )
}

const Wrapper = styled.main`
  height: 100vh;
  background: #141E30;  
  background: -webkit-linear-gradient(to right, #243B55, #141E30);  
  background: linear-gradient(to right, #243B55, #141E30);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
