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
        model: 'Land Cruiser',
        grade: 'Heritage',
        year: 2020,
        price: 28500,
        mileage: '45,000 km',
        transmission: 'Automatic',
        image: 'images/Japan/Toyota/landcruiser/landcruiser.jpg',
        thumbnails: [
            'images/Japan/Toyota/landcruiser/landcruiser.jpg',
            'images/Japan/Toyota/landcruiser/landcruiser-1.jpg',
            'images/Japan/Toyota/landcruiser/landcruiser-2.jpg',
            'images/Japan/Toyota/landcruiser/landcruiser-3.jpg'
        ],
        related: [2, 3, 4, 5]
    },
    {
        id: 2,
        country: 'Japan',
        make: 'Nissan',
        model: 'Skyline',
        grade: 'GT-R Premium',
        year: 2018,
        price: 24900,
        mileage: '32,000 km',
        transmission: 'Automatic',
        image: 'images/Japan/Nissan/Skyline/Skyline-1.jpg',
        thumbnails: [
            'images/Japan/Nissan/Skyline/Skyline-1.jpg',
            'images/Japan/Nissan/Skyline/Skyline-2.jpg',
            'images/Japan/Nissan/Skyline/Skyline-3.jpg',
            'images/Japan/Nissan/Skyline/Skyline-4.jpg'
        ],
        related: [1, 3, 4, 5]
    },
    {
        id: 3,
        country: 'Germany',
        make: 'Mercedes-Benz',
        model: 'C-Class',
        grade: 'AMG Line',
        year: 2021,
        price: 42000,
        mileage: '18,000 km',
        transmission: 'Automatic',
        image: 'images/Germany/Mercedez-Benz/C-Class/C-Class-1.jpg',
        thumbnails: [
            'images/Germany/Mercedez-Benz/C-Class/C-Class-1.jpg',
            'images/Germany/Mercedez-Benz/C-Class/C-Class-2.jpg',
            'images/Germany/Mercedez-Benz/C-Class/C-Class-3.jpg',
            'images/Germany/Mercedez-Benz/C-Class/C-Class-4.jpg'
        ],
        related: [1, 2, 4, 5]
    },
    {
        id: 4,
        country: 'England',
        make: 'Rolls-Royce',
        model: 'Phantom',
        grade: 'EWB Luxury',
        year: 2020,
        price: 450000,
        mileage: '9,000 km',
        transmission: 'Automatic',
        image: 'images/England/Rolls-Royce/Phantom/Phantom-1.jpg',
        thumbnails: [
            'images/England/Rolls-Royce/Phantom/Phantom-1.jpg',
            'images/England/Rolls-Royce/Phantom/Phantom-2.jpg',
            'images/England/Rolls-Royce/Phantom/Phantom-3.jpg',
            'images/England/Rolls-Royce/Phantom/Phantom-4.jpg'
        ],
        related: [1, 2, 3, 5]
    },
    {
        id: 5,
        country: 'France',
        make: 'Peugeot',
        model: '2008',
        grade: 'GT Line',
        year: 2022,
        price: 27000,
        mileage: '12,000 km',
        transmission: 'Automatic',
        image: 'images/France/Peugeot/2008/2008-1.jpg',
        thumbnails: [
            'images/France/Peugeot/2008/2008-1.jpg',
            'images/France/Peugeot/2008/2008-2.jpg',
            'images/France/Peugeot/2008/2008-3.jpg',
            'images/France/Peugeot/2008/2008-4.jpg'
        ],
        related: [1, 2, 3, 4]
    },
    {
        id: 6,
        country: 'Italy',
        make: 'Ferrari',
        model: 'SF90',
        grade: 'Stradale',
        year: 2023,
        price: 510000,
        mileage: '3,000 km',
        transmission: 'Automatic',
        image: 'images/Italy/Ferrari/SF90/SF90-1.jpg',
        thumbnails: [
            'images/Italy/Ferrari/SF90/SF90-1.jpg',
            'images/Italy/Ferrari/SF90/SF90-2.jpg',
            'images/Italy/Ferrari/SF90/SF90-3.jpg',
            'images/Italy/Ferrari/SF90/SF90-4.jpg'
        ],
        related: [1, 2, 3, 4]
    },
    {
        id: 7,
        country: 'Sweden',
        make: 'Volvo',
        model: 'S60',
        grade: 'R-Design',
        year: 2021,
        price: 35000,
        mileage: '14,500 km',
        transmission: 'Automatic',
        image: 'images/Sweden/Volvo/S60/S60-1.jpg',
        thumbnails: [
            'images/Sweden/Volvo/S60/S60-1.jpg',
            'images/Sweden/Volvo/S60/S60-2.jpg',
            'images/Sweden/Volvo/S60/S60-3.jpg',
            'images/Sweden/Volvo/S60/S60-4.jpg'
        ],
        related: [1, 2, 3, 4]
    },
    {
        id: 8,
        country: 'USA',
        make: 'Ford',
        model: 'Focus',
        grade: 'ST-Line',
        year: 2019,
        price: 21000,
        mileage: '28,000 km',
        transmission: 'Automatic',
        image: 'images/US/Ford/Focus/Focus-1.jpg',
        thumbnails: [
            'images/US/Ford/Focus/Focus-1.jpg',
            'images/US/Ford/Focus/Focus-2.jpg',
            'images/US/Ford/Focus/Focus-3.webp',
            'images/US/Ford/Focus/Focus-4.webp'
        ],
        related: [1, 2, 3, 4]
    },
    {
        id: 9,
        country: 'Japan',
        make: 'Honda',
        model: 'Civic',
        grade: 'Type R',
        year: 2020,
        price: 23500,
        mileage: '25,000 km',
        transmission: 'Manual',
        image: 'images/Japan/Honda/Civic/Civic-1.jpg',
        thumbnails: [
            'images/Japan/Honda/Civic/Civic-1.jpg',
            'images/Japan/Honda/Civic/Civic-2.jpg',
            'images/Japan/Honda/Civic/Civic-3.jpg',
            'images/Japan/Honda/Civic/Civic-4.jpg'
        ],
        related: [1, 2, 7, 8]
    },
    {
        id: 10,
        country: 'Germany',
        make: 'Bmw',
        model: '3 Series',
        grade: 'M Sport',
        year: 2022,
        price: 45000,
        mileage: '15,000 km',
        transmission: 'Automatic',
        image: 'images/Germany/BMW/3Series/3Series-1.jpg',
        thumbnails: [
            'images/Germany/BMW/3Series/3Series-1.jpg',
            'images/Germany/BMW/3Series/3Series-2.jpg',
            'images/Germany/BMW/3Series/3Series-3.jpg',
            'images/Germany/BMW/3Series/3Series-4.jpg'
        ],
        related: [3, 4, 5, 6]
    },
    {
        id: 11,
        country: 'Japan',
        make: 'Mazda',
        model: 'Cx-5',
        grade: 'Takumi',
        year: 2021,
        price: 32000,
        mileage: '20,000 km',
        transmission: 'Automatic',
        image: 'images/Japan/Mazda/CX5/CX5-1.jpg',
        thumbnails: [
            'images/Japan/Mazda/CX5/CX5-1.jpg',
            'images/Japan/Mazda/CX5/CX5-2.jpg',
            'images/Japan/Mazda/CX5/CX5-3.jpg',
            'images/Japan/Mazda/CX5/CX5-4.jpg'
        ],
        related: [1, 2, 9, 10]
    },
    {
        id: 12,
        country: 'England',
        make: 'Jaguar',
        model: 'F-Pace',
        grade: 'R-Dynamic',
        year: 2020,
        price: 55000,
        mileage: '22,000 km',
        transmission: 'Automatic',
        image: 'images/England/Jaguar/F-Pace/F-Pace-1.jpg',
        thumbnails: [
            'images/England/Jaguar/F-Pace/F-Pace-1.jpg',
            'images/England/Jaguar/F-Pace/F-Pace-2.jpg',
            'images/England/Jaguar/F-Pace/F-Pace-3.jpg',
            'images/England/Jaguar/F-Pace/F-Pace-4.jpg'
        ],
        related: [3, 4, 10, 11]
    }
],
    
    // Featured vehicles for index page (first 6 cars)
    getFeaturedVehicles() {
        return this.vehicles.slice(0, 6);
    },
    
    // Get all vehicles for inventory page
    getAllVehicles() {
        return this.vehicles;
    }
};

// Make data globally available
window.vehicleData = vehicleData;
