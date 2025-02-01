import { initializeApp } from 'firebase/app'
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'

const firebaseConfig = {
    apiKey: "AIzaSyCbt6jiNtNJTIfqon0jC2Xx-LHJo3DIPYM",
    authDomain: "memoapp4-32df3.firebaseapp.com",
    projectId: "memoapp4-32df3",
    storageBucket: "memoapp4-32df3.firebasestorage.app",
    messagingSenderId: "705172236186",
    appId: "1:705172236186:web:45b786825fd5ae3fa9bc23"
  };

const app = initializeApp(firebaseConfig)
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})
const db = getFirestore(app)

export { app, auth, db }
