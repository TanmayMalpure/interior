const companyName = "Align Interiors";

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
    street: "Align Interiors",
    city: "Pune",
    state: "Maharashtra",
    zip: "411004",
    country: "IN",
  },
  social: {
    twitter: `@${domain}`,
    instagram: {
      profile: `https://instagram.com/`,
      posts: [
        "https://www.instagram.com/p/DbACDxvlL4k/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        "https://www.instagram.com/p/DcAZ8BMlOmH/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        "https://www.instagram.com/p/DTKHuC5kyNI/embedhttps://www.instagram.com/p/DbFLrJ_lFUq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      ],
    },
  },
  tagline: "Luxury Interior Design for Modern Living",
  description: `${companyName} — premium interior design studio specializing in residential interiors, modular kitchens, office design, and turnkey solutions. Book your free consultation today.`,
  shortDescription: "Premium interior design studio specializing in residential interiors, modular kitchens, office design, and turnkey solutions.",
  foundedYear: "2019",
};