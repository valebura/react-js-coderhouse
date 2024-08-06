import './App.css'
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'
import { Button } from './components/Button'
import { ItemCount } from './components/ItemCount/ItemCount'
import 'bootstrap/dist/css/bootstrap.min.css';
import PostsContainer from './components/PostsContainer'

export function App() {
  return (
    <>
      <NavBar/>
      {/* <ItemListContainer greeting="hola"/>
      <ItemCount />     */}
      <PostsContainer/>
    </>
  )
}
