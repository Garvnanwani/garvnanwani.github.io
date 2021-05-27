export default function VideoCard({ id, snippet, statistics }) {
  return (
    <a
      className="w-full"
      href={`https://www.youtube.com/watch?v=${id}`}
      aria-label={snippet.title}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="w-full mb-8">
        <div className="flex flex-col justify-between md:flex-row">
          <h4 className="w-full mb-2 text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100">
            {snippet.title}
          </h4>
        </div>
        <p className="text-gray-600 dark:text-gray-400">
          {snippet.description.slice(0, 85) + '...'}
        </p>
      </div>
    </a>
  )
}
