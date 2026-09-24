export default function CreateNovelPage() {
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
            letterSpacing: "3px",
          }}
        >
          CREATE A NOVEL
        </p>

        <h1
          style={{
            fontSize: "clamp(40px, 8vw, 70px)",
            marginBottom: "15px",
          }}
        >
          Start your story.
        </h1>

        <p
          style={{
            color: "#aaa",
            fontSize: "18px",
            lineHeight: "1.7",
            marginBottom: "40px",
          }}
        >
          Create your novel and prepare your first story for Anipe+.
        </p>

        <div
          style={{
            display: "grid",
            gap: "20px",
          }}
        >
          <input
            type="text"
            placeholder="Novel title"
            style={{
              padding: "17px",
              borderRadius: "10px",
              border: "1px solid #333",
              background: "#111",
              color: "white",
              fontSize: "16px",
            }}
          />

          <textarea
            placeholder="Write a short description of your novel..."
            rows="6"
            style={{
              padding: "17px",
              borderRadius: "10px",
              border: "1px solid #333",
              background: "#111",
              color: "white",
              fontSize: "16px",
              resize: "vertical",
            }}
          />

          <select
            defaultValue=""
            style={{
              padding: "17px",
              borderRadius: "10px",
              border: "1px solid #333",
              background: "#111",
              color: "white",
              fontSize: "16px",
            }}
          >
            <option value="" disabled>
              Original language
            </option>
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="ja">日本語</option>
            <option value="ko">한국어</option>
            <option value="fr">Français</option>
            <option value="pt">Português</option>
          </select>

          <button
            type="button"
            style={{
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
            Create Novel
          </button>
        </div>
      </section>
    </main>
  );
}
