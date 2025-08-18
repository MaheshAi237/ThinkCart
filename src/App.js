import './App.css';

const deals = [
  {
    id: 1,
    title: "Ticonderoga Wood-Cased Pencils, Pre-Sharpened, 2 HB Soft, Yellow, 12 Count",
    deal_url: "https://amzn.to/3Jq7BHv",
    image_url: "https://m.media-amazon.com/images/I/81GqVVIzKKL._AC_SX679_.jpg",
    price: 2.79
  },
  {
    id: 2,
    title: "AVERY Hi-Liter Desk-Style Highlighters, Smear Safe Ink, Chisel Tip, 12 Yellow Highlighters",
    deal_url: "https://amzn.to/3UAALGl",
    image_url: "https://m.media-amazon.com/images/I/71xMkaBKMBL._AC_SX679_.jpg",
    price: 10.99
  },
  {
    id: 3,
    title: "Pencil Pouch for 3 Ring Binder - Small Zipper Pen Case, Black Pencil Pouches for Boys Kids, School Supplies, 3 Hole Nylon Pencil Bag Accessories Clear Window Aesthetic Organizer",
    deal_url: "https://amzn.to/4oDKCJ1",
    image_url: "https://m.media-amazon.com/images/I/815pw+9hg1L._AC_SX679_.jpg",
    price: 5.99
  }
];

function DealCard({ deal }) {
  return (
    <a
      href={deal.deal_url}
      target="_blank"
      rel="nofollow sponsored noopener noreferrer"
      style={{
        display: 'block',
        margin: '20px',
        padding: '15px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        width: '250px',
        textDecoration: 'none',
        color: 'inherit'
      }}
    >
      <img
        src={deal.image_url}
        alt={deal.title}
        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '10px' }}
      />
      <h3 style={{ fontSize: '16px', marginBottom: '5px' }}>{deal.title}</h3>
      {deal.price && <p style={{ fontSize: '14px', color: '#333' }}>${deal.price}</p>}
    </a>
  );
}

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '32px', marginBottom: '10px' }}>Thinkcart</h1>
        <p style={{ fontSize: '14px', color: '#555' }}>
          Fresh Amazon deals. As an Amazon Associate, we earn from qualifying purchases.
        </p>
      </header>

      <main style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {deals.map(d => <DealCard key={d.id} deal={d} />)}
      </main>

      <footer style={{ textAlign: 'center', marginTop: '40px', fontSize: '12px', color: '#555' }}>
        © {new Date().getFullYear()} Thinkcart.ai
        <br />
        We may earn commission from affiliate links. We appreciate your support!
      </footer>
    </div>
  );
}

export default App;
