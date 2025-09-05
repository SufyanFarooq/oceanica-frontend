import { Download, Play } from "lucide-react";


export default function VideosPDF() {
    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Resources & Learning</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access our comprehensive video guides and downloadable resources for rice cultivation
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Related Videos */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-gray-900">Related Videos</h3>
                <div className="flex space-x-2">
                  <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                    <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                    </svg>
                  </button>
                  <button className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Video Carousel */}
              <div className="space-y-6">
                {/* Main Video */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-white/95 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-10 h-10 text-primary-600 ml-1" />
                      </div>
                    </div>
                    <div className="absolute top-4 left-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Oceanica
                    </div>
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                      LIVE
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                      18:45
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      Oceanica Pakistan - Rice Solutions
                    </h4>
                    <p className="text-gray-600 mb-3">Learn about our comprehensive rice protection solutions and best practices for Pakistani farmers</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        <span>3.2K views</span>
                      </div>
                      <span className="text-sm text-gray-500">1 day ago</span>
                    </div>
                  </div>
                </div>
                
                {/* Additional Videos */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                    <div className="relative h-32 bg-gradient-to-br from-gray-100 to-gray-200">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-6 h-6 text-primary-600 ml-0.5" />
                        </div>
                      </div>
                      <div className="absolute top-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                        10:15
                      </div>
                    </div>
                    <div className="p-4">
                      <h5 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-primary-600 transition-colors">
                        Rice Planting Guide
                      </h5>
                      <p className="text-xs text-gray-600">Step-by-step planting techniques</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                    <div className="relative h-32 bg-gradient-to-br from-gray-100 to-gray-200">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-6 h-6 text-primary-600 ml-0.5" />
                        </div>
                      </div>
                      <div className="absolute top-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                        14:30
                      </div>
                    </div>
                    <div className="p-4">
                      <h5 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-primary-600 transition-colors">
                        Water Management
                      </h5>
                      <p className="text-xs text-gray-600">Effective irrigation strategies</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Links and Downloads */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-gray-900">Downloads</h3>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                  </svg>
                  <span>All Resources</span>
                </div>
              </div>
              
              <div className="space-y-4">
                {/* Featured Download */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 border border-green-200">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-1">Rice Crop Program</h4>
                      <p className="text-sm text-gray-600 mb-3">Complete guide to rice cultivation and protection</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>PDF • 2.7 MB</span>
                          <span>Updated 1 day ago</span>
                        </div>
                        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2">
                          <Download className="w-4 h-4" />
                          <span>Download</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Other Downloads */}
                <div className="space-y-3">
                  <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                          </svg>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">Rice Growing Guide</h5>
                          <p className="text-sm text-gray-600">2.1 MB • PDF</p>
                        </div>
                      </div>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Download className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                          </svg>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">Water Management</h5>
                          <p className="text-sm text-gray-600">1.5 MB • PDF</p>
                        </div>
                      </div>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Download className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                          </svg>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">Harvesting Guide</h5>
                          <p className="text-sm text-gray-600">1.3 MB • PDF</p>
                        </div>
                      </div>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Download className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* View All Button */}
                <div className="text-center pt-4">
                  <button className="text-primary-600 hover:text-primary-700 font-semibold flex items-center space-x-2 mx-auto transition-colors">
                    <span>View All Resources</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}