import { isRangeAvailable, DateRange } from "./index";

describe("isRangeAvailable", () => {
  it("doit renvoyer true lorsque l'intervalle demandé est entièrement compris dans l'intervalle disponible", () => {
    const requestedRange: DateRange = {
      startDate: new Date("2024-07-01"),
      endDate: new Date("2024-07-20"),
    };
    const availableRange: DateRange = {
      startDate: new Date("2024-06-04"),
      endDate: new Date("2024-08-29"),
    };

    expect(isRangeAvailable(requestedRange, availableRange)).toBe(true);
  });

  it("doit retourner false lorsque la date de début de l'intervalle demandé est antérieure à la date de début de l'intervalle disponible", () => {
    const requestedRange: DateRange = {
      startDate: new Date("2024-05-09"),
      endDate: new Date("2024-07-10"),
    };
    const availableRange: DateRange = {
      startDate: new Date("2024-06-12"),
      endDate: new Date("2024-08-19"),
    };

    expect(isRangeAvailable(requestedRange, availableRange)).toBe(false);
  });

  it("doit renvoyer false lorsque la date de fin de l'intervalle demandé est aprés à la date de fin de l'intervalle disponible", () => {
    const requestedRange: DateRange = {
      startDate: new Date("2024-07-21"),
      endDate: new Date("2024-09-23"),
    };
    const availableRange: DateRange = {
      startDate: new Date("2024-06-11"),
      endDate: new Date("2024-08-28"),
    };

    expect(isRangeAvailable(requestedRange, availableRange)).toBe(false);
  });

  it("doit renvoyer false lorsque l'intervalle demandé chevauche l'intervalle disponible mais n'y est pas contenu", () => {
    const requestedRange: DateRange = {
      startDate: new Date("2024-07-09"),
      endDate: new Date("2024-08-14"),
    };
    const availableRange: DateRange = {
      startDate: new Date("2024-06-03"),
      endDate: new Date("2024-08-06"),
    };

    expect(isRangeAvailable(requestedRange, availableRange)).toBe(false);
  });

  it("doit renvoyer true lorsque l'intervalle demandé est exactement le même que l'intervalle disponible", () => {
    const requestedRange: DateRange = {
      startDate: new Date("2024-06-01"),
      endDate: new Date("2024-08-01"),
    };
    const availableRange: DateRange = {
      startDate: new Date("2024-06-01"),
      endDate: new Date("2024-08-27"),
    };

    expect(isRangeAvailable(requestedRange, availableRange)).toBe(true);
  });
});
