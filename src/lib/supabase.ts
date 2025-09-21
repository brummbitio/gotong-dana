import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface Profile {
  id: string;
  full_name: string;
  phone_number?: string;
  profile_picture_url?: string;
  address?: string;
  ktp_number?: string;
  ktp_image_url?: string;
  selfie_image_url?: string;
  kyc_status: 'PENDING' | 'VERIFIED' | 'REJECTED';
  created_at: string;
  updated_at: string;
}

export interface Wallet {
  id: string;
  user_id: string;
  balance_pokok: number;
  balance_wajib: number;
  balance_sukarela: number;
  updated_at: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  short_description: string;
  full_description: string;
  category: 'AGRIBISNIS' | 'FNB' | 'TEKNOLOGI' | 'JASA' | 'LAINNYA';
  target_amount: number;
  current_amount: number;
  deadline: string;
  cover_image_url?: string;
  status: 'DRAFT' | 'FUNDING' | 'IN_PROGRESS' | 'COMPLETED' | 'FAILED';
  risk_level: 'RENDAH' | 'MENENGAH' | 'TINGGI';
  estimated_roi: string;
  contract_period: string;
  owner_id?: string;
  created_at: string;
  updated_at: string;
}

export interface Contribution {
  id: string;
  user_id: string;
  project_id: string;
  amount: number;
  status: 'PENDING' | 'SUCCESS' | 'FAILED';
  created_at: string;
  project?: Project;
}

export interface Transaction {
  id: string;
  user_id: string;
  amount: number;
  type: 'TOPUP_SUKARELA' | 'CONTRIBUTION_PAYMENT' | 'LOAN_PAYMENT' | 'SHU_DISTRIBUTION' | 'WITHDRAWAL';
  description: string;
  status: 'PENDING' | 'SUCCESS' | 'FAILED';
  midtrans_order_id?: string;
  created_at: string;
}