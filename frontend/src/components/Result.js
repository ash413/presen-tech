import React from 'react'

function Result ({generatedppt}) {
  return (
    <div>
        <h2>Your PPT is ready!</h2>
        <a href={generatedppt} download="generated_ppt.pptx">
            Download PPT
        </a>
    </div>
  )
}

export default Result;