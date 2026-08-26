const companyName = "elite interior design";

const domain = companyName
  .toLowerCase()
  .replace(/\s+/g, "");


export const siteConfig = {
  companyName,
  companyNameShort: companyName.split(" ")[0]?.toUpperCase() ?? "",
  companyNameSuffix: companyName.split(" ").slice(1).join(" ").toUpperCase(),
  domain,
  email: `hello@${domain}.com`,
  phone: "+91 89832 83115",
  phoneRaw: "+91 1234567890",
  address: {
    street: "Elite Interior Design",
    city: "Pune",
    state: "Maharashtra",
    zip: "411004",
    country: "IN",
  },
  social: {
    twitter: `@${domain}`,
    instagram: {
      profile: `https://www.instagram.com/eliteinteriorsindia?igsi=MTMyZXNic2Nwcjlydw==`,
      posts: [
        "https://www.instagram.com/reel/DaXwN1ZBD2U/embed",
        "https://www.instagram.com/reel/DY9khlRgW-M/embed",
        "https://www.instagram.com/reel/DYo8t2XNAjq/embed",
      ],
    },
  },
  tagline: "Luxury Interior Design for Modern Living",
  description: `${companyName} — premium interior design studio specializing in residential interiors, modular kitchens, office design, and turnkey solutions. Book your free consultation today.`,
  shortDescription: "Premium interior design studio specializing in residential interiors, modular kitchens, office design, and turnkey solutions.",
  foundedYear: "2019",
};

