import style from "./style.css"
export const Card = ({ todo, deleteTodo, index }) => {
  const deleteSelf = () => {
    deleteTodo(index)
  }
  return (
    <div className="card">
      <span
        style={{
          flex: "1 1 100%",
          background: "#DDA0DD",
          padding: 5,
          color: "white"
        }}
      >
        {todo}
      </span>
      <button className="button" onClick={deleteSelf}>
        Delete
      </button>
    </div>
  )
}
