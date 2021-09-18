"use strict";
exports.__esModule = true;
var register_service_worker_1 = require("register-service-worker");
(0, register_service_worker_1.register)(process.env.BASE_URL + "service-worker.js", {
    ready: function () {
        console.log("EVENT: ready()");
    },
    registered: function () {
        console.log("EVENT: registered()");
    },
    cached: function () {
        console.log("EVENT: cached()");
    },
    updatefound: function () {
        console.log("EVENT: updatefound()");
    },
    updated: function (registration) {
        console.log("EVENT: updated()");
        // New content is available, refresh the page
        console.log("====================");
        caches.keys().then(function (names) {
            for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
                var name_1 = names_1[_i];
                console.log(name_1);
                caches["delete"](name_1);
            }
        });
        console.log("====================");
        console.log("Updating...");
        registration.update();
        console.log("...updating complete, please refresh the page");
        // location.reload();
    },
    offline: function () {
        console.log("EVENT: offline()");
    },
    error: function (error) {
        console.log("EVENT: error()");
        console.log(error);
        // console.error("Error during service worker registration:", error);
    }
});
