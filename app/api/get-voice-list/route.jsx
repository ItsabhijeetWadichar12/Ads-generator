import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        const result = await axios.get('https://openapi.akool.com/api/open/v3/voice/list?size=100',
            {
                headers: {
                    Authorization: `Bearer ${process.env.AKOOL_API_TOKEN}`
                }
            }
        );

        // Make sure the data is serializable by converting to a safe format
        const safeData = result.data?.data ? JSON.parse(JSON.stringify(result.data.data)) : [];

        return NextResponse.json(safeData);
    } catch (error) {
        console.error('Error fetching voice list:', error);
        return NextResponse.json({ error: 'Failed to fetch voice list' }, { status: 500 });
    }
}