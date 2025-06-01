export const fetchProductsByCategory = async (category) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 7000); 

  try {
    const res = await fetch(
      `https://dummyjson.com/products/category/${category}?limit=1000&skip=0`,
      { signal: controller.signal }
    );

    clearTimeout(timeoutId);

    if (!res.ok) throw new Error("Failed to fetch");
    const data = await res.json();
    return data.products;
  } catch (error) {
    if (error.name === "AbortError") {
      console.error(`⛔️ Timeout fetching category ${category}`);
    } else {
      console.error(`❌ Error fetching category ${category}:`, error);
    }
    return [];
  }
};
