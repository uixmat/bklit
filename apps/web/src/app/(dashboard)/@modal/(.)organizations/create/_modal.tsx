"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@bklit/ui/components/dialog";
import { useRouter } from "next/navigation";
import { AddOrganizationForm } from "@/components/forms/add-organization-form";

export default function Modal() {
  const router = useRouter();

  const handleSuccess = () => {
    setTimeout(() => {
      router.back();
    }, 150);
  };

  return (
    <Dialog open={true} onOpenChange={() => router.back()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add organization</DialogTitle>
        </DialogHeader>
        <AddOrganizationForm onSuccess={handleSuccess} />
      </DialogContent>
    </Dialog>
  );
}
