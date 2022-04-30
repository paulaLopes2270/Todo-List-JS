import { useState } from "react"
// components
import { Card } from "./Card"
import { Modal } from "./Modal"

export const Todo = () => {
  const [todoList, setTodoList] = useState([])
  const [modal, setModal] = useState({
    isShow: false
  })

  const addTodo = (currentTodo) => {
    setTodoList((todoList) => [...todoList, currentTodo])

    setModal({
      isShow: true,
      messageData: {
        title: "Todo adicionado!",
        message: `Um novo Todo foi adicionado!`
      }
    })
  }

  const deleteTodo = (index) => {
    setTodoList((todoList) => {
      const newTodolist = todoList.filter(
        (currentTodo, todoIndex) => index !== todoIndex
      )
      return newTodolist
    })

    setModal({
      isShow: true,
      messageData: {
        title: "Todo deletado!",
        message: `O todo da posição ${index} foi deletado`
      }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const { todo } = event.target
    const { value } = todo

    if (!!value) {
      addTodo(value)
      event.target.reset()
    } else {
      setModal({
        isShow: true,
        messageData: {
          title: "Campo vazio!",
          message: 'Favor verificar o campo de "Novo todo".'
        }
      })
    }
  }

  return (
    <section>
      <h1>Todo List</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Novo Todo" name="todo" />
        <input type="submit" value="Adicionar" />
      </form>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          margin: "50px 20px 30px"
        }}
      >
        {todoList.map((todo, index) => (
          <Card todo={todo} key={index} index={index} deleteTodo={deleteTodo} />
        ))}
      </div>
      <Modal
        isShow={modal.isShow}
        messageData={modal.messageData}
        hiddenModal={() => setModal({ ...modal, isShow: false })}
      />
    </section>
  )
}
