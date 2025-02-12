import { aboutMeOne } from "@/data/aboutSection";
import { servicesSection } from "@/data/services";
import sponsors from "@/data/sponsorsSection";

export async function GET(request) {
    const apiKey = process.env.API_KEY;
    const providedKey = request.headers.get("x-api-key");

    if (!apiKey || !providedKey || apiKey !== providedKey) {
        return new Response(
            { error: "Unauthorized - Invalid or missing API key" },
            { status: 401 }
        );
    }

    return new Response(JSON.stringify({
        about: aboutMeOne,
        services: [...servicesSection.services],
        clientLogos: sponsors.map(logo => `/images/clients/${logo}`),
    }));
}
