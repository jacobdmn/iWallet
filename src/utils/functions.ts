export function shortenAddress(address: string): string {
  if (address.length < 11) {
    // Return the full address if it's too short to shorten
    return address;
  }

  const firstPart = address.substr(0, 6);
  const lastPart = address.substr(-4);
  return `${firstPart}...${lastPart}`;
}

export function formatEthValue(value: number): string {
  return value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
