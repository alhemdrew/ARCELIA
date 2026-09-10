export const PHONE = "+2348070720766";
export const PHONE_LOCAL = "08070720766";

export function waLink(message: string) {
  const numeric = PHONE.replace(/[^0-9]/g, "");
  return `https://wa.me/${numeric}?text=${encodeURIComponent(message)}`;
}

export function telLink() {
  return `tel:${PHONE}`;
}
