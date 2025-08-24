import './App.css';

const deals = [
  { id: 1, title: "LOVEVOOK Laptop Bag for Women, 15.6 inch Laptop Tote Bag", deal_url: "https://amzn.to/4fRWuDw", image_url: "https://m.media-amazon.com/images/I/71dcPb8iZGL._AC_SX679_.jpg", price: 35.99, original_price: 42.99 },
  { id: 2, title: "Lined Spiral Journal Notebook for Women & Men Notebook", deal_url: "https://amzn.to/47bPkHP", image_url: "https://m.media-amazon.com/images/I/61nJOjSLjbL._AC_SX679_.jpg", price: 5.94, original_price: 6.99 },
  { id: 3, title: "Wireless Earbuds, 2025 Bluetooth 5.4 Headphones 3D Bass Hi-Fi Stereo Ear Buds", deal_url: "https://amzn.to/4fUpj24", image_url: "https://m.media-amazon.com/images/I/71Y-9WdKq6L._AC_SX679_.jpg", price: 19.99, original_price: 159.99 },
  { id: 4, title: "MIULEE 2 Panels Navy Blue Sheer Window Curtains Elegant Window Voile", deal_url: "https://amzn.to/45SXPFy", image_url: "https://m.media-amazon.com/images/I/71Q+D8YIAXL._AC_SX679_.jpg", price: 6.49, original_price: 12.99 },
  { id: 5, title: "Thermometer for Adults and Kids, Fast Accurate Baby Thermometer, Fever Alarm", deal_url: "https://amzn.to/4lIxwYu", image_url: "https://m.media-amazon.com/images/I/519GodyK7HL._SX466_.jpg", price: 13.59, original_price: 26.99 },
  { id: 6, title: "Handheld Portable Turbo Fan with Ice Cooler, Speed (1-199) 5500mAh Rechargeable Personal Fan", deal_url: "https://amzn.to/477hRhK", image_url: "https://m.media-amazon.com/images/I/717uAxOKruL._AC_SX679_.jpg", price: 15.38, original_price: 29.99 },
  { id: 7, title: "School Backpack,Unisex Classic Bookbag Teens Schoolbag with USB Port", deal_url: "https://amzn.to/4771v8T", image_url: "https://m.media-amazon.com/images/I/61AgDdrttBL._AC_SX679_.jpg", price: 13.99, original_price: 44.99 },
  { id: 8, title: "Monocular-Telescope 80x100 High Powered Monoculars High Definition for Adults High Powered", deal_url: "https://amzn.to/4oQCi8Y", image_url: "https://m.media-amazon.com/images/I/813W-QYw3rL._AC_SX679_.jpg", price: 18.98, original_price: 59.99 },
  { id: 9, title: "a.Jesdani Women's Button Down Crew Neck Long Sleeve Soft Knit Cardigan Sweaters", deal_url: "https://amzn.to/3JPm140", image_url: "https://m.media-amazon.com/images/I/710JOTwLAYS._AC_SX569_.jpg", price: 9.49, original_price: 17.99 },
  { id: 10, title: "Metal Bird Feeder for Outdoors Hanging,2-in-1 Wild Bird Seed Hummingbird Feeder", deal_url: "https://amzn.to/4mqkoIF", image_url: "https://m.media-amazon.com/images/I/71+OtnOnHAL._AC_SX679_.jpg", price: 14.99, original_price: 64.28 },
  { id: 11, title: "Fuzzy Slippers for Women with Memory Foam Warm Winter Suede House Slippers", deal_url: "https://amzn.to/4mxLU7a", image_url: "https://m.media-amazon.com/images/I/71pPkzC3iVL._AC_SY625_.jpg", price: 9.99, original_price: 32.99 },
  { id: 12, title: "Stainless Steel Slim Band Suitable for Apple Watch", deal_url: "https://amzn.to/4fQ2IDL", image_url: "https://m.media-amazon.com/images/I/71a7t2XK2AL._AC_SY625_.jpg", price: 10.99, original_price: 29.99 },
  { id: 13, title: "Wireless Mag-Safe Charger for iPhone: 3-in-1 Charging Station for Multiple Devices Apple", deal_url: "https://amzn.to/4mWQn32", image_url: "https://m.media-amazon.com/images/I/61ytTCVCUTL._AC_SX679_.jpg", price: 19.07, original_price: 49.99 },
  { id: 14, title: "DJI Mic Mini (2 TX + 1 RX + Charging Case), Wireless Lavalier Microphone for iPhone", deal_url: "https://amzn.to/3HOPxq3", image_url: "https://m.media-amazon.com/images/I/6132m-fHnjL._AC_SX679_.jpg", price: 136, original_price: 169 },
  { id: 15, title: "AMD Ryzen™ 9 9950X 16-Core, 32-Thread Unlocked Desktop Processor", deal_url: "https://amzn.to/47726HF", image_url: "https://m.media-amazon.com/images/I/61dukbEGziL._AC_SX679_.jpg", price: 531, original_price: 649 },
  { id: 16, title: "Ice Cream Maker Attachment for KitchenAid Stand Mixer, Ice Cream Bowl", deal_url: "https://amzn.to/4mYchD5", image_url: "https://m.media-amazon.com/images/I/71mqK-TJzXL._AC_SX679_.jpg", price: 39.98, original_price: 49.99 },
  { id: 17, title: "KEOUKE Rotary Cheese Grater Hand Crank Transparent - Shredder Slicer Grinder 3 Stainless", deal_url: "https://amzn.to/45vdlII", image_url: "https://m.media-amazon.com/images/I/61fXO0-4Z9L._AC_SX679_.jpg", price: 17.99, original_price: 19.99 },
  { id: 18, title: "Schleich Bayala - 3 PC Fairy Toys Set - Eyela and Unicorn Figure Playset", deal_url: "https://amzn.to/41o5MB3", image_url: "https://m.media-amazon.com/images/I/81IyoH0bgpL._AC_SX679_.jpg", price: 14.6, original_price: 24.99 },
  { id: 19, title: "Tommy Hilfiger Boys' Short Sleeve Premium Pique Polo Shirt, Button Closure, Soft & Comfortable", deal_url: "https://amzn.to/3VfBxsx", image_url: "https://m.media-amazon.com/images/I/71ylWeHaS8L._AC_SX679_.jpg", price: 13, original_price: 34.5 },
  { id: 20, title: "Furinno Simple Design End/SideTable, 1-Pack, French Oak Grey/Black", deal_url: "https://amzn.to/4mT106N", image_url: "https://m.media-amazon.com/images/I/61fteDcb7ML._AC_SX679_.jpg", price: 20.25, original_price: 34.99 }
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
