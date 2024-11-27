let foodEl = document.querySelector('.food');

let indian = document.querySelector('#indian');
let canadian = document.querySelector('#canadian');
let american = document.querySelector('#american');
let thai = document.querySelector('#thai');
let british = document.querySelector('#british');
let russian = document.querySelector('#russian');


let recipe;

const fetchData = async (area) => {
    const apiUrl = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
    const data = await apiUrl.json();
    recipe = data.meals;
    showData(recipe);

};

const searchRecipe = () => {
    let input = document.querySelector('#search');

    input.addEventListener("keydown", async (e)=> {
        if (e.key === "Enter") {
            let inputValue = input.value;
            const apiUrl = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`);
         const data = await apiUrl.json();
         recipe = data.meals;
         showData(recipe);
        }
    })

};
searchRecipe();

let showData = (recipe) =>{
    foodEl.innerHTML = recipe.map((meal) => `<div>
<div style="text-align:center">
<img src=${meal.strMealThumb} style="width:220px; border-radius:10px; border:2px solid blue" />
</div>
<h5 style="margin:10px">${meal.strMeal}</h5>
</div>`).join("");
};

indian.addEventListener("click", () => {
    fetchData("indian");
});
canadian.addEventListener("click", () => {
    fetchData("canadian");
});
american.addEventListener("click", () => {
    fetchData("american");
});
thai.addEventListener("click", () => {
    fetchData("thai");
});
british.addEventListener("click", () => {
    fetchData("british");
});
russian.addEventListener("click", () => {
    fetchData("russian");
});
fetchData('indian')



