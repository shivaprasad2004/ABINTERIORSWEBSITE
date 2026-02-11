import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();

  const handleDropdownEnter = (name) => {
    setActiveDropdown(name);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const menuItems = [
    {
      name: 'Design Ideas',
      type: 'dropdown',
      items: [
        ['Modular Kitchen Designs', 'Wardrobe Designs', 'Bathroom Designs', 'Master Bedroom Designs', 'Living Room Designs', 'Pooja Room Designs', 'TV Unit Designs'],
        ['False Ceiling Designs', 'Kids Bedroom Designs', 'Balcony Designs', 'Dining Room Designs', 'Foyer Designs', 'Home Office Designs', 'Guest Bedroom Designs'],
        ['Window Designs', 'Flooring Designs', 'Wall Decor Designs', 'Wall Paint Designs', 'Home Wallpaper Designs', 'Tile Designs', 'Study Room Designs']
      ]
    },
    {
      name: 'Magazine',
      type: 'dropdown',
      items: [
        ['Room Ideas', 'Decor & Inspiration', 'Ceiling Design', 'Furniture Ideas', 'Home Decor'],
        ['Lighting Ideas', 'Wall Design Ideas', 'Expert Advice', 'Interior Advice', 'Vastu Tips'],
        ['Home Organisation', 'Materials Guide', 'Home Renovation Ideas']
      ]
    },
    {
      name: 'Cities',
      type: 'dropdown',
      items: [
        ['Hyderabad', 'Warangal', 'Karimnagar', 'Khammam', 'Nizamabad'],
        ['Bangalore', 'Chennai', 'Vijayawada', 'Visakhapatnam', 'Guntur']
      ]
    },
    { name: 'Projects', to: '/projects', type: 'link' },
    { name: 'Store Locator', to: '/contact', type: 'link', highlight: true },
    {
      name: 'More',
      type: 'dropdown',
      items: [
        ['About Us', 'Contact Us', 'Careers', 'Refer A Friend', 'Policies']
      ]
    }
  ];

  const getPath = (menuName, itemName) => {
    const slug = itemName.toLowerCase().replace(/\s+/g, '-');
    if (menuName === 'More') {
      if (itemName === 'About Us') return '/about';
      if (itemName === 'Contact Us') return '/contact';
      return `/more/${slug}`;
    }
    const base = menuName.toLowerCase().replace(/\s+/g, '-');
    return `/${base}/${slug}`;
  };

  return (
    <nav className="fixed w-full z-50 bg-black/95 backdrop-blur-sm text-white border-b border-brand-orange/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => navigate('/')}>
            <span className="text-2xl font-serif font-bold tracking-wider">
              <span className="text-white">AB</span> <span className="text-brand-orange">Interiors</span>
            </span>
          </div>
          
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-6">
              {menuItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group h-20 flex items-center"
                  onMouseEnter={() => item.type === 'dropdown' && handleDropdownEnter(item.name)}
                  onMouseLeave={handleDropdownLeave}
                >
                  {item.type === 'link' ? (
                    <Link
                      to={item.to}
                      className={`flex items-center gap-1 hover:text-brand-orange transition-colors duration-300 text-sm font-medium uppercase tracking-wide ${
                        item.highlight ? 'text-brand-orange border-b-2 border-brand-orange pb-1' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      className={`flex items-center gap-1 hover:text-brand-orange transition-colors duration-300 text-sm font-medium uppercase tracking-wide ${
                        activeDropdown === item.name ? 'text-brand-orange' : ''
                      }`}
                    >
                      {item.name} <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                  )}

                  {/* Dropdown Menu */}
                  {item.type === 'dropdown' && activeDropdown === item.name && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white text-gray-800 shadow-xl rounded-b-lg border-t-2 border-brand-orange min-w-[600px] p-6 grid grid-cols-3 gap-8 animate-in fade-in slide-in-from-top-2 duration-200">
                      {item.items.map((column, colIdx) => (
                        <div key={colIdx} className="flex flex-col gap-3">
                          {column.map((subItem) => (
                            <Link
                              key={subItem}
                              to={getPath(item.name, subItem)}
                              className="text-sm hover:text-brand-orange transition-colors hover:translate-x-1 duration-200"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {subItem}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-black border-t border-gray-800 max-h-[80vh] overflow-y-auto">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <div key={item.name}>
                {item.type === 'link' ? (
                  <Link
                    to={item.to}
                    className="block px-3 py-2 rounded-md text-base font-medium hover:text-brand-orange"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <div className="px-3 py-2">
                    <div className="text-brand-orange font-medium mb-2">{item.name}</div>
                    <div className="pl-4 space-y-2 border-l border-gray-700">
                      {item.items.flat().map((subItem) => (
                        <Link
                          key={subItem}
                          to={getPath(item.name, subItem)}
                          className="block text-sm text-gray-400 hover:text-white"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
