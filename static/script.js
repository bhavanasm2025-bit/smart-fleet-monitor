fetch("/api/vehicles")
    .then(response => response.json())
    .then(vehicles => {

        document.getElementById("total").textContent =
            vehicles.length;

        const table = document.getElementById("vehicleTable");

        vehicles.forEach(vehicle => {

            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${vehicle.vehicle_id}</td>
                <td>${vehicle.model}</td>
                <td>${vehicle.mileage} km</td>
                <td>${vehicle.temperature} °C</td>
                <td>${vehicle.fuel_consumption}</td>
                <td>${vehicle.status}</td>
            `;

            table.appendChild(row);
        });
    });
