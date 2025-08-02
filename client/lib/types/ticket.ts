export interface Ticket {
  id: string;
  title: string;
  description: string;
  site: Site;
  category: Category;
  assignedTo?: string;
  createdBy: string;
  priority: Priority;
  status: Status;
  createdOn: Date;
  updatedAt: Date;
}

export const Sites = [
  "Salinas",
  "Watsonville",
  "HQ",
  "Gilroy",
  "Modesto",
  "Stockton",
] as const;
export type Site = (typeof Sites)[number];

export const Categories = ["Software", "Hardware", "Network"] as const;
export type Category = (typeof Categories)[number];

export const Priorites = [1, 2, 3, 4, 5] as const;
export type Priority = (typeof Priorites)[number];

export const Statuses = ["Open", "Closed", "Active", "Rejected"] as const;
export type Status = (typeof Statuses)[number];

export default Ticket;
