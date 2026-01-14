import { useState, type ReactNode } from 'react';
import { ChevronDown, X } from 'lucide-react';
import styles from './Sidebar.module.css';

export interface MenuItem {
  id: string;
  label: string;
  icon?: ReactNode;
  children?: MenuItem[];
  onClick?: () => void;
}

export interface SidebarMenuProps {
  items: MenuItem[];
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export const SidebarMenu = ({
  items,
  isOpen,
  onClose,
  title = 'Menu',
}: SidebarMenuProps) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpand = (itemId: string) => {
    setExpandedItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  const isExpanded = (id: string) => expandedItems.includes(id);

  const renderMenuItem = (item: MenuItem, level = 0) => {
    const hasChildren = !!item.children?.length;
    const expanded = isExpanded(item.id);

    return (
      <div key={item.id} className={styles.menuItem}>
        <button
          className={`${styles.menuButton} ${styles[`level${level}`]}`}
          onClick={() => {
            if (hasChildren) toggleExpand(item.id);
            item.onClick?.();
          }}
        >
          {item.icon && (
            <span className={styles.icon}>
              {item.icon}
            </span>
          )}

          <span className={styles.label}>
            {item.label}
          </span>

          {hasChildren && (
            <span
              className={`${styles.arrow} ${
                expanded ? styles.arrowExpanded : ''
              }`}
            >
              <ChevronDown size={16} />
            </span>
          )}
        </button>

        {hasChildren && (
          <div
            className={`${styles.submenu} ${
              expanded ? styles.submenuExpanded : ''
            }`}
          >
            {item.children!.map((child) =>
              renderMenuItem(child, level + 1)
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <div
        className={`${styles.overlay} ${
          isOpen ? styles.overlayVisible : ''
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className={`${styles.sidebar} ${
          isOpen ? styles.sidebarOpen : ''
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>

          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className={styles.nav}>
          {items.map((item) => renderMenuItem(item, 0))}
        </nav>
      </div>
    </>
  );
};
