import React, {useState} from 'react';


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
      
    </div>
  );
}

export default App;
