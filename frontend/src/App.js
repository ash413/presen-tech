import React, {useState} from 'react';
import Result from './components/Result';
import UploadForm from './components/UploadForm';


function App() {
  const [file, setFile] = useState(null);
  const [docType, setDocType] = useState("general");
  const [generatedppt, setGeneratedppt] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileUpload = (file) => {
    setFile(file);
  }

  const handleDocTypeChange = (e) => {
    setDocType(e.target.value);
  }

  const handleSubmit = async () => {
    if(!file){
      alert('Please upload a file first!');
      return;
    }
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("docType", docType);

    try {
      const response = await fetch("http://localhost:5000/generate-ppt", {
        method: "POST",
        body: formData
      });
      const blob = await response.blob();
      setGeneratedppt(URL.createObjectURL(blob));

    } catch (error) {
      console.log("Error generating PPT", error);
    } finally{
      setLoading(false);
    }
  }

  return (
    <div>
      <h1>
        Presen-Tech - PDF to PPT generator
      </h1>
      <UploadForm  onFileUpload={handleFileUpload} onDocTypeChange={handleDocTypeChange}/>
      <button onClick={handleSubmit} disabled={loading} >
        {loading ? "Generating..." : "Generate PPT"}
      </button>
      {generatedppt && <Result generatedppt={generatedppt} />}
    </div>
  );
}

export default App;
