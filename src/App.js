import React, {useState} from "react";
import Calendar from './Components/Calendar';
import WorkoutData from "./Components/WorkoutData";
import "./App.css";

function App() {
  const [workoutData, setWorkoutData] = useState(WorkoutData);

  return (
    <div className="App">
      <Calendar workoutData={workoutData} setworkoutData={setWorkoutData} />
    </div>
  );
}

export default App;