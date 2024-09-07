import React, { createContext, useState } from "react";

// FormDataContext 생성
export const FormDataContext = createContext();

// FormDataProvider 컴포넌트
export const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState(null); // 전역 상태로 관리할 formData

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};
