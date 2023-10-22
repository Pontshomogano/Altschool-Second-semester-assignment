// takes in the key of the storage variable and returns the value-object:

const GetLocalStorage = (key) => {
  if (typeof window !== "undefined") {
    let item = localStorage.getItem(key);
    if (item !== null || undefined) {
      let information = localStorage.getItem(key);
      let localstorageData = JSON.parse(information);
      return localstorageData;
    } else {
      return null;
      // throw Error("Local storage key is undefined");
    }
  }
};

export const SetLocalStorage = (key, info) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key); // remove existing key
    let data = "";
    if (key == "moganoapp") {
      data = {
        username: info.username,
        email: info.email,
        password: info.password,
      };

      localStorage.setItem(key, JSON.stringify(data));
    } else {
      return Error("Storage key is undefined");
    }
  }
};

export const DeleteLocalStorage = (key) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
};

export default GetLocalStorage;
