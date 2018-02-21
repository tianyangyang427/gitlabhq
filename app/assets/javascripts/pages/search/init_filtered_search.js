import '~/filtered_search/dropdown_emoji';
import '~/filtered_search/dropdown_hint';
import '~/filtered_search/dropdown_non_user';
import '~/filtered_search/dropdown_user';
import '~/filtered_search/dropdown_utils';
import '~/filtered_search/filtered_search_dropdown_manager';
import '~/filtered_search/filtered_search_dropdown';
import '~/filtered_search/filtered_search_manager';
import '~/filtered_search/filtered_search_tokenizer';
import '~/filtered_search/filtered_search_visual_tokens';

<<<<<<< HEAD
export default ({ page, filteredSearchTokenKeys, stateFiltersSelector }) => {
=======
export default ({ page }) => {
>>>>>>> upstream/master
  const filteredSearchEnabled = gl.FilteredSearchManager && document.querySelector('.filtered-search');
  if (filteredSearchEnabled) {
    const filteredSearchManager = new gl.FilteredSearchManager({
      page,
      filteredSearchTokenKeys,
      stateFiltersSelector,
    });
    filteredSearchManager.setup();
  }
};
