const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://vantexwebstudio.com").replace(/\/+$/, "");

export const site = {
  name: "VantexWeb",
  url: siteUrl,
  email: "hello@vantexwebstudio.com",
  phoneDisplay: "+923077222866",
  phoneHref: "+923077222866",
} as const;
