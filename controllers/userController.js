class UserController{
    constructor(formId, tableId){
        this.formEl = document.getElementById(formId);
        this.tableEl = document.getElementById(tableId);
        this.onSubmit();
    }

    //Método
    onSubmit(){
    
        /*Marcar o radio button do genero ArrowFunction - Estudar mais depois*/
        this.formEl.addEventListener("submit", event => {
            event.preventDefault();

            this.addLine(this.getValues());
        });
    }//Fechando onSubmit;

    //Método
    getValues(){

        let user = {};

        this.formEl.elements.forEach(function(field, index){
            if (field.name == "gender"){
                if (field.checked){
                    user[field.name] = field.value;
                }
            } else {
                user[field.name] = field.value;
            }
        });
        
        /*Passar os valores para a minha variável... Um objeto é uma variavel que instancia(representa) uma classe */
        return new User(
            user.name, 
            user.gender, 
            user.birth, 
            user.country, 
            user.email, 
            user.password, 
            user.photo, 
            user.admin
        );
    }//Fechando getValues;

    //Método
    addLine(dataUser){
    
        this.tableEl.innerHTML = `
            <tr>
                <td>
                    <img src="dist/img/user1-128x128.jpg" alt="User Image" class="img-circle img-sm">
                </td>
                <td>${dataUser.name}</td>
                <td>${dataUser.email}</td>
                <td>${dataUser.admin}</td>
                <td>${dataUser.birth}</td>
                <td>
                    <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
                    <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
                </td>
            </tr>
        `;
    }//addLine

}// Fechando a classe uSerController