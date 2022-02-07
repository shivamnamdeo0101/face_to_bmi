import React,{useState} from 'react';
import "./index.css";
import Webcam from "react-webcam";





function App() {

  const WebcamComponent = () => <Webcam />;


  const videoConstraints = {
    width: 220,
    height: 200,
    facingMode: "user"
  };
  
  const [image,setImage]=useState('');
  
  const webcamRef = React.useRef(null);
 
     
  const capture = React.useCallback(
        () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc)

        alert("Image Captured");
  });
 


  return (
    <div className="App">
    <div className="grid">

      <div className="grid_comp left">
         
         <div className="webcam-container">
            <div className="webcam-img">
                     
                {image == '' ? <Webcam
                    audio={false}
                    ref={webcamRef}
                    className="img_stream"
                    screenshotFormat="image/jpeg"
                    videoConstraints={videoConstraints}
                /> : <img className="img_stream" src={image} />}
            </div>
            
          </div>


        {image != '' ?
          <div className="upload" onClick={(e) => {e.preventDefault(); setImage('') }}>
            <p>Retake Image</p>
            <i className="fas fa-camera"></i>
          </div>
          :
          <div className="upload" onClick={(e) => {e.preventDefault();capture();}}>
            <p>Capture</p>
            <i className="fas fa-camera"></i>
          </div>

        }
      </div>
      <div className="grid_comp right">
        <h1>Face To BMI</h1>
        <p>Upload a headshot of your face and we'll </p>
        <p>calculate your BMI for You! </p>

        <div className="bmi_output">
          <p>Your BMI : 19.50</p>
          <i className="fas fa-check-circle"></i>
        </div>

        <a href="">Check out our personalized recommendations</a>
      </div>

    </div>
  </div>
  )
}

export default App