/* eslint-disable linebreak-style */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable linebreak-style */
import './App.css';
import TaskListComponent from './components/container/task_list';
import OptionalRender from './components/pure/optionalRender';

function App() {
  return (
    <div>
      {/*  <TaskListComponent></TaskListComponent>; */}
      <OptionalRender></OptionalRender>
    </div>
  );
}
export default App;
