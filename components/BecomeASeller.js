import React, { useState } from "react";
import styles from "../styles/BecomeASeller.module.css";

const BecomeASeller = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    aadhaarLast4: "",
    tradeLicenseNumber: "",
    businessType: "",
    preferredCategories: [],
    facebook: "",
    instagram: "",
    whatsapp: "",
    agreeTerms: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Form submitted! (Check console)");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Become a Seller</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>Full Name*</label>
        <input
          type="text"
          required
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
        />

        <label>Email*</label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <label>Phone Number*</label>
        <input
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />

        <label>City*</label>
        <input
          type="text"
          required
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
        />

        <label>Aadhaar Number (Last 4 digits)*</label>
        <input
          type="text"
          maxLength={4}
          required
          value={formData.aadhaarLast4}
          onChange={(e) => setFormData({ ...formData, aadhaarLast4: e.target.value })}
        />

        <label>Trade/Shop Act License Number (Optional)</label>
        <input
          type="text"
          value={formData.tradeLicenseNumber}
          onChange={(e) => setFormData({ ...formData, tradeLicenseNumber: e.target.value })}
        />

        <label>Business Type*</label>
        <select
          required
          value={formData.businessType}
          onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
        >
          <option value="">Select</option>
          <option value="home-based">Home-based</option>
          <option value="registered-small-business">Registered Small Business</option>
          <option value="ngo-collective">NGO / Collective</option>
          <option value="other">Other</option>
        </select>

        <label>Preferred Categories (Select multiple if applicable)*</label>
        <select
          multiple
          required
          value={formData.preferredCategories}
          onChange={(e) =>
            setFormData({
              ...formData,
              preferredCategories: Array.from(e.target.selectedOptions, (option) => option.value),
            })
          }
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

        <label>Instagram Link (Optional)</label>
        <input
          type="url"
          value={formData.instagram}
          onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
        />

        <label>Facebook Link (Optional)</label>
        <input
          type="url"
          value={formData.facebook}
          onChange={(e) => setFormData({ ...formData, facebook: e.target.value })}
        />

        <label>WhatsApp Number (Optional)</label>
        <input
          type="text"
          value={formData.whatsapp}
          onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
        />

        <label>
          <input
            type="checkbox"
            required
            checked={formData.agreeTerms}
            onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
          />
          &nbsp;I agree to the Terms & Conditions
        </label>

        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
};

export default BecomeASeller;
