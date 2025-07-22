// src/components/ToastProvider.jsx
import { Toaster, toast } from 'sonner';

export function showToast(msg) {
  toast(msg);
}

export default function ToastProvider() {
  return <Toaster />;
}
