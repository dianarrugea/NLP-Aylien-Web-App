function updateUI(data){
    document.getElementById("polarity").textContent = "Polarity: " + data.polarity;
    document.getElementById("subjectivity").textContent = "Subjectivity: " + data.subjectivity;
    document.getElementById("polarity-conf").textContent = "Polarity Confidence: " + data.polarity_confidence;
    document.getElementById("subjectivity-conf").textContent = "Subjectivity Confidence: " + data.subjectivity_confidence;
    document.getElementById("website-name").textContent = "Text: " + data.text;
    document.getElementById("results").style.display = "block";
}

export { updateUI }