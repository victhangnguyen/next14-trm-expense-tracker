export function formatNumberWithCommas(number: number) {
  // Ensure the number has two decimal places
  let formattedNumber = number.toFixed(2);
  // Add commas for thousands, millions, etc.
  return formattedNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
