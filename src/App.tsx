import { AlertTriangle, Ban, Bell, CheckCheck, Info } from "lucide-react"
import Alert from "./Component/Alert/Alert"
import './index.css'

function App() {
  return (
    <section className="app">
      <Alert
        type="alert-default"
        icon={<Bell size={20} />}
        title='Upgrade your plan'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Tenetur facilis voluptates eum voluptas error cum possimus corporis molestiae ipsa! Eius.'
      />
      <Alert
        type={"alert-info"}
        icon={<Info size={20} />}
        title={"Note"}
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Tenetur facilis voluptates eum voluptas error cum possimus corporis molestiae ipsa! Eius.'
      />
      <Alert
        type={"alert-success"}
        icon={<CheckCheck size={20} />}
        title={"Your order has been processed"}
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Tenetur facilis voluptates eum voluptas error cum possimus corporis molestiae ipsa! Eius.'
      />
      <Alert
        type={"alert-error"}
        icon={<Ban size={20} />}
        title={"Something went wrong"}
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Tenetur facilis voluptates eum voluptas error cum possimus corporis molestiae ipsa! Eius.'
      />
      <Alert
        type={"alert-warning"}
        icon={<AlertTriangle size={20} />}
        title={"Tips & Tricks"}
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Tenetur facilis voluptates eum voluptas error cum possimus corporis molestiae ipsa! Eius.'
      />
    </section>
  )
}

export default App

