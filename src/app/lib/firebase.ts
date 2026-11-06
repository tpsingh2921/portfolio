import { initializeApp, getApps } from 'firebase/app'
import { getFirestore, doc, setDoc } from 'firebase/firestore'

export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || '',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'my-portfolio-1c97b.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'my-portfolio-1c97b',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'my-portfolio-1c97b.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '965850226521',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:965850226521:web:cd59df7209f88a3da1f648'
}

export const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]
export const db = getFirestore(app)

export interface ContactSubmission {
  name: string
  email: string
  message: string
}

export async function saveContactToFirestore(data: ContactSubmission) {
  try {
    const requestId = 'req_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7)
    const docData = {
      id: requestId,
      name: data.name.trim(),
      email: data.email.trim(),
      message: data.message.trim(),
      status: 'Pending',
      createdAt: new Date().toISOString()
    }
    await setDoc(doc(db, 'interview_requests', requestId), docData)
    return { success: true, id: requestId }
  } catch (err: any) {
    console.warn('Firestore client write note:', err?.message || err)
    return { success: false, error: err }
  }
}
