import type { Metadata } from "next";

// Components
import Modal from "./modal";

export const metadata: Metadata = {
  title: "Create project",
};

export default function CreateProjectModal() {
  return <Modal />;
}
