import { useEffect, useRef } from "react";
import iconLink from "../../assets/icons/icon-link.svg";
import useContent from "../../hooks/useContent";

export default function CopiedToClipboardMessage() {
  const { openCopiedToClipboardMessage, setOpenCopiedToClipboardMessage } =
    useContent();
  const dialogRef = useRef();

  useEffect(() => {
    if (openCopiedToClipboardMessage) {
      dialogRef.current.style.display = "flex";
      setTimeout(() => {
        if (!dialogRef.current) return;
        dialogRef.current.style.bottom = "56px";
      }, 10);
      setTimeout(() => {
        setOpenCopiedToClipboardMessage(false);
      }, 4000);
    } else {
      dialogRef.current.style.bottom = "";
      setTimeout(() => {
        dialogRef.current.style.display = "";
      }, 200);
    }
  }, [openCopiedToClipboardMessage]);

  return (
    <dialog
      className="fixed inset-x-0 bottom-[-86px] m-auto hidden h-14 w-[397px] items-center justify-between rounded-xl bg-[#333333] px-6 py-0 text-base font-semibold not-italic leading-[150%] text-neutral-50"
      ref={dialogRef}
    >
      <img src={iconLink} className="w-5 object-contain" />
      The link has been copied to your clipboard
    </dialog>
  );
}
