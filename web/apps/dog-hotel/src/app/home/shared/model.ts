export interface SearchEvent {
  address: string,
  from: string,
  to: string
}

export interface FilterEvent {
  priceRange: [number, number]
}
