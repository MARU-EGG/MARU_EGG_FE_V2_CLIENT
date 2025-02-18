import { useEffect, useState } from 'react';
import { ADDMISSION, AdmissionType } from '@/types/admission-type';

export default function useAdmissionStatusMessage(statuses: Record<AdmissionType, boolean>) {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const activeCategories = Object.entries(statuses)
      .filter(([, status]) => status)
      .map(([admissionType]) => ADDMISSION[admissionType as AdmissionType]);

    if (!activeCategories.length) {
      setOpenSnackbar(true);
      setMessage(`현재는 모든 카테고리 이용이 불가능해요`);
    } else if (activeCategories.length && activeCategories.length !== 3) {
      setOpenSnackbar(true);
      setMessage(`현재는 ${activeCategories.join(',')} 카테고리만 이용 가능해요`);
    }
  }, [statuses]);

  const closeSnackbar = () => {
    setOpenSnackbar(false);
  };

  return { message, openSnackbar, closeSnackbar };
}
