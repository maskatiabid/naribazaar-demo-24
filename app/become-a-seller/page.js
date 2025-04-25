'use client';

import { useState } from 'react';
import styles from '@/styles/BecomeASeller.module.css';

export default function BecomeASellerPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    aadhaarLast4: '',
    businessType: '',
    fssai: '',
    preferredCategories: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert('Thank you! Your form has been submitted.');
  };

  const showFssai = formData.businessType === 'Food';

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Become a Seller</h1>
      <form className={styles.form} onSubmit={handleSubmit}>

        <div>
          <label className={styles.label}>Full Name*</label>
          <input
            type="text"
            className={styles.input}
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            required
          />
        </div>

        <div>
          <label className={styles.label}>Email*</label>
          <input
            type="email"
            className={styles.input}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>

        <div>
          <label className={styles.label}>Phone Number*</label>
          <input
            type="tel"
            className={styles.input}
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />
        </div>

        <div>
          <label className={styles.label}>City*</label>
          <input
            type="text"
            className={styles.input}
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            required
          />
        </div>

        <div>
          <label className={styles.label}>Aadhaar Last 4 Digits*</label>
          <input
            type="text"
            className={styles.input}
            maxLength="4"
            value={formData.aadhaarLast4}
            onChange={(e) => setFormData({ ...formData, aadhaarLast4: e.target.value })}
            required
          />
        </div>

        <div>
          <label className={styles.label}>Business Type*</label>
          <select
            className={styles.select}
            value={formData.businessType}
            onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
            required
          >
            <option value="">-- Select Business Type --</option>
            <option value="Home-based">Home-based</option>
            <option value="Registered Small Business">Registered Small Business</option>
            <option value="NGO/Collective">NGO/Collective</option>
            <option value="Food">Food</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {showFssai && (
          <div>
            <label className={styles.label}>FSSAI License Number</label>
            <input
              type="text"
              className={styles.input}
              value={formData.fssai}
              onChange={(e) => setFormData({ ...formData, fssai: e.target.value })}
            />
          </div>
        )}

        <div>
          <label className={styles.label}>Preferred Categories (Select multiple if applicable)</label>
          <select
            className={styles.select}
            multiple
            name="preferredCategories"
            value={formData.preferredCategories}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                preferredCategories: Array.from(
                  e.target.selectedOptions,
                  (option) => option.value
                ),
              }))
            }
            required
          >
            <optgroup label="Clothing - Women">
              <option value="clothing-women-kurtis">Kurtis</option>
              <option value="clothing-women-sarees">Sarees</option>
              <option value="clothing-women-dresses">Dresses</option>
            </optgroup>
            <optgroup label="Clothing - Men">
              <option value="clothing-men-shirts">Shirts</option>
              <option value="clothing-men-tshirts">T-Shirts</option>
            </optgroup>
            <optgroup label="Accessories">
              <option value="accessories-jewelry">Jewelry</option>
              <option value="accessories-bags">Bags</option>
              <option value="accessories-footwear">Footwear</option>
            </optgroup>
            <optgroup label="Home Decor">
              <option value="home-wall-art">Wall Art</option>
              <option value="home-cushions">Cushions</option>
              <option value="home-handicrafts">Handicrafts</option>
              <option value="home-furniture">Furniture</option>
            </optgroup>
            <optgroup label="Beauty">
              <option value="beauty-skincare">Skincare</option>
              <option value="beauty-haircare">Haircare</option>
              <option value="beauty-organic">Organic Products</option>
            </optgroup>
            <optgroup label="Food & Beverages">
              <option value="food-snacks">Snacks</option>
              <option value="food-pickles">Pickles</option>
              <option value="food-homemade">Homemade Items</option>
            </optgroup>
            <optgroup label="Crafts & DIY">
              <option value="crafts-paintings">Paintings</option>
              <option value="crafts-handmade-gifts">Handmade Gifts</option>
            </optgroup>
            <optgroup label="Kids">
              <option value="kids-clothing">Clothing</option>
              <option value="kids-toys">Toys</option>
            </optgroup>
            <optgroup label="Others">
              <option value="others-custom-orders">Custom Orders</option>
              <option value="others-misc">Miscellaneous</option>
            </optgroup>
          </select>
        </div>

        <button type="submit" className={styles.button}>Submit</button>
      </form>
    </div>
  );
}
