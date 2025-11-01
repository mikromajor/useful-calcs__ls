type KeyMakerParams = [year: number, month: number];

interface KeyMaker {
  (keyParams: KeyMakerParams): string;
}

export const getStorage = (keyMaker: KeyMaker, keyParams: KeyMakerParams) => {
  try {
    const isStoreData = window.localStorage.getItem(keyMaker(keyParams));

    return isStoreData ? JSON.parse(isStoreData) : null;
  } catch {
    return null;
  }
};
