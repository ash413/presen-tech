import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Result from './components/Result';
import UploadForm from './components/UploadForm';


function App() {
  const [generatedppt, setGeneratedppt] = useState(null);

  /*const handleFileUpload = (file) => {
    setFile(file);
  }*/

  return (
    <Router >
      <div>
        <h1>Presen-Tech - PDF to PPT generator</h1>
        <Routes>
          <Route 
            path='/'
            element={<UploadForm onFileGenerated={(fileUrl) => setGeneratedppt(fileUrl)} />}
          />
          <Route
            path='/download'
            element={<Result generatedppt={generatedppt} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
