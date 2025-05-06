// Listen to form submission
document.getElementById('seller-form').addEventListener('submit', async function (e) {
  e.preventDefault(); // Stop page reload

  // Collect form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const category = document.getElementById('category').value;
  const state = document.getElementById('state').value;
  const city = document.getElementById('city').value;
  const brand_name = document.getElementById('brand_name').value;
  const business_type = document.getElementById('business_type').value;
  const license = document.getElementById('license').value;
  const productDescription = document.getElementById('productDescription').value;

  // Optional: pretty print checkbox
  const prettyPrint = document.getElementById('pretty_print').checked;

  try {
    // Add to Firestore
    const docRef = await db.collection("sellers").add({
      name,
      email,
      phone,
      category,
      state,
      city,
      brand_name,
      business_type,
      license,
      productDescription,
      createdAt: new Date()
    });

    // Show success message with unique ID
    const successMessage = `✅ Seller Registered! Your Unique Seller ID is: ${docRef.id}`;
    if (prettyPrint) {
      alert(successMessage);
    } else {
      const p = document.createElement("p");
      p.textContent = successMessage;
      p.className = "alert alert-success mt-3";
      document.body.appendChild(p);
    }

    // Reset form
    document.getElementById('seller-form').reset();
  } catch (error) {
    alert("❌ Error: " + error.message);
  }
});
