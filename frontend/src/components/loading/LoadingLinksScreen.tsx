import { Skeleton } from "@mui/material";

export default function LoadingLinksScreen() {
  return (
    <section className="flex w-full flex-col gap-5 justify-self-center rounded-xl bg-white p-10 md:w-[95%]">
      <Skeleton variant="rounded" width="70%" height="48px" />
      <Skeleton variant="rounded" width="100%" />
      <Skeleton
        variant="rounded"
        width="100%"
        height="46px"
        sx={{ margin: "0px auto 0px auto" }}
      />
      <Skeleton
        variant="rounded"
        width="100%"
        height="228px"
        sx={{ margin: "0px auto 0px auto" }}
      />
      <Skeleton
        variant="rounded"
        width="100%"
        height="228px"
        sx={{ margin: "0px auto 0px auto" }}
      />
    </section>
  );
}
