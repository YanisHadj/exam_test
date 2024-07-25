export type DateRange = {
  startDate: Date;
  endDate: Date;
};

export function isRangeAvailable(
  requestedRange: DateRange,
  availableRange: DateRange
): boolean {
  // Vérifie si la date de début de la plage demandée est après ou égale à la date de début de la plage disponible
  const startsAfterOrAtStart =
    requestedRange.startDate >= availableRange.startDate;
  // Vérifie si la date de fin de la plage demandée est avant ou égale à la date de fin de la plage disponible
  const endsBeforeOrAtEnd = requestedRange.endDate <= availableRange.endDate;

  // Retourne true si les deux conditions sont remplies, false sinon
  return startsAfterOrAtStart && endsBeforeOrAtEnd;
}
