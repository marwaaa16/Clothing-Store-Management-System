document.addEventListener("DOMContentLoaded", () => {
    const cartOverlay = document.querySelector(".cart-overlay");// عنصر السلة
    const cartButton = document.getElementById("cart-button");// زر فتح السلة
    const closeCartButton = document.getElementById("close-cart"); // زر إغلاق السلة
    const cartItemsContainer = document.querySelector(".cart-items");// حاوية المنتجات داخل السلة
    const totalPriceElement = document.getElementById("total-price");// عنصر عرض المجموع الكلي
    let cart = []; // تعريف السلة

    // فتح السلة
    cartButton.addEventListener("click", () => { // 🛒 فتح السلة عند الضغط على الزر
        cartOverlay.classList.add("show");// إضافة الكلاس "show" لإظهار السلة
        renderCart();
    });

    // إغلاق السلة
    closeCartButton.addEventListener("click", () => {
        cartOverlay.classList.remove("show");
    });

    // إضافة زر "Add to Cart" إلى كل منتج
    document.querySelectorAll(".product").forEach((productElement, index) => {
        const addToCartButton = document.createElement("button");// إنشاء زر جديد
        addToCartButton.textContent = "Add to Cart";// كتابة النص داخل الزر
        addToCartButton.classList.add("add-to-cart"); // إضافة كلاس للزر لتصميمه
        productElement.appendChild(addToCartButton);// إضافة الزر داخل كل منتج

        // عند النقر على "Add to Cart"
        addToCartButton.addEventListener("click", () => {
            const name = productElement.querySelector("h4")?.textContent || "Unknown";// استخراج اسم المنتج
            const image = productElement.querySelector("img")?.src || "";// استخراج صورة المنتج
            const priceElement = productElement.querySelector(".price");// البحث عن عنصر السعر داخل المنتج
//نتاكد بيها من السعر
            if (!priceElement) {
                alert("خطأ! لم يتم العثور على السعر داخل المنتج.");
                return;
            }
// استخراج نص السعر وتحويله إلى رقم
            const priceText = priceElement.textContent.trim();
            const price = parseFloat(priceText.replace(/[^\d,]/g, "").replace(",", "."));

            if (isNaN(price)) {
                alert("خطأ! لم يتم العثور على السعر بشكل صحيح.");
                return;
            }
 // إنشاء كائن يمثل المنتج
            const product = {
                id: index,
                name: name,
                price: price,
                image: image,
            };

            addToCart(product); // إضافة المنتج إلى السلة
        });
    });

    // إضافة المنتج إلى السلة
    function addToCart(product) {
        const existingProduct = cart.find(item => item.id === product.id);// البحث إذا كان المنتج موجودًا في السلة

        if (existingProduct) {// زيادة الكمية إذا كان المنتج موجودًا مسبقًا
            existingProduct.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });// إضافة المنتج مع تحديد الكمية بـ 1
        }

        alert(`${product.name} تمت إضافته إلى السلة!`);
        renderCart(); // تحديث السلة
    }

    // تحديث عرض السلة
    function renderCart() {
        cartItemsContainer.innerHTML = ""; // تنظيف السلة
        let total = 0;// مسح جميع المنتجات داخل السلة

        cart.forEach((item, index) => {
            total += item.price * item.quantity;// حساب المجموع الكلي
            const cartItem = document.createElement("li"); // إنشاء عنصر <li> لعرض المنتج داخل السلة
            cartItem.classList.add("cart-item");// إضافة كلاس لتنسيق العنصر
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}"> <!-- صورة المنتج -->
                <div class="cart-item-details">
                    <p>${item.name}</p>  <!-- اسم المنتج -->
                    <p>${item.price.toFixed(2)} DA</p>
                    <div class="quantity-controls">
                        <button class="decrease" data-index="${index}">-</button>
                        <span>${item.quantity}</span>
                        <button class="increase" data-index="${index}">+</button>
                    </div>
                </div>
                <button class="remove" data-index="${index}">❌</button> <!-- زر حذف المنتج -->
            `;
            cartItemsContainer.appendChild(cartItem);// إضافة العنصر إلى قائمة السلة
        });

        totalPriceElement.textContent = `Total: ${total.toFixed(2)} DA`;// تحديث عرض المجموع الكلي

        // إضافة أحداث الأزرار داخل السلة
        document.querySelectorAll(".increase").forEach(btn => {// ➕ زيادة الكمية عند الضغط على زر "+"
            btn.addEventListener("click", event => {
                const index = event.target.dataset.index; // استخراج رقم المنتج في السلة
                cart[index].quantity++;// زيادة الكمية
                renderCart();// إعادة تحديث السلة
            });
        });
        document.querySelectorAll(".decrease").forEach(btn => {// ➖ تقليل الكمية عند الضغط على زر "-"
            btn.addEventListener("click", event => {
                const index = event.target.dataset.index;// استخراج رقم المنتج في السلة
                if (cart[index].quantity > 1) {// تقليل الكمية إذا كانت أكبر من 1
                    cart[index].quantity--;
                } else {
                    cart.splice(index, 1);// إزالة المنتج إذا كانت الكمية 1
                }
                renderCart();
            });
        });
 // ❌ إزالة المنتج عند الضغط على زر الحذف
        document.querySelectorAll(".remove").forEach(btn => {
            btn.addEventListener("click", event => {
                const index = event.target.dataset.index;// استخراج رقم المنتج في السلة
                cart.splice(index, 1); // إزالة المنتج بالكامل من السلة
                renderCart();
            });
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const filterBtn = document.getElementById("filterBtn");
    const modal = document.getElementById("filterModal");
    const closeModal = document.querySelector(".close");
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");
    const priceRange = document.querySelector(".price-range");
    const priceValue = document.getElementById("priceValue");

    // فتح النافذة عند الضغط على أيقونة الفلترة
    filterBtn.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    // إغلاق النافذة عند الضغط على زر الإغلاق
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // التبديل بين التبويبات
    tabButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            tabButtons.forEach((b) => b.classList.remove("active"));
            tabContents.forEach((content) => content.classList.remove("active"));

            btn.classList.add("active");
            document.getElementById(btn.dataset.tab).classList.add("active");
        });
    });

    // تحديث قيمة السعر عند تحريك شريط التمرير
    priceRange.addEventListener("input", () => {
        priceValue.textContent = priceRange.value;
    });
});
//chekout
// عند تحميل الصفحة، يتم إضافة حدث "submit" للنموذج عند محاولة الإرسال
document.getElementById("checkout-form").addEventListener("submit", function(event) {
    
    event.preventDefault(); // منع الإرسال الافتراضي للنموذج حتى نتحقق من البيانات أولاً

    // جلب القيم المدخلة من الحقول المختلفة داخل النموذج
    let name = document.getElementById("name").value.trim(); // اسم المستخدم
    let address = document.getElementById("address").value.trim(); // العنوان
    let payment = document.getElementById("payment").value; // طريقة الدفع

    // التحقق مما إذا كانت الحقول فارغة
    if (name === "" || address === "" || payment === "") {
        alert("Please fill in all fields."); // عرض رسالة تنبيه للمستخدم إذا لم يملأ جميع الحقول
    } else {
        alert("Order placed successfully!"); // عرض رسالة نجاح عند إكمال الطلب
        this.reset(); // إعادة تعيين النموذج بعد تقديم الطلب بنجاح
    }
});




