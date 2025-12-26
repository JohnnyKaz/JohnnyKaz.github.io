window.HELP_IMPROVE_VIDEOJS = false;

// More Works Dropdown Functionality
function toggleMoreWorks() {
    const dropdown = document.getElementById('moreWorksDropdown');
    const button = document.querySelector('.more-works-btn');
    
    if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
        button.classList.remove('active');
    } else {
        dropdown.classList.add('show');
        button.classList.add('active');
    }
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const container = document.querySelector('.more-works-container');
    const dropdown = document.getElementById('moreWorksDropdown');
    const button = document.querySelector('.more-works-btn');
    
    if (container && !container.contains(event.target)) {
        dropdown.classList.remove('show');
        button.classList.remove('active');
    }
});

// Close dropdown on escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const dropdown = document.getElementById('moreWorksDropdown');
        const button = document.querySelector('.more-works-btn');
        dropdown.classList.remove('show');
        button.classList.remove('active');
    }
});

// Copy BibTeX to clipboard
function copyBibTeX() {
    const bibtexElement = document.getElementById('bibtex-code');
    const button = document.querySelector('.copy-bibtex-btn');
    const copyText = button.querySelector('.copy-text');
    
    if (bibtexElement) {
        navigator.clipboard.writeText(bibtexElement.textContent).then(function() {
            // Success feedback
            button.classList.add('copied');
            copyText.textContent = 'Cop';
            
            setTimeout(function() {
                button.classList.remove('copied');
                copyText.textContent = 'Copy';
            }, 2000);
        }).catch(function(err) {
            console.error('Failed to copy: ', err);
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = bibtexElement.textContent;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            
            button.classList.add('copied');
            copyText.textContent = 'Cop';
            setTimeout(function() {
                button.classList.remove('copied');
                copyText.textContent = 'Copy';
            }, 2000);
        });
    }
}


// Scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/hide scroll to top button
window.addEventListener('scroll', function() {
    const scrollButton = document.querySelector('.scroll-to-top');
    if (window.pageYOffset > 300) {
        scrollButton.classList.add('visible');
    } else {
        scrollButton.classList.remove('visible');
    }
});

// Video carousel autoplay when in view
function setupVideoCarouselAutoplay() {
    const carouselVideos = document.querySelectorAll('.results-carousel video');
    
    if (carouselVideos.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target;
            if (entry.isIntersecting) {
                // Video is in view, play it
                video.play().catch(e => {
                    // Autoplay failed, probably due to browser policy
                    console.log('Autoplay prevented:', e);
                });
            } else {
                // Video is out of view, pause it
                video.pause();
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the video is visible
    });
    
    carouselVideos.forEach(video => {
        observer.observe(video);
    });
}

$(document).ready(function() {
    // Check for click events on the navbar burger icon

    var options = {
		slidesToScroll: 1,
		slidesToShow: 1,
		loop: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 5000,
		navigationSwipe: true,  // Enable swipe but we'll handle conflicts
    }

	// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
	
    bulmaSlider.attach();
    
    // Setup video autoplay for carousel
    setupVideoCarouselAutoplay();
    
    // Initialize carousel images (both single and before/after)
    initializeCarouselImages();
    
    // Handle window resize for responsive carousel
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            // Reinitialize carousel images with new dimensions
            initializeCarouselImages();
        }, 250); // Debounce resize events
    });

})

// Initialize carousel images - detect single vs before/after
function initializeCarouselImages() {
    const containers = document.querySelectorAll('.carousel-image-container');
    
    containers.forEach(container => {
        const imageBase = container.getAttribute('data-image-base');
        const singleImagePath = `images/${imageBase}.jpg`;
        const beforeImagePath = `images/${imageBase}_v1.jpg`;
        const afterImagePath = `images/${imageBase}_v2.jpg`;
        
        // Try to load before/after images first
        checkImageExists(beforeImagePath)
            .then(beforeExists => {
                if (beforeExists) {
                    return checkImageExists(afterImagePath);
                } else {
                    return false;
                }
            })
            .then(afterExists => {
                if (afterExists) {
                    // Both v1 and v2 exist, create before/after slider
                    createBeforeAfterSlider(container, imageBase);
                } else {
                    // Try single image
                    return checkImageExists(singleImagePath);
                }
            })
            .then(singleExists => {
                if (singleExists === true) {
                    // Single image exists
                    createSingleImage(container, imageBase);
                } else if (singleExists === false) {
                    // No images found, show placeholder
                    createPlaceholder(container, imageBase);
                }
            })
            .catch(error => {
                console.warn(`Error loading images for ${imageBase}:`, error);
                createPlaceholder(container, imageBase);
            });
    });
}

// Check if an image exists
function checkImageExists(imagePath) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = imagePath;
    });
}

// Create single image display
function createSingleImage(container, imageBase) {
    container.innerHTML = `
        <img src="images/${imageBase}.jpg" 
             alt="${imageBase} result" 
             class="carousel-single-image" 
             loading="lazy"/>
    `;
    
    // Set responsive aspect ratio for single images too
    const img = container.querySelector('.carousel-single-image');
    img.onload = () => {
        const aspectRatio = img.naturalWidth / img.naturalHeight;
        const isMobile = window.innerWidth <= 768;
        const maxAspectRatio = isMobile ? 2 : 3;
        const minAspectRatio = isMobile ? 0.8 : 0.5;
        const constrainedRatio = Math.min(Math.max(aspectRatio, minAspectRatio), maxAspectRatio);
        container.style.aspectRatio = constrainedRatio;
    };
}

// Create before/after slider
function createBeforeAfterSlider(container, imageBase) {
    container.innerHTML = `
        <div class="before-after-slider" data-slider="${imageBase}">
            <div class="before-after-container">
                <img src="images/${imageBase}_v1.jpg" 
                     alt="${imageBase} - original" 
                     class="before-image" 
                     loading="lazy"/>
                <img src="images/${imageBase}_v2.jpg" 
                     alt="${imageBase} - annotated" 
                     class="after-image" 
                     loading="lazy"/>
                <div class="slider-handle">
                    <div class="slider-line"></div>
                    <div class="slider-button">
                        <i class="fas fa-arrows-alt-h"></i>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Initialize the slider functionality for this specific slider
    const slider = container.querySelector('.before-after-slider');
    initializeSingleBeforeAfterSlider(slider);
}

// Create placeholder for missing images
function createPlaceholder(container, imageBase) {
    container.innerHTML = `
        <div style="
            width: 100%; 
            aspect-ratio: 16/9; 
            background: var(--background-accent); 
            border: 2px dashed var(--border-color); 
            border-radius: var(--border-radius); 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            color: var(--text-secondary);
            font-style: italic;
        ">
            Missing: ${imageBase}.jpg or ${imageBase}_v1.jpg + ${imageBase}_v2.jpg
        </div>
    `;
}

// Before/After Slider functionality for a single slider
function initializeSingleBeforeAfterSlider(slider) {
    const container = slider.querySelector('.before-after-container');
    const beforeImage = slider.querySelector('.before-image');
    const afterImage = slider.querySelector('.after-image');
    const handle = slider.querySelector('.slider-handle');
    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let hasMoved = false;
    
    // Set container height based on the first loaded image
    function setContainerHeight() {
        if (beforeImage.complete && beforeImage.naturalHeight > 0) {
            const aspectRatio = beforeImage.naturalWidth / beforeImage.naturalHeight;
            // Constrain aspect ratio for mobile devices
            const isMobile = window.innerWidth <= 768;
            const maxAspectRatio = isMobile ? 2 : 3; // Prevent extremely wide images on mobile
            const minAspectRatio = isMobile ? 0.8 : 0.5; // Prevent extremely tall images
            const constrainedRatio = Math.min(Math.max(aspectRatio, minAspectRatio), maxAspectRatio);
            container.style.aspectRatio = constrainedRatio;
        } else {
            beforeImage.onload = () => {
                const aspectRatio = beforeImage.naturalWidth / beforeImage.naturalHeight;
                const isMobile = window.innerWidth <= 768;
                const maxAspectRatio = isMobile ? 2 : 3;
                const minAspectRatio = isMobile ? 0.8 : 0.5;
                const constrainedRatio = Math.min(Math.max(aspectRatio, minAspectRatio), maxAspectRatio);
                container.style.aspectRatio = constrainedRatio;
            };
        }
    }
    
    setContainerHeight();
    
    // Set initial clip path to show 50% of before image
    beforeImage.style.clipPath = 'inset(0 50% 0 0)';
    
    function updateSlider(x) {
        const rect = container.getBoundingClientRect();
        const percentage = Math.max(0, Math.min(100, ((x - rect.left) / rect.width) * 100));
        
        // Update clip path for before image
        beforeImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
        
        // Update handle position - ensure perfect alignment
        handle.style.left = `${percentage}%`;
        handle.style.transform = 'translateX(-50%)'; // Ensure centering is maintained
    }
    
    function startDrag(e) {
        // Store initial position
        const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
        
        startX = clientX;
        startY = clientY;
        hasMoved = false;
        isDragging = true;
        
        // Prevent default to stop carousel interference
        e.preventDefault();
        e.stopPropagation();
        
        container.style.cursor = 'col-resize';
        document.body.style.userSelect = 'none';
        
        // For touch events, add additional class to override carousel
        if (e.type.includes('touch')) {
            slider.classList.add('slider-active');
        }
        
        // Start updating immediately
        updateSlider(clientX);
    }
    
    function drag(e) {
        if (!isDragging) return;
        
        const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
        
        // Calculate movement distance
        const deltaX = Math.abs(clientX - startX);
        const deltaY = Math.abs(clientY - startY);
        
        // If horizontal movement is greater than vertical, treat as slider drag
        if (deltaX > 5 || hasMoved) {
            hasMoved = true;
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            
            // Update slider position immediately
            updateSlider(clientX);
        }
    }
    
    function stopDrag(e) {
        if (isDragging) {
            if (hasMoved) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
            }
            
            // Remove active class
            slider.classList.remove('slider-active');
        }
        
        isDragging = false;
        hasMoved = false;
        container.style.cursor = '';
        document.body.style.userSelect = '';
    }
    
    // Mouse events - only on container for consistent behavior
    container.addEventListener('mousedown', startDrag);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDrag);
    
    // Touch events for mobile with improved handling
    // Use capture phase to intercept events before carousel sees them
    container.addEventListener('touchstart', startDrag, { passive: false, capture: true });
    container.addEventListener('touchmove', drag, { passive: false, capture: true });
    container.addEventListener('touchend', stopDrag, { passive: false, capture: true });
    container.addEventListener('touchcancel', stopDrag, { passive: false, capture: true });
    
    // Prevent the carousel from interfering with slider touches
    slider.addEventListener('touchstart', function(e) {
        // Mark this element as the slider to prevent carousel swipe
        e.stopPropagation();
    }, { passive: true, capture: false });
    
    slider.addEventListener('touchmove', function(e) {
        // If we're dragging the slider, prevent carousel from responding
        if (isDragging && hasMoved) {
            e.stopPropagation();
        }
    }, { passive: true, capture: false });
    
    // Prevent image dragging
    beforeImage.addEventListener('dragstart', e => e.preventDefault());
    afterImage.addEventListener('dragstart', e => e.preventDefault());
    
    // Add a visual indicator on touch for mobile users
    container.addEventListener('touchstart', function(e) {
        container.style.opacity = '0.9';
    }, { passive: true });
    
    container.addEventListener('touchend', function(e) {
        setTimeout(() => {
            container.style.opacity = '1';
        }, 100);
    }, { passive: true });
}
