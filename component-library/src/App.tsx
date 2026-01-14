import { useState } from 'react';
import { Input } from './components/Input/Input';
import { Toast, ToastContainer } from './components/Toast/Toast';
import { SidebarMenu, type MenuItem } from './components/SidebarMenu/Sidebar';
import { BarChart, Home, Package, Settings, Users } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems: MenuItem[] = [
    {
      id: '1',
      label: 'Dashboard',
      icon: <Home size={20} />,
    },
    {
      id: '2',
      label: 'Products',
      icon: <Package size={20} />,
      children: [
        {
          id: '2-1',
          label: 'All Products',
        },
        {
          id: '2-2',
          label: 'Categories',
        },
      ],
    },
    {
      id: '3',
      label: 'Users',
      icon: <Users size={20} />,
    },
    {
      id: '4',
      label: 'Reports',
      icon: <BarChart size={20} />,
    },
    {
      id: '5',
      label: 'Settings',
      icon: <Settings size={20} />,
    },
  ];

  return (
    <div>
      <button onClick={() => setIsMenuOpen(true)}>Open Menu</button>

      <SidebarMenu
        items={menuItems}
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        title="Navigation"
      />
    </div>
  );
}

export default App;
