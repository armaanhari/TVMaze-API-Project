async function getShow() {
    try {
        // 1. Get the search term from the search box
        const searchTerm = document.getElementById("search").value;
        console.log(searchTerm);

        // Send a request to TVMaze (no API key needed)
        const url = "https://api.tvmaze.com/search/shows?q=" + searchTerm;
        const response = await fetch(url);

        // Decode the response as JSON
        const json = await response.json();
        console.log(JSON.stringify(json));

        const showHolder = document.getElementById("ShowHolder");

        for (show of json) {
            // Create a div to hold each title
            let divContainer = document.createElement("div");
            // Give the div the css class of CARD
            divContainer.classList.add("card");

            // Create a CONTAINER div to hold the title and year
            let card = document.createElement("div");
            // Give the CONTAINER div the style of container
            card.classList.add("container");

            let titleHeader = document.createElement("h3");
            titleHeader.textContent = show.show.name + ": " + show.show.premiered;
            card.appendChild(titleHeader);

            // Add the CONTAINER to the CARD
            divContainer.appendChild(card);

            // Add all the elements to the showHolder element
            showHolder.appendChild(divContainer);
        }
    }
    catch (error) {
        console.log(error);
    }
}