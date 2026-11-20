import { getPostBySlug } from "@/lib/content";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export async function GET() {
    const me = await getPostBySlug("whoami", "root");
    const vcard = [
        "BEGIN:VCARD",
        "VERSION:3.0",
        "N:Singh;Ekonkar;;;",
        `FN:${me.name}`,
        `TITLE:${me.role}`,
        `EMAIL;TYPE=INTERNET:${me.email}`,
        `URL:${site.url}`,
        `URL:${site.linkedin}`,
        `URL:${site.github}`,
        "ADR;TYPE=WORK:;;;Ottawa;ON;;Canada",
        "END:VCARD",
    ].join("\r\n");

    return new Response(vcard + "\r\n", {
        headers: {
            "Content-Type": "text/vcard; charset=utf-8",
            "Content-Disposition": 'attachment; filename="Ekonkar-Singh.vcf"',
        },
    });
}
