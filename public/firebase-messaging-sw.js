importScripts(
  "https://www.gstatic.com/firebasejs/9.10.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.10.0/firebase-messaging-compat.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyBBUi05sddTLN5aXDYB4LlKbqNTz_ccTuM",
  authDomain: "web-push-notification-a6cb0.firebaseapp.com",
  projectId: "web-push-notification-a6cb0",
  storageBucket: "web-push-notification-a6cb0.appspot.com",
  messagingSenderId: "673073133106",
  appId: "1:673073133106:web:cdc114ac6ecf1cede7ee2b",
  measurementId: "G-KV74LF7L0G",
};

const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging(app);

messaging.onBackgroundMessage((payload) => {
  console.log("resibiste mensaje mientras estabas ausente");

  // previo a mostrar notifications

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "vite.svg",
  };
  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
