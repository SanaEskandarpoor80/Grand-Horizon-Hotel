document.addEventListener("DOMContentLoaded", function() {
    var shortDescriptions = document.querySelectorAll('.short-description');
    shortDescriptions.forEach(function(shortDescription) {
        var originalText = shortDescription.textContent;
        if (originalText.length > 32) {
            var truncatedText = originalText.substring(0, 150) + '...';
            shortDescription.textContent = truncatedText;
        }
    });
});
