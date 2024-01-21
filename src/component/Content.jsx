import "regenerator-runtime/runtime";
import useClipboard from "react-use-clipboard";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useState } from "react";
function Content(){
    const [textCopied,setTextCopied]=useState()
    const [isCopied, setCopied] = useClipboard(textCopied,{successDuration:1000})
    const listening=()=>SpeechRecognition.startListening({ continuous: true ,language:'en-IN'})
    const { transcript, resetTranscript,browserSupportsSpeechRecognition } = useSpeechRecognition();
    if (!browserSupportsSpeechRecognition) {
      return null;
    }
    return(
      <center>
      <div className="card text-center " style={{width:"60%",marginTop:"150px"}}>
      <div className="card-header">
        Voice Rocgnizer
      </div>
      <div className="card-body">
        <h5 className="card-title">Speek Here</h5>
        <p className="card-text">{transcript}</p>
        <span>
        <button type="button" className="btn btn-success bynDesign" onClick={listening}>Start</button>
        <button type="button" className="btn btn-danger bynDesign" onClick={SpeechRecognition.stopListening}>Stop</button>
        <button type="button" className="btn btn-secondary bynDesign" onClick={resetTranscript}>Reset</button>
        </span>
      </div>
      <div className="card-footer text-body-secondary text-start">
        Press <strong>Start Button</strong> to record voice & Press <strong>Stop Button</strong> to Decline.
      </div>
    </div>
        </center>)
}
export default Content;




// <div className="card" style={{width: "40rem"}}>
//         <div className="card-body">
//          <div className="rows-3" >{transcript}</div>
//          <div className="mb-3">
//   <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
//   <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onClick={()=>setTextCopied(`${transcript}`)}>{transcript}</textarea>
// </div>
//           <p className="card-text">
//           <button type="button" className="btn btn-primary" onClick={setCopied}>{isCopied ? "Copied" : "Copy To Clipboard"}</button>
//           <button type="button" className="btn btn-secondary" onClick={listening}>Start</button>
//           <button type="button" className="btn btn-success" onClick={SpeechRecognition.stopListening}>Stop</button>
//           <button type="button" className="btn btn-secondary" onClick={resetTranscript}>Reset</button>
//           </p>
//         </div>
//       </div>