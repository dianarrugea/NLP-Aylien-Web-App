function handleSubmit(event) {
    event.preventDefault()

    let inputText = document.getElementById('name').value;

    const data = {
        text: inputText
    };

    console.log(JSON.stringify(data));

    const sendUrl = async (url = "", data = {}) => {
        if(urlMatcher(inputText)){
          const request = await fetch(url, {
            method: "POST",
            credentials: "same-origin",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });

          const response = await request.json();
          console.log("This is the response from the server", response);
          Client.updateUI(response);
       }
      }

    sendUrl("http://localhost:8081/aylienEndPoint", { url: inputText });    
}

    function urlMatcher(inputText){
        var regex = RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/);
        if (regex.test(inputText)) {
          return true;
        } else {
          window.alert("Please input a valid url in the following form: https://www.website.com")
          return false;
        }
    }
    

export { handleSubmit }