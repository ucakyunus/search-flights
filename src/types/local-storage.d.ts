export interface SearchState {
  departure: {
    code: string;
    title: string;
  };
  arrival: {
    code: string;
    title: string;
  };
  cabinType: string;
  personCount: number;
}

export interface PromotionState {
  isActive: boolean;
}
