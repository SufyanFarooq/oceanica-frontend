import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-primary-500 mb-4">oceanica.</h3>
            <p className="text-gray-300 mb-4">
              Leading agricultural solutions for sustainable farming and food security.
            </p>
            <div className="text-sm text-gray-400">
              <p>Pakistan</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Crop Solutions</h4>
            <ul className="space-y-2">
              <li><Link href="/crop-solutions/corn" className="text-gray-300 hover:text-primary-400">Corn</Link></li>
              <li><Link href="/crop-solutions/wheat" className="text-gray-300 hover:text-primary-400">Wheat</Link></li>
              <li><Link href="/crop-solutions/rice" className="text-gray-300 hover:text-primary-400">Rice</Link></li>
              <li><Link href="/crop-solutions/sugarcane" className="text-gray-300 hover:text-primary-400">Sugarcane</Link></li>
              <li><Link href="/crop-solutions/potato" className="text-gray-300 hover:text-primary-400">Potato</Link></li>
              <li><Link href="/crop-solutions/cotton" className="text-gray-300 hover:text-primary-400">Cotton</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li><Link href="/products/search/crop-protection/type/herbicide-1156" className="text-gray-300 hover:text-primary-400">Herbicide</Link></li>
              <li><Link href="/products/search/crop-protection/type/insecticide-1166" className="text-gray-300 hover:text-primary-400">Insecticide</Link></li>
              <li><Link href="/products/search/crop-protection/type/fungicide-1161" className="text-gray-300 hover:text-primary-400">Fungicide</Link></li>
              <li><Link href="/products/search/crop-protection/type/seedcare-1176" className="text-gray-300 hover:text-primary-400">Seedcare</Link></li>
              <li><Link href="/products/search/crop-protection" className="text-gray-300 hover:text-primary-400">Crop Enhancement</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about-us" className="text-gray-300 hover:text-primary-400">About Us</Link></li>
              <li><Link href="/naya-savera" className="text-gray-300 hover:text-primary-400">Naya Savera</Link></li>
              <li><Link href="/stewardship" className="text-gray-300 hover:text-primary-400">Sustainability</Link></li>
              <li><Link href="/contact-us" className="text-gray-300 hover:text-primary-400">Contact Us</Link></li>
              <li><Link href="/careers" className="text-gray-300 hover:text-primary-400">Careers</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Oceanica Crop Science. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
