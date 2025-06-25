// src/components/NotionRenderer.tsx
import { NotionBlock } from './NotionBlock'
import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'

export const NotionRenderer = ({ blocks }: { blocks: BlockObjectResponse[] }) => {
  return (
    <div className='bg-white p-4 rounded-lg'>
      {blocks.length > 0 ? (
        blocks.map((block) => <NotionBlock key={block.id} block={block} />)
      ) : (
        <p className='text-gray-500'>No content available.</p>
      )}
    </div>
  )
}
