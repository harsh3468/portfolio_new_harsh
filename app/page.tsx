import { Suspense } from "react";
import dynamic from "next/dynamic";

const HomePage = dynamic(() => import("./home"), {
  ssr: false,
});

export default function Page() {
  return (
    <Suspense
      fallback={
        <p className="fixed h-dvh w-dvw flex items-center justify-center font-extrabold text-3xl">
          Hi, There I am Harsh{" "}
        </p>
      }
    >
      <HomePage />
    </Suspense>
  );
}
