import React, { createContext, useContext, useState } from 'react';

export interface SafariModalOptions {
  packageTitle?: string;
  destination?: string;
  duration?: string;
  initialStep?: number;
}

export interface PackageBookingData {
  title: string;
  price?: string;
  duration?: string;
  image?: string;
  destination?: string;
  category?: string;
  slug?: string;
}

interface CustomSafariModalContextType {
  isOpen: boolean;
  options: SafariModalOptions;
  openModal: (options?: SafariModalOptions) => void;
  closeModal: () => void;
  isBookingOpen: boolean;
  bookingData: PackageBookingData | null;
  openBookingModal: (data: PackageBookingData) => void;
  closeBookingModal: () => void;
}

const CustomSafariModalContext = createContext<CustomSafariModalContextType | undefined>(undefined);

export const CustomSafariModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<SafariModalOptions>({});

  // Direct Package Booking State
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingData, setBookingData] = useState<PackageBookingData | null>(null);

  const openModal = (opts: SafariModalOptions = {}) => {
    setOptions(opts);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setOptions({});
  };

  const openBookingModal = (data: PackageBookingData) => {
    setBookingData(data);
    setIsBookingOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingOpen(false);
    setBookingData(null);
  };

  return (
    <CustomSafariModalContext.Provider value={{ 
      isOpen, 
      options, 
      openModal, 
      closeModal,
      isBookingOpen,
      bookingData,
      openBookingModal,
      closeBookingModal
    }}>
      {children}
    </CustomSafariModalContext.Provider>
  );
};

export const useCustomSafariModal = () => {
  const context = useContext(CustomSafariModalContext);
  if (!context) {
    throw new Error('useCustomSafariModal must be used within a CustomSafariModalProvider');
  }
  return context;
};
