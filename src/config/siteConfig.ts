const companyName = "Math";

const domain = companyName
  .toLowerCase()
  .replace(/\s+/g, "");


export const siteConfig = {
  companyName,
  companyNameShort: companyName.split(" ")[0]?.toUpperCase() ?? "",
  companyNameSuffix: companyName.split(" ").slice(1).join(" ").toUpperCase(),
  domain,
  email: `hello@${domain}.com`,
  phone: "+91 1234567890",
  phoneRaw: "911234567890",
  address: {
    street: "Mathura Design Studio",
    city: "Chennai",
    state: "",
    zip: "400050",
    country: "IN",
  },
  social: {
    twitter: `@${domain}`,
    instagram: {
      profile: `https://instagram.com/`,
      posts: [
        "https://www.instagram.com/p/DBIkoc4SXFi/embed",
        "https://www.instagram.com/p/DW1cQ5cEy8r/embed",
        "https://www.instagram.com/p/DTKHuC5kyNI/embed",
      ],
    },
  },
  tagline: "Luxury Interior Design for Modern Living",
  description: `${companyName} — premium interior design studio specializing in residential interiors, modular kitchens, office design, and turnkey solutions. Book your free consultation today.`,
  shortDescription: "Premium interior design studio specializing in residential interiors, modular kitchens, office design, and turnkey solutions.",
  foundedYear: "2019",
};