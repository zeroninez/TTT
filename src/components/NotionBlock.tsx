// src/components/NotionBlock.tsx
import Image from 'next/image'
import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'

export const NotionBlock = ({ block }: { block: BlockObjectResponse }) => {
  const { type } = block

  switch (type) {
    case 'paragraph':
      return (
        <p className='text-lg text-gray-800 mb-4'>
          {block.paragraph.rich_text.map((text) => text.plain_text).join(' ')}
        </p>
      )

    case 'heading_1':
      return <h1 className='text-3xl font-bold my-4'>{block.heading_1.rich_text[0]?.plain_text}</h1>

    case 'heading_2':
      return <h2 className='text-2xl font-semibold my-3'>{block.heading_2.rich_text[0]?.plain_text}</h2>

    case 'heading_3':
      return <h3 className='text-xl font-semibold my-2'>{block.heading_3.rich_text[0]?.plain_text}</h3>

    case 'bulleted_list_item':
      return (
        <li className='list-disc ml-6 text-gray-700'>
          {block.bulleted_list_item.rich_text.map((text) => text.plain_text).join(' ')}
        </li>
      )

    case 'numbered_list_item':
      return (
        <li className='list-decimal ml-6 text-gray-700'>
          {block.numbered_list_item.rich_text.map((text) => text.plain_text).join(' ')}
        </li>
      )

    case 'quote':
      return (
        <blockquote className='border-l-4 border-gray-400 pl-4 italic text-gray-600'>
          {block.quote.rich_text.map((text) => text.plain_text).join(' ')}
        </blockquote>
      )

    case 'divider':
      return <hr className='my-6 border-gray-300' />

    case 'callout':
      return (
        <div className='p-4 border-l-4 border-blue-500 bg-blue-100 rounded-lg'>
          {block.callout.icon?.type === 'emoji' && <span className='mr-2'>{block.callout.icon.emoji}</span>}
          {block.callout.rich_text.map((text) => text.plain_text).join(' ')}
        </div>
      )

    case 'toggle':
      return (
        <details className='bg-gray-100 p-2 rounded-lg'>
          <summary className='font-semibold cursor-pointer'>
            {block.toggle.rich_text.map((text) => text.plain_text).join(' ')}
          </summary>
        </details>
      )

    case 'code':
      return (
        <pre className='bg-gray-900 text-white p-4 rounded-lg text-sm'>
          <code>{block.code.rich_text.map((text) => text.plain_text).join('\n')}</code>
        </pre>
      )

    case 'image':
      return (
        <div className='relative w-full h-fit my-4'>
          <img
            src={
              block.image.type === 'file'
                ? `https://zeroninez.notion.site/image/${encodeURIComponent(block.image.file.url)}?table=block&id=${block.id}&cache=v2`
                : block.image.external.url
            }
            alt='Notion Image'
            className='object-cover w-full h-full rounded-lg'
          />
        </div>
      )

    case 'video':
      return (
        <div className='relative w-full my-4'>
          <video controls className='w-full rounded-lg'>
            <source
              src={
                block.video.type === 'file'
                  ? `https://zeroninez.notion.site/video/${encodeURIComponent(block.video.file.url)}?table=block&id=${block.id}&cache=v2`
                  : block.video.external.url
              }
              type='video/mp4'
            />
          </video>
        </div>
      )

    case 'file':
      return (
        <a
          href={
            block.file.type === 'file'
              ? `https://zeroninez.notion.site/file/${encodeURIComponent(block.file.file.url)}?table=block&id=${block.id}&cache=v2`
              : block.file.external.url
          }
          download
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-500 underline'
        >
          Download File
        </a>
      )

    case 'embed':
      return (
        <iframe
          src={block.embed.url}
          className='w-full h-64 my-4 rounded-lg border border-gray-300'
          allowFullScreen
        ></iframe>
      )

    case 'table':
      return (
        <table className='w-full border-collapse border border-gray-300 my-4'>
          <tbody>
            {/* @ts-ignore */}
            {block.children.map((row, index) => (
              <tr key={index} className='border border-gray-300'>
                {row.table_row.cells.map((cell, cellIndex) => (
                  <td key={cellIndex} className='p-2 border border-gray-300'>
                    {cell.map((text) => text.plain_text).join(' ')}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )

    default:
      return null
  }
}
