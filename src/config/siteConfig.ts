const companyName = "One Edge Designs";

const domain = companyName
  .toLowerCase()
  .replace(/\s+/g, "");


export const siteConfig = {
  companyName,
  companyNameShort: companyName.split(" ")[0]?.toUpperCase() ?? "",
  companyNameSuffix: companyName.split(" ").slice(1).join(" ").toUpperCase(),
  domain,
  email: `hello@${domain}.com`,
  phone: "+91 97660 45538",
  phoneRaw: "911234567890",
  address: {
    street: "One Edge Designs",
    city: "Pune",
    state: "Maharashtra",
    zip: "411004",
    country: "IN",
  },
  social: {
    twitter: `@${domain}`,
    instagram: {
      profile: `https://www.instagram.com/studiowellwall?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==`,
      posts: [
        "https://www.instagram.com/p/Dbx6hrzoy0Y/embed",
        "https://www.instagram.com/p/DaPRedeE5rI/embed",
        "https://www.instagram.com/p/DLL4EfjhgLZ/embed",
      ],
    },
  },
  tagline: "Luxury Interior Design for Modern Living",
  description: `${companyName} — premium interior design studio specializing in residential interiors, modular kitchens, office design, and turnkey solutions. Book your free consultation today.`,
  shortDescription: "Premium interior design studio specializing in residential interiors, modular kitchens, office design, and turnkey solutions.",
  foundedYear: "2019",
};