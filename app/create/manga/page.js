export default function CreateMangaPage() {
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
        href="/create"
        style={{
          color: "#aaa",
          textDecoration: "none",
          fontSize: "16px",
        }}
      >
        ← Back
      </a>

      <section
        style={{
          maxWidth: "700px",
          margin: "60px auto",
        }}
      >
        <p
          style={{
            color: "#ff3030",
            fontWeight: "bold",
            letterSpacing: "2px",
            marginBottom: "12px",
          }}
        >
          CREATE MANGA
        </p>

        <h1
          style={{
            fontSize: "clamp(38px, 8vw, 70px)",
            margin: "0 0 15px 0",
          }}
        >
          Create your manga.
        </h1>

        <p
          style={{
            color: "#aaa",
            fontSize: "18px",
            lineHeight: "1.6",
            marginBottom: "40px",
          }}
        >
          Start building your story and prepare your first manga project
          for Anipe+.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <label
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              fontWeight: "bold",
            }}
          >
            Manga title

            <input
              type="text"
              placeholder="Enter your manga title"
              style={{
                background: "#111",
                color: "white",
                border: "1px solid #333",
                borderRadius: "10px",
                padding: "16px",
                fontSize: "16px",
              }}
            />
          </label>

          <label
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              fontWeight: "bold",
            }}
          >
            Description

            <textarea
              placeholder="Tell readers about your manga..."
              rows="6"
              style={{
                background: "#111",
                color: "white",
                border: "1px solid #333",
                borderRadius: "10px",
                padding: "16px",
                fontSize: "16px",
                resize: "vertical",
              }}
            />
          </label>

          <label
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              fontWeight: "bold",
            }}
          >
            Original language

            <select
              defaultValue="en"
              style={{
                background: "#111",
                color: "white",
                border: "1px solid #333",
                borderRadius: "10px",
                padding: "16px",
                fontSize: "16px",
              }}
            >
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
          </label>

          <button
            type="button"
            style={{
              marginTop: "10px",
              background: "#ff3030",
              color: "white",
              border: "none",
              borderRadius: "10px",
              padding: "17px 25px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Create Manga
          </button>
        </div>
      </section>
    </main>
  );
}
