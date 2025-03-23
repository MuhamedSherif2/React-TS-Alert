import './index.scss'
import { X } from 'lucide-react';
import { ReactNode } from 'react';

interface IProps {
  type: string,
  icon: ReactNode,
  title: string,
  description: ReactNode
}
const Alert = ({ type, icon, title, description }: IProps) => {
  return (
    <div className={type}>
      <div className='content'>
        <div className='title'>
          {icon}
          <h1>{title}</h1>
        </div>
        <span>
          < X />
        </span>
      </div>
      <p>{description}</p>
    </div>
  )
}

export default Alert 