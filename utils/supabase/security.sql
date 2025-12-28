-- SECURITY CHECKLIST & SQL SETUP
-- Please run these SQL commands in your Supabase SQL Editor to secure your data.

-- 1. Enable Row Level Security (RLS)
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact ENABLE ROW LEVEL SECURITY;

-- 2. POLICIES FOR 'PROJECTS' TABLE

-- Allow public read access (Viewer)
CREATE POLICY "Public projects are viewable by everyone"
ON projects FOR SELECT
TO public
USING (true);

-- Allow authenticated (Admin) full access
-- Note: Ensure 'Enable Signup' is disabled in Supabase Auth settings 
-- OR use a restrictive email check here like: auth.jwt() ->> 'email' = 'your@email.com'
CREATE POLICY "Admins have full control over projects"
ON projects FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

-- 3. POLICIES FOR 'CONTACT' TABLE

-- Allow public to insert messages (Contact Form)
CREATE POLICY "Anyone can send contact messages"
ON contact FOR INSERT
TO public
WITH CHECK (true);

-- Allow admin to view messages
CREATE POLICY "Admins can view messages"
ON contact FOR SELECT
TO authenticated
USING (true);

-- Allow admin to delete messages
CREATE POLICY "Admins can delete messages"
ON contact FOR DELETE
TO authenticated
USING (true);

-- 4. POLICIES FOR STORAGE (Bucket 'portfolio')
-- Ensure you have created a public bucket named 'portfolio' in Supabase Storage

-- Allow public read access to files
-- Note: Policy needs to be applied to 'storage.objects'
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
TO public
USING ( bucket_id = 'portfolio' );

-- Allow authenticated (Admin) to upload files
CREATE POLICY "Admin Upload"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK ( bucket_id = 'portfolio' );

-- Allow authenticated (Admin) to update files
CREATE POLICY "Admin Update"
ON storage.objects FOR UPDATE
TO authenticated
USING ( bucket_id = 'portfolio' );

-- Allow authenticated (Admin) to delete files
CREATE POLICY "Admin Delete"
ON storage.objects FOR DELETE
TO authenticated
USING ( bucket_id = 'portfolio' );
