import { useEffect, useRef } from "react";
import useContent from "../../hooks/useContent";

export default function LoginMessageDialog() {
  const { openLoginMessage, setOpenLoginMessage } = useContent();
  const dialogRef = useRef();

  useEffect(() => {
    if (openLoginMessage) {
      dialogRef.current.style.display = "block";
      setTimeout(() => {
        if (!dialogRef.current) return;
        dialogRef.current.style.top = "10px";
      }, 10);

      setTimeout(() => {
        setOpenLoginMessage(false);
      }, 3000);
    } else {
      dialogRef.current.style.top = "";
      setTimeout(() => {
        if (!dialogRef.current) return;
        dialogRef.current.style.display = "";
      }, 200);
    }
  }, [openLoginMessage]);

  return (
    <dialog
      className="absolute inset-x-0 top-[-60px] m-auto h-14 w-[220px] rounded-xl bg-[#333] px-6 py-4 text-center text-base font-semibold not-italic leading-[150%] text-neutral-50 shadow-[0px_0px_32px_0px_rgba(0,0,0,0.10)]"
      ref={dialogRef}
    >
      You can login now!
    </dialog>
  );
}
