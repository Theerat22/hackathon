"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// ประเภทข้อมูลของฟอร์ม
type FormData = {
  name: string;
  job: string;
  age: number;
  environment: number;
  mood: number;
  questions: string[];
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

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>(() => {
    // ดึงข้อมูลจาก localStorage ถ้ามีค่าอยู่ในนั้น
    const savedData = localStorage.getItem('formData');
    return savedData ? JSON.parse(savedData) : {
      name: '',
      job: '',
      age: 0,
      environment: 0,
      mood: 0,
      questions: [],
    };
  });

  // บันทึกข้อมูลใน localStorage เมื่อ formData เปลี่ยนแปลง
  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

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
