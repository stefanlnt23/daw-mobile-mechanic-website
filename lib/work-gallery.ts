import galleryData from "./work-gallery-data.json"

export type WorkGalleryItem = {
  src: string
  file: string
  title: string
  raw: string
  alt: string
  featured: boolean
}

const titleOverrides: Record<string, string> = {
  "02.jpg": "ABS Sensor Fault",
  "03.jpg": "Vauxhall Astra ABS Fault",
  "07.jpg": "VW Passat & Audi A5 Jobs",
  "08.jpg": "Battery Replacement",
  "25.jpg": "Clutch Master Cylinder",
  "38.jpg": "ABS Sensor Repair",
}

export const workGallery: WorkGalleryItem[] = (galleryData as WorkGalleryItem[]).map((item) => ({
  ...item,
  title: titleOverrides[item.file] ?? item.title,
}))

export const featuredWork = workGallery.filter((item) => item.featured)
