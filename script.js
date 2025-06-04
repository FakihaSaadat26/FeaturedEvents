    const events = [
      {
        name: "Tech Expo 2024",
        date: "July 12, 2024",
        time: "10:00 AM",
        location: "Expo Center, Lahore",
        description: "A gathering of innovators, startups, and tech lovers."
      },
      {
        name: "Food Carnival",
        date: "August 5, 2024",
        time: "1:00 PM",
        location: "Main Park, Islamabad",
        description: "Try out amazing food from local and international vendors."
      },
      {
        name: "Music Night",
        date: "August 20, 2024",
        time: "6:00 PM",
        location: "Beach Arena, Karachi",
        description: "Live performances by top artists."
      },
      {
        name: "Startup Pitch Fest",
        date: "September 1, 2024",
        time: "9:00 AM",
        location: "NUST Auditorium",
        description: "Young entrepreneurs present their startups to investors."
      }
    ];

    const eventsContainer = document.getElementById("eventsContainer");
    const searchInput = document.getElementById("searchInput");

    function renderEvents(filter = "") {
      eventsContainer.innerHTML = "";
      const filtered = events.filter(e => e.name.toLowerCase().includes(filter.toLowerCase()));
      if (filtered.length === 0) {
        eventsContainer.innerHTML = `<div class='col-12 text-center text-muted'>No events found</div>`;
        return;
      }
      filtered.forEach(event => {
        const card = `
          <div class="col-md-6 col-lg-4 mb-4" data-aos="zoom-in">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">${event.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${event.date} | ${event.time}</h6>
                <p class="card-text"><strong>Location:</strong> ${event.location}</p>
                <p class="card-text">${event.description}</p>
                <a href="#" class="btn btn-primary w-100 mt-3">Register <i class="fa-solid fa-arrow-right ms-1"></i></a>
              </div>
            </div>
          </div>
        `;
        eventsContainer.insertAdjacentHTML("beforeend", card);
      });
    }

    searchInput.addEventListener("input", (e) => {
      renderEvents(e.target.value);
    });

    renderEvents();
  