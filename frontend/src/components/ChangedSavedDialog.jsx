import { useEffect, useRef } from "react";
import useContent from "../hooks/useContent";
import savedIcon from "../assets/icons/icon-changes-saved.svg";

export default function ChangedSavedDialog() {
  const { openSaveChangesMessage, setOpenSaveChangesMessage } = useContent();
  const dialogRef = useRef();

  useEffect(() => {
    if (openSaveChangesMessage) {
      dialogRef.current.style.display = "flex";
      setTimeout(() => {
        if (!dialogRef.current) return;
        dialogRef.current.style.bottom = "40px";
      }, 10);
      setTimeout(() => {
        setOpenSaveChangesMessage(false);
      }, 4000);
    } else {
      dialogRef.current.style.bottom = "";
      setTimeout(() => {
        if (!dialogRef.current) return;
        dialogRef.current.style.display = "";
      }, 2000);
    }
  }, [openSaveChangesMessage]);

  return (
    <dialog
      className="fixed inset-x-0 -bottom-14 z-[1000] m-auto h-14 items-center gap-2 rounded-xl bg-[#333333] p-0 px-6 py-4 text-base font-semibold not-italic leading-[150%] text-neutral-50"
      ref={dialogRef}
    >
      <img src={savedIcon} className="h-auto w-5 object-contain" />
      Your changes have been successfully saved!
    </dialog>
  );
}
