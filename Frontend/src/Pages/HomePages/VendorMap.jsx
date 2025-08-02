"use client"

import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"

// Mock property data with real coordinates
const mockProperties = {
  london: [
    {
      id: 1,
      title: "Modern 3-Bed House in Canary Wharf",
      price: "£850,000",
      address: "Canary Wharf, London E14",
      bedrooms: 3,
      bathrooms: 2,
      parking: 1,
      image: "/placeholder.svg?height=200&width=300",
      type: "House",
      lat: 51.5074,
      lng: -0.0278,
      description:
        "A beautifully presented three-bedroom house in the heart of Canary Wharf, featuring modern fixtures and fittings throughout.",
    },
    {
      id: 2,
      title: "Victorian Terrace in Kensington",
      price: "£1,200,000",
      address: "Kensington, London SW7",
      bedrooms: 4,
      bathrooms: 3,
      parking: 0,
      image: "/placeholder.svg?height=200&width=300",
      type: "House",
      lat: 51.4994,
      lng: -0.1746,
      description: "Charming Victorian terrace house with period features, located in the prestigious Kensington area.",
    },
  ],
  manchester: [
    {
      id: 3,
      title: "Contemporary Apartment",
      price: "£320,000",
      address: "City Centre, Manchester M1",
      bedrooms: 2,
      bathrooms: 1,
      parking: 1,
      image: "/placeholder.svg?height=200&width=300",
      type: "Apartment",
      lat: 53.4808,
      lng: -2.2426,
      description:
        "Stylish two-bedroom apartment in a converted warehouse building, offering city living at its finest.",
    },
    {
      id: 4,
      title: "Family Home with Garden",
      price: "£275,000",
      address: "Didsbury, Manchester M20",
      bedrooms: 3,
      bathrooms: 2,
      parking: 2,
      image: "/placeholder.svg?height=200&width=300",
      type: "House",
      lat: 53.4084,
      lng: -2.2214,
      description:
        "Spacious family home with large rear garden, perfect for families. Located in a quiet residential area.",
    },
  ],
  birmingham: [
    {
      id: 5,
      title: "Modern City Apartment",
      price: "£280,000",
      address: "Birmingham City Centre, B1",
      bedrooms: 2,
      bathrooms: 2,
      parking: 1,
      image: "/placeholder.svg?height=200&width=300",
      type: "Apartment",
      lat: 52.4862,
      lng: -1.8904,
      description: "Contemporary apartment in the heart of Birmingham with excellent transport links.",
    },
  ],
}

const areaDetails = {
  1: {
    id: 1,
    name: "London Area Search",
    date: "24 Jul 2025",
    description: "Central London search area covering prime locations including Canary Wharf and Kensington.",
    totalProperties: 2,
    averagePrice: "£1,025,000",
    priceRange: "£850,000 - £1,200,000",
    propertyTypes: { houses: 2, apartments: 0 },
    popularAreas: ["Canary Wharf", "Kensington"],
    coordinates: "London Region",
  },
  2: {
    id: 2,
    name: "Manchester Area Search",
    date: "24 Jul 2025",
    description: "Greater Manchester search area covering city centre and suburban locations.",
    totalProperties: 2,
    averagePrice: "£297,500",
    priceRange: "£275,000 - £320,000",
    propertyTypes: { houses: 1, apartments: 1 },
    popularAreas: ["City Centre", "Didsbury"],
    coordinates: "Manchester Region",
  },
  3: {
    id: 3,
    name: "Birmingham Area Search",
    date: "24 Jul 2025",
    description: "Birmingham city centre search area with modern developments.",
    totalProperties: 1,
    averagePrice: "£280,000",
    priceRange: "£280,000",
    propertyTypes: { houses: 0, apartments: 1 },
    popularAreas: ["City Centre"],
    coordinates: "Birmingham Region",
  },
}

export default function PropertyMap() {
  const [viewMode, setViewMode] = useState("map")
  const [selectedArea, setSelectedArea] = useState(null)
  const [selectedProperty, setSelectedProperty] = useState(null)
  const [drawnAreaName, setDrawnAreaName] = useState("")
  const [savedAreas, setSavedAreas] = useState([
    { id: 1, name: "London Area Search", date: "24 Jul 2025", selected: false, area: "london" },
    { id: 2, name: "Manchester Area Search", date: "24 Jul 2025", selected: false, area: "manchester" },
    { id: 3, name: "Birmingham Area Search", date: "24 Jul 2025", selected: true, area: "birmingham" },
  ])
  const [selectedAreaDetails, setSelectedAreaDetails] = useState(null)
  const [map, setMap] = useState(null)
  const [markers, setMarkers] = useState([])
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const mapRef = useRef(null)
  const sidebarRef = useRef(null)

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        !event.target.closest(".menu-button") &&
        window.innerWidth < 768
      ) {
        setIsSidebarOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Close sidebar on window resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Initialize Leaflet Map with CDN
  useEffect(() => {
    const initMap = async () => {
      if (typeof window === "undefined") return

      // Dynamically import Leaflet
      const L = (await import("leaflet")).default

      // Import Leaflet CSS
      if (!document.querySelector('link[href*="leaflet.css"]')) {
        const link = document.createElement("link")
        link.rel = "stylesheet"
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        document.head.appendChild(link)
      }

      if (!mapRef.current) return

      // Initialize map
      const mapInstance = L.map(mapRef.current).setView([52.5, -1.5], 6)

      // Add OpenStreetMap tiles
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
      }).addTo(mapInstance)

      setMap(mapInstance)

      // Custom team marker icon
      const teamIcon = L.divIcon({
        html: `<div style="
          width: 30px; 
          height: 30px; 
          background: #10b981; 
          border: 3px solid white; 
          border-radius: 50%; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          color: white; 
          font-weight: bold; 
          font-size: 14px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        ">T</div>`,
        className: "custom-team-marker",
        iconSize: [30, 30],
        iconAnchor: [15, 15],
      })

      // Add click listener for area selection
      mapInstance.on("click", (e) => {
        const { lat, lng } = e.latlng

        // Determine which area was clicked based on coordinates
        let clickedArea = null
        if (lat > 51.3 && lat < 51.7 && lng > -0.5 && lng < 0.2) {
          clickedArea = "london"
        } else if (lat > 53.3 && lat < 53.6 && lng > -2.4 && lng < -2.0) {
          clickedArea = "manchester"
        } else if (lat > 52.3 && lat < 52.6 && lng > -2.1 && lng < -1.7) {
          clickedArea = "birmingham"
        }

        if (clickedArea) {
          handleAreaSelect(clickedArea)
        }
      })
    }

    initMap()

    // Cleanup function
    return () => {
      if (map) {
        map.remove()
      }
    }
  }, [])

  const handleAreaSelect = async (areaId) => {
    setSelectedArea(areaId)
    setViewMode("list")
    // Close sidebar on mobile after selection
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false)
    }

    if (!map) return

    // Dynamically import Leaflet
    const L = (await import("leaflet")).default

    // Clear existing property markers
    markers.forEach((marker) => marker.remove())

    // Add property markers
    if (mockProperties[areaId]) {
      const propertyIcon = L.divIcon({
        html: `<div style="
          width: 25px; 
          height: 25px; 
          background: #3b82f6; 
          border: 2px solid white; 
          border-radius: 50%; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          color: white; 
          font-weight: bold; 
          font-size: 12px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        ">£</div>`,
        className: "custom-property-marker",
        iconSize: [25, 25],
        iconAnchor: [12.5, 12.5],
      })

      const newMarkers = mockProperties[areaId].map((property) => {
        const marker = L.marker([property.lat, property.lng], { icon: propertyIcon })
          .addTo(map)
          .bindPopup(`
            <div style="padding: 8px; max-width: 250px;">
              <h3 style="margin: 0 0 8px 0; color: #1f2937; font-size: 14px; font-weight: bold;">${property.title}</h3>
              <p style="margin: 0 0 4px 0; color: #10b981; font-size: 16px; font-weight: bold;">${property.price}</p>
              <p style="margin: 0 0 4px 0; color: #6b7280; font-size: 12px;">${property.address}</p>
              <div style="display: flex; gap: 12px; font-size: 11px; color: #6b7280;">
                <span>🛏️ ${property.bedrooms}</span>
                <span>🚿 ${property.bathrooms}</span>
                <span>🚗 ${property.parking}</span>
              </div>
            </div>
          `)

        return marker
      })

      setMarkers(newMarkers)

      // Fit map to show all properties
      const group = L.featureGroup(newMarkers)
      map.fitBounds(group.getBounds().pad(0.1))
    }
  }

  const handlePropertySelect = (property) => {
    setSelectedProperty(property)
    setViewMode("detail")
    // Close sidebar on mobile after selection
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false)
    }

    // Center map on selected property
    if (map) {
      map.setView([property.lat, property.lng], 15)
    }
  }

  const handleSaveArea = () => {
    if (drawnAreaName.trim()) {
      setSavedAreas([
        ...savedAreas,
        {
          id: savedAreas.length + 1,
          name: drawnAreaName,
          date: new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }),
          selected: false,
          area: "custom",
        },
      ])
      setDrawnAreaName("")
    }
  }

  const handleAreaCardClick = (areaId) => {
    const area = areaDetails[areaId]
    const savedArea = savedAreas.find((sa) => sa.id === areaId)

    if (area && savedArea) {
      setSelectedAreaDetails(area)
      setSelectedArea(savedArea.area)
      setViewMode("area-detail")
      // Close sidebar on mobile after selection
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false)
      }

      // Update map view for the selected area
      if (map && mockProperties[savedArea.area]) {
        const L = window.L
        if (L) {
          const bounds = L.latLngBounds()
          mockProperties[savedArea.area].forEach((property) => {
            bounds.extend([property.lat, property.lng])
          })
          map.fitBounds(bounds.pad(0.1))
        }
      }
    }
  }

  const properties = selectedArea ? mockProperties[selectedArea] || [] : []

  return (
    <div className="flex h-screen bg-gray-50 relative">
      {/* Mobile Menu Button */}
      <button
        className="menu-button fixed top-4 left-4 z-[60] md:hidden bg-white p-2 rounded-lg shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isSidebarOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Overlay */}
      {isSidebarOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-[50] md:hidden" />}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`
          fixed md:relative
          top-0 left-0 h-full
          w-80 md:w-86
          bg-white shadow-lg md:shadow-sm
          border-r border-gray-200
          z-[55] md:z-auto
          transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        <div className="h-full overflow-y-auto">
          {viewMode === "map" && (
            <div className="p-4 space-y-4">
              <div>
                <div className="flex items-center mb-4 justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">Draw A Search</h2>
                  <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-2 px-4 rounded-md transition-colors text-sm">
                    Current Location
                  </button>
                </div>
                <div className="flex w-full flex-col gap-3 mb-4">
                  <label className="" htmlFor="category-select">
                    Radius
                  </label>
                  <select
                    id="category-select"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    name=""
                    defaultValue=""
                  >
                    <option value="">All</option>
                    <option value="photography">12 mile</option>
                    <option value="photo-video">20 mile</option>
                    <option value="videography">22 mile</option>
                    <option value="videography">32 mile</option>
                    <option value="videography">5 mile</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Drawn area name"
                    value={drawnAreaName}
                    onChange={(e) => setDrawnAreaName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                  <button
                    onClick={handleSaveArea}
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
                  >
                    Save Area
                  </button>
                </div>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-medium mb-3 text-gray-900">My drawn areas</h3>
                <div className="space-y-2">
                  {savedAreas.map((area) => (
                    <div
                      key={area.id}
                      className="flex items-center gap-3 p-2 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors"
                      onClick={() => handleAreaCardClick(area.id)}
                    >
                      <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden">
                        <img
                          className="w-full h-full object-cover"
                          src="http://localhost:5173/main_detail/three.jpg"
                          alt=""
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-blue-600">{area.name}</p>
                        <p className="text-xs text-gray-500">{area.date}</p>
                      </div>
                      {area.selected && (
                        <span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">Selected</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {viewMode === "list" && (
            <div className="p-4">
              <div className="flex items-center gap-2 mb-4">
                <button
                  onClick={() => setViewMode("map")}
                  className="p-1 hover:bg-gray-100 rounded-md transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <h2 className="text-lg font-semibold text-gray-900">Properties in Area</h2>
              </div>

              <div className="space-y-3">
                {properties.map((property) => (
                  <div
                    key={property.id}
                    className="border border-gray-200 rounded-lg cursor-pointer hover:shadow-md transition-shadow bg-white"
                    onClick={() => handlePropertySelect(property)}
                  >
                    <div className="p-3">
                      <img
                        src={property.image || "/placeholder.svg"}
                        alt={property.title}
                        className="w-full h-32 object-cover rounded-md mb-3"
                      />
                      <div className="space-y-2">
                        <div className="flex justify-between items-start">
                          <h3 className="font-semibold text-sm text-gray-900">{property.title}</h3>
                          <span className="px-2 py-1 text-xs border border-gray-300 rounded-md text-gray-600">
                            {property.type}
                          </span>
                        </div>
                        <p className="text-lg font-bold text-emerald-600">{property.price}</p>
                        <p className="text-sm text-gray-500">{property.address}</p>
                        <div className="flex gap-4 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <span>🛏️</span>
                            {property.bedrooms}
                          </div>
                          <div className="flex items-center gap-1">
                            <span>🚿</span>
                            {property.bathrooms}
                          </div>
                          <div className="flex items-center gap-1">
                            <span>🚗</span>
                            {property.parking}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {viewMode === "detail" && selectedProperty && (
            <div className="p-4">
              <div className="flex items-center gap-2 mb-4">
                <button
                  onClick={() => setViewMode("list")}
                  className="p-1 hover:bg-gray-100 rounded-md transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <h2 className="text-lg font-semibold text-gray-900">Property Details</h2>
              </div>

              <div className="space-y-4">
                <img
                  src={selectedProperty.image || "/placeholder.svg"}
                  alt={selectedProperty.title}
                  className="w-full h-48 object-cover rounded-lg"
                />

                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-gray-900">{selectedProperty.title}</h3>
                    <div className="flex gap-2">
                      <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </button>
                      <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <p className="text-2xl font-bold text-emerald-600">{selectedProperty.price}</p>
                  <p className="text-gray-500">{selectedProperty.address}</p>

                  <div className="flex gap-6 py-3">
                    <div className="flex items-center gap-2">
                      <span>🛏️</span>
                      <span className="font-medium">{selectedProperty.bedrooms}</span>
                      <span className="text-sm text-gray-500">bedrooms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>🚿</span>
                      <span className="font-medium">{selectedProperty.bathrooms}</span>
                      <span className="text-sm text-gray-500">bathrooms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>🚗</span>
                      <span className="font-medium">{selectedProperty.parking}</span>
                      <span className="text-sm text-gray-500">parking</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-2">Description</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{selectedProperty.description}</p>
                  </div>

                  <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-4 rounded-md transition-colors">
                    Contact Agent
                  </button>
                </div>
              </div>
            </div>
          )}

          {viewMode === "area-detail" && selectedAreaDetails && (
            <div className="p-4">
              <div className="flex items-center gap-2 mb-4">
                <button
                  onClick={() => setViewMode("map")}
                  className="p-1 hover:bg-gray-100 rounded-md transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <h2 className="text-lg font-semibold text-gray-900">Area Details</h2>
              </div>

              <div className="space-y-4">
                <div className="rounded-lg">
                  <div className="w-full bg-blue-100 rounded-lg overflow-hidden">
                    <img className="w-full h-48 object-cover" src="http://localhost:5173/main_detail/one.jpg" alt="" />
                  </div>
                  <div className="flex flex-col items-start gap-3 mt-2 mb-3">
                    <div>
                      <h3 className="font-semibold">{selectedAreaDetails.name}</h3>
                      <p className="text-sm text-blue-600">Created: {selectedAreaDetails.date}</p>
                    </div>
                  </div>
                  <p className="text-sm">{selectedAreaDetails.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="border border-gray-200 rounded-lg bg-white">
                    <div className="p-3 text-center">
                      <p className="text-2xl font-bold text-emerald-600">{selectedAreaDetails.totalProperties}</p>
                      <p className="text-xs text-gray-500">Total Order</p>
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-lg bg-white">
                    <div className="p-3 text-center">
                      <p className="text-lg font-bold text-gray-900">{selectedAreaDetails.averagePrice}</p>
                      <p className="text-xs text-gray-500">Average Price</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 w-full">
                  <Link
                    to="/VendorProfile"
                    className="block w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-2 px-4 rounded-md transition-colors text-center"
                  >
                    View All Properties
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content - Leaflet Map */}
      <div className="flex-1 relative">
        {/* Leaflet Map Container */}
        <div ref={mapRef} className="w-full h-full relative z-[10]" />

        {/* Map Legend */}
        <div className="absolute top-4 right-4 z-[40] bg-white rounded-lg shadow-lg p-3 max-w-xs hidden md:block">
          <h4 className="font-semibold text-sm mb-2">Map Legend</h4>
          <div className="space-y-2 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">T</span>
              </div>
              <span>Team Locations</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">£</span>
              </div>
              <span>Properties</span>
            </div>
          </div>
          <div className="mt-2 pt-2 border-t text-xs text-gray-500">Click on areas to search for properties</div>
        </div>

        {/* Bottom Controls */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-[40] hidden md:block">
          <div className="flex gap-2 bg-white rounded-lg shadow-lg p-2">
            <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Clear area
            </button>
            <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                />
              </svg>
              Undo
            </button>
            <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 10h-10a8 8 0 00-8 8v2M21 10l-6 6m6-6l-6-6"
                />
              </svg>
              Redo
            </button>
            <button
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                selectedArea
                  ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
              onClick={() => selectedArea && setViewMode("list")}
              disabled={!selectedArea}
            >
              View Properties
            </button>
          </div>
        </div>

        {/* Mobile Bottom Controls */}
        <div className="absolute bottom-4 left-4 right-4 z-[40] md:hidden">
          <div className="flex gap-2 bg-white rounded-lg shadow-lg p-2 justify-center">
            <button
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                selectedArea
                  ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
              onClick={() => selectedArea && setViewMode("list")}
              disabled={!selectedArea}
            >
              View Properties
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
