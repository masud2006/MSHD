/* ============================================================
   script.js — MS Home Decor Premium E-Commerce
   All JavaScript functionality
   ============================================================ */

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // ============================================================
    // PRODUCT DATA
    // ============================================================
    const products = [{
        id: 1,
        name: 'Black Ganesha',
        category: 'Table Décor',
        collection: 'Classic',
        price: 11000,
        oldPrice: 15000,
        rating: 4.8,
        reviews: 24,
        image: 'black ganesha.png',
        badge: 'New',
        description: 'A handcrafted ceramic vase with a sculptural silhouette, perfect for modern interiors.'
    }, {
        id: 2,
        name: 'Black Horse',
        category: 'Table Décor',
        collection: 'Minimal',
        price: 10000,
        oldPrice: 15000,
        rating: 4.5,
        reviews: 18,
        image: 'black horse.png',
        badge: 'Sale',
        description: 'A sleek, geometric tray in matte finish, ideal for organizing and displaying small objects.'
    }, {
        id: 3,
        name: 'Blue Giraffe',
        category: 'Table Décor',
        collection: 'Modern',
        price: 13000,
        oldPrice: null,
        rating: 4.9,
        reviews: 32,
        image: 'blue zeraf.png',
        badge: 'Best Seller',
        description: 'An abstract sculpture that adds a touch of sophistication to any sideboard or shelf.'
    }, {
        id: 4,
        name: 'Brown Horse',
        category: 'Living Room',
        collection: 'Classic',
        price: 1750,
        oldPrice: 1900,
        rating: 4.3,
        reviews: 15,
        image: 'brown horse.png',
        badge: null,
        description: 'A timeless terracotta pot with a warm, earthy glaze, perfect for plants or as a standalone piece.'
    }, {
        id: 5,
        name: 'Brown Vase with Golden Leaf',
        category: 'Table Décor',
        collection: 'Minimal',
        price: 1250,
        oldPrice: null,
        rating: 4.6,
        reviews: 27,
        image: 'brown vase with golden leaf.png',
        badge: 'New',
        description: 'A set of two geometric candle holders in brass and matte black, creating a striking centerpiece.'
    }, {
        id: 6,
        name: 'Crystal Lamp',
        category: 'Table Décor',
        collection: 'Luxury',
        price: 3450,
        oldPrice: 4000,
        rating: 4.7,
        reviews: 21,
        image: 'crystal lamp.png',
        badge: 'Sale',
        description: 'An exquisite marble and brass ornament that brings a sense of opulence to any tabletop.'
    }, {
        id: 7,
        name: 'Golden Buddha',
        category: 'Wall Décor',
        collection: 'Modern',
        price: 2800,
        oldPrice: null,
        rating: 4.4,
        reviews: 19,
        image: 'golden buddha.png',
        badge: null,
        description: 'A contemporary wall sculpture with a brushed metal finish, adding depth and texture to your walls.'
    }, {
        id: 8,
        name: 'Golden Deer',
        category: 'Living Room',
        collection: 'Classic',
        price: 2200,
        oldPrice: 2500,
        rating: 4.5,
        reviews: 26,
        image: 'golden deer.png',
        badge: 'Best Seller',
        description: 'A hand-painted ceramic bowl with subtle gold accents, perfect for displaying fruit or as a standalone piece.'
    }, {
        id: 9,
        name: 'Golden Frame Wall Clock',
        category: 'Bedroom',
        collection: 'Minimal',
        price: 1900,
        oldPrice: null,
        rating: 4.2,
        reviews: 14,
        image: 'Golden frame wall clock.png',
        badge: 'New',
        description: 'A pair of abstract stone sculptures that bring a calming presence to your bedside.'
    }, {
        id: 10,
        name: 'Golden Ganesha',
        category: 'Dining',
        collection: 'Luxury',
        price: 3200,
        oldPrice: 3700,
        rating: 4.8,
        reviews: 33,
        image: 'golden ganesha.png',
        badge: 'Sale',
        description: 'A tall, elegant glass vase with a subtle amber tint, ideal for fresh flowers or as a statement piece.'
    }, {
        id: 11,
        name: 'Golden Lamp',
        category: 'Office',
        collection: 'Modern',
        price: 1500,
        oldPrice: null,
        rating: 4.1,
        reviews: 11,
        image: 'golden lamp.png',
        badge: null,
        description: 'A minimalist desk organizer in powder-coated steel, keeping your workspace tidy and stylish.'
    }, {
        id: 12,
        name: 'Golden Leaf',
        category: 'Wall Décor',
        collection: 'Classic',
        price: 4100,
        oldPrice: null,
        rating: 4.9,
        reviews: 42,
        image: 'golden leaf.png',
        badge: 'Best Seller',
        description: 'A decorative wall mirror with an integrated shelf, perfect for entryways or living rooms.'
    }, {
        id: 13,
        name: 'Golden Metal Lamp',
        category: 'Living Room',
        collection: 'Natural',
        price: 950,
        oldPrice: null,
        rating: 4.0,
        reviews: 9,
        image: 'golden metal lamp.png',
        badge: 'New',
        description: 'A handwoven basket made from sustainable seagrass, perfect for storing throws or magazines.'
    }, {
        id: 14,
        name: 'Aesthetic Lamp',
        category: 'Table Décor',
        collection: 'Seasonal',
        price: 2200,
        oldPrice: 2600,
        rating: 4.6,
        reviews: 17,
        image: 'Aesthetic Lamp.png',
        badge: 'Sale',
        description: 'A curated set of three decorative objects in warm autumn tones, perfect for seasonal styling.'
    }, {
        id: 15,
        name: 'Metal Lamp With Golden Base',
        category: 'Living Room',
        collection: 'Modern',
        price: 5500,
        oldPrice: null,
        rating: 4.7,
        reviews: 28,
        image: 'metal lamp with golden base.png',
        badge: 'Best Seller',
        description: 'A large-scale abstract sculpture that commands attention in any corner of your home.'
    }, {
        id: 16,
        name: 'Red Ganesha',
        category: 'Office',
        collection: 'Luxury',
        price: 1850,
        oldPrice: 2100,
        rating: 4.3,
        reviews: 13,
        image: 'red ganesha.png',
        badge: null,
        description: 'A premium marble and brass desk clock, a timeless addition to any workspace.'
    }];

    // Collections
    const collectionsList = [
        { name: 'Classic', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&q=80' },
        { name: 'Minimal', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80' },
        { name: 'Modern', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80' },
        { name: 'Luxury', image: 'https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?w=400&q=80' },
        { name: 'Natural', image: 'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?w=400&q=80' },
        { name: 'Seasonal', image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=400&q=80' }
    ];

    // Reviews
    const reviews = [{
        id: 1,
        name: 'Aminul',
        rating: 5,
        text: 'The vase completely changed the look of my living room. The quality is even better than I expected.'
    }, {
        id: 2,
        name: 'Rahat',
        rating: 4,
        text: 'Beautiful pieces that add a touch of elegance. The shipping was fast and packaging was excellent.'
    }, {
        id: 3,
        name: 'Nowrin',
        rating: 5,
        text: 'I love my new table sculpture! It\'s the perfect focal point for my coffee table.'
    }, {
        id: 4,
        name: 'Asha',
        rating: 5,
        text: 'MS Home Decor has the best curated selection. Every piece feels special and well-made.'
    }];

    // Gallery images
    const galleryImages = [
        'brown vase with golden leaf.png',
        'golden metal lamp.png',
        'metal lamp with golden base.png',
        'crystal lamp.png',
        'golden frame wall clock.png',
        'golden ganesha.png',
        'soil vase.png',
        'golden buddha.png',
    ];


    // Look products
    const lookProducts = [
        { id: 1, name: 'Aesthetic Lamp', price: 2200,
            image: 'Aesthetic Lamp.png' },
        { id: 2, name: 'Golden Frame Wall Clock', price: 1900,
            image: 'Golden Frame Wall Clock.png' },
        { id: 5, name: 'Golden Buddha', price: 2800,
            image: 'Golden Buddha.png' },
        { id: 3, name: 'Golden Deer', price: 2200,
            image: 'Golden Deer.png' }
    ];

    // ============================================================
    // STATE
    // ============================================================
    let cart = JSON.parse(localStorage.getItem('ms_cart')) || [];
    let wishlist = JSON.parse(localStorage.getItem('ms_wishlist')) || [];
    let currentProductFilter = 'all';
    let currentSort = 'featured';
    let searchQuery = '';

    // ============================================================
    // DOM REFERENCES
    // ============================================================
    const header = document.getElementById('siteHeader');
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburgerToggle = document.getElementById('hamburgerToggle');
    const mobileMenuClose = document.getElementById('mobileMenuClose');
    const searchToggle = document.getElementById('searchToggle');
    const bottomSearchToggle = document.getElementById('bottomSearchToggle');
    const searchOverlay = document.getElementById('searchOverlay');
    const searchOverlayClose = document.getElementById('searchOverlayClose');
    const searchInput = document.getElementById('searchInput');
    const searchClear = document.getElementById('searchClear');
    const searchResults = document.getElementById('searchResults');
    const searchEmpty = document.getElementById('searchEmpty');
    const cartToggle = document.getElementById('cartToggle');
    const bottomCartToggle = document.getElementById('bottomCartToggle');
    const cartDrawer = document.getElementById('cartDrawer');
    const cartDrawerClose = document.getElementById('cartDrawerClose');
    const cartDrawerBody = document.getElementById('cartDrawerBody');
    const cartDrawerFooter = document.getElementById('cartDrawerFooter');
    const wishlistToggle = document.getElementById('wishlistToggle');
    const bottomWishlistToggle = document.getElementById('bottomWishlistToggle');
    const wishlistDrawer = document.getElementById('wishlistDrawer');
    const wishlistDrawerClose = document.getElementById('wishlistDrawerClose');
    const wishlistDrawerBody = document.getElementById('wishlistDrawerBody');
    const cartCount = document.getElementById('cartCount');
    const wishlistCount = document.getElementById('wishlistCount');
    const accountToggle = document.getElementById('accountToggle');
    const accountModal = document.getElementById('accountModal');
    const accountModalClose = document.getElementById('accountModalClose');
    const quickViewModal = document.getElementById('quickViewModal');
    const quickViewClose = document.getElementById('quickViewClose');
    const quickViewBody = document.getElementById('quickViewBody');
    const journalModal = document.getElementById('journalModal');
    const journalModalClose = document.getElementById('journalModalClose');
    const journalModalBody = document.getElementById('journalModalBody');
    const checkoutModal = document.getElementById('checkoutModal');
    const checkoutModalClose = document.getElementById('checkoutModalClose');
    const checkoutModalContinue = document.getElementById('checkoutModalContinue');
    const newsletterForm = document.getElementById('newsletterForm');
    const newsletterMessage = document.getElementById('newsletterMessage');
    const contactForm = document.getElementById('contactForm');
    const contactMessageStatus = document.getElementById('contactMessageStatus');

    // Grids
    const newArrivalsGrid = document.getElementById('newArrivalsGrid');
    const bestSellersGrid = document.getElementById('bestSellersGrid');
    const collectionsGrid = document.getElementById('collectionsGrid');
    const reviewsGrid = document.getElementById('reviewsGrid');
    const galleryGrid = document.getElementById('galleryGrid');
    const journalGrid = document.getElementById('journalGrid');
    const lookHotspots = document.getElementById('lookHotspots');
    const lookProductsContainer = document.getElementById('lookProducts');
    const shopAllGrid = document.getElementById('shopAllGrid');
    const shopAllResults = document.getElementById('shopAllResults');
    const allProductsOverlay = document.getElementById('allProductsOverlay');
    const allProductsGrid = document.getElementById('allProductsGrid');
    const allProductsFilters = document.getElementById('allProductsFilters');
    const allProductsResults = document.getElementById('allProductsResults');
    const closeAllProducts = document.getElementById('closeAllProducts');
    const showAllProductsBtn = document.getElementById('showAllProductsBtn');

    // ============================================================
    // HELPER FUNCTIONS
    // ============================================================
    function formatPrice(amount) {
        return '৳' + amount.toLocaleString('en-BD');
    }

    function getProductById(id) {
        return products.find(p => p.id === id);
    }

    function getCartTotal() {
        return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }

    function getCartItemCount() {
        return cart.reduce((sum, item) => sum + item.quantity, 0);
    }

    function saveCart() {
        localStorage.setItem('ms_cart', JSON.stringify(cart));
        updateCartUI();
    }

    function saveWishlist() {
        localStorage.setItem('ms_wishlist', JSON.stringify(wishlist));
        updateWishlistUI();
    }

    function updateCartUI() {
        const count = getCartItemCount();
        cartCount.textContent = count;
        renderCartDrawer();
    }

    function updateWishlistUI() {
        wishlistCount.textContent = wishlist.length;
        renderWishlistDrawer();
    }

    // ============================================================
    // RENDER FUNCTIONS
    // ============================================================
    function renderProductCard(product, options = {}) {
        const { showWishlist = true, showQuickView = true, showAddToCart = true } = options;
        const isInWishlist = wishlist.includes(product.id);
        const badge = product.badge ? `<span class="product-badge">${product.badge}</span>` : '';
        const oldPrice = product.oldPrice ? `<span class="old">${formatPrice(product.oldPrice)}</span>` : '';
        const ratingStars = '★'.repeat(Math.floor(product.rating)) + (product.rating % 1 >= 0.5 ? '★' : '');
        const ratingDisplay = product.rating ?
            `<div class="product-rating"><span>${ratingStars}</span> <span>(${product.reviews})</span></div>` :
            '';

        return `
            <div class="product-card" data-id="${product.id}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy" />
                    ${badge}
                    ${showWishlist ? `<button class="product-wishlist ${isInWishlist ? 'active' : ''}" data-id="${product.id}" aria-label="Wishlist"><i class="fas fa-heart"></i></button>` : ''}
                </div>
                <div class="product-info">
                    <div class="product-category">${product.category}</div>
                    <div class="product-name">${product.name}</div>
                    <div class="product-price">
                        <span class="current">${formatPrice(product.price)}</span>
                        ${oldPrice}
                    </div>
                    ${ratingDisplay}
                    <div class="product-actions">
                        ${showAddToCart ? `<button class="btn-add-cart" data-id="${product.id}">Add to Cart</button>` : ''}
                        ${showQuickView ? `<button class="btn-quick-view" data-id="${product.id}">Quick View</button>` : ''}
                    </div>
                </div>
            </div>
        `;
    }

    function renderProducts(container, productList, options = {}) {
        if (!container) return;
        if (!productList || productList.length === 0) {
            container.innerHTML = '<p style="text-align:center;padding:2rem;color:var(--text-muted);">No products found.</p>';
            return;
        }
        container.innerHTML = productList.map(p => renderProductCard(p, options)).join('');
    }

    function renderCollections() {
        if (!collectionsGrid) return;
        collectionsGrid.innerHTML = collectionsList.map(col => `
            <div class="collection-card">
                <img src="${col.image}" alt="${col.name}" loading="lazy" />
                <h4>${col.name}</h4>
            </div>
        `).join('');
    }

    function renderReviews() {
        if (!reviewsGrid) return;
        reviewsGrid.innerHTML = reviews.map(r => `
            <div class="review-card">
                <div class="review-stars">${'★'.repeat(r.rating)}</div>
                <p class="review-text">"${r.text}"</p>
                <div class="review-author">— ${r.name}</div>
            </div>
        `).join('');
    }

    function renderGallery() {
        if (!galleryGrid) return;
        galleryGrid.innerHTML = galleryImages.map(url => `
            <img src="${url}" alt="MS Home Decor interior" loading="lazy" />
        `).join('');
    }

    function renderJournal() {
        if (!journalGrid) return;
        journalGrid.innerHTML = journalArticles.map(article => `
            <div class="journal-card" data-id="${article.id}">
                <img src="${article.image}" alt="${article.title}" loading="lazy" />
                <div class="journal-body">
                    <div class="journal-meta">
                        <span>${article.category}</span>
                        <span>${article.date}</span>
                    </div>
                    <div class="journal-title">${article.title}</div>
                    <div class="journal-excerpt">${article.excerpt}</div>
                    <button class="btn-text read-more" data-id="${article.id}">Read More <i class="fas fa-arrow-right"></i></button>
                </div>
            </div>
        `).join('');

        document.querySelectorAll('.read-more').forEach(btn => {
            btn.addEventListener('click', function() {
                const id = parseInt(this.dataset.id);
                openJournalModal(id);
            });
        });
    }

    function renderLook() {
        if (lookHotspots) {
            const hotspotData = [
                { x: 25, y: 40, productId: 1 },
                { x: 55, y: 55, productId: 2 },
                { x: 70, y: 30, productId: 5 },
                { x: 40, y: 70, productId: 3 }
            ];
            lookHotspots.innerHTML = hotspotData.map(h => {
                const product = getProductById(h.productId);
                return `
                    <div class="hotspot" style="left:${h.x}%;top:${h.y}%;" data-id="${product.id}">
                        <span>+</span>
                        <div class="hotspot-tooltip">${product.name} – ${formatPrice(product.price)}</div>
                    </div>
                `;
            }).join('');

            document.querySelectorAll('.hotspot').forEach(hs => {
                hs.addEventListener('click', function() {
                    const id = parseInt(this.dataset.id);
                    openQuickView(id);
                });
            });
        }

        if (lookProductsContainer) {
            lookProductsContainer.innerHTML = `
                <h3>Shop the Look</h3>
                ${lookProducts.map(p => `
                    <div class="look-product-item" data-id="${p.id}">
                        <img src="${p.image}" alt="${p.name}" />
                        <div class="info">
                            <div class="name">${p.name}</div>
                            <div class="price">${formatPrice(p.price)}</div>
                        </div>
                        <button class="add-btn" data-id="${p.id}">Add</button>
                    </div>
                `).join('')}
            `;
            document.querySelectorAll('.look-product-item .add-btn').forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const id = parseInt(this.dataset.id);
                    addToCart(id);
                });
            });
        }
    }

    // ============================================================
    // SHOP ALL (Home) — shows 8 products + "Show All" button
    // ============================================================
    function getFilteredAndSortedProducts() {
        let result = [...products];
        if (currentProductFilter !== 'all') {
            result = result.filter(p =>
                p.category === currentProductFilter ||
                p.collection === currentProductFilter
            );
        }
        switch (currentSort) {
            case 'newest':
                result.sort((a, b) => a.id - b.id);
                break;
            case 'price-low':
                result.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                result.sort((a, b) => b.price - a.price);
                break;
            case 'best-selling':
                result.sort((a, b) => (b.rating * b.reviews) - (a.rating * a.reviews));
                break;
            default:
                result.sort((a, b) => (b.badge === 'Best Seller' ? 1 : 0) - (a.badge === 'Best Seller' ? 1 : 0));
                break;
        }
        return result;
    }

    function renderShopAll() {
        if (!shopAllGrid) return;
        const allProducts = getFilteredAndSortedProducts();
        const first8 = allProducts.slice(0, 8);
        renderProducts(shopAllGrid, first8, { showWishlist: true, showQuickView: true, showAddToCart: true });
        if (shopAllResults) {
            shopAllResults.textContent = `Showing ${first8.length} of ${products.length} products`;
        }
    }

    // ============================================================
    // ALL PRODUCTS PAGE (Overlay) with filters
    // ============================================================
    function getAllProductsFilteredAndSorted() {
        let result = [...products];
        if (currentProductFilter !== 'all') {
            result = result.filter(p =>
                p.category === currentProductFilter ||
                p.collection === currentProductFilter
            );
        }
        switch (currentSort) {
            case 'newest':
                result.sort((a, b) => a.id - b.id);
                break;
            case 'price-low':
                result.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                result.sort((a, b) => b.price - a.price);
                break;
            case 'best-selling':
                result.sort((a, b) => (b.rating * b.reviews) - (a.rating * a.reviews));
                break;
            default:
                result.sort((a, b) => (b.badge === 'Best Seller' ? 1 : 0) - (a.badge === 'Best Seller' ? 1 : 0));
                break;
        }
        return result;
    }

    function renderAllProductsPage() {
        if (!allProductsGrid) return;
        const filtered = getAllProductsFilteredAndSorted();
        renderProducts(allProductsGrid, filtered, { showWishlist: true, showQuickView: true, showAddToCart: true });
        if (allProductsResults) {
            allProductsResults.textContent = `Showing ${filtered.length} of ${products.length} products`;
        }
    }

    function renderAllProductsFilters() {
        if (!allProductsFilters) return;
        const allFilters = ['all', ...new Set(products.map(p => p.category)), ...new Set(products.map(p => p
            .collection))];
        const uniqueFilters = [...new Set(allFilters)];

        allProductsFilters.innerHTML = `
            <div class="filter-group">
                ${uniqueFilters.map(f => `
                    <button class="filter-btn ${f === 'all' ? 'active' : ''}" data-filter="${f}">${f.charAt(0).toUpperCase() + f.slice(1)}</button>
                `).join('')}
            </div>
            <div class="sort-wrapper">
                <label for="allSortSelect">Sort by</label>
                <select class="sort-select" id="allSortSelect">
                    <option value="featured">Featured</option>
                    <option value="newest">Newest</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="best-selling">Best Selling</option>
                </select>
            </div>
        `;

        allProductsFilters.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const filter = this.dataset.filter;
                currentProductFilter = filter;
                renderAllProductsPage();
                allProductsFilters.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
            });
        });

        const sortSelect = document.getElementById('allSortSelect');
        if (sortSelect) {
            sortSelect.addEventListener('change', function() {
                currentSort = this.value;
                renderAllProductsPage();
            });
        }
    }

    function openAllProducts(filterCategory) {
        if (filterCategory && filterCategory !== 'all') {
            currentProductFilter = filterCategory;
        } else {
            currentProductFilter = 'all';
        }
        currentSort = 'featured';
        renderAllProductsFilters();
        renderAllProductsPage();
        allProductsOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';

        if (filterCategory && filterCategory !== 'all') {
            const btns = allProductsFilters.querySelectorAll('.filter-btn');
            btns.forEach(b => {
                b.classList.toggle('active', b.dataset.filter === filterCategory);
            });
        }
    }

    function closeAllProductsOverlay() {
        allProductsOverlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    // ============================================================
    // CART SYSTEM
    // ============================================================
    function addToCart(productId, quantity = 1) {
        const product = getProductById(productId);
        if (!product) return;
        const existing = cart.find(item => item.id === productId);
        if (existing) {
            existing.quantity += quantity;
        } else {
            cart.push({ id: productId, name: product.name, price: product.price, image: product.image,
                quantity: quantity });
        }
        saveCart();
        showToast(`${product.name} added to cart`);
    }

    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        saveCart();
    }

    function updateCartQuantity(productId, delta) {
        const item = cart.find(i => i.id === productId);
        if (!item) return;
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
        }
    }

    function clearCart() {
        cart = [];
        saveCart();
    }

    function renderCartDrawer() {
        if (!cartDrawerBody) return;
        if (cart.length === 0) {
            cartDrawerBody.innerHTML = `<p style="text-align:center;padding:2rem 0;color:var(--text-muted);">Your cart is empty.</p>`;
            if (cartDrawerFooter) cartDrawerFooter.innerHTML = '';
            return;
        }
        cartDrawerBody.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" />
                <div class="item-info">
                    <div class="item-name">${item.name}</div>
                    <div class="item-price">${formatPrice(item.price)}</div>
                    <div class="item-qty">
                        <button class="qty-decrease" data-id="${item.id}">−</button>
                        <span>${item.quantity}</span>
                        <button class="qty-increase" data-id="${item.id}">+</button>
                    </div>
                </div>
                <button class="item-remove" data-id="${item.id}" aria-label="Remove"><i class="fas fa-times"></i></button>
            </div>
        `).join('');

        cartDrawerBody.querySelectorAll('.qty-decrease').forEach(btn => {
            btn.addEventListener('click', function() {
                const id = parseInt(this.dataset.id);
                updateCartQuantity(id, -1);
            });
        });
        cartDrawerBody.querySelectorAll('.qty-increase').forEach(btn => {
            btn.addEventListener('click', function() {
                const id = parseInt(this.dataset.id);
                updateCartQuantity(id, 1);
            });
        });
        cartDrawerBody.querySelectorAll('.item-remove').forEach(btn => {
            btn.addEventListener('click', function() {
                const id = parseInt(this.dataset.id);
                removeFromCart(id);
            });
        });

        if (cartDrawerFooter) {
            const total = getCartTotal();
            cartDrawerFooter.innerHTML = `
                <div class="cart-total">
                    <span>Subtotal</span>
                    <span>${formatPrice(total)}</span>
                </div>
                <button class="btn btn-primary btn-checkout" id="checkoutBtn">Proceed to Checkout</button>
            `;
            document.getElementById('checkoutBtn')?.addEventListener('click', function() {
                openCheckoutModal();
            });
        }
    }

    function openCartDrawer() {
        renderCartDrawer();
        cartDrawer.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeCartDrawer() {
        cartDrawer.classList.remove('open');
        document.body.style.overflow = '';
    }

    // ============================================================
    // WISHLIST SYSTEM
    // ============================================================
    function toggleWishlist(productId) {
        const index = wishlist.indexOf(productId);
        if (index > -1) {
            wishlist.splice(index, 1);
        } else {
            wishlist.push(productId);
        }
        saveWishlist();
        document.querySelectorAll(`.product-wishlist[data-id="${productId}"]`).forEach(btn => {
            btn.classList.toggle('active');
        });
        renderWishlistDrawer();
    }

    function renderWishlistDrawer() {
        if (!wishlistDrawerBody) return;
        if (wishlist.length === 0) {
            wishlistDrawerBody.innerHTML =
                `<p style="text-align:center;padding:2rem 0;color:var(--text-muted);">Your wishlist is empty.</p>`;
            return;
        }
        const items = wishlist.map(id => getProductById(id)).filter(Boolean);
        wishlistDrawerBody.innerHTML = items.map(p => `
            <div class="wishlist-item">
                <img src="${p.image}" alt="${p.name}" />
                <div class="item-info">
                    <div class="item-name">${p.name}</div>
                    <div class="item-price">${formatPrice(p.price)}</div>
                </div>
                <button class="item-remove" data-id="${p.id}" aria-label="Remove from wishlist"><i class="fas fa-times"></i></button>
            </div>
        `).join('');

        wishlistDrawerBody.querySelectorAll('.item-remove').forEach(btn => {
            btn.addEventListener('click', function() {
                const id = parseInt(this.dataset.id);
                toggleWishlist(id);
            });
        });
    }

    function openWishlistDrawer() {
        renderWishlistDrawer();
        wishlistDrawer.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeWishlistDrawer() {
        wishlistDrawer.classList.remove('open');
        document.body.style.overflow = '';
    }

    // ============================================================
    // QUICK VIEW MODAL
    // ============================================================
    function openQuickView(productId) {
        const product = getProductById(productId);
        if (!product) return;
        const isInWishlist = wishlist.includes(product.id);
        quickViewBody.innerHTML = `
            <div class="qv-image">
                <img src="${product.image}" alt="${product.name}" />
            </div>
            <div class="qv-details">
                <div class="qv-category">${product.category}</div>
                <div class="qv-name">${product.name}</div>
                <div class="qv-price">${formatPrice(product.price)} ${product.oldPrice ? `<span style="text-decoration:line-through;color:var(--text-muted);font-size:1rem;">${formatPrice(product.oldPrice)}</span>` : ''}</div>
                <div class="qv-rating">${'★'.repeat(Math.floor(product.rating))} (${product.reviews} reviews)</div>
                <div class="qv-desc">${product.description}</div>
                <div class="qv-quantity">
                    <button class="qv-qty-decr">−</button>
                    <input type="number" id="qvQty" value="1" min="1" max="10" />
                    <button class="qv-qty-incr">+</button>
                </div>
                <div class="qv-actions">
                    <button class="btn btn-primary qv-add-cart" data-id="${product.id}">Add to Cart</button>
                    <button class="btn btn-outline qv-wishlist ${isInWishlist ? 'active' : ''}" data-id="${product.id}"><i class="fas fa-heart"></i> ${isInWishlist ? 'Wishlisted' : 'Wishlist'}</button>
                </div>
            </div>
        `;

        const qtyInput = document.getElementById('qvQty');
        document.querySelector('.qv-qty-decr').addEventListener('click', function() {
            let val = parseInt(qtyInput.value) || 1;
            if (val > 1) qtyInput.value = val - 1;
        });
        document.querySelector('.qv-qty-incr').addEventListener('click', function() {
            let val = parseInt(qtyInput.value) || 1;
            qtyInput.value = val + 1;
        });
        qtyInput.addEventListener('change', function() {
            let val = parseInt(this.value) || 1;
            if (val < 1) this.value = 1;
        });

        document.querySelector('.qv-add-cart').addEventListener('click', function() {
            const id = parseInt(this.dataset.id);
            const qty = parseInt(document.getElementById('qvQty').value) || 1;
            addToCart(id, qty);
            closeQuickView();
        });

        document.querySelector('.qv-wishlist').addEventListener('click', function() {
            const id = parseInt(this.dataset.id);
            toggleWishlist(id);
            this.classList.toggle('active');
            this.innerHTML =
                `<i class="fas fa-heart"></i> ${this.classList.contains('active') ? 'Wishlisted' : 'Wishlist'}`;
        });

        quickViewModal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeQuickView() {
        quickViewModal.classList.remove('open');
        document.body.style.overflow = '';
    }

    // ============================================================
    // SEARCH
    // ============================================================
    function performSearch(query) {
        searchQuery = query.trim().toLowerCase();
        if (!searchQuery) {
            searchResults.innerHTML = '';
            searchEmpty.style.display = 'block';
            return;
        }
        const results = products.filter(p =>
            p.name.toLowerCase().includes(searchQuery) ||
            p.category.toLowerCase().includes(searchQuery) ||
            p.collection.toLowerCase().includes(searchQuery)
        );
        if (results.length === 0) {
            searchResults.innerHTML =
                `<p style="color:rgba(255,255,255,0.6);text-align:center;padding:1rem;">No products found for "${query}"</p>`;
            searchEmpty.style.display = 'none';
        } else {
            searchEmpty.style.display = 'none';
            searchResults.innerHTML = results.map(p => `
                <div class="search-result-item" data-id="${p.id}">
                    <img src="${p.image}" alt="${p.name}" />
                    <div class="result-info">
                        <div class="result-name">${p.name}</div>
                        <div class="result-price">${formatPrice(p.price)}</div>
                    </div>
                </div>
            `).join('');
            searchResults.querySelectorAll('.search-result-item').forEach(item => {
                item.addEventListener('click', function() {
                    const id = parseInt(this.dataset.id);
                    closeSearchOverlay();
                    openQuickView(id);
                });
            });
        }
    }

    function openSearchOverlay() {
        searchOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
        setTimeout(() => searchInput.focus(), 100);
    }

    function closeSearchOverlay() {
        searchOverlay.classList.remove('open');
        document.body.style.overflow = '';
        searchInput.value = '';
        searchResults.innerHTML = '';
        searchEmpty.style.display = 'block';
        searchClear.classList.remove('visible');
    }

    // ============================================================
    // JOURNAL MODAL
    // ============================================================
    function openJournalModal(articleId) {
        const article = journalArticles.find(a => a.id === articleId);
        if (!article) return;
        journalModalBody.innerHTML = `
            <img src="${article.image}" alt="${article.title}" />
            <h2>${article.title}</h2>
            <div class="meta">${article.category} · ${article.date}</div>
            <div class="content">${article.content}</div>
        `;
        journalModal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeJournalModal() {
        journalModal.classList.remove('open');
        document.body.style.overflow = '';
    }

    // ============================================================
    // CHECKOUT MODAL
    // ============================================================
    function openCheckoutModal() {
        if (cart.length === 0) {
            alert('Your cart is empty.');
            return;
        }
        checkoutModal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeCheckoutModal() {
        checkoutModal.classList.remove('open');
        document.body.style.overflow = '';
    }

    function completeCheckout() {
        clearCart();
        closeCheckoutModal();
        closeCartDrawer();
        showToast('Order placed successfully!');
    }

    // ============================================================
    // ACCOUNT MODAL
    // ============================================================
    function openAccountModal() {
        accountModal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeAccountModal() {
        accountModal.classList.remove('open');
        document.body.style.overflow = '';
    }

    // ============================================================
    // TOAST NOTIFICATION
    // ============================================================
    function showToast(message) {
        const toast = document.createElement('div');
        toast.style.cssText = `
            position: fixed; bottom: 80px; left: 50%; transform: translateX(-50%);
            background: var(--primary-dark); color: #fff; padding: 0.8rem 2rem;
            border-radius: 40px; font-size: 0.9rem; z-index: 3000;
            box-shadow: 0 8px 24px rgba(0,0,0,0.2);
            opacity: 0; transition: opacity 0.3s;
            pointer-events: none;
        `;
        toast.textContent = message;
        document.body.appendChild(toast);
        requestAnimationFrame(() => { toast.style.opacity = '1'; });
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    // ============================================================
    // FORM HANDLING
    // ============================================================
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('newsletterEmail').value.trim();
        if (!email || !email.includes('@')) {
            newsletterMessage.textContent = 'Please enter a valid email address.';
            newsletterMessage.className = 'form-message error';
            return;
        }
        newsletterMessage.textContent = 'Thank you for subscribing!';
        newsletterMessage.className = 'form-message success';
        this.reset();
    });

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('contactName').value.trim();
        const email = document.getElementById('contactEmail').value.trim();
        const message = document.getElementById('contactMessage').value.trim();
        if (!name || !email || !message) {
            contactMessageStatus.textContent = 'Please fill in all required fields.';
            contactMessageStatus.className = 'form-message error';
            return;
        }
        if (!email.includes('@')) {
            contactMessageStatus.textContent = 'Please enter a valid email.';
            contactMessageStatus.className = 'form-message error';
            return;
        }
        contactMessageStatus.textContent = 'Your message has been sent! We\'ll get back to you soon.';
        contactMessageStatus.className = 'form-message success';
        this.reset();
    });

    document.getElementById('accountForm').addEventListener('submit', function(e) {
        e.preventDefault();
        closeAccountModal();
        showToast('Signed in successfully (demo)');
    });

    // ============================================================
    // SCROLL ANIMATIONS (Intersection Observer)
    // ============================================================
    const animateElements = document.querySelectorAll(
        '.section-padding, .product-card, .category-card, .collection-card, .value-card, .review-card, .journal-card'
    );
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // ============================================================
    // HEADER STICKY EFFECT
    // ============================================================
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScroll > 80) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        lastScroll = currentScroll;
    });

    // ============================================================
    // MOBILE MENU
    // ============================================================
    function openMobileMenu() {
        mobileMenu.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
    }

    hamburgerToggle.addEventListener('click', openMobileMenu);
    mobileMenuClose.addEventListener('click', closeMobileMenu);
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // ============================================================
    // EVENT LISTENERS FOR MODALS / TOGGLES
    // ============================================================
    searchToggle.addEventListener('click', openSearchOverlay);
    bottomSearchToggle.addEventListener('click', openSearchOverlay);
    searchOverlayClose.addEventListener('click', closeSearchOverlay);
    searchClear.addEventListener('click', function() {
        searchInput.value = '';
        searchResults.innerHTML = '';
        searchEmpty.style.display = 'block';
        this.classList.remove('visible');
    });
    searchInput.addEventListener('input', function() {
        const val = this.value;
        if (val.length > 0) {
            searchClear.classList.add('visible');
        } else {
            searchClear.classList.remove('visible');
        }
        performSearch(val);
    });
    searchOverlay.addEventListener('click', function(e) {
        if (e.target === this) closeSearchOverlay();
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (searchOverlay.classList.contains('open')) closeSearchOverlay();
            if (quickViewModal.classList.contains('open')) closeQuickView();
            if (cartDrawer.classList.contains('open')) closeCartDrawer();
            if (wishlistDrawer.classList.contains('open')) closeWishlistDrawer();
            if (accountModal.classList.contains('open')) closeAccountModal();
            if (journalModal.classList.contains('open')) closeJournalModal();
            if (checkoutModal.classList.contains('open')) closeCheckoutModal();
            if (mobileMenu.classList.contains('open')) closeMobileMenu();
            if (allProductsOverlay.classList.contains('open')) closeAllProductsOverlay();
        }
    });

    cartToggle.addEventListener('click', openCartDrawer);
    bottomCartToggle.addEventListener('click', openCartDrawer);
    cartDrawerClose.addEventListener('click', closeCartDrawer);
    cartDrawer.addEventListener('click', function(e) {
        if (e.target === this) closeCartDrawer();
    });

    wishlistToggle.addEventListener('click', openWishlistDrawer);
    bottomWishlistToggle.addEventListener('click', openWishlistDrawer);
    wishlistDrawerClose.addEventListener('click', closeWishlistDrawer);
    wishlistDrawer.addEventListener('click', function(e) {
        if (e.target === this) closeWishlistDrawer();
    });

    accountToggle.addEventListener('click', openAccountModal);
    accountModalClose.addEventListener('click', closeAccountModal);
    accountModal.addEventListener('click', function(e) {
        if (e.target === this) closeAccountModal();
    });

    quickViewClose.addEventListener('click', closeQuickView);
    quickViewModal.addEventListener('click', function(e) {
        if (e.target === this) closeQuickView();
    });

    journalModalClose.addEventListener('click', closeJournalModal);
    journalModal.addEventListener('click', function(e) {
        if (e.target === this) closeJournalModal();
    });

    checkoutModalClose.addEventListener('click', closeCheckoutModal);
    checkoutModalContinue.addEventListener('click', completeCheckout);
    checkoutModal.addEventListener('click', function(e) {
        if (e.target === this) closeCheckoutModal();
    });

    showAllProductsBtn.addEventListener('click', function() {
        openAllProducts('all');
    });

    closeAllProducts.addEventListener('click', closeAllProductsOverlay);
    allProductsOverlay.addEventListener('click', function(e) {
        if (e.target === this) closeAllProductsOverlay();
    });

    // ============================================================
    // PRODUCT CARD EVENT DELEGATION
    // ============================================================
    document.addEventListener('click', function(e) {
        const wishlistBtn = e.target.closest('.product-wishlist');
        if (wishlistBtn) {
            e.preventDefault();
            const id = parseInt(wishlistBtn.dataset.id);
            toggleWishlist(id);
        }
        const addBtn = e.target.closest('.btn-add-cart');
        if (addBtn) {
            e.preventDefault();
            const id = parseInt(addBtn.dataset.id);
            addToCart(id);
        }
        const qvBtn = e.target.closest('.btn-quick-view');
        if (qvBtn) {
            e.preventDefault();
            const id = parseInt(qvBtn.dataset.id);
            openQuickView(id);
        }
    });

    // ============================================================
    // INITIALIZATION
    // ============================================================
    function init() {
        // Categories removed
        renderCollections();
        renderReviews();
        renderGallery();
        renderJournal();
        renderLook();

        const newArrivals = products.slice(0, 8);
        renderProducts(newArrivalsGrid, newArrivals, { showWishlist: true, showQuickView: true, showAddToCart: true });

        const bestSellers = products.filter(p => p.badge === 'Best Seller' || p.rating >= 4.7).slice(0, 6);
        renderProducts(bestSellersGrid, bestSellers, { showWishlist: true, showQuickView: true, showAddToCart: true });

        renderShopAll();

        updateCartUI();
        updateWishlistUI();
        renderCartDrawer();
        renderWishlistDrawer();

        renderAllProductsFilters();
    }

    init();

    // Expose to console for debugging
    window.__ms = { products, cart, wishlist, addToCart, toggleWishlist };

});