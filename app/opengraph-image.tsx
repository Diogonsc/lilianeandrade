import { ImageResponse } from "next/og";

export const alt = "TikTok Monetizado | Treinamento online com Liliane Andrade";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#050507",
          color: "#f5f5f7",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 8,
            color: "#20E6D2",
            marginBottom: 28,
            fontWeight: 600,
          }}
        >
          LILIANE ANDRADE
        </div>
        <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>
          TikTok Monetizado
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 28,
            color: "#9a9aa8",
            maxWidth: 820,
            lineHeight: 1.35,
          }}
        >
          Treinamento 100% online e prático de estratégia no TikTok
        </div>
      </div>
    ),
    { ...size },
  );
}
