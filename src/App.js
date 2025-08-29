import './App.css';

const deals = [
  { id: 1, title: "LPot Cover Spill Stopper Lid - Thicken Silicone Boil Over Spill Safeguard", deal_url: "https://amzn.to/465nE6q", image_url: "https://m.media-amazon.com/images/I/51YhqWRiECL._AC_SX679_.jpg", price: 9.99, original_price: 12.99 },
  { id: 2, title: "OhO Smart Glasses,Safety Glasses with Bluetooth Speaker", deal_url: "https://amzn.to/45Cdk5L", image_url: "https://m.media-amazon.com/images/I/51K46TL+nnL._AC_SX679_.jpg", price: 7.99, original_price: 68.99 },
  { id: 3, title: 'Kids Protective Gear Set, Knee and Elbow Pads with Wrist Guards', deal_url: 'https://amzn.to/4g8TWAX', image_url: 'https://m.media-amazon.com/images/I/81E+9YiFrUL._AC_SX679_.jpg', price: 9.99, original_price: 14.99 },
  { id: 4, title: "Kids Camera, HD Digital Instant Print Camera for Kids,", deal_url: "https://amzn.to/47LLpli", image_url: "https://m.media-amazon.com/images/I/813IKs4VmNL._AC_SX679_.jpg", price: 29.99, original_price: 159.99 },
  { id: 5, title: "2K Light Bulb Security Cameras Wireless Outdoor", deal_url: "https://amzn.to/3HTK5SU", image_url: "https://m.media-amazon.com/images/I/71pHPhUZ1ML._AC_SX679_.jpg", price: 17.99, original_price: 66.99 },
  { id: 6, title: "Binoculars for Adults, 12x42 Waterproof and Durable Binoculars with Multi-Coated Optics and Protective Rubber Armor", deal_url: "https://amzn.to/4mWxLA6", image_url: "https://m.media-amazon.com/images/I/81WpncCE+EL._AC_SX679_.jpg", price: 39.99, original_price: 159.99 },
  { id: 7, title: "Solar Security Cameras Wireless Outdoor 2K Battery Powered AI Motion Detection 2-Way Talk Color Night Vision WiFi Waterproof", deal_url: "https://amzn.to/3HJmLHw", image_url: "https://m.media-amazon.com/images/I/71SCaKZG9BL._AC_SY300_SX300_QL70_FMwebp_.jpg", price: 29.99, original_price: 119.99 },
  { id: 8, title: "APEXEL 10 Ring Light for Desk, Ring Light with Stand and Phone Holder, Overhead Camera Mount with C-Clamp", deal_url: "https://amzn.to/3HzD9ua", image_url: "https://m.media-amazon.com/images/I/71OCSVv-92L._AC_SX679_.jpg", price: 19.99, original_price: 39.99 },
  { id: 10, title: "10.1 Inch WiFi Digital Picture Frame, Send Photos or Videos Instantly from Anywhere Via APP", deal_url: "https://amzn.to/46aVmYb", image_url: "https://m.media-amazon.com/images/I/71MoW6noxZL._AC_SX466_.jpg", price: 39.99, original_price: 79.99 },
  { id: 11, title: "Q-See QSVRG100 UL Rated E475392 Shielded Video & Power 100 Ft BNC Male Cable with 2-Female Connectors", deal_url: "https://amzn.to/41rgfff", image_url: "https://m.media-amazon.com/images/I/81DPSDC3V6L._AC_SX679_.jpg", price: 7.99, original_price: 15.99 }
]
;

function DealCard({ deal }) {
  return (
    <div
      style={{
        margin: '20px',
        padding: '15px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        width: '250px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <img
        src={deal.image_url}
        alt={deal.title}
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderRadius: '8px',
          marginBottom: '10px'
        }}
      />
      <h3 style={{ fontSize: '16px', marginBottom: '5px' }}>{deal.title}</h3>

      {deal.original_price && deal.price ? (
        <p style={{ fontSize: '14px', color: '#333', marginBottom: '15px' }}>
          <span
            style={{
              textDecoration: 'line-through',
              color: '#888',
              marginRight: '8px'
            }}
          >
            ${deal.original_price.toFixed(2)}
          </span>
          <span style={{ fontWeight: 'bold', color: '#000' }}>
            ${deal.price.toFixed(2)}
          </span>
        </p>
      ) : (
        deal.price && (
          <p style={{ fontSize: '14px', color: '#333', marginBottom: '15px' }}>
            ${deal.price.toFixed(2)}
          </p>
        )
      )}

      <a
        href={deal.deal_url}
        target="_blank"
        rel="nofollow sponsored noopener noreferrer"
        style={{
          textAlign: 'center',
          padding: '10px 15px',
          backgroundColor: '#006400', // dark green
          color: '#fff',
          borderRadius: '5px',
          fontWeight: 'bold',
          textDecoration: 'none',
          transition: 'background 0.2s ease'
        }}
        onMouseOver={e => (e.target.style.backgroundColor = '#004d00')}
        onMouseOut={e => (e.target.style.backgroundColor = '#006400')}
      >
        View Deal
      </a>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '32px', marginBottom: '10px' }}>Thinkcart</h1>      
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
