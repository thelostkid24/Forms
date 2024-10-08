
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import { Form } from './Form'
import { ViewForms } from "./ViewForm";

function App() {
  return (
    <Router>
    <Routes>
      {/* Route for the sign-up form */}
      <Route path="/" element={<Form />} />
      
      {/* Route for the view forms page */}
      <Route path="/view-forms" element={<ViewForms />} />
    </Routes>
  </Router>
  )
}

export default App
