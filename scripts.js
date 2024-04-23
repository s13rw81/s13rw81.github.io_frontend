// Function to fetch data from API and update the table
function updateStats() {
    $.ajax({
      url: "https://leetcodestats.cyclic.app/s13rw81",
      type: "GET",
      dataType: "json",
      success: function(data) {
        $("#statsBody").empty(); // Clear existing data
        $.each(data, function(key, value) {
          $("#statsBody").append("<tr><td>" + key + "</td><td>" + value + "</td></tr>");
        });
      },
      error: function(xhr, status, error) {
        console.error("Error fetching data: ", error);
      }
    });
  }

  // Call the updateStats function when the page loads
  $(document).ready(function() {
    updateStats();
  });