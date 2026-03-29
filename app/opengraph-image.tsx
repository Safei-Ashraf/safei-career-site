import { ImageResponse } from "next/og";
import { profileData, seoSummary } from "@/lib/site-data";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  const heroHeadline = `${profileData.hero.headlinePrefix} ${profileData.hero.headlineAccent}`.trim();

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          padding: "56px",
          background:
            "radial-gradient(circle at top left, rgba(95, 102, 112, 0.18), transparent 24%), linear-gradient(180deg, #161719 0%, #121315 42%, #101113 100%)",
          color: "#f5f6f7",
          fontFamily: "Inter, Arial, sans-serif"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            borderRadius: "28px",
            border: "1px solid rgba(255,255,255,0.08)",
            background:
              "linear-gradient(180deg, rgba(31, 32, 36, 0.95), rgba(21, 22, 25, 0.98))",
            padding: "48px"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px"
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 22,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#8a8f97"
              }}
            >
              Senior Frontend Engineer
            </div>
            <div
              style={{
                display: "flex",
                maxWidth: 820,
                fontSize: 72,
                fontWeight: 700,
                lineHeight: 1.02,
                letterSpacing: "-0.05em"
              }}
            >
              {heroHeadline}
            </div>
            <div
              style={{
                display: "flex",
                maxWidth: 850,
                fontSize: 28,
                lineHeight: 1.45,
                color: "#c2c6cd"
              }}
            >
              {seoSummary}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "14px"
              }}
            >
              {profileData.hero.proofChips.map((chip) => (
                <div
                  key={chip}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "12px 18px",
                    borderRadius: 999,
                    border: "1px solid rgba(255,255,255,0.11)",
                    background: "rgba(255,255,255,0.04)",
                    color: "#d2d6dc",
                    fontSize: 20
                  }}
                >
                  {chip}
                </div>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                fontSize: 28,
                fontWeight: 600
              }}
            >
              {profileData.person.name}
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
