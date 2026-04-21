// Rename images to web-safe filenames
const fs = require('fs')
const path = require('path')

const imagesDir = './images'

// Mapping of original to safe names
const renameMap = {
  'ROYAL G CUT.jpg': 'royal_g_cut.jpg',
  'TIM_3866.jpg.jpeg': 'tim_3866.jpeg'
}

// For Riyan files with special chars
for (let i = 1; i <= 4; i++) {
  const original = `Riyan_20260419_104${i < 3 ? i < 2 ? '332' : '613' : i < 4 ? '818' : '837'}_??Pixel Ultra Color HD by Riyan (R18) (1)-1.jpg.jpeg`
  renameMap[original] = `riyan_${i}.jpg`
}

Object.entries(renameMap).forEach(([original, newName]) => {
  const oldPath = path.join(imagesDir, original)
  const newPath = path.join(imagesDir, newName)
  
  try {
    if (fs.existsSync(oldPath)) {
      fs.copyFileSync(oldPath, newPath)
      console.log(`✓ Copied: ${original} → ${newName}`)
    }
  } catch (err) {
    console.log(`✗ Error with ${original}: ${err.message}`)
  }
})

console.log('Done!')
