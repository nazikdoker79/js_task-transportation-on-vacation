/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentalPrice = 40;
  const saleMost3Days = 20;
  const saleMost7Days = 50;

  const rentalSum = rentalPrice * days;

  if (days > 6) {
    return rentalSum - saleMost7Days;
  }

  if (days > 2) {
    return rentalSum - saleMost3Days;
  }

  return rentalSum;
}

module.exports = calculateRentalCost;
