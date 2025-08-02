"use client";

import CreateTicketButton from "@/components/tickets/create-button";
import TicketsTable from "@/components/tickets/table";
import { useTicketsQuery } from "@/lib/hooks/queries/tickets";
import { mockTickets } from "@/lib/tickets.mock";
import Ticket from "@/lib/types/ticket";

export default function Home() {
  const { data: tickets, error: ticketsQueryError } = useTicketsQuery();

  const handleTicketClick = (ticket: Ticket) => alert(ticket.id);

  if (ticketsQueryError) {
    return <div>Failed to load tickets.</div>;
  }

  if (!tickets) {
    return <div>Loading tickets...</div>;
  }

  return (
    <>
      <CreateTicketButton />
      <TicketsTable tickets={tickets} />;
    </>
  );
}
