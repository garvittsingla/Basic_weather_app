const button = document.getElementById("search-button");
const input = document.getElementById("city-input");
const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const cityTemp = document.getElementById("city-temp");
const nearby = document.getElementById("nearby");


async function getData(cityName){
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=8547ac94c827467597275355240509&q=${cityName}&aqi=no`);
    return await promise.json()
}  
gsap.to("#city-name",{
    y:30,
    duration:3,
    delay:3
})



button.addEventListener('click', async ()=>{
    const value = input.value;
    const result = await getData(value);
    cityName.innerText = `${result.location.name},${result.location.region} - ${result.location.country}`
    cityTime.innerText = result.location.localtime;
    cityTemp.innerText = result.current.temp_c;
    nearby.innerText = result.current.condition.text;
})



