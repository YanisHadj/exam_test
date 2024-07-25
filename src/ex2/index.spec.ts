import { submitOrder, Order } from "./index";
import { sendOrderEmail } from "./lib/email";

// Créer un mock pour la fonction sendOrderEmail
jest.mock("./lib/email", () => ({
  sendOrderEmail: jest.fn(),
}));

describe("submitOrder", () => {
  beforeEach(() => {
    // Réinitialiser le mock avant chaque test
    jest.clearAllMocks();
  });

  test("soumet une commande avec succès", () => {
    const order: Order = { id: "123", isSubmitted: false };

    const result = submitOrder(order);

    expect(result.isSubmitted).toBe(true);
    expect(sendOrderEmail).toHaveBeenCalledWith("123");
  });

  test("émet une erreur si la commande est déjà soumise", () => {
    const order: Order = { id: "123", isSubmitted: true };

    expect(() => submitOrder(order)).toThrow("La commande a déjà été soumise.");
    expect(sendOrderEmail).not.toHaveBeenCalled();
  });

  test("appelle sendOrderEmail avec le bon identifiant", () => {
    const order: Order = { id: "123", isSubmitted: false };

    submitOrder(order);

    expect(sendOrderEmail).toHaveBeenCalledWith("123");
  });

  test("retourne la commande mise à jour", () => {
    const order: Order = { id: "123", isSubmitted: false };

    const result = submitOrder(order);

    expect(result).toEqual({ id: "123", isSubmitted: true });
  });
});
