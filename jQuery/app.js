const meal = fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')

meal.then((realdata)=>{
console.log(realdata)

    return realdata.json()

}).then((actualdata)=>{
    console.log(actualdata);

    for(var i = 0 ; i< 10 ; i++){
        document.getElementsByClassName('card-img-top')[i].src = actualdata.meals[i].strMealThumb;
        document.getElementsByTagName('h1')[i].innerHTML = actualdata.meals[i].strMeal;
        document.getElementsByTagName('span')[i].innerHTML = actualdata.meals[i].idMeal;
    }
}).catch((err)=>{
    console.log(err);
})