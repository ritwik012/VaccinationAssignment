window.onload = function(){
    console.log("inside script js");
    const name = document.getElementById("name")
    const dob = document.getElementById("dob")
    const gender = document.getElementById("gender")
    const bloodgroup = document.getElementById("bloodGroup")
    const height = document.getElementById("height")
    const weight = document.getElementById("weight")
    const pob = document.getElementById("pob")
    const save = document.getElementById("save")
    const cancel = document.getElementById("cancel")

     save.addEventListener("click", event => {
         event.preventDefault();
         fetch("http://localhost:9090/patient/createpatient",{
             method : "POST",
             body : JSON.stringify({
                 name : name.value,
                 DateOfBirth : dob.value,
                 Gender : gender.value,
                 PlaceOfBirth : pob.value,
                 BloodGroup : bloodgroup.value,
                 Height : height.value,
                 Weight : weight.value
             }),
             headers : {
                 "Content-Type" : "application/json"
             }
         })
         .then(response => response.json())
         .then(result => {
             console.log(result);
 
         })
         .catch(console.error)
     })
 }