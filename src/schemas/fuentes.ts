import { z } from "zod";

export const InsertFuenteSchema = z.object({
  title: z.string(),
  organization: z.string(),
  frequency: z.coerce.number(),
  is_monitoring: z.boolean(),
  editors: z.string(),
  matter: z.string(),
  url: z.string(),
  id_eje: z.string(),
});

export type TSInsertFuenteSchema = z.infer<typeof InsertFuenteSchema>;
