const elCardTemp = document.getElementById("card-temp");
const elParent = document.getElementById("parent");
const elLoader = document.getElementById("loader");
const elError = document.getElementById("error");

function init() {
  elLoader.classList.remove("hidden");

  fetch("https://json-api.uz/api/project/fn43/cars")
    .then(res => res.json())
    .then(res => ui(res.data))
    .catch(() => elError.classList.remove("hidden"))
    .finally(() => elLoader.classList.add("hidden"));
}

init();

function ui(cars) {
  elParent.innerHTML = "";
  cars.forEach(car => {
    const clone = elCardTemp.content.cloneNode(true);

    const elTitle = clone.querySelector("h2");
    elTitle.textContent = car.name;

    const elDescription = document.createElement("div");
    elDescription.textContent = car.description;
    elDescription.classList.add("text-sm", "mt-2");

    const elYear = document.createElement("div");
    elYear.textContent = `Yili: ${car.year}`;
    elYear.classList.add("text-sm");

    const elColor = document.createElement("div");
    elColor.textContent = `Rangi: ${car.colorName}`;
    elColor.classList.add("text-sm");

    const elEngine = document.createElement("div");
    elEngine.textContent = `Dvigatel: ${car.engine}, ${car.horsepower} hp`;
    elEngine.classList.add("text-sm");

    const elDoorSeat = document.createElement("div");
    elDoorSeat.textContent = `${car.doorCount} eshik, ${car.seatCount} o‘rindiq`;
    elDoorSeat.classList.add("text-sm");

    const elFuel = document.createElement("div");
    elFuel.textContent = `Yoqilg‘i: ${car.fuelType}`;
    elFuel.classList.add("text-sm");

    const elConsumption = document.createElement("div");
    elConsumption.textContent = `Shahar: ${car.fuelConsumption.city}, Yo‘l: ${car.fuelConsumption.highway}, Aralash: ${car.fuelConsumption.combined}`;
    elConsumption.classList.add("text-sm");

    const elCategory = document.createElement("div");
    elCategory.textContent = `Kategoriya: ${car.category}`;
    elCategory.classList.add("text-sm");

    const elCountry = document.createElement("div");
    elCountry.textContent = `Davlat: ${car.country}`;
    elCountry.classList.add("text-sm");

    const elSpeed = document.createElement("div");
    elSpeed.textContent = `Tezlik/aksel: ${car.maxSpeed}, ${car.acceleration}`;
    elSpeed.classList.add("text-sm");

    const elBody = clone.querySelector(".card-body");
    elBody.appendChild(elDescription);
    elBody.appendChild(elYear);
    elBody.appendChild(elColor);
    elBody.appendChild(elEngine);
    elBody.appendChild(elDoorSeat);
    elBody.appendChild(elFuel);
    elBody.appendChild(elConsumption);
    elBody.appendChild(elCategory);
    elBody.appendChild(elCountry);
    elBody.appendChild(elSpeed);

    elParent.appendChild(clone);
  });
}
