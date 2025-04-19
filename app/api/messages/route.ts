import { db } from "@/lib/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();
  try {
    const docRef = await addDoc(collection(db, "messages"), data);
    return NextResponse.json({ id: docRef.id }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: "Gagal menyimpan pesan" + e }, { status: 500 });
  }
}

export async function GET() {
  const messagesRef = collection(db, "messages");
  const snapshot = await getDocs(messagesRef);
  const messages = snapshot.docs.map((doc) => doc.data());
  return NextResponse.json(messages);
}
