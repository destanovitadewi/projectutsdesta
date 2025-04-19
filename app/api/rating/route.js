import { db } from "@/lib/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST( Request) {
  const { rating } = await request.json();
  await addDoc(collection(db, "ratings"), { rating });
  return NextResponse.json({ success: true });
}

export async function GET() {
  const snapshot = await getDocs(collection(db, "ratings"));
  const ratings = snapshot.docs.map(doc => doc.data().rating);
  const total = ratings.length;
  const average = total ? ratings.reduce((a, b) => a + b) / total : 0;
  return NextResponse.json({ average, total });
}
