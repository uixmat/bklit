"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@bklit/ui/components/dialog";
import { useRouter } from "next/navigation";
import { AddProjectForm } from "@/components/forms/add-project-form";

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
          <DialogTitle>Add project</DialogTitle>
        </DialogHeader>
        <AddProjectForm onSuccess={handleSuccess} />
      </DialogContent>
    </Dialog>
  );
}
