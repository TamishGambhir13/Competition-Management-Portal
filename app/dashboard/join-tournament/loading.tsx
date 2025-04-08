export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[60vh] bg-[#0f1117]">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-amber-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p>Loading tournaments...</p>
      </div>
    </div>
  )
}

