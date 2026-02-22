module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/lib/mockDb.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FOOD_STOP_STATION",
    ()=>FOOD_STOP_STATION,
    "MOCK_AGENTS",
    ()=>MOCK_AGENTS,
    "MOCK_FOOD_ITEMS",
    ()=>MOCK_FOOD_ITEMS,
    "MOCK_PNR_DB",
    ()=>MOCK_PNR_DB,
    "MOCK_STATIONS",
    ()=>MOCK_STATIONS,
    "MOCK_VENDORS",
    ()=>MOCK_VENDORS,
    "addEscrow",
    ()=>addEscrow,
    "addNotification",
    ()=>addNotification,
    "addOrder",
    ()=>addOrder,
    "getAgents",
    ()=>getAgents,
    "getEscrowByOrderId",
    ()=>getEscrowByOrderId,
    "getNotifications",
    ()=>getNotifications,
    "getOrderById",
    ()=>getOrderById,
    "getOrders",
    ()=>getOrders,
    "getTrainStatus",
    ()=>getTrainStatus,
    "markNotificationRead",
    ()=>markNotificationRead,
    "updateAgent",
    ()=>updateAgent,
    "updateEscrow",
    ()=>updateEscrow,
    "updateOrder",
    ()=>updateOrder,
    "updateTrainStatus",
    ()=>updateTrainStatus
]);
const MOCK_STATIONS = [
    {
        name: 'New Delhi',
        code: 'NDLS',
        lat: 28.6448,
        lng: 77.2167,
        scheduledArrival: '--',
        scheduledDeparture: '06:00'
    },
    {
        name: 'Mathura Junction',
        code: 'MTJ',
        lat: 27.4924,
        lng: 77.6737,
        scheduledArrival: '07:35',
        scheduledDeparture: '07:37'
    },
    {
        name: 'Agra Cantt',
        code: 'AGC',
        lat: 27.1767,
        lng: 78.0081,
        scheduledArrival: '08:15',
        scheduledDeparture: '08:17'
    },
    {
        name: 'Gwalior',
        code: 'GWL',
        lat: 26.2088,
        lng: 78.1797,
        scheduledArrival: '09:30',
        scheduledDeparture: '09:32'
    },
    {
        name: 'Jhansi Junction',
        code: 'JHS',
        lat: 25.4484,
        lng: 78.5685,
        scheduledArrival: '10:30',
        scheduledDeparture: '10:35'
    },
    {
        name: 'Bhopal Junction',
        code: 'BPL',
        lat: 23.2599,
        lng: 77.4126,
        scheduledArrival: '13:10',
        scheduledDeparture: '13:15'
    },
    {
        name: 'Itarsi Junction',
        code: 'ET',
        lat: 22.6153,
        lng: 77.7621,
        scheduledArrival: '14:20',
        scheduledDeparture: '14:25'
    },
    {
        name: 'Nagpur',
        code: 'NGP',
        lat: 21.1458,
        lng: 79.0882,
        scheduledArrival: '17:00',
        scheduledDeparture: '17:10'
    },
    {
        name: 'Bhusawal Junction',
        code: 'BSL',
        lat: 21.0462,
        lng: 75.7790,
        scheduledArrival: '20:30',
        scheduledDeparture: '20:35'
    },
    {
        name: 'Nashik Road',
        code: 'NK',
        lat: 19.9975,
        lng: 73.7898,
        scheduledArrival: '22:45',
        scheduledDeparture: '22:47'
    },
    {
        name: 'Mumbai CST',
        code: 'CSMT',
        lat: 18.9398,
        lng: 72.8355,
        scheduledArrival: '01:25',
        scheduledDeparture: '--'
    }
];
const FOOD_STOP_STATION = MOCK_STATIONS[5]; // Bhopal
const MOCK_PNR_DB = {
    'PNR1234567890': {
        pnr: 'PNR1234567890',
        trainNumber: '12001',
        trainName: 'Rajdhani Express',
        from: 'New Delhi',
        to: 'Mumbai CST',
        boardingStation: 'New Delhi',
        destinationStation: 'Mumbai CST',
        journeyDate: '2026-02-22',
        status: 'CONFIRMED',
        passengers: [
            {
                name: 'Sreya Datta Gupta',
                seat: '32',
                coach: 'A1',
                class: 'AC1',
                berth: 'Lower'
            },
            {
                name: 'Rahul Sharma',
                seat: '33',
                coach: 'A1',
                class: 'AC1',
                berth: 'Upper'
            }
        ]
    },
    'PNR9876543210': {
        pnr: 'PNR9876543210',
        trainNumber: '12951',
        trainName: 'Mumbai Rajdhani',
        from: 'New Delhi',
        to: 'Mumbai CST',
        boardingStation: 'New Delhi',
        destinationStation: 'Mumbai CST',
        journeyDate: '2026-02-22',
        status: 'CONFIRMED',
        passengers: [
            {
                name: 'Priya Mehta',
                seat: '14',
                coach: 'B2',
                class: 'AC2',
                berth: 'Lower'
            }
        ]
    },
    'PNR5551234567': {
        pnr: 'PNR5551234567',
        trainNumber: '12621',
        trainName: 'Tamil Nadu Express',
        from: 'New Delhi',
        to: 'Mumbai CST',
        boardingStation: 'New Delhi',
        destinationStation: 'Mumbai CST',
        journeyDate: '2026-02-22',
        status: 'CONFIRMED',
        passengers: [
            {
                name: 'Arun Kumar',
                seat: '55',
                coach: 'S4',
                class: 'Sleeper',
                berth: 'Middle'
            }
        ]
    }
};
const MOCK_FOOD_ITEMS = [
    {
        id: 'f001',
        name: 'Paneer Butter Masala',
        description: 'Creamy tomato-based curry with soft paneer cubes',
        price: 220,
        category: 'Lunch',
        isVeg: true,
        rating: 4.5,
        prepTime: 20,
        image: '🧀',
        available: true,
        tags: [
            'spicy',
            'curry',
            'popular'
        ]
    },
    {
        id: 'f002',
        name: 'Chicken Biryani',
        description: 'Fragrant basmati rice layered with tender chicken',
        price: 280,
        category: 'Lunch',
        isVeg: false,
        rating: 4.8,
        prepTime: 25,
        image: '🍛',
        available: true,
        tags: [
            'bestseller',
            'spicy',
            'rice'
        ]
    },
    {
        id: 'f003',
        name: 'Veg Thali',
        description: 'Complete meal with dal, sabzi, roti, rice, pickle & papad',
        price: 180,
        category: 'Thali',
        isVeg: true,
        rating: 4.3,
        prepTime: 15,
        image: '🍱',
        available: true,
        tags: [
            'complete meal',
            'value'
        ]
    },
    {
        id: 'f004',
        name: 'Masala Dosa',
        description: 'Crispy rice crepe with spiced potato filling',
        price: 120,
        category: 'Breakfast',
        isVeg: true,
        rating: 4.6,
        prepTime: 12,
        image: '🫓',
        available: true,
        tags: [
            'south indian',
            'crispy'
        ]
    },
    {
        id: 'f005',
        name: 'Samosa (2 pcs)',
        description: 'Golden fried pastry stuffed with spiced potatoes',
        price: 60,
        category: 'Snacks',
        isVeg: true,
        rating: 4.2,
        prepTime: 10,
        image: '🥟',
        available: true,
        tags: [
            'snack',
            'fried'
        ]
    },
    {
        id: 'f006',
        name: 'Chicken Sandwich',
        description: 'Toasted whole wheat bread with grilled chicken and veggies',
        price: 150,
        category: 'Snacks',
        isVeg: false,
        rating: 4.0,
        prepTime: 10,
        image: '🥪',
        available: true,
        tags: [
            'quick',
            'snack'
        ]
    },
    {
        id: 'f007',
        name: 'Masala Chai (2 cups)',
        description: 'Hot spiced tea brewed with ginger & cardamom',
        price: 40,
        category: 'Beverages',
        isVeg: true,
        rating: 4.7,
        prepTime: 5,
        image: '☕',
        available: true,
        tags: [
            'hot',
            'tea',
            'popular'
        ]
    },
    {
        id: 'f008',
        name: 'Cold Coffee',
        description: 'Refreshing blended coffee with milk and ice cream',
        price: 80,
        category: 'Beverages',
        isVeg: true,
        rating: 4.1,
        prepTime: 5,
        image: '🧋',
        available: true,
        tags: [
            'cold',
            'refreshing'
        ]
    },
    {
        id: 'f009',
        name: 'Dal Makhani + Naan',
        description: 'Slow-cooked black lentils with buttery naan bread',
        price: 200,
        category: 'Dinner',
        isVeg: true,
        rating: 4.6,
        prepTime: 20,
        image: '🫕',
        available: true,
        tags: [
            'dinner',
            'punjabi'
        ]
    },
    {
        id: 'f010',
        name: 'Mutton Curry + Rice',
        description: 'Slow-cooked mutton in aromatic spices with steamed rice',
        price: 320,
        category: 'Dinner',
        isVeg: false,
        rating: 4.7,
        prepTime: 30,
        image: '🍖',
        available: true,
        tags: [
            'dinner',
            'non-veg',
            'premium'
        ]
    },
    {
        id: 'f011',
        name: 'Aloo Paratha',
        description: 'Whole wheat flatbread stuffed with spiced potato, served with curd',
        price: 100,
        category: 'Breakfast',
        isVeg: true,
        rating: 4.4,
        prepTime: 10,
        image: '🫓',
        available: true,
        tags: [
            'breakfast',
            'punjabi'
        ]
    },
    {
        id: 'f012',
        name: 'Gulab Jamun (4 pcs)',
        description: 'Soft milk-solid dumplings soaked in rose sugar syrup',
        price: 80,
        category: 'Snacks',
        isVeg: true,
        rating: 4.5,
        prepTime: 5,
        image: '🍮',
        available: true,
        tags: [
            'sweet',
            'dessert'
        ]
    }
];
const MOCK_VENDORS = [
    {
        id: 'v001',
        name: 'Bhopal Station Kitchen',
        station: 'Bhopal Junction',
        stationCode: 'BPL',
        lat: 23.2599,
        lng: 77.4126,
        cuisine: [
            'North Indian',
            'South Indian',
            'Chinese'
        ],
        rating: 4.5,
        isOpen: true
    }
];
const MOCK_AGENTS = [
    {
        id: 'a001',
        name: 'Ramesh Kumar',
        phone: '+91 98765 43210',
        vendorId: 'v001',
        currentLat: 23.2612,
        currentLng: 77.4135,
        status: 'AVAILABLE',
        assignedOrderId: null
    }
];
// ============ IN-MEMORY STORES ============
let orders = [];
let escrows = [];
let notifications = [];
function getOrders() {
    return orders;
}
function getOrderById(id) {
    return orders.find((o)=>o.id === id);
}
function addOrder(order) {
    orders.push(order);
}
function updateOrder(id, updates) {
    const idx = orders.findIndex((o)=>o.id === id);
    if (idx === -1) return null;
    orders[idx] = {
        ...orders[idx],
        ...updates,
        updatedAt: new Date().toISOString()
    };
    return orders[idx];
}
function getEscrowByOrderId(orderId) {
    return escrows.find((e)=>e.orderId === orderId);
}
function addEscrow(escrow) {
    escrows.push(escrow);
}
function updateEscrow(orderId, updates) {
    const idx = escrows.findIndex((e)=>e.orderId === orderId);
    if (idx === -1) return null;
    escrows[idx] = {
        ...escrows[idx],
        ...updates
    };
    return escrows[idx];
}
function getNotifications() {
    return notifications;
}
function addNotification(n) {
    notifications.push({
        ...n,
        id: `notif_${Date.now()}_${Math.random().toString(36).slice(2)}`,
        createdAt: new Date().toISOString(),
        read: false
    });
}
function markNotificationRead(id) {
    const n = notifications.find((n)=>n.id === id);
    if (n) n.read = true;
}
// ============ TRAIN STATUS ============
let _trainStatus = {
    trainNumber: '12001',
    trainName: 'Rajdhani Express',
    currentStation: 'Gwalior',
    currentStationCode: 'GWL',
    nextStation: 'Jhansi Junction',
    nextStationCode: 'JHS',
    currentLat: 25.8,
    currentLng: 78.2,
    delayMinutes: 0,
    status: 'ON_TIME',
    speed: 120,
    distanceToStop: 385,
    eta: new Date(Date.now() + 3 * 60 * 60 * 1000).toISOString(),
    route: MOCK_STATIONS,
    lastUpdated: new Date().toISOString()
};
function getTrainStatus() {
    return {
        ..._trainStatus
    };
}
function updateTrainStatus(updates) {
    _trainStatus = {
        ..._trainStatus,
        ...updates,
        lastUpdated: new Date().toISOString()
    };
}
// ============ AGENT HELPERS ============
let _agents = [
    ...MOCK_AGENTS
];
function getAgents() {
    return _agents;
}
function updateAgent(id, updates) {
    const idx = _agents.findIndex((a)=>a.id === id);
    if (idx !== -1) _agents[idx] = {
        ..._agents[idx],
        ...updates
    };
}
}),
"[project]/lib/mockNTES.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HOLD_DELAY_THRESHOLD_MIN",
    ()=>HOLD_DELAY_THRESHOLD_MIN,
    "PREP_TRIGGER_DISTANCE_KM",
    ()=>PREP_TRIGGER_DISTANCE_KM,
    "getPNRStatus",
    ()=>getPNRStatus,
    "haversineDistance",
    ()=>haversineDistance,
    "simulateTrainMovement",
    ()=>simulateTrainMovement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mockDb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mockDb.ts [app-route] (ecmascript)");
;
function haversineDistance(lat1, lng1, lat2, lng2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLng / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}
// Simulate progressive train movement on the route
let _tick = 0;
const ROUTE_SEGMENTS = [
    {
        fromIdx: 0,
        toIdx: 1,
        tickStart: 0,
        tickEnd: 20
    },
    {
        fromIdx: 1,
        toIdx: 2,
        tickStart: 20,
        tickEnd: 35
    },
    {
        fromIdx: 2,
        toIdx: 3,
        tickStart: 35,
        tickEnd: 50
    },
    {
        fromIdx: 3,
        toIdx: 4,
        tickStart: 50,
        tickEnd: 65
    },
    {
        fromIdx: 4,
        toIdx: 5,
        tickStart: 65,
        tickEnd: 100
    },
    {
        fromIdx: 5,
        toIdx: 6,
        tickStart: 100,
        tickEnd: 115
    },
    {
        fromIdx: 6,
        toIdx: 7,
        tickStart: 115,
        tickEnd: 140
    },
    {
        fromIdx: 7,
        toIdx: 8,
        tickStart: 140,
        tickEnd: 160
    },
    {
        fromIdx: 8,
        toIdx: 9,
        tickStart: 160,
        tickEnd: 175
    },
    {
        fromIdx: 9,
        toIdx: 10,
        tickStart: 175,
        tickEnd: 200
    }
];
function interpolate(from, to, progress) {
    return from + (to - from) * progress;
}
function simulateTrainMovement() {
    _tick = (_tick + 1) % 200;
    // Find current segment
    const seg = ROUTE_SEGMENTS.find((s)=>_tick >= s.tickStart && _tick < s.tickEnd) || ROUTE_SEGMENTS[ROUTE_SEGMENTS.length - 1];
    const progress = (_tick - seg.tickStart) / (seg.tickEnd - seg.tickStart);
    const fromSt = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mockDb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MOCK_STATIONS"][seg.fromIdx];
    const toSt = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mockDb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MOCK_STATIONS"][seg.toIdx];
    const currentLat = interpolate(fromSt.lat, toSt.lat, progress);
    const currentLng = interpolate(fromSt.lng, toSt.lng, progress);
    const distanceToStop = haversineDistance(currentLat, currentLng, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mockDb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["FOOD_STOP_STATION"].lat, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mockDb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["FOOD_STOP_STATION"].lng);
    // Simulate delay every ~80 ticks
    const delayMinutes = _tick > 75 && _tick < 85 ? 20 : 0;
    const status = delayMinutes > 0 ? 'DELAYED' : _tick >= 195 ? 'ARRIVED' : 'ON_TIME';
    // ETA based on remaining distance at 100km/h average
    const etaHours = distanceToStop / 100;
    const eta = new Date(Date.now() + etaHours * 3600 * 1000).toISOString();
    const updated = {
        currentStation: fromSt.name,
        currentStationCode: fromSt.code,
        nextStation: toSt.name,
        nextStationCode: toSt.code,
        currentLat,
        currentLng,
        delayMinutes,
        status,
        speed: delayMinutes > 0 ? 0 : 110 + Math.round(Math.random() * 20),
        distanceToStop: Math.max(0, distanceToStop),
        eta
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mockDb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateTrainStatus"])(updated);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mockDb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTrainStatus"])();
}
function getPNRStatus(pnr) {
    // Returns train status + PNR info linked
    return {
        trainStatus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mockDb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTrainStatus"])(),
        pnr
    };
}
const PREP_TRIGGER_DISTANCE_KM = 30; // km from stop station to trigger prep
const HOLD_DELAY_THRESHOLD_MIN = 15; // minutes delay to trigger hold
}),
"[project]/app/api/train/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mockNTES$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mockNTES.ts [app-route] (ecmascript)");
;
;
async function GET(_req) {
    const status = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mockNTES$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["simulateTrainMovement"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        success: true,
        data: status
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6611ade1._.js.map