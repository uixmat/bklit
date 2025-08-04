import type { Metadata } from "next";

// Components
import Modal from "./_modal";

export const metadata: Metadata = {
  title: "Create project",
};

export default function CreateProjectModal() {
  return <Modal />;
}
