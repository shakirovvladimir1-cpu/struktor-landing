export const dynamic = "force-static";
import type { MetadataRoute } from "next";

/* /v2–/v5 не закрыты здесь намеренно: у них стоит noindex, и поисковик должен открыть страницу, чтобы его увидеть. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://struktor.work/sitemap.xml",
  };
}
