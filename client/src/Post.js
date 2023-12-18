export default function Post({title,summary,content,cover,createdAt}){
    return (
      <main>
       
        <div className="post">
          <div className="image">
            <img
              src="https://imgs.search.brave.com/OP_Xmnn9vbqgPovJQ5zDxpNfczb6tF-INEzdC8-qZZ8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/aXN0b2NrcGhvdG8u/Y29tL3Jlc291cmNl/cy9pbWFnZXMvUGhv/dG9GVExQL05hdHVy/ZUxhbmRzY2FwZXMt/NTE5NzYwOTg0Lmpw/Zw"
              alt="Reload the Tab"
            />
          </div>

          <div className="texts">
            <h2>{title}</h2>
            <p className="info">
              <a className="author">Sam S</a>
              <time>{createdAt}</time>
            </p>
            <p className="summary">
             {summary}
            </p>
          </div>
        </div>
      </main>
    );
}