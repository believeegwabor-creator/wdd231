// ======================================
// HOME.JS
// WDD 231 - Chamber Home Page
// ======================================

// ===============================
// Footer Information
// ===============================

const currentYear = document.querySelector("#current-year");
const lastModified = document.querySelector("#last-modified");

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modification: ${document.lastModified}`;

// ===============================
// Weather API
// ===============================

const apiKey = "92c9dcfbeeaf1279b96bea22a071d2cf";

const latitude = 6.5244;
const longitude = 3.3792;

async function getWeather() {

    try {

        const currentUrl =
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

        const forecastUrl =
            `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

        const currentResponse = await fetch(currentUrl);
        const forecastResponse = await fetch(forecastUrl);

        if (!currentResponse.ok || !forecastResponse.ok) {
            throw new Error("Unable to load weather data.");
        }

        const currentData = await currentResponse.json();
        const forecastData = await forecastResponse.json();

        displayCurrentWeather(currentData);
        displayForecast(forecastData);

    } catch (error) {

        console.error("Weather Error:", error);

        document.querySelector("#weather").innerHTML =
            "<p>Weather information is currently unavailable.</p>";

    }

}

function displayCurrentWeather(data) {

    document.querySelector("#current-temp").textContent =
        `${Math.round(data.main.temp)}°C`;

    document.querySelector("#weather-description").textContent =
        data.weather[0].description;

    const icon = document.querySelector("#weather-icon");

    icon.src =
        `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    icon.alt = data.weather[0].description;

}

function displayForecast(data) {

    const forecast = document.querySelector("#forecast");

    forecast.innerHTML = "";

    const dailyForecast = data.list.filter(item =>
        item.dt_txt.includes("12:00:00")
    );

    dailyForecast.slice(0, 3).forEach(day => {

        const date = new Date(day.dt_txt);

        const forecastItem = document.createElement("p");

        forecastItem.innerHTML = `
            <strong>${date.toLocaleDateString("en-US", {
                weekday: "short"
            })}</strong>: ${Math.round(day.main.temp)}°C
        `;

        forecast.appendChild(forecastItem);

    });

}
 
async function getSpotlights() {

    try {

        const response = await fetch("data/members.json");

        if (!response.ok) {
            throw new Error("Unable to load members.");
        }

        const members = await response.json();

        displaySpotlights(members);

    } catch (error) {

        console.error(error);

    }

}

function displaySpotlights(members) {

    const container = document.querySelector("#spotlight-container");

    container.innerHTML = "";

    // Gold and Silver members only

    const qualifiedMembers = members.filter(member =>
        member.membership === 2 || member.membership === 3
    );

    // Shuffle randomly

    qualifiedMembers.sort(() => Math.random() - 0.5);

    // Display 3 members

    qualifiedMembers.slice(0, 3).forEach(member => {

        const card = document.createElement("section");

        card.classList.add("member-card");

        card.innerHTML = `

            <img
                src="images/${member.image}"
                alt="${member.name} Logo"
                loading="lazy">

            <h3>${member.name}</h3>

            <p><strong>Industry:</strong> ${member.industry}</p>

            <p><strong>Phone:</strong> ${member.phone}</p>

            <p><strong>Address:</strong> ${member.address}</p>

            <p><strong>Membership:</strong>
                ${member.membership === 3 ? "🥇 Gold" : "🥈 Silver"}
            </p>

            <a
                href="${member.website}"
                target="_blank"
                rel="noopener">

                Visit Website

            </a>

        `;

        container.appendChild(card);

    });

}

// ===============================
// Initialize
// ===============================

getWeather();
getSpotlights();