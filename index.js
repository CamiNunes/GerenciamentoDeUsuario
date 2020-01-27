var nome = document.querySelector("#exampleInputName");
var genero = document.querySelectorAll("#form-user-create [name=gender]:checked");
var nascimento = document.querySelector("#exampleInputBirth");
var pais = document.querySelector("#exampleInputCountry");
var email = document.querySelector("#exampleInputEmail");
var senha = document.querySelector("#exampleInputPassword");
var foto = document.querySelector("#exempleInputFile");
var admin = document.querySelector("#exempleInputAdmin");


var fields = document.querySelectorAll("#form-user-create [name]");

fields.forEach(function(field, index){
    if (field.name == "gender"){
        if (field.checked){
            console.log("SIM", field);
        }
    } else {
        console.log("NÃO", field);
    }


    //console.log(field.name);
});

