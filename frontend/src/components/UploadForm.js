import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function UploadForm ({ onFileGenerated }) {
    const [file, setFile] = useState(null);
    const [docType, setDocType] = useState("general");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleDocTypeChange = (e) => {
        setDocType(e.target.value);
    };

    const handleSubmit = async () => {
        if (!file) {
            alert("Please upload a file first!");
            return;
        }

        setLoading(true);
        const formData = new FormData();
        formData.append("file", file);
        formData.append("docType", docType);

        try {
            const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/upload`, {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                const blob = await response.blob();
                const fileUrl = URL.createObjectURL(blob);
                onFileGenerated(fileUrl);
                navigate("/download");
            } else {
                console.error("Failed to generate PPT");
            }
        } catch (error) {
            console.error("Error generating PPT", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Upload your document</h2>
            <input type="file" accept=".pdf, .docx" onChange={handleFileChange} />
            <label>Document Type: </label>
            <select onChange={handleDocTypeChange} value={docType}>
                <option value="general">General</option>
                <option value="research_paper">Research Paper</option>
                <option value="textbook">Textbook</option>
            </select>
            <button onClick={handleSubmit} disabled={loading}>
                {loading ? "Generating..." : "Generate PPT"}
            </button>
        </div>
    )
}

export default UploadForm;