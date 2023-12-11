

document.addEventListener('DOMContentLoaded', function () {
    const textContainer = document.getElementById('animated-text');
    const texts = ['Frontend Developer', 'UI/UX Designer'];
    let currentTextIndex = 0;

    function changeText() {
        currentTextIndex = (currentTextIndex + 1) % texts.length;
        textContainer.innerHTML = `<span>${texts[currentTextIndex]}</span>`;
        animateText();
    }

    function animateText() {
        void textContainer.offsetWidth;
        textContainer.classList.remove('animate-slide-in');
        void textContainer.offsetWidth;
        textContainer.classList.add('animate-slide-in');
    }

    animateText();

    setInterval(changeText, 4000);
});



  /// effect menu icon///
  
  document.addEventListener('click', function (event) {
    const iconContainer = document.getElementById('icon-container');
    const clickTriggers = iconContainer.querySelectorAll('.click-trigger');

    // Cek apakah klik dilakukan di dalam ikon atau tidak
    const isInsideIconContainer = clickTriggers.length > 0 &&
        Array.from(clickTriggers).some(trigger => trigger.contains(event.target));

    // Jika klik dilakukan di luar ikon, tutup semua ikon
    if (!isInsideIconContainer) {
        clickTriggers.forEach(trigger => {
            trigger.classList.remove('clicked');
            const text = trigger.querySelector('span');
            text.classList.remove('animate-bg');
            text.style.width = '0';
            text.style.overflow = 'hidden';
        });
    }
});

const clickTriggers = document.querySelectorAll('.click-trigger');

clickTriggers.forEach(trigger => {
    trigger.addEventListener('click', function (event) {
        event.stopPropagation();
        clickTriggers.forEach(innerTrigger => {
            if (innerTrigger !== trigger) {
                innerTrigger.classList.remove('clicked');
                const text = innerTrigger.querySelector('span');
                text.classList.remove('animate-bg');
                text.style.width = '0';
                text.style.overflow = 'hidden';
            }
        });
        trigger.classList.toggle('clicked');
        const text = trigger.querySelector('span');
        if (trigger.classList.contains('clicked')) {
            text.style.width = '300%'; // Sesuaikan dengan nilai yang Anda inginkan
            text.style.overflow = 'visible';
            text.classList.add('animate-bg');
        } else {
            text.style.width = '0';
            text.style.overflow = 'hidden';
        }
    });
});

var myLink = document.getElementById('myLink');

// Mendapatkan teks dari elemen anak pertama
var text = myLink.firstChild.nodeValue.trim();

// Mendapatkan kelas latar belakang (bg) dari elemen
var classes = myLink.classList;
var backgroundClass = null;

// Iterasi melalui setiap kelas untuk menemukan yang dimulai dengan 'bg-'
classes.forEach(function (className) {
    if (className.startsWith('bg-')) {
        backgroundClass = className;
    }
});

// Menampilkan teks dan kelas latar belakang (jika ada)
console.log('Text:', text);
console.log('Background Class:', backgroundClass);


document.addEventListener("DOMContentLoaded", function () {
    // Get all elements with the class 'click-trigger'
    var clickTriggers = document.querySelectorAll('.click-trigger');

    // Add a click event listener to each element
    clickTriggers.forEach(function (trigger) {
      // Initialize a counter for each element
      var clickCount = 0;

      trigger.addEventListener('click', function (event) {
        // Prevent the default behavior of the <a> tag on the first click
        event.preventDefault();

        // Increment the click counter
        clickCount++;

        // Check if it's the first or second click
        if (clickCount === 1) {
          // Perform any other actions you want on the first click
          // For example, show the additional information span
          var infoSpan = trigger.querySelector('.group-click');
          infoSpan.style.width = 'auto';
        } else {
          // On the second click, navigate to the link
          window.location.href = trigger.getAttribute('href');
        }
    });
});
});

// modal gambar
const popupContainer = document.getElementById('popup-container');
const popupImage = document.getElementById('popup-image');

popupImage.addEventListener('click', () => {
  popupContainer.classList.add('hidden');
});
const imageElements = document.querySelectorAll('[data-popup-image]');

for (const imageElement of imageElements) {
  imageElement.addEventListener('click', () => {
    popupImage.src = imageElement.dataset.popupImage;
    popupContainer.classList.remove('hidden');
  });
}

popupContainer.addEventListener('click', () => {
  popupContainer.classList.add('hidden');
});

