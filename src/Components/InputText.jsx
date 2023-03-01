import React from 'react'
import '../Compo_css/InputText.css'
const InputText = ({val,setval}) => {
  return (
    <>
   <div className="inputtext">
   <h3>Markdown text</h3>
   <hr />
    <div className="inputdiv">
      {/* <input type="text" /> */}
      <textarea value={val} onChange={(e)=>{
        setval(e.target.value)
        console.log(val)
      }}></textarea>
    </div>
   </div>
    </>
  )
}

export default InputText