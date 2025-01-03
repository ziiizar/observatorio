export const filterOptions = {
    REGISTROS: {
      creators: ["Autor 1", "Autor 2", "Autor 3"], // Sustituye con valores reales
      subject: ["Materia 1", "Materia 2", "Materia 3"],
      publisher: ["Editorial 1", "Editorial 2", "Editorial 3"],
      language: ["Español", "Inglés", "Francés"],
      rights: ["Derecho 1", "Derecho 2", "Derecho 3"],
    },
    PATENTES: {
      fuente: ["Google", "YouTube", "Nature"], // Filtros basados en la relación con `ApiFuente`
      patent_office: ["Japón", "China", "USPTO"],
      claims: ["Claim 1", "Claim 2", "Claim 3"], // Opciones ficticias, sustituir con reales si es necesario
      description: ["Descripción breve", "Descripción técnica", "Descripción completa"], // Opciones de ejemplo
    },
  };
  