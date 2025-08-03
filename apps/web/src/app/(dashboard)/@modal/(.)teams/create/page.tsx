import type { Metadata } from "next";

// Components
import Modal from "./modal";

export const metadata: Metadata = {
  title: "Create team",
};

export default function CreateTeamModal() {
  console.log("Rendered CreateTeamModal (page.tsx).");
  return <Modal />;
}
