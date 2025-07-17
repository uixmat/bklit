"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useTransition } from "react";
import { useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { createTeamAction, type TeamFormState } from "@/actions/team-actions";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const createTeamSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Team name must be at least 2 characters long." })
    .max(50, { message: "Team name must be 50 characters or less." }),
  description: z
    .string()
    .max(200, { message: "Description must be 200 characters or less." })
    .optional(),
});

type AddTeamFormValues = z.infer<typeof createTeamSchema>;

const initialState: TeamFormState = {
  success: false,
  message: "",
  newTeamId: undefined,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? "Creating Team..." : "Create Team"}
    </Button>
  );
}

export default function AddTeamForm() {
  const [state, formAction] = useActionState(createTeamAction, initialState);
  const [, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<AddTeamFormValues>({
    resolver: zodResolver(createTeamSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  useEffect(() => {
    if (state.success) {
      toast.success(state.message);
      form.reset();
      if (state.newTeamId) {
        // Redirect to the new team
        router.push(`/${state.newTeamId}`);
      }
    } else if (state.message && !state.success && state.errors) {
      Object.entries(state.errors).forEach(([key, value]) => {
        if (value && value.length > 0) {
          form.setError(key as keyof AddTeamFormValues, {
            type: "manual",
            message: value[0],
          });
        }
      });
    } else if (state.message && !state.success) {
      toast.error(state.message);
    }
  }, [state, form, router]);

  const onSubmit = (data: AddTeamFormValues) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        formData.append(key, String(value));
      }
    });
    startTransition(() => {
      formAction(formData);
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Team Name</FormLabel>
              <FormControl>
                <Input placeholder="My Awesome Team" {...field} />
              </FormControl>
              <FormDescription>A descriptive name for your team.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description (Optional)</FormLabel>
              <FormControl>
                <Textarea placeholder="What does your team work on?" {...field} />
              </FormControl>
              <FormDescription>A brief description of your team&apos;s purpose.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <SubmitButton />
        {state.message && !state.success && !state.errors && (
          <p className="text-sm font-medium text-destructive">{state.message}</p>
        )}
      </form>
    </Form>
  );
}
