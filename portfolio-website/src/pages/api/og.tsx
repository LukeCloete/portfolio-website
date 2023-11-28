import { ImageResponse } from "next/server";

export const config = {
  runtime: "edge",
};

export default async function () {
  const fontData = await fetch(
    new URL("../../../assets/BebasNeue-Regular.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div tw="bg-slate-200 flex">
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            width: "100%",
            height: "100%",
            flexDirection: "column",
            justifyContent: "flex-start",
            paddingLeft: "2rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              width: "100%",
              fontSize: "28px",
            }}
          >
            <p>Luke.dev</p>
          </div>

          {/* HERO NAME TEXT*/}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              width: "100%",
            }}
          >
            <h1
              style={{
                fontSize: "290px",
                position: "absolute",
                top: "-6rem",
                left: "-8px",
                fontFamily: "Bebas",
              }}
            >
              LUKE CLOETE
            </h1>
          </div>
          {/* Main content */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              height: "90%",
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            {/* Text */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                width: "50%",
                height: "80%",
                flexDirection: "column",
                gap: "6rem",
                justifyContent: "flex-start",
                paddingTop: "11rem",
              }}
            >
              <h2
                style={{
                  fontSize: "56px",
                  zIndex: "-1",
                  width: "100%",
                  fontFamily: "Bebas",
                }}
              >
                Your
                <span
                  style={{
                    marginRight: "0.5rem",
                    marginLeft: "0.5rem",
                    background:
                      "linear-gradient(90deg, rgba(47,123,255,1) 0%, rgba(238,174,202,1) 100%)",
                    color: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Next
                </span>
                Software Engineer
              </h2>
              <p
                style={{
                  fontSize: "36px",
                  color: "#2f7bff",
                }}
              >
                Cloeteluke@gmail.com
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "40%",
                height: "100%",
                flexDirection: "column",
                justifyContent: "flex-start",
                paddingTop: "8rem",
              }}
            >
              <img
                width="300"
                height="300"
                src={
                  "https://media.licdn.com/dms/image/D4D03AQF5w5pCb_Im-Q/profile-displayphoto-shrink_800_800/0/1701092599995?e=1706745600&v=beta&t=sy9sJ4MiyT4u34q54SzWmzFd6_gazPVyJ1kuKxJeEHc"
                }
                style={{
                  top: "4rem",
                  borderRadius: "62% 38% 76% 24% / 71% 68% 32% 29%",
                  border: "5px solid black",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Bebas",
          data: fontData,
        },
      ],
    }
  );
}
