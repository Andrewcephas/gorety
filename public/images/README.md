# Profile Image Instructions

## Adding a Profile Photo

1. **Add your photo to the `images/` folder**
   - Recommended format: JPG or PNG
   - Recommended size: At least 500x500px (square works best)
   - Recommended filename: `profile.jpg` or `profile.png`

2. **Update Hero.jsx to use your image**

   In `src/components/Hero.jsx`, replace the `profileInitials` div with:
   
   ```jsx
   <img 
     src="../images/profile.jpg" 
     alt="Gorety Adhiambo Ogutu" 
     className="profile-photo"
   />
   ```

3. **Add CSS for the photo**

   In `src/components/Hero.css`, add:
   
   ```css
   .profile-photo {
     width: 100%;
     height: 100%;
     border-radius: 50%;
     object-fit: cover;
   }
   
   .profile-initials {
     display: none;
   }
   ```

## Image Guidelines

- Use a **professional headshot** with good lighting
- Wear **professional or smart casual attire**
- Have a **friendly, approachable expression**
- Ensure your **face is clearly visible** (no sunglasses, hats)
- **Plain background** works best (neutral or soft)

## Other Images to Consider

You can also add images for:
- **Skills section**: Icons representing each skill category
- **Experience section**: Company/school logos 
- **Education section**: University/school crests
- **Hero background**: A soft, professional background pattern

**Note:** The portfolio currently uses emojis and initials for visual elements, keeping it lightweight and fast-loading. Add images thoughtfully to maintain performance.
