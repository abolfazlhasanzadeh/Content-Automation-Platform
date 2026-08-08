export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      content_post: {
        Row: {
          id: number
          slug: string
          title: string
          excerpt: string | null
          body: string[] | null
          category: string
          category_slug: string
          source: string | null
          url: string | null
          display_time: string | null
          status: "فوری" | "در انتظار تأیید" | "منتشر شده"
          is_lead: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: number
          slug: string
          title: string
          excerpt?: string | null
          body?: string[] | null
          category: string
          category_slug: string
          source?: string | null
          url?: string | null
          display_time?: string | null
          status?: "فوری" | "در انتظار تأیید" | "منتشر شده"
          is_lead?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: number
          slug?: string
          title?: string
          excerpt?: string | null
          body?: string[] | null
          category?: string
          category_slug?: string
          source?: string | null
          url?: string | null
          display_time?: string | null
          status?: "فوری" | "در انتظار تأیید" | "منتشر شده"
          is_lead?: boolean
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: Record<string, never>
    Functions: Record<string, never>
    Enums: Record<string, never>
  }
}
