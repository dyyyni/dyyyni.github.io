document.addEventListener('DOMContentLoaded', function () {
    const titleElement = document.getElementById('title');
    const subtitles = [
        document.getElementById('subtitle1'),
        document.getElementById('subtitle2'),
        document.getElementById('subtitle3')
    ];
    const titleText = 'Daniel Luoma';
    const subtitleTexts = ['Cybersecurity Researcher', 'Software Engineer', 'Nerd.'];

    function typeText(textElement, text, index, callback) {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            setTimeout(function() {
                typeText(textElement, text, index + 1, callback);
            }, 80);  // Typing speed in milliseconds
        } else if (callback) {
            setTimeout(callback, 250);  // Delay before starting next function
        }
    }

    function typeSubtitles(index) {
        if (index < subtitleTexts.length) {
            typeText(subtitles[index], subtitleTexts[index], 0, function() {
                if (index + 1 < subtitleTexts.length) {
                    typeSubtitles(index + 1);  // Recurse to type the next subtitle
                }
            });
        }
    }

    function typeTitle() {
        typeText(titleElement, titleText, 0, function() {
            typeSubtitles(0);  // Start typing subtitles after the title
        });
    }

    typeTitle();  // Initialize the typing effect
});
