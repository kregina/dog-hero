export interface SearchEvent {
  address: string,
  from: string,
  to: string
}

export interface FilterEvent {
  price: [number, number]
}
