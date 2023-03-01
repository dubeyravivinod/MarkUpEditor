import React from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import '../Compo_css/OutputText.css'

const OutputText = ({val}) => {
  return (
    <>
    <div className="outputdiv">
      <h3>Output Text</h3>
      <hr />
    <div className="markdown">
    <ReactMarkdown>{val}</ReactMarkdown>
    </div>
    </div>
    </>
  )
}

export default OutputText