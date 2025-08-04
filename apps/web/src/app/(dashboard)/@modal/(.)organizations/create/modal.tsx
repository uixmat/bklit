"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { AddOrganizationForm } from "@/components/forms/add-organization-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function Modal() {
  console.log("Rendered Modal (modal.tsx).");
  const router = useRouter();
  const [open, setOpen] = useState(true);

  const handleSuccess = () => {
    setOpen(false);
    setTimeout(() => {
      router.back();
    }, 150);
  };

  return (
    <Dialog open={open} onOpenChange={() => router.back()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add user</DialogTitle>
        </DialogHeader>
        <AddOrganizationForm onSuccess={handleSuccess} />
      </DialogContent>
    </Dialog>
  );
}
