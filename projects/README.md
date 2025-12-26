# Academic Project Page Template

This is a template structure for creating multiple academic project subpages that share common CSS and JavaScript assets while maintaining project-specific content (HTML and images).

## Directory Structure

```
project-root/
├── shared/                    # Shared assets (used by all subprojects)
│   ├── css/                   # Shared CSS files
│   │   ├── bulma.min.css
│   │   ├── bulma-carousel.min.css
│   │   ├── bulma-slider.min.css
│   │   ├── fontawesome.all.min.css
│   │   └── index.css          # Main stylesheet
│   └── js/                    # Shared JavaScript files
│       ├── bulma-carousel.min.js
│       ├── bulma-carousel.js
│       ├── bulma-slider.min.js
│       ├── bulma-slider.js
│       ├── fontawesome.all.min.js
│       └── index.js           # Main JavaScript (uses relative paths for images)
│
├── spade/                     # Example subproject (SPADE)
│   ├── images/                # Project-specific images
│   │   ├── carousel1_v1.jpg
│   │   ├── carousel1_v2.jpg
│   │   ├── ...
│   │   └── favicon.ico
│   └── index.html             # Project-specific HTML
│
└── project2/                  # Another subproject (example)
    ├── images/                # Project-specific images
    └── index.html             # Project-specific HTML
```

## How to Create a New Subproject

1. **Create a new folder** for your project (e.g., `my-project/`)
2. **Copy the template HTML**:
   ```bash
   cp spade/index.html my-project/index.html
   ```
3. **Create an images folder**:
   ```bash
   mkdir my-project/images
   ```
4. **Add your project images** to `my-project/images/`

   - Follow the naming convention: `carousel1.jpg`, `carousel1_v1.jpg`, `carousel1_v2.jpg`, etc.
   - Add `favicon.ico` to the images folder
5. **Customize `my-project/index.html`**:
   - Update any text you need
   - The CSS and JS paths (`../shared/css/...` and `../shared/js/...`) should remain unchanged
   - Keep image paths as `images/...`

6. **Test locally**: Open `my-project/index.html` in a browser to verify everything works

7. **file structure example**

   ```
   my-project/
   ├── images/
   │   ├── carousel1_v1.jpg
   │   ├── carousel1_v2.jpg
   │   ├── carousel2.jpg
   │   └── favicon.ico
   └── index.html
   ```

8. s

## Path Structure

### In HTML Files

- **CSS files**: Use `../shared/css/...` (relative path going up one directory)
- **JavaScript files**: Use `../shared/js/...` (relative path going up one directory)
- **Images**: Use `images/...` (relative to the HTML file's directory)
- **Favicon**: Use `images/favicon.ico` (relative to the HTML file's directory)

### In JavaScript Files

- **Images**: Use `images/...` (paths are resolved relative to the HTML document, not the JS file)

## Benefits

1. **Shared Assets**: Update CSS/JS once, changes apply to all subprojects
2. **Independent Projects**: Each subproject has its own images and HTML
3. **Easy Maintenance**: Common styling and functionality in one place
4. **Scalable**: Add as many subprojects as needed without duplicating assets

## Deployment

When deploying, maintain the same directory structure:
- All subproject folders should be siblings at the same level
- The `shared/` folder should be at the root level
- Each subproject's `index.html` should reference `../shared/` correctly

### Example Deployment Structure

For GitHub Pages or similar hosting:
- `https://yourdomain.com/spade/` → serves `spade/index.html`
- `https://yourdomain.com/project2/` → serves `project2/index.html`
- `https://yourdomain.com/shared/css/index.css` → serves shared CSS
- `https://yourdomain.com/spade/images/carousel1.jpg` → serves project images

## Notes

- PDF files (if used) should be placed in project-specific folders (e.g., `spade/pdfs/`)
- Each subproject can have its own `favicon.ico` in its `images/` folder
- The JavaScript automatically handles before/after image pairs (files ending in `_v1.jpg` and `_v2.jpg`) or single images

