import './App.css';
import AddExercise from './components/AddExercise';
import DisplayAllExercises from './components/DisplayAll';
import {Route, Routes} from 'react-router-dom';
import EditExercise from './components/EditExercise';
import OneExercise from './components/OneExercise';
import Nav from './components/Nav';

function App() {

  return (
    <div>
      <Nav/>
      <Routes>
        <Route index element={<DisplayAllExercises/>}/>
        <Route path='/addExercise' element={<AddExercise/>}/>
        <Route path='/editExercise/:id' element={<EditExercise/>}/>
        <Route path='/oneExercise/:id' element={<OneExercise/>}/>
      </Routes>
    </div>
  )
}

export default App
