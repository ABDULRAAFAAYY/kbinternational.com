// Inventory page script - Shows all vehicles with complete search functionality

document.addEventListener('DOMContentLoaded', function() {
    // Wait for data.js to load and initialize inventory
    if (typeof vehicleData === 'undefined') {
        setTimeout(() => {
            initializeInventory();
        }, 100);
    } else {
        initializeInventory();
    }
});

function initializeInventory() {
    // Get all vehicles for inventory
    const allVehicles = vehicleData.getAllVehicles();

    // DOM elements
    const grid = document.querySelector('.vehicle-grid');
    const makeFilter = document.getElementById('make-filter');
    const modelFilter = document.getElementById('model-filter');
    const priceFilter = document.getElementById('price-filter');
    const countryFilter = document.getElementById('country-filter');
    const searchBtn = document.getElementById('search-btn');

    // Initialize filters
    initializeFilters();

    // Display all vehicles initially
    displayVehicles(allVehicles);

    // Event listeners
    countryFilter.addEventListener('change', function() {
        updateMakeFilter();
        updateModelFilter();
        filterVehicles();
    });
    
    makeFilter.addEventListener('change', function() {
        updateModelFilter();
        filterVehicles();
    });
    
    modelFilter.addEventListener('change', filterVehicles);
    priceFilter.addEventListener('change', filterVehicles);
    if (searchBtn) {
        searchBtn.addEventListener('click', filterVehicles);
    }

    // Initialize filter options
    function initializeFilters() {
        // Populate country filter
        countryFilter.innerHTML = '<option value="">All Countries</option>';
        Object.keys(vehicleData.countries).forEach(country => {
            countryFilter.innerHTML += `<option value="${country}">${country}</option>`;
        });
        
        // Initialize make and model filters
        updateMakeFilter();
        updateModelFilter();
    }

    // Update make filter based on selected country
    function updateMakeFilter() {
        const selectedCountry = countryFilter.value;
        let makes = [];
        
        if (selectedCountry) {
            makes = vehicleData.countries[selectedCountry].makes;
        } else {
            // If no country selected, show all makes from all countries
            makes = [...new Set(
                Object.values(vehicleData.countries)
                    .flatMap(country => country.makes)
            )];
        }
        
        // Update make filter options
        makeFilter.innerHTML = '<option value="">All Makes</option>';
        makes.forEach(make => {
            makeFilter.innerHTML += `<option value="${make}">${make}</option>`;
        });
        
        makeFilter.disabled = makes.length === 0;
    }

    // Update model filter based on selected make
    function updateModelFilter() {
        const selectedCountry = countryFilter.value;
        const selectedMake = makeFilter.value;
        let models = [];
        
        if (selectedMake && selectedCountry) {
            models = vehicleData.countries[selectedCountry].models[selectedMake] || [];
        }
        
        // Update model filter options
        modelFilter.innerHTML = '<option value="">All Models</option>';
        models.forEach(model => {
            modelFilter.innerHTML += `<option value="${model}">${model}</option>`;
        });
        
        modelFilter.disabled = models.length === 0;
    }

    // Filter vehicles based on selected criteria
    function filterVehicles() {
        const selectedCountry = countryFilter.value;
        const selectedMake = makeFilter.value;
        const selectedModel = modelFilter.value;
        const selectedPrice = priceFilter.value ? parseInt(priceFilter.value) : null;
        
        const filtered = vehicleData.vehicles.filter(vehicle => {
            // Fix country matching for inconsistent naming
            let vehicleCountry = vehicle.country;
            if (vehicleCountry === 'UK') vehicleCountry = 'England';
            
            const countryMatch = !selectedCountry || vehicleCountry === selectedCountry;
            const makeMatch = !selectedMake || vehicle.make === selectedMake;
            const modelMatch = !selectedModel || vehicle.model === selectedModel;
            const priceMatch = !selectedPrice || vehicle.price <= selectedPrice;
            
            return countryMatch && makeMatch && modelMatch && priceMatch;
        });
        
        displayVehicles(filtered);
    }
}
