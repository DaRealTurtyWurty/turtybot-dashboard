import {NextRequest} from "next/server";
import {useSession} from "next-auth/react";

export default async function POST(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;



    const {data} = useSession();

    const guilds = searchParams.get("guilds");
    // todo: send the guilds to the database
}