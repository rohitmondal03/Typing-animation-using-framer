import "./App.css"
import AnimatedTextChars from "./components/AnimatedTextChars"
import AnimatedTextWords from "./components/AnimatedTextWords"


export default function App() {
  return (
    <div>
      <AnimatedTextChars text={`Hello how are you doing`} />
      <AnimatedTextWords text={`Animated events`} />
    </div>
  )
}