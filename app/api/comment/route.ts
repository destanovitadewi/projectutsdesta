import { db } from "@/lib/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, comment } = await request.json();
  await addDoc(collection(db, "comments"), { name, comment });
  return NextResponse.json({ success: true });
}

export async function GET() {
  const snapshot = await getDocs(collection(db, "comments"));
  const comments = snapshot.docs.map(doc => doc.data());
  return NextResponse.json(comments);
}
