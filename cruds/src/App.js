import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { NewPost } from './components/NewPost';
import { PostProvider } from './components/PostProvider';
import { Posts } from './components/Posts';

function App() {
  return (
    <PostProvider>
    <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" component={Posts}/>
            <Route path="/posts/new" component={NewPost}/>
            <Route path="/posts/:id([0-9]+)?"/>
          </Routes>
        </div>
    </Router>
    </PostProvider>
  );
}

export default App;
