import { register } from "register-service-worker";

register(`${process.env.BASE_URL}service-worker.js`, {
  ready() {
    console.log("App is being served from cache by a service worker");
  },
  registered() {
    console.log("Service worker has been registered.");
  },
  cached() {
    console.log("Content has been cached for offline use.");
  },
  updatefound() {
    console.log("New content is downloading.");
  },
  updated(registration) {
    // New content is available, refresh the page
    caches.keys().then((names) => {
      for (const name of names) {
        caches.delete(name);
      }
    });
    registration.update();
    location.reload();
  },
  offline() {
    console.log("No internet connection found. App is running in offline mode.");
  },
  error(error) {
    alert("ERROR!");
    console.log(error);
    // console.error("Error during service worker registration:", error);
  }
});
