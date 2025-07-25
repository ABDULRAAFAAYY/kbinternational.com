// Common functionality shared across all pages

document.addEventListener('DOMContentLoaded', function () {
    // Navigation Toggle Functionality
    initializeNavigation();
    
    // Japan Time Functionality
    initializeJapanTime();
    
    // Close menu when clicking outside
    initializeOutsideClickHandler();
});

// Initialize navigation toggle functionality
function initializeNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;

    if (!navToggle || !navMenu) {
        console.warn('Missing nav-toggle or nav-menu in the DOM.');
        return;
    }

    navToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
        body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function () {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            body.style.overflow = '';
        });
    });
}

// Initialize Japan time functionality
function initializeJapanTime() {
    function updateJapanTime() {
        const now = new Date();
        const japanTime = new Date(now.toLocaleString("en-US", {timeZone: "Asia/Tokyo"}));
        
        const options = {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        };
        
        const timeString = japanTime.toLocaleTimeString('en-US', options);
        const japanTimeElement = document.getElementById('japan-time');
        
        if (japanTimeElement) {
            japanTimeElement.textContent = timeString;
        }
    }

    // Update Japan time immediately
    updateJapanTime();
    
    // Update Japan time every second
    setInterval(updateJapanTime, 1000);
}

// Initialize outside click handler for navigation
function initializeOutsideClickHandler() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;

    if (!navToggle || !navMenu) {
        return;
    }

    document.addEventListener('click', function(e) {
        if (!e.target.closest('nav') && !e.target.closest('.nav-toggle')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            body.style.overflow = '';
        }
    });
}

// Common function to display vehicles in grid
function displayVehicles(vehiclesToDisplay, gridSelector = '.vehicle-grid') {
    const grid = document.querySelector(gridSelector);
    
    if (!grid) {
        console.error('Vehicle grid not found');
        return;
    }
    
    grid.innerHTML = '';
    
    if (vehiclesToDisplay.length === 0) {
        grid.innerHTML = '<p class="no-results">No vehicles match your criteria.</p>';
        return;
    }
    
    vehiclesToDisplay.forEach(vehicle => {
        const card = document.createElement('div');
        card.className = 'vehicle-card';
        card.innerHTML = `
            <div class="vehicle-image" style="background-image: url('${vehicle.image}')"></div>
            <div class="vehicle-details">
                <h3>${vehicle.year} ${vehicle.make} ${vehicle.model}</h3>
                <p><strong>Grade:</strong> ${vehicle.grade}</p>
                <p><strong>Mileage:</strong> ${vehicle.mileage}</p>
                <p><strong>Transmission:</strong> ${vehicle.transmission}</p>
                <div class="vehicle-price">$${vehicle.price.toLocaleString()}</div>
                <a href="product.html?carId=${vehicle.id}" class="btn">View Details</a>
            </div>
        `;
        grid.appendChild(card);
    });
}
