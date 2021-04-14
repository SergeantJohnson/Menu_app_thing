name_of_food=[];

function addItem() {
    food=document.getElementById("food").value;
    name_of_food.push(food);
    console.log(name_of_food);
    document.getElementById("display").innerHTML=name_of_food;
}