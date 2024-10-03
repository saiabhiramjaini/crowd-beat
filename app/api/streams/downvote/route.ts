import { prismaClient } from "@/app/lib/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import {z} from "zod";

const UpvoteSchema = z.object({
    streamId: z.string(),
})

export async function POST(req: NextRequest){
    const session = await getServerSession();

    const user = await prismaClient.user.findFirst({
        where:{
            email: session?.user?.email ?? ""
        }
    })

    if(!user){
        return NextResponse.json({
            message: "Unauthenticated"
        },{
            status: 403
        })
    }

    try{
        const data = UpvoteSchema.parse(await req.json());
        await prismaClient.upvotes.delete({
            where:{
                userId_streamId:{
                    userId: user.id,
                    streamId: data.streamId
                }
            }
        })
    } catch(e: any){
        return NextResponse.json({
            message: e.message
        },{
            status: 403
        })
    }
}