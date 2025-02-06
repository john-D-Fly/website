(function() {
  var searchInput = document.getElementById('search');
  var suggestionsContainer = document.getElementById('suggestions');
  
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      var query = this.value.trim();
      if (query.length < 2) {
        suggestionsContainer.classList.add('d-none');
        return;
      }
      
      // Perform search
      var results = window.flexSearch.search(query);
      
      if (results.length > 0) {
        suggestionsContainer.innerHTML = results.map(function(result) {
          return '<a class="dropdown-item" href="' + result.url + '">' + result.title + '</a>';
        }).join('');
        suggestionsContainer.classList.remove('d-none');
      } else {
        suggestionsContainer.classList.add('d-none');
      }
    });
  }
})(); 