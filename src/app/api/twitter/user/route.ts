import { NextResponse } from "next/server";
import { getTwitterUserByUsername } from "@/lib/twitter";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username");

  if (!username) {
    return NextResponse.json(
      { error: "Username is required" },
      { status: 400 }
    );
  }

  try {
    console.log("API Route: Fetching user data for", username);
    console.log("Environment check:", {
      hasToken: !!process.env.TWITTER_BEARER_TOKEN,
      tokenPrefix: process.env.TWITTER_BEARER_TOKEN?.substring(0, 10),
    });

    const userData = await getTwitterUserByUsername(username);

    if (!userData) {
      console.log("API Route: User not found");
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    console.log("API Route: User data fetched successfully");
    return NextResponse.json(userData);
  } catch (error) {
    console.error("Error in Twitter API route:", error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Internal server error",
        details: error instanceof Error ? error.stack : undefined,
      },
      { status: 500 }
    );
  }
}
