// Product page script - loads product details from centralized data

document.addEventListener('DOMContentLoaded', function() {
    // Wait for data.js to load
    if (typeof vehicleData === 'undefined') {
        setTimeout(() => {
            loadCarDetails();
        }, 100);
    } else {
        loadCarDetails();
    }
});

// Load car details based on URL (?carId=1)
function loadCarDetails() {
  const params = new URLSearchParams(window.location.search);
  const carId = parseInt(params.get('carId'));

  const car = vehicleData.vehicles.find(vehicle => vehicle.id === carId);
  if (!car) {
    console.error("Car not found!");
    return;
  }

  // Update main product details
  document.getElementById('main-car-image').src = car.image;
  document.getElementById('car-make-model').textContent = `${car.make} ${car.model}`;
  document.getElementById('car-year').textContent = `Year: ${car.year}`;
  // document.getElementById('car-country').textContent = `Country: ${car.country}`;
  document.getElementById('car-grade').textContent = `Grade: ${car.grade}`;
  document.getElementById('car-mileage').textContent = `Mileage: ${car.mileage}`;
  document.getElementById('car-transmission').textContent = `Transmission: ${car.transmission}`;
  document.getElementById('car-price').textContent = `Price: $${car.price.toLocaleString()}`;

  // Load thumbnails (4 images)
  loadThumbnails(car.thumbnails);

  // Load related cars (if available)
  if (car.related) {
    loadRelatedCars(car.related);
  }
}

// Load 4 thumbnails for the car
function loadThumbnails(thumbnails) {
  const container = document.getElementById('car-thumbnails');
  container.innerHTML = '';

  thumbnails.slice(0, 4).forEach(thumb => {
    const img = document.createElement('img');
    img.src = thumb;
    img.alt = "Thumbnail";
    img.addEventListener('click', () => {
      document.getElementById('main-car-image').src = thumb; // Update main image on click
    });
    container.appendChild(img);
  });
}

// Load 4 related cars
function loadRelatedCars(relatedIds) {
  const container = document.getElementById('related-cards');
  container.innerHTML = '';

  relatedIds.slice(0, 4).forEach(id => {
    const relatedCar = vehicleData.vehicles.find(car => car.id === id);
    if (relatedCar) {
      const card = document.createElement('div');
      card.className = 'car-card';
      card.innerHTML = `
        <div class="vehicle-image" style="background-image: url('${relatedCar.image}')"></div>
                <div class="vehicle-details">
                    <h3>${relatedCar.year} ${relatedCar.make} ${relatedCar.model}</h3>
                    <p><strong>Grade:</strong> ${relatedCar.grade}</p>
                    <p><strong>Mileage:</strong> ${relatedCar.mileage}</p>
                    <p><strong>Transmission:</strong> ${relatedCar.transmission}</p>
                    <div class="vehicle-price">$${relatedCar.price.toLocaleString()}</div>
                    <a href="product.html?carId=${relatedCar.id}" class="btn">View Details</a>
                </div>
      `;
      card.addEventListener('click', () => {
        window.location.href = `product.html?carId=${relatedCar.id}`;
      });
      container.appendChild(card);
    }
  });
}
