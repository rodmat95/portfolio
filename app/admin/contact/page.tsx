import { createClient } from "@/utils/supabase/server"
import { ContactTable } from "@/components/admin/contact-table"

export default async function ContactPage() {
  const supabase = await createClient()
  const { data: messages } = await supabase
    .from("contact")
    .select("*")
    .order("created_at", { ascending: false })

  return <ContactTable messages={messages} />
}

