export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#080808",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <nav
        style={{
          padding: "20px 7%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #242424",
        }}
      >
        <h2 style={{ margin: 0 }}>
          <span style={{ color: "#ff3030" }}>Anipe</span>+
        </h2>

        <span style={{ color: "#aaa" }}>EN | ES</span>
      </nav>

      <section
        style={{
          minHeight: "75vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "40px 24px",
        }}
      >
        <p
          style={{
            color: "#ff3030",
            fontWeight: "bold",
            letterSpacing: "2px",
          }}
        >
          CREATE • PUBLISH • READ
        </p>

        <h1
          style={{
            fontSize: "clamp(44px, 10vw, 90px)",
            margin: "10px 0",
          }}
        >
          Your stories.
          <br />
          Your world.
        </h1>

        <p
          style={{
            color: "#aaa",
            maxWidth: "600px",
            fontSize: "18px",
            lineHeight: "1.6",
          }}
        >
          Create manga and novels, publish your stories and discover
          new worlds from creators around the world.
        </p>

        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "25px",
          }}
        >
          <button
            style={{
              background: "#ff3030",
              color: "white",
              border: "none",
              borderRadius: "10px",
              padding: "15px 25px",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Start Creating
          </button>

          <button
            style={{
              background: "transparent",
              color: "white",
              border: "1px solid #555",
              borderRadius: "10px",
              padding: "15px 25px",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Explore Stories
          </button>
        </div>
      </section>
    </main>
  );
}
