import React, { Component } from 'react';
import * as faceapi from 'face-api.js';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.videoTag = React.createRef()
    this.canvasTag = React.createRef()
  }
  async componentDidMount() {
    await this.loadModels().then(this.startVideo());
  }

  startVideo() {
    const video = this.videoTag.current
    navigator.mediaDevices
      .getUserMedia({ video: true }).then(
        stream => {
          video.srcObject = stream
          video.addEventListener("play", () => {

            // const canvas = document.getElementById('myCanvas');
            // const displaySize = { width: video.width, height: video.height }
            // faceapi.matchDimensions(canvas, displaySize)

            // setInterval(async () => {

            //   const detections = await faceapi.detectAllFaces(video,
            //     new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions().withAgeAndGender()

            //   console.log(detections);
            //   const resizedDetections = faceapi.resizeResults(detections, displaySize)
            //   canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)


            //   faceapi.draw.drawDetections(canvas, resizedDetections)
            //   faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
            //   faceapi.draw.drawFaceExpressions(canvas, resizedDetections)


            //   resizedDetections.forEach(result => {
            //     const { age, gender, genderProbability } = result
            //     new faceapi.draw.DrawTextField([
            //       Math.round(age, 0) + " years",
            //       gender
            //       // + " " + Math.round(genderProbability, 0.5)
            //     ],
            //       result.detection.box.bottomRight).draw(canvas)
            //   })


            // }, 1000)
          });
        }
      )
      .catch(console.error);
  }

  async loadModels() {
    // await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
    // await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
    // await faceapi.nets.faceRecognitionNet.loadFromUri('/models');
    // await faceapi.nets.faceExpressionNet.loadFromUri('/models');
    // await faceapi.nets.ageGenderNet.loadFromUri('/models');
  }

  render() {
    return (
      <div className="App" >
        <video ref={this.videoTag}
          width="720" height="560" autoPlay muted>
        </video>
        <canvas id="myCanvas"
          height={500}
          width={500}></canvas>
      </div>
    );
  }
}

export default App;
