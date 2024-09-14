import { z } from "zod";

export const InsertFuenteSchema = z.object({
  title: z.string(),
  organization: z.string(),
  frequency: z.number(),
  is_monitoring: z.boolean(),
  editors: z.string(),
  matter: z.string(),
  url: z.string(),
  id_eje: z.number(),
});

export type TSInsertFuenteSchema = z.infer<typeof InsertFuenteSchema>;
