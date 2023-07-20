
import './App.css'
import Header from './components/Header'
import { Task } from './components/Task'
import { Tasklist } from './components/Tasklist'

function App() {
  return (
    <div className="contenedorPrincipal">
      <Header />
      <div className="contenedorTasklist">
        <Tasklist />
      </div>
      <div className="contenedorTask">
        <Task />
      </div>
    </div>
  );
}

export default App
