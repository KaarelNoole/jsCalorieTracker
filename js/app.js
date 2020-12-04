const button = document.querySelector("#add-btn");
const foodname = document.querySelector("#item-name");
const foodCalories = document.querySelector("#item-calories");
const totalSpan = document.querySelector("#total-calories");
const list = document.querySelector(".items");
let total = 0;

button.addEventListener("click", (event)=>{
    let mealName = foodname.value;
    let mealCalories = parseInt(foodCalories.value);
    console.log(mealName);
    console.log(mealCalories);

    total += mealCalories;
    totalSpan.innerHTML = total;

    let listItem = document.createElement("li");
    let text = `Food: ${mealName}; Calories: ${mealCalories}`;
    listItem.appendChild(document.createTextNode(text));
    list.appendChild(listItem);
    

    console.log("total",total);


    event.preventDefault();
})