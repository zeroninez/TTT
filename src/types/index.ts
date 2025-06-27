//@/types/index.ts

// ✅ Item 타입 정의
export interface Item {
  id: string
  properties: {
    slug?: { rich_text: { plain_text: string }[] }
    thumbnail?: { files: { file: { url: string } }[] }
    title?: { title: { plain_text: string }[] }
    subtitle?: { rich_text: { plain_text: string }[] }
    description?: { rich_text: { plain_text: string }[] }
    category?: { select: { name: string } }
    tag?: { multi_select: { name: string }[] }
    createdTime?: { created_time: string }
    lastEditedTime?: { last_edited_time: string }
    recommended?: { checkbox: boolean }
  }
}
