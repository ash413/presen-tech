import React from "react";

function UploadForm ({ onFileUpload, onDocTypeChange }) {
    const handleFileChange = (e) => {
        onFileUpload(e.target.files[0]);
    };

    return (
        <div>
            <h2>Upload your document</h2>
            <input type="file" accept=".pdf, .docx" onChange={handleFileChange} />
            <label>Document Type: </label>
            <select onChange={onDocTypeChange}>
                <option value="general">General</option>
                <option value="research_paper">Research Paper</option>
                <option value="textbook">Textbook</option>
            </select>
        </div>
    )
}

export default UploadForm;