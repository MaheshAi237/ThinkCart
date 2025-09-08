import './App.css';

const deals = [
  { id: 1, title: "TIME X Magic Grooved Writing Practice Books, Reusable Handwriting Practice Books, Groove Workbooks", deal_url: "https://amzn.to/41I3AVl", image_url: "https://m.media-amazon.com/images/I/91WJB9h6LiL._AC_SX679_.jpg", price: 37.99, original_price: 37.99 },
  { id: 2, title: "Kenneth Cole Womens Martha Heeled Sandal", deal_url: "https://amzn.to/4p5791K", image_url: "https://m.media-amazon.com/images/I/61zsQ3jtIWL._AC_SY695_.jpg", price: 23.1, original_price: 129 },
  { id: 3, title: "Upgrade Digital Camera, 56MP FHD 1080P Camera for Kids with 16x Zoom Anti Shake, Kid Camera with 32GB TF Card", deal_url: "https://amzn.to/4peGAYb", image_url: "https://m.media-amazon.com/images/I/91negF0A7XL._AC_SX679_.jpg", price: 28.99, original_price: 178.99 },
  { id: 4, title: "Construction Site: Garbage Crew to the Rescue! (Goodnight, Goodnight, Construc) Kindle Edition", deal_url: "https://amzn.to/4m1yoYn", image_url: "https://m.media-amazon.com/images/I/91EKz3QrDcL._SY342_.jpg", price: 1.99, original_price: 11.99 },
  { id: 5, title: "Car Vacuum, Portable Vacuum Cleaner with Powerful 7000PA Suction, DC 12V Power 16.4Ft", deal_url: "https://amzn.to/4lZ0ALg", image_url: "https://m.media-amazon.com/images/I/71oALnRR30L._AC_SX679_.jpg", price: 23.99, original_price: 119.99 },
  { id: 6, title: "Collagen and Colostrum Powder with Hyaluronic Acid, IgG & Probiotics | Grass-Fed Bovine Colostrum Supplement", deal_url: "https://amzn.to/4nfQCq7", image_url: "https://m.media-amazon.com/images/I/81e1QPXfZoL._AC_SX679_.jpg", price: 20.99, original_price: 104.99 },
  { id: 7, title: "Cordless Tire Inflator Portable Air Compressor, 150 PSI Air Pump with Rechargeable Battery,", deal_url: "https://amzn.to/3HKALkl", image_url: "https://m.media-amazon.com/images/I/719FXBcJAjL._AC_SX679_.jpg", price: 39.99, original_price: 199.99 },
  { id: 8, title: "adidas Mens Seattle Sounders MLS Short Sleeve T-Shirt", deal_url: "https://amzn.to/463PtL5", image_url: "https://m.media-amazon.com/images/I/71Datf3JuZL._AC_SY695_.jpg", price: 5.2, original_price: 40 },
  { id: 9, title: "Beard Trimmer for Men, 20 Length Settings, Waterproof Electric Razor for Men, Hair Trimmer, Nose Hair Trimmer, Cordless Hair Clippers, All-in-One Grooming Kit", deal_url: "https://amzn.to/3VCoQIk", image_url: "https://m.media-amazon.com/images/I/71rgM+UaXDL._AC_SX679_.jpg", price: 33.99, original_price: 169.99 },
  { id: 10, title: "Nine West Womens Matter Flat Sandal", deal_url: "https://amzn.to/4lVFUDZ", image_url: "https://m.media-amazon.com/images/I/61XvKZAYCBL._AC_SY625_.jpg", price: 18.1, original_price: 89 },
  { id: 11, title: "YouTheFan NCAA 2 x 3 Wood Cornhole Game with Logo Bags", deal_url: "https://amzn.to/45MF7Ay", image_url: "https://m.media-amazon.com/images/I/81v8XRO0-WL._AC_SX466_.jpg", price: 33.1, original_price: 179.99 },
  { id: 12, title: "Wireless Headset with Mic for Work with AI Noise Cancelling Mic for Clear Calls, Bluetooth V5.3 Headphones with Microphone to USB A/C Dongle & Mic Mute for Computer Laptop PC iPhone ", deal_url: "https://amzn.to/46dDxqy", image_url: "https://m.media-amazon.com/images/I/61q+D1Q9z2L._AC_SX679_.jpg", price: 39.99, original_price: 399.99 }
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
