import './App.css';

const deals = [

{ id: 1, title: "BEDLORE Waterproof Mattress Protector, Queen Size Mattress Pad Noiseless with Deep Pocket 6-18 Depth, Soft Breathable Dirt-Proof Bed Mattress Cover Washable for Home, Bedroom, Hotel (Gray)", deal_url: "https://tinyurl.com/28f5znsm", image_url: "https://m.media-amazon.com/images/I/71+omVwPiXL._AC_SX679_.jpg", price: 23.99, original_price: 23.99 },
{ id: 2, title: "Bedsure White Duvet Cover Queen Size - 3 Pieces Prewashed Extra Soft Bedding Set, Includes 1 Duvet Cover 90x90 Inches with Zipper Closure & 2 Pillow Shams, Comforter Not Included", deal_url: "https://tinyurl.com/2afz4lb8", image_url: "https://m.media-amazon.com/images/I/81QF0RHosBL._AC_SX679_.jpg", price: 19.99, original_price: 19.99 },
{ id: 3, title: "Bissell CleanView Compact Upright Vacuum, Fits in Dorm Rooms & Apartments, Lightweight with Powerful Suction and Removable Extension Wand, 3508", deal_url: "https://tinyurl.com/252rjv4v", image_url: "https://m.media-amazon.com/images/I/61p-lLb7sTL._AC_SX679_.jpg", price: 53.99, original_price: 53.99 },
{ id: 4, title: "Jugbow Dog Shock Collar - 4200FT Dog Training Collar with Remote Innovative IPX7 Waterproof with 4 Training Modes, Rechargeable E-Collar for All Breeds", deal_url: "https://tinyurl.com/29t5srab", image_url: "https://m.media-amazon.com/images/I/81GrhcfEMeL._AC_SX679_.jpg", price: 37.79, original_price: 37.79 },
{ id: 5, title: "Like-New Blink Outdoor 4 (newest model), Wire-free smart security camera, two-year battery life, two-way audio, HD live view, enhanced motion detection, Works with Alexa – 2 camera system", deal_url: "https://tinyurl.com/28682zol", image_url: "https://m.media-amazon.com/images/I/61bDrz5jicL._SX425_.jpg", price: 74.99, original_price: 74.99 },
{ id: 6, title: "Momcozy Pregnancy Pillows for Sleeping, U Shaped Full Body Maternity Pillow with Removable Cover - Support for Back, Legs, Belly, HIPS for Pregnant Women, 57 Inch Pregnancy Pillow for Women, Grey", deal_url: "https://tinyurl.com/25rnb46b", image_url: "https://m.media-amazon.com/images/I/71zOHQc3x2L._SX569_.jpg", price: 38.24, original_price: 38.24 },
{ id: 7, title: "Novilla King Size Mattress, 12 Inch Gel Memory Foam King Mattress for Cool Night & Pressure Relief, Medium Plush Feel with Motion Isolating, Bliss", deal_url: "https://tinyurl.com/2dnrxrch", image_url: "https://m.media-amazon.com/images/I/71OFdvSnjdL._AC_SX569_.jpg", price: 309.41, original_price: 309.41 },
{ id: 8, title: "RUGPADUSA - Basics - 9x12 - 1/2 Thick - 100% Felt - Protective Cushioning Rug Pad - Safe for All Floors and Finishes Including Hardwoods", deal_url: "https://tinyurl.com/2bapm784", image_url: "https://m.media-amazon.com/images/I/91-2yYdd8AL._AC_SX679_.jpg", price: 139.94, original_price: 139.94 },
{ id: 9, title: "REPEL Windproof Travel Umbrella - Compact & Withstands Winds up to 85MPH , Strongest Premium Auto Folding Umbrella for Rain and Sun - Durable, Light & Portable for Women & Men , Fits Backpack & Cars", deal_url: "https://tinyurl.com/29ndc9sp", image_url: "https://m.media-amazon.com/images/I/71zIdlkvCYL._AC_SY500_.jpg", price: 19.99, original_price: 19.99 },
{ id: 10, title: "SNSLXH 5 Pack Stackable Closet Storage Basket, Multifunctional & Foldable Closet Organizer for Bathroom Kitchen Laundry Room Wardrobe Storage, Space-Saving Clothes Storage Drawer Organizer, White", deal_url: "https://tinyurl.com/2cq6d5st", image_url: "https://m.media-amazon.com/images/I/71SyPSqL6ML._AC_SX679_.jpg", price: 35.96, original_price: 35.96 },
{ id: 11, title: "Shark HD430 FlexStyle Air Styling & Drying System, Powerful Hair Dryer Brush & Multi-Styler with Auto-Wrap Curlers, Paddle Brush, Oval Brush, Concentrator Attachment, Stone", deal_url: "https://tinyurl.com/25q9fmzo", image_url: "https://m.media-amazon.com/images/I/71XnLIh6Q1L._SX425_.jpg", price: 249, original_price: 249 },
{ id: 12, title: "Micro Ingredients Vitamin D3 10,000 IU + K2 MK-7 200 mcg, 300 Softgels | Virgin Coconut Oil | 2-in-1 Bone, Immune & Heart Support | Easy to Swallow, Non-GMO", deal_url: "https://tinyurl.com/2d9pg5mt", image_url: "https://m.media-amazon.com/images/I/71gx5oPi4kL._AC_SX425_.jpg", price: 27.96, original_price: 27.96 },
{ id: 13, title: "REPEL Windproof Travel Umbrella - Compact & Withstands Winds up to 85MPH , Strongest Premium Auto Folding Umbrella for Rain and Sun - Durable, Light & Portable for Women & Men , Fits Backpack & Cars", deal_url: "https://tinyurl.com/24wpq5rx", image_url: "https://m.media-amazon.com/images/I/71L7PESzigL._AC_SY500_.jpg", price: 27.98, original_price: 27.98 },
{ id: 14, title: "Bedsure Khaki Duvet Cover Twin/Twin XL Size - 2 Pieces Prewashed Cotton-Like Extra Soft Bedding Set, Includes 1 Twin Duvet Cover 68x90 Inches with Zipper Closure & 1 Pillow Sham, No Comforter", deal_url: "https://tinyurl.com/26ajeg4z", image_url: "https://m.media-amazon.com/images/I/81pUmIEG+vL._AC_SX679_.jpg", price: 24.69, original_price: 24.69 },
{ id: 15, title: "Momcozy Pregnancy Pillows for Sleeping, U Shaped Full Body Pillow for Pregnancy Women with Removable Jersey Cotton Cover, 57 Inch Maternity Pillow, Grey", deal_url: "https://tinyurl.com/26cze2q9", image_url: "https://m.media-amazon.com/images/I/61dv7my2FGL._SX569_.jpg", price: 44.79, original_price: 44.79 },
{ id: 16, title: "Momcozy Pregnancy Pillows with Cooling Cover, U-Shaped Full Body Maternity Pillow for Side Sleepers 57 Inch - Support for Back, Hip, Belly, Legs for Pregnant Women", deal_url: "https://tinyurl.com/29bywfyz", image_url: "https://m.media-amazon.com/images/I/71tDxp7Ug+L._SX569_.jpg", price: 55.24, original_price: 55.24 },
{ id: 17, title: "Momcozy Pregnancy Pillows for Sleeping, U Shaped Full Body Maternity Pillow for Side Sleeping - Support for Back, Legs, Belly, HIPS, 57 Inch, Pink", deal_url: "https://tinyurl.com/285qcxr9", image_url: "https://m.media-amazon.com/images/I/71RYayGUFwL._SX569_.jpg", price: 47.59, original_price: 47.59 },
{ id: 18, title: "REPEL Windproof Travel Umbrella - Compact & Withstands Winds up to 85MPH , Strongest Premium Auto Folding Umbrella for Rain and Sun - Durable, Light & Portable for Women & Men , Fits Backpack & Cars", deal_url: "https://tinyurl.com/2cacvbzp", image_url: "https://m.media-amazon.com/images/I/61aTeMJDNZL._AC_SY500_.jpg", price: 37.99, original_price: 37.99 },
{ id: 19, title: "Momcozy U Shaped Pregnancy Pillows with Cotton Removable Cover, 57 Inch Full Body Pillow Maternity Support, Must Have for Pregnant Women, Hatha Grey", deal_url: "https://tinyurl.com/29nnlgbg", image_url: "https://m.media-amazon.com/images/I/717H161+-0L._SX569_.jpg", price: 44.79, original_price: 44.79 },
{ id: 20, title: "REPEL Windproof Travel Umbrella - Compact & Withstands Winds up to 85MPH , Strongest Premium Auto Folding Umbrella for Rain and Sun - Durable, Light & Portable for Women & Men , Fits Backpack & Cars", deal_url: "https://tinyurl.com/22gtky2h", image_url: "https://m.media-amazon.com/images/I/61iLMQF1a9L._AC_SY500_.jpg", price: 49.99, original_price: 49.99 },
{ id: 21, title: "REPEL Windproof Travel Umbrella - Compact & Withstands Winds up to 85MPH , Strongest Premium Auto Folding Umbrella for Rain and Sun - Durable, Light & Portable for Women & Men , Fits Backpack & Cars", deal_url: "https://tinyurl.com/27dcjt25", image_url: "https://m.media-amazon.com/images/I/61cnQrLx7SL._AC_SY500_.jpg", price: 67.98, original_price: 67.98 },
{ id: 22, title: "Bedsure Deep Beige Duvet Cover Twin/Twin XL Size - 2 Pieces Prewashed Cotton-Like Extra Soft Bedding Set, Includes 1 Twin Duvet Cover 68x90 Inches with Zipper Closure & 1 Pillow Sham, No Comforter", deal_url: "https://tinyurl.com/25yy7tqz", image_url: "https://m.media-amazon.com/images/I/81j6maJu+KL._AC_SX679_.jpg", price: 24.69, original_price: 24.69 },
{ id: 23, title: "Bedsure Brown Duvet Cover Twin/Twin XL Size - 2 Pieces Prewashed Cotton-Like Extra Soft Bedding Set, Includes 1 Twin Duvet Cover 68x90 Inches with Zipper Closure & 1 Pillow Sham, No Comforter", deal_url: "https://tinyurl.com/2bt7zy9c", image_url: "https://m.media-amazon.com/images/I/81PP0+XonTL._AC_SX679_.jpg", price: 27.99, original_price: 27.99 },
{ id: 24, title: "SNSLXH 5 Pack Stackable Closet Organizer Box, Multifunctional & Foldable Closet Storage Basket for Bathroom Kitchen Laundry Room Wardrobe Storage, Space-Saving Clothes Storage Drawer Organizer, Yellow", deal_url: "https://tinyurl.com/2xh58cnm", image_url: "https://m.media-amazon.com/images/I/81PASsfLVvL._AC_SX679_.jpg", price: 39.98, original_price: 39.98 },
{ id: 25, title: "SNSLXH 5 Pack Stackable Closet Organizer Box, Multifunctional & Foldable Closet Storage Basket for Bathroom Kitchen Laundry Room Wardrobe Storage, Space-Saving Clothes Storage Drawer Organizer, Green", deal_url: "https://tinyurl.com/22ozuj3n", image_url: "https://m.media-amazon.com/images/I/81OehORe9XL._AC_SX679_.jpg", price: 39.98, original_price: 39.98 },
{ id: 26, title: "SNSLXH 5 Pack Stackable Closet Organizer Box, Multifunctional & Foldable Closet Storage Basket for Bathroom Kitchen Laundry Room Wardrobe Storage, Space-Saving Clothes Storage Drawer Organizer, Pink", deal_url: "https://tinyurl.com/2855u97n", image_url: "https://m.media-amazon.com/images/I/81v-7+GGFkL._AC_SX679_.jpg", price: 39.98, original_price: 39.98 },
{ id: 27, title: "Bedsure Bright White Duvet Cover Twin/Twin XL Size - 2 Pieces Prewashed Cotton-Like Extra Soft Bedding Set, Includes 1 Twin Duvet Cover 68x90 Inches with Zipper Closure & 1 Pillow Sham, No Comforter", deal_url: "https://tinyurl.com/2b8fvrm5", image_url: "https://m.media-amazon.com/images/I/81pq3AhZGPL._AC_SX679_.jpg", price: 27.99, original_price: 27.99 },
{ id: 28, title: "Momcozy Pregnancy Pillows for Sleeping, U Shaped Full Body Pillow 57 Inch for Pregnant Women with Back, Hip, Leg, Belly Support, Washable Jersey Cotton Cover Included, Light Blue", deal_url: "https://tinyurl.com/27gu33fd", image_url: "https://m.media-amazon.com/images/I/61WCjzRNW+L._SX569_.jpg", price: 47.59, original_price: 47.59 },
{ id: 29, title: "REPEL Windproof Travel Umbrella - Compact & Withstands Winds up to 85MPH , Strongest Premium Auto Folding Umbrella for Rain and Sun - Durable, Light & Portable for Women & Men , Fits Backpack & Cars", deal_url: "https://tinyurl.com/23acrvco", image_url: "https://m.media-amazon.com/images/I/81mhlEuuYkL._AC_SY550_.jpg", price: 23.99, original_price: 23.99 },
{ id: 30, title: "Bedsure Skipper Blue Duvet Cover Twin/Twin XL Size - 2 Pieces Prewashed Cotton-Like Extra Soft Bedding Set, Includes 1 Twin Duvet Cover 68x90 Inches with Zipper Closure & 1 Pillow Sham, No Comforter", deal_url: "https://tinyurl.com/2c4radg5", image_url: "https://m.media-amazon.com/images/I/81nz2thkEcL._AC_SX679_.jpg", price: 21.99, original_price: 21.99 }
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
