// FormContext.tsx
"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';

// ประเภทข้อมูลของฟอร์ม
type FormData = {
  name: string;
  job: string;
  age: number;
};

type FormContextType = {
  formData: FormData;
  setFormData: (data: FormData) => void;
};

// สร้าง Context โดยมีค่าเริ่มต้น
const FormContext = createContext<FormContextType | undefined>(undefined);

type FormProviderProps = {
  children: ReactNode;
};

// สร้าง Provider เพื่อใช้ในแอป
export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    job: '',
    age: 0,
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

// ฟังก์ชันช่วยเรียกใช้งาน Context
export const useForm = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useForm must be used within a FormProvider');
  }
  return context;
};
