import { createFileRoute } from "@tanstack/react-router";

// Inquiry notification endpoint.
// Once Lovable Emails is set up, this will forward each inquiry to the
// studio inbox (mavericksilas6@gmail.com). For now it logs the payload to
// the server console so nothing is lost while the email domain is being
// verified.
export const Route = createFileRoute("/api/notify-inquiry")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = await request.json();
          // eslint-disable-next-line no-console
          console.log("[inquiry] new submission:", JSON.stringify(body, null, 2));
        } catch {
          // ignore parse errors — admin notification is best-effort
        }
        return new Response(JSON.stringify({ ok: true }), {
          headers: { "Content-Type": "application/json" },
        });
      },
    },
  },
});