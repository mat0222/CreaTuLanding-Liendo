const ItemListError = ({ message }) => {
  return (
    <div className="text-center py-20 px-4">
      <div className="bg-red-500/10 border border-red-500/50 rounded-xl p-8 max-w-md mx-auto">
        <p className="text-xl text-red-400">{message}</p>
      </div>
    </div>
  )
}

export default ItemListError

