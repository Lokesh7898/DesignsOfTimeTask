import ProductSlider from "@/components/ProductSlider";

export default function Home() {
  return (
    <main style={{ backgroundColor: '#fff' }}>
      <ProductSlider />
      
      {/* Scroll space for testing sticky header */}
      <div style={{ height: '100vh' }}></div>
    </main>
  );
}