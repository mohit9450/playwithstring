import React,{useState} from 'react'
export default function TextForm(props) {
    const handleUpClick = ()=>{
        let te = text.toUpperCase();
        setText(te)
    }
    const handleDownClick = ()=>{
        let te = text.toLowerCase();
        setText(te)
    }
    const handleOnChange = (event)=>{
        // console.log("upper case was changed")
        setText(event.target.value)
    }
const [text,setText] = useState("enter your text")
// setText("my mohit")
    return (
        <>
        <div className="container">
            <div className="mb-3">
            <label htmlFor="mydox" className="form-label">{props.heading}</label>
            <textarea className="form-control" id="mydox" value={text} onChange={handleOnChange} rows="10"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to upper case</button>
            <button className="btn btn-primary" onClick={handleDownClick}>Convert to Lower case</button>
        </div>
        <div className="container">
            <h1>your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
        </div>
        </>
    )
}
