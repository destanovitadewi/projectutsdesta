import { db } from '@/lib/firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const { name, rating, message } = body;

  try {
    await addDoc(collection(db, 'feedbacks'), {
      name,
      rating,
      message,
      timestamp: new Date(),
    });
    return NextResponse.json({ message: 'Komentar berhasil disimpan' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Gagal menyimpan komentar' + error }, { status: 500 });
  }
}

export async function GET() {
  try {
    const feedbackSnapshot = await getDocs(collection(db, 'feedbacks'));
    const feedbacks = feedbackSnapshot.docs.map(doc => doc.data());
    return NextResponse.json(feedbacks, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Gagal mengambil data komentar ' + error }, { status: 500 });
  }
}
