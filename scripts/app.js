//initial objects and dom-queries
const card_section = document.querySelector("#cards");
const cardUI = new UI(card_section);
const recipe_database = new Recipes();
const input_field = document.querySelector("#input-field");
const form = document.querySelector("form");
const name_input = document.querySelector("#name");
//Event listeners
const add_button = document.querySelector("#add");
const submit = document.querySelector("#submit-button")
//Pressing add ingredient will add an input field above.
add_button.addEventListener("click", e =>{
    e.preventDefault();
    //store data in previous 
    let temp_input = `<input class="form-control my-2" required><button>remove</button>`;
    input_field.innerHTML += temp_input;
})
submit.addEventListener("click", e => {
    e.preventDefault();
    //store ingredeint input values in an array to store in database.
    const ingredients = [];
    const name = name_input.value;
    input_field.childNodes.forEach( (child) =>{
        if(child.tagName === "INPUT"){
            console.log(child.value);
            ingredients.push(child.value);
        }
    }

    )
    recipe_database.addRecipe(name,ingredients);
    input_field.innerHTML = "";
    form.reset();
    
    
})
card_section.addEventListener("click",e =>{
    if(e.target.tagName === "BUTTON"){
        recipe_database.removeRecipes(e.target.parentElement.parentElement.id)
        e.target.parentElement.parentElement.remove();
    }
})
//Store typed values into ingredient inputs. Use event delegation of the input-field
input_field.addEventListener("keyup", e=>{
    e.target.setAttribute("value",e.target.value);
})
input_field.addEventListener("click", e => {
    e.preventDefault();
    if(e.target.tagName == "BUTTON"){
        e.target.previousElementSibling.remove();
        e.target.remove();
    }
})
recipe_database.getRecipes((data,id)=>{
    cardUI.add_card(data,id);
})