"use client";
import * as React from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  // direct /signin
  React.useEffect(() => {
    router.push("/signin");
  }, [router]);
  return null;
}
