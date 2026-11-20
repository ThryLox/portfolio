import { ImageResponse } from "next/og";

export const alt = "Ekonkar Singh: Cloud and AI Security — digital card";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
    const teal = "#3fa6a6";
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: 80,
                    background: "radial-gradient(ellipse 80% 60% at 50% 0%, #12302f, #0b0c10 70%)",
                    color: "#e2e8f0",
                    fontFamily: "sans-serif",
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: 14, color: teal, fontSize: 28, letterSpacing: 4 }}>
                    <div style={{ width: 16, height: 16, borderRadius: 8, background: teal }} />
                    OPEN TO CONNECT
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -2 }}>Ekonkar Singh</div>
                    <div style={{ fontSize: 40, color: teal, marginTop: 12 }}>Cloud & AI Security Analyst</div>
                    <div style={{ fontSize: 30, color: "#94a3b8", marginTop: 28 }}>
                        Policy-as-Code · Entra ID · Zero Trust · Ottawa, ON
                    </div>
                </div>
                <div style={{ fontSize: 28, color: "#94a3b8" }}>ekonkar.systems/card</div>
            </div>
        ),
        size,
    );
}
