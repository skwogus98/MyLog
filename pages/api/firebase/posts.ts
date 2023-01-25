// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, query } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAn0L9Qdx9RoW8sEMMfoR0ay7eikk7v4EA",
  authDomain: "mylog-d2e19.firebaseapp.com",
  projectId: "mylog-d2e19",
  storageBucket: "mylog-d2e19.appspot.com",
  messagingSenderId: "15678696794",
  appId: "1:15678696794:web:c50c9309b604b577711763",
  measurementId: "G-8QJ6PHKWBN"
};

let analytics; let firestore; let newData:object;
//https://kyounghwan01.github.io/blog/etc/firebase/#firestore-database-crud
const getData = async () => {
  if (firebaseConfig?.projectId) {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    if (app.name && typeof window !== 'undefined') {
      analytics = getAnalytics(app);
    }

    // Access Firebase services using shorthand notation
    firestore = getFirestore();
    const usersCollectionRef = collection(firestore, "posts")

    const q = await query(
      usersCollectionRef
    );
    
    const data = await getDocs(q);
    newData = data.docs.map(doc => ({ ...doc.data() }));
  }
}
//https://nextjs.org/docs/api-routes/response-helpers
export default async function handler(req: NextApiRequest, res: NextApiResponse)
{
  try{
    await getData();
    console.log(newData)
    res.status(200).send(newData)
  }catch(e){
    res.status(500).send({ error: 'failed to load data' })
  }
}
