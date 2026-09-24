export default function CreatePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#080808",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "40px 7%",
      }}
    >
      <a
        href="/"
        style={{
          color: "#aaa",
          textDecoration: "none",
          fontSize: "16px",
        }}
      >
        ← Back to Anipe+
      </a>

      <section
        style={{
          maxWidth: "900px",
          margin: "60px auto",
        }}
      >
        <p
          style={{
            color: "#ff3030",
            fontWeight: "bold",
            letterSpacing: "2px",
          }}
        >
          CREATE YOUR STORY
        </p>

        <h1
          style={{
            fontSize: "clamp(40px, 8vw, 72px)",
            margin: "10px 0",
          }}
        >
          What will you create?
        </h1>

        <p
          style={{
            color: "#aaa",
            fontSize: "18px",
            lineHeight: "1.6",
          }}
        >
          Start a new project and bring your world to life on Anipe+.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
            marginTop: "40px",
          }}
        >
          <a
  href="/create/manga"
            style={{
              border: "1px solid #333",
              borderRadius: "16px",
              padding: "30px",
              background: "#111",
            }}
          >
            <h2>📖 Manga</h2>
            <p style={{ color: "#aaa", lineHeight: "1.5" }}>
              Create chapters and publish your manga pages.
            </p>
          </a>

          <a
  href="/create/novel"
            style={{
              border: "1px solid #333",
              borderRadius: "16px",
              padding: "30px",
              background: "#111",
              color: "white",
textDecoration: "none",
display: "block",
            }}
          >
            <h2>✍️ Novel</h2>
            <p style={{ color: "#aaa", lineHeight: "1.5" }}>
              Write chapters and publish your novel.
            </p>
          </a>
        </div>
      </section>
    </main>
  );
}
