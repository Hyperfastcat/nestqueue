import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createTickets, getTickets } from "@/lib/api/tickets";
import Ticket from "@/lib/types/ticket";

export const useTicketsQuery = () =>
  useQuery({
    queryKey: ["Tickets"],
    retry: 0,
    queryFn: () => getTickets(),
  });

export const useCreateTicketQuerry = () => {
  const client = useQueryClient();

  return useMutation<Ticket, Error, Partial<Ticket>>({
    mutationFn: (ticket) => createTickets(ticket),
    onSuccess: () =>
      client.invalidateQueries({
        queryKey: ["tickets"],
      }),
  });
};
