"use client";

import { Button } from "@bklit/ui/components/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@bklit/ui/components/form";
import { Input } from "@bklit/ui/components/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useActionState, useEffect, useTransition } from "react";
import { useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { createProjectAction, type FormState } from "@/actions/project-actions";
import { authClient } from "@/auth/client";
import {
  type AddProjectFormValues,
  addProjectSchema,
} from "@/lib/schemas/project-schema";

interface AddProjectFormProps {
  onSuccess?: (newprojectId?: string) => void;
}

const initialState: FormState = {
  success: false,
  message: "",
  newprojectId: undefined,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? "Creating Project..." : "Create Project"}
    </Button>
  );
}

export function AddProjectForm({ onSuccess }: AddProjectFormProps) {
  const { data: activeOrganization } = authClient.useActiveOrganization();

  // Added onSuccess to props
  const [state, formAction] = useActionState(createProjectAction, initialState);
  const [, startTransition] = useTransition();

  const form = useForm<AddProjectFormValues>({
    resolver: zodResolver(addProjectSchema),
    defaultValues: {
      name: "",
      domain: "",
      organizationId: "wz9pOqI28qwu8XpB3AaAt5iMTbwNbTNE",
    },
  });

  useEffect(() => {
    if (state.success) {
      toast.success(state.message);
      form.reset(); // Reset form fields on successful submission
      if (onSuccess) {
        onSuccess(state.newprojectId); // Call onSuccess callback with newprojectId
      }
      // Optionally, you could redirect or close a modal here
    } else if (state.message && !state.success && state.errors) {
      // Display field-specific errors if available
      Object.entries(state.errors).forEach(([key, value]) => {
        if (value && value.length > 0) {
          form.setError(key as keyof AddProjectFormValues, {
            type: "manual",
            message: value[0],
          });
        }
      });
    } else if (state.message && !state.success) {
      toast.error(state.message);
    }
  }, [state, form, onSuccess]); // Added onSuccess to dependency array

  // This is the actual function that will be called on submit by react-hook-form
  const onSubmit = (data: AddProjectFormValues) => {
    // Convert AddProjectFormValues to FormData for the server action
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        formData.append(key, String(value));
      }
    });
    formData.append("organizationId", activeOrganization?.id);
    startTransition(() => {
      // Wrap formAction call in startTransition
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
              <FormLabel>Project Name</FormLabel>
              <FormControl>
                <Input placeholder="My Awesome Project" {...field} />
              </FormControl>
              <FormDescription>
                A descriptive name for your website or application.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="domain"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Domain (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="https://example.com" {...field} />
              </FormControl>
              <FormDescription>
                The primary domain where your project is hosted.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <SubmitButton />
        {/* This message display might need adjustment if react-hook-form handles all errors now */}
        {state.message && !state.success && !state.errors && (
          <p className="text-sm font-medium text-destructive">
            {state.message}
          </p>
        )}
      </form>
    </Form>
  );
}
