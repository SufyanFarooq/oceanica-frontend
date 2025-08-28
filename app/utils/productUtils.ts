import productsData from '../data/products.json'

export interface Product {
  id: string
  name: string
  nameUr: string
  description: string
  descriptionUr: string
  image: string
  weight?: string
  features: string[]
  featuresUr: string[]
  applications: string[]
  applicationsUr: string[]
  packaging: string[]
  packagingUr: string[]
  nutrientComposition: Record<string, string>
}

export interface Category {
  name: string
  nameUr: string
  products: Product[]
}

export interface ProductType {
  [key: string]: Category
}

export interface ProductsData {
  specialityFertilizers: ProductType
  bioFertilizers: ProductType
}

// Get all products for a specific type
export function getProductsByType(type: 'specialityFertilizers' | 'bioFertilizers'): ProductType {
  return productsData[type] as ProductType
}

// Get all categories for a specific type
export function getCategoriesByType(type: 'specialityFertilizers' | 'bioFertilizers'): Category[] {
  const productType = getProductsByType(type)
  return Object.values(productType)
}

// Get a specific product by ID
export function getProductById(type: 'specialityFertilizers' | 'bioFertilizers', productId: string): Product | null {
  const categories = getCategoriesByType(type)
  
  for (const category of categories) {
    const product = category.products.find(p => p.id === productId)
    if (product) {
      return product
    }
  }
  
  return null
}

// Get a specific product by slug (URL-friendly name)
export function getProductBySlug(type: 'specialityFertilizers' | 'bioFertilizers', productSlug: string): Product | null {
  const categories = getCategoriesByType(type)
  
  for (const category of categories) {
    const product = category.products.find(p => 
      p.name.toLowerCase().replace(/\s+/g, '-') === productSlug ||
      p.id === productSlug
    )
    if (product) {
      return product
    }
  }
  
  return null
}

// Get a specific category by key
export function getCategoryByKey(type: 'specialityFertilizers' | 'bioFertilizers', categoryKey: string): Category | null {
  const productType = getProductsByType(type)
  return productType[categoryKey] || null
}

// Get all products from all categories
export function getAllProducts(type: 'specialityFertilizers' | 'bioFertilizers'): Product[] {
  const categories = getCategoriesByType(type)
  return categories.flatMap(category => category.products)
}

// Get related products (products from the same category)
export function getRelatedProducts(type: 'specialityFertilizers' | 'bioFertilizers', productId: string, excludeCurrent: boolean = true): Product[] {
  const categories = getCategoriesByType(type)
  
  for (const category of categories) {
    const product = category.products.find(p => p.id === productId)
    if (product) {
      if (excludeCurrent) {
        return category.products.filter(p => p.id !== productId)
      }
      return category.products
    }
  }
  
  return []
}

// Get product count by category
export function getProductCountByCategory(type: 'specialityFertilizers' | 'bioFertilizers'): Record<string, number> {
  const productType = getProductsByType(type)
  const counts: Record<string, number> = {}
  
  Object.entries(productType).forEach(([key, category]) => {
    counts[key] = category.products.length
  })
  
  return counts
}

// Search products by name or description
export function searchProducts(type: 'specialityFertilizers' | 'bioFertilizers', query: string): Product[] {
  const allProducts = getAllProducts(type)
  const searchTerm = query.toLowerCase()
  
  return allProducts.filter(product => 
    product.name.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm) ||
    product.nameUr.includes(query) ||
    product.descriptionUr.includes(query)
  )
}
