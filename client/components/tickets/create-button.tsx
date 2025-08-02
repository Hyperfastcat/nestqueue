import { useState } from "react";
import Button from "../ui/button";
import Modal from "../ui/modal";
import CreateTicketForm from "./create-form";

interface CreateTicketButtonProps {}

export default function CreateTicketButton() {
  const [active, setActive] = useState(false);

  const handleClick = () => setActive(true);
  const handleDismiss = () => setActive(false);

  return (
    <>
      <Button className=" rounded-lg bg-green-500" onClick={handleClick}>
        Create New
      </Button>

      <Modal active={active}>
        <CreateTicketForm onDismiss={handleDismiss} />
      </Modal>
    </>
  );
}
