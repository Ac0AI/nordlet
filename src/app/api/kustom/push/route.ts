import type { NextRequest } from "next/server";
import { acknowledgeOrder, isKustomConfigured } from "@/lib/kustom";

// Kustom POST:ar hit när en order är klar (merchant_urls.push).
// Vi bekräftar ordern via Order Management API och svarar 200 -
// annars fortsätter Kustom att skicka om notisen.
export async function POST(req: NextRequest) {
  const orderId = req.nextUrl.searchParams.get("order_id");

  if (orderId && isKustomConfigured()) {
    await acknowledgeOrder(orderId).catch((error) => {
      console.error("Kustom push acknowledge error:", error);
    });
  }

  return new Response(null, { status: 200 });
}
