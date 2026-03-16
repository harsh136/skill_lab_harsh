import Education from "./components/Education";
import Students from "./components/Students";
import Button from "./components/Button";
function App() {
  return <div>
  <Students name = "Harsh" age = "20"/>
  <Education college = "SHEAT" cgpa = "8.0"/>
  <Students name = "Abdul" age = "18"/>
  <Education college = "Ashoka" cgpa = "7.5"/>
  <Students name="Amit" age="21"/>
  <Education college="Sheat" cgpa = "8.0"/>
  <Button/>
</div>
}

export default App;