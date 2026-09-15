// ---------------------------------------------------------------------------
// Central site configuration.
// Update shop details here ONCE — every page and component reads from this
// file, so nothing is ever hard-coded in multiple places.
// ---------------------------------------------------------------------------

export const SITE = {
  name: "Salem Cycles",
  tagline: "Ride Better. Ride Further.",
  description:
    "Quality cycles, accessories and spares for every kind of rider — right here in Salem.",

  // Phone number as shown to customers.
  phone: "8754941951",
  phoneDisplay: "+91 87549 41951",

  // WhatsApp number in international format WITHOUT '+', spaces or dashes.
  // This is the SINGLE source of truth for the WhatsApp number used
  // across the entire website.
  whatsappNumber: "918754941951",

  hours: [{ days: "Every day", time: "9:00 AM – 9:00 PM" }],

  address: {
    line1: "No. 162, Panathankadu",
    line2: "Near NPR School & AVM Hospital, Opposite Seelanaikenpatty",
    line3: "Zone 4, Kondalampatti, Salem, Tamil Nadu 636201",
    full:
      "No. 162, Panathankadu, Near NPR School & AVM Hospital, Opposite Seelanaikenpatty, Zone 4, Kondalampatti, Salem, Tamil Nadu 636201",
  },

  // Used to build the embedded Google Map — no API key required.
  mapQuery:
    "No.162 Panathankadu opposite Seelanaikenpatty Kondalampatti Salem Tamil Nadu 636201",

  // Email and social links were not provided — left blank on purpose.
  // Fill them in and the footer / contact page will show them automatically.
  email: "deepak2003b@gmail.com",
  social: {
    instagram: "www.insta.com",
    facebook: "www.facebook.com",
  },
};

export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Cycles", path: "/cycles" },
  { label: "Accessories", path: "/accessories" },
  { label: "Spares", path: "/spares" },
  { label: "Contact Us", path: "/contact" },
];
