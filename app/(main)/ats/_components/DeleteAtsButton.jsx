"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { deleteAtsReport } from "@/actions/ats";
import { toast } from "sonner";

export default function DeleteAtsButton({ reportId }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {

    try {
      setLoading(true);
      await deleteAtsReport(reportId);
      toast.success("ATS report deleted");
      router.push("/ats");
    } 
    catch (err) {
      toast.error("failed to delete ATS report");
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="text-red-500 text-sm hover:underline"
    >
      {loading ? "Deleting..." : "Delete ATS Report"}
    </button>
  );
}
