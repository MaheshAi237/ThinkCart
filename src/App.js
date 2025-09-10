import './App.css';

const deals = [
  { id: 1, title: "2x6 Runner Rug for Bedroom: Fluffy Shag Soft Washable Rugs Small Fuzzy Plush Indoor Carpet for Hallway Bedside Dorm Kids Girls Boys Room", deal_url: "https://tinyurl.com/2aokx278", image_url: "https://m.media-amazon.com/images/I/91b37xW4j5L._AC_SX679_.jpg", price: 12.1, original_price: 20.1666666666667 },
{ id: 2, title: "TV Antenna for Smart TV, 2200+ Miles Range, Indoor/Outdoor Antenna for Local Channels, Supports 4K 1080p HD, Amplified Signal Booster, 33FT Coax Cable, Easy Installation", deal_url: "https://tinyurl.com/2b425js2", image_url: "https://m.media-amazon.com/images/I/71soWCyfpzL._AC_SX425_.jpg", price: 29.99, original_price: 49.9833333333333 },
{ id: 3, title: "Air Fryer, Beelicious 8-in-1 Smart Compact 4QT Air Fryers, with Viewing Window, Shake Reminder, 450°F Digital Airfryer with Flavor-Lock Tech, Dishwasher-Safe & Nonstick, Fit for 1-3 People, Avo Green", deal_url: "https://tinyurl.com/24mm77ds", image_url: "https://m.media-amazon.com/images/I/71YIwhqo7EL._AC_SX679_.jpg", price: 69.99, original_price: 116.65 },
{ id: 4, title: "Wireless Earbuds, Bluetooth 5.4 Headphones, ENC Noise Cancelling Mic Ear buds with Stereo Bass, 48H Playtime Earphones , LED Display, IP7 Waterproof In Ear EarBuds for Phone Android iOS Sports, Black", deal_url: "https://tinyurl.com/29duqasj", image_url: "https://m.media-amazon.com/images/I/719UoG3zl7L._AC_SX425_.jpg", price: 21.99, original_price: 36.65 },
{ id: 5, title: "3 in 1 Charging Station for iPhone, Magsafe Wireless Charger with Cooling Fan for iPhone 16 15 14 13 12 Series & Apple Watch Charger 10/Ultra 2, Wireless Charging Station for AirPods 4/3/Pro/Pro 2", deal_url: "https://tinyurl.com/2bhyze28", image_url: "https://m.media-amazon.com/images/I/71FiR8xax6L._AC_SX425_.jpg", price: 24.99, original_price: 41.65 },
{ id: 6, title: "6-Light Black Vanity Lights for Bathroom, Modern Bathroom Vanity Lighting Fixtures Over Mirror, Bathroom Light Fixtures for Bathroom Mirror, Living Room, Hallway, Vanity Table, E26 Base", deal_url: "https://tinyurl.com/23c32uj2", image_url: "https://m.media-amazon.com/images/I/61wcVX4J7XL._AC_SX679_.jpg", price: 54.18, original_price: 90.3 },
{ id: 7, title: "HOMORE Teal Green Rug 6x9 Feet, Large Fluffy Area Rugs for Living Room Modern Shag Rugs for Bedroom, Super Soft and Comfy Teal Carpet, Cute Carpets for Kids Nursery Girls Home", deal_url: "https://tinyurl.com/2yhws9d3", image_url: "https://m.media-amazon.com/images/I/81k67r1F+7L._AC_SX679_.jpg", price: 20.59, original_price: 34.3166666666667 },
{ id: 8, title: "Open Ear Headphones, Bluetooth 5.4 Wireless Earbuds, 50H, Air Conduction Ear buds, HD Stereo Bass Over Ear Earphones with Earhooks, Ultra-Comfort Secure Fit, IPX7 Waterproof Headset for Working Sports", deal_url: "https://tinyurl.com/28exble3", image_url: "https://m.media-amazon.com/images/I/71RaGS8RM9L._AC_SX425_.jpg", price: 35.99, original_price: 59.9833333333333 },
{ id: 9, title: "HolidayIdeas Outdoor Curtains for Patio Waterproof, 4 Panels - 54 x 108 Inch - Privacy Protection & Light Filtering Curtains Grommet Outside Curtains for Porch, Backyard (Mecca Orange)", deal_url: "https://tinyurl.com/2xhmjh6m", image_url: "https://m.media-amazon.com/images/I/81qD1MpBu6L._AC_SX425_PIbundle-4,TopRight,0,0_SH20_.jpg", price: 26.52, original_price: 44.2 },
{ id: 10, title: "2025 New Hydrogen Water Bottle, 2200PPB in 3Min, SPE PEM Tech, Portable 16OZ, Rechargeable Hydrogen Water Bottle for Travel, Home, Office – Gift for Family & Friends (Silver)", deal_url: "https://tinyurl.com/2d4y8zde", image_url: "https://m.media-amazon.com/images/I/81OV2tzRugL._AC_SX569_.jpg", price: 39.99, original_price: 66.65 },
{ id: 11, title: "JBL Bar 9.1 - Channel Soundbar System with Surround Speakers and Dolby Atmos, Black", deal_url: "https://tinyurl.com/223r783l", image_url: "https://m.media-amazon.com/images/I/41ei26NX5DL._AC_SX425_.jpg", price: 699.99, original_price: 1166.65 },
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
