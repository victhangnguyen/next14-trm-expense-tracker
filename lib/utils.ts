export function formatPriceWithCommas(price: number) {
    // Ensure the number has two decimal places
    let formattedPrice = price.toFixed(2);
    // Add commas for thousands, millions, etc.
    return formattedPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
