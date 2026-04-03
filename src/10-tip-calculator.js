/**
 * 🍽️ TipEasy - Restaurant Tip Calculator
 *
 * You're building TipEasy, an app that helps diners calculate the right
 * tip based on how they'd rate their dining experience. No more awkward
 * mental math at the table!
 *
 * Service Rating → Tip Percentage:
 *   - 1 (terrible)  → 5%
 *   - 2 (poor)      → 10%
 *   - 3 (okay)      → 15%
 *   - 4 (good)      → 20%
 *   - 5 (excellent) → 25%
 *
 * Return an object with:
 *   - tipPercentage: the percentage as a number (e.g., 15)
 *   - tipAmount: the calculated tip rounded to 2 decimal places
 *   - totalAmount: bill + tip rounded to 2 decimal places
 *
 * Rules:
 *   - If billAmount is 0 or negative, return null
 *   - If serviceRating is not an integer from 1 to 5, return null
 *
 * Example:
 *   calculateTip(50, 4)
 *   → { tipPercentage: 20, tipAmount: 10.00, totalAmount: 60.00 }
 *
 * @param {number} billAmount - The bill amount in dollars
 * @param {number} serviceRating - Service rating from 1 to 5
 * @returns {{ tipPercentage: number, tipAmount: number, totalAmount: number } | null}
 */
export function calculateTip(billAmount, serviceRating) {
  if (
    billAmount <= 0 ||
    !Number.isInteger(serviceRating) ||
    serviceRating < 1 ||
    serviceRating > 5
  )
    return null;
  const calculateTip = {};
  if (serviceRating === 5) {
    calculateTip.tipPercentage = 25;
    calculateTip.tipAmount = Number((billAmount * (25 / 100)).toFixed(2));
    calculateTip.totalAmount = Number(
      (calculateTip.tipAmount + billAmount).toFixed(2),
    );
  } else if (serviceRating === 4) {
    calculateTip.tipPercentage = 20;
    calculateTip.tipAmount = Number((billAmount * (20 / 100)).toFixed(2));
    calculateTip.totalAmount = Number(
      (calculateTip.tipAmount + billAmount).toFixed(2),
    );
  } else if (serviceRating === 3) {
    calculateTip.tipPercentage = 15;
    calculateTip.tipAmount = Number((billAmount * (15 / 100)).toFixed(2));
    calculateTip.totalAmount = Number(
      (calculateTip.tipAmount + billAmount).toFixed(2),
    );
  } else if (serviceRating === 2) {
    calculateTip.tipPercentage = 10;
    calculateTip.tipAmount = Number((billAmount * (10 / 100)).toFixed(2));
    calculateTip.totalAmount = Number(
      (calculateTip.tipAmount + billAmount).toFixed(2),
    );
  } else if (serviceRating === 1) {
    calculateTip.tipPercentage = 5;
    calculateTip.tipAmount = Number((billAmount * (5 / 100)).toFixed(2));
    calculateTip.totalAmount = Number(
      (calculateTip.tipAmount + billAmount).toFixed(2),
    );
  }

  return calculateTip;
}
