//class to interface with the DOM
class UI {
    constructor(card_section){
        this.card_section = card_section;
    }
    add_card(data,id){
        //create a div and store name of recipie and list ingredients
        let new_div = document.createElement("div");
        new_div.classList.add("d-flex","text-white")
        new_div.classList.add("justify-content-between")
        
        let h1 = document.createElement("h1");
        h1.innerText = `${data.name}`;
        new_div.append(h1);
        new_div.innerHTML += `<button class="btn  text-white text-end">X</button>`;
        let inner = document.createElement("ul");
        inner.setAttribute("id",`${id}`);
        inner.setAttribute("class","card");
        inner.classList.add("my-2","text-white","p-5");
        inner.append(new_div);
        data.ingredients.forEach( ingredient => {
            let html = `<li>${ingredient}</li>`
            inner.innerHTML += html;
        })
        
        this.card_section.append(inner);
    }
}