import Ticket from "@/lib/types/ticket";
import Button from "../ui/button";

interface TicketViewProps {
  className?: string;
  ticket?: Ticket;
  onDismiss: () => void;
}

export default function TicketView({
  className = "",
  ticket,
  onDismiss,
}: TicketViewProps) {
  if (!ticket) {
    return <div>Loading...</div>;
  }

  const createdOn = new Date(ticket.createdOn).toDateString();
  const updatedAt = new Date(ticket.updatedAt).toDateString();

  return (
    <div className={className}>
      <h1 className="text-xl font-bold rounded-lg bg-gray-600 pl-2 mt-2">
        Ticket Id
      </h1>
      <p className="rounded-lg bg-gray-300 pl-2 mb-2 text-lg font-medium">
        {ticket.id}
      </p>
      <h1 className="text-xl font-bold rounded-lg bg-gray-500 pl-2 ">
        Ticket Title
      </h1>
      <p className="rounded-lg bg-gray-300 pl-2 mb-2 text-lg font-medium">
        {ticket.title}
      </p>
      <h1 className="text-xl font-bold rounded-lg bg-gray-500 pl-2 ">
        Priority
      </h1>
      <p className="rounded-lg bg-gray-300 pl-2 mb-2 text-lg font-medium">
        {ticket.priority}
      </p>
      <h1 className="text-xl font-bold rounded-lg bg-gray-500 pl-2 ">
        Description
      </h1>
      <p className="rounded-lg bg-gray-300 pl-2 mb-2 text-lg font-medium">
        {ticket.description}
      </p>
      <h1 className="text-xl font-bold rounded-lg bg-gray-500 pl-2 ">
        Category
      </h1>
      <p className="rounded-lg bg-gray-300 pl-2 mb-2 text-lg font-medium">
        {ticket.category}
      </p>
      <h1 className="text-xl font-bold rounded-lg bg-gray-500 pl-2 ">Site</h1>
      <p className="rounded-lg bg-gray-300 pl-2 mb-2 text-lg font-medium">
        {ticket.site}
      </p>
      <div className="font-bold rounded-lg bg-gray-500 pl-2 grid grid-cols-2 divide-x-4">
        {ticket.assignedTo ? (
          <p>Assigned to {ticket.assignedTo}</p>
        ) : (
          <p>Unassigned</p>
        )}
        <p>Created by {ticket.createdBy}</p>
      </div>

      <div className="font-bold rounded-lg bg-gray-500 pl-2 grid grid-cols-2 divide-x-4 mt-2">
        <p>Created on {createdOn}</p>
        <p>Last modified on {updatedAt}</p>
      </div>

      <Button
        className="text-md font-bold rounded-lg bg-gray-700 text-white mt-2"
        onClick={onDismiss}
      >
        Close
      </Button>
    </div>
  );
}
