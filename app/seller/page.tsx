import { redirect } from 'next/navigation';

// /seller 접근 시 대시보드로 리다이렉트
export default function SellerRootPage() {
  redirect('/seller/dashboard');
}
