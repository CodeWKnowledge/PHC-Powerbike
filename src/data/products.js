import { IMAGES } from './assets';

export const PRODUCTS = [
    {
        id: 1,
        name: 'S1-Dark Obsidian',
        price: '$12,400',
        category: 'Powerbikes',
        description: 'A balanced electric powerbike designed for daily streets and long rides. Quiet strength, smooth handling, and dependable range.',
        specs: [
            { label: 'Range', value: '180 km' },
            { label: 'Top Speed', value: '120 km/h' },
            { label: 'Charge Time', value: '2 hours' },
            { label: 'Weight', value: '165 kg' }
        ],
        images: [IMAGES.products.bike1, IMAGES.products.bike2, IMAGES.products.bike3],
        img: IMAGES.products.bike1
    },
    {
        id: 2,
        name: 'Core Carbon Helmet',
        price: '$850',
        category: 'Helmets',
        description: 'Aerodynamic superiority meets high-impact protection. The Core Carbon is built from aerospace-grade fibers.',
        specs: [
            { label: 'Safety', value: 'DOT / ECE' },
            { label: 'Weight', value: '1350g' },
            { label: 'Visor', value: 'Photochromic' }
        ],
        images: [IMAGES.products.helmet1, IMAGES.products.helmet2],
        img: IMAGES.products.helmet1
    },
    {
        id: 3,
        name: 'Urban Moto Boots',
        price: '$420',
        category: 'Boots',
        description: 'Tough enough for the ride, comfortable enough for the walk. Reinforced ankles and water-resistant finish.',
        specs: [
            { label: 'Material', value: 'Full Grain Leather' },
            { label: 'Protection', value: 'D3O Inserts' }
        ],
        images: [IMAGES.products.boots1, IMAGES.products.boots2],
        img: IMAGES.products.boots1
    },
    {
        id: 4,
        name: 'S1-Cobalt Blue',
        price: '$12,400',
        category: 'Powerbikes',
        description: 'The S1 in a striking Cobalt finish. Same raw electric power, now in a high-visibility urban aesthetic.',
        specs: [
            { label: 'Range', value: '180 km' },
            { label: 'Top Speed', value: '120 km/h' }
        ],
        images: [IMAGES.products.bike2, IMAGES.products.bike1],
        img: IMAGES.products.bike2
    },
    {
        id: 5,
        name: 'Aero Gloves',
        price: '$120',
        category: 'Gloves',
        description: 'Lightweight summer gloves with touch-screen compatibility and carbon knuckle protection.',
        specs: [
            { label: 'Venting', value: 'High Flow Mesh' },
            { label: 'Grip', value: 'Silicone Printed' }
        ],
        images: [IMAGES.products.gloves1, IMAGES.products.gloves2],
        img: IMAGES.products.gloves1
    },
    {
        id: 6,
        name: 'Stealth Mask',
        price: '$95',
        category: 'Accessories',
        description: 'Windproof and dust-resistant neoprene mask. Perfect for high-speed urban deployments.',
        specs: [
            { label: 'Filter', value: 'N95 Equivalent' },
            { label: 'Size', value: 'Adjustable One-size' }
        ],
        images: [IMAGES.products.mask1, IMAGES.products.mask2],
        img: IMAGES.products.mask1
    },
    {
        id: 7,
        name: 'Apex Powerbike',
        price: '$15,600',
        category: 'Powerbikes',
        description: 'The pinnacle of urban engineering. Faster, stronger, and more refined than anything on the street today.',
        specs: [
            { label: 'Range', value: '250 km' },
            { label: 'Top Speed', value: '160 km/h' },
            { label: 'Charge Time', value: '45 mins (Fast)' },
            { label: 'Weight', value: '180 kg' }
        ],
        images: [IMAGES.products.bike3, IMAGES.products.bike4, IMAGES.products.bike1],
        img: IMAGES.products.bike3
    },
    {
        id: 8,
        name: 'Night Rider Helmet',
        price: '$920',
        category: 'Helmets',
        description: 'Ultralight carbon fiber construction with advanced ventilation. Designed for maximum protection.',
        specs: [
            { label: 'Material', value: '3K Carbon Fiber' },
            { label: 'Weight', value: '1250g' },
            { label: 'Safety', value: 'ECE 22.06' }
        ],
        images: [IMAGES.products.helmet2, IMAGES.products.helmet1],
        img: IMAGES.products.helmet1
    },
    {
        id: 9,
        name: 'Urban Vest',
        price: '$280',
        category: 'Accessories',
        description: 'High-visibility urban armor. Lightweight, breathable, and designed for maximum mobility.',
        specs: [
            { label: 'Armor', value: 'Level 2 Specialized' },
            { label: 'Visibility', value: '3M Reflective' }
        ],
        images: [IMAGES.products.vest1, IMAGES.products.vest2],
        img: IMAGES.products.vest1
    },
    {
        id: 10,
        name: 'Racer Boot Pro',
        price: '$550',
        category: 'Boots',
        description: 'Professional grade racing boots. Ultimate precision and safety for high-speed cornering.',
        specs: [
            { label: 'Closure', value: 'BOA System' },
            { label: 'Slider', value: 'Replaceable Magnesium' }
        ],
        images: [IMAGES.products.boots2, IMAGES.products.boots1],
        img: IMAGES.products.boots2
    },
    {
        id: 11,
        name: 'Thermal Glove',
        price: '$150',
        category: 'Gloves',
        description: 'Insulated gloves for cold weather rides. Keeps grip feel high while maintaining warmth.',
        specs: [
            { label: 'Thermal', value: 'Thinsulate lining' },
            { label: 'Waterproof', value: 'Gore-Tex' }
        ],
        images: [IMAGES.products.gloves2, IMAGES.products.gloves1],
        img: IMAGES.products.gloves2
    },
    {
        id: 12,
        name: 'Carbon Jacket',
        price: '$450',
        category: 'Accessories',
        description: 'Impact-resistant jacket with integrated shoulder and elbow protection.',
        specs: [
            { label: 'Textile', value: 'Cordura 1000D' },
            { label: 'Liners', value: 'Removable Thermal' }
        ],
        images: [IMAGES.products.jacket1, IMAGES.products.jacket2],
        img: IMAGES.products.jacket1
    },
    {
        id: 13,
        name: 'Phantom Black',
        price: '$14,200',
        category: 'Powerbikes',
        description: 'Aggressive styling with a stealth matte black finish. The Phantom is built for those who own the night.',
        specs: [
            { label: 'Torque', value: '120 Nm' },
            { label: 'Acceleration', value: '0-100 in 3.8s' }
        ],
        images: [IMAGES.products.bike4, IMAGES.products.bike5],
        img: IMAGES.products.bike4
    },
    {
        id: 14,
        name: 'Storm Gray Escape',
        price: '$13,800',
        category: 'Powerbikes',
        description: 'Versatile electric power designed for both city commute and weekend escapes into the hills.',
        specs: [
            { label: 'Suspension', value: 'Adjustable Showa' },
            { label: 'Ground Clearance', value: '180mm' }
        ],
        images: [IMAGES.products.bike5, IMAGES.products.bike6],
        img: IMAGES.products.bike5
    },
    {
        id: 15,
        name: 'Red Fury Edition',
        price: '$16,400',
        category: 'Powerbikes',
        description: 'Limited edition high-performance model. Calibrated for maximum track performance and street dominated.',
        specs: [
            { label: 'Power', value: '150 kW' },
            { label: 'Brakes', value: 'Brembo Stylema' }
        ],
        images: [IMAGES.products.bike6, IMAGES.products.bike7],
        img: IMAGES.products.bike6
    },
    {
        id: 16,
        name: 'White Ghost Stealth',
        price: '$15,200',
        category: 'Powerbikes',
        description: 'Clean, futuristic, and terrifyingly fast. The White Ghost features a unique pearlescent ceramic finish.',
        specs: [
            { label: 'Tech', value: 'AI Ride Assist' },
            { label: 'Cooling', value: 'Liquid Thermal' }
        ],
        images: [IMAGES.products.bike7, IMAGES.products.bike8],
        img: IMAGES.products.bike7
    },
    {
        id: 17,
        name: 'Stealth Onyx Apex',
        price: '$17,800',
        category: 'Powerbikes',
        description: 'The ultimate evolution of the Apex series. Full carbon bodywork and extreme power delivery.',
        specs: [
            { label: 'Body', value: 'Full Carbon Fiber' },
            { label: 'Drive', value: 'Carbon Belt' }
        ],
        images: [IMAGES.products.bike8, IMAGES.products.bike1],
        img: IMAGES.products.bike8
    },
    {
        id: 18,
        name: 'Titan Armor Helmet',
        price: '$750',
        category: 'Helmets',
        description: 'Bulky, protective, and unmistakably aggressive. The Titan Armor provides a wider field of view.',
        specs: [
            { label: 'Ventilation', value: '12-Port System' },
            { label: 'Profile', value: 'Modular' }
        ],
        images: [IMAGES.products.helmet3, IMAGES.products.helmet4],
        img: IMAGES.products.helmet3
    },
    {
        id: 19,
        name: 'Rogue Street Helmet',
        price: '$680',
        category: 'Helmets',
        description: 'Designed for the urban renegade. Lightweight, compact, and featuring an integrated drop-down sun visor.',
        specs: [
            { label: 'Weight', value: '1180g' },
            { label: 'Visor', value: 'Internal Sun Shield' }
        ],
        images: [IMAGES.products.helmet4, IMAGES.products.helmet3],
        img: IMAGES.products.helmet4
    },
    {
        id: 20,
        name: 'Apex Vision Pro',
        price: '$980',
        category: 'Helmets',
        description: 'The helmet for those who need to see everything. Dual-pane heated visor to prevent fogging in any condition.',
        specs: [
            { label: 'FOV', value: '200 Degrees' },
            { label: 'Heated', value: 'Thermal-Mesh' }
        ],
        images: [IMAGES.products.helmet5, IMAGES.products.helmet6],
        img: IMAGES.products.helmet5
    },
    {
        id: 21,
        name: 'Carbon X-6 Elite',
        price: '$1,100',
        category: 'Helmets',
        description: 'Hand-laid carbon fiber with gold-infused resin. The most premium safety gear in the collection.',
        specs: [
            { label: 'Rarity', value: 'Handmade' },
            { label: 'Material', value: 'Gold-Laced Carbon' }
        ],
        images: [IMAGES.products.helmet6, IMAGES.products.helmet5],
        img: IMAGES.products.helmet6
    },
    {
        id: 22,
        name: 'Terrain Master Boots',
        price: '$380',
        category: 'Boots',
        description: 'Rugged adventure boots with deep-lug soles. Built for any terrain you throw at them.',
        specs: [
            { label: 'Sole', value: 'Vibram Traction' },
            { label: 'Waterproof', value: 'OutDry Tech' }
        ],
        images: [IMAGES.products.boots3, IMAGES.products.boots1],
        img: IMAGES.products.boots3
    },
    {
        id: 23,
        name: 'Pro Grip Pro-X',
        price: '$180',
        category: 'Gloves',
        description: 'Professional racing gloves with palm sliders and titanium knuckle protection.',
        specs: [
            { label: 'Material', value: 'Kangaroo Leather' },
            { label: 'Protection', value: 'Titanium Knuckles' }
        ],
        images: [IMAGES.products.gloves3, IMAGES.products.gloves1],
        img: IMAGES.products.gloves3
    },
    {
        id: 24,
        name: 'Tactical Armor Jacket',
        price: '$620',
        category: 'Accessories',
        description: 'Modular jacket with removable sleeves and multiple storage points for urban exploration.',
        specs: [
            { label: 'Pockets', value: '8 Tactical Slots' },
            { label: 'Shell', value: 'Ballistic Nylon' }
        ],
        images: [IMAGES.products.jacket2, IMAGES.products.jacket3],
        img: IMAGES.products.jacket2
    },
    {
        id: 25,
        name: 'Winter Shield Coat',
        price: '$540',
        category: 'Accessories',
        description: 'The ultimate protection against the elements. Heated elements integrated into the chest and back.',
        specs: [
            { label: 'Heating', value: '3-Zone Kinetic' },
            { label: 'Battery', value: 'USB-C Rechargeable' }
        ],
        images: [IMAGES.products.jacket3, IMAGES.products.jacket1],
        img: IMAGES.products.jacket3
    },
    {
        id: 26,
        name: 'Urban Mask V2',
        price: '$110',
        category: 'Accessories',
        description: 'Updated mask with improved airflow and more aggressive styling. Features integrated LED lighting.',
        specs: [
            { label: 'LED', value: 'RGB Customizable' },
            { label: 'Filter', value: 'HEPA Replaceable' }
        ],
        images: [IMAGES.products.mask2, IMAGES.products.mask1],
        img: IMAGES.products.mask2
    },
    {
        id: 27,
        name: 'Reflective Safety Vest',
        price: '$190',
        category: 'Accessories',
        description: 'Maximum visibility for night deployments. The entire surface is retro-reflective.',
        specs: [
            { label: 'Material', value: 'Full Reflective' },
            { label: 'Fit', value: 'Over-Jacket' }
        ],
        images: [IMAGES.products.vest2, IMAGES.products.vest1],
        img: IMAGES.products.vest2
    },
    {
        id: 28,
        name: 'Carbon Fiber Guard',
        price: '$310',
        category: 'Accessories',
        description: 'Lightweight chest and back guard for additional impact protection under any jacket.',
        specs: [
            { label: 'Level', value: 'CE Level 2' },
            { label: 'Weight', value: '950g' }
        ],
        images: [IMAGES.products.jacket1, IMAGES.products.jacket2],
        img: IMAGES.products.jacket1
    }
];
