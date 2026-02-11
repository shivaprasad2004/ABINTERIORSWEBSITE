import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import DesignCard from '../components/DesignCard';

const content = {
  // Design Ideas
  'modular-kitchen-designs': {
    title: 'Modular Kitchen Designs',
    intro: 'Efficient kitchens tailored for South Indian cooking routines.',
    bullets: ['Soft‑close channels', 'BWP/BWR plywood', 'Spice pull‑outs and tall units'],
  },
  'wardrobe-designs': {
    title: 'Wardrobe Designs',
    intro: 'Smart wardrobes with lofts and internal organizers.',
    bullets: ['Sliding or hinged', 'Mirror and dresser options', 'Space‑savvy corners'],
  },
  'bathroom-designs': {
    title: 'Bathroom Designs',
    intro: 'Modern and hygienic bathroom solutions with premium fittings.',
    bullets: ['Anti-skid flooring', 'Glass shower partitions', 'Vanity units with storage'],
  },
  'master-bedroom-designs': {
    title: 'Master Bedroom Designs',
    intro: 'Calm bedrooms with practical layout and cosy textures.',
    bullets: ['Walk‑in wardrobes', 'Dressing corner', 'Balcony or window seating'],
  },
  'living-room-designs': {
    title: 'Living Room Designs',
    intro: 'Warm living areas for hosting and daily comfort.',
    bullets: ['Entertainment wall', 'Statement lighting', 'Hidden storage'],
  },
  'pooja-room-designs': {
    title: 'Pooja Room Designs',
    intro: 'Serene mandirs blending tradition and modern aesthetics.',
    bullets: ['CNC jaali patterns', 'Backlit panels', 'Drawer and shelf storage'],
  },
  'tv-unit-designs': {
    title: 'TV Unit Designs',
    intro: 'Clean and functional TV walls with hidden cable management.',
    bullets: ['Floating shelves', 'Closed storage', 'Textured back panels'],
  },
  'false-ceiling-designs': {
    title: 'False Ceiling Designs',
    intro: 'Ambient lighting and thermal comfort with sleek ceiling patterns.',
    bullets: ['POP or gypsum', 'LED cove lighting', 'Acoustic enhancement'],
  },
  'kids-bedroom-designs': {
    title: 'Kids Bedroom Designs',
    intro: 'Playful spaces with safe finishes and study areas.',
    bullets: ['Rounded edges', 'Writable boards', 'Toy and book storage'],
  },
  'balcony-designs': {
    title: 'Balcony Designs',
    intro: 'Compact balcony ideas for tea time and relaxation.',
    bullets: ['Weather‑resistant finishes', 'Planters and seating', 'Ambient lighting'],
  },
  'dining-room-designs': {
    title: 'Dining Room Designs',
    intro: 'Elegant dining spaces for family gatherings and feasts.',
    bullets: ['Crockery units', 'Statement pendant lights', 'Six to eight seater layouts'],
  },
  'foyer-designs': {
    title: 'Foyer Designs',
    intro: 'Welcoming entrance areas that make a great first impression.',
    bullets: ['Shoe racks with seating', 'Console tables', 'Decorative wall mirrors'],
  },
  'home-office-designs': {
    title: 'Home Office Designs',
    intro: 'Productive work-from-home setups with ergonomic design.',
    bullets: ['Floating desks', 'Overhead storage', 'Video-call friendly backgrounds'],
  },
  'guest-bedroom-designs': {
    title: 'Guest Bedroom Designs',
    intro: 'Comfortable retreats for your guests with essential amenities.',
    bullets: ['Compact wardrobes', 'Luggage racks', 'Neutral colour palettes'],
  },
  'window-designs': {
    title: 'Window Designs',
    intro: 'Stylish window treatments for light control and privacy.',
    bullets: ['Roman blinds', 'Sheer curtains', 'Window seating integration'],
  },
  'flooring-designs': {
    title: 'Flooring Designs',
    intro: 'Durable and aesthetic flooring options for every room.',
    bullets: ['Vitrified tiles', 'Wooden laminates', 'Italian marble'],
  },
  'wall-decor-designs': {
    title: 'Wall Decor Designs',
    intro: 'Artistic wall treatments to elevate your interiors.',
    bullets: ['Wall panelling', 'Gallery walls', 'Texture paint'],
  },
  'wall-paint-designs': {
    title: 'Wall Paint Designs',
    intro: 'Colour palettes that set the right mood for your home.',
    bullets: ['Royal play textures', 'Stencils', 'Accent walls'],
  },
  'home-wallpaper-designs': {
    title: 'Home Wallpaper Designs',
    intro: 'Instant makeovers with designer wallpapers.',
    bullets: ['Floral patterns', 'Geometric prints', '3D textures'],
  },
  'tile-designs': {
    title: 'Tile Designs',
    intro: 'Versatile tile options for kitchens, bathrooms, and more.',
    bullets: ['Moroccan patterns', 'Large format tiles', 'Mosaic highlights'],
  },
  'study-room-designs': {
    title: 'Study Room Designs',
    intro: 'Focused workspaces with ergonomic planning.',
    bullets: ['Task lighting', 'Cable management', 'File/storage systems'],
  },

  // Cities
  'hyderabad': { title: 'Interiors in Hyderabad', intro: 'Premium interior design services across Hyderabad.', bullets: ['Gachibowli', 'Jubilee Hills', 'Madhapur'] },
  'warangal': { title: 'Interiors in Warangal', intro: 'Bringing modern interiors to the historic city of Warangal.', bullets: ['Hanamkonda', 'Kazipet', 'Warangal City'] },
  'karimnagar': { title: 'Interiors in Karimnagar', intro: 'Luxury home interiors in Karimnagar.', bullets: [] },
  'khammam': { title: 'Interiors in Khammam', intro: 'Elegant designs for homes in Khammam.', bullets: [] },
  'nizamabad': { title: 'Interiors in Nizamabad', intro: 'Contemporary interiors for Nizamabad residences.', bullets: [] },
  'bangalore': { title: 'Interiors in Bangalore', intro: 'Serving the garden city with cutting-edge designs.', bullets: [] },
  'chennai': { title: 'Interiors in Chennai', intro: 'Coastal-inspired homes for Chennai living.', bullets: [] },
  'vijayawada': { title: 'Interiors in Vijayawada', intro: 'Modern interiors for the business capital.', bullets: [] },
  'visakhapatnam': { title: 'Interiors in Visakhapatnam', intro: 'Beachside luxury and modern comfort in Vizag.', bullets: [] },
  'guntur': { title: 'Interiors in Guntur', intro: 'Stylish and functional homes in Guntur.', bullets: [] },

  // Magazine (Generic Fallback)
  'room-ideas': { title: 'Room Ideas', intro: 'Inspiration for every room in your house.', bullets: ['Trends', 'Layouts', 'Themes'] },
  'decor-&-inspiration': { title: 'Decor & Inspiration', intro: 'Tips and tricks to beautify your space.', bullets: [] },
  'ceiling-design': { title: 'Ceiling Design Trends', intro: 'Latest trends in false ceiling designs.', bullets: [] },
  'furniture-ideas': { title: 'Furniture Ideas', intro: 'Choosing the right furniture for your home.', bullets: [] },
  'home-decor': { title: 'Home Decor', intro: 'Accessories that make a difference.', bullets: [] },
  'lighting-ideas': { title: 'Lighting Ideas', intro: 'Illuminate your home with style.', bullets: [] },
  'wall-design-ideas': { title: 'Wall Design Ideas', intro: 'Creative ways to dress up your walls.', bullets: [] },
  'expert-advice': { title: 'Expert Advice', intro: 'Insights from top interior designers.', bullets: [] },
  'interior-advice': { title: 'Interior Advice', intro: 'Practical tips for your interior journey.', bullets: [] },
  'vastu-tips': { title: 'Vastu Tips', intro: 'Harmonize your home with Vastu Shastra.', bullets: ['Directions', 'Colors', 'Placements'] },
  'home-organisation': { title: 'Home Organisation', intro: 'Declutter and organize your life.', bullets: [] },
  'materials-guide': { title: 'Materials Guide', intro: 'Understanding materials for your interiors.', bullets: ['Plywood types', 'Finishes', 'Fabrics'] },
  'home-renovation-ideas': { title: 'Home Renovation Ideas', intro: 'Transform your existing space.', bullets: [] },

  // More
  'careers': { title: 'Careers at AB Interiors', intro: 'Join our team of creative designers.', bullets: [] },
  'refer-a-friend': { title: 'Refer A Friend', intro: 'Refer and earn rewards.', bullets: [] },
  'policies': { title: 'Policies', intro: 'Terms and conditions.', bullets: [] },
};

const PageTemplate = () => {
  const { slug } = useParams();
  const data = content[slug] || { 
    title: slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()), 
    intro: 'Detailed content coming soon.', 
    bullets: [] 
  };

  const categoryKeywords = {
    'modular-kitchen-designs': 'modular,kitchen,interior',
    'wardrobe-designs': 'wardrobe,closet,interior',
    'bathroom-designs': 'bathroom,vanity,shower,interior',
    'master-bedroom-designs': 'master,bedroom,interior',
    'living-room-designs': 'living-room,sofa,interior',
    'pooja-room-designs': 'pooja,mandir,altar,hindu',
    'tv-unit-designs': 'tv-unit,media-wall,living',
    'false-ceiling-designs': 'false-ceiling,cove,lighting',
    'kids-bedroom-designs': 'kids,bedroom,study',
    'balcony-designs': 'balcony,terrace,outdoor,seating',
    'dining-room-designs': 'dining-room,table,interior',
    'foyer-designs': 'foyer,entryway,console',
    'home-office-designs': 'home-office,desk,workspace',
    'guest-bedroom-designs': 'guest,bedroom,interior',
    'window-designs': 'window,seating,curtains,blinds',
    'flooring-designs': 'flooring,wood,marble,tiles',
    'wall-decor-designs': 'wall,decor,panelling,art',
    'wall-paint-designs': 'wall,paint,accent,stencil',
    'home-wallpaper-designs': 'wallpaper,geometric,floral',
    'tile-designs': 'tiles,pattern,mosaic',
    'study-room-designs': 'study-room,desk,bookshelf',
  };

  const categoryQueries = {
    'modular-kitchen-designs': ['modular kitchen interior', 'kitchen island modern', 'white kitchen interior', 'wood kitchen interior'],
    'wardrobe-designs': ['wardrobe closet interior', 'walk in closet', 'hinged wardrobe', 'sliding wardrobe'],
    'bathroom-designs': ['bathroom interior', 'bathroom vanity', 'modern shower glass', 'bathroom tiles'],
    'master-bedroom-designs': ['master bedroom interior', 'luxury bedroom', 'modern bedroom design', 'wood bedroom interior'],
    'living-room-designs': ['living room interior', 'sofa living room', 'tv wall living room', 'modern living room'],
    'pooja-room-designs': ['pooja room', 'home mandir', 'hindu altar', 'jaali mandir'],
    'tv-unit-designs': ['tv unit living room', 'media wall interior', 'floating tv unit'],
    'false-ceiling-designs': ['false ceiling', 'cove lighting interior', 'gypsum ceiling'],
    'kids-bedroom-designs': ['kids bedroom interior', 'children room design', 'study area bedroom'],
    'balcony-designs': ['balcony interior', 'terrace seating', 'outdoor balcony plants'],
    'dining-room-designs': ['dining room interior', 'dining table setup', 'modern dining space'],
    'foyer-designs': ['foyer interior', 'entryway console', 'hallway decor'],
    'home-office-designs': ['home office interior', 'workspace desk', 'minimal office'],
    'guest-bedroom-designs': ['guest bedroom interior', 'guest room design', 'compact bedroom'],
    'window-designs': ['window seating', 'roman blinds', 'sheer curtains'],
    'flooring-designs': ['wood flooring interior', 'marble flooring', 'tile flooring interior'],
    'wall-decor-designs': ['wall decor interior', 'wall panelling', 'gallery wall'],
    'wall-paint-designs': ['accent wall paint', 'stencil wall', 'texture paint interior'],
    'home-wallpaper-designs': ['wallpaper interior', 'geometric wallpaper', 'floral wallpaper'],
    'tile-designs': ['tile design interior', 'mosaic tiles', 'pattern tiles'],
    'study-room-designs': ['study room interior', 'home library', 'study desk'],
  };

  const [items, setItems] = useState([]);

  // Verified high-quality fallback images to ensure no missing images even if API fails
  const fallbackImages = [
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1616594039964-40891a909d99?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1618219740975-d429804e8546?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=800&auto=format&fit=crop'
  ];

  useEffect(() => {
    let cancelled = false;
    const q = ((categoryKeywords[slug] || 'interior,design')).replace(/,/g, ' ');
    const key = import.meta.env.VITE_PEXELS_KEY;
    const build = (urls) => {
      const needed = 90;
      const pool = urls.length >= needed ? urls.slice(0, needed) : urls;
      const arr = [];
      for (let i = 0; i < 30; i++) {
        const imgs = [];
        for (let j = 0; j < 3; j++) {
          const idx = (i * 3 + j) % pool.length;
          imgs.push(pool[idx]);
        }
        arr.push({
          title: `${data.title} Idea ${i + 1}`,
          category: data.title,
          images: imgs,
        });
      }
      if (!cancelled) setItems(arr);
    };
    const fallback = () => {
      const urls = Array.from({ length: 120 }, (_, k) => fallbackImages[k % fallbackImages.length]);
      build(urls);
    };
    if (!key) {
      fallback();
      return () => { cancelled = true; };
    }
    const queries = categoryQueries[slug] || [q];
    const tasks = [];
    queries.forEach((qq, qi) => {
      tasks.push(fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(qq)}&per_page=50&orientation=landscape&page=1`, { headers: { Authorization: key } }));
      tasks.push(fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(qq)}&per_page=50&orientation=landscape&page=2`, { headers: { Authorization: key } }));
    });
    Promise.all(tasks)
      .then(async (resps) => {
        const all = [];
        for (const r of resps) {
          const j = await r.json().catch(() => ({ photos: [] }));
          (j.photos || []).forEach((p) => {
            const u = p?.src?.landscape || p?.src?.large || p?.src?.medium;
            if (u) all.push(u);
          });
        }
        const uniq = Array.from(new Set(all));
        const pool = uniq.length ? uniq : Array.from({ length: 120 }, (_, k) => fallbackImages[k % fallbackImages.length]);
        build(pool);
      })
      .catch(() => {
        fallback();
      });
    return () => { cancelled = true; };
  }, [slug, data.title]);

  return (
    <section className="py-24 bg-neutral-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-6">{data.title}</h1>
          <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{data.intro}</p>
        </div>
        
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold mb-6 text-brand-dark">Key Highlights</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {data.bullets.map((b, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="mt-1.5 w-2 h-2 rounded-full bg-brand-orange flex-shrink-0"></div>
                <span className="text-gray-700 text-lg">{b}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <DesignCard key={idx} title={it.title} category={it.category} images={it.images} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-dark text-white rounded-sm hover:bg-brand-orange">
            Get a Quick Estimate <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PageTemplate;
