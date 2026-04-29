
CREATE TABLE public.service_inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  client_name TEXT NOT NULL,
  client_email TEXT NOT NULL,
  book_title TEXT,
  book_genre TEXT,
  amazon_url TEXT,
  goodreads_url TEXT,
  selected_services JSONB NOT NULL DEFAULT '[]'::jsonb,
  total_estimate INTEGER NOT NULL DEFAULT 0,
  notes TEXT,
  status TEXT NOT NULL DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.service_inquiries ENABLE ROW LEVEL SECURITY;

-- Anyone (including anon) can submit an inquiry
CREATE POLICY "Anyone can submit an inquiry"
ON public.service_inquiries
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- No public read; admins will read via service role on the server.
-- Intentionally no SELECT/UPDATE/DELETE policies for anon/authenticated.
