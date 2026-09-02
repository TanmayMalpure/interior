const companyName = "IDS Interiors";

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
  phoneRaw: "+91 1234567890",
  address: {
    street: "IDS Interiors",
    city: "Pune",
    state: "Maharashtra",
    zip: "411004",
    country: "IN",
  },
  social: {
    twitter: `@${domain}`,
    instagram: {
      profile: `https://www.instagram.com/ar_ishwarsuthar?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==`,
      posts: [
        "https://www.instagram.com/reel/ClY1SDIo6fO/embed",
        "https://www.instagram.com/reel/DY95bsooPLE/embed",
        "https://www.instagram.com/reel/DY95bsooPLE/embed",
      ],
    },
  },
  tagline: "Luxury Interior Design for Modern Living",
  description: `${companyName} — premium interior design studio specializing in residential interiors, modular kitchens, office design, and turnkey solutions. Book your free consultation today.`,
  shortDescription: "Premium interior design studio specializing in residential interiors, modular kitchens, office design, and turnkey solutions.",
  foundedYear: "2019",
};

