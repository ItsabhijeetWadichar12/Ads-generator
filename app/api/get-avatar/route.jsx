import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request) {
    const result = await axios.get('https://openapi.akool.com/api/open/v3/avatar/list?from?number=2',
        {
            headers: {
                Authorization: `Bearer ${process.env.AKOOL_API_KEY}`
            }


        }
    );
    return NextResponse.json(result.data?.data);
}
