from supabase import create_client
import os

SUPABASE_URL = os.getenv("https://vbuffgasrckvlxoilsec.supabase.co")
SUPABASE_KEY = os.getenv("sb_publishable_RfN-k0VZHztLhO-BFwtwtA_sUwv5rWR")

supabase = create_client(SUPABASE_URL, SUPABASE_KEY)
