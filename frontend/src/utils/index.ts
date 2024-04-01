import { LinkToSaveLocalStorageInterface } from "@/interfaces/interfaces";

const apiBase = process.env.VUE_APP_API_URL;

export const getLinksSavedInLocalStorage = ():
  | LinkToSaveLocalStorageInterface[]
  | undefined => {
  const storedLinks = localStorage.getItem("savedLinks");
  if (!storedLinks) return;

  return JSON.parse(storedLinks) as LinkToSaveLocalStorageInterface[];
};

export const getClicksOfLinks = (): Promise<
  LinkToSaveLocalStorageInterface[]
> => {
  return new Promise((resolve, reject) => {
    const links = getLinksSavedInLocalStorage();
    if (!links) {
      resolve([]);
      return;
    }

    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log(apiBase);

    fetch(`${apiBase}/link/getClicks`, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error");
        }
        return response.json();
      })
      .then((data) => {
        data.data.forEach((item: any) => {
          const linkToUpdate = links.find(
            (link) => link.shorterLink === item.shorterLink
          );

          if (linkToUpdate) {
            linkToUpdate.clicks = item.clicks;
          }
        });
        resolve(links); // Resolve the promise with the updated links
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
};
