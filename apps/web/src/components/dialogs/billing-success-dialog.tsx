"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  // DialogTrigger, // Not needed if controlled programmatically
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button"; // For a close button
import { CheckCircle } from "lucide-react"; // Icon for success

interface BillingSuccessDialogProps {
  isOpenInitially: boolean;
}

export function BillingSuccessDialog({
  isOpenInitially,
}: BillingSuccessDialogProps) {
  const [isOpen, setIsOpen] = useState(isOpenInitially);

  useEffect(() => {
    setIsOpen(isOpenInitially);
  }, [isOpenInitially]);

  if (!isOpen) {
    return null; // Don't render anything if not open
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="items-center text-center">
          <CheckCircle className="h-12 w-12 text-green-500 mb-2" />
          <DialogTitle className="text-2xl font-bold">
            Purchase Successful!
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Your plan has been successfully updated. Thank you for your
            purchase!
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 flex justify-center">
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
