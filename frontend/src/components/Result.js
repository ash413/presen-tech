import React from 'react';

function Result({ generatedppt }) {
  return (
    <div>
      <h2>Your PPT is ready!</h2>
      {generatedppt ? (
        <a href={generatedppt} download="generated_ppt.pptx">
          <button>Download PPT</button>
        </a>
      ) : (
        <p>No file available for download. Please go back and upload a file.</p>
      )}
    </div>
  );
}

export default Result;
