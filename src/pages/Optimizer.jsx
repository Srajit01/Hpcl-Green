import { optimizer } from "../config/boxConfig"



const Optimizer = () => {
  return (
    <div>
        {optimizer.map((config) => <div key={config.name}>{config.name}-{config.surname}</div>)}
    </div>
  )
}

export default Optimizer