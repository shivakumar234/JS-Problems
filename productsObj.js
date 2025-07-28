const store = {
    products: [
        { name: "Laptop", category: "Electronics", price: 60000 },
        { name: "Shampoo", category: "Personal Care", price: 250 },
        { name: "Mobile", category: "Electronics", price: 20000 },
    ],

    addProduct(product) {
        if (product && product.name && product.category && typeof product.price === "number") {
            this.products.push(product);
            console.log(`✅ Product "${product.name}" added.`);
        } else {
            console.log("❌ Invalid product. Must have name, category, and price.");
        }
    },

    groupByCategory() {
        const grouped = {};

        this.products.forEach(product => {
            if (!grouped[product.category]) {
                grouped[product.category] = [];
            }
            grouped[product.category].push(product);
        });

        return grouped;
    }
};


store.addProduct({ name: "Toothpaste", category: "Personal Care", price: 100 });
store.addProduct({ name: "Table", category: "Furniture", price: 3000 });

console.log("📦 Grouped Products by Category:");
console.log(store.groupByCategory());
