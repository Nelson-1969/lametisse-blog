// Client-side filtering for blog posts by category
(function() {
  // Get the category from URL parameter
  function getCategoryFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('cat') || 'all';
  }

  // Filter posts based on selected category
  function filterPosts(selectedCategory) {
    const container = document.getElementById('blog-posts');
    if (!container) return;

    const posts = container.querySelectorAll('li[data-category]');

    posts.forEach((post) => {
      const postCategory = post.getAttribute('data-category');

      if (selectedCategory === 'all') {
        post.style.display = '';
      } else {
        // Normalize category for comparison (convert "Voyages" to "voyages", etc.)
        const normalizedPostCategory = postCategory ? postCategory.toLowerCase() : '';
        const normalizedSelected = selectedCategory.toLowerCase();
        post.style.display = normalizedPostCategory === normalizedSelected ? '' : 'none';
      }
    });
  }

  // Update active tab button
  function updateActiveTab(selectedCategory) {
    const tabs = document.querySelectorAll('button[data-category]');
    tabs.forEach((tab) => {
      const tabCategory = tab.getAttribute('data-category');
      if (tabCategory === selectedCategory) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });
  }

  // Handle tab button clicks
  function setupTabClickHandlers() {
    const tabs = document.querySelectorAll('button[data-category]');
    tabs.forEach((tab) => {
      tab.addEventListener('click', (e) => {
        const category = tab.getAttribute('data-category');
        const href = tab.getAttribute('onclick');
        // The onclick handler will navigate, but we can still update the UI immediately
        const url = category === 'all' ? '/' : `/?cat=${category}`;
        window.location.href = url;
      });
    });
  }

  // Initialize on page load
  function init() {
    const selectedCategory = getCategoryFromURL();
    filterPosts(selectedCategory);
    updateActiveTab(selectedCategory);
    setupTabClickHandlers();
  }

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
