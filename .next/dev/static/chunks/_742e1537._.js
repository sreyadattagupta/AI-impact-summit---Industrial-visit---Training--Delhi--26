(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/mockDb.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/aiRecommendations.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAIRecommendations",
    ()=>getAIRecommendations,
    "getPairingSuggestion",
    ()=>getPairingSuggestion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mockDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mockDb.ts [app-client] (ecmascript)");
;
function getAIRecommendations(ctx) {
    const { pnrData, currentHour } = ctx;
    const passengerClass = pnrData.passengers[0]?.class ?? 'Sleeper';
    // Determine meal time
    let mealCategory;
    let mealReason;
    if (currentHour >= 6 && currentHour < 11) {
        mealCategory = 'Breakfast';
        mealReason = 'morning breakfast';
    } else if (currentHour >= 11 && currentHour < 15) {
        mealCategory = 'Lunch';
        mealReason = 'lunch time';
    } else if (currentHour >= 15 && currentHour < 18) {
        mealCategory = 'Snacks';
        mealReason = 'afternoon snacks';
    } else {
        mealCategory = 'Dinner';
        mealReason = 'dinner';
    }
    // Filter by meal category
    let candidates = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mockDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_FOOD_ITEMS"].filter((f)=>f.available && f.category === mealCategory);
    // Class-based preference
    let classReason = '';
    if (passengerClass === 'AC1' || passengerClass === 'AC2') {
        // Premium — prefer higher price items
        candidates = candidates.sort((a, b)=>b.price - a.price);
        classReason = ` premium options for ${passengerClass} travelers`;
    } else if (passengerClass === 'Sleeper' || passengerClass === 'General') {
        // Value — prefer lower price items
        candidates = candidates.sort((a, b)=>a.price - b.price);
        classReason = ` value picks for ${passengerClass} class`;
    } else {
        candidates = candidates.sort((a, b)=>b.rating - a.rating);
        classReason = ` top-rated items`;
    }
    // Always add a beverage
    const beverage = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mockDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_FOOD_ITEMS"].filter((f)=>f.category === 'Beverages' && f.available).sort((a, b)=>b.rating - a.rating)[0];
    const topPicks = candidates.slice(0, 2);
    if (beverage && !topPicks.find((f)=>f.id === beverage.id)) {
        topPicks.push(beverage);
    }
    return {
        items: topPicks.slice(0, 3),
        reason: `AI recommends${classReason} for ${mealReason} on your journey.`
    };
}
function getPairingSuggestion(itemId) {
    const pairings = {
        f001: 'f007',
        f002: 'f007',
        f003: 'f008',
        f009: 'f012',
        f010: 'f012'
    };
    const paired = pairings[itemId];
    if (!paired) return null;
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mockDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_FOOD_ITEMS"].find((f)=>f.id === paired) ?? null;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/order/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OrderPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/utensils.js [app-client] (ecmascript) <export default as Utensils>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mockDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mockDb.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$aiRecommendations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/aiRecommendations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function OrderPage() {
    _s();
    const [recommendations, setRecommendations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [cart, setCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrderPage.useEffect": ()=>{
            // Generate AI recommendations based on mock context
            const recs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$aiRecommendations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAIRecommendations"])({
                pnrData: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mockDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_PNR_DB"]['PNR1234567890'],
                currentHour: new Date().getHours(),
                journeyDurationHours: 10
            });
            setRecommendations(recs.items);
        }
    }["OrderPage.useEffect"], []);
    const addToCart = (item)=>{
        setCart((prev)=>{
            const existing = prev.find((p)=>p.item.id === item.id);
            if (existing) {
                return prev.map((p)=>p.item.id === item.id ? {
                        ...p,
                        quantity: p.quantity + 1
                    } : p);
            }
            return [
                ...prev,
                {
                    item,
                    quantity: 1
                }
            ];
        });
    };
    const total = cart.reduce((sum, c)=>sum + c.item.price * c.quantity, 0);
    const handleCheckout = ()=>{
        // In a real app we'd create the order here and get an ID,
        // For mock, we'll just redirect to the tracker with a mock PNR.
        router.push('/tracker?pnr=PNR1234567890&order=new');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen pb-24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-zinc-950/80 backdrop-blur-xl border-b border-white/5 pt-8 pb-6 px-4 sm:px-6 lg:px-8 relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-[-50%] left-[-10%] w-[40%] h-[200%] bg-orange-500/10 blur-[100px] rounded-full pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/app/order/page.tsx",
                        lineNumber: 48,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400 tracking-tight",
                                        children: "Food Menu"
                                    }, void 0, false, {
                                        fileName: "[project]/app/order/page.tsx",
                                        lineNumber: 51,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-zinc-400 mt-2 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                className: "h-4 w-4 text-orange-500"
                                            }, void 0, false, {
                                                fileName: "[project]/app/order/page.tsx",
                                                lineNumber: 53,
                                                columnNumber: 29
                                            }, this),
                                            " Delivered at upcoming station: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white font-medium bg-white/5 px-2 py-0.5 rounded-md border border-white/10",
                                                children: "Bhopal Junction"
                                            }, void 0, false, {
                                                fileName: "[project]/app/order/page.tsx",
                                                lineNumber: 53,
                                                columnNumber: 107
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/order/page.tsx",
                                        lineNumber: 52,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/order/page.tsx",
                                lineNumber: 50,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex bg-gradient-to-r from-orange-500/10 to-amber-500/5 p-4 rounded-2xl border border-orange-500/20 items-center gap-4 shadow-lg shadow-orange-500/5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 text-white shadow-inner",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                            className: "h-6 w-6"
                                        }, void 0, false, {
                                            fileName: "[project]/app/order/page.tsx",
                                            lineNumber: 58,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/order/page.tsx",
                                        lineNumber: 57,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-semibold uppercase tracking-wider text-orange-400 mb-1",
                                                children: "AI Engine Active"
                                            }, void 0, false, {
                                                fileName: "[project]/app/order/page.tsx",
                                                lineNumber: 61,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-medium text-white text-sm",
                                                children: "Personalized for your journey"
                                            }, void 0, false, {
                                                fileName: "[project]/app/order/page.tsx",
                                                lineNumber: 62,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/order/page.tsx",
                                        lineNumber: 60,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/order/page.tsx",
                                lineNumber: 56,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/order/page.tsx",
                        lineNumber: 49,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/order/page.tsx",
                lineNumber: 47,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 space-y-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300 flex items-center gap-2 mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                className: "h-6 w-6 text-orange-400"
                                            }, void 0, false, {
                                                fileName: "[project]/app/order/page.tsx",
                                                lineNumber: 73,
                                                columnNumber: 29
                                            }, this),
                                            "Recommended for you"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/order/page.tsx",
                                        lineNumber: 72,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid sm:grid-cols-2 xl:grid-cols-3 gap-6",
                                        children: recommendations.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0,
                                                    scale: 0.95
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    scale: 1
                                                },
                                                transition: {
                                                    delay: i * 0.1,
                                                    duration: 0.4
                                                },
                                                className: "group bg-zinc-950/50 backdrop-blur-md border border-orange-500/30 rounded-3xl p-6 hover:border-orange-500 transition-all flex flex-col shadow-lg shadow-orange-500/5 hover:shadow-orange-500/20 relative overflow-hidden",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-500/20 to-transparent blur-2xl rounded-full -mr-10 -mt-10 transition-transform group-hover:scale-150"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/order/page.tsx",
                                                        lineNumber: 85,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-start mb-5 relative z-10",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-5xl drop-shadow-lg",
                                                                children: item.image
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/order/page.tsx",
                                                                lineNumber: 87,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "bg-orange-500/10 border border-orange-500/20 text-xs px-3 py-1.5 rounded-full text-orange-300 font-semibold tracking-wide",
                                                                children: item.category
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/order/page.tsx",
                                                                lineNumber: 88,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/order/page.tsx",
                                                        lineNumber: 86,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-bold text-xl text-white mb-2 relative z-10",
                                                        children: item.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/order/page.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-zinc-400 line-clamp-2 mb-6 flex-1 relative z-10",
                                                        children: item.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/order/page.tsx",
                                                        lineNumber: 91,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mt-auto pt-5 border-t border-white/10 relative z-10",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-2xl font-bold text-white",
                                                                children: [
                                                                    "₹",
                                                                    item.price
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/order/page.tsx",
                                                                lineNumber: 94,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>addToCart(item),
                                                                className: "bg-orange-500 hover:bg-orange-400 text-white p-3 rounded-2xl transition-all shadow-lg hover:shadow-orange-500/30 active:scale-95",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__["Utensils"], {
                                                                    className: "h-5 w-5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/order/page.tsx",
                                                                    lineNumber: 99,
                                                                    columnNumber: 45
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/order/page.tsx",
                                                                lineNumber: 95,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/order/page.tsx",
                                                        lineNumber: 93,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, item.id, true, {
                                                fileName: "[project]/app/order/page.tsx",
                                                lineNumber: 78,
                                                columnNumber: 33
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/order/page.tsx",
                                        lineNumber: 76,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/order/page.tsx",
                                lineNumber: 71,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "pt-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold text-white mb-6",
                                        children: "All Menu Items"
                                    }, void 0, false, {
                                        fileName: "[project]/app/order/page.tsx",
                                        lineNumber: 109,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-4",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mockDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_FOOD_ITEMS"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "group bg-zinc-950/40 backdrop-blur-sm border border-white/5 rounded-3xl p-5 flex flex-col sm:flex-row gap-5 hover:bg-zinc-900/60 hover:border-white/10 transition-all",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-28 w-28 bg-zinc-900 rounded-2xl flex items-center justify-center text-5xl shrink-0 shadow-inner group-hover:bg-zinc-800 transition-colors",
                                                        children: item.image
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/order/page.tsx",
                                                        lineNumber: 113,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 py-1 flex flex-col justify-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between items-start mb-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                className: "font-bold text-white text-xl flex items-center gap-3",
                                                                                children: [
                                                                                    item.name,
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: `h-2.5 w-2.5 rounded-full ring-2 ring-offset-2 ring-offset-zinc-950 ${item.isVeg ? 'bg-green-500 ring-green-500/30' : 'bg-red-500 ring-red-500/30'}`
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/order/page.tsx",
                                                                                        lineNumber: 121,
                                                                                        columnNumber: 53
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/order/page.tsx",
                                                                                lineNumber: 119,
                                                                                columnNumber: 49
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm text-zinc-400 mt-1.5 line-clamp-2 max-w-xl",
                                                                                children: item.description
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/order/page.tsx",
                                                                                lineNumber: 123,
                                                                                columnNumber: 49
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/order/page.tsx",
                                                                        lineNumber: 118,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center text-sm font-bold text-amber-400 gap-1.5 bg-amber-400/10 px-3 py-1.5 rounded-xl border border-amber-400/20",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                                className: "h-4 w-4 fill-amber-400"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/order/page.tsx",
                                                                                lineNumber: 126,
                                                                                columnNumber: 49
                                                                            }, this),
                                                                            " ",
                                                                            item.rating
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/order/page.tsx",
                                                                        lineNumber: 125,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/order/page.tsx",
                                                                lineNumber: 117,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-4 flex justify-between items-center pt-4 border-t border-white/5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-bold text-xl text-white",
                                                                        children: [
                                                                            "₹",
                                                                            item.price
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/order/page.tsx",
                                                                        lineNumber: 130,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>addToCart(item),
                                                                        className: "text-sm font-bold text-zinc-900 bg-white hover:bg-zinc-200 px-6 py-2.5 rounded-full transition-all active:scale-95",
                                                                        children: "Add to Order"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/order/page.tsx",
                                                                        lineNumber: 131,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/order/page.tsx",
                                                                lineNumber: 129,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/order/page.tsx",
                                                        lineNumber: 116,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, item.id, true, {
                                                fileName: "[project]/app/order/page.tsx",
                                                lineNumber: 112,
                                                columnNumber: 33
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/order/page.tsx",
                                        lineNumber: 110,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/order/page.tsx",
                                lineNumber: 108,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/order/page.tsx",
                        lineNumber: 69,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:w-[400px] shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sticky top-24 bg-zinc-950/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold text-white flex items-center gap-3 mb-8 pb-4 border-b border-white/5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                            className: "h-6 w-6 text-zinc-400"
                                        }, void 0, false, {
                                            fileName: "[project]/app/order/page.tsx",
                                            lineNumber: 149,
                                            columnNumber: 29
                                        }, this),
                                        " Your Order"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/order/page.tsx",
                                    lineNumber: 148,
                                    columnNumber: 25
                                }, this),
                                cart.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-12 text-zinc-500 flex flex-col items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-16 w-16 bg-zinc-900 rounded-2xl flex items-center justify-center mb-4 border border-white/5 shadow-inner",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__["Utensils"], {
                                                className: "h-8 w-8 opacity-50"
                                            }, void 0, false, {
                                                fileName: "[project]/app/order/page.tsx",
                                                lineNumber: 155,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/order/page.tsx",
                                            lineNumber: 154,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-medium text-zinc-400",
                                            children: "Your cart is empty"
                                        }, void 0, false, {
                                            fileName: "[project]/app/order/page.tsx",
                                            lineNumber: 157,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm mt-1",
                                            children: "Add items from the menu to start ordering"
                                        }, void 0, false, {
                                            fileName: "[project]/app/order/page.tsx",
                                            lineNumber: 158,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/order/page.tsx",
                                    lineNumber: 153,
                                    columnNumber: 29
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4 mb-8 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar",
                                            children: cart.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center bg-black/40 border border-white/5 p-4 rounded-2xl",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-3xl drop-shadow-md",
                                                                    children: c.item.image
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/order/page.tsx",
                                                                    lineNumber: 166,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm font-bold text-white",
                                                                            children: c.item.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/order/page.tsx",
                                                                            lineNumber: 168,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs font-medium text-zinc-500 mt-0.5",
                                                                            children: [
                                                                                "₹",
                                                                                c.item.price,
                                                                                " x ",
                                                                                c.quantity
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/order/page.tsx",
                                                                            lineNumber: 169,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/order/page.tsx",
                                                                    lineNumber: 167,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/order/page.tsx",
                                                            lineNumber: 165,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-white text-lg flex-shrink-0",
                                                            children: [
                                                                "₹",
                                                                c.item.price * c.quantity
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/order/page.tsx",
                                                            lineNumber: 172,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/app/order/page.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 41
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/order/page.tsx",
                                            lineNumber: 162,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-black/30 p-5 rounded-2xl border border-white/5 mb-8 space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-sm font-medium text-zinc-400",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Subtotal"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/order/page.tsx",
                                                            lineNumber: 179,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-zinc-300",
                                                            children: [
                                                                "₹",
                                                                total
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/order/page.tsx",
                                                            lineNumber: 180,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/order/page.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-sm font-medium text-zinc-400",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Delivery Fee"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/order/page.tsx",
                                                            lineNumber: 183,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-zinc-300",
                                                            children: "₹40"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/order/page.tsx",
                                                            lineNumber: 184,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/order/page.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-xl font-bold text-white pt-3 mt-3 border-t border-white/10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Total"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/order/page.tsx",
                                                            lineNumber: 187,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-orange-400",
                                                            children: [
                                                                "₹",
                                                                total + 40
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/order/page.tsx",
                                                            lineNumber: 188,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/order/page.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/order/page.tsx",
                                            lineNumber: 177,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-orange-500/10 border border-orange-500/20 rounded-2xl p-4 mb-8 flex gap-3 text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                    className: "h-5 w-5 text-orange-400 shrink-0 mt-0.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/order/page.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-orange-200/80 leading-relaxed",
                                                    children: [
                                                        "Payment is held in secure ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-orange-400",
                                                            children: "Escrow"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/order/page.tsx",
                                                            lineNumber: 195,
                                                            columnNumber: 67
                                                        }, this),
                                                        ". Funds are only released after successful delivery to your seat."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/order/page.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/order/page.tsx",
                                            lineNumber: 192,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleCheckout,
                                            className: "w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white font-bold py-5 rounded-2xl shadow-xl shadow-orange-500/20 transition-all hover:shadow-orange-500/40 active:scale-[0.98] flex items-center justify-center gap-2 text-lg",
                                            children: [
                                                "Confirm & Track Order ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                    className: "h-6 w-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/order/page.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 59
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/order/page.tsx",
                                            lineNumber: 199,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/order/page.tsx",
                            lineNumber: 147,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/order/page.tsx",
                        lineNumber: 146,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/order/page.tsx",
                lineNumber: 68,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/order/page.tsx",
        lineNumber: 45,
        columnNumber: 9
    }, this);
}
_s(OrderPage, "OkrKwddm5E6w6gQBnuC2wAE2Db4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = OrderPage;
var _c;
__turbopack_context__.k.register(_c, "OrderPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_742e1537._.js.map