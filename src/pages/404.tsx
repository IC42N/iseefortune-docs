import React from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";

export default function NotFound() {
  return (
    <Layout title="404 — Not Found">
      <main
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "70vh",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "4rem",
              marginBottom: "0.5rem",
              letterSpacing: "0.05em",
            }}
          >
            404
          </h1>

          <p
            style={{
              fontSize: "1.25rem",
              opacity: 0.7,
              marginBottom: "2rem",
            }}
          >
            The path you followed does not exist.
          </p>

          <Link
            to="/"
            style={{
              padding: "0.75rem 1.5rem",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: 500,
              transition: "all 0.2s ease",
            }}
          >
            Return to Documentation
          </Link>
        </div>
      </main>
    </Layout>
  );
}