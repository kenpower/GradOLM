// src/router.js
import { writable } from "svelte/store";

export const appData = writable({});

function removePrefix(str, prefix) {
  if (str.startsWith(prefix)) {
    return str.slice(prefix.length);
  }
  return str;
}
// This store will keep track of the current path
export const currentRoute = writable(
  removePrefix(window.location.pathname, "/GradOLM")
);

// Listen for the popstate event, which is triggered when using the browser's back/forward buttons
window.addEventListener("popstate", () => {
  currentRoute.set(window.location.pathname);
});

// Helper function to navigate to a new route and update the URL
export const navigate = (path, data = {}) => {
  appData.set(data);
  window.history.pushState({}, "", path);
  currentRoute.set(path);
  console.log("Navigated to:", path);
};
