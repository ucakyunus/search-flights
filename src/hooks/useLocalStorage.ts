import { PromotionState, SearchState } from '@/types/local-storage';

export const useLocaleStorage = () => {
  const searchState = JSON.parse(
    localStorage.getItem('searchState') ?? '{}',
  ) as Partial<SearchState>;

  const setSearchState = (state: SearchState) => {
    localStorage.setItem('searchState', JSON.stringify(state));
  };

  const isPromotionActive = JSON.parse(
    localStorage.getItem('promotionState') ?? '{}',
  ) as Partial<PromotionState>;

  const setPromotionState = (state: boolean) => {
    localStorage.setItem('promotionState', JSON.stringify({ isActive: state }));
  };

  return {
    searchState,
    setSearchState,
    setPromotionState,
    isPromotionActive: isPromotionActive.isActive ?? false,
  };
};
