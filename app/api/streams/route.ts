import { prismaClient } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const CreateStreamSchema = z.object({
  creatorId: z.string(),
  url: z.string(),
});

export async function POST(req: NextRequest) {
  try {
    const data = CreateStreamSchema.parse(await req.json());
    const isYT = data.url.includes("youtube");
    if (!isYT) {
      return NextResponse.json(
        { message: "Invalid URL", error: "URL is not a valid youtube link" },
        { status: 400 }
      );
    }

    const extractId = data.url.split("?v=")[1];

    const stream = await prismaClient.stream.create({
      data: {
        userId: data.creatorId,
        url: data.url,
        extractedId: extractId,
        type: "Youtube",
      },
    });

    return NextResponse.json({ message: "Stream added", id: stream.id });
  } catch (e: any) {
    return NextResponse.json(
      { message: "Error while adding a stream", error: e.message },
      { status: 411 }
    );
  }
}

export async function GET(req: NextRequest) {
  const creatorId = req.nextUrl.searchParams.get("creatorId");
  const streams = await prismaClient.stream.findMany({
    where: {
      userId: creatorId ?? "",
    },
  });
  return NextResponse.json(streams);
}
