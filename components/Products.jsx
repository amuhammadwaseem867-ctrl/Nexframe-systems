"use client";

import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";
import "./Products.css";

/* ==================================================
   EXPLORE BY CATEGORY
================================================== */

const exploreCategories = [
  {
    name: "Residential Windows and Doors",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW_5tD8L957nrj-xOwecckuHiJsla8PR3elyd8d-VYVcyP3KVDSN-rSwI&s=10",
  },
  {
    name: "Commercial Systems",
    image:
      "https://sc04.alicdn.com/kf/H2c18b6383af84b57a6088c33f791925cD.jpg",
  },
  {
    name: "Curtain Wall Systems",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmuJWCx7KRcLD-WZhpjono5NlCsTUL9wkbZ-B5PS5X-ac1PrV2pJnVY8jB&s=10",
  },
  {
    name: "Storefront Systems",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpFZNNC0A1soPGRqZfDFDBcaBcGFwBDetEu1C02l3kyIjCLXVvk2510Enb&s=10",
  },
  {
    name: "Window Wall Systems",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQJulqxV2M6sPRrI0dBLmReLvZjIk-4TPX1ZmGSLp2qKSRRsV5DFY25IU&s=10",
  },
  {
    name: "Sliding and Folding Doors",
    image:
      "https://cdn.shopify.com/s/files/1/0094/4285/2911/products/eab92c95-a17d-4b9b-a174-953e58780266_1200x.jpg?v=1599859606",
  },
];

/* ==================================================
   PRODUCT TYPE FILTERS
================================================== */

const productFilters = [
  "All Products",
  "Casement",
  "Sliding",
  "Awning",
  "Fixed",
  "Storefront",
  "Curtain Walls",
  "Window Wall",
  "Sliding Doors",
  "Folding Doors",
];

/* ==================================================
   MORE FILTERS
================================================== */

const moreFilters = [
  "Residential",
  "Commercial",
  "Door Systems",
  "Window Systems",
  "Architectural Systems",
];

/* ==================================================
   PRODUCTS
================================================== */

const products = [
  {
    id: 1,
    name: "Blue Sliding Window",
    type: "Sliding",
    category: "Residential Windows and Doors",
    system: "Window Systems",
    image: "/images/blue sliding window frame .jpeg",
  },
  {
    id: 2,
    name: "Blue Window Frame",
    type: "Fixed",
    category: "Residential Windows and Doors",
    system: "Window Systems",
    image: "/images/blue window frame .jpeg",
  },
  {
    id: 3,
    name: "Casement Window",
    type: "Casement",
    category: "Residential Windows and Doors",
    system: "Window Systems",
    image: "/images/casement window .jpeg",
  },
  {
    id: 4,
    name: "Dull Gold Casement",
    type: "Casement",
    category: "Residential Windows and Doors",
    system: "Window Systems",
    image: "/images/casement window dull gold.jpeg",
  },
  {
    id: 5,
    name: "Commercial Storefront",
    type: "Storefront",
    category: "Storefront Systems",
    system: "Commercial",
    image: "/images/commercial store front.jpeg",
  },
  {
    id: 6,
    name: "Curtain Wall Casement",
    type: "Curtain Walls",
    category: "Curtain Wall Systems",
    system: "Architectural Systems",
    image: "/images/curtain vindow casemnet.jpeg",
  },
  {
    id: 7,
    name: "Cyan Door",
    type: "Sliding Doors",
    category: "Sliding and Folding Doors",
    system: "Door Systems",
    image: "/images/cyan door .jpeg",
  },
  {
    id: 8,
    name: "Dark Pink Window",
    type: "Fixed",
    category: "Residential Windows and Doors",
    system: "Window Systems",
    image: "/images/dark pnk window .jpeg",
  },
  {
    id: 9,
    name: "Muted Pink Door",
    type: "Sliding Doors",
    category: "Sliding and Folding Doors",
    system: "Door Systems",
    image: "/images/door muted pink.jpeg",
  },
  {
    id: 10,
    name: "Golden Casement",
    type: "Casement",
    category: "Residential Windows and Doors",
    system: "Window Systems",
    image: "/images/golden case window.jpeg",
  },
  {
    id: 11,
    name: "Golden Casement Frame",
    type: "Casement",
    category: "Residential Windows and Doors",
    system: "Window Systems",
    image: "/images/golden casement window frame .jpeg",
  },
  {
    id: 12,
    name: "Golden Window Frame",
    type: "Fixed",
    category: "Residential Windows and Doors",
    system: "Window Systems",
    image: "/images/golden window frame.jpeg",
  },
  {
    id: 13,
    name: "Grey Window Frame",
    type: "Fixed",
    category: "Residential Windows and Doors",
    system: "Window Systems",
    image: "/images/grer window frame .jpeg",
  },
  {
    id: 14,
    name: "Grey Commercial Casement",
    type: "Casement",
    category: "Commercial Systems",
    system: "Commercial",
    image: "/images/grey commercial window casement frame .jpeg",
  },
  {
    id: 15,
    name: "Mustard Window Frame",
    type: "Fixed",
    category: "Residential Windows and Doors",
    system: "Window Systems",
    image: "/images/msutard window frame.jpeg",
  },
  {
    id: 16,
    name: "Muted Gold Window",
    type: "Fixed",
    category: "Residential Windows and Doors",
    system: "Window Systems",
    image: "/images/muted gold window frame.jpeg",
  },
  {
    id: 17,
    name: "Muted Pink Casement",
    type: "Casement",
    category: "Residential Windows and Doors",
    system: "Window Systems",
    image: "/images/muted pink casement window.jpeg",
  },
  {
    id: 18,
    name: "Office Casement Window",
    type: "Casement",
    category: "Commercial Systems",
    system: "Commercial",
    image: "/images/office window casement.jpeg",
  },
  {
    id: 19,
    name: "Silver Door Casement",
    type: "Sliding Doors",
    category: "Sliding and Folding Doors",
    system: "Door Systems",
    image: "/images/silver door casement.jpeg",
  },
  {
    id: 20,
    name: "Silver Door Frame",
    type: "Sliding Doors",
    category: "Sliding and Folding Doors",
    system: "Door Systems",
    image: "/images/silver door frame.jpeg",
  },
  {
    id: 21,
    name: "Silver Window",
    type: "Fixed",
    category: "Residential Windows and Doors",
    system: "Window Systems",
    image: "/images/silver window .jpeg",
  },
  {
    id: 22,
    name: "Silver Window Frame",
    type: "Fixed",
    category: "Residential Windows and Doors",
    system: "Window Systems",
    image: "/images/silver window frame .jpeg",
  },
  {
    id: 23,
    name: "Silver Window",
    type: "Fixed",
    category: "Residential Windows and Doors",
    system: "Window Systems",
    image: "/images/silver window.jpeg",
  },
  {
    id: 24,
    name: "Terrace Fence",
    type: "Fixed",
    category: "Architectural Systems",
    system: "Architectural Systems",
    image: "/images/terrace fense .jpeg",
  },
  {
    id: 25,
    name: "Window System",
    type: "Fixed",
    category: "Window Wall Systems",
    system: "Architectural Systems",
    image: "/images/window.jpeg",
  },
];

/* ==================================================
   COMPONENT
================================================== */

export default function Products() {
  const [activeFilter, setActiveFilter] =
    useState("All Products");

  const [search, setSearch] = useState("");

  const [category, setCategory] =
    useState("All Categories");

  const [showFilters, setShowFilters] =
    useState(false);

  const [selectedMoreFilters, setSelectedMoreFilters] =
    useState([]);

  /* ==================================================
     TOGGLE MORE FILTER
  ================================================== */

  const toggleMoreFilter = (filter) => {
    setSelectedMoreFilters((current) =>
      current.includes(filter)
        ? current.filter((item) => item !== filter)
        : [...current, filter]
    );
  };

  /* ==================================================
     FILTER PRODUCTS
  ================================================== */

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    return products.filter((product) => {
      /* SEARCH */

      const searchMatch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.type.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query);

      /* PRODUCT TYPE */

      const typeMatch =
        activeFilter === "All Products" ||
        product.type === activeFilter;

      /* CATEGORY */

      const categoryMatch =
        category === "All Categories" ||
        product.category === category;

      /* MORE FILTERS */

      const moreFilterMatch =
        selectedMoreFilters.length === 0 ||
        selectedMoreFilters.some((filter) => {
          if (filter === "Residential") {
            return (
              product.category ===
              "Residential Windows and Doors"
            );
          }

          if (filter === "Commercial") {
            return (
              product.category ===
                "Commercial Systems" ||
              product.category ===
                "Storefront Systems"
            );
          }

          return product.system === filter;
        });

      return (
        searchMatch &&
        typeMatch &&
        categoryMatch &&
        moreFilterMatch
      );
    });
  }, [
    activeFilter,
    search,
    category,
    selectedMoreFilters,
  ]);

  /* ==================================================
     ACTIVE FILTER CHECK
  ================================================== */

  const hasActiveFilters =
    search.trim() ||
    activeFilter !== "All Products" ||
    category !== "All Categories" ||
    selectedMoreFilters.length > 0;

  /* ==================================================
     CLEAR FILTERS
  ================================================== */

  const clearAllFilters = () => {
    setSearch("");
    setActiveFilter("All Products");
    setCategory("All Categories");
    setSelectedMoreFilters([]);
  };

  /* ==================================================
     CATEGORY CARD CLICK
  ================================================== */

  const selectCategory = (categoryName) => {
    setCategory(categoryName);
    setActiveFilter("All Products");

    requestAnimationFrame(() => {
      document
        .getElementById("browse-products")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    });
  };

  return (
    <section
      className="products"
      id="products"
    >
      {/* ==================================================
          PRODUCT BANNER
      ================================================== */}

      <div className="products-banner">

        <div className="products-banner-content">

          <span className="products-eyebrow">
            OUR PRODUCT SYSTEMS
          </span>

          <h2>
            Designed to
            <span> Define Space.</span>
          </h2>

          <p>
            Explore premium aluminum window and door systems
            engineered for modern residential and commercial
            architecture.
          </p>

          <a
            href="#contact"
            className="products-browse"
          >
            Get a Free Quote

            <ArrowUpRight
              size={17}
              strokeWidth={1.8}
            />
          </a>

          <div className="products-banner-meta">

            <div>
              <strong>01</strong>
              <span>Windows</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Doors</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Architectural Systems</span>
            </div>

          </div>

        </div>

        <div className="products-banner-image">

          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=90"
            alt="Modern architectural interior"
          />

          <div className="products-image-fade" />

        </div>

      </div>

      {/* ==================================================
          EXPLORE BY CATEGORY
      ================================================== */}

      <div className="products-categories">

        <div className="products-section-heading">

          <div>

            <span className="section-eyebrow">
              EXPLORE OUR SYSTEMS
            </span>

            <h3>
              Explore by Category
            </h3>

          </div>

          <p>
            Find the right aluminum system for your
            residential, commercial, or architectural project.
          </p>

        </div>

        <div className="category-cards">

          {exploreCategories.map(
            (categoryItem, index) => {

              const isActive =
                category === categoryItem.name;

              return (
                <button
                  className={
                    isActive
                      ? "category-card active"
                      : "category-card"
                  }
                  key={categoryItem.name}
                  type="button"
                  onClick={() =>
                    selectCategory(
                      categoryItem.name
                    )
                  }
                >

                  {/* CATEGORY IMAGE */}

                  <img
                    className="category-card-image"
                    src={categoryItem.image}
                    alt={categoryItem.name}
                    loading="lazy"
                  />

                  {/* IMAGE OVERLAY */}

                  <div className="category-card-overlay" />

                  {/* NUMBER */}

                  <span className="category-card-number">
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </span>

                  {/* ARROW */}

                  <span className="category-card-arrow">

                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.7}
                    />

                  </span>

                  {/* CONTENT */}

                  <div className="category-card-content">

                    <span>
                      PRODUCT SYSTEM
                    </span>

                    <h4>
                      {categoryItem.name}
                    </h4>

                    <div className="category-card-line" />

                  </div>

                </button>
              );
            }
          )}

        </div>

      </div>

      {/* ==================================================
          BROWSE PRODUCTS
      ================================================== */}

      <div
        className="browse-products"
        id="browse-products"
      >

        <div className="browse-products-heading">

          <div>

            <span className="section-eyebrow">
              PRODUCT CATALOGUE
            </span>

            <h3>
              Browse Products
            </h3>

          </div>

          <p>
            Explore our aluminum window, door, storefront,
            and architectural systems.
          </p>

        </div>

        {/* ==================================================
            PRODUCT TYPE FILTERS
        ================================================== */}

        <div className="product-filter-bar">

          <div className="product-filter-scroll">

            {productFilters.map((filter) => (

              <button
                key={filter}
                type="button"
                className={
                  activeFilter === filter
                    ? "product-filter active"
                    : "product-filter"
                }
                onClick={() =>
                  setActiveFilter(filter)
                }
              >
                {filter}
              </button>

            ))}

          </div>

        </div>

        {/* ==================================================
            SEARCH TOOLBAR
        ================================================== */}

        <div className="product-toolbar">

          {/* SEARCH */}

          <label className="product-search">

            <Search
              className="search-icon"
              size={18}
              strokeWidth={1.7}
            />

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              aria-label="Search products"
            />

            {search && (

              <button
                type="button"
                className="search-clear"
                onClick={() =>
                  setSearch("")
                }
                aria-label="Clear search"
              >

                <X
                  size={15}
                  strokeWidth={1.8}
                />

              </button>

            )}

          </label>

          {/* CATEGORY */}

          <div className="product-select">

            <select
              value={category}
              onChange={(event) =>
                setCategory(event.target.value)
              }
              aria-label="Filter by category"
            >

              <option>
                All Categories
              </option>

              {exploreCategories.map(
                (item) => (
                  <option
                    key={item.name}
                    value={item.name}
                  >
                    {item.name}
                  </option>
                )
              )}

            </select>

            <ChevronDown
              className="select-icon"
              size={16}
              strokeWidth={1.7}
            />

          </div>

          {/* MORE FILTERS */}

          <button
            type="button"
            className={
              showFilters
                ? "more-filters active"
                : "more-filters"
            }
            onClick={() =>
              setShowFilters(
                (current) => !current
              )
            }
            aria-expanded={showFilters}
          >

            <SlidersHorizontal
              size={16}
              strokeWidth={1.7}
            />

            <span>
              More Filters
            </span>

            {selectedMoreFilters.length > 0 && (

              <b>
                {selectedMoreFilters.length}
              </b>

            )}

            <ChevronDown
              className="filter-arrow"
              size={15}
              strokeWidth={1.7}
            />

          </button>

        </div>

        {/* ==================================================
            MORE FILTERS PANEL
        ================================================== */}

        {showFilters && (

          <div className="more-filters-panel">

            <div className="more-filter-title">

              <span>
                FILTER BY
              </span>

              <strong>
                Project Type &amp; System
              </strong>

            </div>

            <div className="more-filter-options">

              {moreFilters.map((filter) => {

                const selected =
                  selectedMoreFilters.includes(
                    filter
                  );

                return (

                  <button
                    type="button"
                    key={filter}
                    className={
                      selected
                        ? "more-filter-option selected"
                        : "more-filter-option"
                    }
                    onClick={() =>
                      toggleMoreFilter(filter)
                    }
                  >

                    <span className="filter-check">

                      {selected ? (

                        <Check
                          size={12}
                          strokeWidth={2}
                        />

                      ) : (

                        "+"

                      )}

                    </span>

                    {filter}

                  </button>

                );
              })}

            </div>

          </div>

        )}

        {/* ==================================================
            RESULTS INFO
        ================================================== */}

        <div className="products-results-info">

          <span>

            Showing{" "}

            <strong>
              {filteredProducts.length}
            </strong>{" "}

            of {products.length} products

          </span>

          {hasActiveFilters && (

            <button
              type="button"
              onClick={clearAllFilters}
            >

              <span>
                Clear All Filters
              </span>

              <X
                size={12}
                strokeWidth={1.8}
              />

            </button>

          )}

        </div>

        {/* ==================================================
            PRODUCT GRID
        ================================================== */}

        {filteredProducts.length > 0 ? (

          <div className="product-grid">

            {filteredProducts.map(
              (product) => (

                <article
                  className="product-card"
                  key={product.id}
                >

                  {/* PRODUCT IMAGE */}

                  <div className="product-card-image">

                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                    />

                    <div className="product-card-shade" />

                    <span className="product-card-number">
                      {String(product.id).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    <span className="product-card-type">
                      {product.type}
                    </span>

                    <div className="product-card-overlay">

                      <span>
                        VIEW SYSTEM
                      </span>

                      <span className="product-card-overlay-icon">

                        <ArrowUpRight
                          size={19}
                          strokeWidth={1.6}
                        />

                      </span>

                    </div>

                  </div>

                  {/* PRODUCT INFO */}

                  <div className="product-card-info">

                    <div className="product-card-top">

                      <span>
                        {product.type}
                      </span>

                      <span>
                        {product.system}
                      </span>

                    </div>

                    <h4>
                      {product.name}
                    </h4>

                    <div className="product-card-bottom">

                      <small>
                        {product.category}
                      </small>

                      <a href="#contact">

                        <span>
                          Request Quote
                        </span>

                        <ArrowUpRight
                          size={13}
                          strokeWidth={1.8}
                        />

                      </a>

                    </div>

                  </div>

                </article>

              )
            )}

          </div>

        ) : (

          /* ==================================================
             NO RESULTS
          ================================================== */

          <div className="products-no-results">

            <span>
              NO RESULTS
            </span>

            <h4>
              No product systems found.
            </h4>

            <p>
              Try changing your search or filter selection.
            </p>

            <button
              type="button"
              onClick={clearAllFilters}
            >

              <span>
                Reset Filters
              </span>

              <ArrowUpRight
                size={14}
              />

            </button>

          </div>

        )}

      </div>

    </section>
  );
}