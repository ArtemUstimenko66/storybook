import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { SidebarMenu, type MenuItem } from '../components/SidebarMenu';
import { 
  Home,          
  Package,        
  Users,          
  BarChart3,      
  Settings,       
} from 'lucide-react';

const Sidebar = ({ items, title }: { items: MenuItem[]; title?: string }) => {
  const [isOpen, setIsOpen] = useState(true);
  
  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <button
        onClick={() => setIsOpen(true)}
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          padding: '10px 20px',
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: '500',
          zIndex: 10,
        }}
      >
        Open Menu
      </button>
      
      <SidebarMenu
        items={items}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={title}
      />
    </div>
  );
};

const meta: Meta<typeof SidebarMenu> = {
  title: 'Components/SidebarMenu',
  component: SidebarMenu,
  
  parameters: {
    layout: 'fullscreen',
  },
  
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  render: () => {
    const items: MenuItem[] = [
      {
        id: '1',
        label: 'Dashboard',
        icon: <Home size={20} />,  
        onClick: () => console.log('Dashboard clicked'),
      },
      {
        id: '2',
        label: 'Products',
        icon: <Package size={20} />,
        onClick: () => console.log('Products clicked'),
      },
      {
        id: '3',
        label: 'Users',
        icon: <Users size={20} />,
        onClick: () => console.log('Users clicked'),
      },
      {
        id: '4',
        label: 'Reports',
        icon: <BarChart3 size={20} />,
        onClick: () => console.log('Reports clicked'),
      },
      {
        id: '5',
        label: 'Settings',
        icon: <Settings size={20} />,
        onClick: () => console.log('Settings clicked'),
      },
    ];
    
    return <Sidebar items={items} title="Navigation" />;
  },
};

export const WithSubmenu: Story = {
  render: () => {
    const items: MenuItem[] = [
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
            onClick: () => console.log('All Products'),
          },
          {
            id: '2-2',
            label: 'Add New',
            onClick: () => console.log('Add New'),
          },
          {
            id: '2-3',
            label: 'Categories',
            onClick: () => console.log('Categories'),
          },
        ],
      },
      {
        id: '3',
        label: 'Users',
        icon: <Users size={20} />,
        children: [
          {
            id: '3-1',
            label: 'All Users',
          },
          {
            id: '3-2',
            label: 'Roles',
          },
        ],
      },
      {
        id: '4',
        label: 'Settings',
        icon: <Settings size={20} />,
      },
    ];
    
    return <Sidebar items={items} title="Navigation" />;
  },
};

export const DeepNested: Story = {
  render: () => {
    const items: MenuItem[] = [
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
            children: [
              {
                id: '2-2-1',
                label: 'Electronics',
                onClick: () => console.log('Electronics'),
              },
              {
                id: '2-2-2',
                label: 'Clothing',
                onClick: () => console.log('Clothing'),
              },
              {
                id: '2-2-3',
                label: 'Food & Beverage',
                onClick: () => console.log('Food & Beverage'),
              },
            ],
          },
          {
            id: '2-3',
            label: 'Inventory',
            children: [
              {
                id: '2-3-1',
                label: 'Stock Levels',
              },
              {
                id: '2-3-2',
                label: 'Orders',
              },
            ],
          },
        ],
      },
      {
        id: '3',
        label: 'Reports',
        icon: <BarChart3 size={20} />,
        children: [
          {
            id: '3-1',
            label: 'Sales',
            children: [
              {
                id: '3-1-1',
                label: 'Daily',
              },
              {
                id: '3-1-2',
                label: 'Monthly',
              },
              {
                id: '3-1-3',
                label: 'Yearly',
              },
            ],
          },
          {
            id: '3-2',
            label: 'Analytics',
          },
        ],
      },
      {
        id: '4',
        label: 'Settings',
        icon: <Settings size={20} />,
      },
    ];
    
    return <Sidebar items={items} title="Advanced Navigation" />;
  },
};

export const WithoutIcons: Story = {
  render: () => {
    const items: MenuItem[] = [
      {
        id: '1',
        label: 'Home',
      },
      {
        id: '2',
        label: 'About',
        children: [
          {
            id: '2-1',
            label: 'Our Team',
          },
          {
            id: '2-2',
            label: 'History',
          },
        ],
      },
      {
        id: '3',
        label: 'Services',
        children: [
          {
            id: '3-1',
            label: 'Consulting',
          },
          {
            id: '3-2',
            label: 'Development',
          },
          {
            id: '3-3',
            label: 'Design',
          },
        ],
      },
      {
        id: '4',
        label: 'Contact',
      },
    ];
    
    return <Sidebar items={items} title="Menu" />;
  },
};

export const LongMenu: Story = {
  render: () => {
    const items: MenuItem[] = [
      { id: '1', label: 'Item 1', icon: <Home size={20} /> },
      { id: '2', label: 'Item 2', icon: <Package size={20} /> },
      { id: '3', label: 'Item 3', icon: <Users size={20} /> },
      { id: '4', label: 'Item 4', icon: <BarChart3 size={20} /> },
      { id: '5', label: 'Item 5', icon: <Settings size={20} /> },
      { id: '6', label: 'Item 6', icon: <Home size={20} /> },
      { id: '7', label: 'Item 7', icon: <Package size={20} /> },
      { id: '8', label: 'Item 8', icon: <Users size={20} /> },
      { id: '9', label: 'Item 9', icon: <BarChart3 size={20} /> },
      { id: '10', label: 'Item 10', icon: <Settings size={20} /> },
      { id: '11', label: 'Item 11', icon: <Home size={20} /> },
      { id: '12', label: 'Item 12', icon: <Package size={20} /> },
      { id: '13', label: 'Item 13', icon: <Users size={20} /> },
      { id: '14', label: 'Item 14', icon: <BarChart3 size={20} /> },
      { id: '15', label: 'Item 15', icon: <Settings size={20} /> },
    ];
    
    return <Sidebar items={items} title="Long Menu" />;
  },
};