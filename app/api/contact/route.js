import contactInfos from "@/data/contactInfos";

export async function GET(request) {
    const apiKey = process.env.API_KEY;
    const providedKey = request.headers.get("x-api-key");

    if (!apiKey || !providedKey || apiKey !== providedKey) {
        return new Response(
            { error: "Unauthorized - Invalid or missing API key" },
            { status: 401 }
        );
    }

    return new Response(
        JSON.stringify({
            contact: contactInfos,
        })
    );
}
