Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
})
camera = document.getElementById("camera")
Webcam.attach(camera)
function takeSnapshot()
{
    Webcam.snap(function(datauri)
    {
        document.getElementById("result").innerHTML = "<img id='rslt' src='"+datauri+"'>"
    })
}
console.log("ml5.version", ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ty3s2dBTr/model.json", modelLoaded)
function modelLoaded()
{
    console.log("modelLoaded")
}