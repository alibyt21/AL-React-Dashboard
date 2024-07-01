import { Base64 } from "./encrypting";
import getCookie from "./getCookie";
import getLocalStorage from "./getLocalStorage";
import setCookie from "./setCookie";
import setLocalStorage from "./setLocalStorage";

export function setClientStorage(
    key,
    value,
    isEncrypted = false,
    options = false
) {
    /*
         options = {
            exdays,
            path,
            ...
        }
    */

    /* JSON TO STRING */
    value = JSON.stringify(value);

    if (isEncrypted) {
        value = Base64.encode(value);
    }

    if (options) {
        // have to use Cookie as storage
        setCookie(key, value, options);
        return;
    }

    // in default we use LocalStorage as storage
    setLocalStorage(key, value);
    return;
}

export function getClientStorage(key, isEncrypted = false) {
    let result = getLocalStorage(key) ? getLocalStorage(key) : getCookie(key);
    if (isEncrypted) {
        result = Base64.decode(result);
    }
    /* STRING TO JSON */
    if (result) {
        try {
            return JSON.parse(result);
        } catch (e) {
            return console.error(e); // error in the above string (in this case, yes)!
        }
        // if no error, we can now keep using "a"
    } else {
        return null;
    }
}
