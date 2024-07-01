export default function setCookie(key, value, options = {}) {
    const exdays = options.exdays ? options.exdays : 365 * 10; // ten year expiration!
    const path = options.path ? options.path : "/";
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = key + "=" + value + ";" + expires + ";path=" + path;
}
