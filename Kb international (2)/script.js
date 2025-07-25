// Index page script - Shows only 6 featured vehicles without search functionality

document.addEventListener('DOMContentLoaded', function() {
    // Wait for data.js to load
    if (typeof vehicleData === 'undefined') {
        setTimeout(() => {
            initializeFeaturedVehicles();
        }, 100);
    } else {
        initializeFeaturedVehicles();
    }
});

function initializeFeaturedVehicles() {
    // Get featured vehicles (first 6)
    const featuredVehicles = vehicleData.getFeaturedVehicles();
    
    // Display featured vehicles
    displayVehicles(featuredVehicles);
}
