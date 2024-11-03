"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define the structure of form data
type FormData = {
  name: string;
  job: string;
  age: string;
  environment: number;
  mood: number;
  questions: number[];
  skills: number[];
  liftstyles: number[];
};

type FormContextType = {
  formData: FormData;
  setFormData: (data: FormData) => void;
};

// Create the context with an initial undefined value
const FormContext = createContext<FormContextType | undefined>(undefined);

type FormProviderProps = {
  children: ReactNode;
};

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  // Set a default value initially
  const [formData, setFormData] = useState<FormData>({
    name: '',
    job: '',
    age: '',
    environment: 0,
    mood: 0,
    questions: [],
    skills: [],
    liftstyles: [],
  });

  // Load saved data from localStorage after component mounts
  useEffect(() => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      // Reset mood, environment, and questions only
      setFormData({ ...parsedData, mood: 0, environment: 0, questions: [],skills: [],
        liftstyles: [], });
    }
  }, []);

  // Save formData to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

// Custom hook to use the FormContext
export const useForm = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useForm must be used within a FormProvider');
  }
  return context;
};
