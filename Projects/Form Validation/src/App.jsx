// Using form is best for accessibility, but it does come with some caveats
// One issue is that the default behavior of the form is to refresh the page, and re-render the component
// This is avoided by using the onSubmit event handler on the form element, and calling event.preventDefault()
import { StateForm } from './StateForm';
import './styles.css';

export default function App() {
  return <StateForm />;
}
