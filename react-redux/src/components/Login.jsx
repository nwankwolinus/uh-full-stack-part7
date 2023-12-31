import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { loginUser } from '../reducers/user'
import { Button, Input } from './styled'

import { useNotification } from '../hooks/index'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const notifyWith = useNotification()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      dispatch(loginUser({ username, password }))
    }  catch (e) {
      notifyWith('wrong username or password', 'error')
    }
  }

  return (
    <form id='login' onSubmit={handleSubmit} method='post' autoComplete='on' name='login'>
      <div>
        username
        <Input
          id="username"
          type="text"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        password
        <Input
          id="password"
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <Button id="login-button" type="submit">
        login
      </Button>
    </form>
  )
}

export default LoginForm