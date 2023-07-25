// initial route
import { NextResponse } from "next/server";

async function fetchData() {
  const response = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=86f601e70fba44c984772aa412a11fac&page=1&pageSize=68"
  );
  const data = await response.json();
  return data;
}
export async function GET(request) {
  const data = await fetchData();
  return NextResponse.json(data);
}
