import './App.css';

const deals = [
  {
    id: 1,
    title: "Noise-cancelling Headphones",
    deal_url: "https://amzn.to/4lkVOrb",
    image_url: "https://m.media-amazon.com/images/I/71hcXN4JaqL.jpg",
    price: 129.99
  },
  {
    id: 2,
    title: "4K Smart TV",
    deal_url: "https://www.amazon.com/dp/B07XXXXXX/?tag=yourtag-20",
    image_url: "https://images-na.ssl-images-amazon.com/images/I/yyyy.jpg",
    price: 299.99
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
