"use client";

import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useActionState, useEffect, useState, useTransition } from "react";
import { toast } from "sonner";
import { deleteTeamAction, type TeamFormState } from "@/actions/team-actions";

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

interface DeleteTeamFormProps {
  teamId: string;
  teamName: string;
}

const initialState: TeamFormState = {
  success: false,
  message: "",
};

export function DeleteTeamForm({ teamId, teamName }: DeleteTeamFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [confirmationInput, setConfirmationInput] = useState("");
  const [state, formAction] = useActionState(deleteTeamAction, initialState);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const queryClient = useQueryClient();
  const { data: session } = useSession();

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast.success(state.message);
        setIsOpen(false);
        setConfirmationInput("");

        router.refresh();

        if (session?.user?.id) {
          queryClient.invalidateQueries({
            queryKey: ["userTeams", session.user.id],
          });
        }

        router.push("/");
      } else {
        toast.error(state.message);
      }
    }
  }, [state, router, queryClient, session]);

  const handleSubmitDeletion = () => {
    if (confirmationInput === teamName) {
      const formData = new FormData();
      formData.append("teamId", teamId);
      formData.append("confirmedTeamName", confirmationInput);
      startTransition(() => {
        formAction(formData);
      });
    } else {
      toast.error(
        "Team name does not match. Please type it correctly to confirm.",
      );
    }
  };

  useEffect(() => {
    if (!isOpen) {
      setConfirmationInput("");
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="lg" variant="destructive">
          Delete team
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete Team: {teamName}</DialogTitle>
          <DialogDescription>
            To permanently delete this team and all associated data, please
            enter &quot;
            <span className="font-semibold">{teamName}</span>&quot; below.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label
              htmlFor="team-name-confirmation"
              className="text-right sr-only"
            >
              Team Name
            </Label>
            <Input
              id="team-name-confirmation"
              value={confirmationInput}
              onChange={(e) => setConfirmationInput(e.target.value)}
              placeholder={teamName}
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
            disabled={isPending || confirmationInput !== teamName}
          >
            {isPending ? "Deleting..." : "Delete Team"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
