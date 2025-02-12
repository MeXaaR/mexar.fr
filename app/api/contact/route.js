import contactInfos from "@/data/contactInfos";
import { NextResponse } from "next/server";

export async function GET(request) {
    const apiKey = process.env.API_KEY;
    const providedKey = request.headers.get("x-api-key");

    if (!apiKey || !providedKey || apiKey !== providedKey) {
        return NextResponse.json(
            { error: "Unauthorized - Invalid or missing API key" },
            { status: 401 }
        );
    }

    return NextResponse.json({
        contact: contactInfos,
    });
}
