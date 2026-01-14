import { useState, type ChangeEvent } from 'react';
import { Eye, EyeOff, X } from 'lucide-react';
import styles from './Input.module.css';

export interface InputProps {
  type?: 'text' | 'password' | 'email' | 'number';
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  clearable?: boolean;
  disabled?: boolean;
  label?: string;
  className?: string;
}

export const Input = ({
  type = 'text',
  value = '',
  onChange,
  placeholder = '',
  clearable = false,
  disabled = false,
  label,
  className = '',
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [internalValue, setInternalValue] = useState(value);

  const inputType =
    type === 'password' && showPassword ? 'text' : type;

  const showClearButton =
    clearable && internalValue.length > 0 && !disabled;

  const showPasswordToggle =
    type === 'password' && !disabled;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInternalValue(newValue);
    onChange?.(newValue);
  };

  const handleClear = () => {
    setInternalValue('');
    onChange?.('');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <div className={`${styles.inputWrapper} ${className}`}>
      {label && (
        <label className={styles.label}>
          {label}
        </label>
      )}

      <div className={styles.inputContainer}>
        <input
          type={inputType}
          value={internalValue}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          className={styles.input}
        />

        <div className={styles.iconContainer}>
          {showPasswordToggle && (
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className={styles.iconButton}
              aria-label={
                showPassword ? 'Hide password' : 'Show password'
              }
            >
              {showPassword ? (
                <Eye size={20} />
              ) : (
                <EyeOff size={20} />
              )}
            </button>
          )}

          {showClearButton && (
            <button
              type="button"
              onClick={handleClear}
              className={styles.iconButton}
              aria-label="Clear input"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
