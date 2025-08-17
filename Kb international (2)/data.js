// Centralized Vehicle Data Structure
const vehicleData = {
    countries: {
        "Japan": {
            makes: ["Toyota", "Lexus", "Nissan", "Honda", "Mitsubishi", "Mazda", "Subaru", "Daihatsu", "Suzuki"],
            markedMakes: ["Nissan"],
            models: {
                "Toyota": ["Alphard", "Aqua", "Camry", "Corolla", "Crown", "Estima", "Harrier", "Hiace", "Hilux", "Land Cruiser", "Mark X", "Noah", "Passo", "Prius", "Probox", "Raize", "Rav4", "Roomy", "Sai", "Sienta", "Supra", "Toyota 86", "Vellfire", "Vitz", "Voxy", "Wish", "Yaris"],
                "Lexus": ["Ct", "Is", "Ls", "Nx", "Rx", "Ux"],
                "Nissan": ["Caravan", "Clipper", "Dayz", "Elgrand", "Fairlady Z", "Juke", "March", "Note", "Serena", "Skyline", "X-Trail"],
                "Honda": ["Accord", "Civic", "Cr-Z", "Fit", "Freed", "Insight", "Life", "N-Box", "N-One", "N-Wgn", "Odyssey", "Shuttle", "Stepwagon", "Vezel"],
                "Mitsubishi": ["Delica", "Ek Wagon", "Lancer", "Outlander", "Pajero"],
                "Mazda": ["Atenza", "Axela", "Biante", "Cx-5", "Demio", "Flair Roadster", "Rx", "Scrum"],
                "Subaru": ["Brz", "Chiffon", "Forester", "Impreza", "Levorg", "Outback", "Wrx"],
                "Daihatsu": ["Atrai", "Cast", "Copen", "Hijet", "Mira", "Move", "Rocky", "Tanto", "Terios Kid", "Thor", "Wake"],
                "Suzuki": ["Alto", "Carry", "Every", "Hustler", "Jimny", "Solio", "Spacia", "Swift", "Wagon R", "Xbee"]
            }
        },
        "Germany": {
            makes: ["Mercedes Benz", "Amg", "Mcc Smart", "Bmw", "Bmw Alpina", "Audi", "Volkswagen", "Opel", "Porsche", "Europe Ford", "Mercedes Maybach", "Mercedes Amg"],
            markedMakes: [],
            models: {
                "Mercedes Benz": ["A-Class", "C-Class", "E-Class", "S-Class", "GLA", "GLC", "GLE", "GLS", "GLB", "CLA", "CLS", "G-Class"],
                "Bmw": ["1 Series", "2 Series", "3 Series", "4 Series", "5 Series", "7 Series", "X1", "X2", "X3", "X4", "X5", "X6", "X7", "Z4", "I8"],
                "Audi": ["A1", "A3", "A4", "A5", "A6", "A7", "A8", "Q2", "Q3", "Q5", "Q7", "Q8", "E-Tron", "TT", "R8"],
                "Volkswagen": ["Golf", "Polo", "Passat", "Tiguan", "Touareg", "Arteon", "ID.3", "ID.4", "ID.6", "Beetle", "Jetta", "T-Roc"],
                "Porsche": ["911", "Taycan", "Panamera", "Macan", "Cayenne", "Boxster", "Cayman"]
            }
        },
        "England": {
            makes: ["Rolls-Royce", "Bentley", "Jaguar", "Land Rover", "Mini"],
            markedMakes: [],
            models: {
                "Rolls-Royce": ["Phantom", "Ghost", "Wraith", "Dawn", "Cullinan"],
                "Bentley": ["Continental", "Flying Spur", "Bentayga", "Mulsanne"],
                "Jaguar": ["XE", "XF", "XJ", "F-Pace", "E-Pace", "I-Pace", "F-Type"],
                "Land Rover": ["Range Rover", "Range Rover Sport", "Range Rover Velar", "Range Rover Evoque", "Discovery", "Defender"]
            }
        },
        "Italy": {
            makes: ["Fiat", "Ferrari", "Lancia", "Alfa Romeo", "Maserati", "Lamborghini", "Autobianchi", "Abarth"],
            markedMakes: ["Ferrari", "Maserati", "Lamborghini", "Abarth"],
            models: {
                "Ferrari": ["488", "F8", "Roma", "Portofino", "SF90", "812", "LaFerrari"],
                "Lamborghini": ["Aventador", "Huracan", "Urus"],
                "Maserati": ["Ghibli", "Quattroporte", "Levante", "GranTurismo"],
                "Alfa Romeo": ["Giulia", "Stelvio", "4C", "Giulietta"]
            }
        },
        "France": {
            makes: ["Renault", "Peugeot", "Citroen", "Ds Automobiles"],
            markedMakes: [],
            models: {
                "Renault": ["Clio", "Megane", "Captur", "Kadjar", "Koleos", "Talisman", "Zoe"],
                "Peugeot": ["208", "308", "508", "2008", "3008", "5008", "Rifter"],
                "Citroen": ["C3", "C4", "C5", "Berlingo", "Cactus", "DS3", "DS4"]
            }
        },
        "Sweden": {
            makes: ["Volvo", "Saab"],
            markedMakes: [],
            models: {
                "Volvo": ["S60", "S90", "V60", "V90", "XC40", "XC60", "XC90"]
            }
        },
        "USA": {
            makes: ["Cadillac", "Chevrolet", "Gmc", "Pontiac", "Buick", "Oldsmobile", "Hummer", "Lincoln", "Ford", "Mercury", "Chrysler", "Chrysler Jeep", "Dodge"],
            markedMakes: [],
            models: {
                "Ford": ["Fiesta", "Focus", "Mustang", "F-150", "Explorer", "Edge", "Escape"],
                "Chevrolet": ["Camaro", "Corvette", "Malibu", "Impala", "Tahoe", "Suburban", "Silverado"],
                "Dodge": ["Challenger", "Charger", "Durango", "Journey"]
            }
        }
    },
    
    // All vehicles data - will be used by inventory page
   vehicles: [
       {
    id: 1,
    country: 'Japan',
    make: 'Toyota',
    model: 'Crown',
    grade: 'Z',
    year: 2024,
    price: 52000,
    mileage: '3,000 km',
    transmission: 'Automatic',
    image: 'images/Japan/Toyota/Crown/Crown-1.jpg',
    thumbnails: [
        'images/Japan/Toyota/Crown/Crown-1.jpg',
        'images/Japan/Toyota/Crown/Crown-2.jpg',
        'images/Japan/Toyota/Crown/Crown-3.jpg',
        'images/Japan/Toyota/Crown/Crown-4.jpg',
        'images/Japan/Toyota/Crown/Crown-5.jpg'
    ],
    related: [1,3,5,7]
},
{
    id: 2,
    country: 'Japan',
    make: 'Toyota',
    model: 'Estima',
    grade: 'Aeras Premium',
    year: 2017,
    price: 12300,
    mileage: '82,000 km',
    transmission: 'Automatic',
    image: 'images/Japan/Toyota/Estima/Estima-1.jpg',
    thumbnails: [
        'images/Japan/Toyota/Estima/Estima-1.jpg',
        'images/Japan/Toyota/Estima/Estima-2.jpg',
        'images/Japan/Toyota/Estima/Estima-3.jpg',
        'images/Japan/Toyota/Estima/Estima-4.jpg',
        'images/Japan/Toyota/Estima/Estima-5.jpg'
    ],
    related: [1,3,5,7]
},
{
    id: 3,
    country: 'Japan',
    make: 'Toyota',
    model: 'Harrier',
    grade: 'Z',
    year: 2023,
    price: 29200,
    mileage: '13,000 km',
    transmission: 'Automatic',
    image: 'images/Japan/Toyota/Harrier/Harrier-1.jpg',
    thumbnails: [
        'images/Japan/Toyota/Harrier/Harrier-1.jpg',
        'images/Japan/Toyota/Harrier/Harrier-2.jpg',
        'images/Japan/Toyota/Harrier/Harrier-3.jpg',
        'images/Japan/Toyota/Harrier/Harrier-4.jpg',
        'images/Japan/Toyota/Harrier/Harrier-5.jpg'
    ],
    related: [13, 14, 16, 17]
},
{
    id: 4,
    country: 'Japan',
    make: 'Toyota',
    model: 'Land Cruiser',
    grade: 'ZX',
    year: 2024,
    price: 65000,
    mileage: '14,000 km',
    transmission: 'Automatic',
    image: 'images/Japan/Toyota/Land Cruiser/Land Cruiser-1.jpg',
    thumbnails: [
        'images/Japan/Toyota/Land Cruiser/Land Cruiser-1.jpg',
        'images/Japan/Toyota/Land Cruiser/Land Cruiser-2.jpg',
        'images/Japan/Toyota/Land Cruiser/Land Cruiser-3.jpg',
        'images/Japan/Toyota/Land Cruiser/Land Cruiser-4.jpg',
        'images/Japan/Toyota/Land Cruiser/Land Cruiser-5.jpg'
    ],
    related: [1,3,5,7]
},
{
    id: 5,
    country: 'Japan',
    make: 'Toyota',
    model: 'Passo',
    grade: 'Moda',
    year: 2023,
    price: 9300,
    mileage: '13,000 km',
    transmission: 'Automatic',
    image: 'images/Japan/Toyota/Passo/Passo-1.jpg',
    thumbnails: [
        'images/Japan/Toyota/Passo/Passo-1.jpg',
        'images/Japan/Toyota/Passo/Passo-2.jpg',
        'images/Japan/Toyota/Passo/Passo-3.jpg',
        'images/Japan/Toyota/Passo/Passo-4.jpg',
        'images/Japan/Toyota/Passo/Passo-5.jpg'
        
    ],
    related: [1,3,6,7]
},
       {
    id: 6,
    country: 'Japan',
    make: 'Toyota',
    model: 'Aqua',
    grade: 'Z',
    year: 2024,
    price: 16300,
    mileage: '2,000 km',
    transmission: 'Automatic',
    image: 'images/Japan/Toyota/Aqua/Aqua-1.jpg',
    thumbnails: [
        'images/Japan/Toyota/Aqua/Aqua-1.jpg',
        'images/Japan/Toyota/Aqua/Aqua-2.jpg',
        'images/Japan/Toyota/Aqua/Aqua-3.jpg',
        'images/Japan/Toyota/Aqua/Aqua-4.jpg',
        'images/Japan/Toyota/Aqua/Aqua-5.jpg'
    ],
    related: [1,2,3,4]
},
   
{
    id: 7,
    country: 'Japan',
    make: 'Toyota',
    model: 'Alphard',
    grade: 'Z',
    year: 2024,
    price: 56500,
    mileage: '150 km',
    transmission: 'Automatic',
    image: 'images/Japan/Toyota/Alphard/Alphard-1.jpg',
    thumbnails: [
        'images/Japan/Toyota/Alphard/Alphard-1.jpg',
        'images/Japan/Toyota/Alphard/Alphard-2.jpg',
        'images/Japan/Toyota/Alphard/Alphard-3.jpg',
        'images/Japan/Toyota/Alphard/Alphard-4.jpg',
        'images/Japan/Toyota/Alphard/Alphard-5.jpg'  
    ],
    related: [1,3,5,7]
},
       {
    id: 8,
    country: 'Japan',
    make: 'Honda',
    model: 'Civic',
    grade: 'Vi',
    year: 1995,
    price: "Ask", // you can fill this in
    mileage: "Ask", // if available
    transmission: 'FAT (Automatic)',
    image: 'images/Japan/Honda/Civic/Civicc-1.jpg',
    thumbnails: [
        'images/Japan/Honda/Civic/Civicc-1.jpg',
        'images/Japan/Honda/Civic/Civicc-2.jpg'
    ],
    related: [2, 4, 6, 9]
},
       {
    id: 9,
    country: 'Japan',
    make: 'Honda',
    model: 'Civic',
    grade: 'SiR (EK4)',
    year: 1998,
    price: "Ask", // fill in later
    mileage: "Ask", // add if available
    transmission: 'F5 (Manual)',
    image: 'images/Japan/Honda/Civic-EK4/Civic-EK4-1.jpg',
    thumbnails: [
        'images/Japan/Honda/Civic-EK4/Civic-EK4-1.jpg',
        'images/Japan/Honda/Civic-EK4/Civic-EK4-2.jpg'
    ],
    related: [2, 5, 7, 8]
}



],
    
    // Featured vehicles for index page (first 6 cars)
    getFeaturedVehicles() {
        return this.vehicles.slice(0, 4);
    },
    
    // Get all vehicles for inventory page
    getAllVehicles() {
        return this.vehicles;
    }
};

// Make data globally available
window.vehicleData = vehicleData;







