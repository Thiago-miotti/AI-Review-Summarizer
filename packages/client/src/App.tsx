// import ChatBot from './components/chat/ChatBot';
import ReviewList from './components/reviews/ReviewList';

function App() {
   return (
      <div className="p-4 h-screen">
         {/* <ChatBot /> */}
         <ReviewList productId={3} />
      </div>
   );
}

export default App;
