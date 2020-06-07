let foodDataObject = {
    name: "Nasi Goreng",
    calories: "638",
    nutrition: {
        Carbs: "86g",
        Fat: "25g",
        Protein: "16g"
    },
    ingredients: [
        "fried chicken",
        "fried egg",
        "pappadum",
        "sambal",
        "cucumber slices"
    ]
};

let foodData = JSON.stringify(foodDataObject);
let key = "meal-data";
localStorage.setItem(key, foodData);

let jsonString = localStorage.getItem(key);
let food = JSON.parse(jsonString);

console.log("Meal Details" + "\n" + "\n" + "Meal Name: " + food.name + "\n" + "\n" + "Ingredients: ");

for (let i = 0; i <food.ingredients.length; i++){
	console.log(food.ingredients[i]);
}

console.log("\n" + "\n" + "Health Facts: " + food.calories + " calories");

console.log("Nutrition: " + food.nutrition.Carbs + "\n" + "Fat: " + food.nutrition.Fat + "\n" + "Protein: " + food.nutrition.Protein);
