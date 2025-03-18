"use client";
import Loader from "@/components/Loader";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    router.prefetch("/admin");
    const timeout = setTimeout(() => {
      setLoading(false);
      router.push("/admin");
    }, 1000);
    return () => clearTimeout(timeout);
  }, [router]);

  if (loading) {
    return <Loader />;
  }

  return null;
}
