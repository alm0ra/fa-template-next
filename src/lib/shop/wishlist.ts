// Wishlist - localStorage-based wishlist management

const STORAGE_KEY = 'shop_wishlist';
const EVENT_NAME = 'wishlist-updated';
const isBrowser = () => typeof window !== 'undefined';

function getItems(): string[] {
  if (!isBrowser()) return [];
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
}

function setItems(items: string[]) {
  if (!isBrowser()) return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  window.dispatchEvent(new CustomEvent(EVENT_NAME));
}

export function getWishlist(): string[] {
  return getItems();
}

export function addToWishlist(productId: string) {
  const items = getItems();
  if (!items.includes(productId)) {
    setItems([...items, productId]);
  }
}

export function removeFromWishlist(productId: string) {
  setItems(getItems().filter((id) => id !== productId));
}

export function isInWishlist(productId: string): boolean {
  return getItems().includes(productId);
}

export function toggleWishlist(productId: string): boolean {
  if (isInWishlist(productId)) {
    removeFromWishlist(productId);
    return false;
  } else {
    addToWishlist(productId);
    return true;
  }
}

export function getWishlistCount(): number {
  return getItems().length;
}

export { EVENT_NAME as WISHLIST_EVENT };
