"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  addProjectSchema,
  AddProjectFormValues,
} from "@/lib/schemas/project-schema";
import { createProjectAction, FormState } from "@/actions/project-actions";
import { useActionState } from "react"; // Correct for useActionState
import { useFormStatus } from "react-dom"; // Correct for useFormStatus

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
import { Button } from "@/components/ui/button";
import { useEffect } from "react"; // Removed useRef as it might not be needed with handleSubmit
import { toast } from "sonner"; // Assuming you'll add sonner for toasts

const initialState: FormState = {
  success: false,
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? "Creating Project..." : "Create Project"}
    </Button>
  );
}

export default function AddProjectForm() {
  const [state, formAction] = useActionState(createProjectAction, initialState);
  // const formRef = useRef<HTMLFormElement>(null); // Potentially remove if form.handleSubmit is used

  const form = useForm<AddProjectFormValues>({
    resolver: zodResolver(addProjectSchema),
    defaultValues: {
      name: "",
      domain: "",
    },
  });

  useEffect(() => {
    if (state.success) {
      toast.success(state.message);
      form.reset(); // Reset form fields on successful submission
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
  }, [state, form]);

  // This is the actual function that will be called on submit by react-hook-form
  const onSubmit = (data: AddProjectFormValues) => {
    // Convert AddProjectFormValues to FormData for the server action
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        formData.append(key, String(value));
      }
    });
    formAction(formData); // Call the server action with FormData
  };

  return (
    <Form {...form}>
      {/* Pass react-hook-form's handleSubmit to the form's onSubmit event */}
      {/* The server action (formAction) is now called within onSubmit */}
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 max-w-lg mx-auto p-4 sm:p-6 border rounded-lg shadow-sm"
      >
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
