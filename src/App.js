import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
// import SignUp from './Components/SignUp';

function App() {
  return (
    // <SignUp/>
    <Routes>
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;








// import React, { useState } from 'react';

// const FormExample = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     // Add more form fields as needed
//   });

//   // Load form data from local storage on component mount
//   useEffect(() => {
//     const storedFormData = localStorage.getItem('formData');
//     if (storedFormData) {
//       setFormData(JSON.parse(storedFormData));
//     }
//   }, []);

//   // Save form data to local storage on form field change
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     const updatedFormData = { ...formData, [name]: value };
//     setFormData(updatedFormData);
//     localStorage.setItem('formData', JSON.stringify(updatedFormData));
//   };

//   // Clear form data from local storage
//   const clearFormData = () => {
//     setFormData({ name: '', email: '' }); // Reset form state
//     localStorage.removeItem('formData');
//   };

//   return (
//     <div>
//       <label htmlFor="name">Name:</label>
//       <input
//         type="text"
//         id="name"
//         name="name"
//         value={formData.name}
//         onChange={handleInputChange}
//       />

//       <label htmlFor="email">Email:</label>
//       <input
//         type="email"
//         id="email"
//         name="email"
//         value={formData.email}
//         onChange={handleInputChange}
//       />

//       <button onClick={clearFormData}>Clear Form</button>
//     </div>
//   );
// };

// export default FormExample;
