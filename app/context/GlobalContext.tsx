"use client";
import React, { createContext, useContext, useState } from 'react';

// กำหนด type สำหรับข้อมูล global
interface GlobalContextType {
  formData: { name: string; age: number; job: string };
  setFormData: React.Dispatch<React.SetStateAction<{ name: string; age: number; job: string }>>;
}

// สร้าง Context
const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

// สร้าง Provider
export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState({ name: "", age: 0, job: "" });

  return (
    <GlobalContext.Provider value={{ formData, setFormData }}>
      {children}
    </GlobalContext.Provider>
  );
};

// สร้าง hook เพื่อใช้ Context
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};
