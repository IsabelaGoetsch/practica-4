const getActivity = async () =>{
    let participantes = document.querySelector('input[name="numero"]:checked').value;
    if(participantes == 0){
            url = "http://www.boredapi.com/api/activity/";
        } else {
            url = "http://www.boredapi.com/api/activity?participants=" + participantes;
        }
    let request = await fetch(url);
    if(request.ok){
        let data = await request.json();

        let titulo1 = document.getElementById("titulo1");
        titulo1.className = "card-subtitle mb-2 text-muted";
        titulo1.innerHTML = "<h6> BORED </h6>";

        let titulo2 = document.getElementById("titulo2");
        titulo2.className = "card-title";
        titulo2.innerHTML = "<h3>" + data.activity + "</h3>";


    }
}


