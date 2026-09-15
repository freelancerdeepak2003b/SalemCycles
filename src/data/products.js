// ---------------------------------------------------------------------------
// SAMPLE catalogue data.
// Replace these entries with your real inventory — every product card,
// on every page, is generated automatically from this file. Nothing about
// products is hard-coded into any component.
//
// image: any URL works. Swap in real product photos when ready.
// ---------------------------------------------------------------------------

function img(seed, w = 640, h = 480) {
  return `https://picsum.photos/seed/${seed}/${w}/${h}`;
}

export const products = {
  cycles: [
  {
    id: "cyc-01",
    name: "Mountain Hawk 29",
    mrp_price: "15,000",
    d_price: "13,499",
    image: "/images/cycle.jpg",
    type: "kids",
    features: [
      "29-inch mountain wheels",
      "21-speed Shimano drivetrain",
      "Front suspension fork"
    ],
  },
  {
    id: "cyc-02",
    name: "City Comfort X",
    mrp_price: "10,500",
    d_price: "8,999",
    image: "/images/cycle.jpg",
    type: "mens",
    features: [
      "Ergonomic upright handlebars",
      "7-speed smooth shifting",
      "Full-length mudguards",
      "Comfort padded saddle",
    ],
  },
  {
    id: "cyc-03",
    name: "Velocity Road Pro",
    mrp_price: "9,500",
    d_price: "8,499",
    image: "/images/cycle.jpg",
    type: "kids",
    features: [
      "Aerodynamic lightweight frame",
      "18-speed performance gearing",
      "Drop handlebar setup",
      "700C road tyres",
    ],
  },
  {
    id: "cyc-04",
    name: "Tiny Rider 20",
    mrp_price: "7,500",
    d_price: "6,499",
    image: "/images/cycle.jpg",
    features: [
      "Suitable for ages 7–11",
      "Adjustable training wheels",
      "Strong steel frame",
      "Easy-pull brake levers",
    ],
  },
  {
    id: "cyc-05",
    name: "Thunder Trail 27",
    mrp_price: "23,000",
    d_price: "19,999",
    image: "/images/cycle.jpg",
    features: [
      "Full dual suspension",
      "24-speed gear system",
      "Hydraulic disc brakes",
      "All-terrain mountain tyres",
    ],
  },
  {
    id: "cyc-06",
    name: "Metro Swift",
    mrp_price: "9,200",
    d_price: "7,799",
    image: "/images/cycle.jpg",
    features: [
      "Single-speed drivetrain",
      "Lightweight steel frame",
      "Front and rear mudguards",
      "Wide comfort saddle",
    ],
  },
  {
    id: "cyc-07",
    name: "RockMaster Trail 26",
    mrp_price: "18,500",
    d_price: "15,999",
    image: "/images/cycle.jpg",
    features: [
      "26-inch rugged wheels",
      "18-speed indexed gears",
      "Front coil suspension",
      "High-grip trail tyres",
    ],
  },
  {
    id: "cyc-08",
    name: "Urban Breeze 7",
    mrp_price: "12,500",
    d_price: "10,499",
    image: "/images/cycle.jpg",
    features: [
      "Relaxed riding geometry",
      "7-speed gear mechanism",
      "Rear luggage carrier",
      "Reflective safety strips",
    ],
  },
  {
    id: "cyc-09",
    name: "AeroSprint 700",
    mrp_price: "33,500",
    d_price: "28,999",
    image: "/images/cycle.jpg",
    features: [
      "Racing-inspired frame",
      "20-speed precision gearing",
      "Lightweight alloy wheels",
      "High-pressure racing tyres",
    ],
  },
  {
    id: "cyc-10",
    name: "Junior Rocket 18",
    mrp_price: "6,800",
    d_price: "5,999",
    image: "/images/cycle.jpg",
    features: [
      "Ideal for ages 5–8",
      "Removable training wheels",
      "Protective chain cover",
      "Soft rubber handle grips",
    ],
  },
  {
    id: "cyc-11",
    name: "Alpine Rider 24",
    mrp_price: "16,500",
    d_price: "14,499",
    image: "/images/cycle.jpg",
    features: [
      "24-inch adventure wheels",
      "18-speed gear shifting",
      "Front suspension system",
      "Reinforced alloy frame",
    ],
  },
  {
    id: "cyc-12",
    name: "DailyRide Classic",
    mrp_price: "11,000",
    d_price: "9,299",
    image: "/images/cycle.jpg",
    features: [
      "Comfort-focused frame",
      "6-speed drivetrain",
      "Built-in kickstand",
      "Anti-slip city pedals",
    ],
  },
  {
    id: "cyc-13",
    name: "SpeedForge Elite",
    mrp_price: "36,500",
    d_price: "31,499",
    image: "/images/cycle.jpg",
    features: [
      "Premium lightweight frame",
      "22-speed racing drivetrain",
      "Aero drop handlebars",
      "Performance road tyres",
    ],
  },
  {
    id: "cyc-14",
    name: "Happy Pedals 16",
    mrp_price: "5,800",
    d_price: "4,999",
    image: "/images/cycle.jpg",
    features: [
      "Designed for ages 4–7",
      "Stable training wheels",
      "Lightweight steel body",
      "Child-friendly brake levers",
    ],
  },
  {
    id: "cyc-15",
    name: "StormRidge 26",
    mrp_price: "24,000",
    d_price: "20,499",
    image: "/images/cycle.jpg",
    features: [
      "26-inch off-road wheels",
      "27-speed drivetrain",
      "Adjustable front suspension",
      "Heavy-duty disc brakes",
    ],
  },
  {
    id: "cyc-16",
    name: "StreetMate Hybrid",
    mrp_price: "15,000",
    d_price: "12,799",
    image: "/images/cycle.jpg",
    features: [
      "Hybrid city and trail design",
      "21-speed gear system",
      "Adjustable handlebar stem",
      "Puncture-resistant tyres",
    ],
  },
  {
    id: "cyc-17",
    name: "RoadFlash Racer",
    mrp_price: "27,500",
    d_price: "23,999",
    image: "/images/cycle.jpg",
    features: [
      "Lightweight racing geometry",
      "16-speed precision shifting",
      "Slim aerodynamic handlebars",
      "Low-rolling-resistance tyres",
    ],
  },
  {
    id: "cyc-18",
    name: "Little Explorer 18",
    mrp_price: "7,800",
    d_price: "6,799",
    image: "/images/cycle.jpg",
    features: [
      "Suitable for ages 6–9",
      "Adjustable seat height",
      "Durable steel frame",
      "Safety reflector set",
    ],
  },
  {
    id: "cyc-19",
    name: "WildTrack Adventure",
    mrp_price: "20,500",
    d_price: "17,499",
    image: "/images/cycle.jpg",
    features: [
      "21-speed trail gearing",
      "Wide mountain handlebars",
      "Front hydraulic suspension",
      "High-traction gravel tyres",
    ],
  },
  {
    id: "cyc-20",
    name: "UrbanLoop Everyday",
    mrp_price: "11,500",
    d_price: "9,799",
    image: "/images/cycle.jpg",
    features: [
      "Low-step city frame",
      "8-speed smooth shifting",
      "Rear carrier mount",
      "Weather-resistant frame finish",
    ],
  },
  {
    id: "cyc-21",
    name: "RuralLoop Everyday",
    mrp_price: "11,500",
    d_price: "9,799",
    image: "/images/cycle.jpg",
    features: [
      "Low-step city frame",
      "8-speed smooth shifting",
      "Rear carrier mount",
      "Weather-resistant frame finish",
    ],
  }
],

  accessories: [
  {
    id: "acc-01",
    name: "Bell",
    mrp_price: "500",
    d_price: "399",
    image: "/images/bell.jpg",
    features: [
      "Loud clear sound",
      "Easy handlebar installation",
      "Compact lightweight design",
      "Durable metal construction",
    ],
  },
  {
    id: "acc-02",
    name: "LED Headlight",
    mrp_price: "1,200",
    d_price: "899",
    image: "/images/bell.jpg",
    features: [
      "Bright LED illumination",
      "Multiple light modes",
      "USB rechargeable battery",
      "Easy handlebar mounting",
    ],
  },
  {
    id: "acc-03",
    name: "Bicycle Lock",
    mrp_price: "900",
    d_price: "699",
    image: "/images/bell.jpg",
    features: [
      "Heavy-duty steel cable",
      "Strong anti-theft design",
      "Protective outer coating",
      "Includes two keys",
    ],
  },
  {
    id: "acc-04",
    name: "Water Bottle",
    mrp_price: "700",
    d_price: "499",
    image: "/images/bell.jpg",
    features: [
      "750ml capacity",
      "Leak-resistant cap",
      "Easy squeeze design",
      "Fits standard bottle cages",
    ],
  },
  {
    id: "acc-05",
    name: "Rear Carrier",
    mrp_price: "1,500",
    d_price: "1,199",
    image: "/images/bell.jpg",
    features: [
      "Strong aluminium construction",
      "Suitable for daily use",
      "Secure luggage support",
      "Easy rear frame mounting",
    ],
  },
  {
    id: "acc-06",
    name: "Cycle Stand",
    mrp_price: "800",
    d_price: "599",
    image: "/images/bell.jpg",
    features: [
      "Strong steel construction",
      "Stable parking support",
      "Anti-slip rubber foot",
      "Easy installation",
    ],
  },
],

  spares: [
  {
    id: "spr-01",
    name: "Tyre",
    mrp_price: "500",
    d_price: "399",
    image: "/images/tube.jpg",
    features: [
      "Durable rubber construction",
      "Strong road grip",
      "Puncture-resistant design",
      "Suitable for everyday riding",
    ],
  },
  {
    id: "spr-02",
    name: "Tube",
    mrp_price: "300",
    d_price: "229",
    image: "/images/tube.jpg",
    features: [
      "High-quality rubber material",
      "Reliable air retention",
      "Easy installation",
      "Available for common wheel sizes",
    ],
  },
  {
    id: "spr-03",
    name: "Brake Pads",
    mrp_price: "400",
    d_price: "299",
    image: "/images/tube.jpg",
    features: [
      "Strong braking performance",
      "Durable friction material",
      "Smooth and quiet braking",
      "Easy replacement",
    ],
  },
  {
    id: "spr-04",
    name: "Chain",
    mrp_price: "900",
    d_price: "699",
    image: "/images/tube.jpg",
    features: [
      "High-strength steel links",
      "Smooth gear shifting",
      "Rust-resistant coating",
      "Long-lasting performance",
    ],
  },
  {
    id: "spr-05",
    name: "Pedal Set",
    mrp_price: "700",
    d_price: "499",
    image: "/images/tube.jpg",
    features: [
      "Strong durable construction",
      "Anti-slip pedal surface",
      "Comfortable foot grip",
      "Easy installation",
    ],
  },
  {
    id: "spr-06",
    name: "Brake Cable",
    mrp_price: "350",
    d_price: "350",
    image: "/images/tube.jpg",
    features: [
      "Smooth cable movement",
      "Strong inner wire",
      "Protective outer coating",
      "Suitable for bicycle brakes",
    ],
  },
],
};

export const categoryMeta = {
  kids: {
    title: "Kids Cycles Start from ₹4,000",
    image: "/images/cycle.jpg",
    to: "/cycles?type=kids",
  },

  mens: {
    title: "Mens Cycles Start from ₹5,000",
    image: "/images/cycle.jpg",
    to: "/cycles?type=mens",
  },

  mountain: {
    title: "Mountain Cycles Start from ₹8,000",
    image: "/images/cycle.jpg",
    to: "/cycles?type=mountain",
  },
};

