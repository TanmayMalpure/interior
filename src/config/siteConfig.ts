const companyName = "Studio Well Well";

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
    street: "Studio Well Well",
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
        "https://www.instagram.com/p/DFF9e7GxYrj/embed",
        "https://www.instagram.com/reel/DY2DlxkIDPR/embed",
        "https://www.instagram.com/reel/DW_jTk_DrAj/embed",
      ],
    },
  },
  tagline: "Luxury Interior Design for Modern Living",
  description: `${companyName} — premium interior design studio specializing in residential interiors, modular kitchens, office design, and turnkey solutions. Book your free consultation today.`,
  shortDescription: "Premium interior design studio specializing in residential interiors, modular kitchens, office design, and turnkey solutions.",
  foundedYear: "2019",
};