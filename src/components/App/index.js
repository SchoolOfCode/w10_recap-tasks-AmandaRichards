import "./App.css";
// import articles from "../../libs/articles";
import { FactList } from "../Facts/FactList";
import { CommentList } from "../Facts/CommentList";
import {HistoryList} from "../History/HistoryList";
import {HistoryCommentList} from "../History/CommentList"


function App() {
  return(
    <main className="App">
      <h1>Wiki Pigeon</h1>
      <FactList />
      <CommentList />
      <HistoryList />
      <HistoryCommentList />
    </main>
  )}
//   return (
//     <main className="App">
//       <h1>WikiPigeon</h1>
//       {articles.map((article) => {
//         return (
//           <article key={article.id} className="post">
//             <h2>{article.title}</h2>
//             {article.paragraphs.map((paragraph) => (
//               <p key={paragraph.id}>{paragraph.text}</p>
//             ))}
//             <button className="like-button">Like 👍</button>
//             <section className="comment-section">
//               {article.comments.map((comment) => {
//                 return (
//                   <div key={comment.id} className="comment">
//                     <h4>{comment.name} says:</h4>
//                     <p>{comment.text}</p>
//                   </div>
//                 );
//               })}
//             </section>
//           </article>
//         );
//       })}
//     </main>
//   );
// }

export default App;
