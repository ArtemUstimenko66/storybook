import { useEffect, useState, type JSX, type ReactNode } from 'react';
import {
  CheckCircle,
  XCircle,
  AlertTriangle,
  Info,
  X,
} from 'lucide-react';
import styles from './Toast.module.css';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

export interface ToastProps {
  message: string;
  type?: ToastType;
  duration?: number;
  onClose?: () => void;
  showCloseButton?: boolean;
  isVisible?: boolean;
}

export const Toast = ({
  message,
  type = 'info',
  duration = 3000,
  onClose,
  showCloseButton = true,
  isVisible = true,
}: ToastProps) => {
  const [visible, setVisible] = useState(isVisible);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (!visible) return;

    const timer = setTimeout(handleClose, duration);
    return () => clearTimeout(timer);
  }, [visible, duration]);

  const handleClose = () => {
    setIsAnimating(false);

    setTimeout(() => {
      setVisible(false);
      onClose?.();
    }, 300);
  };

  const iconMap: Record<ToastType, JSX.Element> = {
    success: <CheckCircle size={20} />,
    error: <XCircle size={20} />,
    warning: <AlertTriangle size={20} />,
    info: <Info size={20} />,
  };

  if (!visible) return null;

  return (
    <div
      className={`${styles.toast} ${styles[type]} ${
        !isAnimating ? styles.hide : ''
      }`}
    >
      <div className={styles.icon}>
        {iconMap[type]}
      </div>

      <div className={styles.message}>
        {message}
      </div>

      {showCloseButton && (
        <button
          onClick={handleClose}
          className={styles.closeButton}
          aria-label="Close notification"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
};

export const ToastContainer = ({ children }: { children: ReactNode }) => {
  return <div className={styles.toastContainer}>{children}</div>;
};
