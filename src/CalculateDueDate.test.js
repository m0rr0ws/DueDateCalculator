import calculateDueDate from "./CalculateDueDate";

describe('CalculateDueDate function', () => {
    it('Calculates due date based on submission date and turn around time included', () => {
        expect(calculateDueDate(new Date("05-02-2023 14:12:00"), 16)).toEqual(new Date("Thu May 04 2023 16:12:00"));
    });
  });