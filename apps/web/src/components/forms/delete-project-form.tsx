"use client";

import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import React, { useActionState, useEffect, useState, useTransition } from "react";
import { toast } from "sonner";
import { deleteProjectAction, type FormState } from "@/actions/project-actions";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface DeleteProjectFormProps {
  siteId: string;
  projectName: string;
}

const initialState: FormState = {
  success: false,
  message: "",
};

export function DeleteProjectForm({ siteId, projectName }: DeleteProjectFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [confirmationInput, setConfirmationInput] = useState("");
  const [state, formAction] = useActionState(deleteProjectAction, initialState);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const queryClient = useQueryClient();
  const { data: session } = useSession();

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast.success(state.message);
        setIsOpen(false); // Close dialog on success
        setConfirmationInput(""); // Reset input

        // Refresh the current route's data and components
        router.refresh();

        // Invalidate the userProjectCount query
        if (session?.user?.id) {
          // No need to await, invalidation is synchronous marking, refetch is async
          queryClient.invalidateQueries({
            queryKey: ["userProjectCount", session.user.id],
          });
        }

        // Redirect after successful deletion
        router.push("/"); // Redirect to homepage or a general dashboard
      } else {
        toast.error(state.message);
      }
    }
  }, [state, router, queryClient, session]);

  const handleSubmitDeletion = () => {
    if (confirmationInput === projectName) {
      const formData = new FormData();
      formData.append("siteId", siteId);
      formData.append("confirmedProjectName", confirmationInput);
      startTransition(() => {
        formAction(formData);
      });
    } else {
      toast.error("Project name does not match. Please type it correctly to confirm.");
    }
  };

  // Reset form state if dialog is closed without submitting
  useEffect(() => {
    if (!isOpen) {
      // Reset action state if needed, though typically it resets on new action call
      // For now, just resetting the input field is fine.
      setConfirmationInput("");
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="lg" variant="destructive">
          Delete project
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete Project: {projectName}</DialogTitle>
          <DialogDescription>
            To permanently delete this project and all associated data, please enter &quot;
            <span className="font-semibold">{projectName}</span>&quot; below.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="project-name-confirmation" className="text-right sr-only">
              Project Name
            </Label>
            <Input
              id="project-name-confirmation"
              value={confirmationInput}
              onChange={(e) => setConfirmationInput(e.target.value)}
              placeholder={projectName}
              className="col-span-4"
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button
            variant="destructive"
            onClick={handleSubmitDeletion}
            disabled={isPending || confirmationInput !== projectName}
          >
            {isPending ? "Deleting..." : "Delete Project"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
