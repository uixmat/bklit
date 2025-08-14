import type { Metadata } from "next";

// Components
import Modal from "./_modal";

export const metadata: Metadata = {
  title: "Create organization",
};

export default function CreateOrganizationModal() {
  return <Modal />;
}
