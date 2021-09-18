importScripts("/precache-manifest.a1bdf86ed7ad61339343b33b2191b12b.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

import { register } from "register-service-worker";

register(`${process.env.BASE_URL}service-worker.js`, {
  ready() {
    console.log("EVENT: ready()");
  },
  registered() {
    console.log("EVENT: registered()");
  },
  cached() {
    console.log("EVENT: cached()");
  },
  updatefound() {
    console.log("EVENT: updatefound()");
  },
  updated(registration) {
    console.log("EVENT: updated()");
    // New content is available, refresh the page
    console.log("====================");
    caches.keys().then((names) => {
      for (const name of names) {
        console.log(name);
        caches.delete(name);
      }
    });
    console.log("====================");
    console.log("Updating...");
    registration.update();
    console.log("...updating complete, please refresh the page");
    // location.reload();
  },
  offline() {
    console.log("EVENT: offline()");
  },
  error(error) {
    console.log("EVENT: error()");
    console.log(error);
    // console.error("Error during service worker registration:", error);
  }
});

