export const SITE = {
  name: 'Apartments Dali',
  phone: '+38268238148',
  phoneDisplay: '+382 68 238 148',
  get telHref() {
    return `tel:${this.phone}`;
  },
  get whatsappHref() {
    return `https://wa.me/${this.phone.replace(/[^\d]/g, '')}`;
  },
  mapsShareUrl: 'https://maps.app.goo.gl/ZLaa8UnDfvzCAnVQA',
  coords: { lat: 42.2902518, lng: 18.8500754 },
  get mapsEmbedSrc() {
    return `https://www.google.com/maps?q=${this.coords.lat},${this.coords.lng}&z=16&output=embed`;
  },
};

export function whatsappHrefWithMessage(message: string): string {
  return `${SITE.whatsappHref}?text=${encodeURIComponent(message)}`;
}
