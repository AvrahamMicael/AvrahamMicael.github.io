import { ImgURL } from "../types";

type UseImageFunction = {
  (path: string): ImgURL
};

const imgFolderURL = (path: string): ImgURL => new URL(`/src/assets/img/${path}`, import.meta.url).href as ImgURL;

function useImage(path: string): ImgURL;
function useImage(path: string, genOtherFunc: boolean): UseImageFunction;
function useImage(path: string, genOtherFunc: boolean = false): ImgURL | UseImageFunction
{
    return genOtherFunc
      ? (nextPath: string): ImgURL => imgFolderURL(`${path}/${nextPath}`)
      : imgFolderURL(path);
}

export default useImage;
