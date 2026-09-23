export const metadata = {
  title: "Anipe+",
  description: "Create, publish and read manga and novels on Anipe+.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          background: "#080808",
        }}
      >
        {children}
      </body>
    </html>
  );
}
