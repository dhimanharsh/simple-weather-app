let cityName = document.querySelector("#cityName");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  const obj = {
    city: cityName.value.toUpperCase(),
    Humidity: "19%",
    Pressure: "1005.4mb",
    Visibility: "8.05",
    Wind: " 3 km/h",
    DewPoint: "9°",
    UVIndex: "10 of 11",
    MoonPhase: "Last Quarter",
    celcius: "30-35",
  };
  if (cityName.value == "") {
    return alert("Please enter city Name");
  }
  let cityNameNew = document.createElement("h3");
  cityNameNew.innerText = obj.city + ", India";
  cityNameNew.className = "cityname";

  let elm1 = document.createElement("h1");
  elm1.innerText = "Humidity " + obj.Humidity;

  let elm2 = document.createElement("p");
  elm2.innerText = `Weather Today in ${obj.city} India`;

  let elm3 = document.createElement("span");
  elm3.innerText = "Feels Like";

  let elm4 = document.createElement("h2");
  elm4.innerText = obj.celcius + "celcius";

  let elmUl = document.createElement("ul");

  let elm5 = document.createElement("li");
  elm5.innerText = `Humidity : ${obj.Humidity}`;

  let elm6 = document.createElement("li");
  elm6.innerText = `Pressure : ${obj.Pressure}`;

  let elm7 = document.createElement("li");
  elm7.innerText = `Wind : ${obj.Wind}`;

  let append1 = document.querySelector("#main-section");
  append1.appendChild(cityNameNew);
  append1.appendChild(elm1);
  append1.appendChild(elm2);
  append1.appendChild(elm3);
  append1.appendChild(elm4);
  append1.appendChild(elmUl);

  elmUl.appendChild(elm5);
  elmUl.appendChild(elm6);
  elmUl.appendChild(elm7);
});
