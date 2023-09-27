prediction_1 = ""
prediction = ""
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
function speak1()
{
    var synth = window.speechSynthesis
    speak_data1 = "The first prediction is" + prediction_1;
    speak_data2 = "The second prediction is" + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data1 + speak_data2)
    synth.speak(utterThis)
}
function check()
{
    img = document.getElementById("rslt")
    classifier.classify(img, gotResult)
}
function gotResult(error, result)
{
    if (error)
    {
        console.log(error)
    }
    else
    {
        console.log(result)
        prediction_1 = result[0].label
        prediction_2 = result[1].label
        document.getElementById("result_gesture_name").innerHTML = prediction_1
        document.getElementById("result_gesture_name2").innerHTML = prediction_2
        speak1()
        if (prediction_1 == "Good")
        {
            document.getElementById("result_ges").innerHTML = "&#128077"
        }
        if (prediction_1 == "Victory")
        {
            document.getElementById("result_ges").innerHTML = "&#9996"
        }
        if (prediction_1 == "Super")
        {
            document.getElementById("result_ges").innerHTML = "&#128076"
        }
        if (prediction_2 == "Good")
        {
            document.getElementById("result_ges2").innerHTML = "&#128077"
        }
        if (prediction_2 == "Victory")
        {
            document.getElementById("result_ges2").innerHTML = "&#9996"
        }
        if (prediction_2 == "Super")
        {
            document.getElementById("result_ges2").innerHTML = "&#128076"
        }
    }
}