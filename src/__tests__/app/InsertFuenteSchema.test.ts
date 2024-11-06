// __tests__/InsertFuenteSchema.test.ts
import { InsertFuenteSchema } from "@/schemas/fuentes";

describe("InsertFuenteSchema", () => {
  it("valida correctamente un objeto con datos válidos", () => {
    const validData = {
      title: "Título de Prueba",
      organization: "Organización de Prueba",
      editores: "Editor de Prueba",
      frequency: 3,
      url: "https://example.com",
      materia: "Materia de Prueba",
      id_eje: 1,
      is_monitoring: true,
    };

    expect(() => InsertFuenteSchema.parse(validData)).not.toThrow();
  });

  it("muestra un error si el título está vacío", () => {
    const invalidData = {
      title: "",
      organization: "Organización de Prueba",
      editores: "Editor de Prueba",
      frequency: 3,
      url: "https://example.com",
      materia: "Materia de Prueba",
      id_eje: 1,
      is_monitoring: true,
    };

    expect(() => InsertFuenteSchema.parse(invalidData)).toThrow("El título no puede estar vacío.");
  });

  it("muestra un error si la organización está vacía", () => {
    const invalidData = {
      title: "Título de Prueba",
      organization: "",
      editores: "Editor de Prueba",
      frequency: 3,
      url: "https://example.com",
      materia: "Materia de Prueba",
      id_eje: 1,
      is_monitoring: true,
    };

    expect(() => InsertFuenteSchema.parse(invalidData)).toThrow("La organización no puede estar vacía.");
  });

  it("muestra un error si la frecuencia es menor a 1", () => {
    const invalidData = {
      title: "Título de Prueba",
      organization: "Organización de Prueba",
      editores: "Editor de Prueba",
      frequency: 0,
      url: "https://example.com",
      materia: "Materia de Prueba",
      id_eje: 1,
      is_monitoring: true,
    };

    expect(() => InsertFuenteSchema.parse(invalidData)).toThrow("La frecuencia debe ser al menos 1.");
  });

  it("muestra un error si la URL no es válida", () => {
    const invalidData = {
      title: "Título de Prueba",
      organization: "Organización de Prueba",
      editores: "Editor de Prueba",
      frequency: 3,
      url: "not-a-valid-url",
      materia: "Materia de Prueba",
      id_eje: 1,
      is_monitoring: true,
    };

    expect(() => InsertFuenteSchema.parse(invalidData)).toThrow("Debe ser una URL válida.");
  });
  
  it("muestra un error si id_eje es menor a 1", () => {
    const invalidData = {
      title: "Título de Prueba",
      organization: "Organización de Prueba",
      editores: "Editor de Prueba",
      frequency: 3,
      url: "https://example.com",
      materia: "Materia de Prueba",
      id_eje: 0,
      is_monitoring: true,
    };

    expect(() => InsertFuenteSchema.parse(invalidData)).toThrow("Debe seleccionar un eje temático.");
  });
});
